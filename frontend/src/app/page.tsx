import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home_wrapper}>
      <div className={styles.navbar_wrapper}>
        <Navbar />
      </div>
      <div className={styles.hero_wrapper}>
        <Hero />
      </div>
      <div className={styles.content_wrapper}>
        <div className={styles.aside_wrapper}>
          <p>Search</p>
        </div>
        <div className={styles.sections_wrapper}>
          <p>Popular</p>
        </div>
      </div>
    </div>
  );
}
