import styles from "./Hero.module.css";
import Po from "../../assets/images/Po.jpg";
import { FavoriteLogo } from "./FavoriteLogo";
import { SavedLogo } from "./SavedLogo";
import { ShareLogo } from "./ShareLogo";
import { DotsProgressBar } from "./components/DotsProgressBar";
import { CircularProgressBar } from "./components/CircularProgressBar";

export function Hero() {
  return (
    <div className={styles.hero_container}>
      <div className={styles.hero_information}>
        <h2>Kung Fu Panda 4</h2>
        <h3>
          Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength
          within! Get ready to unleash your inner warrior! 🥋✨
        </h3>
      </div>

      <img className={styles.hero_image} src={Po.src} alt="Po" />
      <div className={styles.hero_details}>
        <div className={styles.hero_menu}>
          <ul>
            <li>Trama</li>
            <li>Cast</li>
            <li>Gallery</li>
            <li>Info</li>
          </ul>
        </div>
        <div className={styles.dots_progress_bar}>
          <DotsProgressBar />
        </div>
        <div className={styles.user_selectors}>
          <div className={styles.favorite_logo}>
            <FavoriteLogo />
          </div>
          <div className={styles.saved_logo}>
            <SavedLogo />
          </div>
          <div className={styles.share_logo}>
            <ShareLogo />
          </div>
        </div>
      </div>
      <div className={styles.circle_progress_bar}>
        <CircularProgressBar />
      </div>
    </div>
  );
}
