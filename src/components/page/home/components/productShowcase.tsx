"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ProductShowcase = () => {
  return (
    <section className="py-12 px-4">
      <motion.div
        className="max-w-5xl mx-auto    "
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative   ">
          <Image
            src={"/assets/images/productShowcase.png"}
            alt="Product Showcase"
            quality={100}
            // fill
            // placeholder="blur"
            width={474}
            
            height={795}
            sizes="100%"
            className="object-cover  w-full   "
            
          />
        </div>
      </motion.div>
    </section>
  );
};

export default ProductShowcase;
