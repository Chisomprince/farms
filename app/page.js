import CTA1 from "@/components/CTA1";
import CTA2 from "@/components/CTA2";
import CTA3 from "@/components/CTA3";
import Features from "@/components/Features";
import { Header } from "@/components/header";
import Nav from "@/components/nav";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="bg-green-100">
      <Nav />
      <Header />
      <Features />
      <CTA1 />
      <CTA2 />
      <CTA3 />
      <Services />
      <Testimonials />
    </div>
  );
}
