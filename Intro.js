//change learn web https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Introduction
//It is deivided into 3 slevels
//This is introduction

const JSandJava = [
    ["JS", "オブジェクトのデータ型に区別はない", "プロパティとメソッド動的に追加できる", "変数のデータ型は宣言不要"], 
    ["Java", "オブジェクトのデータ型に区別がある", "動的にプロパティやメソッドを追加することができない", "変数のデータ型は宣言必須"]
];
console.table(JSandJava);

//宣言 3種類
//var 再代入再宣言可能　巻き上げのため限りなく先頭に置くとよい
//let ブロックスコープ 再代入可能
//const ブロックスコープ　再代入再宣言不可

//グローバル変数 window.変数名

//データ型変換可能
let answer = 42;
answer = "Thanks for all the fish!";

//文字列から数値変換
parseInt()
parseFloat()
Number()

//配列リテラル
const coffees = ["French Roast", "Colombian", "Kona"];
const myList = ["home", , "school", ,]; //length 4

//拡張オブジェクトリテラル
const obj = {
  // __proto__
  __proto__: theProtoObj, //プロトタイプ継承
  // 短い 'handler: handler' の形式
  handler, //handler: handler 同名なら短縮可能
  // メソッド
  toString() { //toString: function () {
    // スーパークラスの呼び出し
    return `d ${super.toString()}`;
  },
  // 計算による（動的な）プロパティ名
  ["prop_" + (() => 42)()]: 42,
};

// ホワイトスペースを含む文字列の文字の数を出力する。
console.log("Joyo's cat".length); // この場合は 10 が出力される。

//同じ出力 
"Hello " + name
`Hello ${name}`


/* by MDN
\0	ヌル文字
\b	バックスペース
\f	改ページ
\n	改行
\r	復帰
\t	タブ
\v	垂直タブ
\'	アポストロフィまたは単一引用符
\"	二重引用符
\\	バックスラッシュ (\)
\XXX	Latin-1 エンコーディングの文字を 3 桁以下の 8 進数で指定したもので、XXX の部分は 0 ～ 377 の範囲です。例えば、\251 は著作権記号を示します。
\xXX	Latin-1 エンコーディングの文字を 2 桁の 16 進数で指定したもので、XX の形で、00 ～ FF の範囲です。例えば、\xA9 は著作権記号を示します。
\uXXXX	Unicode 文字を 4 桁の 16 進数 XXXX 指定したものです。例えば、\u00A9 は著作権記号を示します。Unicode エスケープシーケンスをご覧ください。
\u{XXXXX}	Unicode コードポイントエスケープです。 例えば \u{2F804} は Unicode エスケープである \uD87E\uDC04 と同じです。
*/

const str =
  "this string \
is broken \
across multiple \
lines.";
console.log(str); // この文字列は複数行にわたって分解されます。 つまり一文で出力

//例外発生
throw expression; // expressionは例外オブジェクト

function getMonthName(mo) {
  mo--; // 月の数字を配列のインデックスに合わせる (0 = Jan, 11 = Dec)
  // prettier-ignore
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  if (!months[mo]) {
    throw new Error("Invalid month code"); //throwで例外発生 -> catch(例外オブジェクト){}
  }
  return months[mo];
}

try {
  // 実行を試みる文
  monthName = getMonthName(myMonth); // この関数が例外を投げる場合がある
} catch (e) {
  monthName = "unknown";
  logMyErrors(e); // 例外オブジェクトeをエラーハンドラーに渡す
}

//finally 例外が発生したかにかかわらず実行される
function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch (e) {
    console.log(1);
    // この返値は、finally ブロックが
    // 完了するまで保留となる
    return true;
    console.log(2); // 到達しない
  } finally {
    console.log(3);
    return false; // 直前の "return" が上書きされる
    // ここで `f` から出る
    console.log(4); // 到達しない
  }
  console.log(5); // 到達しない
}
console.log(f()); // 0, 1, 3, false

//do{} while()   while()と違い、do()実行後にwhile()の条件判定を行うため while()がfalseでも1回は実行される
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

/*ラベル文
label:
      statement
break label; lbaelを終了させる  continue label; も可能
*/
let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log("外側のループ: " + x);
  x += 1;
  z = 1;
  while (true) {
    console.log("内側のループ: " + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}

//for 変数 in オブジェクト オブジェクトの列挙可能なプロパティ分ループ
const user = {
  name: "Taro",
  age: 20,
  country: "Japan"
};

for (const key in user) {
  console.log(key);
} // name, age, country

//for 変数 of オブジェクト 配列や文字列などの反復可能なオブジェクト分ループ 変数には値が入る
//以下はfor in とfor ofの違いの例
const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) {
  console.log(i);
}
// "0" "1" "2" "foo"

for (const i of arr) {
  console.log(i);
}
// Logs: 3 5 7

//関数式 変数に関数を代入 関数を引数として渡すこともできる　また関数式は他変数と同様に宣言前に呼び出すことができない
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6

//無名関数 関数式としても宣言式としても使用できる　一度しか使わない場合が多い
const f = function () {
  console.log("hi");
};

