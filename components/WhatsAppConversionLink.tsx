import Link from "next/link";
import { ReactNode } from "react";

interface WhatsAppConversionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
}

export function WhatsAppConversionLink({
  href,
  children,
  className,
  target = "_blank",
}: WhatsAppConversionLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </Link>
  );
}
