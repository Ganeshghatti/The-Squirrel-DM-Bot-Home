import Image from 'next/image';
import React from 'react';
import Link from 'next/link';


const CTASection: React.FC = () => {
  return (
    <section className="    max-w-6xl lg:max-w-7xl   md:px-4 my-16  mx-auto p-4  ">
      <div className="flex flex-col rounded-xl md:flex-row bg-primary overflow-hidden relative ">
        <div className=" text-white p-10 md:p-14 w-full rounded-xl">
          <h2 className="text-4xl md:text-5xl font-medium mb-4">
            Ready to Automate?<br />
            Go with The Squirrel!
          </h2>
          <p className="mb-8 text-purple-100">
            Automate and enhance client communication via Instagram DMs using AI.
          </p>
          <Link href="https://dashboard.thesquirrel.tech/" className="bg-white text-purple-600 font-medium py-3 px-6 rounded-full inline-block  transition-colors duration-300">
            Automate Now
          </Link>
        </div>

        <div className='hidden overflow-hidden lg:block h-[500px] w-[600px] bg-[#93b2ff] absolute   top-10 -right-10 -rotate-3 rounded-xl p-1'>
            <Image
            src={"/assets/images/productShowcase.png"}
            alt="Product Showcase"
            quality={100}
            // fill
            // placeholder="blur"
            width={1200}
            height={1200}
            sizes="100%"
            className="object-cover  w-full rounded-[8px] "
            
          />
        </div>

    
      </div>
    </section>
  );
};

export default CTASection;