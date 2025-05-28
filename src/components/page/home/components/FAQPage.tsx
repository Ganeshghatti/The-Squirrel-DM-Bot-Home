"use client";
import { motion } from "framer-motion";
import React from "react";
import Accordion from "./accordion";

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
  title: 'Can I use Quessia for professional work?',
  content: 'Absolutely! Many professionals use Quessia to brainstorm ideas, draft emails, summarize reports, and get quick answers to technical or industry-specific questions.'
},
{
  title: 'Is my data private and secure?',
  content: 'Yes, protecting your data is our top priority. We never share your personal information or the content of your questions with third parties. Read our Privacy Policy for more details.'
},
{
  title: 'Does Quessia support multiple languages?',
  content: 'Currently, Quessia primarily supports English. However, we are working to expand support to other major languages in the near future.'
},
{
  title: 'Can I integrate Quessia with other tools?',
  content: 'We are working on integrations with popular tools and platforms. Stay tuned for announcements and new features!'
},
{
  title: 'Who can I contact for support?',
  content: 'You can reach our support team through the contact form on our website or email us at support@quessia.com. We’re here to help!'
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
