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
function printImmedately(print) {
    print();
}

printImmedately(() => console.log('hellow'));

// Asynchronous callback
function printWhitDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWhitDelay(()=> console.log('async callback'), 2000); // 2초

/*
    Callback hell example
*/

class UserStorage {
    loginUser (id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'leo' && password === 'highwind') ||
                (id === 'leos' && password === 'highwind26') 
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'leo' || user === 'leos') {
                onSuccess({name : 'leo', role : 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();

const id = prompt('아이디를 입력하세요.');
const password = prompt('패스워드를 입력하세요.');

userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWhitRole => {
                alert(
                    `Hellow ${userWhitRole.name}, You have a ${userWhitRole.role} role.`
                );
            },
            error => {
                console.log(error);
            }
        )
    },
    error => console.log(error)
);