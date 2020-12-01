import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
  mode:'history',
  routes: [
    
    //PAGES Principale
    {
      path: '/',
      component: () => import('../layouts/main.vue'),
      children: [{
        path:'',
        name: 'Home',
        component: () => import('../views/Home.vue')
      }]
    },{
      path: '/contact',
      component: () => import('../layouts/main.vue'),
      children: [{
        path: '',
        name: 'Contact',
        component: () => import('../views/Contact.vue')
      }]
    },
    // PAGES FORUM 
    {
      path: '/forum',
      component: () => import('../layouts/main.vue'),
      children: [{
        path: '',
        name: 'Forum',
        component: () => import('../views/Forum.vue')
      }]
    },{
      path:'/listSujet/:id',
      component:() => import('../layouts/main.vue'),
      children:[{
        path:'',
        name:"ListSujet",
        component: () => import('../views/listSujet.vue')
      }]
    },{
      path:'/article/:id',
      component:() => import('../layouts/main.vue'),
      children:[{
        path:'',
        name:"Article",
        component: () => import('../views/ArticleId.vue')
      }]
    },
    
    //PAGES AUTH
    {
      path: '/admin',
      component: () => import('../layouts/main.vue'),
      children: [{
        path: '',
        name: 'AdminPage',
        component: () => import('../views/Admin.vue')
      }]
    },
    {
      path: '/userdetail',
      meta: {
        requiresAuth: true
      },
      component: () => import('../layouts/main.vue'),
      children: [{
        path: '',
        name: 'userDetail',
        component: () => import('../views/userDetail.vue')
      }]
    },
    {
      path:'*',
      redirect: '/'
    },
    
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "Home"
      });
    } else {
      next();
    }
  } else {
    next();
  }
})
export default router