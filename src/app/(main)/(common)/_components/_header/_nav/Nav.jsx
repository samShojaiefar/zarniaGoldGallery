"use client";
import { Button, Flex } from "antd";
import style from "./nav.module.scss";
import SearchIcon from "../../icon/searchIcon";
import ProfileIcon from "../../icon/profileIcon";
import CartIcon from "../../icon/CartIcon";
import { Typography } from "antd";
import Logo from "../../icon/logo";
import ArrowIcon from "../../icon/ArrowIcon";
import { useRouter } from "next/navigation";
import useResponsive from "@/lib/hooks/useResponsive";
import {useState} from "react";
import Auth from "@/app/(main)/(auth)/_auth/Auth";
import Category from "@/app/(main)/(home)/_components/product/category/Category";
import Categories from "@/app/(main)/(categories)/_categories/Categories";
const { Text } = Typography;
export default function Nav() {
  const router = useRouter();
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  return (
    <div className={style.navContainer}>
      <div className={style.navHeader}>
        <Button style={{border:"none"}} onClick={() => router.push("/")}>

          <Logo width={156} height={32}  />
        </Button>
        <Flex gap={"32px"}>
          {isDesktop && (
            <>
              {" "}
              <Button
                type="text"
                iconPosition="end"
                icon={<CartIcon width={24} height={24} color="black" />}
                onClick={()=>{setShowAuthModal(true)}}
              >
                سبد خرید
              </Button>{" "}
              <Button
                type="text"
                iconPosition="end"
                icon={<ProfileIcon width={24} height={24} color="black" />}
                onClick={()=>{setShowAuthModal(true)}}
              >
                ورود/ ثبت‌نام
              </Button>
            </>
          )}
          <Button onClick={() => router.push("/products")} style={{border:"none"}} >
            <SearchIcon width={24} height={24} color={"black"}  />
          </Button>

        </Flex>
      </div>

      {isDesktop && (
        <>
          <div className={style.navLinkContainer}>
            <Text onClick={() => router.push("/")} className={style.navLink}>
              خانه
            </Text>
            <Flex align="center" justify="center">
              <Text onClick={() => setShowCategoryModal(true)} className={style.navLink}>فروشگاه</Text>
              <ArrowIcon width={24} height={24} />
            </Flex>
            <Text className={style.navLink}>تماس با ما</Text>
          </div>
        </>
      )}

      {showAuthModal && <Auth onClose={() => setShowAuthModal(false)} />}
      {showCategoryModal && <Categories onClose={() => setShowCategoryModal(false)} />}
    </div>
  );
}
