/**
 * 기본적인 것들을 건드리지 않게끔 설정
 * 'use strict'; 
 */
'use strict';


/*
    1. JSON 
    object <-> string 
    serialized <-> desrialized
*/
// Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);
console.log(`================================`);

// array
json = JSON.stringify(['apple', 'banana']); // 해당 배열과 같은 문자열을 반환 : ['apple', 'banana']
console.log(json);
console.log(`================================`);

// 
let rabbit = {
    name : 'tori' ,
    color : 'white' ,
    size : null ,
    birthDay : new Date() ,
    // symbol : new Symbol('id'), // 해당 값은 JSON String 으로 변환 되지 않는다.
    jump : () => console.log(`${this.name} can jump!!!`) // 해당 값은 JSON String 으로 변환 되지 않는다.
}; 

json = JSON.stringify(rabbit);
console.log(json);
console.log(`================================`);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);
console.log(`================================`);

json = JSON.stringify(rabbit, (key, value) => {
    // console.log(`key : ${key}, value : ${value} `);
    return key === 'name' ? 'leo' : value; // CallBack 함수에서 해당 오브젝트의 값을 가지고 제어하여 값을 재가공 반환 할 수 있음
});
console.log(json);
console.log(`================ Object to JSON ================`);

// JSON to Object
// parde(string)
json = JSON.stringify(rabbit);
// const obj = JSON.parse(json); 기본 변환...
const obj = JSON.parse(json, (key, value) => {
    // console.log(`key : ${key}, value : ${value} `);
    return key === 'birthDay' ? new Date(value) : value;
}); // parse(obj, 콜백함수) : 콜백 함수에서 전달 매개변수를 가지고 값을 재가공하여 진행할수 있다.
console.log(`json : ${json}`);
console.log(obj);

rabbit.jump(); // 기존 오브젝트의 함수는 동작함
// obj.jump();    // 해당 함수는 문자열로 변경되었을때 함수가 존재하지 않으므로 호출불가. 

console.log(rabbit.birthDay.getDate()); // 날짜 정보 반환
console.log(obj.birthDay.getDate()); // 날짜 정보 반환
console.log(`================ JSON to Object ================`);
