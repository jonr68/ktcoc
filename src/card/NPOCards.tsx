import { NPO } from "../data/NPO";
import { BrawlervHeavy } from "../data/NPOs";

interface NPOCardProps {
  npo: NPO;
}

const NPOCard = (props: NPOCardProps) => {
  const { name, level, apl, move, save, woundsRemaining, totalWounds, weapon } =
    props.npo;

  // const lowerWoundCount = (woundsRemaining) => {
  //   woundsRemaining - 1;
  // };

  return (
    <div className="column is-one-half              ">
      <div className="card has-background-light has-text-black">
        <header className="has-background-navbar-background-color">
          <p className="card-header-title has-text-black">Class: {name}</p>
        </header>
        <div className="card-content">
          <div className="flex-grid">
            <div className="grid">
              <div className="cell">Type: {level}</div>
              <div className="cell">APL: {apl}</div>
              <div className="cell">Move:{move}"</div>
              <div className="cell">Save:{save}+</div>
              <div className="cell">
                Wounds Remainig: <button className="button is-small">-</button>
                {woundsRemaining} <button className="button is-small">+</button>
              </div>
              <div className="cell">Wounds: {totalWounds}</div>
              <br />
            </div>
            <h3>Weapons: </h3>
            <div className="flex-grid">
              <div className="grid">
                {weapon.map((npo, index) => (
                  <div key={index}>
                    {npo.name} <div className="cell">ATK: {npo.atk} </div>{" "}
                    <div className="cell"> HIT:{npo.hit}</div>{" "}
                    <div className="cell"> DMG:{npo.dmg}</div>{" "}
                    <div className="cell"> WR:{npo.wr}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NPOCard;
