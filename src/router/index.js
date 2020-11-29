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
    },
    {
      path:'*',
      redirect: '/'
    }
  ],
  
})

export default router