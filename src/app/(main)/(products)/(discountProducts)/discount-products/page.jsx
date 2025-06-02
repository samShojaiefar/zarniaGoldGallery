import DiscountProductsList from "../_components/discountProductsList/DiscountProductsList";
import { Suspense } from "react";
const DiscountProductsListPage = () => {

  return (

      <Suspense fallback={<div>Loading...</div>}>
      <DiscountProductsList/>
      </Suspense>
        )
};

export default DiscountProductsListPage;
