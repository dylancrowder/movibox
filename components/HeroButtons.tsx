import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import wsp from "@/public/images/iconos/whatsapp.webp";
import { WhatsAppConversionLink } from "@/components/WhatsAppConversionLink";

interface HeroButtonsProps {
  whatsappMessage?: string;
}

export default function HeroButtons({
  whatsappMessage = "Hola, estoy interesado en sus servicios. ¿Podrían brindarme información y ayudarme con una cotización?",
}: HeroButtonsProps) {
  const whatsappUrl = `https://wa.me/5493512586221?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
      {/* WhatsApp - Verde */}
      <Button
        asChild
        variant="whatsapp"
        size="lg"
      >
        <WhatsAppConversionLink
          href={whatsappUrl}
          className="flex items-center gap-3"
        >
          <Image
            src={wsp}
            alt="WhatsApp"
            width={32}
            height={32}
            priority
          />
          WhatsApp
        </WhatsAppConversionLink>
      </Button>

      {/* Llamar - Secondary (visible on dark overlay) */}
      <Button
        asChild
        variant="secondary"
        size="lg"
      >
        <Link href="tel:+5493512586221" className="flex items-center gap-2">
          <Phone className="w-5 h-5" />
          Llamar ahora
        </Link>
      </Button>
    </div>
  );
}
