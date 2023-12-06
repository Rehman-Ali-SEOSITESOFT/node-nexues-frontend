import React from "react";
import Portfolio2 from "./components/Portfolio";
import Blogs2 from "./components/Blogs/Blogs2";
import Clients from "./components/Clients";
import Newsletter2 from "./components/Newsletter";
import Map from "./components/Map";
import bg_vide from "../../videos/bigway.mp4";
import SimpleSlider5 from "./components/Slider";
import Welcome5 from "./components/Welcome";
import About5 from "./components/About";
import Service5 from "./components/Service";
import Contact5 from "./components/Contact";
import Footer5 from "./components/Footer";
import Header5 from "./components/Header";
function Home5() {
  return (
    <>
      <div id="home" className="full-screen-block">
        <video autoPlay loop muted className="bg_video">
          <source src={bg_vide} type="video/mp4"></source>
        </video>
        <div className="bg-inner-dark"></div>
        <Header5 />
        <SimpleSlider5 />
      </div>
      <Welcome5 />
      <About5 />
      <Service5 />
      <Newsletter2 />
      <Portfolio2 />
      <Blogs2 />
      <Clients />
      <Contact5 />
      <Map />
      <Footer5 />
    </>
  );
}

export default Home5;
