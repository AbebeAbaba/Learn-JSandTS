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
type StringOrNumber = string | number;
let value: StringOrNumber;
value = "hello"; // string型が代入可能
value = 123; // number型も代入可能

