// constructor de torta
function Torta(id) {
    this.id = id
    this.gramos
    this.cobertura
    this.precio
    // determina los gramos de la torta según la cantidad de personas, rechaza valores negativos o NaN
    this.calcularGramos = () => {
        let personas = 0
        while (Math.sign(personas) != 1) {
            personas = Number(prompt("Ingrese la cantidad de personas para determinar el tamaño de la torta"))
            if (Math.sign(personas) != 1) {
                alert("ERROR: ingrese un valor numérico válido")
            }
        }
        this.gramos = personas * 100
    }
    // permite al usuario elegir la cobertura, rechaza valores distintos de 1, 2 o 3
    this.elegirCobertura = () => {
        let cob
        while (!(cob >= 1 && cob <= 3 && Number.isInteger(cob))) {
            cob = Number(prompt("Elija su cobertura. Coloque '1' si desea crema chantilly ($100), '2' para buttercream ($200) y '3' para fondant ($300)"))
            if (!(cob >= 1 && cob <= 3 && Number.isInteger(cob))) {
                alert("ERROR: ingrese 1, 2 o 3")
            }
        }
        this.cobertura = cob
    }
    // calcula el precio de la torta según los gramos y la cobertura
    this.calcularPrecio = () => {
        this.precio = this.gramos * 5 + precioCobertura(this.cobertura)
    }
}

// determina el precio según la cobertura elegida
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


// construye la torta, calcula gramos, elige la cobertura, calcula el precio y la pushea al carrito
function hacerTorta(id) {
    
    let torta1 = new Torta(id)
    torta1.calcularGramos()
    torta1.elegirCobertura()
    torta1.calcularPrecio()
    carrito.push(torta1)
    

}

let carrito = []

let flag = true
let numeroDeTorta = 1
while (flag == true) {
    // se construye la torta, hace los calculos y la pushea al carrito
    hacerTorta(numeroDeTorta)
    numeroDeTorta++
    console.log(numeroDeTorta);
    // pregunta al usuario si quiere agregar otra torta, rechaza entradas distintas a 'si' o 'no'
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

// se suman los precios de las tortas del carrito
let precioTotal = carrito.reduce((acc, el) => acc + el.precio, 0)

// se muestra al cliente el precio total
//alert("El precio total de su carrito es $" + precioTotal)

function coberturaDisplay(cob) {
    if (cob==1) {
        return "Crema Chantilly"
    } else if (cob==2) {
        return "Buttercream"
    } else {
        return "Fondant"
    }
}
let container = document.getElementById("container")
carrito.forEach((producto) => {
    let div = document.createElement("div")
    div.innerHTML = `<h5>Torta ${producto.id}</h6>
                    <p>Peso: ${producto.gramos} gramos</p>
                    <p>Cobertura: ${coberturaDisplay(producto.cobertura)}</p>
                    <p>Precio: $${producto.precio}</p>
                    <hr>`

    container.append(div)
})
let h3 = document.createElement("h3")
h3.innerHTML = `<h3>Total: $${precioTotal}</h3>`
container.append(h3)

let financiacion = document.getElementById("finan")
console.log(financiacion);
if (precioTotal>50000) {
    financiacion.className = "show ms-2"
}