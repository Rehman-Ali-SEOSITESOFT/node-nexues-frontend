import React from "react";
import Header1 from "./components/Header";
import Welcome1 from "./components/Welcome";
import About1 from "./components/About";
import Service1 from "./components/Service";
import Portfolio1 from "./components/Portfolio";
import Contact1 from "./components/Contact";
import Newsletter1 from "./components/Newsletter";
import Map from "./components/Map";
import Footer1 from "./components/Footer";
import SimpleSlider1 from "./components/Slider";
function Home1() {
  return (
    <>
      <div id="home" className="full-screen-block">
        <Header1 />
        <SimpleSlider1 />
      </div>
      <Welcome1 title={"Home"} />
      <About1 />
      <Service1 />
      <Portfolio1 />
      <Contact1 />
      <Newsletter1 />
      <Map />
      <Footer1 />
    </>
  );
}

export default Home1;
