import { useState } from "react";
import NPOCard from "../card/NPOCards";
import { NPO } from "../data/NPO";

import {
  BrawlerTrooper,
  BrawlervTough,
  BrawlervHeavy,
  MarksmanTrooper,
  MarksmanWarrior,
  MarksmanHeavy,
} from "../data/NPOs";

const Dashboard = () => {
  const NPOList = [
    BrawlerTrooper,
    BrawlervTough,
    BrawlervHeavy,
    MarksmanTrooper,
    MarksmanWarrior,
    MarksmanHeavy,
  ];

  const [NPOCrew, setNPOCrew] = useState([])

  const addNPOs = () => {
    setNPOCrew([...NPOCrew, npo]);
  };

  return (
    <>
    <div>{NPOCrew}</div>
      <div className="fixed-grid has-3-cols">
        <div className="grid">
          {NPOList?.map((npo, index) => {
            return (
              <div key={index} className="cell">
                <NPOCard npo={npo} />
                <button className="button is-white" onClick={addNPOs}>Add</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
