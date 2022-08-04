function Torta(gramos, cobertura) {
    this.gramos = gramos
    this.cobertura = cobertura
    this.precio = (Number(gramos) * 5) + precioCobertura(cobertura)
}

function otraTorta() {
    let flag = ""
    while (flag != "si" && flag != "no") {
        flag = prompt("Su torta supera los 2kg, tiene la posibilidad de que sea realizada en varios pisos por un costo adicional de $500. Si así lo desea coloque 'Si', de lo contrario coloque 'No'")
        if (flag != "si" && flag != "no") {
            alert("ERROR: ingrese 'Si' o 'No'")
        }
    }
    if (flag == "si") {
        let torta2 = new Torta(gramosDeTorta(), elegirCobertura())
        carrito.push(torta2)
    } else {
        return
    }
}

function gramosDeTorta() {
    let personas = 0
    while (Math.sign(personas) != 1) {
        personas = Number(prompt("Ingrese la cantidad de personas para determinar el tamaño de la torta"))
        if (Math.sign(personas) != 1) {
            alert("ERROR: ingrese un valor numérico válido")
        }
    }
    return personas * 100
}

function precioCobertura(cobertura) {
    switch (cobertura) {
        case 1:
            return 100
        case 2:
            return 200
        case 3:
            return 300
    }
}

function elegirCobertura() {
    let cobertura = 0
    while (cobertura != 1 && cobertura != 2 && cobertura != 3) {
        cobertura = Number(prompt("Elija su cobertura. Coloque '1' si desea crema chantilly ($100), '2' para buttercream ($200) y '3' para fondant ($300)"))
        if (cobertura != 1 && cobertura != 2 && cobertura != 3) {
            alert("ERROR: ingrese 1, 2 o 3")
        }
    }
    return cobertura
}

function hacerTorta() {
    let torta1 = new Torta(gramosDeTorta(), elegirCobertura())
    carrito.push(torta1)
}



let carrito = []

let flag = true
while (flag == true) {
    hacerTorta()
    while (flag != "si" && flag != "no") {
        flag = prompt("Si desea agregar otra torta ingrese 'Si', de lo contrario ingrese 'No' para ver el precio de su carrito.")
        if (flag != "si" && flag != "no") {
            alert("ERROR: ingrese 'Si' o 'No'")
        }
    }
    if (flag == "si") {
        flag = true
    }
}
console.log(carrito);

let precioTotal = carrito.reduce((acc, el) => acc + el.precio, 0)

alert("El precio total de su carrito es $" + precioTotal)