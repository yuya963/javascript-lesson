//Q1 変数
let nickname = 'ごっしー';
let age = '28';
let greet = '私のニックネームは' + nickname + 'です。' + '年齢は' + age + '歳です。';
  console.log(greet);

//Q2 配列
let languages = ['Javascript', 'PHP', 'Ruby', 'Python', 'Go'];
let lenguagesText = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;
console.log(lenguagesText);

//Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
  birthday: '2000-09-27',
  sayHello() {
    console.log('Hello!');
  }
};

console.log(user.age);

//Q4 配列 × オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

//Q5 四則演算
let sum = 0;

for (let i = 0; i < playerList.length; i++) {
  sum += playerList[i].age;
}

console.log(sum / playerList.length);

//Q6 関数
function sayHello() {
  console.log('Hello');
}

sayHello();

const sayWorld = function() {
  console.log('World');
}

sayWorld();

//Q7 メソッド
user.sayHello();

//Q8 引数
let calc = {
  add: function(x, y) {
    return x + y;
  },
  subtract: function(x, y) {
    return x - y;
  },
  multiply: function(x, y) {
    return x * y;
  },
  divide: function(x, y) {
    return x / y ;
  }
};

function operate(operation, x, y) {
  return operation(x, y);
}

console.log(operate(calc.add, 5, 2)); 
console.log(operate(calc.subtract, 11, 1)); 
console.log(operate(calc.multiply, 7, 7)); 
console.log(operate(calc.divide, 25, 5)); 

//Q9 返り値
function remainder(x,y) {
  return x % y;
}
let result = remainder(5,3);
console.log('5を3で割った余りは' + result + 'です。');

//Q10 スコープ
/*function foo() {
  let x = 1;
}
console.log(x);*/
//変数xが関数fooのスコープにひもづけて定義されているため、変数xを関数fooの外で使おうとしても参照できずエラーがでる

//応用編
//Q1 標準組み込みオブジェクト
let random = Math.floor(Math.random()*10);
console.log(random);

//Q2 コールバック関数
function sayHi() {
  console.log('Hello World!');
}
setTimeout(sayHi, 3000);

//Q3 if
let num = 0;
if (num > 0) {
  console.log('num is greater than 0');
  }else if(num < 0) {
    console.log('num is less than 0');
  }else if(num === 0) {
    console.log('num is 0');
  }

//Q4 for
const numbers = [];
for (number = 0; number < 100; number++){
  numbers.push(number);
}

console.log(numbers);

//Q5 for×if
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
  let num = mixed[i];
  if (typeof num === 'number') {
    if (num % 2 === 0) {
    console.log('even');
    }else {
      console.log('odd');
    }
  }else {
    console.log('not number');
    }
  }
