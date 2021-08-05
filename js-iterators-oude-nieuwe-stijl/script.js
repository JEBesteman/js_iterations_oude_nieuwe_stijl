//while loop

const colors = ["yellow", "blue", "red", "orange"];
let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

//for loop
const colors2 = ["yellow", "blue", "red", "orange"];
for (let i; i < colors2.length; i++) {
    console.log(colors2[i]);
}

//Nieuwe stijl: array methods
//Omdat itereren over arrays iets is dat zo vaak gebeurt heeft de community die JavaScript verder ontwikkelt wat nieuwe handige dingen bedacht (eigenlijk afgekeken) om dit wat makkelijker, leesbaarder en minder foutgevoelig te maken. Deze nieuwe dingen zijn "array methods".
//Elk array in JavaScript heeft de beschikking over deze ingebouwde functies die itereren over die array. De verschillende array methods doen verschillende dingen, maar ze itereren allemaal over een array.

const colors3 = ["yellow", "blue", "red", "orange"];

colors3.forEach(element => console.log(element));

//Vergelijking while/for loops met array methods
//1 Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
//for loop meemt 3 regels en while loop 5 regels in beslag

//2 Hoeveel regels neemt mijn forEach method in beslag?
//Maar 1 regel!!

// 3 Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
//* Je kan minder fouten maken in je code. Hoef i niet bij te houden om te bepalen bij welke iteratie je bent.
//* Stopt vanzelf als het hele array geweest is (geen infinite loop).
//* naam forEach is duidelijker wat er mee bedoelt wordt ipv while of for loop.
//* je kan de callback functie gebruiken bij een array method.


// 4 Kun je een array method gebruiken op een object? Het antwoord is nee.
//Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
//Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?

//kan je doen met for ... in loop

const myColors = {
    colorHair: "blond",
    colorEyes: "blue",
    colorBike: "white",
    colorShirt: "red",
    colorDog: "medium_blond",
};

for (const property in myColors) {
    console.log(myColors[property]);
}

// of
for (const x in myColors) {
    console.log(myColors[x]);
}

//je bent aan het itereren. Maar over een object ipv array. Dus kan je geen ARRAY method gebruiken, niet beschikbaar!!
