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

    let nombre = document.forms["formContacto"]["nombre"].value;
    let email = document.forms["formContacto"]["email"].value;

    if (!regexNombre.test(nombre)) {
        console.log(nombre + " es invalida");
        esValido = false
    } else {
        console.log(nombre + " es valida")
    }

    if (!regexEmail.test(email)) {
        console.log(email + " es invalida");
        esValido = false
    } else {
        console.log(email + " es valida")
    }

}