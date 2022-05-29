export function pintarCanciones(canciones) {



    let fila = document.getElementById("fila")
    canciones.forEach(function(cancion) {
        //console.log(cancion)
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)

        //rutina para llenado
        let columna = document.createElement("div")
        columna.classList.add("col")

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card", "h-100", "mb-3")

        let filacard = document.createElement("div")
        filacard.classList.add("row", "g-0")

        let lugarimg = document.createElement("div")
        lugarimg.classList.add("col-md-4")

        let audio = document.createElement("audio")
        audio.classList.add("w-100")
        audio.setAttribute("controls", "controls")
        audio.src = cancion.preview_url

        let foto = document.createElement("img")
        foto.classList.add("img-fluid", "rounded-start")
        foto.src = cancion.album.images[0].url

        let lugarinfo = document.createElement("div")
        lugarinfo.classList.add("col-md-8")

        let cardbody = document.createElement("div")
        cardbody.classList.add("card-body")

        let titulo = document.createElement("h3")
        titulo.classList.add("card-title", "text-dark", "text-center")
        titulo.textContent = cancion.name

        //padres e hijos
        cardbody.appendChild(titulo)
        cardbody.appendChild(audio)
        lugarinfo.appendChild(cardbody)
        lugarimg.appendChild(foto)
        filacard.appendChild(lugarimg)
        filacard.appendChild(lugarinfo)
        tarjeta.appendChild(filacard)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })

}