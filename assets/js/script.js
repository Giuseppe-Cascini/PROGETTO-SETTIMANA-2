/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questo blocco.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Workflow consigliato: prima costruisci la Versione Base in HTML/CSS,
  poi torna qui per la Versione Intermedia (generazione griglia da array di prodotti)
  e per la Versione Avanzata (filtri, ordinamento, carrello dinamico, localStorage).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato in settimana.
*/


/* VERSIONE INTERMEDIA — array prodotti
   Crea l'array "prodotti" con almeno 12 oggetti.
   Ogni oggetto: nome, categoria, prezzo, rating (1-5), immagine, disponibile.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const prodotti = [
    {
        nome:'cuffie',
        categoria:'elettronica',
        prezzo:89.99,
        rating:4.2,
        immagine:'cufffie.png',
        disponibile:'true'
    },
    {
        nome:'tablet',
        categoria:'elettronica',
        prezzo:199.00,
        rating:4.7,
        immagine:'tablet.png',
        disponibile:'true'
    },
     {
        nome:'libro',
        categoria:'libri',
        prezzo:14.90,
        rating:4.0,
        immagine:'libro.png',
        disponibile:'true'
    },
     {
        nome:'zaino',
        categoria:'abbigliamento',
        prezzo:49.99,
        rating:4.3,
        immagine:'zaino.png',
        disponibile:'true'
    },
     {
        nome:'lampada',
        categoria:'casa',
        prezzo:29.50,
        rating:3.8,
        immagine:'lampada.png',
        disponibile:'true'
    },
     {
        nome:'smartwatch',
        categoria:'elettronica',
        prezzo:119.00,
        rating:4.4,
        immagine:'smartwatch.png',
        disponibile:'true'
    },
     {
        nome:'mouse',
        categoria:'elettronica',
        prezzo:24.90,
        rating:4.1,
        immagine:'mouse.png',
        disponibile:'true'
    },
     {
        nome:'caffettiera',
        categoria:'casa',
        prezzo:22.00,
        rating:4.6,
        immagine:'caffettiera.png',
        disponibile:'true'
    },
     {
        nome:'iphone 18 pro',
        categoria:'elettronica',
        prezzo:1475.00,
        rating:4.7,
        immagine:'iphone18pro.png',
        disponibile:'false'
    },
     {
        nome:'felpa nike',
        categoria:'abbigliamento',
        prezzo:79.99,
        rating:4.4,
        immagine:'felpanike.png',
        disponibile:'false'
    },
     {
        nome:'tavolo',
        categoria:'casa',
        prezzo:169.00,
        rating:4.1,
        immagine:'tavolo.png',
        disponibile:'false'
    },
     {
        nome:'t-shirt',
        categoria:'abbigliamento',
        prezzo:29.99,
        rating:4.1,
        immagine:'t-shirt.png',
        disponibile:'false'
    }
];
console.log(prodotti);



/* VERSIONE INTERMEDIA — formattaPrezzo(prezzo)
   Funzione che ritorna una stringa tipo "€ 19,99".
   Esempio in console.log: Monitor: € 150,00
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function formattaPrezzo(prezzo) {
   return prezzo.toFixed(2).replace(".", ",");
}
console.log(`Monitor: € ${formattaPrezzo(121)}`);
console.log(`Monitor: € ${formattaPrezzo(15.65)}`);


/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function stelline(rating) {
    let risultato = '';
    for(let i=0; i<5; i++) {
        if(i<=rating) {
            risultato += "★"
        } else {
            risultato += "☆"
        }
    }
    return risultato
}
console.log(`Monitor: rating 3-> ${stelline(3)}`)
console.log(`Monitor: rating 5-> ${stelline(5)}`)


/* VERSIONE INTERMEDIA — Filtro per categoria
   Funzione che riceve il parametro categoria e filtra l'array prodotti mostrando solo i prodotti della categoria ricevuta
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* --------------------------------------------------------------

/* VERSIONE AVANZATA — renderProdotti(lista)
   Funzione che, dato un array di prodotti, genera la griglia nel DOM.
   Niente HTML hard-coded per i prodotti: tutto generato dal JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Aggiungi al carrello
   Quando si clicca il bottone "Aggiungi al carrello", incrementa il contatore
   nell'header (Carrello (0) → Carrello (1) → ...).
   Per i prodotti esauriti: bottone disabilitato e testo "Esaurito".
   Suggerimento: usa una closure come visto in aula
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Ordinamento
   Menu a tendina con: Prezzo crescente, Prezzo decrescente, Rating.
   Suggerimento: per rendere più leggibile la select puoi usare optgroup
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Riepilogo carrello
   Pagina carrello con elenco prodotti aggiunti, totale, bottone "Svuota".
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — localStorage
   Il carrello sopravvive al refresh della pagina.
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

