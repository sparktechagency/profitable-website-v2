"use client"; 

import { usePathname } from "next/navigation";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";


export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const hideNavbarFooter = pathname === "/signIn" || pathname === "/signUp" || pathname === "/signIn/forgot" || pathname === "/signIn/verify" || pathname === "/signIn/newpass" || pathname === "/signUp/done" || pathname === "/signUp/seller"  || pathname === "/signUp/accountverify"; 

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <hr />
      {children}
      {!hideNavbarFooter && <Footer />}
    </>
  );
}
