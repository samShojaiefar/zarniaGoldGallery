"use client";
import FilterIcon from "@/app/(common)/_components/icon/FilterIcon";
import SortIcon from "@/app/(common)/_components/icon/SortIcon";
import { Button, Flex, Typography } from "antd";
import style from "./bottomFilter.module.scss";
const { Text } = Typography;
const BottomFilter = () => {
  return (
    <Flex
      gap={30}
      className={style.BottomFilter}
      justify="center"
      align="center"
    >
      <Button type="text" icon={<SortIcon />} className={style.sortContainer}>
        مرتب سازی
      </Button>
      <Button
        type="text" icon={<FilterIcon />}
        className={style.filterContainer}
      >
        فیلتر
      </Button>
    </Flex>
  );
};

export default BottomFilter;
