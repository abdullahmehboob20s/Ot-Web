import AboutUs from "layouts/AboutUs";
import AsSeen from "layouts/AsSeen";
import Hero from "layouts/Hero";
import LookAtPerson from "layouts/LookAtPerson";
import RealWorld from "layouts/RealWorld";
import Rewards from "layouts/Rewards";
import PropertyOwnership from "layouts/PropertyOwnership";
import Tokenomics from "layouts/Tokenomics";
import Roadmap from "layouts/Roadmap";
import Team from "layouts/Team";
import Calculator from "layouts/Calculator";
import Partners from "layouts/Partners";
import Footer from "layouts/Footer";
import Navbar from "layouts/Navbar";

function App() {
  return (
    <div id="home">
      <Navbar />
      <div className="mb-50px">
        <Hero />
      </div>
      <div className="mb-200px">
        <AsSeen />
      </div>
      <div className="mb-200px">
        <RealWorld />
      </div>
      <div className="mb-200px">
        <Rewards />
      </div>
      <div className="mb-200px" id="aboutus">
        <AboutUs />
      </div>
      <div className="mb-200px">
        <LookAtPerson />
      </div>
      <div className="mb-200px">
        <PropertyOwnership />
      </div>
      <div className="mb-200px" id="tokenomics">
        <Tokenomics />
      </div>
      <div className="mb-200px" id="roadmap">
        <Roadmap />
      </div>
      <div className="mb-200px">
        <Team />
      </div>
      <div className="mb-100px" id="calculator">
        <Calculator />
      </div>
      <div className="mb-200px">
        <Partners />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
