import Image from 'next/image';
import React from 'react';
import productShowcaseImage from "../../../../../assets/images/productShowcase.png";


const CTASection: React.FC = () => {
  return (
    <section className="    max-w-6xl lg:max-w-7xl   md:px-4 my-16  mx-auto p-4  ">
      <div className="flex flex-col rounded-xl md:flex-row bg-primary overflow-hidden relative ">
        <div className=" text-white p-10 md:p-14 w-full rounded-xl">
          <h2 className="text-4xl md:text-5xl font-medium mb-4">
            Ready to Automate?<br />
            Go with Quessia!
          </h2>
          <p className="mb-8 text-purple-100">
            Automate and enhance client communication via Instagram DMs using AI.
          </p>
          <button className="bg-white text-purple-600 font-medium py-3 px-6 rounded-full hover:bg-purple-100 transition-colors duration-300">
            Try Quessia Now
          </button>
        </div>

        <div className='hidden lg:block h-[400px] w-[600px] bg-gray-200 absolute   top-10 -right-10 -rotate-3 rounded-xl'>
            <Image
            src={productShowcaseImage}
            alt="Product Showcase"
            quality={100}
            // fill
            placeholder="blur"
            width={1200}
            sizes="100%"
            className="object-cover  w-full"
            
          />
        </div>

    
      </div>
    </section>
  );
};

export default CTASection;