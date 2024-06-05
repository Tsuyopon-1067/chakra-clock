# Clockコンポーネントの追加
## 1. Clock.tsx
`@/src`ディレクトリ下に`Clock.tsx`を作成．
```
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── Clock.tsx （追加）
│   ├── assets
│   │   └── react.svg
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
```

`Clock.tsx`には以下のように書いておく．
```tsx
import { Box, Text } from "@chakra-ui/react";

export const Clock = () => {
  return (
    <Box>
      <Text>12:00:00</Text>
    </Box>
  );
};

```

## 2. App.tsx
`@/src`ディレクトリ下の`App.tsx`を開き，以下のように書き換える（結構な量のコードを削除するはず）．
```tsx
import { Clock } from "./Clock";

function App() {
  return (
    <>
      <Clock />
    </>
  );
}

export default App;

```

## 3. 動作確認
ブラウザで画面を確認すると，12:00:00と表示されているはず．次はそれを動くようにする．

## 4. 時計が動くようにする
ここからは`Clock.tsx`を書き換える．
まず，時刻の文字列を保持するためのuseStateを追加する．
```tsx
  const [time, setTime] = useState("");
```

次に，useEffect内で現在時刻を更新できるようにする．
```tsx
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString();
      setTime(timeStr);
    }, 1000);
    return () => clearInterval(intervalId);
  });
```

### コード説明
- `setInterval`
    一定の遅延間隔を置いて関数やコードスニペットを繰り返し呼び出す．`setInterval(処理, 遅延時間)`のように使う．
    今回の場合
    ```tsx
    () => {
        const now = new Date();
        const timeStr = now.toLocaleTimeString();
        setTime(timeStr);
    }
    ```
    ↑が処理（アロー関数）
    ```
    1000
    ```
    ↑が遅延．単位は[ms]．
- `const now = new Date();`
    `Date`型のインスタンスを取得する
- `const timeStr = now.toLocaleTimeString();`
    `toLocaleTimeString()`メソッドは日付の時間部分を文字列として返す．ここでは，時刻文字列を`timeStr`に代入している．
- `setTime(timeStr);`
    `time`に`timeStr`に格納されている時刻文字列をセットする．

あとはJSX内で `<Text>{time}</Text>`を追記すれば時刻を画面に表示することができる．

上記の追加を終えると`Clock.tsx`は以下のようになる．

```tsx
import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Clock = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString();
      setTime(timeStr);
    }, 1000);
    return () => clearInterval(intervalId);
  });

  return (
    <Box>
      <Text>{time}</Text>
    </Box>
  );
};

```

## 5.日付の取得
`Date`型では，以下のようにして年・月・日・時・分・秒を取得することができる．なお，`Date`型インスタンスは`date`とした．月だけ1小さい値になるので注意．

```tsx
const date = new Date(); // Date型インスタンスを用意

const year = date.getFullYear();
const month = date.getMonth(); // これだけ1小さい値になる．
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
```
日付を`useEffect`の処理内で取得することで，時計に日付を表示することができる．

日付文字列を格納するために`useState`を追加する．
```tsx
const [date, setDate] = useState("");
```

日付情報を取得・表示するために以下のコードを追加する．
```tsx
const year = now.getFullYear();
const month = now.getMonth();
const day = now.getDate();
const dateStr = `${year}/${month + 1}/${day}`;
setDate(dateStr);
```

```
const dateStr = `${year}/${month + 1}/${day}`;
```
は以下と同義．

```
const dateStr = year + '/' + (month+1) + '/' + day;
```

## 6.精度の向上
現状の時計は最大1秒の誤差がある．理由は1秒ごとにしか時刻を更新しないから．一番簡単な解決策は`setInterval`の遅延（更新頻度）の値を小さくすること．遅延を1000[ms]から50[ms]まで小さくすれば更新頻度が20倍で誤差は最大0.05[s]になり，実用上の精度問題は無くなる．遅延をさらに小さくすれば精度はさらに上がる．

しかしこれは無駄なレンダリングが発生し，パフォーマンス低下の問題につながるので避けたい．

この問題の解決も簡単．要は不要なレンダリングを行わなければ良い．以下のようにして新しく取得した時間と表示されている時間が異なるときのみ`setTime`を呼び出すことで，時間の変化が起きていないときには`setTime`が呼び出されなくなる．このようにすれば`setInterval`による更新頻度を上げても問題ない．
```tsx
if (timeStr !== time) {
    setTime(timeStr);
}
```

日付表示の対応と精度向上をした後の`Clock.tsx`は以下のようになる．
```tsx
import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Clock = () => {
  const [time, setTime] = useState(""); // 時刻情報を文字列で保持する
  const [date, setDate] = useState(""); // 日付情報を文字列で保持する
  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date(); // 現在時刻・日付等が入っているインスタンスを取得
      const timeStr = now.toLocaleTimeString(); // 日付部分のみを取り出し
      if (timeStr !== time) {
        setTime(timeStr);
      }
      const year = now.getFullYear();
      const month = now.getMonth(); // これだけ1小さい値になる．
      const day = now.getDate();
      const dateStr = year + "/" + (month + 1) + "/" + day;
      if (dateStr !== date) {
        setDate(dateStr);
      }
    }, 50);
    return () => clearInterval(clockInterval);
  });

  return (
    <Box>
      <Text>{time}</Text>
      <Text>{date}</Text>
    </Box>
  );
};
```