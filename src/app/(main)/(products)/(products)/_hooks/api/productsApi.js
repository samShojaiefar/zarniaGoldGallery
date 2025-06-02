import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/services/axiosInstance";
import { API_ENDPOINTS } from "@/lib/services/endpoints";

const fetchProducts = async (page = 1) => {
  try {
    const response = await axiosInstance.get(API_ENDPOINTS.GET_PRODUCTS_LIST);
    return response.data; // return only data
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error; // Let SWR handle the error
  }
};

export const useGetProducts = (page = 1) => {
  return useQuery({
    queryKey: [API_ENDPOINTS.GET_PRODUCTS_LIST, page], // Cache per page
    queryFn: () => fetchProducts(page),
    keepPreviousData: true, // Smooth pagination transitions
  });
};
export const useGetProductsDetail = () => {
  return useSwr(API_ENDPOINTS.GET_PRODUCT_DETAIL, fetchProducts);
};