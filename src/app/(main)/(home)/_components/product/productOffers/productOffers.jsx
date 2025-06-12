import React from "react";
import { Button, Card, Col, Flex, Row, Spin, Typography } from "antd";
import Image from "next/image";
const { Title, Text } = Typography;
import style from "./productOffer.module.scss";
import { useRouter } from "next/navigation";
import LeftArrowIcon from "@/app/(main)/(common)/_components/icon/leftArrowIcon";
import useSWR from "swr";
import { toPersianDigits } from "@/lib/utils/toPersionNumber";
const fetcher = (url) => fetch(url).then((res) => res.json());

function ProductOffers() {
  // Move useRouter to the top
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
      "https://api.mclp.ir/api/v1/products",
      fetcher
  );

  if (isLoading) {
    return (
        <div className={style.productContainer}>
          <Spin tip="در حال بارگذاری محصولات..." />
        </div>
    );
  }

  if (error) {
    return <div>خطا در دریافت محصولات</div>;
  }

  // فرض: API بازگشتی ساختاری شبیه { data: Product[] }
  const products = (data?.data || []).slice(0, 5);

  return (
      <>
        <div className={style.productContainer}>
          <div className={style.titleContainer}>
            <Title level={4}>تخفیف‌ها</Title>
            <Button
                type="text"
                className={style.showAll}
                icon={<LeftArrowIcon />}
                iconPosition={"end"}
                onClick={() => router.push("/products")}
            >
              مشاهده بیشتر
            </Button>
          </div>

          <Flex className={style.cardContainer} gap={"16px"}>
            {products.map((product) => (
                <Flex key={product.title} gap={"5rem"}>
                  <Card
                      className={style.card}
                      hoverable
                      cover={<Image src={product.image} width={143} height={143} />}
                  >
                    <Flex vertical>
                      <Text className={style.cardTitle}>{product.name}</Text>
                      <Flex justify="space-between">
                        <Text className={style.weight}>وزن:</Text>
                        <Text className={style.weight}>{toPersianDigits(product.weight)}</Text>
                      </Flex>
                    </Flex>
                    <Flex gap={"6px"} vertical>
                      <Flex
                          className={style.priceContainer}
                          align="center"
                          justify="space-between"
                      >
                        <Text className={style.priceTitle}>قیمت کل</Text>
                        <Flex align="center" gap={"2px"}>
                          <Text className={style.price}>{toPersianDigits(product.price)}</Text>
                          <Text className={style.toman}> تومان</Text>
                        </Flex>
                      </Flex>
                      <div className={style.InstallmentContainer}>
                        <Flex align="center" justify="space-between">
                          <Text className={style.installmentTitle}>هر قسط:</Text>
                          <Text className={style.installment}>
                            {toPersianDigits(product.snapp_pay_each_installment)} تومان
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