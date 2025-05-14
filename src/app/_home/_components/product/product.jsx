import Category from "./category/Category";
import PriceRange from "./priceRange/priceRange";
import Products from "./product/product";
import ProductOffers from "./productOffers/productOffers";

 function Product() {
  return(
    <>
     <PriceRange/>
     <ProductOffers/>
     <Category/>
     <Products/>
     </>
    )
}
export default Product