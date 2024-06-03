function depositCalc(input){
    deposit = Number(input[0])
    months = Number(input[1])
    percent = Number(input[2])/100
    sum = deposit + months*deposit*percent/12
    console.log(sum)
}

depositCalc(["200", "3", "5.7 "])
depositCalc(["2350",
"6 ",
"7 "]
)