"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import feedbackImage from "../../../../../assets/images/feedback.png";


function Feedback() {
  return (
    <section id="AI-Chat" className="">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <motion.div
            className="w-full md:w-1/2 md:h-[730px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-100 p-8 rounded-3xl h-full flex items-center justify-center">
              <div className="relative ">
                <Image
                  src={feedbackImage}
                  alt="Product Showcase"
                  quality={100}
                  // fill
                  placeholder="blur"
                  width={400}
                  height={496     }
                  sizes="100%"
                  className="object-cover  w-full"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 flex  items-start justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="md:pl-10">
              <h2 className="text-3xl md:text-4xl font-medium">
                Instantly Engage, Qualify
              </h2>
              <h2 className="text-3xl md:text-4xl font-medium mb-4">
                & Convert Leads
              </h2>
              <p className="text-lg text-[var(--neutral-400)] mb-6 max-w-[620px]">
                Let our AI take over your Instagram DMs — automatically collect names, emails, and phone numbers, and guide your audience toward your services or products.
No more missed messages, no more manual replies.
              </p>
              <Link
                href="/learn-more"
                className="bg-primary hover:bg-primary/80 text-white px-5 py-2 md:px-7 md:py-3 rounded-full font-medium inline-block transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
