"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const TrustedCompanies = () => {
  return (
    <section className="py-16 px-4 ">
      <motion.div 
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* <h2 className="text-lg font-bold text-[var(--neutral-400)] mb-12">
          Trusted by 1,289+ leading companies
        </h2> */}
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-20">
          <motion.div 
            className="flex items-center w-16 md:w-28  "
            whileHover={{ scale: 1.05 }}
          >
            <Image 
            className="stroke stroke-black  "
              src={"/assets/images/company1.png"}
              alt="company"
              quality={100}
              width={150}
              height={100}
            
            />
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-2 logo-drop-shadow w-14 md:w-20 "
            whileHover={{ scale: 1.05 }}
          >
            <Image 
              src={'/assets/images/company2.png'}
              quality={100}
              alt="company"
              width={100}
              height={150}
            
            />
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-2  logo-drop-shadow w-16 md:w-28"
            whileHover={{ scale: 1.05 }}
          >
            <Image 
              src={"/assets/images/company3.png"}
              quality={100}
              alt="company"
              width={150}
              height={100}
            
            />
          </motion.div>
          
          <motion.div 
            className="flex items-center  logo-drop-shadow w-16 md:w-28"
            whileHover={{ scale: 1.05 }}
          >
            <Image 
              src={"/assets/images/company4.png"}
              quality={100}
              alt="company"
              width={100}
              height={100}
            
            />
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-2 text-gray-400 w-16 md:w-28"
            whileHover={{ scale: 1.05 }}
          >
            <Image 
              src={"/assets/images/company5.png"}
              quality={100}
              alt="company"
              width={120}
              height={100}
            
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default TrustedCompanies;