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

