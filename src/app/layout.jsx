import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Raleway_font, Lato_font } from "@/utils/fonts";
import "@/sass/globals.scss";
import "@/sass/common.scss";
import Popup from "@/components/Popup/Popup";

export const metadata = {
  title: "Stolarija Rodić | Početna",
  description:
    "Stolarija Rodić se bavi proizvodnjom i prodajom drvene,drvo-aluminijum,PVC i aluminijumske stolarije. Ovlašćeni smo distributer VELUX krovnih prozora.",
  keywords: "Stolarija, PVC, Velux, Rodić, Drvo, Staklo, Vrata",
  alternates: {
    canonical: `https://www.stolarijarodic.com/`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="preload"
        fetchPriority="high"
        as="image"
        href="/images/hero-bg-compressed.webp"
        type="image/webp"
      ></link>

      <body className={`${Raleway_font.variable} ${Lato_font.variable}`}>
        <div id="portal"></div>
        <Popup />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
