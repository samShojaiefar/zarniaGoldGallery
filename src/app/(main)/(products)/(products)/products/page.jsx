"use client"
import ProductsList from "../_components/productList/ProductsList"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
import { Suspense } from "react";
const ProductListPage = () => {
  return (

    <QueryClientProvider client={queryClient}>

        <Suspense fallback={<div>Loading...</div>}>
      <ProductsList/>
        </Suspense>
    </QueryClientProvider>
  );
};

export default ProductListPage;
