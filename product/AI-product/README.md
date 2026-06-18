# AI-product: JS/TS Quiz AI

このディレクトリには JavaScript / TypeScript の基礎知識に関する簡易なクイズAI（CLI）が含まれます。

使い方:

- 対話モード（質問して回答を得る）:

  ```sh
  node quizAI.js
  # プロンプトが出たら日本語で質問を入力（例: "let と var の違い"）
  ```

- 単発で回答を得る:

  ```sh
  node quizAI.js --answer "let と var の違い"
  ```

- クイズモード（自分で解答して採点）:

  ```sh
  node quizAI.js --quiz
  ```

備考:
- 現在は簡易なルールベースの知識ベースを使用しています。トピック追加や回答の改善は `quizAI.js` を編集して拡張できます。
