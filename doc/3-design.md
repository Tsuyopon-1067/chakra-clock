# 外見のデザイン
## 1. 色を変える
`@/src/Clock.tsx`を編集して時計の色を変えていく．
背景色は`bg`（background），テキストの色は`color`に適切な値を設定する．例えば以下のようにすれば色がつく．

```tsx
  <Box bg="cyan.900">
    <Text color="cyan.50">{time}</Text>
    <Text color="cyan.50">{date}</Text>
  </Box>
```

`bg="#ffccff"`のようにカラーコードを指定することや`color="tomato"`のように色名を使うこともできる．
```tsx
<Box bg="#ffccff">
  <Text color="tomato">{time}</Text>
  <Text color="tomato">{date}</Text>
</Box>
```

グラデーションにすることもできる．`bgGradient`をいじれば良い．テキストに対しては`bgClip`を`text`に指定する必要がある
詳細は[公式ドキュメント](https://v2.chakra-ui.com/docs/styled-system/gradient)を参照．
```tsx
<Box bgGradient={["linear(to-b, orange.100, purple.300)"]}>
  <Text
    bgGradient="linear(to-l, #7928CA, #FF0080)"
    bgClip="text"
    fontSize="6xl"
    fontWeight="extrabold"
  >
    {time}
  </Text>
  <Text
    bgGradient="linear(to-l, #7928CA, #FF0080)"
    bgClip="text"
    fontSize="6xl"
    fontWeight="extrabold"
  >
    {date}
  </Text>
</Box>
```

## 2.配置を変える
今までは[Box](https://v2.chakra-ui.com/docs/components/box)の中に時計の時刻と日付を入れていたが，他にも[Stack](https://v2.chakra-ui.com/docs/components/stack/usage)や[Grid](https://v2.chakra-ui.com/docs/components/grid/usage)がある．
`HStack`を使うと左詰めになる．`VStack`を使うと上詰めになる．
```tsx
<HStack bg="cyan.900">
  <Text color="cyan.50">{time}</Text>
  <Text color="cyan.50">{date}</Text>
</HStack>
```

## 3.大きさを変える
縦横の大きさは`height`（`h`でも可），`width`（`w`でも可）で変えることができる．フォントサイズは`fontSize`で変えることができる．
```tsx
<VStack bg="cyan.900" width={400} h={200}>
  <Text fontSize="60pt" color="cyan.50">
    {time}
  </Text>
  <Text fontSize="20pt" color="cyan.50">
    {date}
  </Text>
</VStack>
```

## 4.画像の挿入
`Image`を使う．`src`はurl，`alt`は画像が読み込まれない場合に表示する予備テキスト．無くても動くが必須とされている．
```tsx
<VStack bg="cyan.900" width={400} h={200}>
  <Text fontSize="60pt" color="cyan.50">
    {time}
  </Text>
  <Text fontSize="20pt" color="cyan.50">
    {date}
  </Text>
  <Image
    src="https://live.staticflickr.com/65535/53768376006_77fc433c53_h.jpg"
    alt="海の写真"
  />
</VStack>
```