import { MarksmanTrooper } from "../data/NPOs";

const NPOCard = () => {
  return (
    <div className="column is-one-quarter">
      <div className="card has-background-light has-text-black">
        <header className="card-header">
          <p className="card-header-title has-text-black">
            Class: {MarksmanTrooper.name}
          </p>
        </header>
        <div className="card-content">
          <h3>Type: {MarksmanTrooper.level}</h3>
          <p>APL: {MarksmanTrooper.apl}</p>
          <p>Move:{MarksmanTrooper.move}"</p>
          <p>Save:{MarksmanTrooper.save}+</p>
          <p>Wounds: {MarksmanTrooper.wounds}</p>
          <br />
          <h3>Weapons: </h3>
          <ul>
            {MarksmanTrooper.weapon.map((item, index) => (
              <li key={index}>
                {item.name}    ATK:{item.atk}    HIT:{item.hit}   DMG:{item.dmg}    WR:{item.wr}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NPOCard;
