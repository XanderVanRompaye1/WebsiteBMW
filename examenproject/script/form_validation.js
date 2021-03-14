window.addEventListener("load", init);

function init() {
    let achternaamInput = document.getElementById("Achternaam");
    let emailInput = document.getElementById("email");
    let form = document.getElementById("formpers");

    achternaamInput.style.backgroundColor = "yellow";
    achternaamInput.addEventListener("keydown",validateAchternaam);

    emailInput.style.backgroundColor = "orange";
    emailInput.addEventListener("focusout",validateEmail);

    form.addEventListener("submit",validateForm);
}

function validateAchternaam() {
    let achternaamFoutmelding = document.getElementById("AchternaamSpan");
    const achternaamInput = document.getElementById("Achternaam");

    if(achternaamInput.value.length < 5) {
        achternaamFoutmelding.style.color="red";
        achternaamFoutmelding.innerHTML = "Je ingevoerde waarde is kleiner dan 5 tekens";
        return false;
    } else {
        achternaamFoutmelding.innerHTML = "";
    }
    return true;
}

function validateEmail() {
    let email = document.getElementById("emailSpan");
    const emailInput = document.getElementById("email");
    const regex = /^[a-zA-Z]*.+[a-zA-Z]*@(student\.)?kdg\.be/g

    if(!regex.test(emailInput.value)) {
        email.innerHTML = "Je ingevoerde e-mail behoort niet tot het KdG domein.";
        return false;
    } else {
        email.innerHTML = "";
    }
    return true;
}



function validateForm(event) {
    let verzendknop = document.getElementById("submitSpan");
    console.log('submit');

    if((!validateAchternaam() || !validateEmail())) {
        verzendknop.style.color = "red";
        verzendknop.innerHTML = "niet alle velden zijn correct ingevuld.";
        event.preventDefault();
    }
}
function passValues() {
    const voornaamInput2 = document.getElementById("Voornaam").value;
    localStorage.setItem("textual1",voornaamInput2);
    const achternaamInput2 = document.getElementById("Achternaam").value;
    localStorage.setItem("textual2",achternaamInput2);
    const emailInput2 = document.getElementById("email").value;
    localStorage.setItem("textual3",emailInput2);
    const modelInput2 = document.getElementById("Model").value;
    localStorage.setItem("textual4",modelInput2);
    const pkInput2 = document.getElementById("motor").value;
    localStorage.setItem("textual5",pkInput2);
    const tekstInput2 = document.getElementById("tekst").value;
    localStorage.setItem("textual7",tekstInput2);
    const plaatsInput2 = document.getElementById("plaats").value;
    localStorage.setItem("textual8",plaatsInput2);
}
