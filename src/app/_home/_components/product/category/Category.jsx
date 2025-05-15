import Title from "antd/es/typography/Title";
import style from "./category.module.scss";
import { Flex } from "antd";
import useResponsive from "@/lib/hocks/useResponsive";

const categories = [
    { image: "/image/IMG_3706 1.png", title: "آویز" },
    { image: "/image/image 5.png", title: "گردنبند" },
    { image: "/image/image 6.png", title: "انگشتر" },
    { image: "/image/image 7.png", title: "گردنبند" },
    { image: "/image/image 8.png", title: "نیم ست" },
    { image: "/image/image 10.png", title: "گوشواره" },
    { image: "/image/image 11.png", title: "زنجیر" },
    { image: "/image/golden gift white background.png", title: "گردنبند" },
];

const CategoryItem = ({ image, title }) => (
    <Flex vertical align="center" justify="space-between" className={style.categoryItem}>
        <img src={image} alt={title} className={style.categoryImage} />
        <div className={style.categoryTitle}>{title}</div>
    </Flex>
);

function Category() {
    const { isMobile, isTablet, isDesktop } = useResponsive();

    return (
        <>
            <Flex vertical className={style.categoryContainer}>
                <Title className={style.title} level={4}>دسته بندی محصولات</Title>
                <div className={style.categoryGrid}>
                    {isMobile &&(
                        categories.map((category, index) => (
                                    <CategoryItem key={index} {...category} />
                                ))
                    )}
                    {isTablet &&(
                        categories.map((category, index) => (
                                    <CategoryItem key={index} {...category} />
                                ))
                    )}
                    {isDesktop && (
                        <>
                            <div className={style.categoryCulomn}>
                                {categories.slice(0, 5).map((category, index) => (
                                    <CategoryItem key={index} {...category} />
                                ))}
                            </div>
                            <div className={style.categoryCulomn}>
                                {categories.slice(5).map((category, index) => (
                                    <CategoryItem key={index} {...category} />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </Flex>
        </>
    );
}

export default Category;
