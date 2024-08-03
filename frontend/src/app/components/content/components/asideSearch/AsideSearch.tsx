import { Categories } from "./Components/Categories";
import { Search } from "./Components/Search";
import styles from "./asideSearch.module.css";

export function AsideSearch() {
  return (
    <div className={styles.aside_container}>
      <Search />
      <Categories />
    </div>
  );
}
