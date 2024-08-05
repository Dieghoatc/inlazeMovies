import styles from "./Hero.module.css";
import Po from "../../assets/images/Po.jpg";

import { HeroDetails } from "./components/HeroDetails";
import { CircularProgressBar } from "../CirclularProgressBar/CircularProgressBar";

export function Hero() {
  return (
    <div className={styles.hero_container}>
      <div className={styles.hero_image_container}>
        <img className={styles.hero_image} src={Po.src} alt="Po" />
        <div className={styles.hero_information}>
          <h2>Kung Fu Panda 4</h2>
          <h3>
            Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength
            within! Get ready to unleash your inner warrior! 🥋✨
          </h3>
        </div>
      </div>
      <div className={styles.hero_details}>
        <HeroDetails />
      </div>
      <div className={styles.circle_progress_bar}>
        <CircularProgressBar />
      </div>
    </div>
  );
}
