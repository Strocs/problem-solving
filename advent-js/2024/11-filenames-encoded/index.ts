function decodeFilename(filename: string): string {
  return filename.match(/(?<=_)[a-zA-Z0-9_-]+\.[a-z]{2,4}/g)![0];
}
