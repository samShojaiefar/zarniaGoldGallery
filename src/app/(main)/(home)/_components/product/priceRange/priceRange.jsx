import { Button, Flex } from "antd";
import Title from "antd/es/typography/Title";
import style from "./priceRange.module.scss"
import { useRouter } from "next/navigation";

 function PriceRange() {

  const router = useRouter();
  return (
   <>
   <div className={style.titleContainer}>
   <Title level={4}>بازه قیمتی</Title>
   </div>
   <div  className={style.priceRangeContainer}>
    <Button className={style.range}  onClick={() => router.push("/products?max_price=2000000")} >تا ۲ میلیون تومان</Button>
    <Button className={style.range} onClick={() => router.push("/products?max_price=5000000")} >تا ۵ میلیون تومان</Button>
    <Button className={style.range} onClick={() => router.push("/products?max_price=10000000")} >تا ۱۰ میلیون تومان</Button>
    <Button className={style.range} onClick={() => router.push("/products?min_price=10000000")} >بالای ۱۰ میلیون تومان</Button>
   </div>
   </>
  );
}
export default PriceRange