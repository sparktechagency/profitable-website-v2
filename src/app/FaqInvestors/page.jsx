'use client'
import { Collapse, ConfigProvider } from 'antd';
import React from 'react';
import {

  FaMinusCircle,
  FaPlusCircle,
} from 'react-icons/fa';



import Header from '@/components/shared/Header';
import { useGetFaqQuery } from '@/redux/Api/metaApi';
const FaqSeller = () => {
  const { data: faq } = useGetFaqQuery({ userRole:'Investor' });

   const items =
    faq?.data?.map((item, index) => ({
      key: String(index + 1),
      label: item.question,
      children: <p>{item.answer}</p>,
    })) || [];

  return (
    <div>
      <div></div>
        <Header
              title="Frequently Asked Questions"
              description="Answers to common questions about buying, selling, and using our platform."
            />

      {/* <div
        className="relative bg-cover bg-center py-36 text-white"
        style={{ backgroundImage: `url(${backImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black opacity-25"></div>

        <div className="relative z-10 h-full container m-auto">
          <h1 className='text-3xl font-semibold pb-3'>FAQ</h1>
          <p className='flex items-center gap-2'>Home <IoIosArrowForward /> Faq</p>
        </div>
      </div> */}
      <div className=" container m-auto py-11 ">
        <h1 className="text-3xl mb-4 font-bold ">
          {' '}
          FAQ for <span className="text-[#22C55E] ">Investors</span>
        </h1>
        <ConfigProvider
          theme={{
            components: {
              Collapse: {
                fontHeight: 32,
                fontSize: 20,
                fontHeightLG: 20,
                fontSizeIcon: 20,
              },
            },
          }}
        >
          <Collapse
            defaultActiveKey={['1']}
            items={items}
            style={{ border: 'none' }}
            expandIconPosition="right"
            expandIcon={({ isActive }) =>
              isActive ? (
                <FaMinusCircle style={{ fontSize: '16px', color: 'black' }} />
              ) : (
                <FaPlusCircle style={{ fontSize: '16px', color: 'black' }} />
              )
            }
          />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default FaqSeller;
