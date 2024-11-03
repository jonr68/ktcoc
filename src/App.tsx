import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import "bulma/css/bulma.css";
import { MarksmanTrooper } from "./data/NPOs";
import NPOCard from "./card/NPOCards";
import Dashboard from "./Pages/Dashboard";
import NPOCrewList from "./Pages/NPOCrewList";

// const BrawlerHeavy = BrawlervTrouper

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/npocrew" element={<NPOCrewList />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
