import "./styles.css";
const formulario = document.getElementById('formulari');
const input = document.getElementById('input');
const listaTareas = document.getElementById('listaTareas');

function AnyadeTareaLista (tarea){
    const item = document.createElement('li');
    item.textContent = tarea;
    listaTareas.appendChild(item);
}

function publicaLista(){
    let lista = [];
    lista = JSON.parse(localStorage.getItem('tareas'));
    lista.forEach(tarea => AnyadeTareaLista(tarea));
}

function anyadeTarea(tarea){
    let lista = []
    AnyadeTareaLista(tarea);
    lista = JSON.parse(localStorage.getItem('tareas'));
    lista.push(tarea);
    localStorage.setItem('tareas', JSON.stringify(tarea));
}

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  anyadeTarea(input.value);
  input.value = '';
});

loadTasks();