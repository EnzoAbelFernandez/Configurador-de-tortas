function gramosDeTorta(invitados) {
    let gramos = 100 * invitados
    if (gramos >= 2000) {
    while (pisos != "si" && pisos != "no") {
        pisos = prompt("Su torta supera los 2kg, tiene la posibilidad de que sea realizada en varios pisos por un costo adicional de $500. Si así lo desea coloque 'Si', de lo contrario coloque 'No'")
        if (pisos != "si" && pisos != "no") {
          alert("ERROR: ingrese 'Si' o 'No'")
        }
    }
    }
    if (pisos == "si") {
        return gramos * 5 + 500
    }
    return gramos * 5
}

let flag = true
let retry = 0
let pisos = 0


while(flag) {
    let personas = 0
    while (Math.sign(personas) != 1) {
        personas = Number(prompt("Ingrese la cantidad de personas para determinar el tamaño de la torta"))
        if (Math.sign(personas) != 1) {
        alert("ERROR: ingrese un valor numérico válido")
        }
    }

    let cobertura = 0
    while (cobertura != 1 && cobertura != 2 && cobertura != 3) {
        cobertura = Number(prompt("Elija su cobertura. Coloque '1' si desea crema chantilly ($100), '2' para buttercream ($200) y '3' para fondant ($300)"))
        if (cobertura != 1 && cobertura != 2 && cobertura != 3) {
        alert("ERROR: ingrese 1, 2 o 3")
        }
    }

    let precioFinal = gramosDeTorta(personas)

    switch(cobertura) {
        case 1:
        precioFinal += 100
        break
        case 2:
        precioFinal += 200
        break
        case 3:
        precioFinal += 300
        break
    }

    while (retry != "si" && retry != "no") {
        retry = prompt("El precio final de su torta es $" + precioFinal + ". Si está conforme ingrese 'Si', si quiere volver a configurar su torta ingrese 'No'")
        if (retry != "si" && retry != "no") {
          alert("ERROR: ingrese 'Si' o 'No'")
        }
    }
    if (retry == "si") {
        flag = false
        personas = 0
    }

}