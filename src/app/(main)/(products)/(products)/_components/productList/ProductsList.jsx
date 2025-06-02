"use client";
import {
  Breadcrumb,
  Button,
  Card,
  ConfigProvider,
  Flex,
  Radio,
  Typography,
  Spin,
  Empty,
} from "antd";
import style from "./productList.module.scss";
import useResponsive from "@/lib/hooks/useResponsive";
import SortIcon from "@/app/(main)/(common)/_components/icon/SortIcon";
import Filter from "@/app/(main)/(common)/_components/filter/Filter";
import BottomFilter from "@/app/(main)/(common)/_components/bottomFilter/BottomFilter";
import { useRouter } from "next/navigation";
import ArrowIcon from "@/app/(main)/(common)/_components/icon/ArrowIcon";
import AddIcon from "@/app/(main)/(common)/_components/icon/AddIcon";
import { useGetProducts } from "../../_hooks/api/productsApi";
import Image from "next/image";
import { toPersianDigits } from "@/lib/utils/toPersionNumber";
const { Text } = Typography;

const ProductsList = () => {
  const router = useRouter();
  const { isDesktop } = useResponsive();
  const { data, error, isLoading } = useGetProducts();

  const filters = [
    { title: "انگشتر" },
    { title: "گردنبند" },
    { title: "آویز" },
    { title: "گوشواره" },
    { title: "نیم‌ست" },
    { title: "زنجیر" },
  ];

  return (
    <>
      <div className={style.productContainer}>
        <Filter />

        <div className={style.mainContent}>
          {isDesktop ? (
            <Flex
              align="center"
              justify="space-between"
              style={{ width: "100%" }}
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
            {!isLoading &&
              data?.data?.length > 0 &&
              data.data.map((product) => (
                <Card
                  key={product.id}
                  className={style.card}
                  hoverable
                  cover={
                    <Image
                      onClick={() => router.push(`/products/${product.slug}`)}
                      src={product.image}
                      width={143}
                      height={143}
                      alt={product.name}
                    />
                  }
                >
                  <Flex vertical>
                    <Text className={style.cardTitle}>{product.name}</Text>
                    <Flex gap={8} vertical>
                      <Flex justify="space-between">
                        <Text className={style.weight}>وزن:</Text>
                        <Text className={style.weight}>
                          {toPersianDigits(product.weight)}
                        </Text>
                      </Flex>
                      <Flex justify="space-between">
                        <Text className={style.weight}>ویژگی (سایز):</Text>
                        <Text className={style.weight}>
                          {toPersianDigits(8)}
                        </Text>
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
                        <Text className={style.price}>
                          {toPersianDigits(product.price)}
                        </Text>
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
                            {toPersianDigits(
                              product.snapp_pay_each_installment
                            )}{" "}
                            تومان
                          </Text>
                        </Flex>
                      </div>
                      <Button className={style.addButton}>
                        <AddIcon border />
                        افزودن به سبد
                      </Button>
                    </Flex>
                  </Flex>
                </Card>
              ))}
          </div>
        </div>
      </div>
      <BottomFilter />
    </>
  );
};

export default ProductsList;
