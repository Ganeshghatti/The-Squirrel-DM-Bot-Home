"use client";

import Automation from "@/components/icon/automation";
import Content from "@/components/icon/content";
import RealTime from "@/components/icon/realTime";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { BarChart, Clock, Pen } from "lucide-react";
import Link from "next/link";

const FeatureSection = () => {
  const features = [
    {
      icon: <Content />,
      title: "Write High-Quality Content",
      description: "Generate blogs, headlines, emails, and more—instantly.",
    },
    {
      icon: <Automation/>,
      title: "Save Time with Automation",
      description:
        "Let AI handle repetitive tasks so you can focus on what matters.",
    },
    {
      icon: <RealTime/>,
      title: "Track Performance in Real-Time",
      description: "Get insights into what's working—and what's not.",
    },
  ];

  return (
    <section className="md:py-20 px-4">
      <div className="md:max-w-4xl lg:max-w-7xl mx-auto grid grid-cols-1  lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-center md:text-start font-medium mb-4 md:mb-6">
            Where smart tools meet simple solutions
          </h2>
          <p className="text-[var(--neutral-400)] mb-6 md:mb-8 text-base md:text-lg">
            Quessia provides smart, intuitive tools to help you move faster,
            work smarter, and scale without the stress.
          </p>
          <Link
            href="/learn-more"
            className="bg-primary hover:bg-primary/80 text-white px-5 py-2 md:px-7 md:py-3 rounded-full font-medium inline-block transition-colors"
          >
            Learn More
          </Link>
        </motion.div>

        <div className="space-y-5 md:space-y-8">
          {features.map((feature, index) => (
            <>
              
              <motion.div
                key={index}
                className="flex gap-4 md:gap-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-foreground text-white p-3 rounded-full w-14 h-14  flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--neutral-400)] text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              </motion.div>

              <motion.div
                key={index}
                className="flex gap-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-[#8F8F923D] h-[1px] w-full rounded-full"></div>
              </motion.div>

            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
