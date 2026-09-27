import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";

import { Differentials } from "@/components/site/differentials";
import { Contact } from "@/components/site/contact";
import { InstagramBanner } from "@/components/site/instagram-banner";
import { Location } from "@/components/site/location";
import { Footer } from "@/components/site/footer";
import { WhatsappFloat } from "@/components/site/whatsapp-float";
import { BackToTop } from "@/components/site/back-to-top";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        
        <Differentials />
        <Contact />
        <InstagramBanner />
        <Location />
      </main>
      <Footer />
      <WhatsappFloat />
      <BackToTop />
    </>
  );
}
