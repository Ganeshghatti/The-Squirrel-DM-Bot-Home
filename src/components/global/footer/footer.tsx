"use client";
import { LinkedinIcon, Mail, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    <footer className="bg-white ">
      <div className="max-w-7xl md:px-4 my-16   p-4 mx-auto mb-0">
        <div className="grid grid-cols-2 sm:grid-cols-[1fr_1.5fr] lg:grid-cols-[1fr_1fr_1fr_1.9fr] gap-4">
          {footerData.map((column, index) => (
            <FooterColumn
              key={index}
              title={column.title}
              links={column.links}
            />
          ))}
          <div className=" flex flex-col  mb-4 sm:mb-0   gap-2 overflow-hidden ">
            <div className="flex flex-row items-center  xl:flex-row  gap-1  xl:items-center">
              <Image
                src={"/assets/images/logo.png"}
                alt="Logo"
                quality={100}
                height={64}
                width={80}
                className="h-12 w-16 sm:h-16 sm:w-20"
              />
              <span className="text-black text-nowrap font-medium  text-lg sm:text-5xl">
                The Squirrel
              </span>
            </div>
            <p className="text-[var(--neutral-400)] text-sm sm:text-base max-w-[23rem] ">
              Automate and enhance client communication via Instagram DMs using
              AI
            </p>
            <div>
              <p className="text-[var(--neutral-400)] text-sm sm:text-base flex flex-row items-center cursor-pointer gap-3">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:info@thesquirrel.tech"
                  target="_blank"
                  className="text-sm sm:text-base hover:underline"
                >
                  info@thesquirrel.tech
                </a>
              </p>
              <p className="text-[var(--neutral-400)] text-sm sm:text-base flex flex-row items-center cursor-pointer gap-3">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+91 94496 10077"
                  className="text-sm sm:text-base hover:underline"
                >
                  +91 94496 10077
                </a>
              </p>

            </div>

          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col min-[440px]:flex-row justify-between items-center gap-3  flex-wrap">
          <div className=" sm:mb-0 flex gap-1 min-[440px]:gap-2 items-center justify-center">
            <Image
              src={"/assets/images/logo.png"}
              quality={100}
              height={40}
              width={48}
              alt="Logo"
              className="h-6 w-8 sm:h-8 sm:w-10"
            />
            <span className="text-black font-semibold text-base sm:text-xl">
              The Squirrel
            </span>
          </div>
          <div className="text-center  text-slate-500 text-sm">
            <Link href="https://thesquirrel.tech/">
              &copy; {new Date().getFullYear()} Squirrel Inc.
            </Link>
          </div>
          <div className="flex space-x-3 sm:space-x-6">
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
