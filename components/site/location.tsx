import { MapPin } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

const ADDRESS =
  "Rua Bronislau Chycalski, 304, São Francisco, Reserva - PR, 84320-000";

export function Location() {
  const mapsQuery = encodeURIComponent(ADDRESS);

  return (
    <section className="bg-brand-blue-dark py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center">
        <Reveal className="text-center md:text-left">
          <span className="inline-block rounded-full bg-brand-yellow/20 px-4 py-1 text-sm font-semibold text-brand-yellow">
            Onde estamos
          </span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Venha nos visitar
          </h2>
          <div className="mt-6 flex items-start justify-center gap-3 md:justify-start">
            <MapPin className="mt-1 size-6 shrink-0 text-brand-yellow" />
            <p className="text-lg text-white/85">{ADDRESS}</p>
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block font-semibold text-brand-yellow underline underline-offset-4 hover:text-brand-yellow-dark"
          >
            Ver rota no Google Maps
          </a>
        </Reveal>

        <Reveal delay={120} className="aspect-video w-full overflow-hidden rounded-2xl ring-4 ring-brand-yellow/30">
          <iframe
            title="Localização do Mercadinho do Giovan"
            src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
