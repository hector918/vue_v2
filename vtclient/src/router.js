import Vue from 'vue'
import R from 'vue-router'

import login_page from './views/login_page.vue'
import home_page from './views/home_page.vue'
import test_page from './views/test_page.vue'
import notFound from './views/404.vue'
import HelloWorld from './components/HelloWorld.vue'
import user_manager_page from './views/users_manager_page.vue'

import control_sheet_all_page from './views/control_sheet_all_page.vue'

Vue.use(R)

const vueRouter = new R({
    mode:"history",
    base:process.env.BASE_URL,
    routes:[
      {
        path:"/", 
        redirect:"/login"
      },
      
      {
        path:"/login", 
        component:login_page,
        meta : {
          requireAuth : false,
        },
        
        /*
        children:[
          {path:"", redirect:"index"},
          {path:"index", name:"index", component:login_page},
        ]
        */
      },
      {
        path:"/test", 
        component:test_page,
        meta : {
          power_tag : "Test",
          requireAuth : true,
        }
        /*
        children:[
          {path:"", redirect:"index"},
          {path:"index", name:"index", component:login_page},
        ]
        */
      },
      {
        path:"/usermanagerpage", 
        component:user_manager_page,
        meta : {
          requireAuth : true,
          power_tag : "UserManager",
        }
      },
      {
        path:"/index", 
        component:HelloWorld,
        meta : {
          requireAuth : true,
          power_tag : "Index",
        }
        
        /*
        children:[
          {path:"", redirect:"index"},
          {path:"index", name:"index", component:login_page},
        ]
        */
      },
      {
        path:"/home", 
        component:home_page,
        
        meta :{
          requireAuth : true,
          power_tag : "Home",
        }
        /*
        children:[
          {path:"", redirect:"index"},
          {path:"index", name:"index", component:login_page},
        ]
        */
      },
      {
        path:"/control_sheet_all", 
        component:control_sheet_all_page,
        meta : {
          power_tag : "control_sheet_all",
          requireAuth : true,
        }
        /*
        children:[
          {path:"", redirect:"index"},
          {path:"index", name:"index", component:login_page},
        ]
        */
      },
      { 
        path:"*", 
        component:notFound,
        name:"404", 
        meta:{
          title:"404",
          requireAuth : false,

        }
      }
    ]
})


vueRouter.beforeEach((to, from, next) => {
  
  
  if(to.meta.requireAuth==true)
  {
    let islogin = window.localStorage.getItem('islogin');
    
    if(islogin!="true")
    {
      if(vueRouter.history.current.path=="/login")
      {
        return
      }
      next({ path: 'login' });
      
      return;
    }
  }
  //LoadingBar.start();
  // if(to.path == "/" || to.path == "/home" || to.pa){
  //     next();
  // }
  
  next();
})

vueRouter.afterEach((to) => {
    //LoadingBar.finish();
    if(to.meta.title){
        document.title = to.title;
    }else{
        document.title = "HZ";
    }
    //window.console.log(next);
    //next();
})


export default vueRouter;
