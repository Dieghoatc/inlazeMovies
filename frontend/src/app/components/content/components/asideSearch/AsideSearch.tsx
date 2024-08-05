import { Categories } from "./Components/Categories";
import { Genres } from "./Components/Genres";
import { Search } from "./Components/Search";
import styles from "./asideSearch.module.css";

export function AsideSearch() {
  return (
    <div className={styles.aside_container}>
      <Search />
      <Categories /> //TODO: CAMBIAR POR DROPDOWNS
      <Genres />
    </div>
  );
}
