"use client";

import {
  Button,
  Typography,
  Flex,
  Radio,
  ConfigProvider,
  Spin,
  Empty,
  message,
} from "antd";
import style from "./cart.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import MiunsIcon from "@/app/(main)/(common)/_components/icon/MiunsIcon";
import AddIcon from "@/app/(main)/(common)/_components/icon/AddIcon";
import TrashIcon from "@/app/(main)/(common)/_components/icon/TrashIcon";
import CartIcon from "@/app/(main)/(common)/_components/icon/CartIcon";
import FavoriteIcon from "@/app/(main)/(common)/_components/icon/favorite";
import BottomPurchaseInfo from "../bottomPurchaseInfo/BottomPurchaseInfo";
import PurchaseInfo from "../PurchaseInfo/PurchaseInfo";
import { addToCart, deleteCartItem, getCartItems, miunsProduct, removeProduct } from "@/lib/api/cartApi";
import { toPersianDigits } from "@/lib/utils/toPersionNumber";

const { Text } = Typography;

const Cart = () => {
  const [selectedTab, setSelectedTab] = useState("a");
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const favoriteItems = []; // در صورت نیاز API علاقه‌مندی‌ها اضافه شود

  const fetchCart = async () => {
    try {
      setLoading(true);
      const data = await getCartItems();
      setCartItems(data.items || []);
    } catch (error) {
      console.error("خطا در دریافت سبد خرید", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedTab === "a") fetchCart();
  }, [selectedTab]);
  const handleDeleteItem = async (productId) => {
    try {
      await deleteCartItem(productId);
      setCartItems((prev) =>
        prev.filter((item) => item.product_id !== productId)
      );
      message.success("محصول با موفقیت حذف شد");
    } catch (error) {
      console.error("خطا در حذف محصول", error);
      message.error("خطا در حذف محصول");
    }
  };
  const renderItems = selectedTab === "a" ? cartItems : favoriteItems;
  const handlePlusProduct = async (productSlug) => {
    await addToCart(productSlug);
    await fetchCart();
  };
  const handlemiunsProduct = async (productSlug) => {
    await miunsProduct(productSlug);
    await fetchCart();
  };
  const handleremoveProduct = async (productSlug) => {
    await removeProduct(productSlug);
    await fetchCart();
  };
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
                    علاقه‌مندی‌ها
                  </span>
                </Flex>
              </Radio.Button>
            </Radio.Group>
          </Flex>

          <div>
            {loading ? (
              <Spin style={{ marginTop: "2rem" }} />
            ) : renderItems.length === 0 ? (
              <Empty style={{marginTop:"50px"}} description="موردی یافت نشد" />
            ) : (
              renderItems.map((item, index) => (
                <div key={index} className={style.cartCard}>
                  <Flex vertical className={style.cardContentConteiner}>
                    <Flex align="center" justify="space-between">
                      <Flex align="center">
                        <Image
                          src={item.image}
                          width={64}
                          height={64}
                          alt={item.product}
                        />
                        <Flex gap={8} vertical>
                          <Text className={style.title} type="secondary">
                            {item.product}
                          </Text>
                          <Text className={style.wight} type="secondary">
                            {toPersianDigits(item.count)} عدد
                          </Text>
                        </Flex>
                      </Flex>
                      <Button onClick={()=>handleremoveProduct(item.product_slug)} type="text">
                      <TrashIcon />
                      </Button>
                    </Flex>
                    <Flex justify="space-between">
                      <Text className={style.price}>
                        {toPersianDigits(item.total_price_formatted)} تومان
                      </Text>
                      <Flex align="center" gap={15}>
                        <Button
                          onClick={() => handlePlusProduct(item.product_slug)}
                          className={style.quntitybutton}
                        >
                          <AddIcon width={34} height={34} border={false} />
                        </Button>
                        <Text>{toPersianDigits(item.count)}</Text>
                        <Button onClick={()=>handlemiunsProduct(item.product_slug)} className={style.quntitybutton}>
                          <MiunsIcon />
                        </Button>
                      </Flex>
                    </Flex>
                  </Flex>
                </div>
              ))
            )}
          </div>
        </div>
        <PurchaseInfo />
        ``
      </Flex>
      {selectedTab === "a" && <BottomPurchaseInfo />}
    </ConfigProvider>
  );
};

export default Cart;
