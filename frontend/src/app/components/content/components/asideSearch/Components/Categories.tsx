import styles from "./categories.module.css";

const categoriesList = [
  { id: 1, name: "Popularity Ascending" },
  { id: 2, name: "Popularity Descending" },
  { id: 3, name: "Rating Ascending" },
  { id: 4, name: "Rating Descending" },
  { id: 4, name: "Release Date Ascending" },
  { id: 4, name: "Release Date Descending" },
];

export function Categories() {
  return (
    <div className={styles.categories}>
      <label htmlFor="" className={styles.label}>
        Sort By
      </label>
      <select name="categoriesList" id="categories" className={styles.select}>
        <option value="">Categories</option>
        <option value="">Popularity Ascending</option>
        <option value="">Popularity Descending</option>
        <option value="">Rating Ascending</option>
        <option value="">Rating Descending</option>
      </select>
    </div>
  );
}
