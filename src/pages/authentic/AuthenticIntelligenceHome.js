import React from "react";
import Featured from "../../components/Featured/Featured6";
import Portfolio3 from "../../components/Portfolio/Portfolio6";
import Team from "../../components/Team";
import Newsletter2 from "../../components/Newsletter/Newsletter6";
import Map from "../../components/Map";
import Header6 from "../../components/Header/Header6";
import SimpleSlider6 from "../../components/Sliders/Slider6";
import Welcome6 from "../../components/Welcome/Welcome6";
import About6 from "../../components/About/About6";
import Service6 from "../../components/Service/Service6";
import Contact6 from "../../components/Contact/Contact6";
import Footer6 from "../../components/Footer/Footer6";

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
