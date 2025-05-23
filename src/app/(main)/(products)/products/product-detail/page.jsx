"use client"
import FavoriteIcon from "@/app/(main)/(common)/_components/icon/favorite"
import { Breadcrumb, Flex } from "antd"
import Image from "next/image"
import style from "./productDetail.module.scss"
const ProductDetail =()=>{
    return(
        <div className={style.productDetailContainer}>
                <Breadcrumb>
                  <Breadcrumb.Item>خانه</Breadcrumb.Item>
                  <Breadcrumb.Item>انگشتر</Breadcrumb.Item>
                  <Breadcrumb.Item>انگشتر طرح چشم</Breadcrumb.Item>
                </Breadcrumb>
                <div className={style.imageContainer}>
                    <FavoriteIcon className={style.favorite}/>
                    <Image src={"/image/product.png"} width={344} height={344}/>
                </div>
                <Flex align="center" gap={8}>
                    <Image className={style.thumbnail} src={"/image/product.png"} width={108} height={108}/>
                    <Image className={style.thumbnail} src={"/image/product.png"} width={108} height={108}/>
                    <Image className={style.thumbnail} src={"/image/product.png"} width={108} height={108}/>1
                </Flex>
        </div>

    )
}
export default ProductDetail