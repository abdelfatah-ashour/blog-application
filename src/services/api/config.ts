import axios from "axios";
const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

export default class Api {
  /**
   * Performs a GET request to the specified URL.
   * @param {string} url - The URL to fetch data from.
   * @returns {Promise<T>} A promise that resolves to the fetched data of type T.
   * @template T - The type of data expected to be fetched.
   */
  get<T>(url: string) {
    return instance.get<T>(url);
  }

  /**
   * Performs a POST request to the specified URL with the given body.
   * @param {string} url - The URL to send the POST request to.
   * @param {Record<string, string | number | boolean>} body - The body of the POST request.
   * @returns {Promise<T>} A promise that resolves to the response data of type T.
   * @template T - The type of data expected in the response.
   */
  post<T>(url: string, body: Record<string, string | number | boolean>) {
    return instance.post<unknown, T>(url, body);
  }
}
