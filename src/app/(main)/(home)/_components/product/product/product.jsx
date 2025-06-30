import React from "react";
import {
  Button,
  Card,
  ConfigProvider,
  Flex,
  Radio,
  Spin,
  Typography,
} from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { toPersianDigits } from "@/lib/utils/toPersionNumber";
import style from "./product.module.scss";
import LeftArrowIcon from "@/app/(main)/(common)/_components/icon/leftArrowIcon";

const { Title, Text } = Typography;
const fetcher = (url) => fetch(url).then((res) => res.json());

function Products() {
  const router = useRouter();

  const {
    data: productsData,
    error: productsError,
    isLoading: productsLoading,
  } = useSWR("https://api.mclp.ir/api/v1/products", fetcher);

  const {
    data: categoriesData,
    error: categoriesError,
    isLoading: categoriesLoading,
  } = useSWR("https://api.mclp.ir/api/v1/categories", fetcher);

  if (productsLoading || categoriesLoading) {
    return (
      <div className={style.productContainer}>
        <Spin tip="در حال بارگذاری..." />
      </div>
    );
  }

  if (productsError || categoriesError) {
    return <div>خطا در دریافت اطلاعات</div>;
  }

  const products = (productsData?.data || []).slice(0, 5);
  const categories = categoriesData?.data || [];

  return (
    <ConfigProvider
      theme={{
        components: {
          Radio: {
            buttonBg: "#ffffff",
            buttonCheckedBg: "#C7A78233",
            buttonColor: "#BCA27B99",
            buttonSolidCheckedHoverBg: "#c4a484",
            borderRadius: "42px",
          },
        },
      }}
    >
      <div className={style.productContainer}>
        <div className={style.titleContainer}>
          <Title level={4}>محصولات</Title>
          <Button
            type="text"
            className={style.showAll}
            icon={<LeftArrowIcon />}
            iconPosition="end"
            onClick={() => router.push("/products")}
          >
            مشاهده بیشتر
          </Button>
        </div>

        <Radio.Group
          block
          className={style.filterContainer}
          defaultValue={categories[0]?.title}
          onChange={(e) => {
            const selectedCategory = categories.find(
              (cat) => cat.title === e.target.value
            );
            if (selectedCategory) {
              router.push(`/products?category_ids[1]=${selectedCategory.id}`);
            }
          }}
        >
          {categories.map((category) => (
            <div key={category.id} className={style.filter}>
              <Radio.Button value={category.title}>
                {category.title}
              </Radio.Button>
            </div>
          ))}
        </Radio.Group>

        <Flex className={style.cardContainer} gap={"16px"}>
          {products.map((product) => (
            <Flex key={product.id} gap={"5rem"}>
              <Card
                className={style.card}
                hoverable
                cover={
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                  />
                }
              >
                <Flex vertical>
                  <Text className={style.cardTitle}>{product.name}</Text>
                  <Flex justify="space-between">
                    <Text className={style.weight}>وزن:</Text>
                    <Text className={style.weight}>
                      {toPersianDigits(product.weight)}
                    </Text>
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
                      <Text className={style.price}>
                        {toPersianDigits(product.price)}
                      </Text>
                      <Text className={style.toman}> تومان</Text>
                    </Flex>
                  </Flex>
                  <div className={style.InstallmentContainer}>
                    <Flex align="center" justify="space-between">
                      <Text className={style.installmentTitle}>هر قسط:</Text>
                      <Text className={style.installment}>
                        {toPersianDigits(product.snapp_pay_each_installment)}{" "}
                        تومان
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
  );
}

export default Products;
