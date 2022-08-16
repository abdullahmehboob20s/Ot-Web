import AboutUs from "layouts/AboutUs";
import AsSeen from "layouts/AsSeen";
import Hero from "layouts/Hero";
import LookAtPerson from "layouts/LookAtPerson";
import RealWorld from "layouts/RealWorld";
import Rewards from "layouts/Rewards";
import PropertyOwnership from "layouts/PropertyOwnership";

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
    </div>
  );
}

export default App;
