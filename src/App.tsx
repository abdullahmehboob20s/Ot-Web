import AsSeen from "layouts/AsSeen";
import Hero from "layouts/Hero";
import RealWorld from "layouts/RealWorld";
import React from "react";

function App() {
  return (
    <div>
      <div className="mb-50px">
        <Hero />
      </div>
      <div className="mb-200px">
        <AsSeen />
      </div>
      <div className="mb-100px">
        <RealWorld />
      </div>
    </div>
  );
}

export default App;
