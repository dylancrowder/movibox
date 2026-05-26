import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  currentPage: string;
}

export function Breadcrumb({ items, currentPage }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-2 text-sm text-foreground/70"
    >
      <Link
        href="/"
        className="hover:text-primary transition-colors"
      >
        Inicio
      </Link>

      {items.map((item, index) => (
        <div key={item.href} className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          {index === items.length - 1 ? (
            <span className="text-foreground font-medium">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className="hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}

      <div className="flex items-center gap-2">
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
        <span className="text-foreground font-medium">{currentPage}</span>
      </div>
    </nav>
  );
}
