"use client";

import { Card, Button, Typography, Space, Divider, Flex } from "antd";
import style from "./cart.module.scss";
import Image from "next/image";
const { Text } = Typography;
import MiunsIcon from "@/app/(main)/(common)/_components/icon/MiunsIcon";
import AddIcon from "@/app/(main)/(common)/_components/icon/AddIcon";
import TrashIcon from "@/app/(main)/(common)/_components/icon/TrashIcon";

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

const Cart = () => {
  return (
    <div className={style.cartContainer}>
      {cartItems.map((item) => (
        <>
          <div className={style.cartCard}>
            <Flex vertical>
              <Flex align="center" style={{ width: "100%" }} justify="space-between">
                <Flex align="center">
                  <Image src={item.image} width={64} height={64} />
                  <Flex gap={8} vertical>
                    <Text className={style.title} type={"secondary"}>
                      انگشتر طرح چشم
                    </Text>
                    <Text className={style.wight} type={"secondary"}>
                      {item.wight}
                    </Text>
                  </Flex>
                </Flex>
                <TrashIcon />
              </Flex>
              <Flex justify="space-between" style={{ width: "100%",backgroundColor:"red" }}>
                <Text className={style.price}>{item.price}تومان</Text>
                <Flex align="center" gap={15}>
                  <Button className={style.quntitybutton}>
                    <AddIcon width={34} height={34} border={false} />
                  </Button>
                  <Text>۱</Text>
                  <Button className={style.quntitybutton}>
                    <MiunsIcon />
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </div>
        </>
      ))}
    </div>
  );
};

export default Cart;
