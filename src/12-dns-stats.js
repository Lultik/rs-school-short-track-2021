/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

// Thanks rkhaslarov for help.
function getDNSStats(domains) {
  const dnsStat = {};
  domains.forEach((domain) => {
    const reversedDomain = domain.split('.').reverse();
    while (reversedDomain.length > 0) {
      const first = reversedDomain.shift();
      if (dnsStat[`.${first}`]) {
        dnsStat[`.${first}`]++;
      } else {
        dnsStat[`.${first}`] = 1;
      }
      const second = reversedDomain.shift();
      if (second) reversedDomain.unshift(`${first}.${second}`);
    }
  });
  return dnsStat;
}

module.exports = getDNSStats;
