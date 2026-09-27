import Image from "next/image";
import { BadgeCheck, HandCoins, HeartHandshake, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsappLink, CONTACTS } from "@/lib/whatsapp";

const HIGHLIGHTS = [
  { icon: BadgeCheck, label: "Qualidade" },
  { icon: HandCoins, label: "Preço Justo" },
  { icon: HeartHandshake, label: "Confiança" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative scroll-mt-20 overflow-hidden bg-brand-blue-dark text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,var(--brand-blue-light)_0%,transparent_45%)] opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,transparent_60%,var(--brand-blue-light)_60%,transparent_100%)] opacity-30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.04)_0px,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_12px)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div className="flex flex-col items-start gap-6 text-center md:text-left">
          <div className="mx-auto md:mx-0">
            <Image
              src="/logo.png"
              alt="Logo Mercadinho do Giovan"
              width={110}
              height={110}
              className="rounded-full ring-4 ring-brand-yellow"
              priority
            />
          </div>
          <div>
            <h1
              className="text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl"
              style={{ fontFamily: "var(--font-logo)", fontWeight: 900, letterSpacing: "-0.02em" }}
            >
              MERCADINHO <span className="text-brand-yellow">DO GIOVAN</span>
            </h1>
            <p className="mt-4 max-w-md text-balance text-lg text-white/85 sm:text-xl">
              O seu mercadinho de confiança do dia a dia!{" "}
              <span className="font-semibold text-brand-yellow">
                Qualidade, preço justo.
              </span>
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              render={
                <a
                  href={buildWhatsappLink(CONTACTS.giovan.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              size="lg"
              className="bg-brand-yellow text-brand-blue-dark font-bold hover:bg-brand-yellow-dark"
            >
              <MessageCircle className="size-5" />
              Fale agora no WhatsApp
            </Button>
            <Button
              render={<a href="#sobre" />}
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              Conheça o mercadinho
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl bg-brand-blue/60 p-8 ring-1 ring-brand-yellow/30">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-10 top-1/2 h-24 -translate-y-1/2 -rotate-6 bg-brand-yellow/90"
          />
          <div className="relative flex flex-col gap-5">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-xl bg-brand-blue-dark/70 px-4 py-3 backdrop-blur-sm"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-brand-blue-dark">
                  <item.icon className="size-5" />
                </span>
                <span className="text-lg font-bold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
