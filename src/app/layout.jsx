import { IranSansX } from "@/defenitions/font";
import { ConfigProvider } from "antd";


export default function RootLayout({ children }) {
  return (
    <html className={IranSansX.variable} style={{fontSize:"62.5%"}} lang="fa" dir="rtl">
              <ConfigProvider
          theme={{
            token: {
              fontFamily: IranSansX.style.fontFamily,
            },
          }}>
      <body style={{margin:"0"}}>
        {children}
      </body>
      </ConfigProvider>
    </html>
  );
}
