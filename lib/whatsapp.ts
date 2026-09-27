export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site do Mercadinho do Giovan e gostaria de mais informações.";

export function buildWhatsappLink(phone: string, message: string = WHATSAPP_DEFAULT_MESSAGE) {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export const INSTAGRAM_URL = "https://www.instagram.com/mercadinho_do_giovan";
export const INSTAGRAM_HANDLE = "@mercadinho_do_giovan";

export const CONTACTS = {
  giovan: {
    name: "Giovan",
    role: "Proprietário",
    phone: "+55 42 99838-3939",
    whatsapp: "5542998383939",
  },
  anaila: {
    name: "Anáila",
    role: "Atendimento",
    phone: "+55 42 98833-4086",
    whatsapp: "5542988334086",
  },
} as const;
