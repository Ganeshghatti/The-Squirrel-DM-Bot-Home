"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function QuickSteps() {
  return (
    <section id='QuickSteps' className="pb-16 md:pb-24">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            
            <div className="relative  ">
              <Image
                src={"/assets/images/offers.png"}
                alt="Product Showcase"
                quality={100}
                // fill
                // placeholder="blur"
                width={630}
                height={430}
                sizes="100%"
                className="object-cover rounded-3xl  w-full"
              />
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 md:pl-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Send Smart Product Offers,
              <br className="hidden md:block" /> Instantly
            </h2>
            <p className="text-[var(--neutral-400)] mb-6">
            SendEngage customers with intelligent responses and personalized product recommendations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default QuickSteps;
