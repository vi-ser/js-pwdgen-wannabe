// nome
let firstName;
firstName = prompt("Vorrei sapere le sue generalità, in modo da poter foggiare una chiave di sicurezza a prova di frode. Partiamo dal suo nome di battesimo, scriva pure:");

console.log(firstName);

// cognome
let lastName;
lastName = prompt("Però, niente male! Proceda pure scrivendo il suo gentilizio:")

console.log(lastName);

// colore
let favColor;
favColor = prompt("Perbacco, ho il piacere di parlare con un pezzo grosso! L'ultimo quesito che le pongo è il suo pigmento preferito:")

console.log(favColor);

const numeroPresoTotalmenteaCaso = 16;


// generazione password
document.getElementById("password").innerHTML = `La sua chiave di sicurezza a prova di frode è: ${firstName}${lastName}${favColor}${numeroPresoTotalmenteaCaso}`
