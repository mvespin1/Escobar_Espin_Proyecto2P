import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import CrearComponent from '../components/crud/Crear-component.vue'
import EditarComponent from '../components/crud/Editar-component.vue'
import ListarComponent from '../components/crud/Listar-component.vue'
import UsuarioModulo from '../components/home/UsuarioModulo-component.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/crear',
    name: 'Crear',
    component: CrearComponent
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: EditarComponent
  },
  {
    path: '/listar',
    name: 'Listar',
    component: ListarComponent
  },
  {
    path: '/usuario',
    name: 'Usuario',
    component: UsuarioModulo
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
