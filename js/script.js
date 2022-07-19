class Remera {
    constructor(modelo, talle, stock, precio) {
        this.modelo = modelo
        this.talle = talle
        this.stock = stock
        this.precio = precio
    }
}

const remera1 = new Remera("la creacion", "XL", 10, 4000)
const remera2 = new Remera("la ultima cena", "L", 12, 4000)
const remera3 = new Remera("la noche estrellada", "M", 8, 4000)
const remera4 = new Remera("la joven de la perla", "XL", 15, 4000)

const remeras = [remera1, remera2, remera3, remera4]

const divRemeras = document.getElementById("remeras")

remeras.forEach(remerasArray => {
    divRemeras.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div>
                <img src="./multimedia/laUltimaCena.png" class="card-img-top imgRemeras" alt="...">
            </div>
            <div class="card-body">
                <h5 class="card-title">${remerasArray.modelo}</h5>
                <p class="card-text">${remerasArray.precio}</p>
                <a href="#" class="btn btn-success">COMPRAR</a>
            </div>
        </div> 
    `
})