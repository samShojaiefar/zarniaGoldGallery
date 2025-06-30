import Title from "antd/es/typography/Title";
import style from "./category.module.scss";
import { Flex } from "antd";
import useResponsive from "@/lib/hooks/useResponsive";
import { useRouter } from "next/navigation";
import { useGetCategories } from "@/app/(main)/(products)/(products)/_hooks/api/categoryApi";

function Category() {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const router = useRouter();
  const { isLoading, data } = useGetCategories();

  const handleClick = (id) => {
    const params = new URLSearchParams();
    params.append("category_ids[1]", (id));
    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className={style.categoryContainer}>
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
        {!isLoading &&
          data?.data?.map((category) => (
            <Flex
              key={category.id}
              align="center"
              vertical
              justify="center"
              className={style.categoryItem}
              onClick={() => handleClick(category.id)}
              style={{ cursor: "pointer" }}
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
          ))}
      </Flex>
    </div>
  );
}

export default Category;
