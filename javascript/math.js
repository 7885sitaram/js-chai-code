let num = 45 

// but you can cast your datatype 

const n = new Number(50)

console.log(num);
console.log(n);


// tostring use for casting number to string 
console.log(n.toString() );
console.log(n.toString().length);

// tofixed is use for values after dot

let number = 785.154552

console.log(number.toFixed(2));

// toprecision is use for accurecy and digit and toprecision return in string type 

console.log(number.toPrecision(4));

// tolocalestring is for formating the number according to us format 

let digit = 100000000

console.log(digit.toLocaleString());

// you can convert into indian formate 

console.log(digit.toLocaleString('en-IN'));


// MATH 

console.log(Math);

// convert negetive to positive 
console.log(Math.abs(-54));
console.log(Math.round(48.89));
console.log(Math.min(4,2,1,7));
console.log(Math.max(4,2,1,7));

console.log(Math.round( Math.random()*10));


// in perticuler range 

const min = 10
const max = 20 

console.log(Math.round(Math.random()*(max - min + 1 )) + min);

