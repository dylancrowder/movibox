"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import logo from "../public/images/iconos/logo-movibox.svg";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(
        currentScrollY < lastScrollY.current || currentScrollY < 50
      );
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  const baseLinkClass =
    "relative font-semibold text-sm uppercase tracking-[0.14em] transition-colors after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-200 after:content-['']";

  const linkClass = (href: string) =>
    pathname === href
      ? `${baseLinkClass} text-primary after:scale-x-100`
      : `${baseLinkClass} text-foreground/70 hover:text-primary hover:after:scale-x-100`;

  const linkClassMobile = (href: string) =>
    pathname === href
      ? "text-primary font-semibold text-lg"
      : "text-foreground/80 font-semibold text-lg hover:text-primary transition-colors";

  return (
    <header
      itemScope
      itemType="https://schema.org/Organization"
      className={`fixed top-0 left-0 right-0 z-50 border-b-2 border-primary/10 bg-white/85 shadow-lg shadow-primary/5 backdrop-blur-md transition-transform duration-300 supports-[backdrop-filter]:bg-white/75 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <meta itemProp="name" content="Movibox Logística" />
      <meta itemProp="url" content="https://transporterojo.com.ar" />

      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="/"
            itemProp="logo"
            title="Ir al inicio"
            className="flex items-center"
          >
            <Image
              src={logo}
              alt="Movibox Logística - Empresa de mudanzas y transporte en Córdoba"
              width={180}
              height={45}
              className="object-contain"
              quality={60}
              fetchPriority="high"
              priority
            />
          </Link>

          {/* Navegación escritorio */}
          <nav
            className="hidden items-center space-x-8 md:flex"
            role="navigation"
            aria-label="Navegación principal"
          >
            <Link href="/" className={linkClass("/")}>
              Inicio
            </Link>
            <Link href="/mudanzas" className={linkClass("/mudanzas")}>
              Mudanzas
            </Link>
            <Link href="/guardamuebles" className={linkClass("/guardamuebles")}>
              Guardamuebles
            </Link>
            <Link href="/blog" className={linkClass("/blog")}>
              Blog
            </Link>
            <Link href="/faq" className={linkClass("/faq")}>
              FAQ
            </Link>
            <Link href="/contacto" className={linkClass("/contacto")}>
              Contacto
            </Link>
          </nav>

          {/* Menú móvil */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                className="text-foreground hover:bg-primary/10 hover:text-primary"
                aria-label="Abrir menú"
              >
                <Menu className="!h-6 !w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-white text-foreground"
              aria-label="Menú móvil"
            >
              <div className="flex flex-col gap-6 mt-10">
                <Link
                  href="/"
                  onClick={handleLinkClick}
                  className={linkClassMobile("/")}
                  aria-current={pathname === "/" ? "page" : undefined}
                >
                  Inicio
                </Link>
                <Link
                  href="/mudanzas"
                  onClick={handleLinkClick}
                  className={linkClassMobile("/mudanzas")}
                  aria-current={
                    pathname === "/mudanzas" ? "page" : undefined
                  }
                >
                  Mudanzas
                </Link>
                <Link
                  href="/guardamuebles"
                  onClick={handleLinkClick}
                  className={linkClassMobile("/guardamuebles")}
                  aria-current={
                    pathname === "/guardamuebles" ? "page" : undefined
                  }
                >
                  Guardamuebles
                </Link>
                <Link
                  href="/blog"
                  onClick={handleLinkClick}
                  className={linkClassMobile("/blog")}
                  aria-current={
                    pathname === "/blog" ? "page" : undefined
                  }
                >
                  Blog
                </Link>
                <Link
                  href="/faq"
                  onClick={handleLinkClick}
                  className={linkClassMobile("/faq")}
                  aria-current={
                    pathname === "/faq" ? "page" : undefined
                  }
                >
                  FAQ
                </Link>
                <Link
                  href="/contacto"
                  onClick={handleLinkClick}
                  className={linkClassMobile("/contacto")}
                  aria-current={
                    pathname === "/contacto" ? "page" : undefined
                  }
                >
                  Contacto
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
