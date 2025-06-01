import ProductDetail from "../../_components/productDetail/productDetail";

const ProductDetailPage = ({ params }) => {
  const { id } = params;

  return <ProductDetail id={id} />;
};

export default ProductDetailPage;
