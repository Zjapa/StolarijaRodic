import Hero from '@/components/Hero/Hero';
import OurService from '@/components/OurService/OurService';
import AboutUs from '@/components/AboutUs/AboutUs';
import ChooseUs from '@/components/ChooseUs/ChooseUs';
import './page.scss';
import Carousel from '@/components/Carousel/Carousel';
import { images } from '@/components/Carousel/carousel-const';

export default function Home() {
    return (
        <>
            <Hero/>
            <OurService />
            <AboutUs />
            <ChooseUs />
        </>
    );
}
