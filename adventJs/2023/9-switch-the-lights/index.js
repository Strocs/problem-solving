function adjustLights(lights) {
  let evenOn = 0
  for (let i = 0; i < lights.length; i++) {
    const isEven = i % 2 === 0
    const isOn = lights[i] === '🟢'
    evenOn += isEven ^ isOn
  }
  return Math.min(evenOn, lights.length - evenOn)
}
export { adjustLights }
