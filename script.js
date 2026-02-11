/* =========================================================
   IMPREVISTI — SCRIPT
   - Nessun backend: solo array/JSON
   - Estrazioni non ripetitive con "bag" (shuffle + pop)
   - Moduli + giocatori: sempre disponibile, potenzialmente ripetitivo
   ========================================================= */

/* ------------------------------
   1) DATI (cataloghi)
   ------------------------------ */

// Imprevisti 
const CATALOGO = {
  prePartita: [
    "Nessun Imprevisto, ti è andata bene...",
    "Nessun Imprevisto, ti è andata bene...",
    "Largo ai giovani: Abbiamo bisogno di mischiare un pò le carte in tavola. Schiera titolare 2 giovani under 19.",
    "Ci è venuta una Inzaghite acuta: sostituisci all'istante ogni giocatore che viene ammonito.",
    "Presuntuoso: Un giocatore si da delle arie deridendo i piu giovani. Se fa goal fai un adeguamento di contratto, altrimenti cedilo (anche in prestito).",
    "Debutto da sogno: Oggi ci siamo svegliati di ottimo umore. Promuovi un giovane della Primavera e schieralo titolare 90'.",
    "Post sbronza: 2 giocatori non si sono presentati alla rifinitura. Mettili in tribuna per tutta la partita.",
    "Nessun Imprevisto, ti è andata bene...",
    "Nessun Imprevisto, ti è andata bene...",
    "In difesa dei piu deboli !! Il nostro allenatore è molto magnanimo ed esige che ogni calciatore sia integrato nel gruppo. Schiera titolare per tutta la prossima partita il peggior giocatore in rosa.",
    "Una serata al Bolivar: Provare il miglior Pisco della città la notte prima di una partita non è stata un'idea eccellente... L'allenatore si abbiocca durante l'intervallo. Gioca a simulazione lenta il secondo tempo fino a quando non c'è un goal.",
    "Ristorante di sushi non raccomandato: Alcuni calciatori provano un nuovo ristorante di sushi appena aperto, che purtroppo si rivela una cattiva idea. Dovrai tenere 3 dei tuoi calciatori in tribuna causa forte dissenteria e cambiare modulo di gioco.",
    "Vi faccio conoscere la città: Il capitano porta i compagni a fare serata. Visibilmente stanchi già da inizio gara, dovrai effettuare tutti e 5 i cambi prima dell' inizio del secondo tempo. (Il capitano deve giocare tutti i 90').",
    "Ma cosa ti viene in mente??: Scambia di posizione per tutta la partita due giocatori scelti casualmente.",
    "Nessun Imprevisto, ti è andata bene...",
    "Nessun Imprevisto, ti è andata bene...",
    "Blackout Tecnologico: Tutti i sistemi sono andati in Tilt ! Simula la prossima partita e spera di non perdere.",
    "Nostalgia canaglia: Il nostro allenatore ritrova delle vecchie foto di quando giocava tra i professionisti nella galleria del suo smartphone. Cambia modulo nella prossima partita tramite estrazione random",
    "Voglia di vincere: I titolari della prossima partita saranno gli undici giocatori della rosa con votazione media stagionale più alta, indipendentemente dai ruoli",
    "Sogno premonitore: Il giocatore estratto racconta di aver sognato una finale europea dove gioca titolare nel ruolo di COC per 90' e fa goal. L'allenatore si lascia convincere e lo schiera in quella posizione !",
    "Il compleanno del mister: I calciatori organizzano un piccolo aperitivo nello spogliatoio per festeggiarlo. Loro ci tengono e vogliono fargli vincere la partita, aumenta Velocità ed Accelerazione di 10 punti",
    "Nessun Imprevisto, ti è andata bene...",
    "Nessun Imprevisto, ti è andata bene...",
    "La gita nella foresta di Nottingham: I ragazzi partecipano ad una gita durante il giorno libero. Purtroppo tutti i portieri si perdono ed arrivreanno tardi allo stadio, estrai il fortunato che giocherà in porta per i prossimi 90'.",
    "Il Talento Ribelle: Il miglior giovane under19 mette in discussione le scelte dell'allenatore. Per le prossime 2 partite o lo schieri titolare o lo metti in tribuna.",
    "Allenamento punitivo: Il Mister è furioso dell'atteggiamento dei suoi: tutti i giocatori con stamina sotto l’80 partono titolari.",
    "Terremoto Social: Un giocatore è al centro di alcune critiche su Instagram. Lancia il dado, quel calciatore deve giocare tutta la partita titolare e fuori ruolo.",
    "Scaramanzia pura: Il capitano cambia scarpini all’ultimo. Dovrà tirare TUTTI i calci piazzati.",
    "Nessun Imprevisto, ti è andata bene...",
    "Nessun Imprevisto, ti è andata bene...",
    "Riunione strategica: Tutti per uno e Uno per tutti !! Lancia il dado e controlla la nazionalità del calciatore estratto. Tutti i giocatori di quella nazionalità (tranne lui) devono partire titolari.",
    "Confusione tattica: Il Mister ha dormito troppo e non ha fatto colazione. Estrai due moduli che siano diversi da quello attuale. Usali entrambi nella prossima partita, uno per tempo.",
    "Influenza stagionale: Un nuovo virus è arrivato in città, la squadra è protetta ma qualcuno non ha seguito i consigli medici. Estrai due giocatori che non potranno essere convocati",
    "Esperimento folle: Una vecchia gloria è venuta a far visita alla squadra durante il ritiro ed ha riempito l'allenatore di idee confusionarie. Usa la Difesa a 3 con almeno un terzino centrale per tutti i 90'.",
    "Sciopero dei benzinai: L'allenatore, costretto a venire a piedi, arriva tardi allo stadio perchè la sua macchina è rimasta senza benzina. Il suo assistente s'incarica di cominciare la partita ma non avevano avuto tempo di organizzare una strategia. Simula il 1° tempo e scendi in campo nel 2°.",
    "Nessun Imprevisto, ti è andata bene...",
    "Nessun Imprevisto, ti è andata bene...",
    "Tifosi inferociti: Gli ultimi risultati sono stati molto deludenti e la tifoseria è molto contrariata. Se perdi, vendi un titolare entro fine stagione.",
    "Scelta impopolare: La società ha imposto una decisione al Mister, che per rispetto non vuole opporsi. Il giocatore con overall più alto parte dalla panchina.",
    "Gelo nello spogliatoio: Il riscaldamento si è rotto ed i giocatori non riescono a prepararsi per la partita. Nessuna sostituzione consentita per tutti i 90'.",
    "Allenatore Visionario: E' arrivato il momento di far sbocciare il talento nascosto dei nostri ! Un difensore cenrale a tua scelta deve giocare COC.",
    "Uno spettacolo di Magia: La società organizza un piccolo intattenimento durante la colazione in hotel, l'Allenatore si fa prendere la mano e segue la corrente. Lancia il dado 2 volte, il Primo giocatore gioca nel suo ruolo a specchio ed il Secondo gioca fuori posizione. ",
    "Nessun Imprevisto, ti è andata bene...",
    "Nessun Imprevisto, ti è andata bene...",
    "Modulo astrale: L'oroscopo della mattina dice di seguire le stelle senza farsi troppe domande. Estrai un modulo random, devi usarlo per tutta la prossima partita anche se non hai i ruoli adatti.",
    "Nazionalismo improvviso: Estrai una nazionalità random. Almeno 3 giocatori di quella nazione devono partire titolari. Se non ne hai abbastanza, pesca tra gli svincolati",
    "Confusione negli appunti: Il Mister ha portato a bordocampo un quaderno degli appunti ma pare che non sia il suo. Estrai 2 moduli random. Il primo va usato nel primo tempo, il secondo negli ultimi 30’.",
    "Esperimento statistico: La società prova a dispensare consigli alla squadra ma decide di affidarsi al caso. Lancia il dado, se pari → solo giovani titolari. Se dispari → solo over 28.",
    "Turnover forzato: Il preparatore dei portieri ha organizzato una serata cinema nella sua casa in campagna, i ragazzi si sono divertiti un sacco ma hanno fatto le ore piccole. Estrai 4 giocatori random, tutti devono partire titolari ed almeno 2 devono fare 90'.",
    "Nessun Imprevisto, ti è andata bene...",
    "Nessun Imprevisto, ti è andata bene...",
    "Giornata no: L'Allenatore si è svegliato con la luna storta e l'unica cosa che desidera è finire la giornata il prima possibile ! Lancia il dado, Se esce un numero compreso tra 1 e 11, simula il primo tempo. Se esce un numero compreso tra 15 e 25, simula il secondo.",
    "Decisione del destino: Lancia il dado. Se esce un numero pari puoi ignorare l’imprevisto. Altrimenti sorteggiane un altro.",
    "Influenza internazionale: Uno strano virus ha colpito un determinato numero di giocatori che erano in stanza insieme o comunque adiacenti. Estrai 2 nazionalità. Tutti i giocatori di quelle nazioni non possono essere convocati per la prossima partita.",
    "Formazione casuale: La Squadra arriva tardi allo stadio e quando al Mister viene chiesta la formazione titolare lui consegna una bozza di appunti anzichè quella ufficiale. Estrai 11 giocatori random. Devono essere tutti schierati titolari almeno per un tempo, scegli tu le posizioni piu adatte.",
    "La borraccia sbagliata: Durante il riscaldamento qualcuno scambia le borracce con quelle del settore giovanile, piene di bevande energetiche “artigianali”. Aumenta la Velocità di 10 punti ed abbassa la precisione Tiro di altri 10",
    "Nessun Imprevisto, ti è andata bene...",
    "Nessun Imprevisto, ti è andata bene...",
  ],

  mercato: [
    "Nessun Imprevisto, ti è andata bene...",
    "Nessun Imprevisto, ti è andata bene...",
    "Svincolati di lusso: Estrai una nazione a caso, effettua almeno 2 acquisto dagli svincolati di quella nazione e falli giocare per un mese consecutivo.",
    "Vincolo extracontinentale: Uno dei tuoi acquisti deve provenire da un continente diverso da quello del club.",
    "Debito Improvviso del Club: La dirigenza richiede una cessione obbligatoria: vendi uno dei 3 calciatori con valutazione più alta.",
    "Nuova norma  del Presidente: lo stipendio più alto della rosa diventa un limite invalicabile per TUTTI i nuovi acquisti.",
    "Il Pallino fisso: Estrai una nazione e manda tutti gli scout dalle giovanili in quella nazione per 9 mesi",
    "Nessun Imprevisto, ti è andata bene...",
    "Nessun Imprevisto, ti è andata bene...",
    "Blocco delle firme: Un errore burocratico blocca i contratti per giorni. Non puoi acquistare nessun giocatore nelle prime 2 settimane di mercato.",
    "L’agente invadente: Un agente continua a chiamare la dirigenza spingendo il suo assistito. Devi acquistare il primo giocatore dalla lista svincolati, anche se non ti convince.",
    "Mercato minimalista: Il presidente si è fissato con la sostenibilità. Puoi fare solo 1 acquisto in tutta la sessione.",
    "Svendita estiva: Arrivano offerte ridicole ma insistenti. Se ricevi piu offerte per un titolare, devi accettare la seconda proposta senza negoziare.",
    "Panico da infortuni: Lo staff medico prevede “un’annata complicata”. Almeno un acquisto deve essere un difensore (DC) o un portiere.",
    "Nessun Imprevisto, ti è andata bene...",
    "Nessun Imprevisto, ti è andata bene...",
    "Mercato isterico: Il mister cambia idea ogni giorno e per ogni giocatore che entra ne deve uscire un altro. Dopo ogni acquisto devi cedere un altro giocatore della rosa.",
    "Mercato a senso unico: Tutti vogliono andare via, nessuno arrivare. Devi vendere almeno 2 giocatori della tua rosa prima di cominciare a comprare.",
    "Disastro Mediatico: Stanno circolando diverse voci extra-campo su alcuni giocatori, ed ovviamente la società non ne è contenta. Urge un restiling della rosa ! Devi cedere un totale di 5 giocatori, di cui 3 obbligatoriamente dagli 11 titolari",
    "Illuminazione notturna: Il mister si sveglia alle 3 di notte dopo un sogno molto realistico con un’idea folle. Estrai una Nazione random e pesca un giocatore dagli svincolati. Il fortunato dovra collezionare almeno 15 presenze prima della prossima sessione.",
    "Taglio agli intermediari: Il club litiga con alcuni agenti. Puoi trattare solo acquisti diretti, niente prestiti con diritto.",
    "Nessun Imprevisto, ti è andata bene...",
    "Nessun Imprevisto, ti è andata bene...",
    "Budget mal interpretato: Un numero letto male cambia tutto ed il DS si ritrova con le mani legate. Riduci di 10 milioni il budget disponibile.",
    "Affari di famiglia: Un dirigente spinge per “un suo contatto” dopo una bellissima rimpatriata di famiglia al cenone di Natale. Acquista un giocatore con Overall inferiore alla media di tutta la rosa.",
    "Mercato caotico: Tutto cambia, niente è certo. Dopo aver pescato questo imprevisto, pescane subito altri due e spera bene.",
    "Il DS Illuminato: Dopo un seminario motivazionale dal titolo “Il talento non si misura”, il direttore sportivo torna convinto di aver capito tutto. Estrai una nazione random. Per tutta la sessione puoi fare acquisti SOLO da quella nazione, indipendentemente dai ruoli o costi.",
    "La Mappa Strappata: Durante un volo turbolento, una mappa con tutte le aree osservate finisce distrutta. Devi abbandonare TUTTE le missioni scouting attive, riavviarne solo una ed usare un solo talent scout fino alla prossima finestra di mercato.",
    "Nessun Imprevisto, ti è andata bene...",
    "Nessun Imprevisto, ti è andata bene...",
    "Fissazione Presidenziale: Il presidente si è innamorato di un calcio “esotico” visto in TV alle 2 di notte. Estrai una nazione random. Almeno uno scouting e un nuovo acquisto devono provenire da lì.",
    "Mercato alla Cieca: Un bug nel sistema cancella nomi e statistiche. Devi acquistare un giocatore della Repubblica Ceca, di cui non si hanno informazioni, scelto senza guardare le statistiche dettagliate.",
    "Influenza Locale: Un campionato minore sorprende tutti. Estrai 3 giocatori da un Modulo random, successivamente estrai una Nazione random e avvia subito una missione scouting in quella nazione per calciatori di quei ruoli.",
    "Telefonata dall’Estero: Uno scout chiama entusiasta alle 5 del mattino dicendo di aver scoperto il nuovo Pallone d'Oro. Devi spostare un osservatore nella sua nazione di origine.",
    "Mercato teatrale: Il presidente vuole “colpi ad effetto”, ingressi in scena e finali drammatici. Devi chiudere un affare nelle ultime ore di mercato, anche se forzato. Il Calciatore apparterrà ad una Nazione random, avrà un ruolo estratto da un Modulo random e sarà il giocatore numero X dalla lista degli svincolati selezionato dal lancio del Dado.",
    "Nessun Imprevisto, ti è andata bene...",
    "Nessun Imprevisto, ti è andata bene...",
  ],
};

