import HomePage from "./components/home/home-page"
import Navbar from "./components/layout/navbar"

function App() {

  return (
    <div className="flex w-full h-full flex-col">
      <Navbar />
      <div className="bg-black h-full w-full">
        <HomePage></HomePage>
      </div>
    </div>
  )
}

export default App
