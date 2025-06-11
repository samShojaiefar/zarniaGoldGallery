import { Button, Flex, Typography } from "antd";
import Title from "antd/es/typography/Title";
import style from "./banner.module.scss";
import Image from "next/image";
import useResponsive from "@/lib/hooks/useResponsive";
import CarIcon from "@/app/(main)/(common)/_components/icon/CarIcon";
import SupportIcon from "@/app/(main)/(common)/_components/icon/SupportIcon";
import GiftIcon from "@/app/(main)/(common)/_components/icon/GiftIcon";
import OrginalIcon from "@/app/(main)/(common)/_components/icon/OrginalIcon";
const { Text } = Typography;
export default function Banner() {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  return (
    <div>
      <div className={style.banner}>
        <div className={style.bannerContent}>
          <Title className={style.bannerTitle} level={5}>
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
      <div className={style.wrapper}>
       <Flex align="center" gap={16}>
        <CarIcon/>
        <Flex vertical>
          <Title level={5}>تحویل سریع</Title>
          <Text type="secondary" className={style.secondaryText}>سریع ترین زمان تحویل</Text>
        </Flex>
       </Flex>
       <Flex align="center" gap={16}>
        <SupportIcon/>
        <Flex vertical>
          <Title level={5}>پشتیبانی ۲۴ ساعته</Title>
          <Text type="secondary" className={style.secondaryText}>به صورت آنلاین و تلفنی</Text>
        </Flex>
       </Flex>
       <Flex align="center" gap={16}>
        <OrginalIcon/>
        <Flex vertical>
          <Title level={5}>ضمانت اصالت کالا</Title>
          <Text type="secondary" className={style.secondaryText}>۷ روز ضمانت بازگشت</Text>
        </Flex>
       </Flex>
       <Flex align="center" gap={16}>
        <GiftIcon/>
        <Flex vertical>
          <Title level={5}>بسته بندی شکیل</Title>
          <Text type="secondary" className={style.secondaryText}>مناسب مشکل پسندان</Text>
        </Flex>
       </Flex>
      </div>
    </div>
  );
}