// Nazioni del mondo (195: 193 membri ONU + 2 osservatori)
// Struttura richiesta: { nome: "Italia", continente: "Europa" }
const NAZIONI = [
  {
    "nome": "Afghanistan",
    "continente": "Asia"
  },
  {
    "nome": "Albania",
    "continente": "Europa"
  },
  {
    "nome": "Algeria",
    "continente": "Africa"
  },
  {
    "nome": "Andorra",
    "continente": "Europa"
  },
  {
    "nome": "Angola",
    "continente": "Africa"
  },
  {
    "nome": "Antigua e Barbuda",
    "continente": "Nord America"
  },
  {
    "nome": "Argentina",
    "continente": "Sud America"
  },
  {
    "nome": "Armenia",
    "continente": "Asia"
  },
  {
    "nome": "Australia",
    "continente": "Oceania"
  },
  {
    "nome": "Austria",
    "continente": "Europa"
  },
  {
    "nome": "Azerbaijan",
    "continente": "Asia"
  },
  {
    "nome": "Bahamas",
    "continente": "Nord America"
  },
  {
    "nome": "Bahrain",
    "continente": "Asia"
  },
  {
    "nome": "Bangladesh",
    "continente": "Asia"
  },
  {
    "nome": "Barbados",
    "continente": "Nord America"
  },
  {
    "nome": "Belarus",
    "continente": "Europa"
  },
  {
    "nome": "Belgio",
    "continente": "Europa"
  },
  {
    "nome": "Belize",
    "continente": "Nord America"
  },
  {
    "nome": "Benin",
    "continente": "Africa"
  },
  {
    "nome": "Bhutan",
    "continente": "Asia"
  },
  {
    "nome": "Bolivia",
    "continente": "Sud America"
  },
  {
    "nome": "Bosnia ed Erzegovina",
    "continente": "Europa"
  },
  {
    "nome": "Botswana",
    "continente": "Africa"
  },
  {
    "nome": "Brasile",
    "continente": "Sud America"
  },
  {
    "nome": "Brunei",
    "continente": "Asia"
  },
  {
    "nome": "Bulgaria",
    "continente": "Europa"
  },
  {
    "nome": "Burkina Faso",
    "continente": "Africa"
  },
  {
    "nome": "Burundi",
    "continente": "Africa"
  },
  {
    "nome": "Cambogia",
    "continente": "Asia"
  },
  {
    "nome": "Camerun",
    "continente": "Africa"
  },
  {
    "nome": "Canada",
    "continente": "Nord America"
  },
  {
    "nome": "Capo Verde",
    "continente": "Africa"
  },
  {
    "nome": "Repubblica Centrafricana",
    "continente": "Africa"
  },
  {
    "nome": "Ciad",
    "continente": "Africa"
  },
  {
    "nome": "Cile",
    "continente": "Sud America"
  },
  {
    "nome": "Cina",
    "continente": "Asia"
  },
  {
    "nome": "Colombia",
    "continente": "Sud America"
  },
  {
    "nome": "Comore",
    "continente": "Africa"
  },
  {
    "nome": "Congo (Repubblica del Congo)",
    "continente": "Africa"
  },
  {
    "nome": "Congo (Repubblica Democratica del Congo)",
    "continente": "Africa"
  },
  {
    "nome": "Costa Rica",
    "continente": "Nord America"
  },
  {
    "nome": "Costa d’Avorio",
    "continente": "Africa"
  },
  {
    "nome": "Croazia",
    "continente": "Europa"
  },
  {
    "nome": "Cuba",
    "continente": "Nord America"
  },
  {
    "nome": "Cipro",
    "continente": "Europa"
  },
  {
    "nome": "Repubblica Ceca",
    "continente": "Europa"
  },
  {
    "nome": "Danimarca",
    "continente": "Europa"
  },
  {
    "nome": "Gibuti",
    "continente": "Africa"
  },
  {
    "nome": "Dominica",
    "continente": "Nord America"
  },
  {
    "nome": "Repubblica Dominicana",
    "continente": "Nord America"
  },
  {
    "nome": "Ecuador",
    "continente": "Sud America"
  },
  {
    "nome": "Egitto",
    "continente": "Africa"
  },
  {
    "nome": "El Salvador",
    "continente": "Nord America"
  },
  {
    "nome": "Guinea Equatoriale",
    "continente": "Africa"
  },
  {
    "nome": "Eritrea",
    "continente": "Africa"
  },
  {
    "nome": "Estonia",
    "continente": "Europa"
  },
  {
    "nome": "Eswatini",
    "continente": "Africa"
  },
  {
    "nome": "Etiopia",
    "continente": "Africa"
  },
  {
    "nome": "Figi",
    "continente": "Oceania"
  },
  {
    "nome": "Finlandia",
    "continente": "Europa"
  },
  {
    "nome": "Francia",
    "continente": "Europa"
  },
  {
    "nome": "Gabon",
    "continente": "Africa"
  },
  {
    "nome": "Gambia",
    "continente": "Africa"
  },
  {
    "nome": "Georgia",
    "continente": "Asia"
  },
  {
    "nome": "Germania",
    "continente": "Europa"
  },
  {
    "nome": "Ghana",
    "continente": "Africa"
  },
  {
    "nome": "Grecia",
    "continente": "Europa"
  },
  {
    "nome": "Grenada",
    "continente": "Nord America"
  },
  {
    "nome": "Guatemala",
    "continente": "Nord America"
  },
  {
    "nome": "Guinea",
    "continente": "Africa"
  },
  {
    "nome": "Guinea-Bissau",
    "continente": "Africa"
  },
  {
    "nome": "Guyana",
    "continente": "Sud America"
  },
  {
    "nome": "Haiti",
    "continente": "Nord America"
  },
  {
    "nome": "Honduras",
    "continente": "Nord America"
  },
  {
    "nome": "Ungheria",
    "continente": "Europa"
  },
  {
    "nome": "Islanda",
    "continente": "Europa"
  },
  {
    "nome": "India",
    "continente": "Asia"
  },
  {
    "nome": "Indonesia",
    "continente": "Asia"
  },
  {
    "nome": "Iran",
    "continente": "Asia"
  },
  {
    "nome": "Iraq",
    "continente": "Asia"
  },
  {
    "nome": "Irlanda",
    "continente": "Europa"
  },
  {
    "nome": "Israele",
    "continente": "Asia"
  },
  {
    "nome": "Italia",
    "continente": "Europa"
  },
  {
    "nome": "Giamaica",
    "continente": "Nord America"
  },
  {
    "nome": "Giappone",
    "continente": "Asia"
  },
  {
    "nome": "Giordania",
    "continente": "Asia"
  },
  {
    "nome": "Kazakistan",
    "continente": "Asia"
  },
  {
    "nome": "Kenya",
    "continente": "Africa"
  },
  {
    "nome": "Kiribati",
    "continente": "Oceania"
  },
  {
    "nome": "Corea del Nord",
    "continente": "Asia"
  },
  {
    "nome": "Corea del Sud",
    "continente": "Asia"
  },
  {
    "nome": "Kuwait",
    "continente": "Asia"
  },
  {
    "nome": "Kirghizistan",
    "continente": "Asia"
  },
  {
    "nome": "Laos",
    "continente": "Asia"
  },
  {
    "nome": "Lettonia",
    "continente": "Europa"
  },
  {
    "nome": "Libano",
    "continente": "Asia"
  },
  {
    "nome": "Lesotho",
    "continente": "Africa"
  },
  {
    "nome": "Liberia",
    "continente": "Africa"
  },
  {
    "nome": "Libia",
    "continente": "Africa"
  },
  {
    "nome": "Liechtenstein",
    "continente": "Europa"
  },
  {
    "nome": "Lituania",
    "continente": "Europa"
  },
  {
    "nome": "Lussemburgo",
    "continente": "Europa"
  },
  {
    "nome": "Madagascar",
    "continente": "Africa"
  },
  {
    "nome": "Malawi",
    "continente": "Africa"
  },
  {
    "nome": "Malesia",
    "continente": "Asia"
  },
  {
    "nome": "Maldive",
    "continente": "Asia"
  },
  {
    "nome": "Mali",
    "continente": "Africa"
  },
  {
    "nome": "Malta",
    "continente": "Europa"
  },
  {
    "nome": "Isole Marshall",
    "continente": "Oceania"
  },
  {
    "nome": "Mauritania",
    "continente": "Africa"
  },
  {
    "nome": "Mauritius",
    "continente": "Africa"
  },
  {
    "nome": "Messico",
    "continente": "Nord America"
  },
  {
    "nome": "Micronesia",
    "continente": "Oceania"
  },
  {
    "nome": "Moldova",
    "continente": "Europa"
  },
  {
    "nome": "Monaco",
    "continente": "Europa"
  },
  {
    "nome": "Mongolia",
    "continente": "Asia"
  },
  {
    "nome": "Montenegro",
    "continente": "Europa"
  },
  {
    "nome": "Marocco",
    "continente": "Africa"
  },
  {
    "nome": "Mozambico",
    "continente": "Africa"
  },
  {
    "nome": "Myanmar",
    "continente": "Asia"
  },
  {
    "nome": "Namibia",
    "continente": "Africa"
  },
  {
    "nome": "Nauru",
    "continente": "Oceania"
  },
  {
    "nome": "Nepal",
    "continente": "Asia"
  },
  {
    "nome": "Paesi Bassi",
    "continente": "Europa"
  },
  {
    "nome": "Nuova Zelanda",
    "continente": "Oceania"
  },
  {
    "nome": "Nicaragua",
    "continente": "Nord America"
  },
  {
    "nome": "Niger",
    "continente": "Africa"
  },
  {
    "nome": "Nigeria",
    "continente": "Africa"
  },
  {
    "nome": "Macedonia del Nord",
    "continente": "Europa"
  },
  {
    "nome": "Norvegia",
    "continente": "Europa"
  },
  {
    "nome": "Oman",
    "continente": "Asia"
  },
  {
    "nome": "Pakistan",
    "continente": "Asia"
  },
  {
    "nome": "Palau",
    "continente": "Oceania"
  },
  {
    "nome": "Panama",
    "continente": "Nord America"
  },
  {
    "nome": "Papua Nuova Guinea",
    "continente": "Oceania"
  },
  {
    "nome": "Paraguay",
    "continente": "Sud America"
  },
  {
    "nome": "Peru",
    "continente": "Sud America"
  },
  {
    "nome": "Filippine",
    "continente": "Asia"
  },
  {
    "nome": "Polonia",
    "continente": "Europa"
  },
  {
    "nome": "Portogallo",
    "continente": "Europa"
  },
  {
    "nome": "Qatar",
    "continente": "Asia"
  },
  {
    "nome": "Romania",
    "continente": "Europa"
  },
  {
    "nome": "Russia",
    "continente": "Europa"
  },
  {
    "nome": "Ruanda",
    "continente": "Africa"
  },
  {
    "nome": "Saint Kitts e Nevis",
    "continente": "Nord America"
  },
  {
    "nome": "Saint Lucia",
    "continente": "Nord America"
  },
  {
    "nome": "Saint Vincent e Grenadine",
    "continente": "Nord America"
  },
  {
    "nome": "Samoa",
    "continente": "Oceania"
  },
  {
    "nome": "San Marino",
    "continente": "Europa"
  },
  {
    "nome": "São Tomé e Príncipe",
    "continente": "Africa"
  },
  {
    "nome": "Arabia Saudita",
    "continente": "Asia"
  },
  {
    "nome": "Senegal",
    "continente": "Africa"
  },
  {
    "nome": "Serbia",
    "continente": "Europa"
  },
  {
    "nome": "Seychelles",
    "continente": "Africa"
  },
  {
    "nome": "Sierra Leone",
    "continente": "Africa"
  },
  {
    "nome": "Singapore",
    "continente": "Asia"
  },
  {
    "nome": "Slovacchia",
    "continente": "Europa"
  },
  {
    "nome": "Slovenia",
    "continente": "Europa"
  },
  {
    "nome": "Isole Salomone",
    "continente": "Oceania"
  },
  {
    "nome": "Somalia",
    "continente": "Africa"
  },
  {
    "nome": "Sudafrica",
    "continente": "Africa"
  },
  {
    "nome": "Sud Sudan",
    "continente": "Africa"
  },
  {
    "nome": "Spagna",
    "continente": "Europa"
  },
  {
    "nome": "Sri Lanka",
    "continente": "Asia"
  },
  {
    "nome": "Sudan",
    "continente": "Africa"
  },
  {
    "nome": "Suriname",
    "continente": "Sud America"
  },
  {
    "nome": "Svezia",
    "continente": "Europa"
  },
  {
    "nome": "Svizzera",
    "continente": "Europa"
  },
  {
    "nome": "Siria",
    "continente": "Asia"
  },
  {
    "nome": "Tagikistan",
    "continente": "Asia"
  },
  {
    "nome": "Tanzania",
    "continente": "Africa"
  },
  {
    "nome": "Thailandia",
    "continente": "Asia"
  },
  {
    "nome": "Timor Est",
    "continente": "Asia"
  },
  {
    "nome": "Togo",
    "continente": "Africa"
  },
  {
    "nome": "Tonga",
    "continente": "Oceania"
  },
  {
    "nome": "Trinidad e Tobago",
    "continente": "Nord America"
  },
  {
    "nome": "Tunisia",
    "continente": "Africa"
  },
  {
    "nome": "Turchia",
    "continente": "Europa"
  },
  {
    "nome": "Turkmenistan",
    "continente": "Asia"
  },
  {
    "nome": "Tuvalu",
    "continente": "Oceania"
  },
  {
    "nome": "Uganda",
    "continente": "Africa"
  },
  {
    "nome": "Ucraina",
    "continente": "Europa"
  },
  {
    "nome": "Emirati Arabi Uniti",
    "continente": "Asia"
  },
  {
    "nome": "Regno Unito",
    "continente": "Europa"
  },
  {
    "nome": "Stati Uniti",
    "continente": "Nord America"
  },
  {
    "nome": "Uruguay",
    "continente": "Sud America"
  },
  {
    "nome": "Uzbekistan",
    "continente": "Asia"
  },
  {
    "nome": "Vanuatu",
    "continente": "Oceania"
  },
  {
    "nome": "Venezuela",
    "continente": "Sud America"
  },
  {
    "nome": "Vietnam",
    "continente": "Asia"
  },
  {
    "nome": "Yemen",
    "continente": "Asia"
  },
  {
    "nome": "Zambia",
    "continente": "Africa"
  },
  {
    "nome": "Zimbabwe",
    "continente": "Africa"
  },
  {
    "nome": "Vaticano (Santa Sede)",
    "continente": "Europa"
  },
  {
    "nome": "Palestina",
    "continente": "Asia"
  }
];

