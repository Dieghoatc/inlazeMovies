import { AsideSearch } from "./components/asideSearch/AsideSearch";
import { Movies } from "./components/movies/Movies";
import styles from "./content.module.css";

export function Content() {
  return (
    <div className={styles.content_wrapper}>
      <div className={styles.aside_wrapper}>
        <AsideSearch />
      </div>
      <div className={styles.movies_wrapper}>
        <Movies />
      </div>
    </div>
  );
}
