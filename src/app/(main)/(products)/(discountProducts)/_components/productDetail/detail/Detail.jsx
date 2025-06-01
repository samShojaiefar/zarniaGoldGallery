import { Typography, Flex, Select } from "antd";
import Title from "antd/es/typography/Title";
import style from "./detail.module.scss";

const { Text } = Typography;

const Detail = () => {
  return (
    <div className={style.detailWrapper}>
      <div className={style.detailContainer}>
        <Title level={4}>انگشتر مینمال طرح چشم</Title>
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
              <Text>۶,۵۰۰,۰۰۰ تومان</Text>
            </Flex>
          </Flex>

          <Flex align="center" gap={8}>
            <div className={style.weightWrapper}>
              <Text type="secondary">وزن:</Text>
              <Select
                defaultValue="1.01"
                options={[
                  { label: "۱.۰۱", value: "1.01" },
                  { label: "۱.۰۲", value: "1.02" },
                  { label: "۱.۰۳", value: "1.03" },
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
          دسته:  انگشتر طلا مینیمال, انگشتر و حلقه طلا
        </Text>
        <Flex vertical>
          <Text type="secondary">توضیحات:</Text>
          <Text type="secondary">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است،{" "}
          </Text>
        </Flex>
      </div>
    </div>
  );
};

export default Detail;
