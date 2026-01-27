<<<<<<< HEAD
import React from 'react';
import { CheckCircle, Mail, Phone } from 'lucide-react';

const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 ">
      <div className="max-w-3xl w-full border rounded-2xl  overflow-hidden">
=======
'use client';
import React from 'react';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const SuccessPage = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full border rounded-2xl overflow-hidden">

>>>>>>> 95f6486588c6095631ed7e6c94932ab3f200e4d9
        {/* Success indicator header */}
        <div className="bg-green-600 px-8 py-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 shadow-md">
            <CheckCircle className="w-10 h-10 text-green-600" strokeWidth={2.5} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Thank You
          </h1>
        </div>

<<<<<<< HEAD
        {/* Main content - exact text preserved */}
=======
        {/* Main content */}
>>>>>>> 95f6486588c6095631ed7e6c94932ab3f200e4d9
        <div className="p-8 md:p-12 space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            Thank you for getting in touch with <strong>ProfitableBusinessesForSale.com (PBFS)</strong>.
          </p>
<<<<<<< HEAD
          
=======
>>>>>>> 95f6486588c6095631ed7e6c94932ab3f200e4d9
          <p>
            We appreciate your interest and are delighted to assist you with buying or selling a business or
            franchise.
          </p>
<<<<<<< HEAD
          
=======
>>>>>>> 95f6486588c6095631ed7e6c94932ab3f200e4d9
          <p>
            One of our dedicated representatives will review your inquiry and contact you shortly with the next
            steps.
          </p>
<<<<<<< HEAD
          
          <p>
            If your matter is urgent, please feel free to reach out to us directly via email
            <a 
=======

          <p>
            If your matter is urgent, please feel free to reach out to us directly via email
            <Link
>>>>>>> 95f6486588c6095631ed7e6c94932ab3f200e4d9
              href="mailto:info@profitablebusinessesforsale.com"
              className="text-green-600 hover:text-green-700 font-medium mx-1 break-all"
            >
              info@profitablebusinessesforsale.com
<<<<<<< HEAD
            </a>
            or WhatsApp
            <a 
=======
            </Link>
            or WhatsApp
            <Link
>>>>>>> 95f6486588c6095631ed7e6c94932ab3f200e4d9
              href="https://wa.me/971522294008"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 font-medium mx-1"
            >
              +971 52 229 4008
<<<<<<< HEAD
            </a>.
          </p>
          
=======
            </Link>.
          </p>

>>>>>>> 95f6486588c6095631ed7e6c94932ab3f200e4d9
          <p>
            We look forward to supporting you on your business journey.
          </p>

<<<<<<< HEAD
            <p>Regards, <br />
Team- PBFS


 </p>
        </div>

      

        {/* Quick action buttons */}
        <div className="bg-gray-50 px-8 py-8 border-t flex flex-col sm:flex-row gap-4 justify-center">
          <a
=======
          <p>
            Regards,<br />
            Team- PBFS
          </p>
        </div>

        {/* Quick action buttons */}
        <div className="bg-gray-50 px-8 py-8 border-t flex flex-col sm:flex-row gap-4 justify-center">
          <Link
>>>>>>> 95f6486588c6095631ed7e6c94932ab3f200e4d9
            href="/"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-sm text-center"
          >
            Back to Home
<<<<<<< HEAD
          </a>
          
          <a
            href="mailto:info@profitablebusinessesforsale.com"
            className="bg-white border-2 border-green-600 text-green-700 hover:bg-green-50 px-8 py-3 rounded-lg font-medium transition-colors text-center"
          >
            Previous page
          </a>
        </div>



        {/* Small footer */}
=======
          </Link>

          <button
          onClick={() => router.back()} 
            className="bg-white border-2 border-green-600 text-green-700 hover:bg-green-50 px-8 py-3 rounded-lg font-medium transition-colors text-center"
          >
            Previous page
          </button>
        </div>

        {/* Footer */}
>>>>>>> 95f6486588c6095631ed7e6c94932ab3f200e4d9
        <div className="text-center py-5 text-sm text-gray-500 bg-white border-t">
          © {new Date().getFullYear()} ProfitableBusinessesForSale.com
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default SuccessPage;
=======
export default SuccessPage;
>>>>>>> 95f6486588c6095631ed7e6c94932ab3f200e4d9
