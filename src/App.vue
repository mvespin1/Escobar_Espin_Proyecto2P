<template>
  <div class="hero_area">
    <!-- header section strats -->
    <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container">
          <a class="navbar-brand" href="index.html">
            <span> Fitness Tracker 360 </span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div
              class="d-flex ml-auto flex-column flex-lg-row align-items-center"
            >
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <router-link to="/home" class="nav-link">HOME</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/usuario" class="nav-link"
                    >USUARIO</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/listar" class="nav-link">ADMIN</router-link>
                </li>
              </ul>
              <div class="user_option">
                <form
                  class="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0"
                >
                  <button
                    class="btn my-2 my-sm-0 nav_search-btn"
                    type="submit"
                  ></button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <HeaderSection />

    <!-- end header section -->
  </div>

  <router-view />
</template>

<script>
import HeaderSection from "@/components/home/HeaderSection-component.vue";

export default {
  components: {
    HeaderSection,
  },
  // Resto del código de tu componente
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
