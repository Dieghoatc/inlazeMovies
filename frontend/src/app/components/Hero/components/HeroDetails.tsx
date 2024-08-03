import { FavoriteLogo } from "./FavoriteLogo";
import { SavedLogo } from "./SavedLogo";
import { ShareLogo } from "./ShareLogo";
import { DotsProgressBar } from "./DotsProgressBar";

import styles from "./HeroDetails.module.css";

export function HeroDetails() {
  return (
    <div className={styles.hero_details_container}>
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
  );
}
