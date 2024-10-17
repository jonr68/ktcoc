import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MarksmanTrooper } from "./data/NPOs";

// const BrawlerHeavy = BrawlervTrouper

function App() {
  return (
    <>
      <div className="App">
        <div>
          <h1>Name: {MarksmanTrooper.name}</h1>
          <h3>Size:{MarksmanTrooper.level}</h3>
          <p>APL: {MarksmanTrooper.apl}</p>
          <p>Move:{MarksmanTrooper.move}"</p>
          <p>Save:{MarksmanTrooper.save}+</p>
          <p>Wounds: {MarksmanTrooper.wounds}</p>
          <h3>Weapons</h3>
          <ul>
            {MarksmanTrooper.weapon.map((item, index) => (
              <li key={index}>
                {item.name} ATK: {item.atk} HIT: {item.hit} DMG: {item.dmg} WR:{" "}
                {item.wr}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
