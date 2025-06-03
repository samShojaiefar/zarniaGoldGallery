"use client";
import { Button, Flex, Typography } from "antd";
import style from "./PurchaseInfo.module.scss";
import Image from "next/image";
import Product from "@/app/(main)/(home)/_components/product/product";
import { toPersianDigits } from "@/lib/utils/toPersionNumber";
const { Text } = Typography;
function PurchaseInfo({ product }) {
  return (
    <div className={style.purchesInfoContainer}>
      <div className={style.purchaseInfo}>
        <Flex gap={48} vertical align="center" justify="center">
          <div className={style.SnappPay}>
            <Image
              src={"/image/image 17.png"}
              width={38}
              height={38}
              alt="Snapp Pay"
            />
            <Text>اسنپ پی | ۴ ماهه، بدون سود، چک و ضامن</Text>
          </div>
          <Flex justify="space-between" style={{width:"100%"}}>
            <Flex vertical gap={4}>
              <Text className={style.secodaryText} type="secondary">
                قیمت کل:
              </Text>
              <Text className={style.secodaryText} type="secondary">
                هر قسط:
              </Text>
            </Flex>
            <Flex vertical>
            <Flex align="center" gap={4}>
              <Text className={style.price}>
                {toPersianDigits("2,350,000")}
              </Text>
              <Text className={style.secodaryText} type="secondary">
                تومان
              </Text>
            </Flex>

            <Flex align="center" gap={4}>
              <Text className={style.installmentPrice}>
                {toPersianDigits("587,500")}
              </Text>
              <Text className={style.secodaryText} type="secondary">
                تومان
              </Text>
            </Flex>
            </Flex>
          </Flex>
          <Button className={style.buyButton}>خرید</Button>
        </Flex>
      </div>
    </div>
  );
}
export default PurchaseInfo;
