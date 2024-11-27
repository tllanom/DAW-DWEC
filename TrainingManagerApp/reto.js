class Persona {
    constructor(name, mail, height, weight, user, pass) {
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
    constructor(distance, duration) {
        this.distance = distance;
        this.duration = duration;
        this.date = new Date();
    }
}

//section hide main menu
function showSections(sectionId){
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}
window.onload = () => {
    showSections('inicio');
};

//signup form
const form = document.getElementById("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let valid = true;

//shortening of element creation bringing HTML to JS
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
    const userCreated = traerElementos("userCreated");
    const errorPass = traerElementos("errorPass");
    const errorPass2 = traerElementos("errorPass2");
    const errorCheckbox = traerElementos("errorCheckbox");

    //shortening of span class error creation
    function returnError(condition, error, message) {
        if(condition) {
            error.textContent = message;
            valid = false;
        } else {
            error.textContent = "";
        }
    }

    //console.log(name, mail, height, weight, user, pass, pass2, checkbox);

    returnError(name.value.trim().length < 3, errorName, "Name must contain more than three characters");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    returnError(!emailRegex.test(mail.value.trim()), errorMail, "Introduce a valid mail.");

    returnError(height.value <= 0 || height.value > 252, errorHeight, "You are either inexistent or a new World Guinness Record.");

    returnError(weight.value <= 0 || weight.value > 635, errorWeight, "You are either inexistent or a new World Guinness Record.");


    returnError(user.value.trim().length < 3, errorUser, "User must contain more than three characters.");
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.forEach(user => console.log(`User already created: ${user.user} with pass ${user.pass}`)); //pushing the 'sign up' button, the console will show already registered users
    //users.forEach(console.log(users));

    const existingUser = users.find((userr) => userr.user === user.value.trim()); 
    returnError(existingUser, userCreated, `Username ${user.value.trim()} has already been registered.`);

    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    returnError(!passRegex.test(pass.value.trim()), errorPass, "Password must be eight characters minimum and contain at least one letter and one number.");

    returnError(pass2.value.trim() != pass.value.trim(), errorPass2, "Passwords do not match.");

    returnError(!checkbox.checked, errorCheckbox, "Terms and conditions must be accepted.");

//user creation
    if(valid){

        const newUser = new Persona(
            name.value.trim(),
            mail.value.trim(),
            height.value,
            weight.value,
            user.value.trim(),
            pass.value.trim(),
        );
        
        const users = JSON.parse(localStorage.getItem("users")) || [];

        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));
        
        alert(`User '${newUser.user}' has been created succesfully!`);
        document.getElementById("form").reset();
    }
});

//signin form
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let valid = true;

    function traerElementos(id){
        return document.getElementById(id);
    }

    const loginUser = traerElementos("loginUser");
    const loginPass = traerElementos("loginPass");
    const errorLogin = traerElementos("errorLogin");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((userr) => userr.user === loginUser.value.trim() && userr.pass === loginPass.value.trim());
    
    if(!existingUser){
        errorLogin.textContent = "User and password combination is not recognized."
        valid = false
    } else {
        errorLogin.textContent = "";
    }

    //if signin valid, save loggedUser within localStorage to keep its session open
    if(valid){
        alert(`Welcome ${existingUser.user}, you have logged in!`);
        localStorage.setItem("loggedUser", JSON.stringify(existingUser));
        document.getElementById("loginForm").reset();

        document.getElementById("options").classList.add("hidden");
        document.getElementById("loggedMenu").classList.remove("hidden");

        showSections("loggedMenu");
    }
});

//section hide menu once logged
function showSections2(sectionId){
    document.querySelectorAll('.section2').forEach(section2 => {
        section2.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
};

//logging out section 
function logout() {
    localStorage.removeItem("loggedUser");
    alert(`Goodbye, you are signing out!`);
    document.querySelectorAll('.section2').forEach(section2 => {
        section2.classList.add('hidden');
    });
    document.getElementById("options").classList.remove("hidden");
    document.getElementById("loggedMenu").classList.add("hidden");
    showSections("inicio");
};

//if loggedUser is saved within localStorage, after refreshing, keep the session
window.onload = () => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    if (loggedUser) {
        document.getElementById("options").classList.add("hidden");
        document.getElementById("loggedMenu").classList.remove("hidden");
        showSections("loggedMenu");
    } else {
        document.getElementById("options").classList.remove("hidden");
        document.getElementById("loggedMenu").classList.add("hidden");
        showSections("inicio");
    }
}

//adding training form
//(it does not show a page, that would be done with prompt-sync)
const addingForm = document.getElementById("addingForm");
addingForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let valid = true;

    const distance = document.getElementById("distance");
    const duration = document.getElementById("duration");
    const errorDistance = document.getElementById("errorDistance");
    const errorDuration = document.getElementById("errorDuration");

    if(distance.value <= 0){
        errorDistance.textContent = "A positive distance must be registered!";
        valid = false;
    } else {
        errorDistance.textContent = "";
    }

    if(duration.value <= 0){
        errorDuration.textContent = "A positive duration must be registered!";
        valid = false;
    } else {
        errorDuration.textContent = "";
    }

    if(valid){
        const newTraining = new Entrenamiento(
            distance.value,
            duration.value,
        );

        const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
        loggedUser.entrenamientos.push(newTraining);
        localStorage.setItem("loggedUser", JSON.stringify(loggedUser));

//saves loggedUser data within users array
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userIndex = users.findIndex(user => user.user === loggedUser.user);
        if (userIndex !== -1) {
            users[userIndex] = loggedUser;
            localStorage.setItem("users", JSON.stringify(users));
        };

        alert(`New training added succesfully!`);
        document.getElementById("addingForm").reset();
    }
});