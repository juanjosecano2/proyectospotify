//1. URI PARA DONDE VOY
const URI='https://accounts.spotify.com/api/token'

//2. alamceno los datos que voy a enviar
let dato1='client_id=c87e5cfef18549158e7252515aa4e3d2'
let dato2='client_secret=3bf1f55584a940648338be13dca10f09'
let dato3='grant_type=client_credentials'

//3 configuro la peticion
const PETICION={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:dato1+'&'+dato2+'&'+dato3
}

//4. COnsumir el servicio
export async function generarToken(){

    let respuesta= await fetch(URI,PETICION)
    return (respuesta.json())

}