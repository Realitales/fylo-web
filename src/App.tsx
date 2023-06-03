import React from "react";
import Landing from "./pages/Landing";
import Perks from "./pages/Perks";
import Productive from "./pages/Productive";
import Feedback from "./pages/Feedback";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Landing />
      <Perks />
      <Productive />
      <Feedback />
      <Footer />
    </>
  );
};

export default App;
