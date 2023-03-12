import { Service } from '@models/Category'

export const services: Service[] = [
  {
    title: 'Produktutvikling',
    bgcolor: '#D9D9D9',
    priority: 1,
    subcategories: [
      {
        image: '/science.png',
        title: 'Ideprosess',
        content:
          'Vi kan hjelpe deg med å gå fra idestadiet til et ferdig produkt. Her kommer all vår ekspertise og vårt store kontaktflate inn. Vi bidrar til at dere gjør riktige avgjørelser i prosessen vedr. produkt, emballasje, merking, distribusjon og markedsføring.',
      },
      {
        image: '/science.png',
        title: 'Reseptutvikling',
        content:
          'Vi sitter med kunnskap om lover og regler som må følges i forbindelse med utvikling av en resept til et nytt produkt. Optipharma oppdaterer seg kontinuerlig på regelverk som gjelder for bransjen. Dette er en viktig del av produktutviklingsprosessen. Dette kan f.eks. være lov om mattrygghet, forskrift om matinformasjon, forskrift om tilsetningsstoffer og mye mer. Vi har erfart hvilke elementer som kjemiske passer sammen og hva som gir et godt resultat for et fungerende produkt. Her sitter vi på viktig kompetanse som du kan dra stor nytte av.',
      },
      {
        image: '/science.png',
        title: 'Smak og utforming',
        content:
          'Gjennom mange år har vi opparbeidet oss god erfaring på aroma og smakstilsetninger. Det kan være behov for om å kamuflere råvarer som ikke smaker godt. Vi har erfaring med hvilke smaker som egner seg for forskjellige type produkter, samt hvilke produktformer (piller, oljer, pulver) som forbedrer produktet. Dette kan bety mye for å lykkes i markedet.',
      },
      {
        image: '/science.png',
        title: 'Vegansk og økologisk',
        content:
          'Vi er DEBIO sertifisert som betyr at vi kan produsere økologiske produkter. Vi produserer både økologiske og veganske produkter. Dette gir oss kunnskap om lover og regler innenfor disse områdene.',
      },
    ],
  },
  {
    title: 'Produktgrupper',
    bgcolor: '#869e91',
    priority: 2,
    subcategories: [
      {
        image: '/drop.png',
        title: 'Tabletter',
        content:
          'Vi produserer tabletter for forskjellige formål, blant annet tyggetabletter, smeltetabletter og svelgetabletter. Her er det også mulig å velge størrelse og farge på tabletten. Smak er også en viktig del av det å produsere smelte og tyggetabletter.',
      },
      {
        image: '/drop.png',
        title: 'Flytende produkter',
        content:
          'Vi kan utvikle både vannløselige og oljebaserte produkter, for eksempel vitamindråper i pipetteflasker.',
      },
      {
        image: '/drop.png',
        title: 'Pulver',
        content:
          'Vi kan utvikle og levere sportsærnering, vitaminblandinger og urteblandinger.',
      },
      {
        image: '/drop.png',
        title: 'Kapsler',
        content:
          'Det er mulig å få utviklet både harde og myke kapsler. Vi kan også tilby kapsler i ulike farger. Kapselskallet kan være av gelatin eller vegetabilsk.',
      },
    ],
  },
  {
    title: 'Forpakning',
    bgcolor: '#D9D9D9',
    priority: 3,
    subcategories: [
      {
        image: '/bottles.png',
        title: 'Flasker',
        content:
          'Vi har flere ulike flasker for ulike formål. Vi kan tilby flasker i forskjellige formater, størrelser og farger. Vi har også erfaring i hva slags flasker som egner seg for ulike produkter.',
      },
      {
        image: '/bottles.png',
        title: 'Poser',
        content:
          'Vi kan tilby ulike poseløsninger til pulver og tabletter fra større poser til porsjonsposer med og uten zip funksjon.',
      },
      {
        image: '/bottles.png',
        title: 'Bokser',
        content:
          'Vi har bokser og lokk i ulike farger og størrelser. Bokser kan leveres i både plast og metall. Vi kan hjelpe deg med hva som egner seg best til ditt produkt.',
      },
      {
        image: '/bottles.png',
        title: 'Blisterforpakninger',
        content:
          'Vi produserer ulike blisterforpakning for både tabletter og kapsler. Vi har en rekke forskjellige pakkeløsninger på dette. Vi kan gi veiledning om blister er den riktige pakningstypen for ditt produkt. Vi kan også tilby blisterforpakning som kan sendes som brev. Dette gjør at man reduserer portokostnader.',
      },
    ],
  },
]
