import React from "react";
import "./App.css";
import BTLayout from "./Components/BTLayOut/BTLayout";
import CardRCC from "./Components/CardRCC";
import CardRFC from "./Components/CardRFC";
import DataBinding from "./Components/DataBinding";
import HandleEvent from "./Components/HandleEvent";

function App() {
  return (
    <div className="App">
      {/* <BTLayout/> */}
      {/* <DataBinding/> */}
      <HandleEvent />
      {/* <CardRFC />
      <h3>Cybersoft bc23</h3>
      <CardRCC />
      <CardRCC />
      <CardRCC />
      <CardRCC />
      <CardRCC />
      <CardRCC /> */}
    </div>
  );
}

export default App;
