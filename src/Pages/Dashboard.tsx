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
import { useNavigate } from "react-router-dom";

interface Props {
  npoCrew: NPO[];
  addToNPOCrew: (npo: NPO) => void;
  removeFromNPOCrew: (indeex: number) => void;
}

const Dashboard = (props: Props) => {
  const NPOList = [
    BrawlerTrooper,
    BrawlervTough,
    BrawlervHeavy,
    MarksmanTrooper,
    MarksmanWarrior,
    MarksmanHeavy,
  ];

  const navigate = useNavigate();

  // const Redirect = () => {
  //   navigate("/npocrew", (npoCrew = { NPOCrew }));
  // };

  // let totalWounds = NPOCrew.reduce((previousValue, currentValue) => {
  //   return previousValue + currentValue.wounds;
  // }, 0);

  return (
    <>
      <section>
        <div> Selected NPOs </div>
        <ol>
          {props.npoCrew.map((crew: NPO) => (
            <li key={crew.name}>
              {crew.name} {crew.level}
            </li>
          ))}
        </ol>
        {/* <div> Total Wounds: {totalWounds}</div> */}
      </section>
      <div className="fixed-grid has-3-cols">
        <div className="grid">
          {NPOList?.map((npo, index) => {
            return (
              <>
                <div key={index} className="cell">
                  <button key={index} onClick={() => props.addToNPOCrew(npo)}>
                    Add {npo.name} {npo.level} to Crew
                  </button>
                  <br />
                  <button
                    key={index}
                    onClick={() => props.removeFromNPOCrew(index)}
                  >
                    Remove
                  </button>
                  <NPOCard npo={npo} />
                </div>
                {/* <div>
                  <button onClick={Redirect}> Finalize Crew </button>
                </div> */}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
