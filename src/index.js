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