//クロージャ
// 外側の関数は変数 "name" を定義
const pet = function (name) {
  const getName = function () {
    // 内側の関数は外側の関数の変数 "name" にアクセス可能
    return name;
  };
  return getName; // 内側の関数を返すことで、外側の関数に公開する
};
const myPet = pet("Vivie");

console.log(myPet()); // "Vivie"

//多重入れ子関数
/*関数 B と C はクロージャとなるので、 B は A にアクセスでき、 C は B にアクセスできます。
さらに、 C は A にアクセス可能な B にアクセスできるので、 C は A にもアクセスできます。
このようにして、クロージャは多重スコープを導入できます。つまり関数のスコープが再帰的に包含されているのです。これを「スコープチェーン」と呼びます [MDN]

function B(y), function C(z)は定義のみで呼び出しではないため、関数 A の実行が完了するまで呼び出されない。つまり、関数 A の実行が完了するまでは、関数 B と C は定義されているだけで、実際には呼び出されません。
*/
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // 6 がログに出力される (1 + 2 + 3)


//onsole.log(outside()(10)) = outside() inside(10)
function outside() {
  const x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

console.log(outside()(10)); // 10 ではなく 20 を返す

//arguments オブジェクトの使用
function myConcat(separator) {
  let result = ""; // リストを初期化する
  // 引数について繰り返し
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}

//(", ", "red", "orange", "blue")を配列のように扱ってる
console.log(myConcat(", ", "red", "orange", "blue"));
// "red, orange, blue, "

console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// "elephant; giraffe; lion; cheetah; "

console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
// "sage. basil. oregano. pepper. parsley. "

//デフォルト引数
//b がundefinedのとき、bに1を代入する
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

console.log(multiply(5)); // 5

//残余引数
//引数を逐一指定するのではなく、可変長引数を受け取ることができる
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]

//アロー関数
//例
const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
  return s.length;
});

console.log(a2); // [8, 6, 7, 9]
//上記と同じ出力 s.length =  返り値
const a3 = a.map((s) => s.length);

console.log(a3); // [8, 6, 7, 9]

//Date
const dateObjectName = new Date([parameters]);
//paremeterで日付を指定できる、引数なしで現在の日付と時刻を表すDateオブジェクトが作成される

//正規表現
exec() //文字列内検索 結果配列 なければnull
test() //文字列内検索 true false
match() //文字列内検索 抽出 すべて結果の配列 なければnull
matchAll() //文字列内検索 すべての結果を含むイテレータを返す
search() //文字列内検索 最初の一致の位置を返す なければ-1
replace() //文字列内検索 置換
replaceAll() //文字列内検索 すべての一致を置換
split() //文字列内検索 分割

//配列の長さ変更で要素削除可能
const cats = ["Dusty", "Misty", "Twiggy"];
console.log(cats.length); // 3

cats.length = 2;
console.log(cats); // [ 'Dusty', 'Misty' ] - Twiggy は削除される

cats.length = 0;
console.log(cats); // []; 配列 cats は空になる

cats.length = 3;
console.log(cats); // [ <3 つの空アイテム> ]

//配列反復処理
const sparseArray = ["first", "second", , "fourth"];

sparseArray.forEach((element) => {
  console.log(element);
});
// Logs:
// first
// second
// fourth

if (sparseArray[2] === undefined) {
  console.log("sparseArray[2] is undefined"); // true
}

const nonsparseArray = ["first", "second", undefined, "fourth"];

nonsparseArray.forEach((element) => {
  console.log(element);
});
// Logs:
// first
// second
// undefined
// fourth

//for in でloopは配列の要素だけでなく、配列のプロパティも列挙するため、for in は配列の反復処理には適さない

//配列の結合
concat()
let myArray = ["1", "2", "3"];
myArray = myArray.concat("a", "b", "c");
// myArray は ["1", "2", "3", "a", "b", "c"] になる

const myArray2 = ["Wind", "Rain", "Fire"];
const list = myArray2.join(" - "); // list は "Wind - Rain - Fire" になる

//pop() 配列の最後の要素を取り除き、返す shift() 配列の最初の要素を取り除き、返す
//unshoft() 配列の最初に()内の要素を追加し、返す
//slice() (1, 4)インデックス1から4の前までの要素を新しい配列として返す
//at() 負の整数を使用すると末尾からの要素を取得できる　(-1)なら最後の要素を返す

//splice() splice(1,3, "a", "b") インデックス1から3の前までの要素を削除し、"a", "b"を追加する
//配列をソートできる sort()

//疎配列
// Array コンストラクター:
const a = Array(5); // [ <5 つの空の項目> ]

// 配列リテラルの連続したカンマ:
const b = [1, 2, , , 5]; // [ 1, 2, <2 つの空の項目>, 5 ]

// array.length より大きいインデックスを持つスロットを直接設定:
const c = [1, 2];
c[4] = 5; // [ 1, 2, <2 つの空の項目>, 5 ]

// .length を直接設定して配列を延長する:
const d = [1, 2];
d.length = 5; // [ 1, 2, <3 つの空の項目> ]

