function decode(message) {
  const queue = ['']
  let level = 0
  for (let i = 0; i < message.length; i++) {

    if (message[i] === '(') {
      level++
      queue.push('')
      continue
    }

    if (message[i] === ')') {
      level--
      const ordered = queue.pop()
      if (level > 0) queue[level] = ordered + queue[level]
      if (level === 0) queue[level] += ordered
      continue
    }

    if (level % 2 !== 0) {
      queue[level] = message[i] + queue[level]
      continue
    }

    queue[level] += message[i]
  }

  return queue[0]
}

export default decode
