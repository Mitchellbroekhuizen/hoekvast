# Hoekvast

Fotogids voor autofoto's op de Pixel 10 Pro. Twee modi:

- **MB Autoadvies**: advertentieset (8 exterieurhoeken) + keuringsfoto's (VIN, km-stand, banden, schade, motorruimte, interieur).
- **Eigen shoot**: Instagram-set met lage hero-shots op 5x, details, rolling shot en nacht.

Per foto: waar je staat, hoogte, lens, waarom, en een kader in de live zoeker.

## Functies

- Shotlist met camerapositie, kader in de zoeker, zoom en camera-instellingen per foto
- Kwaliteitscheck na elke foto (scherpte, belichting, rechtheid) en spookbeeld van de vorige foto
- Markeren op foto's met pijl, cirkel of pen (origineel blijft bewaard)
- Keuring: RDW-gegevens via kenteken, banden en lakdikte, schadekaart, video van koude start en walkaround
- Keuringsrapport, op te slaan als PDF
- Gouden uur en bewolking voor je locatie
- Instagram-export in 4:5 met caption

## Op GitHub Pages zetten

1. Maak een nieuwe repository, bijvoorbeeld `hoekvast`.
2. Upload alle bestanden uit deze map (ook de map `icons`) naar de hoofdmap van de repository.
3. Ga naar **Settings → Pages**, kies **Deploy from a branch**, branch `main`, map `/ (root)` en sla op.
4. Na een minuut staat de app op `https://<jouw-gebruikersnaam>.github.io/hoekvast/`.

## Installeren op je Pixel

1. Open de link in Chrome.
2. Menu (⋮) → **App installeren** of **Toevoegen aan startscherm**.
3. Geef bij de eerste foto toestemming voor de camera.

## Twee manieren om een foto te maken

- **Gele knop**: foto direct in de app, met kader, zoomknoppen en waterpas. Snel, ±8–12 MP. Ideaal voor keuringen en advertenties.
- **Pixel-app**: opent Pixel Camera met volle kwaliteit (HDR+, 50 MP, echte 5x-lens). De foto komt daarna terug op de juiste plek in de shotlist.

Foto's blijven op je telefoon bewaard (ook na afsluiten) tot je op **Nieuwe auto** tikt. Met **Foto's opslaan** deel je ze in één keer naar Google Foto's of een map, met bestandsnamen als `alpina-b5_01_voor-3-4-links-hoofdfoto.jpg`.

## Bijwerken

Vervang `index.html` in de repository. Verhoog bij grote wijzigingen `hoekvast-v1` in `sw.js` naar `v2`, zodat de telefoon de nieuwe versie ophaalt.
