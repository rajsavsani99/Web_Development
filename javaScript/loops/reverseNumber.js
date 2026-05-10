console.log("program 6  print given number in reverse order ");

let Number = 456215;
let ans=0;

while(Number>0){
    let digit = Number % 10;
    ans = ans*10+digit;
    Number=Math.floor(Number/10);

}
console.log(ans)

