// app.js - Rewritten with ES Module imports
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

// Get the directory name (equivalent to __dirname in CommonJS)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'Conference 2025',
    page: 'home'
  });
});

app.get('/about', (req, res) => {
  res.render('about', { 
    title: 'About | Conference 2025',
    page: 'about' 
  });
});

app.get('/speakers', (req, res) => {
  // Sample speakers data
  const speakers = [
    {
      name: 'Helle Lauridsen',
      title: 'Senior product manager, Systematic',
      bio: '',
      photo: '/images/hellelauridsen.jpeg'
    },
    {
      name: 'Reidun Brinchman',
      title: 'Biblioteksjef, Froland bibliotek',
      bio: 'Som leder for det første norske biblioteket etter Deichman som tok i bruk Cicero har Reidun opparbeidet seg god kunnskap om Cicero.',
      photo: '/images/reidunbrinchman.png'
    },
    {
      name: 'Inger Stenersen',
      title: 'Seniorrådgiver, Nasjonalbiblioteket',
      bio: '',
      photo: '/images/ingerstenersen.png'
    },
    {
      name: 'Bjørn Kjetil Fredriksen',
      title: 'Rådgiver, Rogaland fylkesbibliotek',
      bio: 'Leder prosjek Felles Formidlingsløsning, som skal lede frem til en felles formidlingsløsning for norske bibliotek.',
      photo: '/images/bkf.png'
    },
    {
      name: 'Elise Conradi',
      title: 'Produktleder, Biblioteksentralen',
      bio: 'Metadataekspert hos Biblioteksentralen.',
      photo: '/images/eliseconradi.png'
    },
    {
      name: 'Liv Gulbrandsen',
      title: 'Forfatter og litteraturformidler',
      bio: '',
      photo: '/images/livgulbrandsen.png'
    }
  ];
  
  res.render('speakers', { 
    title: 'Foredragsholdere | brukerforum 2025',
    page: 'speakers',
    speakers: speakers
  });
});

