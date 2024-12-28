function findInAgenda(
  agenda: string,
  phone: string,
): { name: string; address: string } | null {
  const agendaArr = agenda.split("\n");
  let result: { name: string; address: string } | null = null;

  for (const agen of agendaArr) {
    if (!agen.includes(phone)) continue;
    if (result) return null;

    const name = agen.match(/(?<=<)[A-Za-z\s]+(?=>)/g)![0];
    const fullPhone = agen.match(
      /\+([0-9]{1,2}-[0-9]{3}-[0-9]{3}-[0-9]{3,4})/g,
    )![0];
    let address = agen
      .replace(name, "")
      .replace("<", "")
      .replace(">", "")
      .replace(fullPhone, "")
      .trim();

    result = { name, address };
  }
  return result;
}
