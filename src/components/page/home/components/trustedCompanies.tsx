"use client";

import { motion } from "framer-motion";
import { Circle, PlusCircle, CircleDot, CheckCircle, ShieldCheck } from "lucide-react";
import Image from "next/image";
import company1 from '../../../../../assets/images/company1.png'
import company2 from '../../../../../assets/images/company2.png'
import company3 from '../../../../../assets/images/company3.png'
import company4 from '../../../../../assets/images/company4.png'
import company5 from '../../../../../assets/images/company5.png'


const TrustedCompanies = () => {
  return (
    <section className="py-16 px-4 ">
      <motion.div 
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* <h2 className="text-lg font-bold text-[var(--neutral-400)] mb-12">
          Trusted by 1,289+ leading companies
        </h2> */}
        
        <div className="flex flex-wrap justify-center gap-12">
          <motion.div 
            className="flex items-center  "
            whileHover={{ scale: 1.05 }}
          >
            <Image 
            className="stroke stroke-black  "
              src={company1}
              alt="company"
              quality={100}
              width={150}
              height={100}
            
            />
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-2 logo-drop-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <Image 
              src={company2}
              quality={100}
              alt="company"
              width={150}
              height={150}
            
            />
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-2  logo-drop-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <Image 
              src={company3}
              quality={100}
              alt="company"
              width={150}
              height={100}
            
            />
          </motion.div>
          
          <motion.div 
            className="flex items-center  logo-drop-shadow "
            whileHover={{ scale: 1.05 }}
          >
            <Image 
              src={company4}
              quality={100}
              alt="company"
              width={150}
              height={100}
            
            />
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-2 text-gray-400"
            whileHover={{ scale: 1.05 }}
          >
            <Image 
              src={company5}
              quality={100}
              alt="company"
              width={150}
              height={100}
            
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default TrustedCompanies;