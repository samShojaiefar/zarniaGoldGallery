"use client"
import { Flex } from "antd"; 
import { Typography } from "antd"; 
import style from "./gold.module.scss"; 
const { Text } = Typography;
export default function GoldPrice() {
  return (
    <div className={style.goldPriceContainer}>
      <Text className={style.description}>نرخ لحظه‌ای طلا (۱۸ عیار):</Text>
      <Flex align="center" gap={"4px"}>
        <Text className={style.goldPrice}>۶,۶۴۰,۴۰۰</Text>
        <Text className={style.currency}>تومان</Text>
      </Flex>
    </div>
  );
}
