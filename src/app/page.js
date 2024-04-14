// "use client"
import Footer from "./components/Footer";
import Header from "./components/Header";
import dynamic from 'next/dynamic';
import Events from "./components/events";
// const Events = dynamic(() => import("./components/events"));
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
