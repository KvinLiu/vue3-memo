import dayjs from 'dayjs'
/**
 * A description of the entire function.
 *
 * @param {Date | string} date - The date to format
 * @return {string} The formatted date string
 */
export const FormatTime = (date: Date | string): string => {
  return dayjs(date).format('YYYY/MM/DD hh:mm')
}

/**
 * Retrieves an item from the local storage.
 *
 * @param {string} key - The key of the item to retrieve.
 * @return {any} The retrieved item, or null if the item does not exist.
 */
export const localGetItem = (key: string): any => {
  const data_str = localStorage.getItem(key)
  if (data_str) {
    return JSON.parse(data_str)
  }
  return null
}

/**
 * Sets a value in the local storage with the given key.
 *
 * @param {string} key - The key to associate the value with.
 * @param {any} value - The value to be stored.
 * @return {void} This function does not return anything.
 */
export const localSetItem = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value))
}

/**
 * Generates a random number between 0 and 939873 (inclusive).
 *
 * @return {number} The randomly generated number.
 */
export const geneId = (): number => {
  return Math.floor(Math.random() * 939874)
}
