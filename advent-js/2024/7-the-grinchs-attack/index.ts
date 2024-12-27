function fixPackages(packages: string): string {
  let queue: string[] = [""];
  for (let letter of packages) {
    if (letter === "(") {
      queue.push("");
      continue;
    }
    if (letter === ")") {
      const last = queue.pop()?.split("").reverse().join("");
      queue[queue.length - 1] += last;
      continue;
    }
    queue[queue.length - 1] += letter;
  }
  return queue[0];
}
