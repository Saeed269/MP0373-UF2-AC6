window.onload = function () {
    DescargarDatos();
}

async function DescargarDatos() {
    let respuesta = await fetch("https://countriesnow.space/api/v0.1/countries/capital");
    let datos = await respuesta.json();
    let paises = datos.data;
    RellenarTabla(paises)
}

async function RellenarTabla(paises) {
    let tabla = document.createElement('table');
    document.body.append(tabla);

    let filaTitulo = document.createElement("tr");
    filaTitulo.classList.add("filaTitulo")
    tabla.append(filaTitulo);
    let tituloPais = document.createElement("th")
    tituloPais.innerHTML = "PAISOS"
    filaTitulo.append(tituloPais);
    let tituloCapital = document.createElement("th")
    tituloCapital.innerHTML = "CAPITALS"
    filaTitulo.append(tituloCapital);

    for (let pais of paises) {
        let fila = document.createElement('tr');
        tabla.append(fila);
        let NombrePais = document.createElement('td')
        NombrePais.innerHTML = pais.name;
        fila.append(NombrePais)
        let NombreCapital = document.createElement('td');
        NombreCapital.innerHTML = pais.capital;
        fila.append(NombreCapital)
    }
}