/* ------------------------------
   2) UTILS
   ------------------------------ */

// Shuffle (Fisher-Yates)
function shuffle(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Imposta testo con animazione fade-in
function setAnimatedText(el, text) {
  el.classList.remove("fade-in");
  void el.offsetWidth; // trigger reflow per riavviare animazione
  el.textContent = text;
  el.classList.add("fade-in");
  el.classList.remove("muted");
}

// Pulse su un bottone immagine
function pulseButton(btn) {
  btn.classList.remove("pulse");
  void btn.offsetWidth;
  btn.classList.add("pulse");
}

/* ------------------------------
   3) ESTRAZIONE NON RIPETITIVA (bag)
   ------------------------------ */

function createNonRepeatingDrawer(items, nameForMessages) {
  // "bag" = copia shuffle degli items, da cui facciamo pop()
  let original = [...items];
  let bag = shuffle(original);
  let locked = false; // se l'utente rifiuta il reset, blocchiamo estrazioni

  function remaining() {
    return bag.length;
  }

  function reset() {
    bag = shuffle(original);
    locked = false;
  }

  function draw() {
    if (locked) {
      return { ok: false, message: "Estrazione bloccata. Puoi resettare la lista." };
    }

    if (bag.length === 0) {
      alert("Tutti gli imprevisti sono stati estratti");
      const wantsReset = confirm("Vuoi resettare la lista e ricominciare?");
      if (wantsReset) {
        reset();
      } else {
        locked = true;
        return { ok: false, message: "Lista '" + nameForMessages + "' esaurita. Reset rifiutato." };
      }
    }

    // Se dopo il reset la bag fosse ancora vuota (lista vuota), gestiamo comunque.
    if (bag.length === 0) {
      locked = true;
      return { ok: false, message: "Lista vuota: aggiungi elementi in script.js" };
    }

    const item = bag.pop();
    return { ok: true, item };
  }

  return { draw, reset, remaining, isLocked: () => locked };
}

/* ------------------------------
   4) MODULI + GIOCATORI
   ------------------------------ */

const MODULI = ["4-4-2","4-3-3","3-5-2","4-2-3-1","3-4-3","5-3-2","4-5-1"];

// Posizioni relative (percentuali) per 11 giocatori.
// L'ordine dei cerchi (1..11) resta lo stesso, cambiano solo coordinate.
const FORMATION_POS = {
  "4-4-2": [
    [10,50], [26,18],[26,40],[26,60],[26,82], [55,20],[55,40],[55,60],[55,80], [78,40],[78,60]
  ],
  "4-3-3": [
    [10,50], [26,18],[26,40],[26,60],[26,82], [55,30],[55,50],[55,70], [78,28],[78,50],[78,72]
  ],
  "3-5-2": [
    [10,50], [26,30],[26,50],[26,70], [52,18],[52,36],[52,50],[52,64],[52,82], [78,42],[78,58]
  ],
  "4-2-3-1": [
    [10,50], [26,18],[26,40],[26,60],[26,82], [50,40],[50,60], [68,24],[68,50],[68,76], [82,50]
  ],
  "3-4-3": [
    [10,50], [26,30],[26,50],[26,70], [52,26],[52,44],[52,56],[52,74], [78,30],[78,50],[78,70]
  ],
  "5-3-2": [
    [10,50], [26,14],[26,32],[26,50],[26,68],[26,86], [56,30],[56,50],[56,70], [80,42],[80,58]
  ],
  "4-5-1": [
    [10,50], [26,18],[26,40],[26,60],[26,82], [52,18],[52,36],[52,50],[52,64],[52,82], [82,50]
  ],
};

// Evidenzia N cerchi (scelta random, potenzialmente ripetitiva)
function highlightRandomPlayers(count) {
  const dots = Array.from(document.querySelectorAll(".player-dot"));
  dots.forEach(d => d.classList.remove("active","dim"));

  const indices = dots.map(d => parseInt(d.dataset.idx, 10));
  const shuffled = shuffle(indices);
  const selected = new Set(shuffled.slice(0, count));

  dots.forEach(d => {
    const idx = parseInt(d.dataset.idx, 10);
    if (selected.has(idx)) d.classList.add("active");
    else d.classList.add("dim");
  });

  return [...selected].sort((a,b)=>a-b);
}

function applyFormationPositions(modulo) {
  const coords = FORMATION_POS[modulo];
  const dots = Array.from(document.querySelectorAll(".player-dot"));

  dots.forEach((dot, i) => {
    const [x, y] = coords[i];
    dot.style.left = `calc(${x}% - 17px)`;
    dot.style.top  = `calc(${y}% - 17px)`;
  });
}

function drawModuloAndPlayers() {
  const modulo = MODULI[Math.floor(Math.random() * MODULI.length)];
  const count = parseInt(document.getElementById("playerCount").value, 10);

  applyFormationPositions(modulo);
  const chosen = highlightRandomPlayers(count);

  setAnimatedText(document.getElementById("outModulo"), modulo);
  document.getElementById("outGiocatori").textContent = "Giocatori evidenziati: " + chosen.join(", ");

  return { modulo, chosen };
}

/* ------------------------------
   5) AVVIO APP
   ------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
  // Footer date
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("it-IT", { dateStyle: "full" });
  document.getElementById("footerDate").textContent = formatter.format(now);

  // Drawer non ripetitivi
  const drawerPre = createNonRepeatingDrawer(CATALOGO.prePartita, "Pre‑partita");
  const drawerMerc = createNonRepeatingDrawer(CATALOGO.mercato, "Mercato");
  const drawerNaz = createNonRepeatingDrawer(NAZIONI.map(n => `${n.nome} (${n.continente})`), "Nazioni");

  // UI bindings — Prepartita
  const btnPre = document.getElementById("btnPrepartita");
  btnPre.addEventListener("click", () => {
    pulseButton(btnPre);
    const res = drawerPre.draw();
    const out = document.getElementById("outPrepartita");
    const st = document.getElementById("statusPrepartita");
    if (res.ok) setAnimatedText(out, res.item);
    else st.textContent = res.message;

    st.textContent = "Rimanenti: " + drawerPre.remaining() + (drawerPre.isLocked() ? " • BLOCCATO" : "");
  });

  document.getElementById("resetPrepartita").addEventListener("click", () => {
    drawerPre.reset();
    document.getElementById("statusPrepartita").textContent = "Lista resettata ✅";
    const out = document.getElementById("outPrepartita");
    out.textContent = "Clicca l’immagine per estrarre";
    out.classList.add("muted");
  });

  // UI bindings — Mercato
  const btnMerc = document.getElementById("btnMercato");
  btnMerc.addEventListener("click", () => {
    pulseButton(btnMerc);
    const res = drawerMerc.draw();
    const out = document.getElementById("outMercato");
    const st = document.getElementById("statusMercato");
    if (res.ok) setAnimatedText(out, res.item);
    else st.textContent = res.message;

    st.textContent = "Rimanenti: " + drawerMerc.remaining() + (drawerMerc.isLocked() ? " • BLOCCATO" : "");
  });

  document.getElementById("resetMercato").addEventListener("click", () => {
    drawerMerc.reset();
    document.getElementById("statusMercato").textContent = "Lista resettata ✅";
    const out = document.getElementById("outMercato");
    out.textContent = "Clicca l’immagine per estrarre";
    out.classList.add("muted");
  });

  // UI bindings — Nazioni
  const btnNaz = document.getElementById("btnNazione");
  document.getElementById("countNazioni").textContent = "Totale nazioni: " + NAZIONI.length;

  btnNaz.addEventListener("click", () => {
    pulseButton(btnNaz);
    const res = drawerNaz.draw();
    const out = document.getElementById("outNazione");
    const st = document.getElementById("statusNazioni");
    if (res.ok) setAnimatedText(out, res.item);
    else st.textContent = res.message;

    st.textContent = "Rimanenti: " + drawerNaz.remaining() + (drawerNaz.isLocked() ? " • BLOCCATO" : "");
  });

  document.getElementById("resetNazioni").addEventListener("click", () => {
    drawerNaz.reset();
    document.getElementById("statusNazioni").textContent = "Lista resettata ✅";
    const out = document.getElementById("outNazione");
    out.textContent = "Clicca l’immagine per estrarre";
    out.classList.add("muted");
  });

  // Moduli
  document.getElementById("btnModulo").addEventListener("click", drawModuloAndPlayers);
  document.getElementById("btnModuloImg").addEventListener("click", (e) => {
    pulseButton(e.currentTarget);
    drawModuloAndPlayers();
  });

// DADO RANDOM (1–25) — RIPETIBILE

const btnDado = document.getElementById("btnDado");
const outDado = document.getElementById("outDado");

btnDado.addEventListener("click", () => {
  pulseButton(btnDado);

  const numero = Math.floor(Math.random() * 25) + 1;

  setAnimatedText(outDado, "🎲 " + numero);
});

  // Layout iniziale
  applyFormationPositions("4-4-2");
  highlightRandomPlayers(11);

  // Chiudi menu mobile al click su un link (migliora UX)
  document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const nav = document.getElementById("appNav");
      if (nav.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(nav);
        bsCollapse.hide();
      }
    });
  });

  // Service Worker (PWA) — facoltativo ma pronto
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
});
