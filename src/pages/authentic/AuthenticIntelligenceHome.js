import React from "react";
import Featured from "./components/Featured";
import Portfolio3 from "./components/Portfolio";
import Team from "./components/Team";
import Newsletter2 from "./components/Newsletter";
import Map from "./components/Map";
import Header6 from "./components/Header";
import SimpleSlider6 from "./components/Slider";
import Welcome6 from "./components/Welcome";
import About6 from "./components/About";
import Service6 from "./components/Service";
import Contact6 from "./components/Contact";
import Footer6 from "./components/Footer";

function Home6() {
  return (
    <>
      <div
        id="home"
        className="full-screen-block carousel-with-dots dotted-left"
      >
        <Header6 />
        <SimpleSlider6 />
      </div>
      <Welcome6 />
      <About6 />
      <Newsletter2 />
      <Service6 />
      <Featured />
      <Portfolio3 />
      <Team />
      <Contact6 />
      <Map />
      <Footer6 />
    </>
  );
}

export default Home6;
