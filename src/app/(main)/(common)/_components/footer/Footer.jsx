const { default: FAQ } = require("./faq/FrequentlyAskedQuestions");
import FooterInfo from "./footerInfo/FooterInfo";
export default function Footer() {
  return (
    <>
      <FAQ />
      <FooterInfo />
    </>
  );
}
