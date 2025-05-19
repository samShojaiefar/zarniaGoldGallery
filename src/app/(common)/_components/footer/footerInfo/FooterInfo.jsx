'use client';
import { Flex, Typography } from "antd";
import Logo from "../../icon/logo";
import style from "./footerInfo.module.scss";
import Image from "next/image";
import LocaitionIcon from "../../icon/locaition";
import PhoneIcon from "../../icon/phone";
import ENamad from "../../icon/E.Namad";
import InstagramIcon from "../../icon/Instagram";
import TelegramIcon from "../../icon/Telegram";
import WhatsappIcon from "../../icon/Whatsapp";
const { Text } = Typography;
export default function FooterInfo() {
  return (
    <>
      <Flex align="center" justify="center" className={style.footerContainer}>
        <Flex vertical align="center" justify="center" className={style.footer}>
          <div>
            <Image src={"/image/footer-logo.png"} width={156} height={32} />
          </div>
          <div className={style.descraiption}>
            ما در گالری زرنیا به دنبال ایجاد یک تجربه خرید لذت‌بخش و خاطره‌انگیز
            برای شما هستیم.همچنین، با ارائه ضمانت اصالت و کیفیت، اطمینان خاطر
            شما را فراهم می‌کنیم.
          </div>
          <div className={style.contactContainer}>
            <Flex align="start" style={{ width: "100%" }} gap={"16px"} vertical>
              <Flex
                align="center"
                className={style.locaitionContainer}
                gap={"8px"}
              >
                <LocaitionIcon width={"24px"} height={"24px"} />
                <Flex vertical>
                  <Text className={style.locaition}>
                    تهران، صادقیه ، پاساژ زرناب | شنبه تا پنجشنبه |{" "}
                  </Text>
                  <Text className={style.locaition}>ساعات : ۱۱ -۲۱</Text>
                </Flex>
              </Flex>
              <Flex gap={"8px"} align="center">
                <PhoneIcon width={"24px"} height={"24px"} />
                <Flex vertical>
                  <Text className={style.phoneNumber}>۶۴۸۸ ۳۱۰ ۰۹۱۹</Text>
                  <Text className={style.phoneNumber}>۷۰۵۳ ۷۱۲ ۰۹۱۲ </Text>
                  <Text className={style.phoneNumber}>۲۰۷۴ ۱۴ ۴۶ - ۰۲۱ </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex justify="center" className={style.eNamadContainer}>
              <ENamad />
            </Flex>
          </div>
          <Flex
            justify="center"
            align="center"
            className={style.socialContainer}
          >
            <WhatsappIcon />
            <TelegramIcon />
            <InstagramIcon />
          </Flex>
          <div className={style.copyRightContainer}>
            <Text className={style.copyRight}>
              تمام حقوق برای گالری زرنیا محفوظ است.
            </Text>
          </div>
        </Flex>
      </Flex>
    </>
  );
}
