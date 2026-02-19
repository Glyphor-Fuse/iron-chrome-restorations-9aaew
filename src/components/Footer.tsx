import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-background border-t border-border/10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="inline-block mb-6">
               <span className="font-display text-3xl font-bold tracking-wider text-foreground">
                IRON <span className="text-primary">&</span> CHROME
              </span>
            </a>
            <p className="text-muted-foreground max-w-sm mb-6">
              Restoring the American dream, one bolt at a time. Serving collectors and enthusiasts worldwide from our Detroit headquarters.
            </p>
            <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground hover:bg-background/10">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground hover:bg-background/10">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-foreground font-bold mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-4 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Full Restorations</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Engine Building</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Custom Paint</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Upholstery</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Fabrication</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-foreground font-bold mb-6 uppercase tracking-wider">Contact</h4>
             <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary"/>
                    <span>(313) 555-0199</span>
                </li>
                 <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary"/>
                    <span>builds@ironchrome.com</span>
                </li>
                <li className="mt-4 text-sm leading-relaxed">
                    1969 Woodward Ave<br/>
                    Detroit, MI 48201
                </li>
             </ul>
          </div>
        </div>

        <div className="border-t border-border/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© 2024 Iron & Chrome Restorations. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-foreground">Privacy Policy</a>
                <a href="#" className="hover:text-foreground">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
