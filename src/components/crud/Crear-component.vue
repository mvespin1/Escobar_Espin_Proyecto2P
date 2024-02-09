<template>
  <section class="us_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2>AGREGAR</h2>
      </div>

      <br />
      <div class="card">
        <div class="card-header">AGREGAR</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro" class="custom-form">
            <div class="form-group">
              <label for="nombre">Nombre: </label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="maquina.nombre"
                id="nombre"
                aria-describedby="helpId"
                placeholder=""
              />
              <small id="helpId" class="form-text text-muted"
                >Escribir el nombre de la maquina</small
              >
            </div>
            <div class="form-group">
              <label for="tipo">Tipo: </label>
              <input
                type="text"
                class="form-control"
                name="tipo"
                v-model="maquina.tipo"
                id="tipo"
                aria-describedby="helpId"
                placeholder=""
              />
              <small id="helpId" class="form-text text-muted"
                >Escribir el tipo de la maquina</small
              >
            </div>
            <div class="form-group">
              <label for="cantidad">Cantidad: </label>
              <input
                type="text"
                class="form-control"
                name="cantidad"
                v-model="maquina.cantidad"
                id="cantidad"
                aria-describedby="helpId"
                placeholder=""
              />
              <small id="helpId" class="form-text text-muted"
                >Escribir la cantidad</small
              >
            </div>

            <div class="btn-group" role="group" aria-label="">
              <button type="submit" class="btn btn-info btn-action">Agregar</button>
              <router-link :to="{ name: 'Listar' }" class="btn btn-danger"
                >Cancelar</router-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      maquina: {},
    };
  },
  methods: {
    agregarRegistro() {
      console.log(this.maquina);
      var datosEnviar = {
        nombre: this.maquina.nombre,
        tipo: this.maquina.tipo,
        cantidad: this.maquina.cantidad,
      };

      fetch("http://localhost/maquinas_gimnasio/?insertar=1", {
        method: "POST",
        body: JSON.stringify(datosEnviar),
      })
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          console.log(datosRespuesta);
          window.location.href = "listar";
        });
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para el formulario de agregar */

.custom-form {
  width: 100%;
  max-width: 400px; /* Ajusta el ancho máximo según tus necesidades */
  margin: auto;
}

.custom-form .form-group {
  margin-bottom: 20px;
}

.custom-form label {
  font-weight: bold;
  color: #1e3859; /* Color del texto de la etiqueta */
}

.custom-form input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
}

.custom-form .btn-group {
  margin-top: 20px;
}

</style>