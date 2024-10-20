import NPOCard from "../card/NPOCards";

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

  return (
    <>
      <div
        key={index}
        className="column is-one-quarter"
        data-test="Click for Dataslate"
      >
        <NPOCard npo={NPOList} />
      </div>
    </>
  );
};

export default Dashboard;
