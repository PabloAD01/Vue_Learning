import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      /* Se pueden asignar nombres a las rutas para hacerlas más legibles   */
      name: 'teams',
      path: '/teams',
      /* component: TeamsList, */
      /* Se pueden implementar otros componentes para las rutas.
      Depende del nombre que se le de al componente para que se renderice
      y luego con ese nombre tiene que ser pasado al tag <router-view> 
      para que se renderice el componente correspondiente
      */
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
        /* Mediante este método se puede hacer un control de acceso a /users */
      },
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0, behavior: 'smooth' };
    }
    /* Mediante este metodo se puede hacer scroll automáticamente al cambiar 
    la página, llevando al inicio de la misma y al volver a la página anterior 
    volverá a la posicion en la que se encontraba antes de cambiar de página  */
  },
});

/* Navigation Guards 
 con navigation guard se puede hacer un control de acceso a las rutas */
router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  console.log(to, from);
  next();
});

const app = createApp(App);

app.use(router);

app.mount('#app');
