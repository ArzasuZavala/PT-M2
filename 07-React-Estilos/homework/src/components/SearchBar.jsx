import React from "react";
import style from "../Styles/SearchBar.module.css";
export default function SearchBar({ onSearch }) {
  // acá va tu código
  return (
    <div className={style.container}>
      <input type="text" placeholder="City..." className={style.inp} />
      <button onClick={() => onSearch()} className={style.btn}>
        {" "}
        Add{" "}
      </button>
    </div>
  );
}
