import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import logo from "../public/images/iconos/logo-movibox.svg";

const quickLinks = [
  { label: "Inicio", href: "/" },
  { label: "Mudanzas", href: "/mudanzas" },
  { label: "Guardamuebles", href: "/guardamuebles" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contacto", href: "/contacto" },
];

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "+54 9 351 258-6221",
    href: "tel:+5493512586221",
  },
  {
    icon: Mail,
    label: "Email",
    value: "movibox.cba@gmail.com",
    href: "mailto:movibox.cba@gmail.com",
  },
  {
    icon: MapPin,
    label: "Dirección",
    value: "Camino Chacra de la Merced Km 1/2, Córdoba, Argentina",
  },
];

const Footer = () => {
  return (
    <footer className="border-t-2 border-primary/40 bg-white" style={{ contain: 'layout style paint' }}>
      <div className="container px-4 md:px-6 py-24 min-h-[400px]">
        {/* TOP */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.6fr_1fr_1fr]">
          {/* BRAND */}
          <div className="space-y-8">
            <Image
              src={logo}
              alt="Movibox Mudanzas"
              width={220}
              height={60}
              className="w-40 md:w-52 h-[60px] object-contain"
              quality={60}
            />

            <p className="max-w-sm text-sm leading-relaxed text-foreground/70">
              Mudanzas residenciales, departamentos y oficinas con seguimiento personalizado.
              Guardamuebles seguro con vigilancia 24/7 e inventario digital.
            </p>
          </div>

          {/* NAV */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">
              Navegación
            </h3>

            <nav className="flex flex-col gap-3 text-sm">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-medium text-foreground/70 transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CONTACT */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">
              Contacto directo
            </h3>

            <div className="space-y-4 text-sm text-foreground/70">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-secondary/80 text-white shadow-md shadow-secondary/30">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>

                  {href ? (
                    <a
                      href={href}
                      className="flex flex-col transition-colors hover:text-primary"
                    >
                      <span className="text-xs font-semibold uppercase tracking-widest text-foreground/80">
                        {label}
                      </span>
                      <span className="font-semibold text-foreground/90">
                        {value}
                      </span>
                    </a>
                  ) : (
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold uppercase tracking-widest text-foreground/80">
                        {label}
                      </span>
                      <span className="font-semibold text-foreground/90">
                        {value}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 flex flex-col items-center gap-2 border-t border-muted pt-10 text-center text-xs text-foreground/70 md:flex-row md:justify-between md:text-left">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-bold text-foreground">
              Movibox Mudanzas
            </span>
            . Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4">
            <p>
              Desarrollado por{" "}
              <a
                href="https://www.linkedin.com/in/dylan-crowder-681226277/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Dylan
              </a>
            </p>

            <a
              href="https://www.instagram.com/moviboxcba/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Movibox"
              className="text-foreground/50 transition-colors hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
