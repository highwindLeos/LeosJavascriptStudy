/**
 * 기본적인 것들을 건드리지 않게끔 설정
 * 'use strict'; 
 */
'use strict';

/* 
    1. variable 
    let (added in ES6)
*/
let globalName = 'Global name'; 
{
    let name = 'leos';
    console.log(name);
    name = 'hellow world';
    console.log(name);
}
console.log(globalName);
console.log(name);
console.log('=======================');

/*
    2. var key word : 기존 변수 선언 키워드
    var hoisting (move declaration from bottom to top) : 선언 위치를 최고 상위로 올라가게 됨
*/

{
    age = 37; // var 를 선언하지 않아도 변수가 할당됨.
    var age;
}
console.log(age);
console.log('=======================');

/*
    3. const key word : 상수 키워드 (Constants) [read only]
    - 값의 보안성
    - 프로세스에 의한 값 변경 불가
    - 명확한 코드의 가독성이 상승    
*/
const dayInWeek = 7;
const maxNumber = 5;

/*
    4. Variable Type  
    - string, number , boolean, null, undefined, symbol
    - object, box container
    - function 
*/
const count = 17;
const size = 17.1;

console.log(`value : ${count}, type : ${typeof count}`)
console.log(`value : ${size}, type : ${typeof size}`)
console.log('=======================');

/* 4. Variable Type  
    number : 숫자형 타입 - speicla numeric values : infinty, -infinty, Nan
*/
const infinity = 1 / 0; // infinty
const nagativeInfinity = -1 / 0; //-infinty
const nAn = 'not A number' / 2; // string 과 number 의 연산 결과 Nan

console.log(infinity);
console.log(nagativeInfinity);
console.log(nAn);
console.log('=======================');

/* 4. Variable Type  
    bigInt : 아주 큰수의 형 - 큰수 뒤에 n 이 붙음.
*/
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`value : ${bigInt}, type : ${typeof bigInt}`)
console.log('=======================');

/* 4. Variable Type  
    string : 문자, 문자열 타입
*/
const char = 'c';
const javascript = 'javascript';
const greeting = 'hellow ' + javascript;
console.log(`value : ${greeting}, type : ${typeof greeting}`)
const hellowJavascript = `Hi! ${javascript}!`;
console.log(`value : ${hellowJavascript}, type : ${typeof hellowJavascript}`)
console.log('=======================');

/* 4. Variable Type  
    boolean : 논리 타입
    false : 0, null, undefined, Nan, ''
    true : any other value
*/
const canRead = true;
const booleanTest = 3 < 1; // false
console.log(`value : ${canRead}, type : ${typeof canRead}`);
console.log(`value : ${booleanTest}, type : ${typeof booleanTest}`);
console.log('=======================');

/* 4. Variable Type  
    symbol : 심볼 타입
    unique identifiers for object 
*/
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value : ${gSymbol1.description}, type : ${typeof gSymbol1}`);
console.log(`value : ${gSymbol2.description}, type : ${typeof gSymbol2}`);
console.log('=======================');

/* 4. Variable Type  
Dynamic typing
*/
let text = 'hellow';
console.log(`value : ${text.charAt(0)}, type : ${typeof text}`);
console.log(`value : ${text}, type : ${typeof text}`);
text = 1;
console.log(`value : ${text}, type : ${typeof text}`);
text = '7' + 5;
console.log(`value : ${text}, type : ${typeof text}`);
text = '8' / '2';
console.log(`value : ${text}, type : ${typeof text}`);
console.log('=======================');