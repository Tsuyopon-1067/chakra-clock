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

## Modal
`Modal`は子ウィンドウであり，それを閉じるまでは親ウィンドウの操作をできなくする．`Modal`の追加のためには，[`useDisclosure`](https://v2.chakra-ui.com/docs/hooks/use-disclosure)というHooksが必要．これを`return`文の前に挿入する．`useDisclosure`については，ChakraUIが提供する便利機能くらいの理解で問題無い．
```
const { isOpen, onOpen, onClose } = useDisclosure()
```

`useDisclosure`を挿入したら，以下のコードを`</Accordion>`の下に追加する．

コードは[公式ドキュメントのModalページ](https://v2.chakra-ui.com/docs/components/modal/usage)のUsage節のものを改変した．

```tsx
<Button margin={6} onClick={onOpen}>
  Open Modal
</Button>
<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Modal Title</ModalHeader>
    <ModalCloseButton />
    <ModalBody>hogehoge</ModalBody>

    <ModalFooter>
      <Button colorScheme="blue" mr={3} onClick={onClose}>
        Close
      </Button>
      <Button variant="ghost">Secondary Action</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
```

`ModalContent`の中を編集すればコンテンツを編集できる．`Card`のように`ModalHeader`・`ModalBody`・`ModalFooter`に分かれているので，必要な箇所を編集する．ここでは，`ModalBody`の中に`Clock`を入れる．
```tsx
<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Modal Title</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <Clock />
    </ModalBody>

    <ModalFooter>
      <Button colorScheme="blue" mr={3} onClick={onClose}>
        Close
      </Button>
      <Button variant="ghost">Secondary Action</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
```

このように書き換えると，ボタンを押したとき，モーダルウィンドウ中に時計が表示されていることがわかる．

## コンポーネント化の威力
ここでは色々なところに時計を配置するという実用的には意味が無いことをしたが，大事なことはコンポーネント化により1行のコードで時計が配置できるということ．コンポーネント化に慣れたらコード量を減らしながら複雑なUIを実装できるようになるので頑張って習得してほしい．

最後にこの章での実装例として`App.tsx`の全体を示す．
```tsx
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Clock } from "./Clock";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Card margin={6}>
        {" "}
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
            <Clock />
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
      <Button margin={6} onClick={onOpen}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Clock />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default App;

```