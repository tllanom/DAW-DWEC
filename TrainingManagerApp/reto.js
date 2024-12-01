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
        this.comments = [];
    };

    addComment(comment) {
        this.comments.push(comment);
    };
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
        renderTrainings();
        renderBestTrainings();
    }
});

//section hide menu once logged
function showSections2(sectionId){
    document.querySelectorAll('.section2').forEach(section2 => {
        section2.classList.add('hidden');
    });
    document.querySelectorAll('.section3').forEach(section3 => {
        section3.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
};

//logging out section 
function logout() {
    localStorage.removeItem("loggedUser");
    alert(`Goodbye, you are signing out!`);
    document.querySelectorAll('.section2').forEach(section2 => {
        section2.classList.add('hidden');
        document.querySelectorAll('.section3').forEach(section3 => {
            section3.classList.add('hidden')});
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
        renderTrainings();
        renderBestTrainings();
        //update localStorage when reloading the page
        document.addEventListener("DOMContentLoaded", () => {
            const currentUser = JSON.parse(localStorage.getItem("loggedUser"));
            if (currentUser) {
                localStorage.setItem("loggedUser", JSON.stringify(currentUser));
            }
        });
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

        saveLoggedUser();

        alert(`New training added succesfully!`);
        document.getElementById("addingForm").reset();

        renderTrainings();
        renderBestTrainings();
    }
});

//function to load loggedUser's data from localStorage:
/*
function loadLoggedUser() {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    return loggedUser ? loggedUser : null;
};
*/

//function to save loggedUser's data in localStorage:
function saveLoggedUser() {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    //saves loggedUser data within users array
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = users.findIndex(user => user.user === loggedUser.user);
    if (userIndex !== -1) {
        users[userIndex] = loggedUser;
        localStorage.setItem("users", JSON.stringify(users));
    };
};


//function to render trainings:
function renderTrainings() {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const trainings = loggedUser.entrenamientos;
    const trainingList = document.getElementById("training-list");

    trainingList.innerHTML = "";

    if (trainings.length > 0) {
        trainings.forEach((training, index) => {
            const comments = training.comments || [];

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${training.distance}</td>
                <td>${training.duration}</td>
                <td>${new Date(training.date).toLocaleString()}</td>
                <td>
                    <ul id="comment-list-${index}">
                        ${comments.map(comment => `<li>${comment}</li>`).join("")}
                    </ul>
                </td>
                <td>
                    <textarea id="comment-input-${index}" placeholder="Write something here!"></textarea>
                    <button onclick="addComment(${index})">Add Comment</button>
                    <button onclick="deleteLastComment(${index})">Delete Last Comment</button>
                </td>
            `;
            trainingList.appendChild(row);
        });
    } else {
        trainingList.innerHTML = `<tr><td colspan="6">No trainings registered!</td></tr>`;
    }
};


//function to add a comment:
function addComment(trainingIndex) {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    
/*
    if (!loggedUser || !loggedUser.entrenamientos || !loggedUser.entrenamientos[trainingIndex]) {
        console.error("Training session or comments array is missing.");
        return;
    }
*/

    const commentInput = document.getElementById(`comment-input-${trainingIndex}`);
    const comment = commentInput.value.trim();
    

    if (comment) {
        if (!loggedUser.entrenamientos[trainingIndex].comments) {
            loggedUser.entrenamientos[trainingIndex].comments = [];
        }

        loggedUser.entrenamientos[trainingIndex].comments.push(comment);
        localStorage.setItem("loggedUser", JSON.stringify(loggedUser));

        renderTrainings();
        saveLoggedUser()
    } else {
        alert("Please enter a valid comment!");
    }
};

//function to delete a comment;
function deleteLastComment(trainingIndex) {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const training = loggedUser.entrenamientos[trainingIndex];
    if (training.comments.length > 0) {
        training.comments.pop();
        localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
        renderTrainings();
        saveLoggedUser()
    }
};

//section hide menu for best trainings
function showSections3(sectionId){
    document.querySelectorAll('.section3').forEach(section3 => {
        section3.classList.add('hidden');
        renderTrainings()
    });
    document.getElementById(sectionId).classList.remove('hidden');
};


//BestTrainings section
//mejor tiempo
function renderBestTrainings(){
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    if (!loggedUser || !loggedUser.entrenamientos || loggedUser.entrenamientos.length === 0) {
        document.getElementById("tiempoBest").innerHTML = "<p>No trainings available.</p>";
        document.getElementById("distanciaBest").innerHTML = "<p>No trainings available.</p>";
        document.getElementById("velocidadBest").innerHTML = "<p>No trainings available.</p>";
        document.getElementById("summaryText").innerHTML = "<p>No trainings available.</p>";
        document.getElementById("delete").innerHTML = "<h3>Deletion of trainings</h3><p>No trainings available.</p>";
        return;
    }

    const tiempoBest = document.getElementById("tiempoBest");
    let bestTimed = loggedUser.entrenamientos.reduce((max, value, index) => {
        if (value.duration > max.duration) {
            return {...value, id: index};
        }
        return max;
    }, { duration: 0 }); 
    tiempoBest.innerHTML = `
    <p>#${(bestTimed.id + 1)}. Where you have run for ${bestTimed.duration} minutes!</p>
        <table border="1">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Distance (m)</th>
                    <th>Duration (min)</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${bestTimed.id + 1}</td>
                    <td>${bestTimed.distance}</td>
                    <td>${bestTimed.duration}</td>
                    <td>${new Date(bestTimed.date).toLocaleString()}</td>
                </tr>
            </tbody>
        </table>
    `

    //mejor distancia
    const distanciaBest = document.getElementById("distanciaBest");
    let bestDistanced = loggedUser.entrenamientos.reduce((max, value, index) => {
        if (value.distance > max.distance) {
            return {...value, id: index};
        }
        return max;
    }, { distance: 0 }); 
    distanciaBest.innerHTML = `
    <p>#${(bestDistanced.id + 1)}. Where you have run for ${bestDistanced.distance} meters!</p>
        <table border="1">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Distance (m)</th>
                    <th>Duration (min)</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${bestDistanced.id + 1}</td>
                    <td>${bestDistanced.distance}</td>
                    <td>${bestDistanced.duration}</td>
                    <td>${new Date(bestDistanced.date).toLocaleString()}</td>
                </tr>
            </tbody>
        </table>
    `

    //mejor velocidad
    const velocidadBest = document.getElementById("velocidadBest");
    let bestVelocity = loggedUser.entrenamientos.reduce((max, value, index) => {
        if ((value.distance/value.duration) > (max.distance/max.duration)) {
            return {...value, id: index};
        }
        return max;
    }); 
    velocidadBest.innerHTML = `
    <p>#${(bestVelocity.id + 1)}. Where you have run for ${bestVelocity.distance} meters in ${bestVelocity.duration} minutes; a velocity of ${((bestVelocity.distance/1000)/(bestVelocity.duration/60)).toFixed(2)}km/h!</p>
        <table border="1">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Distance (m)</th>
                    <th>Duration (min)</th>
                    <th>Velocity (km/h)</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${bestVelocity.id + 1}</td>
                    <td>${bestVelocity.distance}</td>
                    <td>${bestVelocity.duration}</td>
                    <td>${((bestVelocity.distance/1000)/(bestVelocity.duration/60)).toFixed(2)}</td>
                    <td>${new Date(bestVelocity.date).toLocaleString()}</td>
                </tr>
            </tbody>
        </table>
    `

    const summaryText = document.getElementById("summaryText");
    renderTrainings()
    let sumDistance = loggedUser.entrenamientos.reduce((sum, num) => sum + Number(num.distance), 0);
    let sumDuration = loggedUser.entrenamientos.reduce((sum, num) => sum + Number(num.duration), 0);
    let kachow = ((sumDistance/1000)/(sumDuration/60)).toFixed(2)
    summaryText.innerHTML = `
        <table border="1">
            <thead>
                <tr>
                    <th>Total Distance (m)</th>
                    <th>Total Duration (min)</th>
                    <th>Average Velocity (km/h)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${sumDistance}</td>
                    <td>${sumDuration}</td>
                    <td>${kachow}</td>
                </tr>
            </tbody>
        </table>
    `

//delete training section
    const trainings = loggedUser.entrenamientos;
    const deletionList = document.getElementById("deletion-list");

    deletionList.innerHTML = "";

    if (trainings.length > 0) {
        trainings.forEach((training, index) => {

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${training.distance}</td>
                <td>${training.duration}</td>
                <td>${new Date(training.date).toLocaleString()}</td>
                <td>
                    <button onClick="deleteTraining(${index})">Delete Training ${index + 1}</button>
                </td>
            `;
            deletionList.appendChild(row);
        });
    } else {
        deletionList.innerHTML = `<tr><td colspan="5">No trainings registered!</td></tr>`;
    };
}

//function to delete trainings
function deleteTraining(id) {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    loggedUser.entrenamientos.splice(id, 1);
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    alert(`Training ${id + 1} deleted succesfully!`);
    renderBestTrainings();
}