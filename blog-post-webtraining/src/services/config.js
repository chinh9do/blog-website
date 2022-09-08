import axios from 'axios';
import Oidc from 'oidc-client';

const config = {
    authority: 'http://localhost:5001/api/',
    client_id: 'm2m.client',
    client_secret: 'MySecret',
    redirect_uri: 'http://localhost:5001/api/login',
    response_type: 'id_token token',
    scope: 'blogapi.read'
}

var userManager = new Oidc.UserManager(config);

var signIn = function(){
    userManager.signinRedirect()
}

userManager.getUser().then(user =>{
    if(user){
        axios.defaults.headers.common["Authorization"] = "Bearer " + user.access_token;
    }
})