function findTheKiller(whisper, suspects) {
  let endOfWhisper = ''
  if (whisper.endsWith('$')) {
    whisper.slice(0, -1)
    endOfWhisper = '$'
  } else {
    endOfWhisper = '.*'
  }
  const whisperWild = whisper.replaceAll('~', '.')
  const clearedWhisper = `^${whisperWild}${endOfWhisper}`
  const whisperRegex = new RegExp(clearedWhisper, 'i')
  const killers = suspects.filter(suspect => whisperRegex.test(suspect))
  return killers.join()
}

// function findTheKiller(whisper, suspects) {
//   let killers = []
//   const whisperLength = whisper.length - +whisper.includes('$')
//   for (const suspect of suspects) {
//     let isSuspect = whisperLength <= suspect.length
//     let suspectName = suspect.toLowerCase()
//     for (let letter = 0; letter < whisper.length && isSuspect; letter++) {
//       if (whisper[letter] === '~') continue
//       if (whisper[letter] === '$') {
//         isSuspect = whisperLength === suspect.length
//         break
//       }
//       isSuspect = whisper[letter] === suspectName[letter]
//     }
//     isSuspect && killers.push(suspect)
//   }
//   return killers.toString()
// }

export default findTheKiller
