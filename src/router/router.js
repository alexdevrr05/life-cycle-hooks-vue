import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/pokemon',
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: () =>
      import(
        /* webpackChunkName: "PokemonLayout" */
        '@/modules/pokemon/layouts/PokemonLayout'
      ),
    children: [
      {
        path: 'home',
        name: 'pokemon-home',
        component: () =>
          import(
            /* webpackChunkName: "ListPage" */
            '@/modules/pokemon/pages/ListPage'
          ),
      },
      {
        path: 'about',
        name: 'pokemon-about',
        component: () =>
          import(
            /* webpackChunkName: "AboutPage" */
            '@/modules/pokemon/pages/AboutPage'
          ),
      },
      {
        path: 'pokemonid/:id',
        name: 'pokemon-id',
        props: (route) => {
          const id = Number(route.params.id);
          return isNaN(id) ? { id: 1 } : { id };
        },
        component: () =>
          import(
            /* webpackChunkName: "PokemonPage" */
            '@/modules/pokemon/pages/PokemonPage'
          ),
      },
      {
        path: '',
        name: 'pokemon-redirect',
        redirect: { name: 'pokemon-about' },
      },
    ],
  },
  {
    path: '/dbz',
    name: 'dbz',
    component: () =>
      import(
        /* webpackChunkName: "DragonBallLayout" */
        '@/modules/dbz/layouts/DragonBallLayout'
      ),
    children: [
      {
        path: 'characters',
        name: 'dbz-characters',
        component: () =>
          import(
            /* webpackChunkName: "DbzCharacters" */
            '@/modules/dbz/pages/DbzCharacters'
          ),
      },
      {
        path: 'about',
        name: 'dbz-about',
        component: () =>
          import(
            /* webpackChunkName: "DbzAbout" */
            '@/modules/dbz/pages/DbzAbout'
          ),
      },
      {
        path: '',
        name: 'dbz-redirect',
        redirect: { name: 'dbz-characters' },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () =>
      import(
        /* webpackChunkName: "NoPageFound" */
        '@/modules/shared/pages/NoPageFound'
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
