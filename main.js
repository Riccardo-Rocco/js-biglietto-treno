const chilometri = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
const eta = parseInt(prompt("Quanti anni hai?"));

const prezzoPerKm = 0.21;
let prezzoTotale = chilometri * prezzoPerKm;

if (eta < 18) {
    prezzoTotale *= 0.8; 
} else if (eta > 65) {
    prezzoTotale *= 0.6; 
}

const prezzoFinale = prezzoTotale.toFixed(2); 

document.getElementById("prezzoOutput").innerHTML = `Il prezzo del tuo biglietto è: €${prezzoFinale}`;
