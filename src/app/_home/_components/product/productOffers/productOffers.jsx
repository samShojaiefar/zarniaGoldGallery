import React from "react";
import { Button, Card, Col, Flex, Row, Typography } from "antd";
import Image from "next/image";
const { Title, Text } = Typography;
import style from "./productOffer.module.scss";
import LeftArrowIcon from "@/app/(common)/_components/icon/leftArrowIcon";
import { useRouter } from "next/navigation";
function ProductOffers() {
  const offerProducts = [
    {
      image: "/image/ring.png",
      title: "انگشتر گل رز",
      off: "٪۲۰",
      price: "۱۰,۰۰۰,۰۰۰",
      offPrice: "۸,۰۰۰,۰۰۰",
      installment: "۲,۵۰۰,۰۰۰",
      Weight: "۱.۰۱۰",
    },
    {
      image: "/image/ring.png",
      title: "انگشتر گل رز",
      off: "٪۲۰",
      price: "۱۰,۰۰۰,۰۰۰",
      offPrice: "۸,۰۰۰,۰۰۰",
      installment: "۲,۵۰۰,۰۰۰",
      Weight: "۱.۰۱۰",
    },
    {
      image: "/image/ring.png",
      title: "انگشتر گل رز",
      off: "٪۲۰",
      price: "۱۰,۰۰۰,۰۰۰",
      offPrice: "۸,۰۰۰,۰۰۰",
      installment: "۲,۵۰۰,۰۰۰",
      Weight: "۱.۰۱۰",
    },
    {
      image: "/image/ring.png",
      title: "انگشتر گل رز",
      off: "٪۲۰",
      price: "۱۰,۰۰۰,۰۰۰",
      offPrice: "۸,۰۰۰,۰۰۰",
      installment: "۲,۵۰۰,۰۰۰",
      Weight: "۱.۰۱۰",
    },
    {
      image: "/image/ring.png",
      title: "انگشتر گل رز",
      off: "٪۲۰",
      price: "۱۰,۰۰۰,۰۰۰",
      offPrice: "۸,۰۰۰,۰۰۰",
      installment: "۲,۵۰۰,۰۰۰",
      Weight: "۱.۰۱۰",
    },
  ];
  const router = useRouter();
  return (
    <>
      <div className={style.productContainer}>
        <Flex
          className={style.titleContainer}
          align="center"
          justify="space-between"
        >
          <Title level={4}>تخفیف‌ها</Title>
          <Button
            type="text"
            className={style.showAll}
            icon={<LeftArrowIcon />}
            iconPosition={"end"}
            onClick={() => router.push("/discount-products")}
          >
            مشاهده بیشتر
          </Button>
        </Flex>

        <Flex className={style.cardContainer} gap={"16px"}>
          {offerProducts.map((product, index) => (
            <Flex gap={"5rem"}>
              <Card
                className={style.card}
                hoverable
                cover={<Image src={product.image} width={143} height={143} />}
              >
                <span className={style.offBadge}>{product.off}</span>
                <Flex vertical>
                  <Text className={style.cardTitle}>{product.title}</Text>
                  <Flex justify="space-between">
                    <Text className={style.weight}>وزن:</Text>
                    <Text className={style.weight}>{product.Weight}</Text>
                  </Flex>
                </Flex>
                <Flex gap={"6px"} vertical>
                  <Flex
                    className={style.priceContainer}
                    align="center"
                    justify="space-between"
                  >
                    <Text className={style.priceTitle}>قیمت کل</Text>
                    <Flex align="end" vertical>
                      <Text className={style.price} delete>
                        {product.price} تومان
                      </Text>
                      <Flex align="center">
                        <Text className={style.offPrice}>
                          {product.offPrice}
                        </Text>
                        <Text className={style.toman}>تومان</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <div className={style.InstallmentContainer}>
                    <Flex align="center" justify="space-between">
                      <Text className={style.installmentTitle}>هر قسط:</Text>
                      <Text className={style.installment}>
                        {" "}
                        {product.installment} تومان{" "}
                      </Text>
                    </Flex>
                  </div>
                </Flex>
              </Card>
            </Flex>
          ))}
        </Flex>
      </div>
    </>
  );
}
export default ProductOffers;
