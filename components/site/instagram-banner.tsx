import { InstagramIcon } from "@/components/site/icons";
import { Reveal } from "@/components/site/reveal";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/whatsapp";

export function InstagramBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Reveal>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col items-center gap-5 overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#feda75_0%,#fa7e1e_25%,#d62976_50%,#962fbf_75%,#4f5bd5_100%)] px-6 py-10 text-center shadow-xl transition-transform hover:scale-[1.01] sm:flex-row sm:justify-between sm:text-left"
        >
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-white ring-2 ring-white/40 backdrop-blur-sm">
              <InstagramIcon className="size-9" />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
                Siga a gente no Instagram
              </p>
              <p className="mt-1 text-2xl font-extrabold text-white">
                {INSTAGRAM_HANDLE}
              </p>
              <p className="mt-1 text-sm text-white/85">
                Novidades, ofertas e bastidores do mercadinho.
              </p>
            </div>
          </div>

          <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#d62976] shadow-md transition-colors group-hover:bg-white/90">
            <InstagramIcon className="size-5" />
            Seguir no Instagram
          </span>
        </a>
      </Reveal>
    </section>
  );
}
