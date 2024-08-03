import styles from "./navbar.module.css";
import { Logo } from "./Logo";
import { SignIn } from "./SignInLogo";
import { ModeLogo } from "./ModeLogo";
import { HamburgerLogo } from "./HamburgerLogo";

export function Navbar() {
  return (
    <div className={styles.wrapper_navbar}>
      <div className={styles.logo}>
        <Logo />
      </div>

      <div className={styles.navbar_container}>
        <nav>
          <ul className={styles.nav}>
            <li>Popular</li>
            <li>Now Playing</li>
            <li>Upcoming</li>
            <li>Top Rated</li>
            <li>Favorites</li>
            <li>Favorites</li>
          </ul>
        </nav>
      </div>
      <div className={styles.user_container}>
        <div className={styles.mode_logo}>
          <ModeLogo />
        </div>
        <div className={styles.sign_in_logo}>
          <SignIn />
        </div>
        <div className={styles.hamburger_menu}>
          <HamburgerLogo />
        </div>
      </div>
    </div>
  );
}
