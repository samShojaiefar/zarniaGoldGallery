"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button, Divider, Flex, Input, Modal, Typography, Spin } from "antd";
import toast, { Toaster } from "react-hot-toast";
import style from "./profile.module.scss";

import BoxIcon from "@/app/(main)/(common)/_components/icon/BoxIcon";
import AddressIcon from "@/app/(main)/(common)/_components/icon/AddressIcon";
import InvoiceIcon from "@/app/(main)/(common)/_components/icon/InvoiceIcon";
import LeftArrowIcon from "@/app/(main)/(common)/_components/icon/leftArrowIcon";
import ProfileIcon from "@/app/(main)/(common)/_components/icon/profileIcon";
import LogoutIcon from "@/app/(main)/(common)/_components/icon/LogoutIcon";
import CopyIcon from "@/app/(main)/(common)/_components/icon/CopyIcon";
import DownloadIcon from "@/app/(main)/(common)/_components/icon/DownloadIcon";
import EditIcon from "@/app/(main)/(common)/_components/icon/EditIcon";
import AddIcon from "../../(common)/_components/icon/AddIcon";

const { Text, Title } = Typography;

const options = [
  { value: "dashboard", label: "پیشخوان" },
  { value: "gift", label: "گیفت" },
  { value: "orders", label: "سفارش‌ها" },
  { value: "invoices", label: "فاکتور‌ها" },
  { value: "account", label: "جزئیات حساب" },
];

const code = "asd-135132";

const GiftCard = ({ code, discount, expiry, onCopy }) => (
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
          <Text>{discount}</Text>
          <Text>{expiry}</Text>
        </Flex>
      </Flex>
      <Button
        type="text"
        className={style.copyButton}
        onClick={() => onCopy(code)}
      >
        <CopyIcon />
      </Button>
    </Flex>
  </div>
);

const OrderCard = () => (
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
);

const InvoiceCard = () => (
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
);

const UserInfoField = ({ label, value = "", readOnly = true, onChange }) => (
  <Flex align="center" justify="space-between" className={style.fieldRow}>
    <Flex vertical>
      <Text type="secondary" className={style.label}>
        {label}
      </Text>
      <Input
        className={style.input}
        value={readOnly ? (value?.trim() ? value : "-") : value}
        readOnly={readOnly}
        onChange={onChange}
      />
    </Flex>
  </Flex>
);

const AddressCard = () => (
  <div className={style.addressCard}>
    <Flex justify="space-between">
      <Text type="secondary">نام گیرنده</Text>
      <Text>سام شجاعی فر</Text>
    </Flex>
    <Flex justify="space-between">
      <Text type="secondary">شماره تحویل گیرنده</Text>
      <Text>09123456789</Text>
    </Flex>
    <Flex justify="space-between">
      <Text type="secondary">آدرس</Text>
      <Text className={style.address}>
        تهران، تهران، بلوار صبا، خ موسیوند، پلاک ۲۳،‌واحد ۸
      </Text>
    </Flex>
    <Button className={style.editAddressBtn}>تغییر</Button>
  </div>
);

