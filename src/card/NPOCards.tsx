import { MarksmanTrooper } from "../data/NPOs";

const NPOCard = () => {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">Name: {MarksmanTrooper.name}</p>
        {/* <p>Name: {MarksmanTrooper.name}<p>
        <h3>Size:{MarksmanTrooper.level}</h3>
        <p>APL: {MarksmanTrooper.apl}</p>
        <p>Move:{MarksmanTrooper.move}"</p>
        <p>Save:{MarksmanTrooper.save}+</p>
        <p>Wounds: {MarksmanTrooper.wounds}</p>
        <ul>
          {MarksmanTrooper.weapon.map((item, index) => (
            <li key={index}>
              {item.name} ATK: {item.atk} HIT: {item.hit} DMG: {item.dmg}
              WR: {item.wr}
            </li> */}
        {/* ))} */}
        {/* </ul> */}
      </header>
    </div>
  );
};

export default NPOCard;
