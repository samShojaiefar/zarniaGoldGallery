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
import useResponsive from "@/lib/hooks/useResponsive"
import style from "./discountProductsList.module.scss";
import Image from "next/image";
import ArrowIcon from "../../(common)/_components/icon/arrowIcon";
import SortIcon from "../../(common)/_components/icon/SortIcon";
import Filter from "../_components/filter/Filter";
import BottomFilter from "../../../../(common)/_components/bottomFilter/BottomFilter";
const { Text } = Typography;

const DiscountProductsList = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const offerProducts = [
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
        <div className={style.productContainer}>
          <Filter />

          <Flex vertical justify="center" className={style.mainContent}>
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
                  <Button
                    type="text"
                    icon={<SortIcon width={20} height={20} />}
                    className={style.sortButton}
                  >
                    مرتب سازی
                  </Button>
                  <ArrowIcon width={24} height={24} />
                </div>
              </Flex>
            ) : (
              <Flex>
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
              </Flex>
            )}

            <div className={style.cardContainer}>
              {offerProducts.map((product, index) => (
                <Flex gap={"5rem"}>
                  <Card
                    className={style.card}
                    hoverable
                    cover={
                      <Image src={product.image} width={143} height={143} />
                    }
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
                          <Text className={style.installmentTitle}>
                            هر قسط:
                          </Text>
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
            </div>
          </Flex>
        </div>
      </ConfigProvider>
      <BottomFilter />
    </>
  );
};

export default DiscountProductsList;
