"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/use-media-query";
import ContactForm from "./ContactForm";
import { headerVariants, textVariants } from "./userAreSaying";

export default function Contact() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="w-full lg:max-w-7xl mx-auto  pt-16 md:pt-24 bg-background">
        

              <motion.div className="text-center mb-12" variants={headerVariants}>
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 mb-4"
          variants={headerVariants}
        >
          Get in Touch
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 max-w-[500px] mx-auto"
          variants={textVariants}
        >
          We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you as soon as possible.
        </motion.p>
      </motion.div>


      <div className=" mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col md:flex-row rounded-xl  overflow-hidden  bg-[#f9fcff]"
        >
          {!isMobile && (
            <motion.div 
              variants={itemVariants}
              className="relative hidden md:block md:w-[30%]  md:min-w-[320px] bg-muted"
            >
              <Image
                src="/assets/images/contact-us.jpg"
                alt="Contact us"
                className="object-cover"
                fill
                // sizes="(max-width: 768px) 100vw, 30vw"
                // height={461}
                // width={461}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/20" />
            </motion.div>
          )}
          
          <motion.div 
            variants={itemVariants}
            className="w-full md:w-[70%] p-6 md:p-10"
          >
            <div className="max-w-xl mx-auto">
              
              
              <ContactForm />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}