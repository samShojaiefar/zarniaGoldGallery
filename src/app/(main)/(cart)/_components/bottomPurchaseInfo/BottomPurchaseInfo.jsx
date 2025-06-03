"use client";
import { Button, Flex, Typography } from "antd";
import style from "./bottomPurchaseInfo.module.scss"
import Image from "next/image";
import Product from "@/app/(main)/(home)/_components/product/product";
import { toPersianDigits } from "@/lib/utils/toPersionNumber";
const {Text}=Typography
function BottomPurchaseInfo({product}) {
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
                <Text className={style.price}>{toPersianDigits("2,350,000")}</Text>
                <Text className={style.secodaryText} type="secondary">تومان</Text>
            </Flex>
            <Flex align="center" gap={4}>
                <Text className={style.secodaryText} type="secondary">هر قسط:</Text>
                <Text className={style.installmentPrice}>{toPersianDigits("587,000")}</Text>
                <Text className={style.secodaryText} type="secondary">تومان</Text>
            </Flex>
        </Flex>
        <Button className={style.buyButton}>پرداخت</Button>
      </div>
    </div>
  );
}
export default BottomPurchaseInfo;