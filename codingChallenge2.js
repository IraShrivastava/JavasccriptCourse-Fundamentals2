function calcTip(billAmount) {
    if(billAmount >= 50 && billAmount <= 300){
        return 0.15 * billAmount
    }
    else{
        return 0.2 * billAmount
    }
}

console.log(calcTip(100))

let bills = [125, 555, 44]
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

console.log(bills)
console.log(tips)

console.log("bills + tips")
let total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]]
console.log(total)
