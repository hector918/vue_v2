import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import rou from './router';
import './variable_define';

Vue.config.productionTip = false

new Vue({
    router:rou,
    vuetify,
    render: h => h(App),
    methods:{
        
    },
    
}).$mount('#app')
