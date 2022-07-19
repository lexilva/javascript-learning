//f5! = 5x4x3x2x1
function fatoriral(n){
    let fat = 1;
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}
console.log(fatoriral(5))
