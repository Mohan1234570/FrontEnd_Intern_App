import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <div className="ml-30 items-center">
    <main className="flex-col items-center justify-items-center">
      <Hero />
      <Features />
      <Testimonials />
    </main>
    <Footer />
    </div>
    </div>
  );
}
