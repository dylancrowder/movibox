import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import wsp from "@/public/images/iconos/whatsapp.webp";

export default function HeroButtons() {
  return (
    <div className="mt-8 flex justify-center gap-4">
      {/* WhatsApp */}
      <Button
        asChild
        size="lg"
        className="
          bg-[#25D366] hover:bg-[#20BD5A]
          text-white
          font-semibold
          rounded-lg
          flex
          items-center
          gap-3
          shadow-none
          border
          border-black
        "
      >
        <Link
          href="https://wa.me/5493512586221"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={wsp}
            alt="Consultar por WhatsApp"
            width={28}
            height={28}
            priority
          />
          WhatsApp
        </Link>
      </Button>

      {/* Llamar */}
      <Button
        asChild
        size="lg"
        className="
          bg-slate-100
          hover:bg-slate-100
          text-slate-900
          font-semibold
          rounded-lg
          flex
          items-center
          gap-2
          shadow-none
          border
          border-black
        "
      >
        <Link href="tel:+5493512586221">
          <Phone className="w-5 h-5" />
          Llamar ahora
        </Link>
      </Button>
    </div>
  );
}
