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
import { log } from "console";

const Dashboard = () => {
  const NPOList = [
    BrawlerTrooper,
    BrawlervTough,
    BrawlervHeavy,
    MarksmanTrooper,
    MarksmanWarrior,
    MarksmanHeavy,
  ];

  const [NPOCrew, setNPOCrew] = useState<NPO[]>([]);

  const addToNPOCrew = (newNPO: NPO) => {
    setNPOCrew([...NPOCrew, newNPO]);
  };

  let totalWounds = NPOCrew.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.wounds;
  }, 0);

  return (
    <>
      <section>
        <div> Selected NPOs </div>
        <ol>
          {NPOCrew.map((crew) => (
            <li key={crew.name}>
              {crew.name} {crew.level}
            </li>
          ))}
        </ol>
        <div> Total Wounds: {totalWounds}</div>
      </section>
      <div className="fixed-grid has-3-cols">
        <div className="grid">
          {NPOList?.map((npo, index) => {
            return (
              <>
                <div key={index} className="cell">
                  <button key={index} onClick={() => addToNPOCrew(npo)}>
                    Add {npo.name} {npo.level} to Crew
                  </button>
                  <NPOCard npo={npo} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
