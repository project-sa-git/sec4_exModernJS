// const letの変数宣言
var val1 = "var変数";

console.log(val1);

// 上書き
val1 = "var変数2";
console.log(val1);

var val1 = "var変数再宣言";
console.log(val1);

// const letの変数宣言
let val2 = "let変数";

console.log(val2);

// letは上書きが可能
val2 = "letを上書き";
console.log(val1);

// letは再宣言不可
// let val2 = "var変数再宣言";
// console.log(val1);

// constを宣言
const var3 = "constを宣言";
console.log(var3);

// constは上書きも再宣言もできない
// var3 = "constを上書き"
// console.log(var3);
// const var3 = "constを宣言";
// console.log(var3);


// constで作った配列に上書きや追加はOK（constで定義したオブジェクトはプロパティの変更が可能）
// 基本的にオブジェクトの定義はconstしか使わない。
const val4 = {
  name: "やまだ",
  age: 20,
}
console.log(val4);

val4.name = "yamada";
val4.address = "Tokyo";
console.log(val4);



// constの配列（[0]表記）
const val5 = ['dog', 'cat'];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);


// テンプレート構文
const namee = "さむ";
console.log(`テンプレート構文は${namee}`);
// 通常 
// console.log("通常は" + name);


/** 
 * 
 * アロー関数
 * 
*/

// 従来の書き方
// function func1(str) {
//   return str;
// }
　

// 関数名を定数名において書ける
const func1 = function (str) {
  return str;
};

console.log(func1("func1です"));


// アロー関数
const func2 = (str) => {
  return str;
}
console.log(func2("func2です"));


// 中の式が単一式の場合、returnを省略できる
const func3 = (str) => str;

console.log(func3("func3です"));


const func4 = (num1, num2) => {
  return num1 + num2;
}

console.log(func4(2,3));
// 5　が返る

const func5 = (num3, num4) => num3 - num4;
console.log(func5(5,4));
// 1 が返る


/*
*分割代入
*/
const myProfile = {
  name: "はま",
  age: 30,
};

const {  name, age } = myProfile;
const message2 = `名前は${name}です、年齢は${age}です。`
console.log(message2);


const myProfileAry = ['さむう', 34];
const message3 =`名前は${myProfileAry[0]}です`
console.log(message3);

const [nameAry, ageAry] = myProfileAry;
const message4 = `名前は${nameAry}です。年齢は${ageAry}歳です。`;
console.log(message4);


/***
 * デフォルト値、引数など
 */
// 初期値がゲスト。
const sayHello = (name="ゲスト") => console.log(`こんにちは、${name}`);
sayHello("さむ");







