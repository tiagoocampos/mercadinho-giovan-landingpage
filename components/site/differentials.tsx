import { BadgeCheck, HandCoins, HeartHandshake, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Reveal } from "@/components/site/reveal";

const ITEMS = [
  {
    icon: BadgeCheck,
    title: "Qualidade",
    description:
      "Produtos selecionados com cuidado para garantir sempre o melhor para sua família.",
  },
  {
    icon: HandCoins,
    title: "Preço Justo",
    description:
      "Preços honestos, sem pegadinhas, para o seu orçamento render mais no dia a dia.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento de Confiança",
    description:
      "Aquele atendimento de bairro, próximo e humano, que você já conhece e confia.",
  },
  {
    icon: MapPin,
    title: "Perto de Você",
    description:
      "Localizado em São Francisco, Reserva - PR, pertinho de casa quando você mais precisa.",
  },
];

export function Differentials() {
  return (
    <section className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-brand-blue/10 px-4 py-1 text-sm font-semibold text-brand-blue">
            Nossos diferenciais
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-brand-blue sm:text-4xl">
            Por que escolher o Mercadinho do Giovan?
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <Card className="border-brand-blue/10 text-center transition-shadow hover:shadow-lg">
                <CardHeader className="items-center">
                  <div className="flex size-14 items-center justify-center rounded-full bg-brand-blue text-brand-yellow">
                    <item.icon className="size-7" />
                  </div>
                  <CardTitle className="mt-2 text-brand-blue">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
