import axiosInstance from "@/lib/services/axiosInstance";
import { API_ENDPOINTS } from "@/lib/services/endpoints";
import useSwr from "swr";
const fetchProducts = async () => {
  try {
    const x =await axiosInstance(API_ENDPOINTS.GET_PRODUCTS_LIST);
    console.log(x);
    
  } catch (error) {
    
  }
};
export const useGetProducts = () => {
  return useSwr(API_ENDPOINTS.GET_PRODUCTS_LIST, fetchProducts);
};
