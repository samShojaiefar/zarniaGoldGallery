// app/(main)/profile/page.jsx

"use client";
import { useState, useEffect } from "react";
import style from "./profile.module.scss";
import { Button, Divider, Flex, Input, Modal, Typography } from "antd";
import BoxIcon from "@/app/(main)/(common)/_components/icon/BoxIcon";
import AddressIcon from "@/app/(main)/(common)/_components/icon/AddressIcon";
import InvoiceIcon from "@/app/(main)/(common)/_components/icon/InvoiceIcon";
import LeftArrowIcon from "@/app/(main)/(common)/_components/icon/leftArrowIcon";
import ProfileIcon from "@/app/(main)/(common)/_components/icon/profileIcon";
import LogoutIcon from "@/app/(main)/(common)/_components/icon/LogoutIcon";
import CopyIcon from "@/app/(main)/(common)/_components/icon/CopyIcon";
import DownloadIcon from "@/app/(main)/(common)/_components/icon/DownloadIcon";
import EditIcon from "@/app/(main)/(common)/_components/icon/EditIcon";
import Title from "antd/es/typography/Title";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import AddIcon from "../../(common)/_components/icon/AddIcon";

const { Text } = Typography;
const options = [
  { value: "dashboard", label: "پیشخوان" },
  { value: "gift", label: "گیفت" },
  { value: "orders", label: "سفارش‌ها" },
  { value: "invoices", label: "فاکتور‌ها" },
  { value: "account", label: "جزئیات حساب" },
];
const code = "asd-135132";

const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(code);
    toast.success("کد با موفقیت کپی شد", {
      style: {
        fontSize: "1.5rem",
      },
    });
  } catch (err) {
    toast.error("خطا در کپی کردن کد", {
      style: {
        fontSize: "1.5rem",
      },
    });
  }
};

