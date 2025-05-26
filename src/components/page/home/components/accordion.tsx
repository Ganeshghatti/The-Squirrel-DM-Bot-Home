"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ 
  title, 
  children, 
  isOpen, 
  onClick 
}) => {
  return (
    <div className={`border ${isOpen ? 'bg-[#FAFAFA]' : ''}  border-[#8F8F923D] rounded-3xl mb-4 overflow-hidden`}>
      <button
        className="w-full text-left p-5 flex justify-between items-center focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className=" text-lg sm:text-2xl font-bold">{title}</span>
        <span className="transition-transform duration-300">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-5 pt-0 text-[var(--neutral-400)] text-sm sm:text-base ">{children}</div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: {
    title: string;
    content: React.ReactNode;
  }[];
  defaultOpen?: number;
}

const Accordion: React.FC<AccordionProps> = ({ items, defaultOpen = 0 }) => {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpen);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onClick={() => handleItemClick(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;