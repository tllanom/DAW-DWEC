document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('boton');
    const nota = document.getElementById('nota');
    const borrarTodo = document.getElementById('borrarTodo');
    const lista = document.getElementById('lista');

    const sumarNota = () => {
        const texto = nota.value.trim();
        if (texto != '') {
            const li = document.createElement('li');
            li.textContent = texto;

            const eliminar = document.createElement('button');
            eliminar.textContent = 'Eliminar';
            eliminar.onclick = () => {
                lista.removeChild(li);
            };

            li.appendChild(eliminar);
            lista.appendChild(li);
            nota.value = '';
        }
    };

    const EliminarTodasNotas = () => {
        lista.innerHTML = '';
    };

    boton.addEventListener('click', sumarNota);
    borrarTodo.addEventListener('click', EliminarTodasNotas);

    nota.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sumarNota();
        }
    });
});
