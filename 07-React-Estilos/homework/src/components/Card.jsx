import React from "react";
import style from "../Styles/Card.module.css";

export default function Card(props) {
  // acá va tu código
  let { name, max, min, img, onClose } = props;
  let celcius = (temp) => `${temp - 273.15}°`;
  return (
    <div className={style.card}>
      <button className={style.btn} onClick={onClose}>
        X
      </button>
      <h2>{name}</h2>
      <div className={style.text}>
        <div className={style.grade}>
          <h2>Max</h2>
          <br />
          <h4>{`${celcius(max)}`}</h4>
        </div>
        <div className={style.grade}>
          <h2>Min</h2>
          <br />
          <h4>{`${celcius(min)}`}</h4>
        </div>
        <div className={style.icon}>
          <img
            src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
}
