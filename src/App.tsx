import { Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import "bulma/css/bulma.css";
import Dashboard from "./Pages/Dashboard";
import NPOCrewList from "./Pages/NPOCrewList";
import { useState } from "react";
import { NPO } from "./data/NPO";

function App() {
  const [NPOCrew, setNPOCrew] = useState<NPO[]>([]);

  const addToNPOCrew = (newNPO: NPO) => {
    setNPOCrew([...NPOCrew, newNPO]);
    console.log(NPOCrew);
  };

  const removeFromNPOCrew = (indexToRemove: number) => {
    setNPOCrew(NPOCrew.filter((_, index) => index !== indexToRemove));
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
