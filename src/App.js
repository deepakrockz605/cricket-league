import React from "react";
import "./App.scss";
import RestrictedContainer from "./Components/RestrictedContainer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <RestrictedContainer />
      </div>
    </div>
  );
}

export default App;
