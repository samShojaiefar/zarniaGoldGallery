"use client";
import { ConfigProvider, Flex, Radio } from "antd";
import style from "./profile.module.scss";

function Profile() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Radio: {
            buttonBg: "#ffffff",
            buttonCheckedBg: "#C7A78233",
            buttonColor: "#715A4199",
            buttonSolidCheckedHoverBg: "#c4a484",
            borderRadius: 42,
            colorPrimary: "#C7A782",
          },
        },
      }}
    >
        <Radio.Group defaultValue="dashboard" className={style.radioGroupWrapper}>
          <Flex className={style.filter}>
            {" "}
            <Radio.Button value="dashboard">پیشخوان</Radio.Button>
          </Flex>
          <Flex className={style.filter}>
            {" "}
            <Radio.Button value="gift">گیفت</Radio.Button>
          </Flex>
          <Flex className={style.filter}>
            {" "}
            <Radio.Button value="orders">سفارش‌ها</Radio.Button>
          </Flex>
          <Flex className={style.filter}>
            {" "}
            <Radio.Button value="invoices">فاکتور‌ها</Radio.Button>
          </Flex>
          <Flex className={style.filter}>
            {" "}
            <Radio.Button value="account">جزئیات حساب</Radio.Button>
          </Flex>
        </Radio.Group>
    </ConfigProvider>
  );
}

export default Profile;
