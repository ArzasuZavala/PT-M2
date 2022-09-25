import React from "react";
import Card from "./Card";
import style from "../Styles/Cards.module.css";

export default function Cards({ cities }) {
  // acá va tu código
  // tip, podés usar un map
  if (!cities) return <h3>Not Cities Found...</h3>;
  return (
    <div className={style.cardsFlex} id="buscame">
      {cities &&
        cities.map((city) => {
          if (city.name === "Denver") return "not city found";
          return (
            <Card
              key={city.id}
              max={city.main.temp_max}
              min={city.main.temp_min}
              name={city.name}
              img={city.weather[0].icon}
              onClose={() => alert(city.name)}
            />
          );
        })}
    </div>
  );
}
