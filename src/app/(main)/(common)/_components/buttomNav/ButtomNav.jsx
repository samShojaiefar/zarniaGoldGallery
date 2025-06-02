"use client";

import { usePathname, useRouter } from "next/navigation";
import { Flex, Typography, Button } from "antd";
import HomeIcon from "../icon/HomeIcon";
import StoreIcon from "../icon/StoreIcon";
import CartIcon from "../icon/CartIcon";
import ProfileIcon from "../icon/profileIcon";
import style from "./ButtomNav.module.scss";
import { useState } from "react";
import Auth from "@/app/(main)/(auth)/_auth/Auth"
const { Text } = Typography;

const BottomNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const getActiveTab = () => {
    if (pathname === "/") return "home";
    if (pathname.startsWith("/products")) return "store";
    if (pathname.startsWith("/cart")) return "cart";
    if (pathname.startsWith("/profile")) return "profile";
    return "";
  };

  const activeTab = getActiveTab();

  return (
    <Flex className={style.buttomNavContaner} align="center" justify="center">
      <Flex justify="space-between" className={style.tabContainer}>
        <Button
          type="text"
          className={style.tab}
          icon={
            <HomeIcon
              width={24}
              height={24}
              color={activeTab === "home" ? "black" : "#B3B3B3"}
            />
          }
          onClick={() => router.push("/")}
        >
          <Text
            className={style.iconTitle}
            style={{
              color: activeTab === "home" ? "black" : "#B3B3B3",
            }}
          >
            خانه
          </Text>
        </Button>

        <Button
          type="text"
          className={style.tab}
          icon={
            <StoreIcon
              width={24}
              height={24}
              color={activeTab === "store" ? "black" : "#B3B3B3"}
            />
          }
          onClick={() => router.push("/products")}
        >
          <Text
            className={style.iconTitle}
            style={{
              color: activeTab === "store" ? "black" : "#B3B3B3",
            }}
          >
            فروشگاه
          </Text>
        </Button>

        <Button
          type="text"
          className={style.tab}
          icon={
            <CartIcon
              width={24}
              height={24}
              color={activeTab === "cart" ? "black" : "#B3B3B3"}
            />
          }
          onClick={() => {
            // if (isAuthenticated) {
            //   router.push("/cart");
            // } else {
            //   setShowAuthModal(true); // نمایش مودال ورود
            // }
            setShowAuthModal(true);
          }}
        >
          <Text
            className={style.iconTitle}
            style={{
              color: activeTab === "cart" ? "black" : "#B3B3B3",
            }}
          >
            سبد خرید
          </Text>
        </Button>

        <Button
          type="text"
          className={style.tab}
          icon={
            <ProfileIcon
              width={24}
              height={24}
              color={activeTab === "profile" ? "black" : "#B3B3B3"}
            />
          }
          onClick={() => router.push("/profile")}
        >
          <Text
            className={style.iconTitle}
            style={{
              color: activeTab === "profile" ? "black" : "#B3B3B3",
            }}
          >
            حساب کاربر
          </Text>
        </Button>
      </Flex>
      {showAuthModal && <Auth onClose={() => setShowAuthModal(false)} />}
    </Flex>
  );
};

export default BottomNav;
