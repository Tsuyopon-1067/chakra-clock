# 作成したコンポーネントの利用
今まで`Clock`を編集していたが，`App.tsx`もいじってみる．ついでにChakraUIのコンポーネントのいくつかに触れてみる．

## Card
`@/src/App.tsx`の`function`部分を以下のように書き換える．すると，画面にカード上の要素が現れる．
```tsx
function App() {
  return (
    <>
      <Card height={600} margin={6}>
        <CardHeader>
          <Heading size="md"> Title1</Heading>
        </CardHeader>
        <CardBody>
          <Text>
            This is hogehoge 1. Rust is the best programming language. Rust is
            better than Python. You must read "The Rust Programming Language".
            There is also Japanese version. Hoge hoge hoge hoge hoge hoge hoge
            hoge hoge. Fuga fuga fuga fuga fuga fuga fuga.
          </Text>
        </CardBody>
        <CardBody>
          <Clock />
        </CardBody>
        <CardFooter>
          <Button>button</Button>
        </CardFooter>
      </Card>
    </>
  );
}
```

Cardの中身を編集する時は，`Card`タグの中身を編集すれば良い．`CardHeader`を編集すればタイトルを，`CardBody`を編集すればコンテンツを，`CardFooter`を編集すれば下部を編集することができる．

ここではCard型時計を作ってみる．そのためには，先述の通り`CardBody`を編集すれば良い．もともとの`Text`タグを削除し，`CardBody`を次のように書き換える．

```tsx
function App() {
  return (
    <>
      <Card height={600} margin={6}>
        <CardHeader>
          <Heading size="md"> Title1</Heading>
        </CardHeader>
        <CardBody>
          <Clock />
        </CardBody>
        <CardFooter>
          <Button>button</Button>
        </CardFooter>
      </Card>
    </>
  );
}
```

このように書き換えると，カードの中に時計が入る．本来は`Card`の中に複数行のコードを挿入する必要があるが，`Clock`コンポーネントを作っていたおかげで1行の挿入で事足りる．