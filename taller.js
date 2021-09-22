const fs = require("fs");
let lista1;
let lista2;
let lista3;
let resultado = [];
let aux;

fs.readFile("HolaMundo.c++", "utf8", (err, file) => {
    if (err) throw err;
    lista1 = file.toString();
    lista2 = lista1.split(" ");
    
    lista2.forEach(element => {
        if (element === null) {
           console.log("No hay datos");
        }else{
            aux = element.replace("()", '')
            aux = aux.replace("{", '');
            aux = aux.replace("}", '');
            aux = aux.replace("::", '');
            aux = aux.replace("<<", '');
            aux = aux.replace("0", '');
            aux = aux.replace('"', '');
            aux = aux.replace("<", '');
            aux = aux.replace(">", '');
            aux = aux.replace(",", '');
            aux = aux.replace(";", '');
            aux = aux.replace("#", '');
            aux = aux.replace("\n\r\n", '');
            aux = aux.replace("\r", '');
            aux = aux.replace("\n", '');
            aux = aux.replace('', '');

            resultado.push(aux);
        }

    });

    lista3 = new Set(resultado);
    console.log(lista3);
});