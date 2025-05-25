import "./globals.scss";
import { IranSansX } from "@/defenitions/font";
import { ConfigProvider } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry"; // ✅ Add this
import FooterInfo from "./(common)/_components/footer/footerInfo/FooterInfo";
import Header from "./(common)/_components/_header/header";
import BottomNav from "./(common)/_components/buttomNav/ButtomNav";
import useResponsive from "@/lib/hocks/useResponsive";

export const metadata = {
  title: "گالری زرنیا",
};

export default function RootLayout({ children }) {
  const { isMobile } = useResponsive;
  return (
    <html className={IranSansX.variable} lang="fa" dir="rtl">
      <body>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: IranSansX.style.fontFamily,
            },
          }}
        >
          <Header />
          <AntdRegistry>
          {children}
          </AntdRegistry>
          <FooterInfo />
          <BottomNav />
        </ConfigProvider>
      </body>
    </html>
  );
}
