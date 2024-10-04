import "./globals.css";
import "./grid.css";
import "./responsive.css";
import localFont from "next/font/local";


const rabie = localFont({
  src: [
    {
      path: "../public/font/YekanBakhMedium.woff",
      weight: "200",
      style: "normal",
    },
  ],
});
export const metadata = {
  title: "سجاد حسنی کاخ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={rabie.className} >
        {children}
      </body>
    </html>
  );
}
