<template>
  <section class="us_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2>CONTROL DE RUTINAS</h2>
      </div>

        <TodoModulo/>

    </div>
  </section>
</template>

<script>

import TodoModulo from '@/components/rutinas/TodoModulo-component.vue'

export default {
    name: 'UsuarioModulo',
  components: {
    TodoModulo
  },
  // Resto del código de tu componente
}

</script>