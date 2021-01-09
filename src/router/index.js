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
        component: () => import('../views/Home_view.vue')
      }]
    },{
      path: '/contact',
      component: () => import('../layouts/main.vue'),
      children: [{
        path: '',
        name: 'Contact',
        component: () => import('../views/Contact_view.vue')
      }]
    },
    // PAGES FORUM 
    {
      path:'/forum',
      component:() => import('../layouts/main.vue'),
      children:[{
        path:'',
        name:"ListSujet",
        component: () => import('../views/Forum_view.vue')
      }]
    },{
      path:'/listSujet/:id',
      component:() => import('../layouts/main.vue'),
      children:[{
        path:'',
        name:"ListSujet",
        component: () => import('../views/ListSujet_view.vue')
      }]
    },{
      path:'/sujet/:id',
      component:() => import('../layouts/main.vue'),
      children:[{
        path:'',
        name:"Sujet",
        component: () => import('../views/Sujet_view.vue')
      }]
    },
    
    //PAGES AUTH
    {
      path: '/admin',
      component: () => import('../layouts/main.vue'),
      children: [{
        path: '',
        name: 'AdminPage',
        component: () => import('../views/Admin_view.vue')
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
        name: 'User',
        component: () => import('../views/User_view.vue')
      }]
    },
    {
      path: '/verifyMail',
      component: () => import('../views/VerifyMail_view.vue'),
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