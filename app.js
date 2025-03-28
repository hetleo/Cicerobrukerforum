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
    title: 'Cicero brukerforum 2025',
    page: 'home'
  });
});

app.get('/about', (req, res) => {
  res.render('about', { 
    title: 'Om konferansen | brukerforum 2025',
    page: 'about' 
  });
});

app.get('/speakers', (req, res) => {
  // Sample speakers data
  const speakers = [
    {
      name: 'Merete Lie',
      title: 'Biblioteksjef, Deichman',
      bio: '',
      photo: '/images/meretelie.jpg',
      photoCredit: 'Foto: Agnete Brun'
    },
    {
      name: 'Jakob Ilum Damsgaard',
      title: 'Business Development Director, Systematic',
      bio: '',
      photo: '/images/jakob.jpg',
      photoCredit: 'Foto: Systematic'
    },
    {
      name: 'Jesper Hansen',
      title: 'Senior Project Manager, Systematic',
      bio: '',
      photo: '/images/profil_mann.jpg'
    },
    {
      name: 'Jonas Magnusson',
      title: 'Senior Business Development Manager Nordics, Systematic',
      bio: '',
      photo: '/images/profil_mann.jpg'
    },
    {
      name: 'Reidun Brinchman',
      title: 'Biblioteksjef, Froland bibliotek',
      bio: 'Som leder for det første norske biblioteket etter Deichman som tok i bruk Cicero har Reidun opparbeidet seg god kunnskap om Cicero.',
      photo: '/images/reidun.jpg',
      photoCredit: 'Foto: privat'
    },
    {
      name: 'Hege Hatlevik',
      title: 'Funksjonell systemansvarlig for Cicero i Osloskolen',
      bio: '',
      photo: '/images/hegehatlevik.jpg'
    },
    {
      name: 'Silje Elinesdatter Grimseid',
      title: 'Systemforvalter, Deichman',
      bio: '',
      photo: '/images/siljegrimseid.jpg'
    },
    {
      name: 'Marie Johansen',
      title: 'Fagansvarlig service, Deichman Bjørvika',
      bio: '',
      photo: '/images/profil_kvinne.jpg'
    },
    {
      name: 'Annike Selmer',
      title: 'Leder for seksjon Publikum i Deichman Bjørvika, og systemeier for Cicero',
      bio: '',
      photo: '/images/Annike.jpg'
    },
    {
      name: 'Inger Stenersen',
      title: 'Seniorrådgiver, Nasjonalbiblioteket',
      bio: '',
      photo: '/images/ingerstenersen.jpg',
      photoCredit: 'Foto: Kari Margrethe Sabro'
    },
    {
      name: 'Bjørn Kjetil Fredriksen',
      title: 'Rådgiver, Rogaland fylkesbibliotek',
      bio: 'Leder prosjekt om felles Formidlingsløsning.',
      photo: '/images/bkf.jpg',
      photoCredit: 'Foto: Anne Lise Nordheim'
    },
    {
      name: 'Elise Conradi',
      title: 'Produktleder, Biblioteksentralen',
      bio: 'Metadataekspert hos Biblioteksentralen.',
      photo: '/images/eliseconradi.png',
      photoCredit: 'Foto: Biblioteksentralen'
    },
    {
      name: 'Inger Nygård',
      title: 'Produktleder, Biblioteksentralen',
      bio: '',
      photo: '/images/inger.jpg',
      photoCredit: 'Foto: Biblioteksentralen'
    },
    {
      name: 'Jonas Svartberg Arntzen',
      title: 'Avdelingsleder for tjenesteutvikling, Biblioteksentralen',
      bio: '',
      photo: '/images/jonas.jpg',
      photoCredit: 'Foto: Biblioteksentralen'
    },
    {
      name: 'Liv Gulbrandsen',
      title: 'Forfatter og litteraturformidler',
      bio: '',
      photo: '/images/profil_kvinne.jpg'
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
      day: '24. mars 2025',
      events: [
        { 
          time: '09:00 - 10:00', 
          title: 'Omvisning på Tøyen bibliotek (for påmeldte)', 
          location: 'Deichman Tøyen',
          description: 'Bli med på en guidet omvisning av Tøyen bibliotek, inkludert Biblo Tøyen – et bibliotek designet for barn og unge mellom 10 og 15 år.'
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
          location: 'Vrimle',
          description: 'Lunsj med mulighet for å møte andre deltakere og utveksle erfaringer før programmet starter.'
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
          title: 'Ciceronettverk Norge', 
          speaker: 'Annike Selmer',
          location: 'Deichman Bjørvika',
          description: 'Presentasjon av Cicero-nettverket i Norge og fremtidig samarbeid mellom norske Cicero-bibliotek.'
        },
        { 
          time: '13:30 - 15:00', 
          title: 'Systematic', 
          speaker: '', 
          location: 'Deichman Bjørvika',
          description: 'Systematic presenterer hvem de er, og hva som er status på implementeringen av Cicero i Norge. Presentasjonen inkluderer veiledning for hvordan man kommer godt i gang med systemet, samt en demonstrasjon av Cicero. Avslutningsvis vil Systematic gi en orientering om implementerte og planlagte utvidelser til plattformen.'
        },
        { 
          time: '15:00 - 15:30', 
          title: 'Nasjonalt lånerregister og bibliotekkortet', 
          speaker: 'Inger Stenersen', 
          location: 'Deichman Bjørvika',
          description: 'Nasjonalt lånerregister og Bibliotekkortet. En oppsummering av arbeidet så langt, og om hva dette betyr for bibliotekene. Hva er veien videre?'
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
          speaker: 'Annike Selmer',
          location: 'Deichman Bjørvika',
          description: 'En omvisning i hovedbiblioteket i Oslo.'
        },
        { 
          time: '19:00 - 21:00', 
          title: 'Middag (for påmeldte)', 
          location: 'Centropa',
          description: 'Felles middag på Centropa i Deichman bibliotek. Her serveres spennende retter inspirert av europeisk matkultur i en moderne setting.<br><br><a href="https://www.centropa.no" target="_blank">Besøk restaurantens nettside</a>'
        }
      ]
    },
    {
      day: '25. mars 2025',
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
          speaker: 'Marie Johansen, Camilla Wiig, Asgeir Rekkavik og Silje Grimseid',
          location: 'Deichmansalen',
          description: 'Praktiske tips og triks bruk av Cicero i folkebibliotek.'
        },
        { 
          time: '09:15 - 10:00', 
          title: 'Tips og triks - skolebibliotek del 1',
          speaker: 'Hege Hatlevik, Trine Lise Hagen', 
          location: 'Kinoen',
          description: 'Parallellsesjon for skolebibliotek med fokus på bruk av Cicero.'
        },
        { 
          time: '10:15 - 11:00', 
          title: 'Tips og triks - folkebibliotek del 2', 
          speaker: 'Reidun Brinchman',
          location: 'Deichmansalen',
          description: 'Fortsettelse av tips og triks for folkebibliotek.'
        },
        { 
          time: '10:15 - 11:00', 
          title: 'Tips og triks - skolebibliotek del 2', 
          speaker: 'Hege Hatlevik, Trine Lise Hagen',
          location: 'Kinoen',
          description: 'Fortsettelse av parallellsesjon for skolebibliotek.'
        },
        { 
          time: '11:00 - 11:30', 
          title: 'Ciceronettverk Norge', 
          speaker: 'Annike Selmer',
          location: 'Deichmansalen',
          description: ''
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
          description: 'Oppdatert status om Felles Formidlingsløsning, det nye nasjonale prosjektet for en felles nettsideløsning og app for bibliotekene.'
        },
        { 
          time: '13:00 - 13:45', 
          title: 'Nasjonal metadatabrønn', 
          speaker: 'Elise Conradi, Inger Nygård, Jonas Svartberg Arntzen', 
          location: 'Deichman Bjørvika',
          description: 'Avtalen med Nasjonalbiblioteket er klar: Biblioteksentralen skal levere den nasjonale Metadatabrønnen. Hør mer om hvordan det påvirker biblioteket ditt.'
        },
        { 
          time: '14:00 - 14:30', 
          title: 'Systematic', 
          speaker: '', 
          location: 'Deichman Bjørvika',
          description: 'Systematic gir en status for Cicero i øvrige land (Danmark, Sverige og Tyskland)'
        },
        { 
          time: '14:30 - 15:00', 
          title: 'Avslutningsforedrag', 
          speaker: 'Liv Gulbrandsen', 
          location: 'Deichman Bjørvika',
          description: 'Inspirerende avslutningsforedrag.'
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