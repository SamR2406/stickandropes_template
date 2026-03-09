import { Bitter, Nunito } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const headingFont = Bitter({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700"],
});

const bodyFont = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Sticks and Ropes | Forest School | Sheffield",
  description:
    "Forest School home education group and holiday club in Sheffield. Nature connection, practical skills, events, and frontend booking/payments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <div className="site-bg" />
        <div className="relative z-10 min-h-screen">
          <SiteHeader />
          <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
