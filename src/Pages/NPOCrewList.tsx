import NPOCard from "../card/NPOCards";
import { redirect } from "react-router-dom";
import { NPO } from "../data/NPO";

interface Props {
  npoCrew: NPO[];
}
const NPOCrewList = (props: Props) => {
  return (
    <>
      <div> Selected NPOs </div>
      <div className="fixed-grid has-3-cols">
        <div className="grid">
          {props.npoCrew?.map((npo, index) => {
            return (
              <>
                <div key={index} className="cell">
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

export default NPOCrewList;
