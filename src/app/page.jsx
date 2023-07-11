import Hero from '@/components/Hero/Hero';
import OurService from '@/components/OurService/OurService';
import './page.scss';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className='wave'></div>
      <OurService />
    </main>
  );
}
