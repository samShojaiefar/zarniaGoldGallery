import { useEffect, useState } from "react";
import { Divider, Flex, Form, Input, Typography, Button, message } from "antd";
import CloseIcon from "@/app/(main)/(common)/_components/icon/CloseIcon";
import LeftArrowIcon from "../../(common)/_components/icon/leftArrowIcon";
import { toPersianDigits } from "@/lib/utils/toPersionNumber";
import style from "./auth.module.scss";
import useSWRMutation from "swr/mutation";
import { sendOtp, verifyOtp } from "../_hooks/auth";
import toast, { Toaster } from "react-hot-toast";

const { Text } = Typography;

function Auth({ onClose }) {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(120);
  const [resendEnabled, setResendEnabled] = useState(false);
  const [form] = Form.useForm();

  const { trigger: triggerSendOtp, isMutating } = useSWRMutation(
    "/auth/send-otp",
    (_, { arg }) => sendOtp(arg)
  );

  const { trigger: triggerVerifyOtp, isMutating: isVerifying } = useSWRMutation(
    "/auth/verify-otp",
    (_, { arg }) => verifyOtp(arg)
  );

  useEffect(() => {
    let interval;
    if (step === 2 && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setResendEnabled(true);
    }

    return () => clearInterval(interval);
  }, [step, timer]);

  const handlePhoneSubmit = async (values) => {
    try {
      await triggerSendOtp(values.phone);
      setPhone(values.phone);
      toast.success("کد تایید ارسال شد",
        {
          style:{
        fontSize:"1.5rem"
          }
        });
      setStep(2);
      setTimer(120);
      setResendEnabled(false);
    } catch (error) {
      toast.error("ارسال کد تایید با خطا مواجه شد",
        {
          style:{
        fontSize:"1.5rem"
          }
        });
    }
  };

  const handleOtpSubmit = async () => {
    try {
      const data = await triggerVerifyOtp({ phone, otp });
      const token = data.token;
      localStorage.setItem("access_token", token);
      toast.success("ورود موفق بود",
        {
          style:{
        fontSize:"1.5rem"
          }
        });
      onClose?.();
    } catch (error) {
      toast.error("کد وارد شده صحیح نیست",
        {
          style:{
        fontSize:"1.5rem"
          }
        });
    }
    window.location.reload();
  };

  const handleResendOtp = async () => {
    try {
      await triggerSendOtp(phone);
      toast.success("کد تایید مجدد ارسال شد",
        {
          style:{
        fontSize:"1.5rem"
          }
        });
      setTimer(120);
      setResendEnabled(false);
    } catch (error) {
      toast.error("ارسال مجدد کد با خطا مواجه شد",
        {
          style:{
        fontSize:"1.5rem"
          }
        }
      );
    }
  };

  return (
    <div className={style.overlay}>
      <Toaster/>
      <div className={style.modalContent}>
        <Flex justify="space-between" align="center">
          <Text className={style.title}>ورود / ثبت‌نام</Text>
          <CloseIcon onClick={onClose} width={24} height={24} />
        </Flex>

        <Divider />

        {step === 1 && (
          <Form
            layout="vertical"
            onFinish={handlePhoneSubmit}
            form={form}
            className={style.form}
          >
            <Flex vertical gap={116} style={{ height: "380px" }}>
              <Flex vertical gap={16}>
                <Text type="secondary" className={style.inputDescription}>
                  برای ورود یا عضویت، شماره موبایل خود را وارد کنید.
                </Text>
                <Form.Item
                  name="phone"
                  rules={[{ required: true, message: "شماره را وارد کنید" }]}
                >
                  <div className={style.inputContainer}>
                    <Text className={style.numberLabel} type="secondary">
                      شماره همراه
                    </Text>
                    <Input
                      value={phone}
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
                  type="primary"
                  className={style.button}
                  htmlType="submit"
                  block
                  loading={isMutating}
                >
                  ادامه
                </Button>
              </Form.Item>
            </Flex>
          </Form>
        )}

        {step === 2 && (
          <Form
            layout="vertical"
            className={style.form}
            onFinish={handleOtpSubmit}
          >
            <Flex vertical gap={20} style={{ height: "380px" }}>
              <Flex vertical gap={16}>
                <Flex
                  onClick={() => setStep(1)}
                  style={{ cursor: "pointer" }}
                  align="center"
                  gap={8}
                >
                  <LeftArrowIcon
                    color="black"
                    className={style.arrow}
                    width={24}
                    height={24}
                  />
                  <Text className={style.title}>اصلاح شماره همراه</Text>
                </Flex>

                <Text type="secondary" className={style.inputDescription}>
                  کد تایید ارسال شده به شماره {toPersianDigits(phone)} را وارد
                  کنید.
                </Text>

                <div className={style.otpInputsWrapper}>
                  {[0, 1, 2, 3].map((i) => (
                    <input
                      key={i}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      className={style.otpInput}
                      value={otp[i] || ""}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        const newOtp = otp.split("");
                        newOtp[i] = val;
                        const finalOtp = newOtp.join("").slice(0, 4);
                        setOtp(finalOtp);
                        if (val && i < 3) {
                          const nextInput = document.getElementById(
                            `otp-input-${i + 1}`
                          );
                          nextInput?.focus();
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Backspace") {
                          const newOtp = otp.split("");
                          if (otp[i]) {
                            newOtp[i] = "";
                            setOtp(newOtp.join(""));
                          } else if (i > 0) {
                            const prevInput = document.getElementById(
                              `otp-input-${i - 1}`
                            );
                            prevInput?.focus();
                            newOtp[i - 1] = "";
                            setOtp(newOtp.join(""));
                          }
                        }
                      }}
                      id={`otp-input-${i}`}
                    />
                  ))}
                </div>

                <div className={style.resendWrapper}>
                  {resendEnabled ? (
                    <Button
                      type="link"
                      onClick={handleResendOtp}
                      style={{ padding: 0 }}
                    >
                      ارسال مجدد کد
                    </Button>
                  ) : (
                    <Text type="secondary">
                      ارسال مجدد کد تا {toPersianDigits(Math.floor(timer / 60))}
                      :{toPersianDigits(String(timer % 60).padStart(2, "0"))}{" "}
                      دقیقه دیگر
                    </Text>
                  )}
                </div>
              </Flex>

              <Form.Item>
                <Button
                  type="primary"
                  className={style.button}
                  htmlType="submit"
                  block
                  loading={isVerifying}
                >
                  ادامه
                </Button>
              </Form.Item>
            </Flex>
          </Form>
        )}
      </div>
    </div>
  );
}

export default Auth;
