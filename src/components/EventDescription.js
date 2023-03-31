import "./Events.css";

function SupportInfo(props) {
  if (props.ticketlink !=undefined && props.bands != undefined) {
    return (
      <div class="support-info">
        <p class="supporttext">{props.bands}</p>
        <a class="supporttext2" href={props.ticketlink}>Tickets</a>
      </div>
    )
  } 
  else if (props.bands != undefined && props.ticketlink == undefined) {
    return (
      <div class="support-info">
        <p class="supporttext">{props.bands}</p>
      </div>
    )
  }
  else if (props.ticketlink != undefined && props.bands == undefined) {
    return (
      <div class="support-info">
        <a class="supporttext" href={props.ticketlink}>Tickets</a>
      </div>
    )
  }
  else if (props.ticketlink == undefined && props.bands == undefined) {
    return (
      <div class="empty-info"></div>
    )
  }
}

export function EventDescription(props) {

  return(
    <div class="event">
      <div class="main-info">
        <b class="eventdate">{props.date} </b>
        <i>{props.venue}</i>
      </div>
      <SupportInfo bands={props.bands} ticketlink={props.ticketlink} />
    </div>
  )
}

export default EventDescription