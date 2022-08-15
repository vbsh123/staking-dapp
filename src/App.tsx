import CreateEventPage from "./components/create-event/create-event-page"
import HomePage from "./components/home/home-page"
import Navbar from "./components/layout/navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css"
import 'react-toastify/dist/ReactToastify.css';
import EnterEventPage from "./components/enter-event/enter-event-page";

function App() {
  return (
    <div className="flex w-full h-full flex-col">
      <Navbar />
      <div className="bg-black h-full w-full">
      <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<HomePage />} />
          <Route path="create" element={<CreateEventPage />} />
          <Route path="enter" element={<EnterEventPage />} />          
        </Route>
      </Routes>
    </BrowserRouter>
      </div>
    </div>
  )
}

export default App
