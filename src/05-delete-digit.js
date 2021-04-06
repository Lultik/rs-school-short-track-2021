/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let smaller = Infinity;
  let number = n;
  while (number !== 0) {
    const r = number % 10;
    smaller = Math.min(r, smaller);
    number = Math.floor(number / 10);
  }
  return Number(n.toString().replace(smaller.toString(), ''));
}

module.exports = deleteDigit;
