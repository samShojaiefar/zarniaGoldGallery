import Footer from "@/app/(common)/_components/footer/Footer";
import GoldPrice from "../../(common)/_components/_header/_goldPrice/GoldPrice";
import Header from "../../(common)/_components/_header/header";
import Banner from "./banner/banner";
import Product from "./product/product";
import FAQ from "@/app/(common)/_components/footer/faq/FrequentlyAskedQuestions";

function Home() {
  return (
    <>
      <Banner />
      <Product />
      <FAQ />
    </>
  );
}
export default Home;
