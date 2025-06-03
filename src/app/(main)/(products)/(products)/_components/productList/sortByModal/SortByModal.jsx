import { useState } from "react";
import { Divider, Flex, Typography, Button } from "antd";
import CloseIcon from "@/app/(main)/(common)/_components/icon/CloseIcon";
import style from "./sortByModal.module.scss";

const { Text } = Typography;

function SortBy({ onClose, onSelectSort }) {
  const [selected, setSelected] = useState("cheap");

  const handleChange = (value) => {
    setSelected(value);
  };

  const isChecked = (value) => selected === value;

  return (
    <div className={style.overlay}>
      <div className={style.modalContent}>
        <Flex justify="space-between" align="center">
          <Text className={style.title}>مرتب سازی</Text>
          <CloseIcon onClick={onClose} width={24} height={24} />
        </Flex>

        <Divider />
        <Flex vertical gap={55}>
          <Flex vertical gap={48}>
            <Flex gap={8} align="center" onClick={() => handleChange("asc")}>
              <input
                type="radio"
                name="sort"
                checked={isChecked("asc")}
                onChange={() => {}}
                className={style.radio}
              />
              <Text>ارزان‌ترین</Text>
            </Flex>
            <Flex gap={8} align="center" onClick={() => handleChange("desc")}>
              <input
                type="radio"
                name="sort"
                checked={isChecked("desc")}
                onChange={() => {}}
                className={style.radio}
              />
              <Text>گران‌ترین</Text>
            </Flex>
            <Flex gap={8} align="center" onClick={() => handleChange("")}>
              <input
                type="radio"
                name="sort"
                checked={isChecked("")}
                onChange={() => {}}
                className={style.radio}
              />
              <Text>محبوب‌ترین</Text>
            </Flex>
          </Flex>

          <Button
            className={style.button}
            onClick={() => {
              onSelectSort(selected); // 👈 انتخاب را به والد ارسال می‌کنیم
              onClose(); // 👈 مودال را می‌بندیم
            }}
          >
            ادامه
          </Button>
        </Flex>
      </div>
    </div>
  );
}

export default SortBy;
