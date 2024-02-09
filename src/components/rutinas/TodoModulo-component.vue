<script setup>
import { reactive } from "vue";
import InputNew from "@/components/rutinas/InputNew.vue";

let boards = reactive([
  {
    id: crypto.randomUUID(),
    name: "LUNES",
    items: [
      { id: crypto.randomUUID(), title: "Sentadillas" },
      { id: crypto.randomUUID(), title: "Flexiones" },
      { id: crypto.randomUUID(), title: "Plancha" },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "MARTES",
    items: [
      { id: crypto.randomUUID(), title: "Abdominales" },
      { id: crypto.randomUUID(), title: "Correr 5 km" },
      { id: crypto.randomUUID(), title: "Estiramientos" },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "MIÉRCOLES",
    items: [
      { id: crypto.randomUUID(), title: "Yoga" },
      { id: crypto.randomUUID(), title: "Saltar la cuerda" },
      { id: crypto.randomUUID(), title: "Burpees" },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "JUEVES",
    items: [
      { id: crypto.randomUUID(), title: "Flexiones" },
      { id: crypto.randomUUID(), title: "Sentadillas" },
      { id: crypto.randomUUID(), title: "Caminata rápida" },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "VIERNES",
    items: [
      { id: crypto.randomUUID(), title: "Levantamiento de pesas" },
      { id: crypto.randomUUID(), title: "Zancadas" },
      { id: crypto.randomUUID(), title: "Abdominales laterales" },
    ],
  },

]);

function startDrag(evt, boardId, itemId) {
  console.log(boardId, itemId);
  evt.dataTransfer.dropEffect = "move";
  evt.dataTransfer.effectAllowed = "move";
  evt.dataTransfer.setData("item", JSON.stringify({ boardId, itemId }));
}
function onDrop(evt, dest) {
  const { boardId, itemId } = JSON.parse(evt.dataTransfer.getData("item"));
  console.log({ boardId, itemId });
  const board = boards.find((board) => board.id === boardId);
  const item = board.items.find((item) => item.id === itemId);
  board.items = board.items.filter((i) => i.id !== item.id);
  dest.items.push({ ...item });
}

function handleNewItem(text, board) {
  console.log(text.value);
  board.items.push({ id: crypto.randomUUID(), title: text.value });
}

function createNewBoard() {
  const name = prompt("Name of board");
  if (name) {
    const board = {
      id: crypto.randomUUID(),
      name: name,
      items: [],
    };

    boards.push(board);
  }
}
</script>

<template>
  <div class="container">
    <nav>
      <ul>
        <a class="create_list" href="#" @click="createNewBoard">AÑADIR DÍA</a>
      </ul>
    </nav>

    <div class="boards-container">
      <div class="boards">
        <div
          class="board"
          @drop="onDrop($event, board)"
          @dragover.prevent
          @dragenter.prevent
          v-for="board in boards"
          :key="board.id"
        >
          {{ board.name }}
          <div class="input">
            <InputNew @on-new-item="(text) => handleNewItem(text, board)" />
          </div>
          <div
            class="item drag-el"
            draggable="true"
            @dragstart="startDrag($event, board.id, item.id)"
            v-for="item in board.items"
            :key="item.id"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.create_list {
  color: #1e3859;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
  list-style: none; /* Elimina la viñeta */
  display: inline-block; /* Asegura que el enlace se comporte como un bloque */
  padding: 10px 20px; /* Añade relleno para que se vea como un botón */
  background-color: #ff3030; /* Color de fondo rojo */
  color: #fff; /* Color del texto en el botón */
  border-radius: 5px; /* Añade esquinas redondeadas */
}

.create-list a:hover {
  background-color: #cc0000; /* Hace el fondo más oscuro al pasar el ratón */
}

.drop-zone {
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
}

.drag-el {
  background-color: #284f66;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: move;
  transition: background-color 0.3s ease;
}

.drag-el:hover {
  background-color: #283740;
}

.boards {
  display: flex;
  gap: 10px;
}

.board {
  background: #1e3859; /* Cambia el color del board a azul oscuro */
  padding: 10px;
  border-radius: 8px;
  color: #fff; /* Cambia el color del texto dentro del board a blanco */
}

.input {
  margin-top: 10px;
}

/* Estilos para el InputNew si es necesario */
.input-new {
  /* Ajusta los estilos según tus preferencias */
}

.board-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

.create-list {
  margin-top: 10px;
}

.create-list a {
  color: #1e3859; /* Cambia el color del enlace a azul oscuro */
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.create-list a:hover {
  color: #0d1a2b; /* Cambia el color del enlace al pasar el ratón para resaltar */
}

/* Cambia el color del texto en Todo a negro */
main {
  color: #000;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Alinea los elementos en el centro horizontalmente */
}

.boards-container {
  display: flex;
  flex-wrap: wrap; /* Permite que los elementos se envuelvan a la siguiente línea */
  justify-content: center; /* Alinea los elementos en el centro horizontalmente */
}

.board {
  margin: 10px; /* Espacio entre los días */
  padding: 10px;
  border: 1px solid #ddd; /* Borde para separar visualmente los días */
}

.input {
  margin-top: 5px; /* Espacio entre el título y la entrada de nuevo ítem */
}

.item {
  margin-top: 5px; /* Espacio entre los elementos de la lista */
}

</style>
