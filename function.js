/**
 * 기본적인 것들을 건드리지 않게끔 설정
 * 'use strict'; 
 */
'use strict';

/*
    function
    function name (param1, param2 ...) {
        body....
        return;
    }
    one function === one thing
*/

function printHellow () {
    console.log('hellow');
}
printHellow(); // call function

// parameter input
function logMessage(message){
    console.log(`log is : ${message}`);
}
logMessage('ready!!');
logMessage(1234);
console.log('1 ==========================');

/*
    2. Parameter
*/
function changeName(obj){
    obj.name = 'coder';
}
const leos = { name : 'leos'}
changeName(leos);
console.log(leos);
console.log('2 ==========================');

/*
    3. defaulte Parameters (added in ES6)
*/
function showMessage(message, from = 'unknown') { // parameter 의 기본값을 정할 수 있음
    console.log(`${message} by ${from}`)
}

showMessage('Hi !!');
showMessage('Hi !!' , 'leos');
console.log('3 ==========================');

/* 
    4. Rest Parameters (added in ES6)
*/
function printAll(...args) { // ... : 전달된 인자값 만큽 배열로 넘어오게 됨 
    for (let i=0; i < args.length; i++) { // for 문을 이용한 출력 [배열]
        console.log(args[i]);
    }
    console.log('==========================')
    for (const arg of args) { // of : 정해진 인자 만큼 반복함
        console.log(arg);
    }
    console.log('==========================')
    args.forEach((arg) => console.log(arg)); // 
}
printAll('leos1','coding', 'dream');
console.log('4 ==========================');

/* 
    5. Local scope
    변수의 접근성 : 지역변수 개념
*/

let globalMessage = 'global';
function printMeassage() {
    let message = 'hellow';
    console.log(message);
    console.log(globalMessage);
    
    function printAnother() {
        console.log(message);
        let childMessage = 'hellow';
    }
    // console.log(childMessage); // error out
}

printMeassage();
console.log('5 ==========================');

/* 
    6. Return a value
*/
function sum(a, b) {
    return a + b;
}

const result = sum(1, 2);
console.log(`sum : ${sum(3, 4)}, result : ${result}`);
console.log('6 ==========================');

/* 
7. Early return, early exit
*/
// bad code
function upgradeUser(user) {
    if (user.point > 10){
        // long upgrade logic ....
    }
}

// good code
function upgradeUser(user) {
    if (user.point > 10){
        return; // 함수 종료 시킴
    }
    // long upgrade logic ....
}
console.log('7 ==========================');


/* 
    8. anonymous functon
*/
const print = function () { // anonymous functon
    console.log('print~');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(5, 6));
console.log('8 ==========================');

/* 
    9. Callback function using function expression
*/
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love'){
        printYes();
    } else {
        printNo();
    }
}

const printYes = function(){ // anonymous functon
    console.log('yes!!');
}

const printNo = function print(){ // named functon
    console.log('no!!');
    // print();
}

randomQuiz('love', printYes, printNo);
randomQuiz('fuck U', printYes, printNo);
console.log('9 ==========================');

/* 
10. Arrow Function
*/
const simplePrint1 = function() {
    console.log('Simple Print! 1');
}
// 아래의 함수와 위의 함수는 정확히 같은 기능을 수행한다. [arrow function]
const simplePrint2= () => console.log('Simple Print! 2');

const add = (a, b) => a + b;

const simpleMultyply = (a, b) => {
    // do something more.
    return a * b;
}; // arrow function의 {} 내에서 내부 로직을 기술함.

simplePrint1();
simplePrint2();
console.log(add(7, 8));
console.log(simpleMultyply(9, 10));
console.log('10 ==========================');

// IIFE :  함수를 정의 함과 동시에 호출가능
(function hellow() {
    console.log('IIFE~~');
})();
console.log('11 ==========================');

// Quiz : function calculate(command, a, b) 를 만들어보자.
// command : sum, substract, multiply, divide, remainder 와 그것이 아닐때 처리 로직
const calculate = (command, a, b) => {
    switch(command) {
        case 'sum' :
            return a + b;
            break;
        case 'substract' :
            return a - b;
            break;
        case 'multiply' :
            return a * b;
            break;
        case 'divide' :
            return a / b;
            break;
        case 'remainder' :
            return a % b;
            break;
        default :
            return `command 입력을 sum, substract, multiply, divide, remainder  중 하나로 해주세요.`
            break;
    }
}; // calculate() End

console.log(calculate('sum', 1, 2));       // 더하기
console.log(calculate('substract', 4, 3)); // 빼기
console.log(calculate('multiply', 5, 6));  // 곱하기
console.log(calculate('divide', 6, 2));    // 나누기 
console.log(calculate('remainder', 3, 2)); // 나머지 : 1
console.log(calculate('????', 3, 6));      // 없는 커멘드
console.log('12 ========================== End function');