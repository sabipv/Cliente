import "./styles.css";
const formulario = document.getElementById('formulari');
const input = document.getElementById('input');
const listaTareas = document.getElementById('listaTareas');
let arrayTareas = [];

function AnyadeTareaLista (tarea){
    const item = document.createElement('li');
    item.textContent = tarea;
    listaTareas.appendChild(item);
}

function publicaLista(){
    if (!arrayTareas)
        arrayTareas = JSON.parse(localStorage.getItem('tareas'));
    arrayTareas.forEach(tarea => AnyadeTareaLista(tarea));
}

function anyadeTarea(tarea){
    AnyadeTareaLista(tarea);
    arrayTareas.push(tarea);
    localStorage.setItem('tareas', JSON.stringify(tarea));
}

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  if(input.value)
    anyadeTarea(input.value);
  input.value = '';
});

publicaLista();