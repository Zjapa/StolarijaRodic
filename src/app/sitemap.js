export default function sitemap() {
    const baseUrl = 'https://www.stolarijarodic.com';
    const dynamicPages = [
        'camovo-drvo',
        'drvo-aluminijum',
        'drveni-kapak',
        'ulazna-vrata-puno-drvo',
        'medijapan-folija',
        'medijapan-farbani',
        'medijapan-furnirani',
        'unutrasnja-vrata-puno-drvo',
        'velux-ovlasceni-prodavac',
        'velux-standard-drvo',
        'velux-standard-beli',
        'velux-standard-plus-drvo',
        'velux-standard-plus-beli',
        'velux-zastita-svetlost',
        'velux-zastita-toplota',
    ];
    const uslugaUrl = dynamicPages.map((page) => ({ url: `${baseUrl}/${page}`, lastModified: new Date() }));
    return [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/o-nama`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/projekti`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/kontakt`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/pvc-stolarija`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
        },
        ...uslugaUrl,
    ];
}
