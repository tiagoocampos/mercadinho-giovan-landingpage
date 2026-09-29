import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <span className="inline-block rounded-full bg-brand-yellow/20 px-4 py-1 text-sm font-semibold text-brand-blue">
            Quem somos
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-brand-blue sm:text-4xl">
            Conheça o Giovan
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Há 1 mês de portas abertas, mas com um compromisso que já nasceu
            antigo de coração. O Giovan trouxe para São Francisco, em Reserva
            - PR, um mercadinho pensado para o dia a dia da sua família:
            produtos de qualidade, preço justo e aquele atendimento de
            vizinho que só um mercado de bairro tem.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Mais do que vender, o compromisso do Mercadinho do Giovan é
            oferecer confiança: você sabe o que está levando pra casa e sabe
            que vai pagar um preço justo por isso.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-yellow/15 px-4 py-2 text-sm font-semibold text-brand-blue">
            <Sparkles className="size-4" />
            Há 1 mês construindo essa história com você
          </div>
        </Reveal>
      </div>
    </section>
  );
}
