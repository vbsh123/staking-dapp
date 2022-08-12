import EnterEventPage from "./components/create-event/create-event-page"
import HomePage from "./components/home/home-page"
import Navbar from "./components/layout/navbar"
import "react-datepicker/dist/react-datepicker.css"

function App() {

  return (
    <div className="flex w-full h-full flex-col">
      <Navbar />
      <div className="bg-black h-full w-full">
        <EnterEventPage></EnterEventPage>
      </div>
    </div>
  )
}

export default App
