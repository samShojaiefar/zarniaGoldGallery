import React from "react";
import {
  Button,
  Card,
  Col,
  ConfigProvider,
  Flex,
  Radio,
  Row,
  Typography,
} from "antd";
import Image from "next/image";
const { Title, Text } = Typography;
import style from "./product.module.scss";
import LeftArrowIcon from "@/app/(common)/_components/icon/leftArrowIcon";
import { useRouter } from "next/navigation"; 
function Products() {
  const products = [
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
  const filters = [
    {
      title: "جدیدترین‌ها",
    },
    {
      title: "انگشتر مینیمال",
    },
    {
      title: "آویز‌های لیزری",
    },
    {
      title: "دستبنده مارشال",
    },
  ];
  const router = useRouter();
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Radio: {
              buttonBg: "#fffff",
              buttonCheckedBg: "#C7A78233",
              buttonColor: "#715A4199",
              buttonSolidCheckedHoverBg: "#c4a484",
              colorBorder: "none",
              colorPrimaryHover: "none",
              borderRadius: "42px",
              colorPrimary: "none",
            },
          },
        }}
      >
        <div className={style.productContainer}>
          <div >
            <div
              className={style.titleContainer}
            >
              <Title level={4}>محصولات</Title>
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
            <Radio.Group
              block
              className={style.filterContainer}
              defaultValue={"جدیدترین‌ها"}
            >
              {filters.map((filter) => (
                <div className={style.filter}>
                  <Radio.Button key={filter.title} value={filter.title}>
                    {filter.title}
                  </Radio.Button>
                </div>
              ))}
            </Radio.Group>
          </div>
          <Flex className={style.cardContainer} gap={"16px"}>
            {products.map((product) => (
              <Flex gap={"5rem"}>
                <Card
                  className={style.card}
                  hoverable
                  cover={<Image src={product.image} width={143} height={143} />}
                >
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
                      <Flex align="center" gap={"2px"}>
                        <Text className={style.price}>{product.price}</Text>
                        <Text className={style.toman}> تومان</Text>
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
      </ConfigProvider>
    </>
  );
}
export default Products;
