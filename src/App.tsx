import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import "bulma/css/bulma.css";
import { MarksmanTrooper } from "./data/NPOs";
import NPOCard from "./card/NPOCards";
import Dashboard from "./Pages/Dashboard";
import NPOCrewList from "./Pages/NPOCrewList";
import { useState } from "react";
import { NPO } from "./data/NPO";

// const BrawlerHeavy = BrawlervTrouper

function App() {

  const addToNPOCrew = (newNPO: NPO) => {
    setNPOCrew([...NPOCrew, newNPO]);
  };

  const removeFromNPOCrew = (indexToRemove: number) => {
    setNPOCrew(NPOCrew.filter((_, index) => index !== indexToRemove));
  };



  const [NPOCrew, setNPOCrew] = useState<NPO[]>([]);

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Dashboard npoCrew={NPOCrew} addToNPOCrew={addToNPOCrew}/>} />
          <Route path="/npocrew" element={<NPOCrewList />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
