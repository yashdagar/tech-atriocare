"use client"

import {useEffect, useState} from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Blog", href: "#blog" },
    { name: "Team", href: "#team" },
  ]

  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    setHeaderScrolled(window.scrollY > 100);
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const size = 0.8 * window.innerHeight;
      if (scrollY > size) {
        setHeaderScrolled(true);
      } else {
        setHeaderScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${headerScrolled? "bg-[#328c98]": "bg-white"} shadow-lg sticky top-0 z-50`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <div className="flex">
              <Image src="/logo.webp" width={64} height={64} alt="Tech Atriocare Logo" className="h-10" />
              <span className={`${headerScrolled? "text-white": "text-[#328c98]"} text-xl font-bold flex items-end mb-0.5 ml-1`}>
                TECH ATRIOCARE
              </span>
            </div>
          </Link>

            {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${headerScrolled? "text-white": "text-gray-900"} hover:text-[#328c98] px-3 py-2 text-sm font-bold transition-colors`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[#328c98] block px-3 py-2 text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
