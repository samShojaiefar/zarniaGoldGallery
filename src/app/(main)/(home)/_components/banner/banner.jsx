import { Button, Flex, Typography } from "antd";
import Title from "antd/es/typography/Title";
import style from "./banner.module.scss";
import Image from "next/image";
import useResponsive from "@/lib/hooks/useResponsive";
const { Text } = Typography;
export default function Banner() {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  return (
    <div>
      <div className={style.banner}>
        <div className={style.bannerContent}>
          <Title className={style.bannerTitle} level={4}>
            قسطی پرداخت کن!{" "}
          </Title>
          <Flex align="center" gap={"large"}>
            <Image
              src="/image/snapPay.png"
              width={isDesktop ? 84 : 54}
              height={isDesktop ? 84 : 54}
              alt="Picture of the author"
            />
            <Text className={style.installmentText}>۴ قسط</Text>
          </Flex>
          <Button className={style.bannerButton}>فروشگاه</Button>
        </div>
      </div>
    </div>
  );
}