app.get('/schedule', (req, res) => {
  // Sample schedule data
  const schedule = [
    {
      day: 'Dag 1 - 24. mars 2025',
      events: [
        { 
          time: '09:00 - 10:00', 
          title: 'Omvisning på Tøyen bibliotek', 
          location: 'Deichman Tøyen',
          description: 'Bli med på en guidet omvisning av det innovative Tøyen bibliotek, inkludert Biblo Tøyen – et unikt bibliotek designet for barn og unge mellom 10 og 15 år.'
        },
        { 
          time: '10:00 - 11:00', 
          title: 'Registrering', 
          location: 'Deichman Bjørvika',
          description: 'Ankomst og registrering. Kaffe/te og noe lett å spise vil være tilgjengelig.'
        },
        { 
          time: '11:00 - 12:00', 
          title: 'Lunsj', 
          location: 'Café Centropa',
          description: 'Velsmakende lunsj med mulighet for å møte andre deltakere og utveksle erfaringer før programmet starter.'
        },
        { 
          time: '12:00 - 12:15', 
          title: 'Velkommen', 
          speaker: 'Merete Lie', 
          location: 'Deichman Bjørvika',
          description: 'Offisiell åpning av Cicero brukerforum 2025 med introduksjon til programmet og praktisk informasjon for de to dagene.'
        },
        { 
          time: '12:15 - 13:15', 
          title: 'Cicero-nettverk Norge', 
          location: 'Deichman Bjørvika',
          description: 'Presentasjon av status for Cicero-nettverket i Norge og diskusjon om fremtidig samarbeid mellom norske Cicero-bibliotek.'
        },
        { 
          time: '13:30 - 15:00', 
          title: 'Systematic', 
          speaker: 'Helle Lauridsen', 
          location: 'Deichman Bjørvika',
          description: 'Oppdatering fra Systematic om de siste forbedringene i Cicero og planer for fremtidige funksjoner og versjoner av systemet.'
        },
        { 
          time: '15:00 - 15:30', 
          title: 'Nasjonalt lånerregister og bibliotekkortet', 
          speaker: 'Inger Stenersen', 
          location: 'Deichman Bjørvika',
          description: 'En gjennomgang av det nasjonale lånerregisteret og hvordan det integreres med Cicero, samt oppdatering om status for det nasjonale bibliotekkortet.'
        },
        { 
          time: '15:30 - 15:45', 
          title: 'Takk for i dag', 
          location: 'Deichman Bjørvika',
          description: 'Oppsummering av dagen og informasjon om kveldens middag og morgendagens program.'
        },
        { 
          time: '16:00 - 16:30', 
          title: 'Omvisning Deichman Bjørvika (for påmeldte)', 
          location: 'Deichman Bjørvika',
          description: 'En eksklusiv omvisning av det prisbelønte hovedbiblioteket i Oslo, med fokus på arkitektur, teknologi og innovative bibliotekløsninger.'
        },
        { 
          time: '19:00 - 21:00', 
          title: 'Middag (for påmeldte)', 
          location: 'Café Centropa',
          description: 'Felles middag med god mat og drikke. En utmerket anledning til nettverksbygging og uformelle samtaler i hyggelige omgivelser.'
        }
      ]
    },
    {
      day: 'Dag 2 - 25. mars 2025',
      events: [
        { 
          time: '09:00 - 09:15', 
          title: 'Velkommen', 
          location: 'Deichman Bjørvika',
          description: 'Velkommen til dag 2 med oppsummering fra dag 1 og introduksjon til dagens program.'
        },
        { 
          time: '09:15 - 10:00', 
          title: 'Tips og triks - folkebibliotek del 1', 
          location: 'Deichmansalen',
          description: 'Praktiske tips og triks for optimal bruk av Cicero i folkebibliotek, inkludert katalogisering, utlån og arrangementsadministrasjon.'
        },
        { 
          time: '09:15 - 10:00', 
          title: 'Tips og triks - skolebibliotek del 1', 
          location: 'Kinoen',
          description: 'Parallellsesjon for skolebibliotek med fokus på klasseadministrasjon, tilpasset søk for elever og integrasjon med læringsplattformer.'
        },
        { 
          time: '10:15 - 11:00', 
          title: 'Tips og triks - folkebibliotek del 2', 
          location: 'Deichmansalen',
          description: 'Fortsettelse av tips og triks for folkebibliotek, med fokus på rapportering, statistikk og brukeradministrasjon.'
        },
        { 
          time: '10:15 - 11:00', 
          title: 'Tips og triks - skolebibliotek del 2', 
          location: 'Kinoen',
          description: 'Fortsettelse av parallellsesjon for skolebibliotek med fokus på statistikk og rapportering tilpasset skolebibliotekenes behov.'
        },
        { 
          time: '11:00 - 11:30', 
          title: 'Cicero-nettverk Norge', 
          location: 'Deichmansalen',
          description: 'Diskusjon om videre organisering av Cicero-nettverket i Norge, inkludert forslag til struktur og samarbeidsformer.'
        },
        { 
          time: '11:30 - 12:30', 
          title: 'Lunsj', 
          location: 'Vrimle',
          description: 'Lunsj og nettverksbygging i Deichmans flotte lokaler.'
        },
        { 
          time: '12:30 - 13:00', 
          title: 'Felles formidlingsløsning', 
          speaker: 'Bjørn Kjetil Fredriksen', 
          location: 'Deichman Bjørvika',
          description: 'Presentasjon av muligheter for en felles formidlingsløsning for Cicero-bibliotek, med demonstrasjon av prototype og diskusjon om videre utvikling.'
        },
        { 
          time: '13:00 - 13:45', 
          title: 'Nasjonal metadatabrønn', 
          speaker: 'Elise Conradi', 
          location: 'Deichman Bjørvika',
          description: 'Gjennomgang av den nasjonale metadatabrønnen og dens integrasjon med Cicero, samt planer for fremtidige forbedringer.'
        },
        { 
          time: '14:00 - 14:30', 
          title: 'Systematic', 
          speaker: 'Helle Lauridsen', 
          location: 'Deichman Bjørvika',
          description: 'Oppdatering fra Systematic om kommende funksjoner og mulighet for å stille spørsmål om fremtidige planer for Cicero.'
        },
        { 
          time: '14:30 - 15:00', 
          title: 'Avslutningsforedrag', 
          speaker: 'Liv Gulbrandsen', 
          location: 'Deichman Bjørvika',
          description: 'Inspirerende avslutningsforedrag om bibliotekets rolle i samfunnet og viktigheten av gode biblioteksystemer for å møte fremtidens behov.'
        }
      ]
    }
  ];
  
  res.render('schedule', { 
    title: 'Program | Brukerforum 2025',
    page: 'schedule',
    schedule: schedule
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', { 
    title: 'Contact | Conference 2025',
    page: 'contact' 
  });
});

// Start serveren
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});