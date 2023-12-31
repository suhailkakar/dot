/**
 * Rreturns a random fact based on the number
 * @param {number} number - The current number of visitors.
 * @returns {string} The random fact based on the number.
 */

const fetchFact = async (number: number): Promise<string> => {
  const response = await fetch(`http://numbersapi.com/${number}/trivia`);
  const data = await response.text();
  return data;
};

export default fetchFact;
