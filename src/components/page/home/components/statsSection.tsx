"use client";

import { motion } from "framer-motion";

interface Stat {
  number: string;
  label: string;
}
const StatsSection = () => {
  const stats: Stat[] = [
    {
      number: "75,000+",
      label: "Active users",
    },
    {
      number: "2M+",
      label: "AI-generated responses",
    },
    {
      number: "100+",
      label: "Features built",
    },
    {
      number: "99.9%",
      label: "Uptime guarantee",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        <div className=" hidden md:flex flex-wrap h-[100px]  justify-between   ">
          <Status index={0} stat={stats[0]} />
          <Bar />
          <Status index={1} stat={stats[1]} />
          <Bar />
          <Status index={2} stat={stats[2]} />
          <Bar />
          <Status index={3} stat={stats[3]} />
        </div>
        <div className="flex flex-col w-full md:hidden  h-[100px]  ">
          <div className="w-full flex flex-row justify-evenly">
            <Status index={0} stat={stats[0]} />
            {/* <Bar /> */}
            <Status index={1} stat={stats[1]} />
          </div>

          <div className="w-full flex flex-row justify-evenly mt-4">
            <Status index={2} stat={stats[2]} />
            {/* <Bar /> */}
            <Status index={3} stat={stats[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

function Status({ index, stat }: { index: number; stat: Stat }) {
  return (
    <motion.div
      key={index}
      className="text-center flex justify-evenly "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div>
        <div className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-2">
          {stat.number}
        </div>
        <div className="text-gray-600">{stat.label}</div>
      </div>
    </motion.div>
  );
}

function Bar() {
  return <div className=" h-[80%] w-[1px] bg-gray-200 "></div>;
}
