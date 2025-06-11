"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Flex, Typography } from "antd";
import useSWR, { mutate } from "swr";

import Auth from "@/app/(main)/(auth)/_auth/Auth";
import axiosInstance from "@/lib/services/axiosInstance";
import style from "./ButtomNav.module.scss";

import HomeIcon from "../icon/HomeIcon";
import StoreIcon from "../icon/StoreIcon";
import CartIcon from "../icon/CartIcon";
import ProfileIcon from "../icon/profileIcon";

const { Text } = Typography;

const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);

const BottomNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("access_token");
      setToken(accessToken);
    }
  }, []);

  const { data: user } = useSWR(token ? "/user" : null, fetcher);

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
        {/* خانه */}
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
            style={{ color: activeTab === "home" ? "black" : "#B3B3B3" }}
          >
            خانه
          </Text>
        </Button>

        {/* فروشگاه */}
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
            style={{ color: activeTab === "store" ? "black" : "#B3B3B3" }}
          >
            فروشگاه
          </Text>
        </Button>

        {/* سبد خرید */}
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
            user ? router.push("/cart") : setShowAuthModal(true);
          }}
        >
          <Text
            className={style.iconTitle}
            style={{ color: activeTab === "cart" ? "black" : "#B3B3B3" }}
          >
            سبد خرید
          </Text>
        </Button>

        {/* پروفایل */}
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
          onClick={() => {
            user ? router.push("/profile") : setShowAuthModal(true);
          }}
        >
          <Text
            className={style.iconTitle}
            style={{ color: activeTab === "profile" ? "black" : "#B3B3B3" }}
          >
            {user ? "پروفایل" : "ورود"}
          </Text>
        </Button>
      </Flex>

      {showAuthModal && <Auth onClose={() => setShowAuthModal(false)} />}
    </Flex>
  );
};

export default BottomNav;
