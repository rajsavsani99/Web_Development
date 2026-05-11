console.log("program 6  print given number is palindrome or not  ");

let Number = 1210;
let original = Number;
let ans=0;

while(Number>0){
    let digit = Number % 10;
    ans = ans*10+digit;
    Number=Math.floor(Number/10);

}
console.log(ans)

if(ans == original)
    {
    console.log("number is palindrome");

}
else{
    console.log("number is not palindrome");
}

