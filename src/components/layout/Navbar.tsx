"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container>
        <nav
          className={cn(
            "mt-5 flex h-16 items-center justify-between rounded-full border transition-all duration-300",
            isScrolled
              ? "border-white/10 bg-black/70 backdrop-blur-2xl shadow-2xl px-6"
              : "border-white/10 bg-white/5 backdrop-blur-xl px-6"
          )}
        >
          {/* Logo */}

          <Logo />

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-white/75 transition hover:text-[#D4AF37]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="#signin"
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              Sign In
            </Link>

            <Button href="#contact">
              Book Consultation
            </Button>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white lg:hidden"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}

        <div
          className={cn(
            "overflow-hidden transition-all duration-300 lg:hidden",
            isOpen
              ? "mt-4 max-h-[500px]"
              : "max-h-0"
          )}
        >
          <div className="rounded-3xl border border-white/10 bg-[#111111]/95 p-6 backdrop-blur-xl">
            <div className="flex flex-col gap-5">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-white/80 transition hover:text-[#D4AF37]"
                >
                  {item.label}
                </Link>
              ))}

              <hr className="border-white/10" />

              <Link
                href="#signin"
                className="text-base font-medium text-white/70"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>

              <Button
                href="#contact"
                className="w-full"
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}