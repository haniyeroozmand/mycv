import "./globals.css";
import { Inter, Vazirmatn } from "next/font/google";
import { AppProvider } from "@/lib/app-context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const vazir = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-fa",
  display: "swap",
});

export const metadata = {
  title: "Haniye — Full Stack Developer",
  description:
    "Portfolio of Haniye, a Full Stack Developer building exceptional, high-performance web applications.",
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
