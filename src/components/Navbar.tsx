import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Wrench } from "lucide-react";

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      // Show on scroll up or at top
      if (current < 50) {
        setVisible(true);
      } else if (current > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(current);
    }
  });

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Restoration Journey", href: "#restoration" },
    { name: "Gallery", href: "#gallery" },
    { name: "Team", href: "#team" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 inset-x-0 z-50 h-20 border-b border-border/10 bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo Wordmark */}
        <a href="#" className="flex items-center gap-2 group">
          <Wrench className="h-6 w-6 text-primary transition-transform group-hover:rotate-45" />
          <span className="font-display text-2xl font-bold tracking-wider text-foreground">
            IRON <span className="text-primary">&</span> CHROME
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Book Consultation
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full">Book Consultation</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
