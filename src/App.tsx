import AsSeen from "layouts/AsSeen";
import Hero from "layouts/Hero";
import React from "react";

function App() {
  return (
    <div>
      <div className="mb-50px">
        <Hero />
      </div>
      <div className="mb-100px">
        <AsSeen />
      </div>
    </div>
  );
}

export default App;
