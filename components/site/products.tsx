import {
  Beef,
  Croissant,
  CupSoda,
  Leaf,
  ShoppingBasket,
  SprayCan,
} from "lucide-react";
import { Reveal } from "@/components/site/reveal";

const CATEGORIES = [
  { icon: Leaf, label: "Hortifruti" },
  { icon: Croissant, label: "Padaria" },
  { icon: Beef, label: "Açougue" },
  { icon: CupSoda, label: "Bebidas" },
  { icon: ShoppingBasket, label: "Mercearia" },
  { icon: SprayCan, label: "Limpeza" },
];

export function Products() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-brand-blue/10 px-4 py-1 text-sm font-semibold text-brand-blue">
          O que você encontra
        </span>
        <h2 className="mt-4 text-3xl font-extrabold text-brand-blue sm:text-4xl">
          Um pouco de tudo pro seu dia a dia
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {CATEGORIES.map((category, index) => (
          <Reveal key={category.label} delay={index * 80}>
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-brand-blue/10 bg-secondary/40 px-4 py-6 text-center transition-shadow hover:shadow-md">
              <div className="flex size-12 items-center justify-center rounded-full bg-brand-yellow/20 text-brand-blue">
                <category.icon className="size-6" />
              </div>
              <span className="text-sm font-semibold text-brand-blue">
                {category.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
