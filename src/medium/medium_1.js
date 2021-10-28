import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
  return array.reduce( (previous, current) => {
    return previous + current;
  } );
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {

  let length = array.length;
  let middle = length / 2;

  array.sort( (current, next) => {
    return current - next;
  } );

  if (length % 2 == 0) {
    return ( array[middle - 1] + array[middle] ) / 2;
  } else {
    return array[ Math.floor(middle) ];
  }

}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
  let statistics = {};
  statistics.length = array.length;
  statistics.sum = getSum(array);
  statistics.mean = statistics.sum / statistics.length;
  statistics.median = getMedian(array);
  statistics.min = Math.min.apply(null, array);
  statistics.max = Math.max.apply(null, array);
  statistics.variance = variance(array, getSum(array) / array.length);
  statistics.standard_deviation = Math.sqrt(statistics.variance);
  return statistics;
}

