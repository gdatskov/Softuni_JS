function sumSeconds (input) {
    let contester1 = Number(input[0])
    let contester2 = Number(input[1])
    let contester3 = Number(input[2])
    let totalTime = contester1 + contester2 + contester3
    let minutes = Math.floor(totalTime / 60)
    let seconds = totalTime % 60
    if (seconds <= 9) 
        seconds = "0"+seconds
    console.log(`${minutes}:${seconds}`)
}
sumSeconds(["35",
"45",
"44"])
sumSeconds(["22", "7", 
"34"])

sumSeconds(["50",
"50",
"49"])

sumSeconds(["14", "12",
"10"])
