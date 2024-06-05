# 作成したコンポーネントの利用
今まで`Clock`を編集していたが，`App.tsx`もいじってみる．ついでにChakraUIのコンポーネントのいくつかに触れてみる．

## Card
`@/src/App.tsx`の`function`部分を以下のように書き換える．すると，画面にカード上の要素が現れる．コードは[公式ドキュメントのCardページ](https://v2.chakra-ui.com/docs/components/card/usage)のMultiple cards節のものを短く改変した．読めば勉強になるので興味がある人はどうぞ．
```tsx
function App() {
  return (
    <>
      <Card margin={6}>
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
      <Card margin={6}>
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

## Acordion
`Acordion`はアコーディオンメニューを作るためのコンポーネント．アコーディオンメニューとは，クリック（タップ）で開閉するメニューのこと．以下のコードを`</Card>`の下の行に追加すればアコーディオンメニューが現れる．

コードは[公式ドキュメントのAcordionページ](https://v2.chakra-ui.com/docs/components/accordion/usage)のToggle each accordion item節のものを微妙に改変した（margin追加のみ）．

```tsx
<Accordion allowToggle margin={6}>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex="1" textAlign="left">
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex="1" textAlign="left">
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
```

`Card`のときのように`AccordionPanel`の中を編集すればコンテンツを編集できる．`AccordionButton`は実質的なタイトル部分．

1つめのアコーディオンメニューに対して`AccordionPanel`の中を`Clock`にするとメニューを開いたとき時計が出てくるようになる．
```tsx
<Accordion allowToggle margin={6}>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex="1" textAlign="left">
          Clock
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Clock /> （ここを編集した）
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex="1" textAlign="left">
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
```