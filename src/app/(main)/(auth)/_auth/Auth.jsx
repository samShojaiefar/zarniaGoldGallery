import { useState } from "react";
import {
  Divider,
  Flex,
  Form,
  Input,
  Typography,
  Button,
  message,
} from "antd";
import CloseIcon from "@/app/(main)/(common)/_components/icon/CloseIcon";
import style from "./auth.module.scss";
import LeftArrowIcon from "../../(common)/_components/icon/leftArrowIcon";
import { toPersianDigits } from "@/lib/utils/toPersionNumber";

const { Text } = Typography;

function Auth({ onClose }) {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [form] = Form.useForm();

  const handlePhoneSubmit = (values) => {
    setPhone(values.phone);
    setTimeout(() => {
      message.success("کد تایید ارسال شد");
      setStep(2);
    }, 500);
  };

  return (
    <div className={style.overlay}>
      <div className={style.modalContent}>
        <Flex justify="space-between" align="center">
          <Text className={style.title}>ورود / ثبت‌نام</Text>
          <CloseIcon onClick={onClose} width={24} height={24} />
        </Flex>

        <Divider />
        {step === 1 && (
          <>
            <Form
              layout="vertical"
              onFinish={handlePhoneSubmit}
              form={form}
              className={style.form}
            >
              <Flex vertical gap={116} style={{height:"380px"}}> 
              <Flex vertical gap={16}>
                <Text type="secondary" className={style.inputDescription}>
                  برای ورود یا عضویت، شماره موبایل خود را وارد کنید.
                </Text>
                <Form.Item name="phone" maxLength={1}>
                  <div className={style.inputContainer}>
                    <Text className={style.numberLabel} type="secondary">
                      شماره همراه
                    </Text>
                    <Input
                      value={toPersianDigits(phone)}
                      onChange={(e) => {
                        const raw = e.target.value
                          .replace(/[^۰-۹0-9]/g, "")
                          .replace(/[٠-٩]/g, (d) =>
                            String("٠١٢٣٤٥٦٧٨٩".indexOf(d))
                          );
                        setPhone(raw.slice(0, 11));
                        form.setFieldValue("phone", raw.slice(0, 11));
                      }}
                      bordered={false}
                      className={style.input}
                      maxLength={11}
                    />
                  </div>
                </Form.Item>
              </Flex>
              <Form.Item>
                <Button
                  type="button"
                  className={style.button}
                  htmlType="submit"
                  block
                >
                  ادامه
                </Button>
              </Form.Item>
              </Flex>
            </Form>
          </>
        )}

        {step === 2 && (
          <>
            <Form layout="vertical" className={style.form}>
              <Flex vertical gap={48} style={{height:"380px"}}>
              <Flex vertical gap={16}>
                <Flex onClick={() => setStep(1)}>
                  <LeftArrowIcon
                    color="black"
                    className={style.arrow}
                    width={24}
                    height={24}
                  />
                  <Text className={style.title}>اصلاح شماره همراه</Text>
                </Flex>
                <Text type="secondary" className={style.inputDescription}>
                  کد تایید ارسال شده به شماره {phone} را وارد کنید.
                </Text>
                <Form.Item name="otp">
                  <Flex gap={8}>
                    <div className={style.otp}></div>
                    <div className={style.otp}></div>
                    <div className={style.otp}></div>
                    <div className={style.otp}></div>
                  </Flex>
                </Form.Item>
              </Flex>
              <Button className={style.button} type="link" block>
                ادامه
              </Button>
              </Flex>
            </Form>
          </>
        )}
      </div>
    </div>
  );
}

export default Auth;
