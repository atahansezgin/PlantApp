import axios, { AxiosRequestConfig } from "axios";
import { END_POINTS } from "./endpoints";

const client = axios.create({
  baseURL: "https://dummy-api-jtg6bessta-ey.a.run.app/",
  headers: {
    "Content-Type": "application/json"
  }
});

export function fetch<T>(endpoint: END_POINTS, config?: AxiosRequestConfig) {
  return new Promise<T>((resolve, reject) => {
    client.get(endpoint, config)
      .then(response => resolve(<T>response.data))
      .catch(error => {
        console.warn(error);
        reject(error);
      });
  });
}
