import axiosInstance from "@/lib/services/axiosInstance";

export const sendOtp = async (phone) => {
  const res = await axiosInstance.post("/auth/send-otp", { phone });
  return res.data;
};

export const verifyOtp = async ({ phone, otp }) => {
  const res = await axiosInstance.post("/auth/verify-otp", {
    phone,
    otp,
  });
  return res.data;
};

