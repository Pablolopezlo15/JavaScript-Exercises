window.onload = function() {
    cargar();
    let opcioncomunidad = document.getElementById('comunidades');
    opcioncomunidad.addEventListener("change", cargarProvincias);
    let opcionprovincia = document.getElementById('provincias');
    opcionprovincia.addEventListener("change", cargarMunicipios);
    let opcionmunicipio = document.getElementById('municipios');
    opcionmunicipio.addEventListener("change", cargarPronostico);

    // Agregar opción predeterminada a 'provincias'
    var optionProvincias = document.createElement('option');
    optionProvincias.value = '';
    optionProvincias.text = 'Provincias';
    opcionprovincia.appendChild(optionProvincias);

    // Agregar opción predeterminada a 'municipios'
    var optionMunicipios = document.createElement('option');
    optionMunicipios.value = '';
    optionMunicipios.text = 'Municipios';
    opcionmunicipio.appendChild(optionMunicipios);
}



function cargar(){
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'comunidades.php', true);
    xhttp.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
            try {
                var respuesta = JSON.parse(this.responseText);
                var opciones = respuesta.data;
                var select = document.getElementById('comunidades');
                select.innerHTML = '';

                opciones.forEach(function(opcion) {
                    var nuevoOption = document.createElement('option');
                    nuevoOption.value = opcion.CCOM; 
                    nuevoOption.text = opcion.COM; 
                    select.appendChild(nuevoOption);
                });
            } catch (error) {
                console.error('Error parsing JSON:', error);

            }
        }

    }
    xhttp.send();
}


function cargarProvincias(){
    var xhttp = new XMLHttpRequest();
    var opcioncomunidad = document.getElementById('comunidades');
    console.log('Comunidad seleccionada:', opcioncomunidad.value); // Log para verificar la opción seleccionada
    xhttp.open('GET', 'provincias.php?CCOM=' + opcioncomunidad.value, true);
    xhttp.onload = function() {
        if (this.readyState == 4 && this.status == 200 ) {
            try {
                var provincias = JSON.parse(this.responseText);
                console.log('Provincias del servidor:', provincias); // Log para verificar la respuesta del servidor

                var selectProvincias = document.getElementById('provincias');
                selectProvincias.innerHTML = ''; // Limpiar opciones existentes

                provincias.data.forEach(function(opcion) {
                    var nuevoOption = document.createElement('option');
                    nuevoOption.value = opcion.CPRO; 
                    nuevoOption.text = opcion.PRO; 
                    selectProvincias.appendChild(nuevoOption);
                });
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        }
    }
    xhttp.send();
}


function cargarMunicipios(){
    var xhttp = new XMLHttpRequest();
    var opcionprovincia = document.getElementById('provincias');
    console.log('Provincia seleccionada:', opcionprovincia.value); // Log para verificar la opción seleccionada
    xhttp.open('GET', 'municipios.php?CPRO=' + opcionprovincia.value, true);
    xhttp.onload = function() {
        if (this.readyState == 4 && this.status == 200 ) {
            console.log('Texto de la respuesta:', this.responseText);
            try {
                var municipios = JSON.parse(this.responseText);
                console.log('Municipios del servidor:', municipios); // Log para verificar la respuesta del servidor

                var selectMunicipios = document.getElementById('municipios');
                selectMunicipios.innerHTML = ''; // Limpiar opciones existentes

                municipios.data.forEach(function(opcion) {
                    var nuevoOption = document.createElement('option');
                    nuevoOption.value = opcion.CMUM; 
                    nuevoOption.text = opcion.DMUN50; 
                    selectMunicipios.appendChild(nuevoOption);
                });
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        }
    }
    xhttp.send();
}

function cargarPronostico() {
    var opcionmunicipio = document.getElementById('municipios');
    var municipioCodigo = opcionmunicipio.value;

    // Realiza la consulta al archivo PHP
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'pronostico.php?CMUM=' + municipioCodigo, true);
    xhttp.onload = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                try {
                    var respuesta = JSON.parse(this.responseText);

                    if (respuesta.error) {
                        console.error('Error en la solicitud:', respuesta.error);
                    } else {
                        console.log('Pronóstico meteorológico para el municipio:', respuesta.datos);
                    }
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                }
            } else {
                console.error('Error en la solicitud. Código de estado:', this.status);
            }
        }
    }
    xhttp.send();
}