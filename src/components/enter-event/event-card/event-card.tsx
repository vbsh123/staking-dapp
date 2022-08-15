import EventClosed from "./event-closed"
import EventOpen from "./event-open"

type Props = {
    eventName: string,
    eventDate: Date,
    maximumParticipants: number,
    isClosed: boolean
}

function EventCard({ eventName, eventDate, maximumParticipants, isClosed }: Props) {

    return (
        <div className="flex flex-col items-center w-full h-full border-2 border-red-100 rounded-xl text-white pt-2">
            <div className="font-bold text-xl">
            {eventName}
            </div>
            <div className="w-1/5 h-5">
                { isClosed ? <EventClosed></EventClosed> : <EventOpen></EventOpen> }
            </div>
            <div className="text-sm flex flex-row mt-10 px-2 font-light justify-between w-full">
                <div>
                        Event Date
                </div>
                <div>
                    {eventDate.toDateString()}
                </div>
            </div>

            <div className="text-sm flex flex-row mt-2 px-2 font-light justify-between w-full">
                <div>
                        Maximum Participants
                </div>
                <div>
                    {maximumParticipants}
                </div>
            </div>
            <button className="bg-red-200 text-sm w-11/12 h-8 text-black rounded-md justify-content">
                    Enter Event
            </button>
        </div>
    )
}

export default EventCard