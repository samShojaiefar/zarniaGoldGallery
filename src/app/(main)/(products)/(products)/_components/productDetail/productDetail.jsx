"use client";

import { useParams } from "next/navigation";
import useSWR from "swr";
import axiosInstance from "@/lib/services/axiosInstance";
import { Breadcrumb, Spin } from "antd";
import Image from "next/image";
import style from "./productDetail.module.scss";
import FavoriteIcon from "@/app/(main)/(common)/_components/icon/favorite";
import Detail from "./detail/Detail";
import RelatedProducts from "./relatedProducts/RelatedProducts";
import BottomPurchaseInfo from "./bottomPurchaseInfo/BottomPurchaseInfo";
import { useState } from "react";
import { useGetProductDetail } from "../../_hooks/api/productsApi";
import { addToFavorite } from "@/lib/api/cartApi";

const ProductDetail = () => {
  const params = useParams();
  const slug = params?.slug;
  const { data, isLoading, error } = useGetProductDetail(slug);
  console.log("data: ", data, "error:", error, "loading:", isLoading);
  if (isLoading) return <Spin tip="در حال بارگذاری..." />;
  if (error) return <div>خطا در دریافت اطلاعات محصول</div>;
  if (!data) return null;

  return (
    <>
      <div className={style.productDetailContainer}>
        <div className={style.container}>
          <Breadcrumb>
            <Breadcrumb.Item>خانه</Breadcrumb.Item>
            <Breadcrumb.Item>{"دسته‌بندی"}</Breadcrumb.Item>
            <Breadcrumb.Item>{data.data.name}</Breadcrumb.Item>
          </Breadcrumb>

          <div className={style.imageContainer}>
            <div className={style.imageWrapper}>
              <FavoriteIcon className={style.favorite} />
              <Image
                src={data.data.image}
                width={ 490}
                height={490}
                alt={data.data.name}
                style={{borderRadius:"16px"}}
              />
            </div>

            <div className={style.thumbnailContainer}>
              {data.data.gallery.map((img, idx) => (
                <Image
                  key={idx}
                  className={style.thumbnail}
                  src={img}
                  width={108}
                  height={108}
                  alt={`thumbnail-${idx}`}
                />
              ))}
            </div>
          </div>
        </div>

        <Detail product={data.data} />
      </div>

      <RelatedProducts />
      <BottomPurchaseInfo product={data.data} />
    </>
  );
};

export default ProductDetail;
