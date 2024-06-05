# 環境構築

## 1. vite projectの作成
```
npm create vite
```
コマンド実行後にいろいろ聞かれるので，以下のように選択
```
✔ Project name: … chakra-clock <- [1]お好みの名前を入力
✔ Select a framework: › React <- [2]Reactを選択
✔ Select a variant: › TypeScript + SWC <- [3] TypeScript + SWC
```

## 2. vite projectに必要なライブラリをインストール
```
cd chakra-clock
npm install
```
`npm install`は`npm i`でも同じことができる．インターネット上の記事では人によって使うコマンドが違ったりするので，両方知っておいた方が良い．特に`npm i`は`npm install`と違って知識0からの意味推測は困難なので軽くで良いので頭に入れておくと後々楽．

## 3. Chakra UIのインストール
[公式ドキュメントのGetStarted](https://v2.chakra-ui.com/getting-started)のInstallationに書いている．
```
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```
[Icon](https://v2.chakra-ui.com/docs/components/icon/usage)もインストールしておく．
```
npm i @chakra-ui/icons
```

## 4. ReactでChakra UIを使えるようにする
`@/src/main.tsx`を開く
以下の部分を書き換える．
```tsx
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

`App`タグを`ChakraProvider`で囲む．
```tsx
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider> （追加1）
      <App />
    </ChakraProvider>（追加2）
  </React.StrictMode>
);

```

`ChakraProvider`のimportを追加．
```tsx
import { ChakraProvider } from "@chakra-ui/react";
```

`main.tsx`は以下のようになる．
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

```