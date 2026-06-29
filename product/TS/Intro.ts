//TypeScriptは、JavaScriptとの互換性を保ちつつ、JavaScriptを拡張して作った言語
//TS > JS
//型システム
const isReady: boolean = false;
const age: number = 25;
const fullName: string = "John Doe";
const bigNumber: bigint = 100n;
const uniqueSymbol: symbol = Symbol("unique");
const notDefined: undefined = undefined;
const empty: null = null;
const a: any = 100; // なんでも代入できる
console.log(a * 3); // 操作もできる

const x: unknown = 100; // 代入はできる
console.log(x * 3); // 操作はできない

// 戻り値のない関数
function doSomething(): void {}

// 戻り値を返すことがありえない関数
//エラーを投げる関数や無限ループの関数の戻り値として使用
function throwError(): never {
  throw new Error();
}

//型エイリアス 可読性向上
//型エイリアスで名前をつけたユニオン型
type StringOrNumber = string | number;
let value: StringOrNumber;
value = "hello"; // string型が代入可能
value = 123; // number型も代入可能

//配列の型注釈
//配列の型注釈には型名[]またはArray<型名>を使う。
let numbers: number[];
let strings: Array<string>;

//読み取り専用配列
//readonly 型名[], ReadonlyArray<型名>で宣言
const numbers: readonly number[] = [1, 2, 3];
const strings: ReadonlyArray<string> = ["hello", "world"];
numbers[0] = 4; // 値を変更できない
strings.push("!"); // 要素を追加できない

//タプル型
//tupleで宣言 要素数、型が固定される
let tuple: [string, number] = ["hello", 123];

//readonly プロパティ 代入はできないが、参照はできる
let obj: { readonly name: string; age: number };

//オプションプロパティ ?
//プロパティを省略可能
let obj: { name: string; age?: number };


//インデックス型プロパティ
let obj: { [key: string]: number };
obj = { key1: 1, key2: 2 };
console.log(obj["key1"]); //1

//オプショナルチェーン ?.

//Enum 列挙型
enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue",
}

//ユニオン型
//boolean型とnumber型のどちらかを許容する変数
let value: boolean | number;
value = true; // 代入できる
value = 100; // 代入できる

//インターセクション型
//複数の型を&で一つの型に結合する
type Octopus = { swims: boolean };
type Cat = { nightVision: boolean };
type Octocat = Octopus & Cat;
const octocat: Octocat = { swims: true, nightVision: true };
console.log(octocat); //{ swims: true, nightVision: true }

//分割代入
//配列の各要素やオブジェクトのプロパティの分割代入

//TypeScriptではアロー関数や関数宣言に型注釈をつけることができる。

//引数 分割代入引数、オプション引数、デフォルト引数、残余引数が可能 

//instanceof
//オブジェクトが特定のクラスのインスタンスであるかを判定

//例外処理
//tryブロック内のコードは、エラーを検出し、catchブロックはエラーをハンドリングする。
//finallyブロックはエラーの有無に関係なく実行される。
try {
  throw new Error("Oops, something went wrong.");
} catch (error) {
  console.log(error);
} finally {
  console.log("This is the finally block. It always gets executed.");
}

//TSは非同期処理可能

//promise
//resolve()で成功時の処理、reject()で失敗時の処理を行う。

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved"); ///成功時にPromise resolvedの文字列を返す
  }, 2000); //2秒後にresolve()を呼び出す
});
promise.then((data) => { //.then()はPromiseが成功した場合に呼び出される reject()の場合はcatch()
  console.log(data);
});

//async/await
//thenを使わずに非同期処理を同期処理のように書ける 書き換えることができる
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function asyncFunction() { //2秒待ってから処理を実行する非同期関数
  console.log("Start");
  await delay(2000);
  console.log("End");
}
asyncFunction(); //Start → 2秒後 → End

//ジェネリクス <> 型をパラメータ化することができる 再利用性が高い
// Tが型変数
function identity<T>(arg: T): T {
  return arg;
}
// 型変数Tにstringを割り当てる
const output1 = identity<string>("myString");
// 型変数Tにnumberを割り当てる
const output2 = identity<number>(100);

//export default 1つのファイルに1つのデフォルトエクスポートを持つことができる
export default {event,handler}; //したとして
import shutDown from "./shutdown"; //や
import aaaaa from "./shutdown"; //のように別名を指定してimportできる

