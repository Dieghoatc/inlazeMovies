import styles from "./card.module.css";
import shrek from "@/app/assets/images/shrek_5.jpg";
import { CircularProgressBarSmall } from "./components/CircularProgressBarSmall";
import { Favorites } from "./components/Favorites";
import { Save } from "./components/Save";
import { Movie } from "@/app/services/api/types";

interface CardProps {
  movies: Movie;
}

const urlImage = "https://image.tmdb.org/t/p/w500/";

export function Card({ movies }: CardProps) {
  return (
    <div className={styles.card_container}>
      <img src={`${urlImage}${movies.poster_path}`} alt={movies.original_title} />
      <div className={styles.card_info}>
        <h5 className={styles.card_title}>{movies.original_title}</h5>
        <div className={styles.card_date}>
          <p>{movies.release_date}</p>
        </div>
        <div className={styles.card_check}>
          <div>
            <p className={styles.card_check_title}>Rating</p>
            <CircularProgressBarSmall rated={movies.vote_average} />
          </div>
          <div>
            <p className={styles.card_check_title}>Favorites</p>
            <Favorites />
          </div>
          <div>
            <p className={styles.card_check_title}>Save</p>
            <Save />
          </div>
        </div>
      </div>
    </div>
  );
}
