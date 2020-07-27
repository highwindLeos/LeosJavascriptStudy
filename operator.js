/**
 * 기본적인 것들을 건드리지 않게끔 설정
 * 'use strict'; 
 */
'use strict';

/*
    1. String concatenation
*/
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals 1 + 2 = ${1 + 2}`);
console.log('1 =======================');
/*
    2. Numeric operators
*/
console.log(1 + 1);  //add
console.log(1 - 1);  //substract
console.log(1 * 1);  //multiply
console.log(1 / 1);  //divide
console.log(5 % 2);  //remainder
console.log(5 ** 2); //exponentiation
console.log('2 =======================');

/*
3. Increment and decrement operators
*/
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter; 
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`);

const postIncrement = counter++
// postIncrement = counter; 
// counter = counter + 1;
console.log(`postIncrement : ${postIncrement}, counter : ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement : ${preDecrement}, counter : ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement : ${postDecrement}, counter : ${counter}`);
console.log('3 =======================');

/*
    4. Assignment operators
*/
let x = 3;
let y = 6;
x += y; // x = x + y
console.log(`x : ${x}`);
x -= y; // x = x - y
console.log(`x : ${x}`);
x *= y; // x = x * y
console.log(`x : ${x}`);
x /= y; // x = x / y
console.log(`x : ${x}`);
console.log('4 =======================');

/*
    5. Comparison operators
*/
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);
console.log('5 =======================');

/*
    6. logical operators
*/
const value1 = false;
const value2 = 4 < 2;

// \\ (or)
console.log(`or : ${value1 || value2 || check()}`);

// && (and)
console.log(`and : ${value1 && value2 && check()}`);

function check() {
    for (let i = 0; i < 10; i++){
        // wasting time
        console.log('-_-;');
    }
    return true;
}

// ! (not)
console.log(`value1 : ${!value1}`); // false 값을 반전함.
console.log('6 =======================');

/*
    7. Equality
*/
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion :  type은 비교하지 않고 값을 비교
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
console.log('=======================');
// === strick equality, no type conversion : type까지 비교하여 엄격히 값을 비교
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);
console.log('=======================');

// object equality by reference
const leo1 =  { name : 'leo'};
const leo2 =  { name : 'leo'};
const leo3 =  leo1;

console.log(leo1 == leo2); // object 는 값이 같더라도 해당 포인터가 가르키는 주소가 다르기 때문에 false
console.log(leo1 === leo2);  // object 는 값이 같더라도 해당 포인터가 가르키는 주소가 다르기 때문에 false
console.log(leo1 === leo3);  // leo3 에 leo1 의 reference 를 할당했기 때문에 같으므로 true
console.log('=======================');

// equality - puzzler
console.log(0 == false);            // true
console.log(0 === false);           // false
console.log('' == false);           // true
console.log('' === false);          // false
console.log(null == undefined);     // true
console.log(null === undefined);    // false
console.log('7 =======================');

/*
    8. Conditional operators : if
    - if , else, if, else
*/
const name = 'leo';
if (name === 'leo') {
    console.log(`welcome! ${name}!!`);
} else if (name === 'coder') {
    console.log('You are amazing Coder');
} else {
    console.log('oops unkwnon');
}
console.log('8 =======================');

/*
    9. Ternary operators : ? ,: - [삼항연산자]
    - Condition ? value1 : value2
*/
console.log(name === 'leo' ? 'yes' : 'no');
console.log('9 =======================');

/*
    10 Switch statement
    use for multiple if check
    use for enum-like value check
    use for multiple type checks in TS
*/
const browser = 'IE'
switch (browser){
    case 'IE' :
        console.log('go Way IE !!');
        break;
        case 'Chrome' :
        case 'FireFox' :
            console.log('Love it Bro !!');
            break;
        default:
            console.log('same All !!');
            break;
}                
console.log('10 =======================');

/*
11 Loops
while loop
*/
let i = 3;
while(i > 0){
    console.log(`while : ${i}`);
    i--;
}
console.log('=======================');
// do ~ while loop. 
do {
    console.log(`do while : ${i}`);
    i--
} while (i > 0)
console.log('=======================');

//for loop. for (begin; condition; step)
for (i = 3; i > 0; i--){
    console.log(`for : ${i}`);
}
console.log('=======================');

for (let i = 3; i > 0; i--){
    //for loop. inline variable declaration 
    console.log(`inline variable for : ${i}`);
}
console.log('=======================');

// nested loops
for (let i = 1; i <= 10; i++){
    for (let j = 1; j <= 10; j++){
        console.log(`i : ${i}, j : ${j}, i * j = ${i * j}`);
    }
}
console.log('=======================');

// break, continue
for (let i = 0; i < 11; i++){
    if (i % 2 === 0){ // 짝수 일 때 true
        console.log(`q1. ${i}`); // 짝수 출력
    }
}
console.log('=======================');

for (let i = 0; i < 11; i++){
    if (i > 8){
        break; // i 의 값이 8일때 loop 를 빠져나옴
    }
    console.log(`q2. ${i}`);
}
console.log('11 =======================');