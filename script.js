var vragen = [
    "wat is de hoofdstad van frankrijk?",
    "hoeveel poten heeft een spin?",
    "wat is het grootste meer van nederland?",
    "Noem een duits automerk",
    "Noem een waddeneiland",
]
document.getElementById("vraag1").innerHTML = vragen[0];
document.getElementById("vraag2").innerHTML = vragen[1];
document.getElementById("vraag3").innerHTML = vragen[2];
document.getElementById("vraag4").innerHTML = vragen[3];
document.getElementById("vraag5").innerHTML = vragen[4];


var antwoorden = ["parijs",
    8,
    "ijsselmeer",
    ["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes", "Mercedes-Benz"],
    ["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"],
];



function check() {
    if (
        document.getElementById("antwoord1").value == antwoorden[0] &&
        document.getElementById("antwoord2").value == antwoorden[1] &&
        document.getElementById("antwoord3").value == antwoorden[2] &&
        antwoorden[3].includes(document.getElementById("antwoord4").value)
        antwoorden[4].includes(document.getElementById("antwoord5").value)) {
        document.getElementById("correct").innerHTML = "correct";
    }
    else {
        document.getElementById("correct").innerHTML = "fout";
    }
}
