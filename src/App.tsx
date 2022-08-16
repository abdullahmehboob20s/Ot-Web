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

function App() {
  return (
    <div>
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
      <div className="mb-200px">
        <AboutUs />
      </div>
      <div className="mb-200px">
        <LookAtPerson />
      </div>
      <div className="mb-200px">
        <PropertyOwnership />
      </div>
      <div className="mb-200px">
        <Tokenomics />
      </div>
      <div className="mb-200px">
        <Roadmap />
      </div>
      <div className="mb-200px">
        <Team />
      </div>
      <div className="mb-100px">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
