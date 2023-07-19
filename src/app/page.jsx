import Hero from '@/components/Hero/Hero';
import OurService from '@/components/OurService/OurService';
import AboutUs from '@/components/AboutUs/AboutUs';
import ChooseUs from '@/components/ChooseUs/ChooseUs';
import './page.scss';

export default function Home() {
  return (
    <main>
      <Hero />
      <OurService />
      <AboutUs />
      <ChooseUs/>
    </main>
  );
}
