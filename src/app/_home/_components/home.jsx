import Footer from "@/app/(common)/_components/footer/Footer";
import GoldPrice from "../../(common)/_components/_header/_goldPrice/GoldPrice";
import Header from "../../(common)/_components/_header/header";
import Banner from "./banner/banner";
import Product from "./product/product";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Product />
      <Footer />
    </>
  );
}
export default Home;
