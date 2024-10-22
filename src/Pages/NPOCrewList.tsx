import NPOCard from "../card/NPOCards";
import { redirect } from "react-router-dom";

interface NPOCrewListProps {
    npoCrew: NPO[];
  }
  
const NPOCrewList = () => {

    return(
        <>
        <div className="fixed-grid has-3-cols">
          <div className="grid">
            {NPOList?.map((npo, index) => {
              return (
                <div key={index} className="cell">
                  <NPOCard npo={npo} />
                </div>
              );
            })}
          </div>
        </div>
      </>
  
    )
}

export default NPOCrewList