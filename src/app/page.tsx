import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { ContactForm } from '@/components/sections/ContactForm';
import { Footer } from '@/components/sections/Footer';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import { PageLoader } from '@/components/ui/PageLoader';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  return (
    <>
      <PageLoader />
      <StructuredData />
      <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        <SmoothScroll />
        <Navbar />
        <div className="initial-content">
          <Hero />
        </div>
        <About />
        <Projects />
        <Experience />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
