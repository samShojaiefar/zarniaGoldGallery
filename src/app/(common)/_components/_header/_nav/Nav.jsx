"use client";
import { Button, Flex } from "antd";
import style from "./nav.module.scss";
import SearchIcon from "../../icon/searchIcon";
import useResponsive from "@/lib/hocks/useResponsive";
import ProfileIcon from "../../icon/profileIcon";
import CartIcon from "../../icon/CartIcon";
import { Typography } from "antd";
import Logo from "../../icon/logo";
import ArrowIcon from "../../icon/ArrowIcon";
import { useRouter } from "next/navigation";
const { Text } = Typography;
export default function Nav() {
  const router = useRouter();
  const { isMobile, isTablet, isDesktop } = useResponsive();
  return (
    <Flex vertical className={style.navContainer}>
      <Flex className={style.navHeader} align="center" justify="space-between">
        <Logo width={156} height={32} />
        <Flex gap={"32px"}>
          {isDesktop && (
            <>
              {" "}
              <Button
                type="text"
                iconPosition="end"
                icon={<CartIcon width={24} height={24} color="black" />}
              >
                سبد خرید
              </Button>{" "}
              <Button
                type="text"
                iconPosition="end"
                icon={<ProfileIcon width={24} height={24} color="black" />}
              >
                ورود/ ثبت‌نام
              </Button>
            </>
          )}
          <SearchIcon />
        </Flex>
      </Flex>

      {isDesktop && (
        <>
          <Flex className={style.navLinkContainer} gap={"32px"}>
            <Text
              onClick={() => router.push("/")}
              className={style.navLink}
            >
              خانه
            </Text>
            <Flex align="center" justify="center">
              <Text className={style.navLink}>فروشگاه</Text>
              <ArrowIcon width={24} height={24} />
            </Flex>
            <Text className={style.navLink}>تماس با ما</Text>
          </Flex>
        </>
      )}
    </Flex>
  );
}
