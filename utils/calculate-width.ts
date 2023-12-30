const BASE_WIDTH = 5;
const MAX_WIDTH_FIRST_TIER = 100 * 0.5;
const MAX_WIDTH_SECOND_TIER = 900 * 0.25;

/**
 * Calculates the width of an element based on the number of visitors.
 * - Up to 100 visitors: width increases by 0.5 units each.
 * - 101 to 1000 visitors: width increases by 0.25 units each.
 * - Beyond 1000 visitors: width increases by 0.125 units each.
 *
 * @param {number} visitors - The current number of visitors.
 * @returns {number} The calculated width based on visitors.
 */
const calculateWidth = (visitors: number): number => {
  if (visitors <= 100) {
    return BASE_WIDTH + visitors * 0.5;
  } else if (visitors <= 1000) {
    return BASE_WIDTH + MAX_WIDTH_FIRST_TIER + (visitors - 100) * 0.25;
  } else {
    return (
      BASE_WIDTH +
      MAX_WIDTH_FIRST_TIER +
      MAX_WIDTH_SECOND_TIER +
      (visitors - 1000) * 0.125
    );
  }
};

export default calculateWidth;
