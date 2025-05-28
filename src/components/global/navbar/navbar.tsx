"use client";

import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/icon/logo";

import {
  Sheet,
  SheetClose,
  SheetContent,
  // SheetDescription,
  SheetFooter,
  SheetHeader,
  // SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <div className="absolute sm:fixed w-full top-1 z-50">
      <nav className="sm:w-fit sm:mx-auto px-3 sm:px-4 py-3 sm:py-3">
        <div className="hidden sm:flex max-w-7xl mx-auto bg-[#0F1116] rounded-full py-3 sm:py-2 px-3 sm:px-4  items-center justify-between">
          <div className="flex items-center space-x-4 sm:space-x-8">
            <Link href="/" className="flex items-center space-x-1 sm:space-x-2">
              <Logo/>
              <span className="hidden sm:block text-white font-semibold text-sm sm:text-lg">Quessia</span>
            </Link>

            <div className="flex items-center space-x-4 sm:space-x-6 text-sm sm:text-base">
              <Link href="/about" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-sm md:text-base">
                About
              </Link>

              <div className="relative">
                <button
                  className="flex items-center text-white hover:text-gray-300 transition-colors text-sm sm:text-sm md:text-base"
                  onClick={() => setFeaturesOpen(!featuresOpen)}
                >
                  Features <ChevronDown className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                </button>
                {featuresOpen && (
                  <div className="absolute mt-1 sm:mt-2 w-40 sm:w-48 bg-white rounded-md shadow-lg py-1 z-50 text-sm">
                    <Link href="/features/chat" className="block px-3 py-1.5 hover:bg-gray-100">
                      AI Chat
                    </Link>
                    <Link href="/features/content" className="block px-3 py-1.5 hover:bg-gray-100">
                      Content Generation
                    </Link>
                    <Link href="/features/research" className="block px-3 py-1.5 hover:bg-gray-100">
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
                  Solutions <ChevronDown className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                </button>
                {solutionsOpen && (
                  <div className="absolute mt-1 sm:mt-2 w-40 sm:w-48 bg-white rounded-md shadow-lg py-1 z-50 text-sm">
                    <Link href="/solutions/enterprise" className="block px-3 py-1.5 hover:bg-gray-100">
                      Enterprise
                    </Link>
                    <Link href="/solutions/education" className="block px-3 py-1.5 hover:bg-gray-100">
                      Education
                    </Link>
                    <Link href="/solutions/developers" className="block px-3 py-1.5 hover:bg-gray-100">
                      Developers
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/partner" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-sm md:text-base">
                Partner
              </Link>
            </div>

            <Link href="/register" className="bg-white hidden sm:block text-black font-medium rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base hover:bg-gray-100 transition-colors ">
              Register Now
            </Link>
          </div>
        </div>




        <div className="flex justify-between items-center sm:hidden p-3">
          <Link href="/" className="flex items-center space-x-1 sm:space-x-2">
            <Logo/>
            <span className="text-black font-semibold text-sm sm:text-lg">Quessia</span>
          </Link>

           <Sheet>
      <SheetTrigger asChild>
        <button className="text-black hover:text-gray-600 transition-colors">
            <Menu className="h-8 w-8" />
          </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          
        </SheetHeader>
        <div className="grid gap-4 py-4">
          
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>

          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
