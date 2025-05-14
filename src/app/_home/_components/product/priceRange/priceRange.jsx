import { Button, Flex } from "antd";
import Title from "antd/es/typography/Title";
import style from "./priceRange.module.scss"

 function PriceRange() {
  return (
   <>
   <Flex className={style.titleContainer}>
   <Title level={4}>بازه قیمتی</Title>
   </Flex>
   <Flex vertical className={style.priceRangeContainer}>

   <Flex>
    <Button className={style.range}>تا ۲ میلیون تومان</Button>
    <Button className={style.range}>تا ۵ میلیون تومان</Button>
    <Button className={style.range}>تا ۱۰ میلیون تومان</Button>
    <Button className={style.range}>بالای ۱۰ میلیون تومان</Button>
   </Flex>
   </Flex>
   </>
  );
}
export default PriceRange