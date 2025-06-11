"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const featureItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

export default function PricingPage() {
  const standardFeatures = [
    "10,000 monthly messages",
    "Customer data collection (email & phone)",
    "Product/service explanation bot",
    "Analytics dashboard access",
    "AI-based lead classification"
  ];

  return (
    <motion.div
      className="max-w-6xl lg:max-w-7xl md:px-4 my-16 mx-auto p-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Header Section */}
      <motion.div
        className="text-center mb-10 sm:mb-16"
        variants={containerVariants}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-800 mb-4"
          variants={headerVariants}
        >
          Simple, transparent pricing
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
          variants={textVariants}
        >
          Choose the perfect plan for your business.
        </motion.p>
      </motion.div>

      {/* Pricing Cards */}
      <motion.div
        className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto"
        variants={containerVariants}
      >
        {/* Standard Tier */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="relative overflow-hidden border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl group flex flex-col h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <CardHeader className="relative z-10 pb-4">
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-xl font-bold text-gray-900">Standard</CardTitle>
                <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </div>
              </div>
              <CardDescription className="text-gray-600">
                Perfect for small to medium businesses looking to automate customer interactions
              </CardDescription>
            </CardHeader>

            <CardContent className="relative z-10 pb-4">
              {/* Pricing Section */}
              <div className="mb-6">
                <div className="flex items-baseline mb-1">
                  <span className="text-3xl font-bold text-gray-900">₹3,999</span>
                  <span className="text-gray-600 ml-2">setup fee</span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-gray-900">₹1,500</span>
                  <span className="text-gray-600 ml-2 text-sm">/month from month 2</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 mb-3">Everything you need:</h4>
                {standardFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    custom={index}
                    variants={featureItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-2.5 h-2.5 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>

            <CardFooter className="relative z-10 pt-4 mt-auto">
              <Button 
                onClick={() => window.location.href = "https://dashboard.thesquirrel.tech/"}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Enterprise Tier */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="relative overflow-hidden border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl group bg-gradient-to-br from-gray-900 to-gray-800 text-white h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <CardHeader className="relative z-10 pb-4">
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-xl font-bold text-white">Enterprise</CardTitle>
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                  <Star className="w-3 h-3 mr-1" />
                  Premium
                </div>
              </div>
              <CardDescription className="text-gray-300">
                Custom AI solutions designed specifically for your business requirements
              </CardDescription>
            </CardHeader>

            <CardContent className="relative z-10 pb-4">
              {/* Pricing Section */}
              <div className="mb-6">
                <div className="flex items-baseline mb-1">
                  <span className="text-3xl font-bold text-white">Custom AI Solutions</span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Starting from ₹15,000
                  </span>
                </div>
              </div>

              {/* Enterprise Features */}
              <div className="space-y-3">
                <h4 className="font-semibold text-white mb-3">Enterprise includes:</h4>
                {[
                  "Unlimited monthly messages",
                  "Advanced customer analytics & insights",
                  "Custom AI model training",
                  "Multi-channel integration",
                  "Dedicated account manager",
                  "Priority support & onboarding",
                  "Custom integrations & APIs",
                  "Advanced security & compliance"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    custom={index}
                    variants={featureItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-2.5 h-2.5 text-gray-900" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>

            <CardFooter className="relative z-10 pt-4">
              <Button
                variant="secondary"
                onClick={() => window.location.href = "#contact"}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 py-4 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group border-0"
              >
                Contact Sales
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}