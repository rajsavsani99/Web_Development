let numbers=[10,20,30,40,50,60];

console.log("traversing array");
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

numbers.splice(2,0,100);

console.log(numbers);
