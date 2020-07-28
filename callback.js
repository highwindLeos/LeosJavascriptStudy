/**
 * 기본적인 것들을 건드리지 않게끔 설정
 * 'use strict'; 
 */
'use strict';

// Javascript is Synchronous.
// hoisting : var , function declaration

console.log('1');
setTimeout(() =>  console.log('2') , 1000); // 비동기 적인 호출 (1초후에 콜백 함수 호출.)
console.log('3');

// Synchronous callback


// Asynchronous callback