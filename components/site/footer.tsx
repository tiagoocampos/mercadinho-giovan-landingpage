import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { buildWhatsappLink, CONTACTS } from "@/lib/whatsapp";

const ADDRESS =
  "Rua Bronislau Chycalski, 304, São Francisco, Reserva - PR, 84320-000";

export function Footer() {
  const year = new Date().getFullYear();
  const contacts = [CONTACTS.giovan, CONTACTS.anaila];

  return (
    <footer className="mt-auto bg-brand-blue-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Image
              src="/logo.png"
              alt="Logo Mercadinho do Giovan"
              width={56}
              height={56}
              className="rounded-full ring-2 ring-brand-yellow"
            />
            <div>
              <p className="text-lg font-bold">Mercadinho do Giovan</p>
              <p className="text-sm text-white/70">
                Qualidade, preço justo, todo dia.
              </p>
            </div>
          </div>

          <div className="text-sm text-white/80">
            <p className="font-semibold text-brand-yellow">Endereço</p>
            <p className="mt-1 max-w-xs">{ADDRESS}</p>
          </div>

          <div className="flex flex-col items-center gap-2 md:items-end">
            <p className="text-sm font-semibold text-brand-yellow">
              Fale conosco
            </p>
            {contacts.map((contact) => (
              <a
                key={contact.name}
                href={buildWhatsappLink(contact.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/80 hover:text-brand-yellow"
              >
                <MessageCircle className="size-4" />
                {contact.name} · {contact.phone}
              </a>
            ))}
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col items-center gap-4">
          <a
            href="https://nuvi-sistemas.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 transition-colors hover:border-brand-yellow/50 hover:bg-white/10"
          >
            <Image
              src="/nuvi-logo.png"
              alt="Logo Nuvi Sistemas"
              width={28}
              height={28}
              className="rounded-md"
            />
            <span className="text-sm text-white/70">
              Site desenvolvido por{" "}
              <span className="font-bold text-white transition-colors group-hover:text-brand-yellow">
                Nuvi Sistemas
              </span>
            </span>
          </a>

          <p className="text-center text-xs text-white/50">
            © {year} Mercadinho do Giovan. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
