import CreateEventForm from "./create-event-form/form";

function EnterEventPage () {
    return (
        <div className="flex w-full h-3/4 flex-col items-center justify-center">
            <div className="text-white w-full h-full flex items-center justify-center">
                <CreateEventForm></CreateEventForm>
            </div>
        </div> 
    )
}

export default EnterEventPage;