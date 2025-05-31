import { LinkedinIcon, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
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
        {links.map(({ title, link }, index) => (
          <li key={index}>
            <a
              key={index}
              // target="_blank"
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
      title: "Features",
      links: [
        {
          title: "AI Chat",
          link: "#AI-Chat",
        },
        {
          title: "Smart DM Triggers",
          link: "#Triggers",
        },
        {
          title: "Quick Steps",
          link: "#QuickSteps",
        },
      ],
    },

    {
      title: "Legal & Policies",

      links: [
        {
          title: "Privacy Policy",
          link: "https://thesquirrel.tech/privacy-policy",
        },
        {
          title: "Terms of Service",
          link: "https://thesquirrel.tech/terms-and-conditions",
        },
      ],
    },
    {
      title: "Quick Links",
      links: [
        {
          title: "Home",
          link: "#",
        },
        {
          title: "Features",
          link: "#features",
        },
        {
          title: "FAQ",
          link: "#faq-page",
        },
        //
      ],
    },
  ];

  return (
    <footer className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.5fr] gap-4">
          {footerData.map((column, index) => (
            <FooterColumn
              key={index}
              title={column.title}
              links={column.links}
            />
          ))}
          <div className="hidden sm:flex flex-col  mb-4 sm:mb-0   gap-2 overflow-hidden ">
            <div className="flex flex-row items-center  xl:flex-row  gap-1  xl:items-center">
              <Image
                src={Logo}
                alt="Logo"
                className="h-12 w-16 sm:h-16 sm:w-20"
              />
              <span className="text-black text-nowrap font-medium  text-lg sm:text-5xl">
                The Squirrel
              </span>
            </div>
            <p>
              Automate and enhance client communication via Instagram DMs using
              AI
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-row sm:flex-row justify-between items-center gap-1  flex-wrap">
          <div className=" sm:mb-0 flex  gap-2 items-center justify-center">
            <Image src={Logo} alt="Logo" className="h-8 w-10 sm:h-10 sm:w-12" />
            <span className="text-black font-semibold text-lg sm:text-2xl">
              The Squirrel
            </span>
          </div>
          <div className="text-center  text-slate-500 text-sm">
            <Link href="https://thesquirrel.tech/">
              &copy; {new Date().getFullYear()} Squirrel Inc.
            </Link>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://x.com/thesquirrel_org"
              target="_blank"
              className="text-gray-500 hover:text-purple-600 transition-colors duration-200"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/the-squirrel-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-purple-600 transition-colors duration-200"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
