//PASOS PARA CONSUMIR UN API CON JS PURO

//1. DECLARO LA URI (OA ONDE VOY)
const URI = "https://api.spotify.com/v1/artists/1Cd5Kq0yfp0WqfiryLu4bu/top-tracks?market=US"

//2. DECLARA LOS PARAMETROS DE LA PETICION (QUE VOY A HACER?)

const TOKEN = "Bearer BQDWIr35FHOA-7o-q2nxIMRGAPZRyFV2hUoQDvFApKf7fq4uqPs94wf-L8u0RyO9sAXZBONs1qnHcQV1ZkPGqEq6xLxpAdqJpQLbWYcP2B5RNXcU30kyNWar1laHfGQHLwVRjJunczukCuM2M9Q"

const PETICION = {
    method: "GET",
    headers: { Authorization: TOKEN }
}


//RUTINA PARA CONSUMIR API CON METODO POST}
//1. URI PARA DONDE VOY
const URIPOST = 'https://accounts.spotify.com/api/token'

//2. alamceno los datos que voy a enviar
let dato1 = 'client_id=c87e5cfef18549158e7252515aa4e3d2'
let dato2 = 'client_secret=3bf1f55584a940648338be13dca10f09'
let dato3 = 'grant_type=client_credentials'

//3 configuro la peticion
const PETICIONPOST = {
    method: "POST",
    headers: {
        "Content-type": "application/x-www-form-urlencoded"
    },
    body: dato1 + '&' + dato2 + '&' + dato3
}




//4 voy al servidor a consumir el servicio
fetch(URIPOST, PETICIONPOST)
    .then(function(respuesta) {
        return respuesta.json()
    })
    .then(function(respuesta) {
        console.log(respuesta)
        let token = respuesta.token_type + ' ' + respuesta.access_token
        console.log(token)
    })
    .catch(function(respuesta) {
        console.log(respuesta)
    })