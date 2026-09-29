import Image from "next/image";
import {
  BadgeCheck,
  HandCoins,
  MapPin,
  MessageCircle,
  TrendingDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Reveal } from "@/components/site/reveal";
import { BASKETS, formatBasketPrice, type Basket } from "@/lib/baskets";
import { buildWhatsappLink, CONTACTS } from "@/lib/whatsapp";

const ADDRESS = "Rua Bronislau Chycalski, 304 — São Francisco, Reserva - PR";

const SEALS = [
  { icon: BadgeCheck, label: "Produtos de Qualidade" },
  { icon: HandCoins, label: "Preço Justo Sempre" },
  { icon: TrendingDown, label: "Mais Economia pra Sua Família" },
];

function BasketCard({ basket }: { basket: Basket }) {
  const whatsappMessage = `Olá! Tenho interesse na ${basket.name} (${formatBasketPrice(
    basket.price
  )}) do Mercadinho do Giovan.`;

  return (
    <Reveal className="h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-brand-blue-dark p-6 text-white shadow-xl ring-1 ring-brand-yellow/20 sm:p-8">
        <div className="text-center">
          <h3
            className="text-3xl sm:text-4xl"
            style={{ fontFamily: "var(--font-logo)", fontWeight: 900 }}
          >
            {basket.name}
          </h3>
          {basket.subtitle && (
            <p className="mt-2 text-sm text-white/80 sm:text-base">
              {basket.subtitle}
            </p>
          )}
        </div>

        {basket.image && (
          <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-3xl ring-4 ring-brand-yellow">
            <Image
              src={basket.image}
              alt={`Produtos da ${basket.name}`}
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover"
            />
          </div>
        )}

        <div className="relative mt-10">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-yellow px-5 py-2 text-center text-xs font-bold uppercase tracking-wide text-brand-blue-dark shadow-md sm:text-sm">
            Lista dos produtos da cesta
          </div>
          <div className="rounded-3xl bg-white px-5 pb-6 pt-8 shadow-lg sm:px-8">
            <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {basket.items.map((item, index) => (
                <li key={item} className="flex items-baseline gap-3 text-sm">
                  <span className="font-bold text-brand-blue">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-brand-yellow px-6 py-5 text-center">
          <p className="text-sm font-bold text-brand-blue-dark sm:text-base">
            TODA ESSA CESTA POR APENAS
          </p>
          <p className="mt-1 text-4xl font-black text-brand-blue-dark sm:text-5xl">
            {formatBasketPrice(basket.price)}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
          {SEALS.map((seal) => (
            <div
              key={seal.label}
              className="flex flex-col items-center gap-2 text-center"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-blue text-brand-yellow sm:size-14">
                <seal.icon className="size-5 sm:size-6" />
              </span>
              <span className="text-[11px] font-semibold text-white sm:text-xs">
                {seal.label}
              </span>
            </div>
          ))}
        </div>

        <Separator className="mt-8 bg-white/15" />

        <div className="mt-6 flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-2 text-sm text-white/85">
            <MapPin className="size-4 shrink-0 text-brand-yellow" />
            {ADDRESS}
          </div>
          <p className="font-bold text-brand-yellow">Venha nos visitar!</p>

          <Button
            render={
              <a
                href={buildWhatsappLink(CONTACTS.giovan.whatsapp, whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            size="lg"
            className="mt-2 w-full bg-brand-yellow text-brand-blue-dark font-bold hover:bg-brand-yellow-dark"
          >
            <MessageCircle className="size-5" />
            Peça a sua no WhatsApp
          </Button>
        </div>
      </div>
    </Reveal>
  );
}

export function Baskets() {
  return (
    <section id="cestas" className="scroll-mt-20 bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-brand-blue/10 px-4 py-1 text-sm font-semibold text-brand-blue">
            Nossas cestas
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-brand-blue sm:text-4xl">
            Cestas prontas pra facilitar sua vida
          </h2>
          <p className="mt-3 text-muted-foreground">
            Tudo o que sua família precisa, em um só lugar, com o preço justo
            de sempre.
          </p>
        </Reveal>

        <div
          className={
            BASKETS.length === 1
              ? "mx-auto mt-12 max-w-xl"
              : "mt-12 grid gap-8 md:grid-cols-2"
          }
        >
          {BASKETS.map((basket) => (
            <BasketCard key={basket.id} basket={basket} />
          ))}
        </div>
      </div>
    </section>
  );
}