export default function ProfilePage() {
  const [selected, setSelected] = useState("dashboard");
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    last_name: "",
    phone: "",
    email: "",
  });

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      router.push("/");
      return;
    }

    const fetchProfile = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://api.mclp.ir/api/v1/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) throw new Error("Failed to fetch profile");
        const data = await res.json();

        setUserData(data.data || {});
        setFormValues({
          name: String(data.data?.name ?? ""),
          last_name: String(data.data?.last_name ?? ""),
          phone: String(data.data?.phone ?? ""),
          email: String(data.data?.email ?? ""),
        });
      } catch (err) {
        toast.error("خطا در دریافت اطلاعات کاربر", {
          style: { fontSize: "1.5rem" },
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("کد با موفقیت کپی شد", { style: { fontSize: "1.5rem" } });
    } catch {
      toast.error("خطا در کپی کردن کد", { style: { fontSize: "1.5rem" } });
    }
  };

  const handleLogout = () => {
    Modal.confirm({
      title: "آیا مطمئن هستید؟",
      content: "آیا می‌خواهید از حساب خود خارج شوید؟",
      okText: "بله، خارج شو",
      cancelText: "انصراف",
      centered: true,
      onOk: () => {
        localStorage.removeItem("access_token");
        toast.success("با موفقیت خارج شدید", { style: { fontSize: "1.5rem" } });
        router.push("/");
        window.location.reload();
      },
    });
  };

  const handleEditClick = () => setEditMode(true);

  const handleInputChange = (field, e) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: String(e.target.value ?? ""),
    }));
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("access_token");

      if (!token) {
        toast.error("وارد حساب خود شوید", { style: { fontSize: "1.5rem" } });
        setLoading(false);
        return;
      }

      // Validation
      if (!formValues.name.trim()) {
        toast.error("نام و نام خانوادگی الزامی است", {
          style: { fontSize: "1.5rem" },
        });
        setLoading(false);
        return;
      }

      if (formValues.email.trim() !== "") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formValues.email.trim())) {
          toast.error("ایمیل وارد شده معتبر نیست", {
            style: { fontSize: "1.5rem" },
          });
          setLoading(false);
          return;
        }
      }

      // آماده‌سازی داده‌ها
      const body = {
        name: formValues.name.trim(),
      };
      if (formValues.phone.trim() !== "") {
        body.phone = formValues.phone.trim();
      }
      if (formValues.email.trim() !== "") {
        body.email = formValues.email.trim();
      }
      if (formValues.phone.trim() !== "") {
        body.phone = formValues.phone.trim();
      }

      // ارسال به سرور
      const res = await fetch("https://api.mclp.ir/api/v1/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("Update failed");

      const data = await res.json();
      const updatedData = data.data || {};

      setUserData(updatedData);
      setFormValues({
        name: updatedData.name ?? "",
        last_name: updatedData.last_name ?? "",
        phone: updatedData.phone ?? "",
        email: updatedData.email ?? "",
      });

      toast.success("اطلاعات شما با موفقیت ثبت شد", {
        style: { fontSize: "1.5rem" },
      });
      setEditMode(false);
    } catch (error) {
      console.error(error);
      toast.error("خطا در ثبت اطلاعات", { style: { fontSize: "1.5rem" } });
    } finally {
      setLoading(false);
      // window.location.reload();
    }
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className={style.loadingContainer}>
          <Spin size="large" />
        </div>
      );
    }

    switch (selected) {
      case "gift":
        return (
          <Flex vertical gap={8}>
            {[1, 2].map((_, i) => (
              <GiftCard
                key={i}
                code={code}
                discount="٪۲۰"
                expiry="۱۴۰۴/۰۲/۲۵"
                onCopy={handleCopy}
              />
            ))}
          </Flex>
        );
      case "orders":
        return (
          <Flex vertical gap={8}>
            <OrderCard />
          </Flex>
        );
      case "invoices":
        return (
          <Flex vertical gap={8}>
            <InvoiceCard />
          </Flex>
        );
      case "account":
        return (
          <div className={style.profilecontainer}>
            <div className={style.infoContainer}>
              <UserInfoField
                label="نام"
                value={formValues.name}
                readOnly={!editMode}
                onChange={(e) => handleInputChange("name", e)}
              />
              <UserInfoField
                label="نام خانوادگی"
                value={formValues.last_name}
                readOnly={!editMode}
                onChange={(e) => handleInputChange("last_name", e)}
              />
              <UserInfoField
                label="شماره همراه"
                value={formValues.phone}
                readOnly={!editMode}
                onChange={(e) => handleInputChange("phone", e)}
              />
              <UserInfoField
                label="ایمیل"
                value={formValues.email}
                readOnly={!editMode}
                onChange={(e) => handleInputChange("email", e)}
              />

              {!editMode && (
                <Button
                  type="text"
                  icon={<EditIcon />}
                  onClick={handleEditClick}
                  style={{ marginTop: 12 }}
                >
                  ویرایش
                </Button>
              )}

              {editMode && (
                <Button
                  type="primary"
                  onClick={handleSave}
                  loading={loading}
                  style={{ marginTop: 12 }}
                >
                  ذخیره تغییرات
                </Button>
              )}
            </div>
            <div className={style.addressSection}>
              <Title level={5} className={style.addNewAddress}>
                <AddIcon border /> افزودن آدرس جدید
              </Title>
              <AddressCard />
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

          <button className={style.logoutButton} onClick={handleLogout}>
            <LogoutIcon />
            <Text className={style.logoutText}>خروج از حساب</Text>
          </button>
        </div>

        <div className={style.sectionList}>{renderContent()}</div>
      </Flex>
    </div>
  );
}
