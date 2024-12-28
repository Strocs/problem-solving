/**
 * @param {string} timeWorked - Time worked in hh:mm:ss format.
 * @param {string} totalTime - Total estimated time in hh:mm:ss format.
 * @returns {string} - The completed percentage rounded to the nearest integer with a % sign.
 */
function getCompleted(timeWorked, totalTime) {
  function timeToSeconds(time) {
    const [h, m, s] = time.split(':').map(Number);
    return h * 3600 + m * 60 + s
  }
  return `${Math.round(timeToSeconds(timeWorked) / timeToSeconds(totalTime) * 100)}%`;
}
