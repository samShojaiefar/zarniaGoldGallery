"use client"
import ProductsList from "../_components/productList/ProductsList"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
const ProductListPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsList/>
    </QueryClientProvider>
  );
};

export default ProductListPage;
