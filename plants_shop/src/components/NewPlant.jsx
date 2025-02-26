import "../styles/new-plants.css";
import NewPlantCard from "./NewPlantCard";
import data from "../data/newPlants";

export default function NewPlant() {
  const cards = data.map((item) => {
    return <NewPlantCard key={item.id} item={item} />;
  });

  return (
    <div className="section--wrapper">
      <div className="section--info">
        <div className="section--name">
          <p>New Plants</p>
        </div>
        <div className="section--text">
          <p>
            Bring nature inside and shop our big selections of fresh indoor
            plants including Instagram-worthy houseplants, pet-friendly plants,
            orchids and one-of-a-kind rare plants.
          </p>
        </div>
      </div>
      <div className="section--plants">{cards}</div>
    </div>
  );
}
