"use client";
import { ChangeEvent, useState } from "react";
import styles from "./genres.module.css";

const genresList = [
  { id: 1, name: "Action" },
  { id: 2, name: "Adventure" },
  { id: 3, name: "Comedy" },
  { id: 4, name: "Crime" },
  { id: 5, name: "Documentary" },
  { id: 6, name: "Drama" },
  { id: 7, name: "Family" },
];

export function Genres() {
  const [selectOption, setSelectedOption] = useState("");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className={styles.genres}>
      <label htmlFor="genresList" className={styles.label}>
        Sort By
      </label>
      <select name="genresList" value={selectOption} onChange={handleChange} className={styles.select}>
        <option className={styles.option_placeholder}></option>
        {genresList.map((element) => {
          return (
            <option key={element.id} value={element.name} className="">
              {element.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
