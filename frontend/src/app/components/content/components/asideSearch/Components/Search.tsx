import styles from "./search.module.css";

export function Search() {
  return (
    <div className={styles.search_container}>
      <label htmlFor="" className={styles.label}>
        Search
      </label>
      <input type="text" placeholder="Keywords" className={styles.input} />
      <button className={styles.button}></button>
    </div>
  );
}
