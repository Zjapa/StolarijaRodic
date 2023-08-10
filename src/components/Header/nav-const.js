export const navigationConfig = [
    {
        title: 'Početna',
        url: '/',
    },
    {
        title: 'O nama',
        url: '/o-nama',
    },
    {
        title: 'Drvena stolarija',
        url: 'camovo-drvo',
        dropdown: [
            { title: 'Drveni prozori - čamovo drvo', url: 'camovo-drvo' },
            { title: 'Drvo - Aluminijum stolarija', url: 'drvo-aluminijum' },
            { title: 'Drveni kapak', url: 'drveni-kapak' },
            { title: 'Ulazna vrata - puno drvo', url: 'ulazna-vrata-puno-drvo' },
        ],
    },
    {
        title: 'Unutrašnja vrata',
        url: 'unutrasnja-vrata-puno-drvo',
        dropdown: [
            { title: 'Medijapan - folija', url: 'medijapan-folija' },
            { title: 'Medijapan - farbani', url: 'medijapan-farbani' },
            { title: 'Medijapan - furnirani', url: 'medijapan-furnirani' },
            { title: 'Unutrašnja vrata - puno drvo', url: 'unutrasnja-vrata-puno-drvo' },
        ],
    },
    {
      title: 'Velux krovni prozori',
      url: 'velux-ovlasceni-prodavac',
      dropdown: [
          { title: 'Velux', url: 'velux-ovlasceni-prodavac' },
          { title: 'Standard krovni prozori - drvo', url: 'velux-standard-drvo' },
          { title: 'Standard krovni prozori - beli', url: 'velux-standard-beli'},
          { title: 'Standard plus krovni prozori - drvo', url: 'velux-standard-plus-drvo' },
          { title: 'Standard plus krovni prozori - beli', url: 'velux-standard-plus-beli' },
          { title: 'Unutrašnje roletne - zaštita od svetlosti', url: 'velux-zastita-svetlost' },
          { title: 'Spoljašnje mrežice - zaštita od toplote', url: 'velux-zastita-toplota' },
      ],
  },
    {
        title: 'PVC Stolarija',
        url: '/pvc-stolarija',
    },
    {
        title: 'Projekti',
        url: '/projekti',
    },

    {
        title: 'Kontakt',
        url: '/kontakt',
    },
];
