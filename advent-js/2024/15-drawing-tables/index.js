/**
 * @param {Array<Object>} data
 * @returns {string}
 */

function drawTable(data) {
  let w = [],
    c = [[]];
  for (let r = 0; r < data.length; r++) {
    const d = Object.entries(data[r]);
    let t = [];
    for (let i = 0; i < d.length; i++) {
      const [h, b] = d[i];
      if (r === 0) c[0].push(h[0].toUpperCase() + h.slice(1));
      t.push(b.toString());
      const l = h.length > b.toString().length ? h.length : b.toString().length;
      w[i] = +w[i] > l ? (w[i] ?? 0) : l;
    }
    c.push(t);
  }
  let t = "";
  let hs = "";
  for (let i = 0; i < c.length; i++) {
    let s = "";
    let h = "";
    for (let j = 0; j < c[i].length; j++) {
      h += "+" + "-".repeat(w[j] + 2);
      s += "| " + c[i][j] + " ".repeat(w[j] - c[i][j].length + 1);
    }
    h += "+";
    s += "|\n";
    if (!hs) {
      hs = h;
      t += hs + "\n" + s + hs + "\n";
      continue;
    }
    t += s;
  }
  t += hs;
  return t;
}
