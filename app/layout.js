import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { AppProvider } from "@/lib/app-context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const vazir = localFont({
  src: [
    {
      path: "../public/fonts/YekanBakhFaNum-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakhFaNum-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakhFaNum-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-fa",
  display: "swap",
});

export const metadata = {
  title: "Haniye — Front-End Developer",
  description:
    "Portfolio of Haniye, a Front-End Developer building exceptional, high-performance web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${vazir.variable}`}>
        <div className="app-bg" />
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
