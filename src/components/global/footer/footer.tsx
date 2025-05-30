import React from 'react';
import { Instagram,  LinkedinIcon, Twitter } from 'lucide-react';
import Image from 'next/image';
import Logo from "../../../../assets/images/logo.png";
// import Logo from './Logo';

interface FooterColumnProps {
  title: string;
  links: { title: string; link: string }[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="mb-8 md:mb-0">
      <h3 className="font-bold text-[var(--neutral-400)] mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map(({title, link}, index) => (
          <li key={index}>
            <a 
              key={index}
              target="_blank"
              href={link} 
              className="text-[var(--neutral-400)] hover:text-primary transition-colors duration-200"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer: React.FC = () => {
  const footerData = [
    {
      title: 'Company',
      links: [
        {
          title: 'Our Mission',
          link: "#"
        },
        {
          title: 'Our Vision',
          link: "#"
        },
        {
          title: 'Our Story',
          link: "#"
        },
        {
          title: 'Meet Our Team',
          link: "#"
        },
      ]
    },
    {
      title: 'Features',
      links: [
        {
          title: 'AI Chat',
          link: "#"
        },
        {
          title: 'Auto User Data Collection',
          link: "#"
        },
        {
          title: 'Chat Interaction Analytics',
          link: "#"
        },
        {
          title: 'Smart Coupon System',
          link: "#"
        },
      ]

      
    },
  
    {
      title: 'Legal & Policies',

      links : [
        {
          title: 'Privacy Policy',
          link: "#"
        },
        {
          title: 'Terms of Service',
          link: "#"
        },
        {
          title: 'Cookie Policy',
          link: "#"
        },
        {
          title: 'Data Protection',
          link: "#"
        },
      ]
    },
      {
      title: 'Quick Links',
      links : [
        {
          title: 'Blog',
          link: "#"
        },
        {
          title: 'Case Studies',
          link: "#"
        },
        {
          title: 'Whitepapers',
          link: "#"
        },
        {
          title: 'eBooks',
          link: "#"
        },
      ]
    },
  ];

  return (
    <footer className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerData.map((column, index) => (
            <FooterColumn 
              key={index} 
              title={column.title} 
              links={column.links} 
            />
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0 flex gap-2 items-center">
              <Image
                src={Logo}
                alt="Logo"
                className="h-8 w-8 sm:h-10 sm:w-10"
              />
              <span className="text-black font-semibold text-sm sm:text-lg">Squirrel</span>
          </div>
          <div className="flex space-x-6">
            {/* <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors duration-200">
              <Instagram size={20} />
            </a> */}
            <a href="https://x.com/thesquirrel_org" className="text-gray-500 hover:text-purple-600 transition-colors duration-200">
              <Twitter size={20} />
            </a>
            <a href="https://www.linkedin.com/company/the-squirrel-tech" className="text-gray-500 hover:text-purple-600 transition-colors duration-200">
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;