// 要素の削除:
const e = [1, 2, 3, 4, 5];
delete e[2]; // [ 1, 2, <1 つの空の項目>, 4, 5 ]

//Map　オブジェクトに似ているが、キーの型に制限がない
//キーが文字列以外でも可能 サイズも確認が容易
const sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("dog"); // woof
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");
sayings.has("dog"); // false

for (const [key, value] of sayings) {
  console.log(`${key} goes ${value}`);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0

//Set 重複しない配列、インデックスでアクセスできない 配列にしてからじゃないと並び替えできない

//プロパティ削除
// 2 つのプロパティ a と b を持つ新しいオブジェクト myobj を作成。
const myObj = { a: 5, b: 12 };

// プロパティ a を削除すると、myobj には b プロパティだけが残る。
delete myObj.a;
console.log("a" in myObj); // false

//プロパティ追加 prototype
//これはCarのなかにcar1, car2があったらcar2.colorもredになる
Car.prototype.color = "red";
console.log(car1.color); // "red"

//method 使用意図が分かりやすい this.がつかえる メモリ節約になる
objectName.methodName = functionName;

const myObj = {
  myMethod: function (params) {
    // ...処理を行う
  },
  // これでも動作します
  myOtherMethod(params) {
    // ...他の処理を行う
  },
};
//例
Car.prototype.displayCar = function () {
  const result = `美しい ${this.year} 年式の ${this.make} ${this.model}`;
  console.log(result);
};

//getter setter 決めたプロパティの値を取得したり設定
const myObj = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  },
};

console.log(myObj.a); // 7
console.log(myObj.b); // 8、 get b() メソッドから返されたもの
myObj.c = 50; // set c(x) メソッドを呼び出し
console.log(myObj.a); // 25

//constructor クラスで作成されたオブジェクトインスタンスの生成と初期化を行う
//クラス宣言は巻き上げがないため、クラス宣言の前にクラスを使用することはできない
//関数宣言は巻き上げがあるため、関数宣言の前に関数を使用することができる

//インスタンスメソッド
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  getRed() {
    return this.values[0];
  }
  setRed(value) {
    this.values[0] = value;
  }
}

const red = new Color(255, 0, 0);
red.setRed(0);
console.log(red.getRed()); // 0。もちろん、この段階では「黒」と呼ばれるものなので。

//privatefield クラスの外部からアクセスできないフィールドを定義するために使用される
//プライベートフィールドがパブリックフィールドやメソッドと名前が衝突することはない
class Example {
  #value = 1;
  value = 2;
  value(){
    //処理
  }

  print() {
    console.log(this.#value); // 1
    console.log(this.value);  // 2
  }
} //が可能になる

//extends クラスの継承
class ColorWithAlpha extends Color {
  #alpha;
  constructor(r, g, b, a) {
    super(r, g, b);
    this.#alpha = a;
  }
  get alpha() {
    return this.#alpha;
  }
  set alpha(value) {
    if (value < 0 || value > 1) {
      throw new RangeError("Alpha value must be between 0 and 1");
    }
    this.#alpha = value;
  }
}

//promise 非同期処理の結果を表すオブジェクト 用意されたプロミスを使うことが多い
//連鎖
doSomething()
  .then(result => doSomethingElse(result))
  .then(newResult => doThirdThing(newResult))
  .then(finalResult => console.log(finalResult))
  .catch(failureCallback); 

//エラー処理
doSomething()
  .then(...)
  .then(...)
  .catch(err => console.error(err));
  

//Promiseのコンストラクタ
new Promise((resolve, reject) => { ... })

//then() / .catch()
promise.then(value => ...).catch(err => ...)

//async/await
async function foo() { await somePromise }

//Promise.all など
Promise.all([p1, p2, p3])


//型つき配列
//型付き配列はメモリが連続して確保されるので、処理が速い

// 普通の配列（何でも入る）
const arr = [1, "hello", true, null];

// 型付き配列（同じ型だけ）
//Unit8Array Unit16Array Uint32Array Float32Array Float64Array Int8Array Int16Array Int32Array など
const typed = new Int32Array([1, 2, 3, 4]);  // 32ビット整数だけ

//イテレーター next() メソッドを持つオブジェクト 呼ぶたびに次の値を返す
//for of の裏側
//イテレーターを作成することも可能
function makeCounter(max) {
  let count = 0;
  return {
    next() {
      if (count < max) {
        return { value: count++, done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  };
}

const counter = makeCounter(3);
counter.next();  // { value: 0, done: false }
counter.next();  // { value: 1, done: false }
counter.next();  // { value: 2, done: false }
counter.next();  // { value: undefined, done: true }

//ジェネレーター イテレーターを簡単に作成するための構文
//ジェネレータ関数は function* で定義される yieldも使用する
//最初に呼び出されると、ジェネレーター関数はコードを実行せず、
// ジェネレーターと呼ばれるイテレーターを返します。
// ジェネレーターの next メソッドを呼び出すことによって値が消費されると、
// ジェネレーター関数はyieldで一時停止、またnext()で再開

