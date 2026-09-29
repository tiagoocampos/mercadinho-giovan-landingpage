"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InstagramIcon } from "@/components/site/icons";
import { buildWhatsappLink, CONTACTS, INSTAGRAM_URL } from "@/lib/whatsapp";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Cestas", href: "#cestas" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

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

        <div className="flex items-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram do Mercadinho do Giovan"
            className="hidden size-9 items-center justify-center rounded-full text-white/90 transition-colors hover:text-brand-yellow sm:flex"
          >
            <InstagramIcon className="size-5" />
          </a>
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
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="flex size-9 items-center justify-center rounded-full text-white/90 transition-colors hover:text-brand-yellow md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-brand-yellow/20 bg-brand-blue-dark px-4 py-3 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-brand-yellow"
            >
              {link.label}
            </a>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-brand-yellow"
          >
            <InstagramIcon className="size-4" />
            Instagram
          </a>
        </nav>
      )}
    </header>
  );
}
