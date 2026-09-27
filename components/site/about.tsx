import Image from "next/image";
import { Reveal } from "@/components/site/reveal";

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <Reveal className="mx-auto w-full max-w-sm md:mx-0">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-brand-blue-dark shadow-xl ring-4 ring-brand-yellow/40">
            <Image
              src="/giovan.jpg"
              alt="Giovan, proprietário do Mercadinho do Giovan"
              fill
              sizes="(max-width: 768px) 100vw, 384px"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={120} className="text-center md:text-left">
          <span className="inline-block rounded-full bg-brand-yellow/20 px-4 py-1 text-sm font-semibold text-brand-blue">
            Quem somos
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-brand-blue sm:text-4xl">
            Conheça o Giovan
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Há anos servindo a comunidade de São Francisco, em Reserva - PR, o
            Giovan construiu um mercadinho pensado para o dia a dia da sua
            família: produtos de qualidade, preço justo e aquele atendimento
            de vizinho que só um mercado de bairro tem.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Mais do que vender, o compromisso do Mercadinho do Giovan é
            oferecer confiança: você sabe o que está levando pra casa e sabe
            que vai pagar um preço justo por isso.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
