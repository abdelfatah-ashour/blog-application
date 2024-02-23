import dayjs from "dayjs";

/**
 *
 * @returns {Date} Return the current date as a string
 */
export function generateRandomDate() {
  const startDate = new Date("1970-01-01").getTime();
  const endDate = new Date("2030-12-31").getTime();

  // Generate a random timestamp within the range
  const randomTimestamp = Math.random() * (endDate - startDate) + startDate;

  // Create a new Date object using the random timestamp
  const randomDate = dayjs(randomTimestamp);

  return randomDate.format("ddd D MMM YYYY").toString();
}
