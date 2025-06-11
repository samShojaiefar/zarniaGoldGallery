"use client";
import { Button, Flex, Typography } from "antd";
import style from "./PurchaseInfo.module.scss";
import Image from "next/image";
import { toPersianDigits } from "@/lib/utils/toPersionNumber";
import { addToCart, addToFavorite } from "@/lib/api/cartApi";
import toast, { Toaster } from "react-hot-toast";

const { Text } = Typography;

function PurchaseInfo({ product }) {
const handleAddToCart = async (productSlug) => {
  try {
    await addToCart(productSlug);
    toast.success("محصول به سبد خرید اضافه شد",
        {
          style:{
        fontSize:"1.5rem"
          }
        });
  } catch (err) {
    console.error(err);
    toast.error("خطا در افزودن به سبد خرید",
            {
              style:{
            fontSize:"1.5rem"
              }
            });
  }
};

  if (!product) return null;

  return (
    <div className={style.purchesInfoContainer}>
      <Toaster/>
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
            <Text className={style.secodaryText} type="secondary">
              قیمت کل:
            </Text>
            <Text className={style.price}>
              {toPersianDigits(product.price)}
            </Text>
            <Text className={style.secodaryText} type="secondary">
              تومان
            </Text>
          </Flex>
          <Flex align="center" gap={4}>
            <Text className={style.secodaryText} type="secondary">
              هر قسط:
            </Text>
            <Text className={style.installmentPrice}>
              {toPersianDigits(product.snapp_pay_each_installment)}
            </Text>
            <Text className={style.secodaryText} type="secondary">
              تومان
            </Text>
          </Flex>
        </Flex>
        <Button onClick={() => handleAddToCart(product.slug)} className={style.buyButton}>
          خرید
        </Button>
      </div>
    </div>
  );
}

export default PurchaseInfo;
