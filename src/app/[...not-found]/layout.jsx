import { AntdRegistry } from "@ant-design/nextjs-registry";
import "../(main)/globals.scss"
export default function NotFoundLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <AntdRegistry>
          {children}
          </AntdRegistry>
      </body>
    </html>
  );
}
