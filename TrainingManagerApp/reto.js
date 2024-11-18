class Persona {
    constructor(name, mail, height, weight, user, pass, entrenamientos) {
        this.name = name;
        this.mail = mail;
        this.height = height;
        this.weight = weight;
        this.user = user;
        this.pass = pass;
        this.entrenamientos = [];
    }

    addEntrenamiento(entrenamiento){
        this.entrenamientos.push(entrenamiento);
    }
};


class Entrenamiento {
    constructor(distance, min, date) {
        this.distance = distance;
        this.min = min;
        this.date = new Date();
    }
}

function showSections(sectionId){
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

window.onload = () => {
    showSections('inicio');
};


const form = document.getElementById("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let valid = true;


function traerElementos(id){
    return document.getElementById(id);
}

const name = traerElementos("name");
const mail = traerElementos("mail");
const height = traerElementos("height");
const weight = traerElementos("weight");
const user = traerElementos("user");
const pass = traerElementos("pass");
const pass2 = traerElementos("pass2");
const checkbox = traerElementos("checkbox");

const errorName = traerElementos("errorName");
const errorMail = traerElementos("errorMail");
const errorHeight = traerElementos("errorHeight");
const errorWeight = traerElementos("errorWeight");
const errorUser = traerElementos("errorUser");
const errorPass = traerElementos("errorPass");
const errorPass2 = traerElementos("errorPass2");
const errorCheckbox = traerElementos("errorCheckbox");

function returnError(condition, error, message) {
    if(condition) {
        error.textContent = message;
        valid = false;
    } else {
        error.textContent = "";
    }
}

console.log(name, mail, height, weight, user, pass, pass2, checkbox);

returnError(name.value.trim().length < 3, errorName, "Name must contain more than three characters");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
returnError(!emailRegex.test(mail.value.trim()), errorMail, "Introduce a valid mail.");

returnError(height.value <= 0 || height.value > 252, errorHeight, "You are either inexistent or a new World Guinness Record.");

returnError(weight.value <= 0 || weight.value > 635, errorWeight, "You are either inexistent or a new World Guinness Record.");

returnError(user.value.trim().length < 3, errorUser, "User must contain more than three characters.");
//must check if any other user has this same user name!

const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
returnError(!passRegex.test(pass.value.trim()), errorPass, "Password must be eight characters minimum and contain at least one letter and one number.");

returnError(pass2.value.trim() != pass.value.trim(), errorPass2, "Passwords do not match.");

returnError(!checkbox.checked, errorCheckbox, "Terms and conditions must be accepted.");



if(valid){
    alert(`User '${user}' has been created succesfully!`);
    document.getElementById("form").reset();
}
});