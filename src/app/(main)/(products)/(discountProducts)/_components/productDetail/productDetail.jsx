"use client";
import FavoriteIcon from "@/app/(main)/(common)/_components/icon/favorite";
import { Breadcrumb, Flex } from "antd";
import Image from "next/image";
import style from "./productDetail.module.scss";
import Detail from "./components/detail/Detail";
import RelatedProducts from "./components/relatedProducts/RelatedProducts";
import BottomPurchaseInfo from "./components/bottomPurchaseInfo/BottomPurchaseInfo";
const ProductDetail = () => {
  return (
    <>
      <div className={style.productDetailContainer}>
        <div className={style.container}>
          <Breadcrumb>
            <Breadcrumb.Item>خانه</Breadcrumb.Item>
            <Breadcrumb.Item>انگشتر</Breadcrumb.Item>
            <Breadcrumb.Item>انگشتر طرح چشم</Breadcrumb.Item>
          </Breadcrumb>
          <div className={style.imageContainer}>
            <div className={style.imageWrapper}>
              <FavoriteIcon className={style.favorite} />
              <Image src={"/image/product.png"} width={344} height={344} />
            </div>
            <div className={style.thumbnailContainer}>
              <Image
                className={style.thumbnail}
                src={"/image/product.png"}
                width={108}
                height={108}
              />
              <Image
                className={style.thumbnail}
                src={"/image/product.png"}
                width={108}
                height={108}
              />
              <Image
                className={style.thumbnail}
                src={"/image/product.png"}
                width={108}
                height={108}
              />
            </div>
          </div>
        </div>
        <Detail />  
      </div>
      <RelatedProducts />
      <BottomPurchaseInfo />
    </>
  );
};
export default ProductDetail;
