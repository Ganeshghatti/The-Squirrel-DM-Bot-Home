"use client";
import { motion } from "framer-motion";
import React, { useState } from "react"; // Added useState

// Animation variants (as provided by user)
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

// Interface for FAQ item structure
interface FAQItem {
  title: string;
  content: string;
}

// Interface for Accordion component props
interface AccordionProps {
  items: FAQItem[];
}

// Accordion Component
const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <button
            onClick={() => handleToggle(index)}
            className="w-full flex justify-between items-center p-4 sm:p-5 text-left text-gray-700  hover:bg-gray-100/40 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75 transition-colors duration-150 ease-in-out"
            aria-expanded={openIndex === index}
            aria-controls={`accordion-content-${index}`}
          >
            <span className="text-sm sm:text-base font-medium">{item.title}</span>
            <svg
              className={`w-5 h-5 sm:w-6 sm:h-6 transform transition-transform duration-200 ease-in-out ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {openIndex === index && (
            <motion.div
              id={`accordion-content-${index}`}
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: '0px' }} // Adjusted marginTop for smoother transition
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden" // Ensure content doesn't overflow during animation
            >
              <div className="p-4 sm:p-5 text-sm sm:text-base text-gray-600 bg-white leading-relaxed">
                {/* Preserve line breaks from the content string */}
                {item.content.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};


// FAQPage Component (Updated)
const FAQPage: React.FC = () => {
  // FAQs for Squirrel Instagram Bot
  const faqItems: FAQItem[] = [
    {
      title: "What is the Squirrel Instagram Bot?",
      content:
        "The Squirrel Instagram Bot is a tool designed to help businesses automate and enhance their sales process on Instagram. It engages with users through Direct Messages (DMs) and comments, collects customer data, provides intelligent product responses, classifies user intent, and enables targeted remarketing.",
    },
    {
      title: "How does the Squirrel Bot engage with users?",
      content:
        "The bot engages users by responding to their DMs and comments. It can classify the user's message, ask for relevant information (like email or phone number), offer products, and even send coupons if no immediate action is taken.",
    },
    {
      title: "What kind of customer data does the Squirrel Bot collect?",
      content:
        "The bot is designed to collect valuable customer data such as full names, email addresses, and phone numbers directly from chat interactions. It can also infer user preferences based on interactions.",
    },
    {
      title: "How does the bot handle product inquiries?",
      content:
        "The Squirrel Bot can automatically deliver product information. If a user asks about a specific product (e.g., \"Tell me about the blue shoes\"), the bot can provide details like the product name, description, price, an image, and a link to purchase. If multiple products match a query, it can offer options.",
    },
    {
      title: "What is AI-based Lead Classification?",
      content:
        "This feature uses AI to analyze user interactions and identify their purchase intent. Users are categorized into:\n- Hot Leads: Ready to purchase or show strong buying intent.\n- Warm Leads: Interested and ask questions but may be hesitant.\n- Cold Leads: Browsing, non-committal, or not interested.\nThis helps prioritize sales follow-ups and tailor engagement strategies.",
    },
    {
      title: "How does user segmentation work?",
      content:
        "The bot categorizes users into segments based on their interaction history and behavior. Segments can include:\n- New Users\n- Interested Users (interacted, clicked links, but no purchase)\n- Converted Users (completed a purchase)\n- Inactive Users\nThis allows for more personalized messaging and targeted campaigns.",
    },
    {
      title: "Can the Squirrel Bot send discounts or coupons?",
      content:
        "Yes, it has a coupon and discount triggering system. For example, if a user clicks a product link but doesn't purchase within a set time, the bot can automatically send a follow-up message with a discount code to encourage conversion. It can also offer discounts if a user explicitly asks for one.",
    },
    {
      title: "What are the benefits of using the Chat Interaction Analytics feature?",
      content:
        "Chat Interaction Analytics helps you understand how users are engaging with the bot. It tracks metrics like the number of users initiating conversations, total messages exchanged, average session length, product link clicks, and drop-off points. This data helps identify popular products, conversation bottlenecks, and guides future campaign strategies.",
    },
    {
      title: "How is user information stored?",
      content:
        "The project document mentions that user data (full name, email, phone number) is \"stored securely for future follow-up or analysis.\"",
    },
    {
      title: "Can the bot handle incomplete information from users?",
      content:
        "Yes, if a user provides incomplete information (e.g., only a first name), the bot can intelligently ask follow-up questions to complete the user's profile.",
    },
  ];

  return (
    <motion.div
      className="min-h-screen flex flex-col  from-slate-50 to-stone-100 font-sans" // Added a subtle gradient background and base font
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.main
        className="flex-grow px-4 sm:px-6 py-12" // Adjusted padding for responsiveness
        variants={containerVariants} // This might be redundant if parent already handles stagger, but fine
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-16" // Increased bottom margin
            variants={containerVariants} // Same as above, potentially redundant
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-800 mb-4" // Adjusted font weight and color
              variants={headerVariants}
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto" // Adjusted text color
              variants={textVariants}
            >
              Have another question? Please contact our team!
            </motion.p>
          </motion.div>

          <motion.div
            variants={accordionVariants}
            initial="hidden" // Initial state for the accordion container
            whileInView="visible" // Animate when in view
            viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is visible, once
          >
            <Accordion items={faqItems} />
          </motion.div>
        </div>
      </motion.main>
       {/* Optional Footer Example
      <footer className="text-center py-8 text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Squirrel Inc. All rights reserved.</p>
      </footer> */}
    </motion.div>
  );
};

export default FAQPage;
