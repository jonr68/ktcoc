import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bulma/css/bulma.css"
import { MarksmanTrooper } from "./data/NPOs";
import NPOCard from "./card/NPOCards";

// const BrawlerHeavy = BrawlervTrouper

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NPOCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
