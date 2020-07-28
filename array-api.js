/**
 * 기본적인 것들을 건드리지 않게끔 설정
 * 'use strict'; 
 */
'use strict';

/*
    Quiz 1 : make a string out of an array
*/
{
    const fruits = ['사과', '바나나', '딸기'];
    // A
    const result = fruits.join('|'); // 원하는 구분자로 배열을 문자열로 반환
    console.log(result);
    console.log(`===================`);
}

/*
    Quiz 2 : 
*/
{
    const fruits = '사과, 바나나, 딸기, 수박';
    // A
    const result = fruits.split(','); // 원하는 구분자로 문자열의 값을 배열로 나누어서 반환 [구분자 필수]
    console.log(result);
    console.log(`===================`);
}

/*
    Quiz 3 : 
*/
{
    const fruits = ['사과', '바나나', '딸기', '수박', '참외'];
    // A
    const result = fruits.reverse(); // 기존 배열의 index 는 반전해 다른 배열을 생성해 줌. 기존 배열도 값이 변경됨
    console.log(result);
    console.log(fruits); // 기존의 배열은 영향이 있다.
    console.log(`===================`);
}

/*
    Quiz 4 : 배열의 값 중 첫번째와 두번째를 재외한 배열을 만들어 보자. 
*/
{
    const array = [1, 2, 3, 4, 5];
    // A
    const result = array.slice(2, array.length); // 배열을 잘라준다. slice(자를 시작 인덱스, 자를 끝 인덱스) 
    console.log(result);
    console.log(array); // 기존의 배열은 영향이 있다.
    console.log(`===================`);
}

// Example Class
class Student {
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true,  45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true,  90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true,  88)
]; // Student Array

/*
    Quiz 5 : score 가 90 점인 학생 찾기. 
*/
{
    /* 
    const result = students.find((student, index) => {
       // console.log(student, index);
       return student.score === 90;
    });
    */  
    const result = students.find((student, index) => student.score === 90);  // 위의 구문과 정확히 같은 구문. callback 에서 필요한 로직으로 수행후 값을 반환.
    console.log(result);
    console.log(`===================`);
}


/*
    Quiz 6 : enrolled 한 학생 [수업을 듣는 학생] 학생 찾기. 
*/
{
    const result = students.filter((student, index) => student.enrolled );
    console.log(result);
    console.log(`===================`);
}

/*
    Quiz 7 : 점수만으로 이루어진 배열을 만든다. 
*/
{
    const result = students.map((student) => student.score); // map() : 배열안의 있는 값을 콜백에서 가공해서 반환.
    console.log(result);
    console.log(`===================`);
}


/*
    Quiz 8 : 학생의 점수가 50점 이하인 사람이 있는지를 확인. 
*/
{
    const result = students.some((student) => student.score < 50); // some() : 배열의 안의 값을 콜백에서 확인후 boolean 값으로 반환. 하나라도 있다면 true
    console.log(result);

    const result2 = !students.every((student) => student.score >= 50); // every() : 배열안의 있는 값을 콜백에서 확인후 boolean 값으로 반환. 모두 있다면 true
    console.log(result2);
    console.log(`===================`);
}


/*
    Quiz 9 : 학생의 점수 평균값을 산출. 
*/
{
    /*
    const result = students.reduce((prev, curr) => {
        console.log(prev);
        console.log(curr);
        console.log(curr.score);
        return prev + curr.score;
    } , 0); // reduce(callback, 초기값) : 배열안의 값을 순환하면서 계산된 누적값을 반환. 
    */
    const sum = students.reduce((prev, curr) => prev + curr.score, 0); // reduce(callback, 초기값) : 배열안의 값을 순환하면서 계산된 누적값을 반환. 
    console.log(`총합 : ${sum}`); 
    const avg = sum / students.length;// 평균 = 누적 점수 합 /  학생수
    console.log(`평균 : ${avg}`); 
    console.log(`===================`);
}


/*
    Quiz 10 : 학생의 점수를 string 값으로 만들기. 
*/
{
    const result = students.map((student) => student.score)// .filter((score) => score >= 50) // filter()
                           .join(', '); // function chaining  [배열 API 함수를 연결해서 가공함.]
    console.log(`result : ${result}`); 
    console.log(`===================`);
}

/*
    Quiz bonus : 학생의 점수를 string 값으로 만들기. 
*/
{
    const result = students.map((student) => student.score )
                           .sort((a, b) => a -b ) // 정렬 : 정렬 순서를 정의하는 함수. 생략하면 배열은 각 요소의 문자열 변환에 따라 각 문자의 유니 코드 코드 포인트 값에 따라 정렬됩니다.
                           .join()
    console.log(`result : ${result}`);
    console.log(`Array Quiz End ===================`);
}