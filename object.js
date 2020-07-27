/**
 * 기본적인 것들을 건드리지 않게끔 설정
 * 'use strict'; 
 */
'use strict';

/*
    Object 
    object = { key : value }
*/


/*
const name = 'leos';
const age = 4;
print(name, age);

function print(name, age) {
    console.log(name);
    console.log(age);
}
기존의 변수에 값을 할당할 때의 단점은 코드의 일관성이 없어짐
*/
const obj1 = {}; // object literal syntex
const obj2 = new Object();  // object construcor syntex

function printPerson(person) {
    console.log(person.name);
    console.log(person.age);
}

const leo = { name : 'leo', age : 37 };
printPerson(leo);

leo.hasJob = true; // key 추가해서 값을 할당 가능
console.log(leo.hasJob);

delete leo.hasJob; // key properties 삭제 가능함
console.log(leo.hasJob);
console.log(`1 ========================`);

/*
    2. Computed properties
*/
console.log(leo.name); // object이름.key값 으로 value 를 가지고 옴 
console.log(leo['name']); // object이름.['key값'] 으로 value 를 가지고 옴 
console.log(`========================`);

leo['hasJob'] = true;
console.log(leo.hasJob);
console.log(`========================`);

function printObjectValue (obj, key) {
    // console.log(obj.key); 이 코드는 KEY 의 대한 값을 가져오지 못한다.
    console.log(obj[key]);
} // 오브젝트와 키를 전달하면 해당 오브젝트 할당된 값을 출력

printObjectValue(leo, 'name');
printObjectValue(leo, 'age');

/*
    3. Property values shorhead
*/

const person1 = { name : 'bob', age : 2 };
const person2 = { name : 'steve', age : 3 };
const person3 = { name : 'dave', age : 4 };
const person4 = new Person('leo', 5);

console.log(person4);
console.log(`3 ~ 4 ========================`);
/*
function makePerson(name, age) {
    return {
        // name : name ,
        // age : age
        name ,
        age 
    }
}
*/

/*
    4. Constructor Function : 오브젝트를 생성해준다.
*/
function Person(name, age) {
    this.name = name;
    this.age = age;
}

/*
    5. in operator :  오브젝트 안에 key 가 있는지 알아보는 keyword [true and false]
*/
console.log('name' in leo);
console.log('age' in leo);
console.log('random' in leo); // 해당 key 는 생성된 오브젝트에 없음
console.log(leo.ramdom); // 해당 key 는 생성된 오브젝트에 없음
console.log(`5 ========================`);

/*
    6. for...in vs for...of : 
    for (key in obj)
*/
// console.clear();
// for in
for (let key in leo) {
    console.log(key);
}
console.log(`========================`);
// for of []
const array = [1,2,3,4,5];
/*
for (let i =0; i < array.length; i++) {
    console.log(array[i]);
}
*/
for (let value of array) {
    console.log(value);
}
console.log(`6 ========================`);

/*
    7. object Cloning 
    Object.assign(dest, [obj1, obj2, obj3 ...])
*/
const user = {name : 'leo', age : 20};
const user2 = user;

console.log(user);
console.log(user2);
console.log(`========================`);

// Old Way : 이전 방식
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.log(user3);
console.log(`========================`);

//new Way
//const user4 = new Object(); //Object.assign(user4, user); 
const user4 = Object.assign({}, user);
// user.name = 'leoDays';
//console.log(user);
console.log(user4);
console.log(`========================`);


