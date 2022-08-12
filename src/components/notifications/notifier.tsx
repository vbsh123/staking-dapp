import { ToastContainer } from "react-toastify";
import './notifier.css';

function Notifier() {
    return (
        <ToastContainer
        theme="dark"
        progressClassName="toastProgress"
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