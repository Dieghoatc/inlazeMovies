import { AsideSearch } from "./components/asideSearch/AsideSearch";
import styles from "./content.module.css";

export function Content() {
  return (
    <div className={styles.content_wrapper}>
      <div className={styles.aside_wrapper}>
        <AsideSearch />
      </div>
      <div className={styles.sections_wrapper}>
        <p>Popular</p>
      </div>
    </div>
  );
}
