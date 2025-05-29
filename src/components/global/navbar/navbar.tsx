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

const Navbar = () => {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  return (
    <div className="absolute sm:fixed w-full top-1 z-50">
      <nav className="sm:w-fit sm:mx-auto px-3 sm:px-4 py-3 sm:py-3">
        <div className="hidden sm:flex max-w-7xl mx-auto bg-[#0F1116] rounded-full py-3 sm:py-2 px-3 sm:px-4  items-center justify-between">
          <div className="flex items-center space-x-4 sm:space-x-8">
            <Link href="/" className="flex items-center space-x-1 sm:space-x-2">
              <Image
                src={Logo}
                alt="Logo"
                
                className="h-8 w-8 sm:h-10 sm:w-10"
              />
              <span className="hidden sm:block text-white font-semibold text-sm sm:text-lg">
                Quessia
              </span>
            </Link>

            <div className="flex items-center space-x-4 sm:space-x-6 text-sm sm:text-base">
              <Link
                href="/about"
                className="text-white hover:text-gray-300 transition-colors text-sm sm:text-sm md:text-base"
              >
                About
              </Link>

              <div className="relative">
                <button
                  className="flex items-center text-white hover:text-gray-300 transition-colors text-sm sm:text-sm md:text-base"
                  onClick={() => setFeaturesOpen(!featuresOpen)}
                >
                  Features{" "}
                  <ChevronDown className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                </button>
                {featuresOpen && (
                  <div className="absolute mt-1 sm:mt-2 w-40 sm:w-48 bg-white rounded-md shadow-lg py-1 z-50 text-sm">
                    <Link
                      href="/features/chat"
                      className="block px-3 py-1.5 hover:bg-gray-100"
                    >
                      AI Chat
                    </Link>
                    <Link
                      href="/features/content"
                      className="block px-3 py-1.5 hover:bg-gray-100"
                    >
                      Content Generation
                    </Link>
                    <Link
                      href="/features/research"
                      className="block px-3 py-1.5 hover:bg-gray-100"
                    >
                      Research Assistant
                    </Link>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  className="flex items-center text-white hover:text-gray-300 transition-colors text-sm sm:text-sm md:text-base"
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                >
                  Solutions{" "}
                  <ChevronDown className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                </button>
                {solutionsOpen && (
                  <div className="absolute mt-1 sm:mt-2 w-40 sm:w-48 bg-white rounded-md shadow-lg py-1 z-50 text-sm">
                    <Link
                      href="/solutions/enterprise"
                      className="block px-3 py-1.5 hover:bg-gray-100"
                    >
                      Enterprise
                    </Link>
                    <Link
                      href="/solutions/education"
                      className="block px-3 py-1.5 hover:bg-gray-100"
                    >
                      Education
                    </Link>
                    <Link
                      href="/solutions/developers"
                      className="block px-3 py-1.5 hover:bg-gray-100"
                    >
                      Developers
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/partner"
                className="text-white hover:text-gray-300 transition-colors text-sm sm:text-sm md:text-base"
              >
                Partner
              </Link>
            </div>

            <Link
              href="/register"
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
              Quessia
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
                      Quessia
                    </span>
                  </div>
                  {/* <SheetClose asChild>
                    <button className="text-gray-500 hover:text-gray-700">
                      <X className="h-6 w-6" />
                    </button>
                  </SheetClose> */}
                </div>
              </SheetHeader>

              <div className="flex flex-col space-y-4 mt-8">
                {/* About Link */}
                <SheetClose asChild>
                  <Link
                    href="/about"
                    className="text-gray-700 hover:text-black transition-colors text-lg font-medium py-2"
                  >
                    About
                  </Link>
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
                        <Link
                          href="/features/chat"
                          className="block text-gray-600 hover:text-black transition-colors py-2"
                        >
                          AI Chat
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="/features/content"
                          className="block text-gray-600 hover:text-black transition-colors py-2"
                        >
                          Content Generation
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="/features/research"
                          className="block text-gray-600 hover:text-black transition-colors py-2"
                        >
                          Research Assistant
                        </Link>
                      </SheetClose>
                    </div>
                  )}
                </div>

                {/* Solutions Dropdown */}
                <div>
                  <button
                    className="flex items-center justify-between w-full text-gray-700 hover:text-black transition-colors text-lg font-medium py-2"
                    onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  >
                    Solutions
                    <ChevronDown
                      className={`ml-1 h-5 w-5 transform transition-transform ${
                        mobileSolutionsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileSolutionsOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      <SheetClose asChild>
                        <Link
                          href="/solutions/enterprise"
                          className="block text-gray-600 hover:text-black transition-colors py-2"
                        >
                          Enterprise
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="/solutions/education"
                          className="block text-gray-600 hover:text-black transition-colors py-2"
                        >
                          Education
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="/solutions/developers"
                          className="block text-gray-600 hover:text-black transition-colors py-2"
                        >
                          Developers
                        </Link>
                      </SheetClose>
                    </div>
                  )}
                </div>

                {/* Partner Link */}
                <SheetClose asChild>
                  <Link
                    href="/partner"
                    className="text-gray-700 hover:text-black transition-colors text-lg font-medium py-2"
                  >
                    Partner
                  </Link>
                </SheetClose>

                {/* Register Button */}
                <div className="pt-4">
                  <SheetClose asChild>
                    <Link
                      href="/register"
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
