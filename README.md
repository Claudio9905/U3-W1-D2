Crea il tuo primo progetto React, EpiBooks!

In questo esercizio creerai il tuo negozio di libri personale usando i React Components!

Usa il boilerplate tramite vite per creare la tua React App di base.
Installa bootstrap e react-bootstrap nella tua app.
Crea un componente MyNav che renderizzerà un componente react-bootstrap per la navigation bar con i seguenti link: Home, About and Browse. Nota: non sappiamo ancora come creare una vera navigazione, quindi per il momento usa "#" come proprietà href per ognuno di essi.
Crea un componente MyFooter che renderizzerà un footer per la pagina.
Crea un componente Welcome con un Alert (inteso come componente di react-bootstrap) e un sottotitolo per il tuo shop.
Crea un componente AllTheBooks. Questo componente dovrà leggere un file .json tra quelli forniti e mostrare le cover dei libri nella pagina (puoi utilizzare una Card di react-bootstrap).

Modifica all'esercizio:
Crea un componente SingleBook utilizzando una funzione. Questo componente dovrà essere predisposto per ricevere nelle props un oggetto corrispondente ad un singolo libro, e visualizzerà la sua copertina e il titolo. Usa le Card di react-bootstrap (se vuoi testarlo, l'oggetto del libro può esser preso da uno dei file .json  che hai ricevuto ieri).
Crea un componente BookList. Questo componente riceverà dalle prop un array di libri, e li visualizzerà attraverso un .map() ritornando per ogni elemento il componente SingleBook. Successivamente monta BookList dentro il componente App, e forniscigli una lista di libri da uno dei file .json come prop. Dovresti ottenere a schermo un risultato simile al componente AllTheBooks: ora però la struttura è molto più modulare e riutilizzabile.
[EXTRA] Inserisci all'interno del componente BookList un campo di ricerca, prima della griglia di libri; se riempito, dovranno venire mostrati solamente i libri il cui titolo contiene il valore cercato (suggerimento: salva la stringa di ricerca dentro allo stato del componente BookList e filtra i libri di conseguenza).
Converti il tuo componente SingleBook in una classe, e crea il suo stato contenente una proprietà booleana selected.
Un click sulla copertina del libro dovrà fare il toggle della proprietà selected. Se la proprietà selected sarà true, il SingleBook dovrà ricevere dello stile che rifletta il cambio di stato, visivamente (potresti ad esempio utilizzare un bordo rosso).
