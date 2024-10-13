import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrawlervTrouper } from "./data/NPOs";

// const BrawlerHeavy = BrawlervTrouper

function App() {
  return (
    <div className="App">
      <h1>Name: {BrawlervTrouper.name}</h1>
      <h2>Size:{BrawlervTrouper.level}</h2>
      <p>APL: {BrawlervTrouper.apl}</p>
      <p>Move:{BrawlervTrouper.move}</p>
      <p>Save:{BrawlervTrouper.save}</p>
      <p>Wounds: {BrawlervTrouper.wounds}</p>
      
    </div>
  );
}

export default App;
