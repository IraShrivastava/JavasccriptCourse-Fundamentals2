function calcAverage(score1, score2, score3){
    console.log((score1+score2+score3)/3)
    return (score1+score2+score3)/3;
}

let checkWinner= function (avgDolphins, avgKoalas){
    if(avgDolphins >= 2* avgKoalas){
        console.log(`Dolphins win ( ${avgDolphins} vs. ${avgKoalas})`);
    }
    else if(avgKoalas >= 2* avgDolphins){
        console.log(`Koalas win ( ${avgKoalas} vs. ${avgDolphins})`);
    }else{
        console.log("No team wins...")
    }
}

/* let dolphins1 = 44
let dolphins2 = 23
let dolphins3 = 71
let koalas1 = 65
let koalas2 = 54
let koalas3 = 49 */

let dolphins1 = 85
let dolphins2 = 54
let dolphins3 = 41
let koalas1 = 23
let koalas2 = 34
let koalas3 = 27


let avgDolphins = calcAverage(dolphins1,dolphins2,dolphins3)
let avgKoalas = calcAverage(koalas1,koalas2,koalas3)

checkWinner(avgDolphins,avgKoalas)