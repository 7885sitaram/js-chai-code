// console.log('sitaram');

// const pai = 3.14;
// let name = "rahul"
// var age = 25 
// city = 'ahmedabad'

// console.table([pai, name , age , city])
// console.error("error");

// datatyupe conversion 

let n = '55'
let n1 = null
let n2 = '55fb'
console.log(typeof(n));

let res =  Number(n)
let res1 = Number(n1)
let res2 = Number(n2)

console.log(res);
console.log(typeof(res));

// in null convert into 0 but the datatype is number in undefine case return nan
console.log(res1);
console.log(typeof(res1));

// if value with string than return NAN 
console.log(res2);
console.log(typeof(res2));

// "33" => 33
// "33dskjg" => NAN
// true => 1
// false => 0
// NULL => 0
// undefine => NAN

// another datatype
let log = ""

let b =  Boolean(log)

console.log(b);
console.log(typeof(b));

// 1 => true
// -156 => true
// 0 => false
// "" => false
// " " => true
// "sitaram" => true

// string 

let number = 45

let s = String(number)

console.log(s);
console.log(typeof(s));

let str1 = 'sitaram'
let str2 = ' prajapati'

console.log(str1.concat(str2));

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");

console.log("\n");
console.log(1 + 2 + "3");
console.log( "3" + 1 + 2);

// in this the associtivity is left to right 


// not recomandable comparesion but still learn 

console.log("2" > 1);
console.log("2" < 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// in every language memory management is one of the imp part so in js use autometic garbage collection mechanisam 
// memory hyave two type stack (premetive datatype) 2. Heap(non premetive datatype)

// so in this the stack memory is create stack for variable and store the data and theey give copy of variable not data 
// and in heap memory they give reference (value) not copy of variable 

