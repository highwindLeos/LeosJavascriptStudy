/**
 * 기본적인 것들을 건드리지 않게끔 설정
 * 'use strict'; 
 */
'use strict';

// Array
/*
    1. Declaration
*/
const arr1 = new Array();
const arr2 = [1, 2];
console.log(`1 =========================`);

/*
    2. Index position
*/
const fruits = ['사과', '바나나'];

console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length -1]); // 마지막 요소를 가져옴
console.log(`2 =========================`);

/*
    3. Looping Array
*/
// for loop
for (let i=0; i < fruits.length; i++){
    console.log(fruits[i]);
}
console.log(`=========================`);

// for...of
for (let fruit of fruits){
    console.log(fruit);
}
console.log(`=========================`);

// forEach()
fruits.forEach((fruit) => console.log(fruit));  
console.log(`=========================`);
fruits.forEach((fruit, index) => console.log(fruit, index));  
console.log(`3 =========================`);

/*
    4. Addtion, deletion, copy
*/
//   push : add an item to the end
fruits.push('딸기', '바나나');
console.log(fruits);
console.log(`push() =========================`);
//   pop : remove an item to the benigging
fruits.pop();
fruits.pop();
console.log(fruits);
console.log(`pop() =========================`);

//  unshift : add an item to the benigging
fruits.unshift('딸기', '바나나');
console.log(fruits);
console.log(`unshift() =========================`);
//  shift : remove an item to the benigging
fruits.shift();
fruits.shift();
console.log(fruits);
// note :pop 과 push 가 shift and unshift 보다 빠르다!
console.log(`shift() =========================`);

// splice : remove an item by index position
fruits.push('딸기', '오렌지', '레몬');
console.log(fruits);
fruits.splice(1, 1); // splice(시작 인덱스, 지울 개수)  
console.log(fruits); // 바나나 삭제
fruits.splice(1, 1, '수박', '참외'); // splice(시작 인덱스, 지울 개수, 추가할 데이터) : 딸기 지우고 추가 
console.log(fruits);
console.log(`splice() =========================`);

// concat : combine two arrays : 다른 배열을 붙임
const fruits2 = ['배', '코코넛'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);
console.log(`concat() =========================`);
console.log(`4 =========================`);
/*
    5. Seraching
    find the index
*/
// indexOf : 해당 값이 있는 배열의 index 를 반환
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.indexOf('수박'));
console.log(fruits.indexOf('코코넛'));
console.log(`indexOf() =========================`);

// includes : 해당 값이 배열에 있는지 확인
console.log(fruits.includes('사과'));
console.log(fruits.includes('수박'));
console.log(`includes() =========================`);

// lastIndexOf : 배열의 뒷 인덱스 부터 값을 찾아서 index 를 반환
fruits.push('사과');
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.lastIndexOf('사과'));
console.log(`lastIndexOf() =========================`);
console.log(`5 =========================`);
