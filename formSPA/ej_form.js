const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let valid = true;
    
    function traerElementos(id){
        return document.getElementById(id);
    }

    const nombre = traerElementos("nombre");
    const email = traerElementos("email");
    const tlf = traerElementos("tlf");
    const fecha = traerElementos("fecha");
    const checkbox = traerElementos("checkbox");

    const errorNombre = traerElementos("errorNombre");
    const errorEmail = traerElementos("errorEmail");
    const errorTlf = traerElementos("errorTlf");
    const errorFecha = traerElementos("errorFecha");
    const errorCheckbox = traerElementos("errorCheckbox");

    
    function returnError(condition1, error, message) {
        if (condition1) {
            error.textContent = message;
            valid = false;
        } else {
            error.textContent = "";
        }
    }

    returnError(nombre.value.trim().length < 3, errorNombre, "El nombre debe tener al menos 3 caracteres.");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    returnError(!emailRegex.test(email.value.trim()), errorEmail, "Introduce un correo electrónico válido.");

    returnError(tlf.value && !/^\d+$/.test(tlf.value), errorTlf, "El teléfono solo debe contener números.");

    returnError(!fecha.value, errorFecha, "La fecha de nacimiento es obligatoria."); //aunque no sea necesaria, ya que teniendo 'required' ya nunca saldrá el error

    returnError(!checkbox.checked, errorCheckbox, "Debes aceptar los términos y condiciones."); //mismo que la fecha de nacimiento; requiero el 'required' para tener el outline rojo

    if(valid){
        alert("Formulario enviado correctamente.");
        document.getElementById("form").reset();
    }
});
