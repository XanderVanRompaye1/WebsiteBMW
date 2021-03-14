window.addEventListener("load",init);

function init() {
    document.getElementById("voornaamAntwoord").innerHTML = localStorage.getItem("textual1");
    document.getElementById("achternaamAntwoord").innerHTML = localStorage.getItem("textual2");
    document.getElementById("emailAntwoord").innerHTML = localStorage.getItem("textual3");
    document.getElementById("modelAntwoord").innerHTML = localStorage.getItem("textual4");
    document.getElementById("pkAntwoord").innerHTML = localStorage.getItem("textual5");
    document.getElementById("tekstAntwoord").innerHTML = localStorage.getItem("textual7");
    document.getElementById("plaatsAntwoord").innerHTML = localStorage.getItem("textual8");
}

