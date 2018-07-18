import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Projeto from '@/components/Projeto'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,      
      meta: {
        breadcrumb: 'Home',
        title: 'Home',
        subtitle: 'Todos os projetos'
      },
      children: [
        {
          path: 'projeto/:idProjeto',
          name: 'Projeto',
          component: Projeto,
          breadcrumb: 'projeto',
          meta: {
            breadcrumb: 'Projeto',
            title: 'Projeto',
            subtitle: 'Detalhes do projeto'
          }   
        }
      ] 
    },    
  ]
})
