//consoleについて https://developer.mozilla.org/ja/docs/Web/API/console

/*
//log 出力
console.log(3+4);
console.log("Hello, World!");
console.log("文字列: %s", "hello");
console.log("数値: %d", 123);
console.log("オブジェクト: %o", { a: 1 });

//assert デバッグ用出力falseのときにエラーを出力
console.assert(1 === 1);
console.assert(1 === 2);
const x = 5;
console.assert(x > 10, x);

//count カウンタを出力
const label = "myCounter";
console.count(label);
console.count(label);
console.count()
console.count(label)
console.count();
console.countReset(label); //カウンタをリセット出力はない
console.count(label);


//debug デバッグ用出力 開発中だけの出力に使用logと違い、
// debugは開発者ツールの設定で表示/非表示を切り替えることができます。
// 通常は、開発中にのみ表示されるように使用されます。
function calculate(a, b) {
  console.debug("入力:", a, b);
  const result = a + b;
  console.debug("結果:", result);
  return result;
}


//error エラー出力
const code = 404;
const url = "/api/user";

console.error("エラー:", code, url);


//group グループ化 出力を整理する

console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the outer level");


console.log(0b111110111); // 503 2進数
console.log(0o767); // 503 8進数
console.log(0x1f7); // 503 16進数
console.log(5.03e2); // 503 指数表記 5.03 × 10^2

console.info("aaa") //ユーザーや開発者に伝えたい情報


// console.table 表形式で出力

const people = [
  ["Tyrone", "Jones"],
  ["Janet", "Smith"],
  ["Maria", "Cruz"],
];
console.table(people);

// 制限表示

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const tyrone = new Person("Tyrone", "Jones");
const janet = new Person("Janet", "Smith");
const maria = new Person("Maria", "Cruz");

console.table([tyrone, janet, maria], ["firstName"]);

console.time() //start (ms) 10000個まで同時実行可能
console.time(label) //end (ms) labelでタイマー識別可能

console.time();
reticulateSplines();
console.timeLog("default", "Hello", "world");
//console.timelog(label, val1, val2, ...);
// default: 780ms Hello world
console.timeEnd();
*/
console.warn("warning log level")