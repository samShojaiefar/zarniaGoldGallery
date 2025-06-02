import axiosInstance from "@/lib/services/axiosInstance";
import { API_ENDPOINTS } from "@/lib/services/endpoints";
import useSwr from "swr";

const fetchProducts = async () => {
  try {
    const response = await axiosInstance.get(API_ENDPOINTS.GET_PRODUCTS_LIST);
    return response.data; // return only data
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error; // Let SWR handle the error
  }
};

export const useGetProducts = () => {
  return useSwr(API_ENDPOINTS.GET_PRODUCTS_LIST, fetchProducts);
};