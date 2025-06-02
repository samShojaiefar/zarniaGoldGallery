import axiosInstance from "@/lib/services/axiosInstance";
import { API_ENDPOINTS } from "@/lib/services/endpoints";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import useSWR from "swr";
const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);

export const useGetCategories = () =>{
    const url = `/categories`;
    const { data, error, isLoading } = useSWR(url, fetcher);
    return {
        data,
        error,
        isLoading,
    };
}