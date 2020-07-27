/**
 * 기본적인 것들을 건드리지 않게끔 설정
 * 'use strict'; 
 */
'use strict';

console.log(`=== Class.js Start ===`);
/* Object-oriendted programing
    - Class and Object 
    class : tamplate
    object : instance of a class
*/

/*
    1. Class declarations
*/
class Person {
    // constructor : 생성자 
    constructor (name , age){
        //fields
        this.name = name;
        this.age = age;
    }

    // method
    speak() {
        console.log(`hellow ~ My Name is ${this.name} Age is ${this.age}`);
    }
}

const leo = new Person('leo', 38);

console.log(`${leo.name}`);
console.log(`${leo.age}`);
leo.speak();

console.log(`1 =====================`);

/*
    Getter And Setter : Class Member fields function
*/

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    
    get age() { // Getter 
        return this._age; // _ 를 붙인 변수를 사용함
    }
    
    set age(value) {  // Setter
        /*
        if (value < 0) {
            throw Error('나이는 음수 값이 올 수 없습니다.')
        }
        */
       this._age = value < 0 ? 0 : value; // 음수 값일떼 0으로
        // _ 를 붙인 변수를 사용함
    }
}

const user1 = new User('steve', 'Jobs', -1);
console.log(user1.age);
console.log(`2 =====================`);

/*
    3.
*/

console.log(`3 =====================`);

/*
    4. Static properties and methods
*/
class Article{
    static publisher = 'Dream Coding';

    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    get publisher(){
        return this._publisher;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }

    printArticleNumber(){
        console.log(this.articleNumber);
    }

}

const article1 = new Article(1);
const article2 = new Article(2);

console.log(Article.publisher);
Article.printPublisher();

article1.printArticleNumber();
article2.printArticleNumber();

/*
console.log(article1.publisher());
console.log(article2.publisher());

*/
console.log(`4 =====================`);

