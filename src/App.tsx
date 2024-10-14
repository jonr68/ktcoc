import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrawlerTrooper } from "./data/NPOs";

// const BrawlerHeavy = BrawlervTrouper

function App() {
  return (
    <>
      <div className="App">
        <div>
          <h1>Name: {BrawlerTrooper.name}</h1>
          <h3>Size:{BrawlerTrooper.level}</h3>
          <p>APL: {BrawlerTrooper.apl}</p>
          <p>Move:{BrawlerTrooper.move}"</p>
          <p>Save:{BrawlerTrooper.save}+</p>
          <p>Wounds: {BrawlerTrooper.wounds}</p>
          <h2>Weapon: {BrawlerTrooper.weapon.name}</h2>
          <p>ATK: {BrawlerTrooper.weapon.atk}</p>
          <p>HIT: {BrawlerTrooper.weapon.hit}+</p>
          <p>WR: {BrawlerTrooper.weapon.wr}</p>
        </div>
        {/* <div>
      <h1>Name: {BrawlervHeavy.name}</h1>
      <h2>Size:{BrawlervHeavy.level}</h2>
      <p>APL: {BrawlervHeavy.apl}</p>
      <p>Move:{BrawlervHeavy.move}</p>
      <p>Save:{BrawlervHeavy.save}</p>
      <p>Wounds: {BrawlervHeavy.wounds}</p>
      </div> */}
      </div>
    </>
  );
}

export default App;
