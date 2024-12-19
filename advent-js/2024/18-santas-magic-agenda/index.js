/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
function findInAgenda(agenda, phone) {
  const agendaArr = agenda.split("\n");
  let result = null;

  for (const agen of agendaArr) {
    if (!agen.includes(phone)) continue;
    if (result) return null;

    const nameRegex = /<([A-Za-z\s]+)>/g;
    const addressRegex =
      /([A-Za-z0-9\s,]+(?:\s[A-Za-z0-9\s,]+)*)(?=\s*(?!\+?\d{1,2}-\d{3}-\d{3}-\d{3})\s*$)/g;
    const name = nameRegex.exec(agen)[1].trim();
    const address = addressRegex.exec(agen);
    result = { name, address };
  }
  return result;
}

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`;

console.log(findInAgenda(agenda, "34-600-123-456"));
// { name: "Juan Perez", address: "Calle Gran Via 12" }

console.log(findInAgenda(agenda, "600-987"));
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

console.log(findInAgenda(agenda, "111"));
// null
// Explanation: No results

console.log(findInAgenda(agenda, "1"));
// null
// Explanation: Too many results
