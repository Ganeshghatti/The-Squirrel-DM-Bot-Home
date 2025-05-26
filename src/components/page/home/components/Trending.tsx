"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import trendingImage from "../../../../../assets/images/trending.png";

function Trending() {
  return (
    <section className="py-16">
      <div className=" max-w-6xl lg:max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row h-full items-center justify-center gap-5">
          <motion.div
            className="w-full md:w-1/2 md:h-[630px] order-2 md:order-1 flex items-center justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className=" ">
              <h2 className="text-3xl md:text-4xl font-medium mb-4">
                Know What&apos;s Trending
                <br />
                Before Everyone Else
              </h2>
              <p className="text-[var(--neutral-400)] mb-6">
                Stay one step ahead with insights that help you create relevant
                content, make smarter decisions, and stay in tune with what your
                audience cares about.
              </p>
              <Link
                href="/learn-more"
                className="bg-primary hover:bg-primary/80 text-white px-5 py-2 md:px-7 md:py-3 rounded-full font-medium inline-block transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2  md:order-2 md:h-[630px]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gray-100 p-8 rounded-3xl h-full flex items-center justify-center">
              <div className="relative ">
                <Image
                  src={trendingImage}
                  alt="Product Showcase"
                  quality={100}
                  // fill
                  placeholder="blur"
                  width={450}
                  height={294       }
                  sizes="100%"
                  className="object-cover  w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Trending;
