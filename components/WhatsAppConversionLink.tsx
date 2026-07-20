"use client";

import Link from "next/link";
import { CSSProperties, ReactNode } from "react";

interface WhatsAppConversionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  title?: string;
  style?: CSSProperties;
}

export function WhatsAppConversionLink({
  href,
  children,
  className,
  target = "_blank",
  title,
  style,
}: WhatsAppConversionLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel="noopener noreferrer"
      className={className}
      title={title}
      style={style}
      onClick={() => {
        if (typeof window !== "undefined" && (window as typeof window & { gtag?: Function }).gtag) {
          (window as typeof window & { gtag: Function }).gtag("event", "conversion", {
            send_to: "AW-18195477517/1A3_CLSE7tMcEI3oo-RD",
          });
        }
      }}
    >
      {children}
    </Link>
  );
}
