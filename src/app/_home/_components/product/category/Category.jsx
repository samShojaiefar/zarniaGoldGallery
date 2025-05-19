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

function Category() {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  return (
    <>
      <Flex vertical className={style.categoryContainer}>
        <Title className={style.title} level={4}>
          دسته بندی محصولات
        </Title>
        <Flex
          gap={8}
          align="center"
          justify="center"
          wrap={true}
          className={style.itemContainer}
        >
          {categories.map((category) => {
            return (
              <Flex
                align="center"
                vertical
                justify="center"
                className={style.categoryItem}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className={style.categoryImage}
                />
                <Title level={4} className={style.categoryTitle}>
                  {category.title}
                </Title>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </>
  );
}

export default Category;
