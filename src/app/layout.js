import localFont from "next/font/local";
import "./globals.css";
import ClientLayout from "./layout/ClientLayout";
import ReduxProvider from "@/provider/ReduxProvider";
import { Toaster } from "react-hot-toast";
import { SocketProvider } from "@/components/context/ContextProvider";

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
  title: "Profitable Website",
  description: "Profitable Website",

};


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="product">
      <body
        className={`${geistSans.variable} bg-white ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <div className="">
            <SocketProvider>
            <Toaster />
            <ClientLayout>{children}</ClientLayout>
            </SocketProvider>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
