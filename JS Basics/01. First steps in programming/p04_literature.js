function literature(input){
    numberOfPages = input[0]
    pagesPerHour = input[1]
    days = input[2]
    hoursPerDay = numberOfPages/pagesPerHour/days
    console.log(hoursPerDay)
}

literature(["212 ",
"20 ",
"2 "]
)
literature(["432 ",
"15 ",
"4 "]
)