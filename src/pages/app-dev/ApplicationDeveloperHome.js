import React from "react";
import Header3 from "./components/Header";
import SimpleSlider3 from "./components/Slider";
import Welcome3 from "./components/Welcome";
import About3 from "./components/About";
import Service3 from "./components/Service";
import Featured from "./components/Featured";
import Portfolio3 from "./components/Portfolio";
import Team from "./components/Team";
import Contact3 from "./components/Contact";
import Newsletter2 from "./components/Newsletter";
import Map from "./components/Map";
import Footer3 from "./components/Footer";

function Home3() {
  return (
    <>
      <div
        id="home"
        className="full-screen-block carousel-with-dots dotted-left"
      >
        <Header3 />
        <SimpleSlider3 />
      </div>
      <Welcome3 />
      <About3 />
      <Newsletter2 />
      <Service3 />
      <Featured />
      <Portfolio3 />
      <Team />
      <Contact3 />
      <Map />
      <Footer3 />
    </>
  );
}

export default Home3;
