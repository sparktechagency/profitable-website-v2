'use client';

import Image from "next/image";
import Header from "@/components/shared/Header";
import React from 'react';

const BusinessSale = () => {
  return (
    <div>
      <Header
        title="Business for Sale in Dubai: Your Gateway to Profitable Ventures"
        description="Discover verified and profitable businesses for sale across Dubai and the UAE. From small startups to established enterprises and franchises, PBFS connects serious buyers with genuine opportunities backed by transparent details and expert support."
      />

      <section className="overflow-hidden md:pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <Image
                src="/sale1.png"
                alt="About Us"
                width={600}
                height={200}
                className="w-full rounded-2xl object-cover"
              />
            </div>

            <div>
              <h2 className="mb-5 md:text-3xl font-bold text-dark text-xl">
                Verified Businesses for <span className="text-[#22C55E]">Sale in Dubai</span>
              </h2>

              <p className="mb-5 text-base text-[#000000]">
                Are you ready to own a thriving business in one of the world&apos;s most dynamic cities?
                Dubai offers incredible opportunities for entrepreneurs who want to skip the startup struggle
                and dive straight into success.
              </p>

              <p className="text-[#000000]">
                Ready to explore profitable businesses in Dubai? Fill out the form below, and our business
                experts will connect you with verified opportunities that match your budget and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="mb-5 md:text-3xl font-bold text-dark text-xl">
                What Makes <span className="text-[#22C55E]">Dubai the Perfect Place</span> to Buy a Business?
              </h2>

              <p className="mb-5 text-base text-[#000000]">
                Dubai is not just a city. It is a global business hub where dreams turn into reality.
              </p>

              <p className="mb-5 text-base text-[#000000]">
                Here&apos;s why buying a business in Dubai makes perfect sense:
              </p>

              <p className="mb-5 text-base text-[#000000]">
                <strong>Strong Economy:</strong> Dubai&apos;s economy grows steadily every year.
              </p>

              <p className="mb-5 text-base text-[#000000]">
                <strong>Tax Benefits:</strong> Many business owners enjoy zero personal income tax.
              </p>

              <p className="mb-5 text-base text-[#000000]">
                <strong>Strategic Location:</strong> Dubai connects Asia, Europe, and Africa.
              </p>

              <p className="mb-5 text-base text-[#000000]">
                <strong>Tourist Magnet:</strong> Over 16 million tourists visit Dubai annually.
              </p>
            </div>

            <div>
              <Image
                src="/sale2.png"
                alt="Dubai Business"
                width={600}
                height={400}
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden pb-10">
        <div className="container mx-auto px-4">
          <h2 className="mb-5 md:text-3xl font-bold text-dark text-xl">
            Why Buy an <span className="text-[#22C55E]">Established Business</span> Instead of Starting From Scratch?
          </h2>

          <ul className="mb-5 text-base text-[#000000] list-disc pl-5">
            <li><strong>Immediate Cash Flow:</strong> You start earning from day one.</li>
            <li><strong>Proven Track Record:</strong> Existing customers and tested models.</li>
            <li><strong>Trained Staff:</strong> No long training period required.</li>
            <li><strong>Brand Recognition:</strong> Customers already trust the business.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="overflow-hidden pb-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-5 md:text-3xl font-bold text-dark text-xl text-center">
            Frequently Asked Questions
          </h2>

          {[
            {
              q: "How can I verify if a business is actually profitable before buying?",
              a: "Ask for at least 12 months of bank statements and expense records."
            },
            {
              q: "Do I need Arabic language skills to run a business in Dubai?",
              a: "No. English works perfectly fine for most business operations."
            }
          ].map((item, index) => (
            <details key={index} className="mb-4 border border-gray-200 rounded-lg p-5">
              <summary className="cursor-pointer font-semibold text-dark">
                Q{index + 1}: {item.q}
              </summary>
              <p className="mt-4 text-base text-[#000000]">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BusinessSale;
