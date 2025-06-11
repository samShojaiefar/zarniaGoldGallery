"use client";

import { useState, useEffect } from "react";
import useSWR, { mutate } from "swr";
import { useRouter } from "next/navigation";
import { Button, Flex, Input, Typography } from "antd";

import axiosInstance from "@/lib/services/axiosInstance";
import Auth from "@/app/(main)/(auth)/_auth/Auth";
import Categories from "@/app/(main)/(categories)/_categories/Categories";

import useResponsive from "@/lib/hooks/useResponsive";
import style from "./nav.module.scss";

import SearchIcon from "../../icon/searchIcon";
import ProfileIcon from "../../icon/profileIcon";
import CartIcon from "../../icon/CartIcon";
import Logo from "../../icon/logo";
import ArrowIcon from "../../icon/ArrowIcon";
import Image from "next/image";

const { Text } = Typography;

const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);

export default function Nav() {
  const router = useRouter();
  const { isDesktop } = useResponsive();

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [token, setToken] = useState(null);

  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    setToken(accessToken);
  }, []);

  const { data: user } = useSWR(token ? "/user" : null, fetcher);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    mutate("/user/me", null, { revalidate: false });
    setToken(null);
  };

  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 1) {
      try {
        const res = await axiosInstance.get(`/products?search=${query}`);
        const products = Array.isArray(res.data)
          ? res.data
          : res.data.items || res.data.data || [];
        setSearchResults(products.slice(0, 5));
      } catch (err) {
        console.error("خطا در جستجو:", err);
        setSearchResults([]);
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className={style.navContainer}>
      <div className={style.navHeader}>
        <Button type="text" onClick={() => router.push("/")}>
          <Logo width={156} height={32} />
        </Button>

        <Flex align="center" gap="32px">
          {isDesktop && (
            <>
              <Button
                type="text"
                icon={<CartIcon width={24} height={24} color="black" />}
                onClick={() =>
                  user ? router.push("/cart") : setShowAuthModal(true)
                }
              >
                سبد خرید
              </Button>

              {user ? (
                <Button
                  type="text"
                  icon={<ProfileIcon width={24} height={24} color="black" />}
                  onClick={() => router.push("/profile")}
                >
                  {user.phone || "پروفایل"}
                </Button>
              ) : (
                <Button
                  type="text"
                  icon={<ProfileIcon width={24} height={24} color="black" />}
                  onClick={() => setShowAuthModal(true)}
                >
                  ورود / ثبت‌نام
                </Button>
              )}
            </>
          )}
          <Flex align="center" gap={8}>
            {searchVisible && (
              <div className={style.searchBox}>
                <Input
                  autoFocus
                  placeholder="جستجو در محصولات..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onPressEnter={() => {
                    if (searchQuery.trim().length > 0) {
                      router.push(
                        `/products?search=${
                          searchQuery.trim()
                        }`
                      );
                      setSearchVisible(false);
                      setSearchQuery("");
                      setSearchResults([]);
                    }
                  }}
                  className={style.searchInput}
                />

                {Array.isArray(searchResults) &&
                  searchResults.length > 0 && (
                    <div className={style.searchResults}>
                      {searchResults.map((product) => (
                        <div
                          key={product.id}
                          className={style.searchResultItem}
                          onClick={() => {
                            router.push(`/product/${product.slug}`);
                            setSearchVisible(false);
                            setSearchQuery("");
                            setSearchResults([]);
                          }}
                        >
                          <Flex align="center" gap={16}>
                            <Image
                              className={style.image}
                              src={product.image}
                              width={100}
                              height={100}
                              alt={product.name}
                            />
                            <Flex vertical>
                              <Text>{product.name}</Text>
                              <Flex gap={5}>
                                <Text>{product.price}</Text>
                                <Text>تومان</Text>
                              </Flex>
                            </Flex>
                          </Flex>
                        </div>
                      ))}
                    </div>
                  )}
              </div>
            )}
            <Button
              type="text"
              onClick={() => setSearchVisible(!searchVisible)}
            >
              <SearchIcon width={24} height={24} color="black" />
            </Button>
          </Flex>
        </Flex>
      </div>

      {isDesktop && (
        <div className={style.navLinkContainer}>
          <Text onClick={() => router.push("/")} className={style.navLink}>
            خانه
          </Text>

          <Flex align="center" justify="center">
            <Text
              onClick={() => setShowCategoryModal(true)}
              className={style.navLink}
            >
              فروشگاه
            </Text>
            <ArrowIcon width={24} height={24} />
          </Flex>

          <Text className={style.navLink}>تماس با ما</Text>
        </div>
      )}

      {showAuthModal && <Auth onClose={() => setShowAuthModal(false)} />}
      {showCategoryModal && (
        <Categories onClose={() => setShowCategoryModal(false)} />
      )}
    </div>
  );
}
