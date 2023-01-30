import React, { useState, useEffect } from "react";

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const generateRandomCharacter = (goal) => {
  const charactersLength = characters.length;

  const generate = () => {
    return characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  let rand = generate();

  while (rand === goal) {
    rand = generate();
  }

  return rand;
}

const generateRandomCharArray = (length, goalArray) => {
    let result = [];
    for ( let i = 0; i < length; i++ ) {
      result.push(generateRandomCharacter(goalArray[i]));
    }

    return result;
}

const computeGoalTextArray = (length, text) => {
  const goal = []; 

  for (let i = 0; i < length; i++) {
    goal.push(text[i % text.length]);
  }

  return goal;

}

const copmuteRemainingIndices = (currentCharacters, goalTextArray) => {
  const remainingIndices = [];

  for (let i = 0; i < currentCharacters.length; i++) {
    if (currentCharacters[i].normalize() !== goalTextArray[i].normalize()) {
      remainingIndices.push(i);
    }
  }
  
  return remainingIndices;
}

const updateText = (currentCharacters, goalTextArray, speed, glitchChance) => {
  const remainingIndices = copmuteRemainingIndices(currentCharacters, goalTextArray);

  // if (remainingIndices.length === 0) {
  //   return goalTextArray;
  // }

  const indicesToFix =  remainingIndices.sort(() => Math.random() - Math.random()).slice(0, Math.min(speed, remainingIndices.length))

  
  let chars = (currentCharacters.length !== 0 ? currentCharacters : generateRandomCharArray(goalTextArray.length, goalTextArray));

  const output = goalTextArray.map((goalChar, i) => {

    const glitch = Math.random() <= glitchChance;

    if (!glitch && (indicesToFix.includes(i) || chars[i].normalize() === goalChar.normalize())) {
      return goalTextArray[i];
    } else {
      return generateRandomCharacter(goalChar);
    }
  });

  return output;
}

const isGoal = (curr, goal) => {
  if (curr.length !== goal.length) {
    return false;
  }

  for (let i = 0; i < goal.length; i++) {
    if (curr[i].normalize() !== goal[i].normalize()) {
      return false;
    }
  }

  return true;
}


export const MatrixText = (props) => {
  const {
    text,
    length,
    speed = 1,
    glitchChance = 0.001,
    className,
    href
  } = props;


  const goalTextArray = computeGoalTextArray(length, text);
  const [currentCharacters, setCurrentCharacters] = useState([]);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    setCurrentCharacters(generateRandomCharArray(length, goalTextArray));
    setInitialized(true)
  }, [length, text])
  
  useEffect(() => {

    // if (!isGoal(currentCharacters, goalTextArray)) {
      const interval = setInterval(() => {
        if (initialized) {
          setCurrentCharacters(updateText(currentCharacters, goalTextArray, speed, glitchChance));
        }
  
      }, 75);
  
    
      return () => clearInterval(interval);
  
    //}
  }, [initialized, text, length, currentCharacters, speed]);


  return <div className={className}><a href={href} target="_blank"><span>{currentCharacters?.join('')}</span></a></div>
}