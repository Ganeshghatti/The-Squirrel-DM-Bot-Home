"use client";

import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../../../assets/images/logo.png";

import {
  Sheet,
  SheetClose,
  SheetContent,
  // SheetDescription,
  // SheetFooter,
  SheetHeader,
  // SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Navbar = () => {
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);

  return (
    <div className="absolute sm:fixed w-full top-1 z-50">
      <nav className="sm:w-fit sm:mx-auto px-3 sm:px-4 py-3 sm:py-3">
        <div className="hidden sm:flex max-w-7xl mx-auto bg-[#010205] rounded-full py-3 sm:py-2 px-3 sm:px-3  items-center justify-between">
          <div className="flex items-center space-x-4 sm:space-x-8">
            <Link href="/" className="flex items-center space-x-1 sm:space-x-2">
              <Image
                src={Logo}
                alt="Logo"
                className="h-8 w-10 sm:h-10 sm:w-12"
              />
              <span className="hidden sm:block text-white font-semibold text-sm sm:text-lg">
                The Squirrel
              </span>
            </Link>

            <div className="flex items-center space-x-4 sm:space-x-6 text-sm sm:text-base">
              <Link
                href="#about"
                className="text-white hover:text-gray-300 transition-colors text-sm sm:text-sm md:text-base"
              >
                About
              </Link>
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>
                    <span className="text-white hover:text-gray-300 transition-colors text-sm sm:text-sm md:text-base">
                      Features{" "}
                    </span>
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem><a href="#AI-Chat">AI Chat</a></MenubarItem>
                    <MenubarItem><a href="#Triggers">Smart DM Triggers</a></MenubarItem>
                    <MenubarItem><a href="#QuickSteps">Quick Steps</a></MenubarItem>
                  
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
              

              <Link
                href="https://www.thesquirrel.tech/#contact"
                className="text-white hover:text-gray-300 transition-colors text-sm sm:text-sm md:text-base"
              >
                Contact
              </Link>
            </div>

            <Link
              href="https://dashboard.thesquirrel.tech"
              target="_blank"
              className="bg-white hidden sm:block text-black font-medium rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base hover:bg-gray-100 transition-colors "
            >
              Register Now
            </Link>
          </div>
        </div>

        <div className="flex justify-between items-center sm:hidden p-3">
          <Link href="/" className="flex items-center space-x-1 sm:space-x-2">
            <Image src={Logo} alt="Logo" className="h-8 w-8 sm:h-10 sm:w-10" />
            <span className="text-black font-semibold text-sm sm:text-lg">
              The Squirrel
            </span>
          </Link>

        <Sheet>
  <SheetTrigger asChild>
    <button className="text-black hover:text-gray-600 transition-colors">
      <Menu className="h-8 w-8" />
    </button>
  </SheetTrigger>
  <SheetContent className="w-[300px] sm:w-[400px]">
    <SheetHeader className="text-left">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src={Logo}
            alt="Logo"
            className="h-8 w-8 sm:h-10 sm:w-10"
          />
          <span className="text-black font-semibold text-lg">
            The Squirrel
          </span>
        </div>
      </div>
    </SheetHeader>

    <div className="flex flex-col space-y-4 mt-8">
      {/* About Link */}
      <SheetClose asChild>
        <button
          onClick={() =>
            setTimeout(() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }, 100)
          }
          className="text-gray-700 hover:text-black transition-colors text-lg font-medium py-2 text-left"
        >
          About
        </button>
      </SheetClose>

      {/* Features Dropdown */}
      <div>
        <button
          className="flex items-center justify-between w-full text-gray-700 hover:text-black transition-colors text-lg font-medium py-2"
          onClick={() => setMobileFeaturesOpen(!mobileFeaturesOpen)}
        >
          Features
          <ChevronDown
            className={`ml-1 h-5 w-5 transform transition-transform ${
              mobileFeaturesOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {mobileFeaturesOpen && (
          <div className="ml-4 mt-2 space-y-2">
            <SheetClose asChild>
              <button
                onClick={() =>
                  setTimeout(() => {
                    document.getElementById("AI-Chat")?.scrollIntoView({ behavior: "smooth" });
                  }, 300)
                }
                className="block text-gray-600 hover:text-black transition-colors py-2 text-left w-full"
              >
                AI Chat
              </button>
            </SheetClose>
            <SheetClose asChild>
              <button
                onClick={() =>
                  setTimeout(() => {
                    document.getElementById("Triggers")?.scrollIntoView({ behavior: "smooth" });
                  }, 300)
                }
                className="block text-gray-600 hover:text-black transition-colors py-2 text-left w-full"
              >
                Smart DM Triggers
              </button>
            </SheetClose>
            <SheetClose asChild>
              <button
                onClick={() =>
                  setTimeout(() => {
                    document.getElementById("QuickSteps")?.scrollIntoView({ behavior: "smooth" });
                  }, 300)
                }
                className="block text-gray-600 hover:text-black transition-colors py-2 text-left w-full"
              >
                Quick Steps
              </button>
            </SheetClose>
          </div>
        )}
      </div>

      {/* Contact Link (external) */}
      <SheetClose asChild>
        <Link
          href="https://www.thesquirrel.tech/#contact"
          className="text-gray-700 hover:text-black transition-colors text-lg font-medium py-2"
        >
          Contact
        </Link>
      </SheetClose>

      {/* Register Button */}
      <div className="pt-4">
        <SheetClose asChild>
          <Link
            href="https://dashboard.thesquirrel.tech"
            className="block w-full bg-black text-white font-medium rounded-full px-6 py-3 text-center hover:bg-gray-800 transition-colors"
          >
            Register Now
          </Link>
        </SheetClose>
      </div>
    </div>
  </SheetContent>
</Sheet>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
