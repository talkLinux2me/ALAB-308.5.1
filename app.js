const initialValue = 0;
const sumOfNums = multiplicativeArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue,);
console.log(sumOfNums);
 
 const numerics = [1, 2, 3, 4, 5];
const sumOfNums = [];
function addition(string, operator){
for (let i = 0; i <= string.length; i++){
    if (operator ='+'){
       return string[i]+string[i]
    }
    else if (operator = '-'){
       return string[i]-string[i]
    }
    else if (operator = '*'){
       return string[i]*string[i]
    }
    else if (operator = '/'){
        return string[i]/string[i]
    };
};
};
 
function printNum(num){
    if(num > 10){
        return
    }
    console.log(num)
   printNum(num +1 );
}
console.log(printNum(1));
 