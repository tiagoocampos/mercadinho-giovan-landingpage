import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsappLink, CONTACTS } from "@/lib/whatsapp";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-yellow/20 bg-brand-blue-dark/95 backdrop-blur supports-[backdrop-filter]:bg-brand-blue-dark/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="#inicio" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo Mercadinho do Giovan"
            width={40}
            height={40}
            className="rounded-full ring-2 ring-brand-yellow"
            priority
          />
          <span className="hidden text-sm font-bold leading-tight text-white sm:block">
            Mercadinho
            <br />
            do Giovan
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/90 transition-colors hover:text-brand-yellow"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          render={
            <a
              href={buildWhatsappLink(CONTACTS.giovan.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
          className="bg-brand-yellow text-brand-blue-dark font-semibold hover:bg-brand-yellow-dark"
        >
          <MessageCircle className="size-4" />
          <span className="hidden sm:inline">Fale no WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </Button>
      </div>
    </header>
  );
}
