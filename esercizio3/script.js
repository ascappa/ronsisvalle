function stampaNumeri1() {
  let currentLine = ""
  for (let i = 1; i <= 100; i++) {
    currentLine += i + " "
    if (i % 10 === 0) {
      console.log(currentLine)
      currentLine = ""
    }
  }
}

stampaNumeri1()