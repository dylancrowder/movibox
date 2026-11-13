import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  currentPage: string;
  inverted?: boolean;
}

export function Breadcrumb({
  items,
  currentPage,
  inverted = false,
}: BreadcrumbProps) {
  const textColor = inverted ? "text-white/80" : "text-foreground/70";
  const currentPageColor = inverted ? "text-white" : "text-foreground";
  const hoverColor = inverted ? "hover:text-white" : "hover:text-primary";

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex flex-wrap items-center gap-2 text-sm ${textColor}`}
    >
      <Link
        href="/"
        className={`${hoverColor} transition-colors`}
      >
        Inicio
      </Link>

      {items.map((item) => (
        <div key={item.href} className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <Link
            href={item.href}
            className={`${hoverColor} transition-colors`}
          >
            {item.label}
          </Link>
        </div>
      ))}

      <div className="flex items-center gap-2">
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
        <span
          aria-current="page"
          className={`${currentPageColor} font-medium`}
        >
          {currentPage}
        </span>
      </div>
    </nav>
  );
}
