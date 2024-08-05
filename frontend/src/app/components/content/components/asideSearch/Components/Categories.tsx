"use client";

import { ChangeEvent, useState } from "react";
import styles from "./categories.module.css";

const categoriesList = [
  { id: 1, name: "Otros" },
  { id: 2, name: "Popularity Ascending" },
  { id: 3, name: "Popularity Descending" },
  { id: 4, name: "Rating Ascending" },
  { id: 5, name: "Rating Descending" },
  { id: 6, name: "Release Date Ascending" },
  { id: 7, name: "Release Date Descending" },
];

export function Categories() {
  const [selectOption, setSelectedOption] = useState("");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className={styles.categories}>
      <label htmlFor="categoriesList" className={styles.label}>
        Sort By
      </label>
      <select name="categoriesList" value={selectOption} onChange={handleChange} className={styles.select}>
        <option className={styles.option_placeholder}></option>
        {categoriesList.map((element) => {
          return (
            <option key={element.id} value={element.name} className={styles.option}>
              {element.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
