import { Typography, Flex, Select } from "antd";
import Title from "antd/es/typography/Title";
import style from "./detail.module.scss";
import { toPersianDigits } from "@/lib/utils/toPersionNumber";
import PurchaseInfo from "../PurchaseInfo/PurchaseInfo";

const { Text } = Typography;

const Detail = ({ product, openLoginModal }) => {
  return (
    <div className={style.detailWrapper}>
      <div className={style.detailContainer}>
        <Title level={4}>{product.name}</Title>
        <Flex gap={24} vertical>
          <Flex gap={24}>
            <Flex gap={24} vertical>
              <Text type="secondary">عیار:</Text>
              <Text type="secondary">ویژگی (سایز):</Text>
              <Text type="secondary">قیمت لحظه‌ای طلا:</Text>
            </Flex>
            <Flex gap={24} vertical>
              <Text>۱۸</Text>
              <Text>۹</Text>
              <Text>{toPersianDigits(product.price)} تومان</Text>
            </Flex>
          </Flex>

          <Flex align="center" gap={8}>
            <div className={style.weightWrapper}>
              <Text type="secondary">وزن:</Text>
              <Select
                defaultValue="first"
                options={[
                  { label: `${toPersianDigits(product.weight)}`, value: "first" },
                ]}
                bordered={false}
                className={style.customSelect}
              />
              <Text type="secondary" className={style.gramLabel}>
                گرم
              </Text>
            </div>
          </Flex>
        </Flex>
      </div>

      <div className={style.descraptionContainer}>
        <Text type="secondary" className={style.descraiptionTitle}>
          دسته: {product.categories.map((category) => category.title).join(" ، ")}
        </Text>
        <Flex vertical>
          <Text type="secondary">توضیحات:</Text>
          <Text type="secondary">{product.description}</Text>
        </Flex>
      </div>

      <PurchaseInfo product={product} openLoginModal={openLoginModal} />
    </div>
  );
};

export default Detail;
