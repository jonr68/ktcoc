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
import { Link } from "react-router-dom";

interface Props {
  npoCrew: NPO[];
  addToNPOCrew: (npo: NPO) => void;
  removeFromNPOCrew: (indeex: string) => void;
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

  return (
    <>
      <section>
        <div> Selected NPOs </div>
        <ol>
          {props.npoCrew.map((crew: NPO) => (
            <li key={crew.name}>
              {crew.name} {crew.level}
              <button
                className="button is right"
                onClick={() => props.removeFromNPOCrew(crew.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ol>

      </section>
      <div>
        <Link to="/npocrew">
          <button>Go to your crew</button>
        </Link>
      </div>

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
