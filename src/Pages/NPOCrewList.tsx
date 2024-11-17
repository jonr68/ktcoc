import NPOCard from "../card/NPOCards";
import { Link, redirect } from "react-router-dom";
import { NPO } from "../data/NPO";

interface Props {
  npoCrew: NPO[];
  displayPlusMinus:boolean
}
const NPOCrewList = (props: Props) => {
  return (
    <>
      <div>
        <Link to="/">
          <button>Return Home </button>
        </Link>
      </div>

      <div> Selected NPOs </div>
      <div className="fixed-grid has-3-cols">
        <div className="grid">
          {props.npoCrew?.map((npo, index) => {
            return (
              <>
                <div key={index} className="cell">
                  <br />
                  <NPOCard npo={npo} displayPlusMinus={true} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NPOCrewList;
