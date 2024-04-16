// "use client"
import Footer from "./components/Footer";
import Header from "./components/Header";
import dynamic from 'next/dynamic';
// import Events from "./components/events";
import Dropdown from "./components/Dropdown";
// import "./globals.css"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const Events = dynamic(() => import("./components/events"));
const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <Events />
      <Footer />
    </>
  );
};

export default App;
