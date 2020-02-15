import Vue from 'vue';
import { actions } from './data_operater.js';
////////////////////////////////////////////////////////////////
const translation = Vue.observable({ data: {} })
Object.defineProperty(Vue.prototype, '$translation', {
    get () {
        return translation.data
    },
    set (value) {
        translation.data = value
    }
})

Vue.prototype.$GetTranslation = function (val){
    if(translation.data[val]==undefined)
    {
        actions.translation.update_unset(this.$current_language,val).then(result=>{
            if(result.data=="success")
            {
                window.console.log(result);
            }
            
        })
        return val;
    }
    else
    {
        return translation.data[val];
    }
}
///=================================================================///////

const user = Vue.observable({ data: {} })
Object.defineProperty(Vue.prototype, '$user', {
    get () {
        return user.data    
    },
    set (value) {
        user.data = value;
    }
})

const users = Vue.observable({ data: {} })
Object.defineProperty(Vue.prototype, '$users', {
    get () {
        return users.data    
    },
    set (value) {
        users.data = value;
    }
})

const errors = Vue.observable({ data: [] })
Object.defineProperty(Vue.prototype, '$errors', {
    get () {
        return errors.data
    },
    set (value) {
        
        errors.data = value
    }
})

const islogin = Vue.observable({ data: false })
Object.defineProperty(Vue.prototype, '$islogin', {
    get () {
        
        return islogin.data
    },
    set (value) {
        
        islogin.data = value
        window.localStorage.setItem('islogin', value)
        if(value!=true)
        {
            if(this.$route.path!="/login")
            {
                this.$router.push("/");
            }
            
        }        
    }
})
const current_language = Vue.observable({ data: "" })
Object.defineProperty(Vue.prototype, '$current_language', {
    get () {
        
        return current_language.data
    },
    set (value) {
        current_language.data = value
        actions.translation.fetchTranslationByLanguage(value);
            
    }
})

const active_element = Vue.observable({ data: null })
Object.defineProperty(Vue.prototype, '$active_element', {
    get () {
        
        return active_element.data
    },
    set (value) {
        active_element.data = value
            
    }
})
/*

Vue.prototype.$ele_active = function (e){
    window.console.log(this)
    active_element.data = e.target;
    
    
}
const current_language = Vue.observable({ data: 'ENG' })
Object.defineProperty(Vue.prototype, '$current_language', {
    get () {
        return current_language.data
    },
    set (value) {
        if(value!=current_language.data)
        {
            current_language.data = value;
            
        }
    }
})
*/
////public methods
Vue.prototype.$input_ele_on_blur = function (e){
    if(e.relatedTarget)
    {

        if(e.relatedTarget.parentNode.classList.contains("keypad_number"))
        {
            e.target.focus();
            
            
        }
        else
        {
            active_element.data={};
        }
        
    }
    else
    {
        active_element.data={};
    }
}

Vue.prototype.$jump = function (path){
    window.console.log(path)
    this.$router.push({path: path})
}


