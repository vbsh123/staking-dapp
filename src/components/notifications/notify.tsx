import { ToastContainer } from "react-toastify";

function Notifier() {
    return (
        <ToastContainer 
        position="top-left"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        
        />
    )
}

export default Notifier;