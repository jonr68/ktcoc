import { NPO } from "../data/NPO";
import { BrawlervHeavy } from "../data/NPOs";

interface NPOCardProps {
  npo: NPO;
}

const NPOCard = (props: NPOCardProps) => {
  const { name, level, apl, move, save, wounds, weapon } = props.npo;
  return (
    <div className="column is-one-quarter">
      <div className="card has-background-light has-text-black">
        <header className="card-header">
          <p className="card-header-title has-text-black">Class: {name}</p>
        </header>
        <div className="card-content">
          <h3>Type: {level}</h3>
          <p>APL: {apl}</p>
          <p>Move:{move}"</p>
          <p>Save:{save}+</p>
          <p>Wounds: {wounds}</p>
          <br />
          <h3>Weapons: </h3>
          <div className="grid">
            {weapon.map((item, index) => (
              <li key={index}>
                {item.name} <div className="cell">ATK: {item.atk} </div>{" "}
                <div className="cell"> HIT:{item.hit}</div>{" "}
                <div className="cell"> DMG:{item.dmg}</div>{" "}
                <div className="cell"> WR:{item.wr}</div>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NPOCard;
