"use client";
import {
  Breadcrumb,
  Button,
  Card,
  ConfigProvider,
  Flex,
  Radio,
  Typography,
} from "antd";
import style from "./productPage.module.scss";
import Image from "next/image";
import AddIcon from "../../(common)/_components/icon/AddIcon";
import useResponsive from "@/lib/hocks/useResponsive";
import ArrowIcon from "../../(common)/_components/icon/arrowIcon";
import SortIcon from "../../(common)/_components/icon/SortIcon";
import Filter from "../_components/filter/Filter";
import BottomFilter from "../_components/bottomFilter/BottomFilter";
import { useRouter } from "next/navigation";
const { Text } = Typography;

const ProductsPage = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
    const router = useRouter();
  const products = [
    {
      image: "/image/ring.png",
      title: "انگشتر گل رز",
      off: "٪۲۰",
      price: "۱۰,۰۰۰,۰۰۰",
      offPrice: "۸,۰۰۰,۰۰۰",
      installment: "۲,۵۰۰,۰۰۰",
      Weight: "۱.۰۱۰",
      Size: "۸",
    },
    {
      image: "/image/ring.png",
      title: "انگشتر گل رز",
      off: "٪۲۰",
      price: "۱۰,۰۰۰,۰۰۰",
      offPrice: "۸,۰۰۰,۰۰۰",
      installment: "۲,۵۰۰,۰۰۰",
      Weight: "۱.۰۱۰",
      Size: "۸",
    },
    {
      image: "/image/ring.png",
      title: "انگشتر گل رز",
      off: "٪۲۰",
      price: "۱۰,۰۰۰,۰۰۰",
      offPrice: "۸,۰۰۰,۰۰۰",
      installment: "۲,۵۰۰,۰۰۰",
      Weight: "۱.۰۱۰",
      Size: "۸",
    },
    {
      image: "/image/ring.png",
      title: "انگشتر گل رز",
      off: "٪۲۰",
      price: "۱۰,۰۰۰,۰۰۰",
      offPrice: "۸,۰۰۰,۰۰۰",
      installment: "۲,۵۰۰,۰۰۰",
      Weight: "۱.۰۱۰",
      Size: "۸",
    },
    {
      image: "/image/ring.png",
      title: "انگشتر گل رز",
      off: "٪۲۰",
      price: "۱۰,۰۰۰,۰۰۰",
      offPrice: "۸,۰۰۰,۰۰۰",
      installment: "۲,۵۰۰,۰۰۰",
      Weight: "۱.۰۱۰",
      Size: "۸",
    },
    {
      image: "/image/ring.png",
      title: "انگشتر گل رز",
      off: "٪۲۰",
      price: "۱۰,۰۰۰,۰۰۰",
      offPrice: "۸,۰۰۰,۰۰۰",
      installment: "۲,۵۰۰,۰۰۰",
      Weight: "۱.۰۱۰",
      Size: "۸",
    },
    {
      image: "/image/ring.png",
      title: "انگشتر گل رز",
      off: "٪۲۰",
      price: "۱۰,۰۰۰,۰۰۰",
      offPrice: "۸,۰۰۰,۰۰۰",
      installment: "۲,۵۰۰,۰۰۰",
      Weight: "۱.۰۱۰",
      Size: "۸",
    },
    {
      image: "/image/ring.png",
      title: "انگشتر گل رز",
      off: "٪۲۰",
      price: "۱۰,۰۰۰,۰۰۰",
      offPrice: "۸,۰۰۰,۰۰۰",
      installment: "۲,۵۰۰,۰۰۰",
      Weight: "۱.۰۱۰",
      Size: "۸",
    },
  ];
  const filters = [
    {
      title: "انگشتر",
    },
    {
      title: "گردنبند",
    },
    {
      title: "آویز",
    },
    {
      title: "گوشواره",
    },
    {
      title: "نیم‌ست",
    },
    {
      title: "زنجیر",
    },
    {
      title: "گوشواره",
    },
  ];
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
        <div  className={style.productContainer}>
          <Filter />

          <div className={style.mainContent}>
            {isDesktop ? (
              <Flex
                align="center"
                style={{ width: "100%" }}
                justify="space-between"
              >
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>خانه</Breadcrumb.Item>
                  <Breadcrumb.Item>فروشگاه</Breadcrumb.Item>
                </Breadcrumb>
                                <div className={style.sortContainer}>
                  <Button type="text" icon={<SortIcon width={20} height={20} />} className={style.sortButton}>
                    مرتب سازی
                  </Button>
                  <ArrowIcon width={24} height={24} />
                </div>
              </Flex>
            ) : (
              <Radio.Group
                block
                className={style.filterContainer}
                defaultValue={"انگشتر"}
              >
                {filters.map((filter) => (
                  <div className={style.filter} key={filter.title}>
                    <Radio.Button value={filter.title}>
                      {filter.title}
                    </Radio.Button>
                  </div>
                ))}
              </Radio.Group>
            )}

            <div className={style.cardContainer}>
              {products.map((product) => (
                <Card
                  key={product.title}
                  className={style.card}
                  hoverable
                  onClick={() => router.push("/products/product-detail")}
                  cover={
                    <Image
                      src={product.image}
                      width={143}
                      height={143}
                      alt={product.title}
                    />
                  }
                >
                  <Flex vertical>
                    <Text className={style.cardTitle}>{product.title}</Text>
                    <Flex gap={8} vertical>
                      <Flex justify="space-between">
                        <Text className={style.weight}>وزن:</Text>
                        <Text className={style.weight}>{product.Weight}</Text>
                      </Flex>
                      <Flex justify="space-between">
                        <Text className={style.weight}>ویژگی (سایز):</Text>
                        <Text className={style.weight}>{product.Size}</Text>
                      </Flex>
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
                    <Flex gap={8} vertical>
                      <div className={style.InstallmentContainer}>
                        <Flex align="center" justify="space-between">
                          <Text className={style.installmentTitle}>
                            هر قسط:
                          </Text>
                          <Text className={style.installment}>
                            {product.installment} تومان
                          </Text>
                        </Flex>
                      </div>
                      <Button className={style.addButton} icon={<AddIcon />}>
                        افزودن به سبد
                      </Button>
                    </Flex>
                  </Flex>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </ConfigProvider>
      <BottomFilter />
    </>
  );
};

export default ProductsPage;
