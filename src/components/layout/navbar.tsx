
function Navbar () {

    return(
        <div className="flex bg-black w-full h-14 text-white justify-between border-red-200 border-b-2">
            <div className="flex h-full items-center w-1/6 justify-center text-xl">
                <img src="/public/bull.png" className="h-7 w-7 mr-2" ></img>
                CryptoEvent
            </div>

            <div className="w-2/6 flex justify-between items-center px-14 text-sm">
                <div>
                    Enter An Event
                </div>
                <div>
                    Reserve Spot
                </div>
                <div>
                    About Me
                </div>
                <div>
                    Home
                </div>
            </div>
        </div>
    )
}

export default Navbar 