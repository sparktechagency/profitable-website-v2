import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "JusBuy Website",
  description: "E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='product' >
      <body
        className={`${geistSans.variable} bg-white ${geistMono.variable} antialiased`}
      >
        <div className="max-w-[1400px] m-auto text-black ">
        <Navbar></Navbar>
        <hr/>
        {children}
        <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
