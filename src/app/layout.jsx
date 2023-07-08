import HeaderTop from '@/components/Header/HeaderTop/HeaderTop';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Raleway_font, Lato_font } from '@/utils/fonts';
import '@/sass/globals.scss';
import '@/sass/common.scss';

export const metadata = {
  title: 'Stolarija Rodić | Početna',
  description:
    'Stolarija Rodić se bavi proizvodnjom i prodajom drvene,drvo-aluminijum,PVC i aluminijumske stolarije Ovlašćeni smo distributer VELUX krovnih prozora.',
  keywords: 'Stolarija, PVC',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Raleway_font.variable} ${Lato_font.variable}`}>
        <HeaderTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
