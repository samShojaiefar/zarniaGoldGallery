"use client";

import { Button, Typography, Flex, Radio, ConfigProvider } from "antd";
import style from "./cart.module.scss";
import Image from "next/image";
import { useState } from "react";
import MiunsIcon from "@/app/(main)/(common)/_components/icon/MiunsIcon";
import AddIcon from "@/app/(main)/(common)/_components/icon/AddIcon";
import TrashIcon from "@/app/(main)/(common)/_components/icon/TrashIcon";
import CartIcon from "@/app/(main)/(common)/_components/icon/CartIcon";
import FavoriteIcon from "@/app/(main)/(common)/_components/icon/favorite";
import BottomPurchaseInfo from "../bottomPurchaseInfo/BottomPurchaseInfo";
import PurchaseInfo from "../PurchaseInfo/PurchaseInfo";
const { Text } = Typography;

const cartItems = [
  {
    id: 1,
    price: "۵,۱۹۱,۶۹۰",
    image: "/image/Frame 238010.png",
    wight: "۲.۰۱ گرم",
  },
  {
    id: 2,
    price: "۵,۱۹۱,۶۹۰",
    image: "/image/Frame 238010.png",
    wight: "۲.۰۱ گرم",
  },
];

const favoriteItems = [
  {
    id: 3,
    price: "۳,۵۰۰,۰۰۰",
    image: "/image/Frame 238010.png",
    wight: "۱.۵۰ گرم",
  },
  {
    id: 4,
    price: "۳,۵۰۰,۰۰۰",
    image: "/image/Frame 238010.png",
    wight: "۱.۵۰ گرم",
  },
];

const Cart = () => {
  const [selectedTab, setSelectedTab] = useState("a");

  const renderItems = selectedTab === "a" ? cartItems : favoriteItems;

  return (
    <ConfigProvider
      theme={{
        components: {
          Radio: {
            buttonBg: "#EDE5DF",
            buttonCheckedBg: "#715A41",
            buttonColor: "#715A41",
            buttonCheckedColor: "#fff",
            borderRadius: 42,
            colorPrimary: "#715A41",
          },
        },
      }}
    >
      <Flex justify="center" gap={24}>
        <div className={style.cartContainer}>
          <Flex justify="center">
            <Radio.Group
              className={style.tabContainer}
              value={selectedTab}
              onChange={(e) => setSelectedTab(e.target.value)}
              buttonStyle="solid"
            >
              <Radio.Button className={style.tab} value="a">
                <Flex gap={8} align="center" justify="center">
                  <CartIcon
                    width={24}
                    height={24}
                    color={selectedTab === "a" ? "white" : "#715A41"}
                  />
                  <span
                    style={{ color: selectedTab === "a" ? "white" : "#715A41" }}
                  >
                    سبد خرید
                  </span>
                </Flex>
              </Radio.Button>
              <Radio.Button className={style.tab} value="b">
                <Flex gap={8} align="center" justify="center">
                  <FavoriteIcon
                    width={24}
                    height={24}
                    color={selectedTab === "b" ? "white" : "#715A41"}
                  />
                  <span
                    style={{ color: selectedTab === "b" ? "white" : "#715A41" }}
                  >
                    علاقه‌ مندی‌ها
                  </span>
                </Flex>
              </Radio.Button>
            </Radio.Group>
          </Flex>

          <div>
            {renderItems.map((item) => (
              <div key={item.id} className={style.cartCard}>
                <Flex vertical className={style.cardContentConteiner}>
                  <Flex align="center" justify="space-between">
                    <Flex align="center">
                      <Image src={item.image} width={64} height={64} alt="" />
                      <Flex gap={8} vertical>
                        <Text className={style.title} type="secondary">
                          انگشتر طرح چشم
                        </Text>
                        <Text className={style.wight} type="secondary">
                          {item.wight}
                        </Text>
                      </Flex>
                    </Flex>
                    <TrashIcon />
                  </Flex>
                  <Flex justify="space-between">
                    <Text className={style.price}>{item.price} تومان</Text>
                    {selectedTab === "a" && (
                      <Flex align="center" gap={15}>
                        <Button className={style.quntitybutton}>
                          <AddIcon width={34} height={34} border={false} />
                        </Button>
                        <Text>۱</Text>
                        <Button className={style.quntitybutton}>
                          <MiunsIcon />
                        </Button>
                      </Flex>
                    )}
                  </Flex>
                  {selectedTab === "b" && (
                    <Button className={style.addButton}>
                      <Flex>
                        <AddIcon border />
                        افزودن به سبد
                      </Flex>
                    </Button>
                  )}
                </Flex>
              </div>
            ))}
          </div>
        </div>
        <PurchaseInfo />
      </Flex>

      {selectedTab === "a" && <BottomPurchaseInfo />}
    </ConfigProvider>
  );
};

export default Cart;
