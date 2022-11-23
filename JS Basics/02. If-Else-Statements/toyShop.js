function toyShop(input) {
    let [vacationPrice, puzzles, dolls, bears, minions, trucks] = input.map(Number)
    let totalToys = puzzles+dolls+bears+minions+trucks
    let profit = puzzles*2.6 + dolls*3 + bears*4.1 + minions*8.2 + trucks*2
    if (totalToys >= 50) {
        profit *= 0.75
    }
    profit = profit*0.9
    if (profit >= vacationPrice) {
        console.log(`Yes! ${(profit-vacationPrice).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(vacationPrice-profit).toFixed(2)} lv needed.`)
    }
}
toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])

toyShop(["320",
"8",
"2",
"5",
"5",
"1"])
