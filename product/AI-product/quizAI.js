#!/usr/bin/env node
const readline = require('readline');

const knowledge = [
	{
		id: 'var-let-const',
		patterns: ['var', 'let', 'const'],
		answer: '`var`は関数スコープで再宣言・再代入可能。`let`はブロックスコープで再代入可能だが再宣言は不可。`const`はブロックスコープで再代入不可（ただしオブジェクトの内容は変更可能）。',
	},
	{
		id: 'arrow-functions',
		patterns: ['arrow function', '=>', 'アロー'],
		answer: 'アロー関数は短い構文で`this`をレキシカルに束縛します（通常の関数とは`this`の扱いが異なります）。',
	},
	{
		id: 'promise-async-await',
		patterns: ['promise', 'async', 'await', '非同期'],
		answer: 'Promiseは非同期処理の結果を表すオブジェクト。`async/await`はPromiseをより直感的に扱う構文糖で、`await`はPromiseの解決を待ちます。',
	},
	{
		id: 'typescript-intro',
		patterns: ['typescript', 'ts', '型'],
		answer: 'TypeScriptはJavaScriptに静的型付けを追加したスーパーセットです。コンパイル時に型チェックを行い、より堅牢なコードを書けます。',
	},
	{
		id: 'interface-vs-type',
		patterns: ['interface', 'type alias', 'type と interface', 'interface と type'],
		answer: '`interface`はオブジェクトの形状を定義するために使われ、拡張やマージが可能。`type`は型エイリアスで、ユニオン型やタプルなど柔軟に使えます。',
	},
	{
		id: 'hoisting',
		patterns: ['hoist', 'hoisting', '巻き上げ'],
		answer: '関数宣言と`var`による変数宣言は巻き上げ（hoisting）される。`let`/`const`は一時的デッドゾーンがあり、宣言前に参照するとエラーになります。',
	},
];

const quizBank = [
	{
		question: '`let`と`var`の主な違いは？',
		choices: ['ブロックスコープ／関数スコープ', '代入可否', '型チェックの有無'],
		answerIndex: 0,
		explanation: '`let`はブロックスコープ、`var`は関数スコープです。',
	},
	{
		question: 'TypeScriptの目的は？',
		choices: ['ランタイム速度の向上', '静的型付けによる品質向上', 'DOM操作のためのAPI'],
		answerIndex: 1,
		explanation: 'TypeScriptは静的型付けを導入して型チェックを行い、バグを早期に発見しやすくします。',
	},
	{
		question: 'アロー関数と通常関数で違うものは？',
		choices: ['スコープの扱い', '引数の数', '戻り値の型'],
		answerIndex: 0,
		explanation: 'アロー関数は`this`をレキシカルに束縛する点で通常関数と異なります。',
	},
];

function findAnswer(question) {
	const q = question.toLowerCase();
	for (const item of knowledge) {
		for (const p of item.patterns) {
			if (q.includes(p)) return item.answer;
		}
	}
	// simple heuristics
	if (q.match(/what|何|how|どう/)) {
		return 'その質問は一般的です。より具体的なキーワード（例: `let vs var`、`async await`）を含めてください。';
	}
	return 'すみません、そのトピックはまだ学習していません。具体的なキーワードを含めて再試行してください。';
}

function startInteractive() {
	const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
	console.log('JS/TS Quiz AI — 質問を入力してください。終了するには `exit` と入力します。');
	rl.setPrompt('> ');
	rl.prompt();
	rl.on('line', (line) => {
		const txt = line.trim();
		if (!txt) return rl.prompt();
		if (txt === 'exit') return rl.close();
		if (txt.startsWith('quiz')) return runQuiz(rl);
		const ans = findAnswer(txt);
		console.log('\n回答: ' + ans + '\n');
		rl.prompt();
	}).on('close', () => process.exit(0));
}

function askQuestion(rl, q) {
	return new Promise((res) => {
		console.log('\n' + q.question);
		q.choices.forEach((c, i) => console.log(`${i + 1}. ${c}`));
		rl.question('回答 (番号): ', (line) => res({ answer: Number(line.trim()) - 1 }));
	});
}

async function runQuiz(rl) {
	console.log('\nクイズモードを開始します。回答は番号で入力してください。\n');
	let score = 0;
	for (const q of quizBank) {
		const { answer } = await askQuestion(rl, q);
		if (answer === q.answerIndex) {
			console.log('正解! ' + q.explanation);
			score++;
		} else {
			console.log('不正解。説明: ' + q.explanation);
		}
	}
	console.log(`\n終了 — スコア: ${score}/${quizBank.length}\n`);
	rl.prompt();
}

function printHelp() {
	console.log('使い方:');
	console.log('  node quizAI.js           対話モードで質問を入力');
	console.log('  node quizAI.js --quiz    クイズを実行して採点');
	console.log('  node quizAI.js --answer "質問文"   単発で回答を得る');
}

// CLI
const args = process.argv.slice(2);
if (args.includes('--help') || args.includes('-h')) {
	printHelp();
	process.exit(0);
}
if (args.includes('--quiz')) {
	const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
	runQuiz(rl).then(() => rl.close());
} else if (args.includes('--answer')) {
	const idx = args.indexOf('--answer');
	const q = args.slice(idx + 1).join(' ');
	if (!q) {
		console.error('質問文を指定してください。例: --answer "let と var の違い"');
		process.exit(1);
	}
	console.log(findAnswer(q));
} else {
	startInteractive();
}
