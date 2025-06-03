"use client";

import { Button, Flex, Typography } from "antd";
import style from "./bottomFilter.module.scss";
import SortIcon from "@/app/(main)/(common)/_components/icon/SortIcon";
import FilterIcon from "@/app/(main)/(common)/_components/icon/FilterIcon";
const { Text } = Typography;
const BottomFilter = ({setIsSortModalOpen}) => {
  return (
    <Flex
      gap={30}
      className={style.BottomFilter}
      justify="center"
      align="center"
    >
      <Button type="text" icon={<SortIcon />} onClick={setIsSortModalOpen} className={style.sortContainer}>
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
