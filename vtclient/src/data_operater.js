
import axios from 'axios';

axios.defaults.withCredentials = true;//此处必须带上general_function"Access-Control-Allow-Origin":"http://127.0.0.1:8080",
const AX = axios.create({
    withCredentials: true,
    headers : {
        'token': localStorage.token,
    }
})
export const pageVar = {
    this : null,
    users : {},
    errors : [],
    secret : "",

};
export const mutations = {
    /*
    setTranslation(val) {
        pageVar.translation = val
    }
    */
};

const API_URL = "http://127.0.0.1:3000/api/";
//提交请求
export const actions = {
    users : {
        getalluser : (query)=>{
            var promise=AX.post(API_URL+'users/getalluser',query);
            promise.then(processFetchData).catch(handleError);
            return promise;
        },
        update_user_field : (query)=>{
            var promise=AX.post(API_URL+'users/updateuserfield',query);
            promise.then(processFetchData).catch(handleError);

            return promise;
            
        },
    },
    login : {
        logingin : (query)=>{
            var promise=AX.post(API_URL+'login/logingin',query);
            promise.then(processFetchData).catch(handleError);
            return promise;
        },
        logingout : ()=>{
            var promise=AX.post(API_URL+'login/logout',{});
            promise.then(processFetchData).catch((error)=>{
                window.console.log(error);
            })
            return promise;
        },
        getSession : ()=>{
            var promise=AX.post(API_URL+'session/get_session',{});
            promise.then(processFetchData).catch((error)=>{
                window.console.log(error);
            })
            return promise;
            
        }
    },
    translation : {
        update_unset : (current_language,text)=>{
            
            let promise = AX.post(API_URL+'translate/updateunset',{"current_language":current_language,"text":text});
            promise.then().catch(handleError);
            return promise;
        },
        fetchTranslationByLanguage :(language)=>{
            let promise = AX.post(API_URL+'translate/listbylanguage',{"current_language":language});
            promise.then(processFetchData).catch(handleError);
            return promise;
        }
    },
    form : {
        upload_unfinished_form : (from,data)=>{
            let promise = AX.post(API_URL+'form/upload_unfinished_form',{"form_name":from,"data":data});
            promise.then().catch(handleError);
            return promise;
        },
        get_unfinished_form : (from)=>{
            let promise = AX.post(API_URL+'form/get_unfinished_form',{"form_name":from});
            promise.then().catch(handleError);
            return promise;
        },
    }
    
}
//处理数据
function processFetchData (response)
{
    for(var x in response.data)
    {
        switch(x)
        {
            case "user":
                pageVar.this.$user=response.data[x];
            break;
            case "users":
                //pageVar.this.$users=response.data[x];
            break;
            case "errors":
                
                pageVar[x]=response.data[x];
            break;
            case "session":
                switch(response.data['session']['session_id'])
                {
                    case ""://如果为空，就get_session
                        actions.login.getSession();
                    break;
                    case undefined:
                        //如果没有设定，就不作处理
                        
                    break;
                    default :
                        //更新token
                        
                        window.console.log("token refresh");
                        localStorage.token = response.data['session']['session_id'];
                        AX.defaults.headers.token=response.data['session']['session_id'];
                    break;
                }
                
                localStorage.secret = response.data['session']['secret'];
                if(response.data['session']['islogin']==true)
                {
                    pageVar.this.$islogin = true;
                }
                else
                {
                    pageVar.this.$islogin = false;
                }
                
                //pageVar.secret = response.data['session']['secret'];
            break;
            case "translation":
                pageVar.this.$translation=response.data[x];
            break;
            default:
                
            break;
        }
        
    }
    //window.console.log(pageVar);
}
const handleError =function(error)
{
    
    pageVar.errors.push(error);
    window.console.log(pageVar.errors)
}
