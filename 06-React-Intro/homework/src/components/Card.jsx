import React from "react";

export default function Card(props) {
  // acá va tu código
  let { name, max, min, img, onClose } = props;
  return (
    <div>
      <button onClick={onClose}> X </button>
      <h2>{name}</h2>
      <div>
        <h5>Max</h5>
        <h5>{`${max}°`}</h5>
        <h5>Min</h5>
        <h5>{`${min}°`}</h5>
        <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt="Logo"
        />
      </div>
    </div>
  );
}
