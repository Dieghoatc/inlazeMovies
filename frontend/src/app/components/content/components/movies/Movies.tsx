"use client";

import { Card } from "./components/Card";
import { movies } from "./moviesList";
import styles from "./movies.module.css";
import { useFetch } from "@/app/services/api/useFetch";

export function Movies() {
  const { loading, data, error } = useFetch();

  if (!data) return <p>No data</p>;
  if (loading) return <p>Cargando</p>;

  const { results } = data;

  return (
    <div className={styles.movies_wrapper}>
      <p className={styles.title}>Popular</p>
      <div className={styles.movies_list}>
        {results.map((movies) => {
          return (
            <div key={movies.id} className={styles.movie_card}>
              <Card movies={movies} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
