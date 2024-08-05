import { useEffect, useState } from "react";
import { MovieApiResponse } from "./types";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmVmN2M1YWEyNDMwOTI2MDE5ZTgyMjRmNjg0OGU4MyIsIm5iZiI6MTcyMjgxMDI0Ni4yMDcyMzYsInN1YiI6IjY2YWE2MWQ1ZjljOWY5ZjNhNGUzYzEyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZnMkiFrF_RcZ40YP3I881oXRVrgkVaoYX1yyzSh2ffw"; //TODO: Variables de entorno

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export function authApi() {
  fetch("https://api.themoviedb.org/3/authentication", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}

export function useFetch() {
  const [data, setData] = useState<MovieApiResponse>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchApi() {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc",
      options,
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .finally(() => setLoading(false))
      .catch((err) => setError(err));

    return response;
  }

  useEffect(() => {
    setLoading(true);
    fetchApi();
  }, []);

  return { data, loading, error };
}
