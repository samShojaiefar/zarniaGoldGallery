"use client";
import { Button, Flex, Typography } from "antd";
import style from "./bottomPurchaseInfo.module.scss"
import Image from "next/image";
const {Text}=Typography
function BottomPurchaseInfo() {
  return (
    <div className={style.purchesInfoContainer}>
      <div className={style.SnappPay}>
        <Image 
          src={"/image/image 17.png"} 
          width={38} 
          height={38} 
          alt="Snapp Pay"
        />
        <Text>اسنپ پی | ۴ ماهه، بدون سود، چک و ضامن</Text>
      </div>
      <div className={style.purchaseInfoContainer}>
        <Flex gap={4} vertical>
            <Flex align="center" gap={4}>
                <Text className={style.secodaryText} type="secondary">قیمت کل:</Text>
                <Text className={style.price}>۲,۳۵۰,۰۰۰</Text>
                <Text className={style.secodaryText} type="secondary">تومان</Text>
            </Flex>
            <Flex align="center" gap={4}>
                <Text className={style.secodaryText} type="secondary">هر قسط:</Text>
                <Text className={style.installmentPrice}>۵۸۷,۵۰۰</Text>
                <Text className={style.secodaryText} type="secondary">تومان</Text>
            </Flex>
        </Flex>
        <Button className={style.buyButton}>خرید</Button>
      </div>
    </div>
  );
}
export default BottomPurchaseInfo;