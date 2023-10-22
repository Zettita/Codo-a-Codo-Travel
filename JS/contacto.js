function validar() {

    //Hecha x el grupo 10 de la Comisión XXXXXX de Codo a Codo
    //Integrantes:
    //
    //
    //
    //


    let esValido = true
    // flag, si alguno de los campos en invalido se cambia a false
    // al final de la función si aún es True, entonces llama al Submit
    // del formulario, de lo contrario marca los campos invalidos

    let formulario = document.formContacto


    // Definición de las regex para la validación de los campos
    const regexNombre = /^[a-z\s]+$/gmi;
    //regex testeada en https://regex101.com/
    //^     : desde el principio del string
    //a-z   : caracteres de la "a" a la "z"
    //\s    : espacio
    //+     : 1 o muchos
    //$     : al final del string
    //gmi   : global, multiline, no discrimina mayusculas ni mins

    const regexEmail = /^[a-z0-9]+@[a-z0-9]+(.[a-z0-9]+){1,2}$/gmi;
    //regex testeada en https://regex101.com/
    //^     : desde el principio del string
    //a-z   : caracteres de la "a" a la "z"
    //0-9   : números
    //@     : caracter @
    //+     : 1 o muchos
    //{1,2} : 1 o 2 ocurrencias de [a-z0-9]+ par los dominios
    //$     : al final del string
    //gmi   : global, multiline, no discrimina mayusculas ni mins

    const regexTelefono = /^\d{3}\s\d{4}-\d{4}$/gmi;
    //regex testeada en https://regex101.com/
    //^     : desde el principio del string
    //\d{3} : 3 digitos, area como 011
    //\s    : caracter espacio
    //\d{4} : 4 digitos
    //-     : guion
    //\d{4} : 4 digitos
    //$     : al final del string


    //3 digitos



    let nombre = document.forms["formContacto"]["nombre"].value;
    let email = document.forms["formContacto"]["email"].value;
    let telefono = document.forms["formContacto"]["telefono"].value;
    let mensaje = document.forms["formContacto"]["mensaje"].value;

    if (!regexNombre.test(nombre)) {
        console.log(nombre + " es invalida");
        document.getElementById("nombre").className = "inputInvalido";
        esValido = false
    } else {
        console.log(nombre + " es valida")
        document.getElementById("nombre").className = "inputValido";
    }

    if (!regexEmail.test(email)) {
        console.log(email + " es invalida");
        document.getElementById("email").className = "inputInvalido";
        esValido = false
    } else {
        console.log(email + " es valida")
        document.getElementById("email").className = "inputValido";
    }


    if (!regexTelefono.test(telefono)) {
        console.log(telefono + " es invalida");
        document.getElementById("telefono").className = "inputInvalido";
        esValido = false
    } else {
        console.log(telefono + " es valida")
        document.getElementById("telefono").className = "inputValido";
    }


    if (mensaje == "") { //solo considera invalidos los msgs vacios
        console.log(mensaje + " es invalida");
        document.getElementById("mensaje").className = "inputInvalido";
        esValido = false
    } else {
        console.log(mensaje + " es valida")
        document.getElementById("mensaje").className = "inputValido";
    }
}