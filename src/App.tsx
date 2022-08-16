import AsSeen from "layouts/AsSeen";
import Hero from "layouts/Hero";
import RealWorld from "layouts/RealWorld";
import Rewards from "layouts/Rewards";

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
    </div>
  );
}

export default App;