export default function ProfilePage() {
  const router = useRouter();
  useEffect(() => {
    const isLoggedIn = !!localStorage.getItem("access_token");
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [router]);
  const [selected, setSelected] = useState("dashboard");
const UserInfoSection = ({ label, value }) => (
  <Flex align="center" justify="space-between" className={style.fieldRow}>
    <Flex vertical>
      <Text type="secondary" className={style.label}>
        {label}
      </Text>
      <Input className={style.input} value={value}/>
    </Flex>
    <EditIcon className={style.editIcon} />
  </Flex>
);

const AddressCard = ({ fullName, phone, address }) => (
  <div className={style.addressCard}>
    <Text>{fullName}</Text>
    <Text>{phone}</Text>
    <Text>{address}</Text>
    <Button className={style.editAddressBtn}>تغییر</Button>
  </div>
);

  const renderContent = () => {
    switch (selected) {
      case "gift":
        return (
          <Flex vertical gap={8}>
            <div className={style.giftCard}>
              <Flex gap={16} justify="space-between">
                <Flex style={{ width: "90%" }} justify="space-between">
                  <Flex gap={16} vertical>
                    <Text type="secondary" className={style.secondaryText}>
                      کد
                    </Text>
                    <Text type="secondary" className={style.secondaryText}>
                      میزان تخفیف
                    </Text>
                    <Text type="secondary" className={style.secondaryText}>
                      انقضا
                    </Text>
                  </Flex>
                  <Flex gap={16} vertical align="end">
                    <Text>{code}</Text>
                    <Text>٪۲۰</Text>
                    <Text>۱۴۰۴/۰۲/۲۵</Text>
                  </Flex>
                </Flex>
                <Button
                  type="text"
                  className={style.copyButton}
                  onClick={handleCopy}
                >
                  <CopyIcon />
                </Button>
              </Flex>
            </div>
            <div className={style.giftCard}>
              <Flex gap={16} justify="space-between">
                <Flex style={{ width: "90%" }} justify="space-between">
                  <Flex gap={16} vertical>
                    <Text type="secondary" className={style.secondaryText}>
                      کد
                    </Text>
                    <Text type="secondary" className={style.secondaryText}>
                      میزان تخفیف
                    </Text>
                    <Text type="secondary" className={style.secondaryText}>
                      انقضا
                    </Text>
                  </Flex>
                  <Flex gap={16} vertical align="end">
                    <Text>{code}</Text>
                    <Text>٪۲۰</Text>
                    <Text>۱۴۰۴/۰۲/۲۵</Text>
                  </Flex>
                </Flex>
                <Button
                  type="text"
                  className={style.copyButton}
                  onClick={handleCopy}
                >
                  <CopyIcon />
                </Button>
              </Flex>
            </div>
          </Flex>
        );
      case "orders":
        return (
          <Flex vertical gap={8}>
            <div className={style.orderCard}>
              <Flex justify="space-between">
                <Text type="secondary">وضعیت</Text>

                <Text>ارسال شده</Text>
              </Flex>
              <Divider />
              <Flex justify="space-between">
                <Flex gap={8} vertical>
                  <Text type="secondary">شماره سفارش</Text>
                  <Text type="secondary">تاریخ سفارش</Text>
                  <Text type="secondary">زمان دریافت</Text>
                  <Text type="secondary">مبلغ کل</Text>
                </Flex>
                <Flex gap={8} vertical>
                  <Text>#234234-23452</Text>
                  <Text>۱۴۰۴/۰۲/۱۰</Text>
                  <Text>۱۴۰۴/۰۲/۱۲</Text>
                  <Text>۱۲,۰۰۰,۰۰۰ تومان</Text>
                </Flex>
              </Flex>
            </div>
          </Flex>
        );
      case "invoices":
        return (
          <Flex vertical gap={8}>
            <div className={style.invoiceCard}>
              <Flex style={{ width: "100%" }} justify="space-between">
                <Flex gap={8} vertical>
                  <Text type="secondary">شماره فاکتور</Text>
                  <Text type="secondary">تاریخ سفارش</Text>
                  <Text type="secondary">مبلغ کل</Text>
                </Flex>
                <Flex gap={8} vertical>
                  <Text>#234234-23452</Text>
                  <Text>۱۴۰۴/۰۲/۱۰</Text>
                  <Text>۱۲,۰۰۰,۰۰۰ تومان</Text>
                </Flex>
              </Flex>
              <Button className={style.downloadButton} icon={<DownloadIcon />}>
                دانلود
              </Button>
            </div>
          </Flex>
        );
      case "account":
        return (
<div className={style.profileContainer}>
      <UserInfoSection label="نام" />
      <UserInfoSection label="نام خانوادگی"/>
      <UserInfoSection label="شماره همراه" />
      <UserInfoSection label="ایمیل" />
          <div className={style.addressSeccision}>
      <Text className={style.addNewAddress}>
        <AddIcon border/> افزودن آدرس جدید
      </Text>
      <div className={style.addressCard}>
     <div className={style.addressCard}>
      <Flex style={{whiteSpace:"nowrap"}} vertical>
        <Text>نام تحویل گیرنده</Text>
        <Text>شماره تحویل گیرنده</Text>
        <Text>آدرس</Text>
      </Flex>
      <Flex vertical>
        <Text>اسم</Text>
        <Text>09123456789</Text>
        <Text>تهران، تهران، بلوار صبا، خ موسیوند، پلاک ۲۳،‌واحد ۸</Text>
      </Flex>
      </div>
      </div>
    </div>
    </div>
        );
      default:
        return (
          <>
            <Flex className={style.ListItem} justify="space-between">
              <Flex gap={4}>
                <BoxIcon width={24} height={24} />
                <Text>سفارش‌های من</Text>
              </Flex>
              <LeftArrowIcon color="black" />
            </Flex>

            <Flex className={style.ListItem} justify="space-between">
              <Flex gap={4}>
                <InvoiceIcon />
                <Text>فاکتور‌ها</Text>
              </Flex>
              <LeftArrowIcon color="black" />
            </Flex>

            <Flex className={style.ListItem} justify="space-between">
              <Flex gap={4}>
                <AddressIcon />
                <Text>آدرس‌های من</Text>
              </Flex>
              <LeftArrowIcon color="black" />
            </Flex>

            <Flex className={style.ListItem} justify="space-between">
              <Flex gap={4}>
                <ProfileIcon color="black" />
                <Text>جزئیات حساب</Text>
              </Flex>
              <LeftArrowIcon color="black" />
            </Flex>
          </>
        );
    }
  };

  const handleLogoutClick = () => {
    Modal.confirm({
      title: "آیا مطمئن هستید؟",
      content: "آیا می‌خواهید از حساب خود خارج شوید؟",
      okText: "بله، خارج شو",
      cancelText: "انصراف",
      centered: true,
      onOk: () => {
        localStorage.removeItem("access_token");
        toast.success("با موفقیت خارج شدید", {
          style: { fontSize: "1.5rem" },
        });
        router.push("/");
        window.location.reload();
      },
    });
  };

  return (
    <div className={style.profileContainer}>
      <Toaster />
      <Title level={4} className={style.titleContainer}>
        حساب کاربری
      </Title>

      <div className={style.radioGroupWrapper}>
        {options.map((option) => (
          <label
            key={option.value}
            className={`${style.radioItem} ${
              selected === option.value ? style.active : ""
            }`}
          >
            <input
              type="radio"
              name="profile"
              value={option.value}
              checked={selected === option.value}
              onChange={() => setSelected(option.value)}
            />
            <Text className={style.TabTitle}>{option.label}</Text>
          </label>
        ))}
      </div>

      <Flex>
        <div className={style.tabContainer}>
          {options.map((option) => (
            <label
              key={option.value}
              className={`${style.radioItem} ${
                selected === option.value ? style.active : ""
              }`}
            >
              <input
                type="radio"
                name="profile"
                value={option.value}
                checked={selected === option.value}
                onChange={() => setSelected(option.value)}
              />
              <Text className={style.tabTitle}>{option.label}</Text>
            </label>
          ))}

          <button className={style.logoutButton} onClick={handleLogoutClick}>
            <LogoutIcon />
            <Text className={style.logoutText}>خروج از حساب</Text>
          </button>
        </div>

        <div className={style.sectionList}>{renderContent()}</div>
      </Flex>
    </div>
  );
}
