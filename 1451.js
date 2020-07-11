/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
  const arr = text.split(" ");
  return arr
    .sort((a, b) => {
      if (a.length == b.length) return a - b;
      else return a.length - b.length;
    })
    .map(
      (w, idx) => (idx == 0 ? w.toUpperCase() : w.toLowerCase())[0] + w.slice(1)
    )
    .join(" ");
};