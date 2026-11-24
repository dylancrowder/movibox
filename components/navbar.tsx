"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
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
    "relative whitespace-nowrap text-[13px] font-semibold tracking-[-0.01em] transition-colors after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-secondary after:transition-transform after:duration-200 after:content-['']";

  const linkClass = (href: string) =>
    pathname === href
      ? `${baseLinkClass} font-bold text-primary after:scale-x-100`
      : `${baseLinkClass} text-foreground/75 hover:text-primary hover:after:scale-x-100`;

  const navigationLinks = [
    { label: "Inicio", href: "/" },
    { label: "Mudanzas", href: "/mudanzas" },
    { label: "Fletes", href: "/fletes" },
    { label: "Guardamuebles", href: "/guardamuebles" },
    { label: "Blog", href: "/blog" },
    { label: "Preguntas frecuentes", href: "/faq" },
    { label: "Contacto", href: "/contacto" },
  ];

  const linkClassMobile = (href: string) =>
    pathname === href
      ? "text-primary font-bold text-lg"
      : "text-foreground/80 font-semibold text-lg hover:text-primary transition-colors";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-primary/10 bg-white/90 shadow-[0_8px_32px_rgba(22,57,84,0.07)] backdrop-blur-xl transition-transform duration-300 supports-[backdrop-filter]:bg-white/80 ${
        isVisible ? "translate-y-0" : "xl:-translate-y-full"
      }`}
    >
      <div className="container px-4 md:px-6">
        <div className="flex min-h-[76px] items-center justify-between gap-6 py-3">
          {/* Logo */}
          <Link
            href="/"
            title="Ir al inicio"
            className="flex items-center"
          >
            <Image
              src={logo}
              alt="Movibox Mudanzas - Empresa de mudanzas y transporte en Córdoba"
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
            className="hidden items-center gap-5 xl:flex"
            aria-label="Navegación principal"
          >
            {navigationLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={linkClass(href)}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>

          <Button asChild size="sm" className="hidden rounded-full px-5 shadow-md shadow-primary/15 xl:inline-flex">
            <Link href="/contacto">Solicitar presupuesto</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="xl:hidden">
              <Button
                variant="outline"
                size="icon"
                className="rounded-xl border-primary/15 text-primary hover:bg-primary/5"
                aria-label="Abrir menú"
              >
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="bg-white text-foreground">
              <SheetTitle className="sr-only">Navegación principal</SheetTitle>
              <nav className="mt-10 flex flex-col gap-5" aria-label="Navegación móvil">
                {navigationLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={handleLinkClick}
                    className={linkClassMobile(href)}
                    aria-current={pathname === href ? "page" : undefined}
                  >
                    {label}
                  </Link>
                ))}
                <Button asChild className="mt-3 w-full rounded-full">
                  <Link href="/contacto" onClick={handleLinkClick}>
                    Solicitar presupuesto
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
