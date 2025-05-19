import { IranSansX } from "@/defenitions/font";
import { ConfigProvider } from "antd";
import Header from "./(common)/_components/_header/header";
import Footer from "./(common)/_components/footer/Footer";
import BottomNav from "./(common)/_components/buttomNav/ButtomNav";
import FooterInfo from "./(common)/_components/footer/footerInfo/FooterInfo";

export default function RootLayout({ children }) {
  return (
    <html
      className={IranSansX.variable}
      style={{ fontSize: "62.5%" }}
      lang="fa"
      dir="rtl"
    >
      <ConfigProvider
        theme={{
          token: {
            fontFamily: IranSansX.style.fontFamily,
          },
        }}
      >
        <body style={{ margin: "0", padding: "0px", boxSizing: "border-box" }}>
          <Header />

          {children}
          <FooterInfo />
          <BottomNav />
        </body>
      </ConfigProvider>
    </html>
  );
}
