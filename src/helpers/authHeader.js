export function authHeader() {

    let user  = JSON.parse(localStorage.getItem('@usuarioUnity22'));
    let token = JSON.parse(localStorage.getItem('@tokenUnity22'));

if (user && token){
    return { 'x-access-token': token };
}else{
    return { };
}

}