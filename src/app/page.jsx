import Hero from '@/components/Hero/Hero';
import OurService from '@/components/OurService/OurService';
import './page.scss';
import AboutUs from '@/components/AboutUs/AboutUs';

export default function Home() {
  return (
    <main>
      <Hero />
      <OurService />
      <AboutUs />
    </main>
  );
}
