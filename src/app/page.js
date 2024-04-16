// "use client"
import Footer from "./components/Footer";
import Header from "./components/Header";
import dynamic from 'next/dynamic';
// import Events from "./components/events";
import Dropdown from "./components/Dropdown";
// import "./globals.css"
const Events = dynamic(() => import("./components/events"));
const App = () => {
  return (
    <>
      <Header />
     
      <Events />
      <Footer />
    </>
  );
};

export default App;
