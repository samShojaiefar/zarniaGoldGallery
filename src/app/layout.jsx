import "./globals.scss"  
import { IranSansX } from "@/defenitions/font";
import { ConfigProvider } from "antd";
import FooterInfo from "./(common)/_components/footer/footerInfo/FooterInfo";
import Header from "./(common)/_components/_header/header";
import BottomNav from "./(common)/_components/buttomNav/ButtomNav";
export const metadata = {
  title: 'گالری زریا'
}
export default function RootLayout({ children }) {
  
  return (
    <html
      className={IranSansX.variable}
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
        <body>
          <Header />
          {children}
          <FooterInfo />
          <BottomNav />
        </body>
      </ConfigProvider>
    </html>
  );
}
