function getCompleted(timeWorked: string, totalTime: string): string {
  function timeToSeconds(time: string) {
    const [h, m, s] = time.split(':').map(Number);
    return h * 3600 + m * 60 + s
  }
  return `${Math.round(timeToSeconds(timeWorked) / timeToSeconds(totalTime) * 100)}%`;
}

