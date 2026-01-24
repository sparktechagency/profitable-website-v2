"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Suspense } from "react";

export default function ClientLayout({ children }) {
  const pathname = usePathname();


  const hideFooter =
    pathname === "/chat" || pathname.startsWith("/chat/");

  const hideNavbarFooter =
    pathname === "/signIn" ||
    pathname === "/signUp" ||
    pathname === "/signIn/forgot" ||
    pathname === "/business-schedule/sent-successfull" ||
<<<<<<< HEAD
    pathname === "/addnewbusiness/sent-successfull" ||
      pathname === "/business-details-with-form/sent-successfull" ||
=======
  
 
    pathname === "/contact-us/sent-successfull" ||
>>>>>>> 91966b119e5ee6f8ff78fe789e47aaa5c66be93d
    pathname === "/signIn/verify" ||
    pathname === "/signIn/newpass" ||
    pathname === "/signUp/done" ||
    pathname === "/signUp/seller" ||
    pathname === "/signUp/accountverify";

  return (
    <div className="flex flex-col min-h-screen">

      {!hideNavbarFooter && <Suspense>
        <Navbar />
      </Suspense>}

      <div className="text-black flex-grow ">{children}</div>


      {!hideNavbarFooter && !hideFooter && <Footer />}
    </div>
  );
}
