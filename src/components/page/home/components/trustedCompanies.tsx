"use client";

import { motion } from "framer-motion";
import { Circle, PlusCircle, CircleDot, CheckCircle, ShieldCheck } from "lucide-react";

const TrustedCompanies = () => {
  return (
    <section className="py-16 px-4">
      <motion.div 
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-lg font-bold text-[var(--neutral-400)] mb-12">
          Trusted by 1,289+ leading companies
        </h2>
        
        <div className="flex flex-wrap justify-center gap-12">
          <motion.div 
            className="flex items-center space-x-2 text-gray-400"
            whileHover={{ scale: 1.05 }}
          >
            <Circle className="h-6 w-6" />
            <span className="text-lg font-medium">Logoipsum</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-2 text-gray-400"
            whileHover={{ scale: 1.05 }}
          >
            <PlusCircle className="h-6 w-6" />
            <span className="text-lg font-medium">Logoipsum</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-2 text-gray-400"
            whileHover={{ scale: 1.05 }}
          >
            <CircleDot className="h-6 w-6" />
            <span className="text-lg font-medium">Logoipsum</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-2 text-gray-400"
            whileHover={{ scale: 1.05 }}
          >
            <CheckCircle className="h-6 w-6" />
            <span className="text-lg font-medium">Logoipsum</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-2 text-gray-400"
            whileHover={{ scale: 1.05 }}
          >
            <ShieldCheck className="h-6 w-6" />
            <span className="text-lg font-medium">Logoipsum</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default TrustedCompanies;