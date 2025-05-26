"use client";

import React from "react";
import BgGradient from "./bgGradient";
import { motion } from "framer-motion";
import { Download, Zap, BarChart3, Rocket } from "lucide-react";
import Link from "next/link";

function HeroSection() {
  return (
     <section className="pt-32 pb-16  relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-medium  mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your{" "}
          <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
            AI-Powered
          </span>
          <br />
          Answer Engine
        </motion.h1>
        
        <motion.p 
          className="text-[var(--neutral-400)] max-w-[350px] md:max-w-2xl mx-auto mb-10 text-base   md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Whether you&apos;re seeking quick facts, creative ideas, or in-depth
          explanations, Quessia is always ready to help you move forward.
        </motion.p>
        
        <motion.div 
          className=" flex flex-wrap gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/get-started" className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-full font-medium transition-colors">
            Get Started
          </Link>
          <Link href="/how-it-works" className="bg-white border border-primary text-primary rounded-full font-medium hover:primary/80 px-8 py-3 transition-colors">
            How it Works
          </Link>
        </motion.div>
        
        <motion.div 
          className=" flex flex-wrap justify-center items-center md:gap-x-12 gap-y-4 text-base font-medium text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <Download className="h-5 w-5 text-foreground" />
            <span>60K+ downloads</span>
          </div>
          <div className="h-3 w-3 rounded-full bg-black"></div>
          <div className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-foreground" />
            <span>3x faster than manual</span>
          </div>
            <div className="h-3 w-3 rounded-full bg-black"></div>
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-foreground" />
            <span>100+ use case</span>
          </div>
        </motion.div>
      </div>
      <BgGradient />
    </section>
  );
}

export default HeroSection;
