import { Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import "bulma/css/bulma.css";
import Dashboard from "./Pages/Dashboard";
import NPOCrewList from "./Pages/NPOCrewList";
import { useState } from "react";
import { NPO } from "./data/NPO";
import { log } from "console";

function App() {
  const [NPOCrew, setNPOCrew] = useState<NPO[]>([]);

  const addToNPOCrew = (newNPO: NPO) => {
    const updatedNPO = { ...newNPO, id: crypto.randomUUID() };
    setNPOCrew((NPOCrew) => [...NPOCrew, updatedNPO]);
    console.log(NPOCrew);
  };

  const removeFromNPOCrew = (idToRemove: string) => {
    console.log(idToRemove);
    setNPOCrew((NPOCrew) => NPOCrew.filter((npo) => npo.id !== idToRemove));

    console.log(NPOCrew);
  };

  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                npoCrew={NPOCrew}
                addToNPOCrew={addToNPOCrew}
                removeFromNPOCrew={removeFromNPOCrew}
              />
            }
          />
          <Route path="/npocrew" element={<NPOCrewList />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
