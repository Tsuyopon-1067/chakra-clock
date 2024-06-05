import { Image, Text, VStack } from "@chakra-ui/react";
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
    }, 1000);
    return () => clearInterval(clockInterval);
  });

  return (
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
  );
};
