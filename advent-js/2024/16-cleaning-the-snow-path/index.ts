function removeSnow(s: string): string {
  let result = "";
  for (const c of s) {
    result = result.at(-1) == c ? result.slice(0, -1) : result + c;
  }

  return result;
}
