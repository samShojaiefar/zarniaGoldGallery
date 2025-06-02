import { useState } from "react";
import {
  Divider,
  Flex,
  Form,
  Input,
  Modal,
  Typography,
  Button,
  message,
} from "antd";
import CloseIcon from "@/app/(main)/(common)/_components/icon/CloseIcon";
import style from "./auth.module.scss";
import LeftArrowIcon from "../../(common)/_components/icon/leftArrowIcon";

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
    <Modal
      className={style.container}
      open={true}
      footer={null}
      closable={false}
      width={380}
    >
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
                    bordered={false}
                    className={style.input}
                    maxLength={11}
                  />
                </div>
              </Form.Item>
            </Flex>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                ادامه
              </Button>
            </Form.Item>
          </Form>
        </>
      )}

      {step === 2 && (
        <>
          <Form layout="vertical" className={style.form}>
            <Flex vertical gap={16}>
              <Flex>
                 <LeftArrowIcon color="black" className={style.arrow} width={24} height={24}/>
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
            <Button className={style.button} type="link" block onClick={() => setStep(1)}>
              ادامه
            </Button>
          </Form>
        </>
      )}
    </Modal>
  );
}

export default Auth;
