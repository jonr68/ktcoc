import { BrawlervHeavy } from "../data/NPOs";

const NPOCard = () => {
  return (
    <div className="column is-one-quarter">
      <div className="card has-background-light has-text-black">
        <header className="card-header">
          <p className="card-header-title has-text-black">
            Class: {BrawlervHeavy.name}
          </p>
        </header>
        <div className="card-content">
          <h3>Type: {BrawlervHeavy.level}</h3>
          <p>APL: {BrawlervHeavy.apl}</p>
          <p>Move:{BrawlervHeavy.move}"</p>
          <p>Save:{BrawlervHeavy.save}+</p>
          <p>Wounds: {BrawlervHeavy.wounds}</p>
          <br />
          <h3>Weapons: </h3>
          <div className="grid">
            {BrawlervHeavy.weapon.map((item, index) => (
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
