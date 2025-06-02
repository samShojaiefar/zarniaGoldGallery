import axiosInstance from "@/lib/services/axiosInstance";
import { API_ENDPOINTS } from "@/lib/services/endpoints";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import useSWR from "swr";

// const fetchProducts = async (page = 1) => {
//   try {
//     const response = await axiosInstance.get(API_ENDPOINTS.GET_PRODUCTS_LIST);
//     return response.data; // return only data
//   } catch (error) {
//     console.error("Failed to fetch products:", error);
//     throw error; // Let SWR handle the error
//   }
// };

const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);


/**
 * @param {Object} filters
 */
export const useGetProducts = ({ search, minPrice, maxPrice }) => {
  const params = new URLSearchParams();

  if (search) params.append("search", search);
  if (minPrice) params.append("minPrice", minPrice);
  if (maxPrice) params.append("maxPrice", maxPrice);

  const queryString = params.toString();
  const url = `/products${queryString ? `?${queryString}` : ""}`;

  const { data, error, isLoading } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading,
  };
};

export const useGetProductDetail = (slug) => {
  const { data, error, isLoading } = useSWR(
    slug ? `/products/${slug}` : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
};
