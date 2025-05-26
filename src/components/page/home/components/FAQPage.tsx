"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Accordion from './accordion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const headerVariants = {
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

const textVariants = {
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

const accordionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.4,
      ease: "easeOut",
    },
  },
};

const FAQPage: React.FC = () => {
  const faqItems = [
    {
      title: 'What is Quessia?',
      content: 'Quessia is an AI-powered assistant that gives you instant, intelligent answers to any question—whether it\'s for work, study, or everyday curiosity.'
    },
    {
      title: 'Is Quessia free to use?',
      content: 'Yes, Quessia offers a free tier with a generous quota of questions per month. We also offer premium plans for users who need additional features and higher usage limits.'
    },
    {
      title: 'What kind of questions can I ask?',
      content: 'You can ask Quessia about virtually any topic—from academic subjects like math, science, and history to practical advice, creative writing help, and more. Our AI is trained on a diverse range of knowledge areas.'
    },
    {
      title: 'Do I need to create an account?',
      content: 'While you can try Quessia with a limited number of questions without an account, creating a free account allows you to track your question history and access more features.'
    },
    {
      title: 'How accurate are the answers?',
      content: 'Quessia strives to provide accurate, up-to-date information. Our AI is trained on a vast dataset and continuously improved. However, for critical decisions, we recommend verifying information from multiple sources.'
    }
  ];

  return (
    <motion.div 
      className="min-h-screen flex flex-col"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.main 
        className="flex-grow px-6 py-12"
        variants={containerVariants}
      >
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 mb-4"
              variants={headerVariants}
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg text-[var(--neutral-400)] max-w-2xl mx-auto"
              variants={textVariants}
            >
              Have another question? Please contact our team!
            </motion.p>
          </motion.div>
          
          <motion.div
            variants={accordionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <Accordion items={faqItems} />
          </motion.div>
          
        </div>
      </motion.main>
    </motion.div>
  );
};

export default FAQPage;