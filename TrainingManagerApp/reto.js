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