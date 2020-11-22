import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    
    //PAGES Principale
    {
      path: '/',
      component: () => import('../layouts/main.vue'),
      children: [{
        path: '/',
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
        name:"listSujet",
        component: () => import('../views/listSujet.vue')
      }]
    },{
      path:'/Article/:id',
      component:() => import('../layouts/main.vue'),
      children:[{
        path:'',
        name:"ArticleId",
        component: () => import('../views/ArticleId.vue')
      }]
    },
    
    //PAGES AUTH
    {
      path: '/login',
      component: () => import('../layouts/main.vue'),
      children: [{
        path: '',
        name: 'LoginPage',
        component: () => import('../views/Login.vue')
      }]
    },{
      path: '/admin',
      component: () => import('../layouts/main.vue'),
      children: [{
        path: '',
        name: 'AdminPage',
        component: () => import('../views/Admin.vue')
      }]
    }
  ]
})

export default router