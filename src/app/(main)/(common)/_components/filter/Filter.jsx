"use client";

import {
  Collapse,
  Flex,
  Input,
  Typography,
  Checkbox,
  Button
} from "antd";
import style from "./filter.module.scss";
import useResponsive from "@/lib/hooks/useResponsive";
import FilterIcon from "@/app/(main)/(common)/_components/icon/FilterIcon";
import SearchIcon from "@/app/(main)/(common)/_components/icon/searchIcon";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toPersianDigits } from "@/lib/utils/toPersionNumber";
import {useGetCategories} from "@/app/(main)/(products)/(products)/_hooks/api/categoryApi";

const { Text } = Typography;
const { Panel } = Collapse;

const Filter = () => {
  const { isDesktop } = useResponsive();
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchQuery = searchParams.get("search") || "";
  const minQuery = searchParams.get("min_price") || "";
  const maxQuery = searchParams.get("max_price") || "";

  const [searchValue, setSearchValue] = useState(searchQuery);
  const [minPrice, setMinPrice] = useState(minQuery);
  const [maxPrice, setMaxPrice] = useState(maxQuery);

  useEffect(() => {
    setSearchValue(searchQuery);
  }, [searchQuery]);

  const {isLoading, data} = useGetCategories();
  const applyFilters = () => {
    const params = new URLSearchParams(window.location.search);

    if (searchValue.trim().length >= 2) {
      params.set("search", searchValue.trim());
    } else {
      params.delete("search");
    }

    if (minPrice) {
      params.set("min_price", minPrice);
    } else {
      params.delete("min_price");
    }

    if (maxPrice) {
      params.set("max_price", maxPrice);
    } else {
      params.delete("max_price");
    }

    router.push(`/products?${params.toString()}`);
  };

  const clearFilters = () => {
    setSearchValue("");
    setMinPrice("");
    setMaxPrice("");
    router.push("/products");
  };

  if (!isDesktop) return null;

  return (
    <div className={style.filterContainer}>
      <Flex gap={16} vertical>
        <Flex gap={6} align="center">
          <FilterIcon />
          <Text>فیلتر</Text>
        </Flex>

        <Input
          className={style.searchInput}
          placeholder="جست‌وجو"
          prefix={<SearchIcon color="#666666" />}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <Collapse expandIconPosition="end" ghost accordion>
          <Panel
            style={{ borderBottom: "1px solid #00000030" }}
            header="دسته بندی محصولات"
            key="1"
          >
            <Flex vertical gap={8}>
              {!isLoading && data?.data?.length > 0 && data.data.map((category)=>(
                <Checkbox key={category.id}>{category.title}</Checkbox>
              ))}
            </Flex>
          </Panel>

          <Panel
            style={{ borderBottom: "1px solid #00000030", borderRadius: "0px" }}
            header="فیلتر قیمت"
            key="2"
          >
            <Flex vertical gap={8}>
              <Input
                  type={"number"}
                placeholder="حداقل قیمت"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <Input
                  type={"number"}
                placeholder="حداکثر قیمت"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </Flex>
          </Panel>
        </Collapse>
      </Flex>

      <Flex className={style.buttonContainer} align="center">
        <Button className={style.clearFilterButton} type="text" onClick={clearFilters}>
          حذف همه
        </Button>
        <Button className={style.filterButton} onClick={applyFilters}>
          فیلتر
        </Button>
      </Flex>
    </div>
  );
};

export default Filter;
