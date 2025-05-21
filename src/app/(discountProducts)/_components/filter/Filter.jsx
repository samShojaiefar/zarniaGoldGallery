import FilterIcon from "@/app/(common)/_components/icon/FilterIcon";
import SearchIcon from "@/app/(common)/_components/icon/searchIcon";
import { Collapse, Flex, Input, Typography, Checkbox, Button } from "antd";
import style from "./filter.module.scss";
import useResponsive from "@/lib/hocks/useResponsive";

const { Text } = Typography;
const { Panel } = Collapse;

const Filter = () => {
  const { isDesktop } = useResponsive();

  if (!isDesktop) return null;

  return (
    <div className={style.filterContainer}>
      <Flex  gap={16} vertical>
        <Flex gap={6} align="center">
          <FilterIcon />
          <Text>فیلتر</Text>
        </Flex>

        <Input
          className={style.searchInput}
          placeholder="جست‌وجو"
          prefix={<SearchIcon color="#666666" />}
        />

        <Collapse expandIconPosition="end" ghost accordion>
          <Panel
            style={{ borderBottom: "1px solid #00000030" }}
            header="دسته بندی محصولات"
            key="1"
          >
            <Flex vertical gap={8}>
              <Checkbox>انگشتر</Checkbox>
              <Checkbox>گردنبند</Checkbox>
              <Checkbox>گوشواره</Checkbox>
              <Checkbox>زنجیر</Checkbox>
            </Flex>
          </Panel>

          <Panel
            style={{ borderBottom: "1px solid #00000030", borderRadius: "0px" }}
            header="فیلتر قیمت"
            key="2"
          >
            <Flex vertical gap={8}>
              <div className={style.priceRange}>از قیمت (تومان)</div>
              <div className={style.priceRange}>تا قیمت (تومان)</div>
            </Flex>
          </Panel>
        </Collapse>
      </Flex>
      <Flex className={style.buttonContainer} align="center">
        <Button className={style.clearFilterButton} type="text">حذف همه</Button>
        <Button className={style.filterButton}>فیلتر</Button>
      </Flex>
    </div>
  );
};

export default Filter;
