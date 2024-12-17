/**
  * @param {Array<Object>} data
  * @returns {string}
  */
function drawTable(data) {
  // need width of cols
  // need number of cols

  let colsWidth = []
  let cols = []
  let prevSpace = null

  for (let rows of data) {
    const row = Object.entries(rows)

    for (let i = 0; i < row.length; i++) {
      const [head, body] = row[i]
      // create the array if not exist
      cols[i] = cols[i] ?? []
      cols[i][0] =
        `+${'-'.repeat(head.length + 2)}
| ${head} 
+${'-'.repeat(head.length + 2)}`
      cols[i].push(`| ${body} `)

      const longest = head.length > body.length ? head.length : body.length
      colsWidth[i] = +colsWidth[i] > longest ? colsWidth[i] ?? 0 : longest

      if (prevSpace) {

      }
    }

    console.log(cols.join(''))

    // for (let j = 0; j < entries.length; j++) {
    //   const [head, body] = entries[j]
    //   if (!colsHead[j]) colsHead[j] = head
    //   colsBody[j] = !!colsBody[j] ? [...colsBody[j], body] : [body]
    //   const longest = head.length > String(body).length ? head.length : String(body).length
    //   colsWidth[j] = +colsWidth[j] > longest ? colsWidth[j] ?? 0 : longest
    // }
  }
  return ''
}

const f = drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' }
])
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

// | Name 
// | Alice 
// | Bob 
// | Charlie 



const x = drawTable([
  { gift: 'Doll', quantity: 10 },
  { gift: 'Book', quantity: 5 },
  { gift: 'Music CD', quantity: 1 }
])
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |

console.log(f + '\n' + x)
