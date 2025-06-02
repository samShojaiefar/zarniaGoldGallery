import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/services/axiosInstance";
import { API_ENDPOINTS } from "@/lib/services/endpoints";

const fetchProducts = async (page = 1) => {
  try {
    const response = await axiosInstance.get(API_ENDPOINTS.GET_PRODUCTS_LIST, {
      params: { page },
    });
    return response.data; // Returns { data: [], links: {}, meta: {} }
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error; // Let React Query handle the error
  }
};

export const useGetProducts = (page = 1) => {
  return useQuery({
    queryKey: [API_ENDPOINTS.GET_PRODUCTS_LIST, page], // Cache per page
    queryFn: () => fetchProducts(page),
    keepPreviousData: true, // Smooth pagination transitions
  });
};