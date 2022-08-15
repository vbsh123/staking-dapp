
function ExplanationCard() {
    
    return (
        <div className="h-full w-full">
        <div className="flex h-1/2 w-full items-end text-white">
            <div className="flex flex-col w-full h-52 text-black bg-red-200 mx-10 rounded-xl border-2 border-red-200 p-2 pt-5">
                <div className="text-3xl">
                    Event Managing Using The Blockchain.
                </div>
                <div className="text-sm p-2 pt-8 w-3/4">
                    Use the blockchain to create immutable event reservation system with money stored for people who reserve their spot.
                    Users will get their money back if they show up to the event.
                </div>
            </div>
        </div>
        </div>
    )
}

export default ExplanationCard;