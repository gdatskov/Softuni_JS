function time15(input) {
    let minutes = Number(input[0])
    let seconds = Number(input[1])
    minutes += (Math.floor((seconds + 15) / 60))
    minutes %= 24
    seconds = (seconds + 15) % 60
    if (seconds < 10)
    seconds = "0" + seconds
    console.log(`${minutes}:${seconds}`)
}

time15(["23", "59"])