import { Content } from "./components/content/Content";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.home_wrapper}>
      <Navbar />
      <Hero />
      <Content />
    </div>
  );
}
