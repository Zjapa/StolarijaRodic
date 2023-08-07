import veluxStandardDrvoImg from '@/img/velux/velux-standard.png';
import veluxStandardBeliDrvoImg from '@/img/velux/velux-standard-beli.png';


const STANDARD_SERIJA =
    'Standard serija nudi kupcima pristupačne prozore bez kompromisa po pitanju kvaliteta. Ova serija nudi bitne funkcionalnosti i nudi najširu ponudu do sada – odaberite gornje ili donje upravljanje, drveni ili prozor bez dodatnog održavanja, izbor je vaš.';
const STANDARD_PLUS_SERIJA =
    'Standard Plus serija je za vlasnike stambenog prostora u potkrovlju, bilo kuće ili stanakoji žele da investiraju u visoku energetsku efikasnost i komfor. To podrazumeva izuzetno efikasno trostruko staklo koje olakšava da dom održite toplim čak i tokom najhladnijoh zimskih dana. Možete odabrati gornje ili donje upravljanje po želji.';

export const veluxUsluge = {
    'velux-standard-drvo': {
        pageTitle: 'Velux standard krovni prozori',
        img: veluxStandardDrvoImg,
        imageText: STANDARD_SERIJA,
        subtitle: '5 godina garancije na BFX set',
        tableInfoList: [
            'EDW 1000 je aluminijumska opšivka sa hidro izolacijom',
            'GZL 1051 drveni prozor sa dvoslojnim staklom 4/16/4',
        ],
        tableContent: [
            { id: 1, type: 'GZL 1051 CK02 +EDW 1000', dimension: '55/78' },
            { id: 2, type: 'GZL 1051 FK06 +EDW 1000', dimension: '66/118' },
            { id: 3, type: 'GZL 1051 FK08 +EDW 1000', dimension: '66/140' },
            { id: 4, type: 'GZL 1051 MK06 +EDW 1000', dimension: '78/118' },
            { id: 5, type: 'GZL 1051 MK08 +EDW 1000', dimension: '78/140' },
            { id: 6, type: 'GZL 1051 MK10 +EDW 1000', dimension: '78/160' },
        ],
        subtitleSecond: '10 godina garancije na BDX set',
        tableInfoListSecond: [
            'EDW 2000 je aluminijumska opšivka sa termo i hidro izolacijom',
            ' GZL 1051 drveni prozor sa dvoslojnim staklom 4/16/4',
        ],
        tableContentSecond: [
            { id: 1, type: 'GZL 1051 CK02 +EDW 2000', dimension: '55/78' },
            { id: 2, type: 'GZL 1051 FK06 +EDW 2000', dimension: '66/118' },
            { id: 3, type: 'GZL 1051 FK08 +EDW 2000', dimension: '66/140' },
            { id: 4, type: 'GZL 1051 MK06 +EDW 2000', dimension: '78/118' },
            { id: 5, type: 'GZL 1051 MK08 +EDW 2000', dimension: '78/140' },
            { id: 6, type: 'GZL 1051 MK10 +EDW 2000', dimension: '78/160' },
        ],

        sideNavigation: [
            { title: 'Velux', url: 'velux-ovlasceni-prodavac' },
            { title: 'Standard krovni prozori - drvo', url: 'velux-standard-drvo' },
            { title: 'Standard krovni prozori - beli', url: 'velux-standard-beli' },
            { title: 'Standard plus krovni prozori - drvo', url: 'velux-standard-plus-drvo' },
            { title: 'Standard plus krovni prozori - beli', url: 'velux-standard-plus-beli' },
            { title: 'Unutrašnje roletne - zaštita od svetlosti', url: 'velux-zastita-svetlost' },
            { title: 'Spoljašnje mrežice - zaštita od toplote', url: 'velux-zastita-toplota' },
        ],
    },
    'velux-standard-beli': {
        pageTitle: 'Velux standard krovni prozori - beli',
        img: veluxStandardBeliDrvoImg,
        imageText: STANDARD_SERIJA,
        subtitle: '5 godina garancije na BFX set',
        tableInfoList: [
            'EDW 1000 je aluminijumska opšivka sa hidro izolacijom',
            'GLU 0051 drveni prozor odliven poliuretanom - BELI sa dvoslojnim staklom 4/16/4',
        ],
        tableContent: [
            { id: 1, type: 'GLU 0051 CK02 +EDW 1000', dimension: '55/78' },
            { id: 2, type: 'GLU 0051 FK06 +EDW 1000', dimension: '66/118' },
            { id: 3, type: 'GLU 0051 FK08 +EDW 1000', dimension: '66/140' },
            { id: 4, type: 'GLU 0051 MK06 +EDW 1000', dimension: '78/118' },
            { id: 5, type: 'GLU 0051 MK08 +EDW 1000', dimension: '78/140' },
            { id: 6, type: 'GLU 0051 MK10 +EDW 1000', dimension: '78/160' },
        ],
        subtitleSecond: '10 godina garancije na BDX set',
        tableInfoListSecond: [
            'EDW 2000 je aluminijumska opšivka sa termo i hidro izolacijom',
            'GLU 0051 drveni prozor odliven poliuretanom - BELI sa dvoslojnim staklom 4/16/4',
        ],
        tableContentSecond: [
            { id: 1, type: 'GLU 0051 CK02 +EDW 2000', dimension: '55/78' },
            { id: 2, type: 'GLU 0051 FK06 +EDW 2000', dimension: '66/118' },
            { id: 3, type: 'GLU 0051 FK08 +EDW 2000', dimension: '66/140' },
            { id: 4, type: 'GLU 0051 MK06 +EDW 2000', dimension: '78/118' },
            { id: 5, type: 'GLU 0051 MK08 +EDW 2000', dimension: '78/140' },
            { id: 6, type: 'GLU 0051 MK10 +EDW 2000', dimension: '78/160' },
        ],

        sideNavigation: [
            { title: 'Velux', url: 'velux-ovlasceni-prodavac' },
            { title: 'Standard krovni prozori - drvo', url: 'velux-standard-drvo' },
            { title: 'Standard krovni prozori - beli', url: 'velux-standard-beli' },
            { title: 'Standard plus krovni prozori - drvo', url: 'velux-standard-plus-drvo' },
            { title: 'Standard plus krovni prozori - beli', url: 'velux-standard-plus-beli' },
            { title: 'Unutrašnje roletne - zaštita od svetlosti', url: 'velux-zastita-svetlost' },
            { title: 'Spoljašnje mrežice - zaštita od toplote', url: 'velux-zastita-toplota' },
        ],
    },
    'velux-standard-plus-drvo': {
        pageTitle: 'Velux Standard plus krovni prozori - drvo',
        img: veluxStandardDrvoImg,
        imageText: STANDARD_PLUS_SERIJA,
        subtitle: '5 godina garancije na BFX set',
        tableInfoList: [
            'EDW 1000 je aluminijumska opšivka sa hidro izolacijom',
            'GLL 1061 drveni prozor sa troslojnim staklom 4/14/3/14/3',
        ],
        tableContent: [
            { id: 1, type: 'GLL 1061 CK02 +EDW 1000', dimension: '55/78' },
            { id: 2, type: 'GLL 1061 FK06 +EDW 1000', dimension: '66/118' },
            { id: 3, type: 'GLL 1061 FK08 +EDW 1000', dimension: '66/140' },
            { id: 4, type: 'GLL 1061 MK06 +EDW 1000', dimension: '78/118' },
            { id: 5, type: 'GLL 1061 MK08 +EDW 1000', dimension: '78/140' },
            { id: 6, type: 'GLL 1061 MK10 +EDW 1000', dimension: '78/160' },
        ],
        subtitleSecond: '10 godina garancije na BDX set',
        tableInfoListSecond: [
            'EDW 2000 je aluminijumska opšivka sa termo i hidro izolacijom',
            'GLL 1061 drveni prozor sa troslojnim staklom 4/14/3/14/3',
        ],
        tableContentSecond: [
            { id: 1, type: 'GLL 1061 CK02 +EDW 2000', dimension: '55/78' },
            { id: 2, type: 'GLL 1061 FK06 +EDW 2000', dimension: '66/118' },
            { id: 3, type: 'GLL 1061 FK08 +EDW 2000', dimension: '66/140' },
            { id: 4, type: 'GLL 1061 MK06 +EDW 2000', dimension: '78/118' },
            { id: 5, type: 'GLL 1061 MK08 +EDW 2000', dimension: '78/140' },
            { id: 6, type: 'GLL 1061 MK10 +EDW 2000', dimension: '78/160' },
        ],

        sideNavigation: [
            { title: 'Velux', url: 'velux-ovlasceni-prodavac' },
            { title: 'Standard krovni prozori - drvo', url: 'velux-standard-drvo' },
            { title: 'Standard krovni prozori - beli', url: 'velux-standard-beli' },
            { title: 'Standard plus krovni prozori - drvo', url: 'velux-standard-plus-drvo' },
            { title: 'Standard plus krovni prozori - beli', url: 'velux-standard-plus-beli' },
            { title: 'Unutrašnje roletne - zaštita od svetlosti', url: 'velux-zastita-svetlost' },
            { title: 'Spoljašnje mrežice - zaštita od toplote', url: 'velux-zastita-toplota' },
        ],
    },
    'velux-standard-plus-beli': {
        pageTitle: 'Velux Standard plus krovni prozori - beli',
        img: veluxStandardBeliDrvoImg,
        imageText: STANDARD_PLUS_SERIJA,
        subtitle: '5 godina garancije na BFX set',
        tableInfoList: [
            'EDW 1000 je aluminijumska opšivka sa hidro izolacijom',
            'GLU 0061 drveni prozor odliven polietilenom - BELI sa trostrukim staklom 4/14/3/14/3',
        ],
        tableContent: [
            { id: 1, type: 'GLU 0061 CK02 +EDW 1000', dimension: '55/78' },
            { id: 2, type: 'GLU 0061 FK06 +EDW 1000', dimension: '66/118' },
            { id: 3, type: 'GLU 0061 FK08 +EDW 1000', dimension: '66/140' },
            { id: 4, type: 'GLU 0061 MK06 +EDW 1000', dimension: '78/118' },
            { id: 5, type: 'GLU 0061 MK08 +EDW 1000', dimension: '78/140' },
            { id: 6, type: 'GLU 0061 MK10 +EDW 1000', dimension: '78/160' },
        ],
        subtitleSecond: '10 godina garancije na BDX set',
        tableInfoListSecond: [
            'EDW 2000 je aluminijumska opšivka sa termo i hidro izolacijom',
            'GLU 0061 drveni prozor odliven polietilenom - BELI sa trostrukim staklom 4/14/3/14/3',
        ],
        tableContentSecond: [
            { id: 1, type: 'GLU 0061 CK02 +EDW 2000', dimension: '55/78' },
            { id: 2, type: 'GLU 0061 FK06 +EDW 2000', dimension: '66/118' },
            { id: 3, type: 'GLU 0061 FK08 +EDW 2000', dimension: '66/140' },
            { id: 4, type: 'GLU 0061 MK06 +EDW 2000', dimension: '78/118' },
            { id: 5, type: 'GLU 0061 MK08 +EDW 2000', dimension: '78/140' },
            { id: 6, type: 'GLU 0061 MK10 +EDW 2000', dimension: '78/160' },
        ],

        sideNavigation: [
            { title: 'Velux', url: 'velux-ovlasceni-prodavac' },
            { title: 'Standard krovni prozori - drvo', url: 'velux-standard-drvo' },
            { title: 'Standard krovni prozori - beli', url: 'velux-standard-beli' },
            { title: 'Standard plus krovni prozori - drvo', url: 'velux-standard-plus-drvo' },
            { title: 'Standard plus krovni prozori - beli', url: 'velux-standard-plus-beli' },
            { title: 'Unutrašnje roletne - zaštita od svetlosti', url: 'velux-zastita-svetlost' },
            { title: 'Spoljašnje mrežice - zaštita od toplote', url: 'velux-zastita-toplota' },
        ],
    },

};
