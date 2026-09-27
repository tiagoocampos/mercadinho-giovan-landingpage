import { MessageCircle } from "lucide-react";
import { buildWhatsappLink, CONTACTS } from "@/lib/whatsapp";

export function WhatsappFloat() {
  return (
    <a
      href={buildWhatsappLink(CONTACTS.giovan.whatsapp)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale no WhatsApp com o Mercadinho do Giovan"
      className="group fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping" />
      <span className="relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform group-hover:scale-110">
        <MessageCircle className="size-7" />
      </span>
    </a>
  );
}
