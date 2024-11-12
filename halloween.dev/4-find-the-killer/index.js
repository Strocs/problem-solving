function findTheKiller(whisper, suspects) {
  let killers = []
  const whisperLength = whisper.length - +whisper.includes('$')
  for (const suspect of suspects) {
    let isSuspect = whisperLength <= suspect.length
    let suspectName = suspect.toLowerCase()
    for (let letter = 0; letter < whisper.length && isSuspect; letter++) {
      if (whisper[letter] === '~') continue
      if (whisper[letter] === '$') {
        isSuspect = whisperLength === suspect.length
        break
      }
      isSuspect = whisper[letter] === suspectName[letter]
    }
    isSuspect && killers.push(suspect)
  }
  return killers.toString()
}

export default findTheKiller
