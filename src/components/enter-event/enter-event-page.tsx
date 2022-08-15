import EventCard from "./event-card/event-card"

function EnterEventPage() {

    return(
        <div className="w-1/6 h-1/3">
            <EventCard eventDate={new Date()} eventName="The Best Event Ever" maximumParticipants={10} isClosed={false}></EventCard>
        </div>
    )
}

export default EnterEventPage