
function HomeHeadline() {

    return (
        <div className="flex h-full justify-center items-center text-white flex-col">
            <div className="ml-20">
            <div className="text-6xl font-normal w-3/4">
                Supercharge Your Events
            </div>
            <div className="text-xs font-extralight mt-3">
                Using blockchain technology, you can ensure peoples arrival to the event easily.
            </div>
            <div className="mt-10">
                <button className="bg-red-200 text-xs w-24 h-10 text-black rounded-md">
                    Get Started
                </button>
            </div>
            <div className="text-xs text-opacity-25 font-extralight text-red-200 mt-20">
                TECHNOLOGIES USED
            </div>
            </div>
        </div>
    )
}

export default HomeHeadline;