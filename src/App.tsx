import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrawlervTrouper, BrawlervHeavy } from "./data/NPOs";

// const BrawlerHeavy = BrawlervTrouper

function App() {
  return (<>
    <div className="App">
      <div>
      <h1>Name: {BrawlervTrouper.name}</h1>
      <h2>Size:{BrawlervTrouper.level}</h2>
      <p>APL: {BrawlervTrouper.apl}</p>
      <p>Move:{BrawlervTrouper.move}</p>
      <p>Save:{BrawlervTrouper.save}</p>
      <p>Wounds: {BrawlervTrouper.wounds}</p>
      </div>
      <div>
      <h1>Name: {BrawlervHeavy.name}</h1>
      <h2>Size:{BrawlervHeavy.level}</h2>
      <p>APL: {BrawlervHeavy.apl}</p>
      <p>Move:{BrawlervHeavy.move}</p>
      <p>Save:{BrawlervHeavy.save}</p>
      <p>Wounds: {BrawlervHeavy.wounds}</p>
      </div>

      
      
    </div></>
  );
}

export default App;
