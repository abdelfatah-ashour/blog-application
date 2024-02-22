import { IBlog } from "@/@types/model";
import Api from "./config";

/**
 * Fetches blogs from the API based on the specified page number.
 * @param {number} page - The page number for pagination.
 * @returns {Promise<IBlog[]>} A promise that resolves to an array of IBlog objects representing the fetched blogs.
 */
export function fetchBlogsApi(page: number) {
  return new Api().get<IBlog[]>(`/posts?_limit=${page}`);
}
