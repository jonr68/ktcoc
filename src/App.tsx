import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bulma/css/bulma.css"
import { MarksmanTrooper } from "./data/NPOs";
import NPOCard from "./card/NPOCards";
import Dashboard from "./Pages/Dashboard";

// const BrawlerHeavy = BrawlervTrouper

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
