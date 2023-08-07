import unutrasnjaVrataImg from '../../img/sobna_vrata/unutrasnja-vrata1.jpg';
import ulaznaVrata from '../../img/pun_drvo/Ulazna-vrata.jpg';
import veluxImg from '../../img/velux/Velux-img.webp';
import pvcImg from '../../img/pvc/pvc-stolarija.jpg';

import camovoDrvoImg from '@/img/drveni_prozori/slika11.webp';
import drvoAluminijumImg from '@/img/drveni_prozori/drvo-aluminijum.jpg';
import drveniKapakImg from '@/img/drveni_kapak/drveni-kapak.jpg';
import ulaznaVrataImg from '@/img/pun_drvo/Ulazna-vrata.jpg';
import medijapanFolijaImg from '@/img/sobna_vrata/slika16.jpg';
import medijapanFarbaniImg from '@/img/sobna_vrata/slika15.jpg';
import medijapanFurniraniImg from '@/img/sobna_vrata/slika14.jpg';
import veluxZastitaSvetlostImg from '@/img/velux/zastita_od_svetlosti.jpg';
import veluxOvlasceniProdavacImg from '@/img/velux/ovlašteni_prodavac.jpg';

export const NASE_USLUGE = 'Naše Usluge';

export const UNUTRASNJA_VRATA =
    'Unutrašnja vrata predstavljaju veoma bitan element enterijera, jer pored njihove osnovne funkcije ( toplotne i zvučne izolacije) koja se podrazumeva, u današnje vreme velika pažnja posvećuje se i njihovom dizajnu. Upravo zbog toga Stolarija Rodić se bavi proizvodnjom i prodajom sobnih vrata po Vašoj želji i meri. I kada to kažemo mislimo ozbiljno, jer uz pomoć savremene tehnologije naših stojeva i veštih ruku naših majstora, svaki Vaš crtež može postati stvarnost za samo nekoliko dana!';

export const DRVENA_STOLARIJA = `Asortiman naših prozora je širok iz prostog razloga, jer delimično podržavamo argumente pristalica koje zastupaju svaki od ova četiri tipa stolarije, a pošto želimo da zadovoljimo svačiji ukus potrudili smo se da od prozora koje želite napravimo proizvod vrhunskog kvaliteta u svojoj klasi.Profil od kog se izradjuju Drveni prozori - čamovo drvo je od troslojno lameliranog drveta isključivo od prvoklasne gradje ( bez čvora ) namenjene za drvenu stolariju.`;

export const VELUX_PROZORI =
    'Nakon veoma uspešne zimske sezone, Stolarija Rodić je odlučila da produži period akcijskih cena VELUX krovnih prozora i dodatne opreme i na prolećnu sezonu. Trend korišćenja krovnih prozora za rešavanje pitanja osvetljenosti, ali i dobre izolovanosti unutrašnjosti potkrovlja od krovne konstrukcije, odavno je popularan u svetu. Na svu sreću taj trend se polako poprima i na našim prostorima, gde se do skoro zbog loših gradjevinskih rešenja otvor za krovni prozor posmatrao kao najrizičnije rešenje i crna tačka potkrovlja.';

export const PVC_STOLARIJA = `Profili za PVC stolariju izradjeni su od Nemačkog šestokomornog profila INOUTIC ( TISSEN ) i Sigenia
  okovom. PVC kao materijal takodje poseduje svoje prednosti, kao na primer toliko pominjanu trajnost
  profila bez potrebe zaštite i održavanja, ali i sve druge kriterijume po pitanju standarda kao i samo
  drvo. Tip zatvaranja moguć je takodje u svim varijantama : obično, okretno nagibno, klizna vrata,
  kombi sistem,harmonika, klizna stena… PVC prozori imaju široka krila i ramove što kod drvenih prozora
  nije slučaj pa se iz tog razloga PVC prozori obavezno ojačavaju čeličnim profilima.`;

export const MEDIJAPAN_UNUTRASNJA_VRATA =
    'Drvena vrata možda većini predstavljaju jednostavan pojam, ali ne i nama! Drvo, kao najplemenitiji materijal za izradu stolarije predstavlja samo osnovu, na Vama je da izaberete u kom procentu će ono biti zastupljeno u finalnom proizvodu, što omogućavaju njegove modifikacije i njemu slični materijali: medijapan, furnir ( hrast, jasen,bukva,venge, mahagonij, trešnja…), zaštitne vodootporne i vatrootporne folije,Craft Master obloge, razni tipovi farbe, impregnanati, poliuretanski i drugi namazi koji ovom materijalu potpomažu da održi i iskaže svoju plemenitost.';
export const CAMOVO_DRVO =
    'Dokazano je da drveni prozori - čamovo drvo imaju najbolju toplotnu i zvučnu izolaciju i za razliku od svih ostalih materijala, sposobnost difuzije pare. To je važno zbog mikroklime zatvorenog prostora. U spavaćoj sobi, kupatilu ili kuhinji, gdje se po osobi izbaci veća količina vode disanjem, znojenjem i utroškom vode, samo Drveni prozori - čamovo drvo izbacuju putem difuzije tu preveliku količinu vlage, a u suprotnom slučaju, ubacuje potrebnu vlagu u prostor.';

export const serviceItems = [
    {
        img: unutrasnjaVrataImg,
        title: 'Unutrašnja vrata',
        desc: UNUTRASNJA_VRATA,
        url: '/unutrasnja-vrata-puno-drvo',
    },
    {
        img: ulaznaVrata,
        title: 'Ulazna vrata',
        desc: DRVENA_STOLARIJA,
        url: '/ulazna-vrata-puno-drvo',
    },
    {
        img: veluxImg,
        title: 'Velux prozori',
        desc: VELUX_PROZORI,
        url: '/velux-ovlasceni-prodavac',
    },
    {
        img: pvcImg,
        title: 'Pvc stolarija',
        desc: PVC_STOLARIJA,
        url: '/pvc-stolarija',
    },
    {
        img: medijapanFolijaImg,
        title: 'Unutrašnja vrata - medijapan',
        desc: MEDIJAPAN_UNUTRASNJA_VRATA,
        url: '/medijapan-folija',
    },
    {
        img: camovoDrvoImg,
        title: 'Drveni prozori - čamovo drvo',
        desc: CAMOVO_DRVO,
        url: '/camovo-drvo',
    },
];
