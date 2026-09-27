import { MessageCircle, Phone } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { buildWhatsappLink, CONTACTS } from "@/lib/whatsapp";

export function Contact() {
  const contacts = [CONTACTS.giovan, CONTACTS.anaila];

  return (
    <section id="contato" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 md:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-brand-yellow/20 px-4 py-1 text-sm font-semibold text-brand-blue">
          Fale com a gente
        </span>
        <h2 className="mt-4 text-3xl font-extrabold text-brand-blue sm:text-4xl">
          Chame agora no WhatsApp
        </h2>
        <p className="mt-3 text-muted-foreground">
          Tire dúvidas, faça seu pedido ou saiba mais sobre nossos produtos
          falando diretamente com a gente.
        </p>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
        {contacts.map((contact, index) => (
          <Reveal key={contact.name} delay={index * 100}>
            <Card className="border-brand-blue/10 text-center transition-shadow hover:shadow-lg">
              <CardHeader className="items-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-brand-blue text-brand-yellow">
                  <Phone className="size-6" />
                </div>
                <CardTitle className="mt-2 text-xl text-brand-blue">
                  {contact.name}
                </CardTitle>
                <CardDescription>{contact.role}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-3">
                <p className="text-lg font-semibold text-foreground">
                  {contact.phone}
                </p>
                <Button
                  render={
                    <a
                      href={buildWhatsappLink(contact.whatsapp)}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  className="w-full bg-brand-yellow text-brand-blue-dark font-semibold hover:bg-brand-yellow-dark"
                >
                  <MessageCircle className="size-4" />
                  Chamar no WhatsApp
                </Button>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
