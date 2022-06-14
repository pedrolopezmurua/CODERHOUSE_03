


class product { // clase
    constructor(name, price, quantity, description) { //funcion contructora producto
        this.name = name //atributos
        this.price = price //atributos
        this.quantity = quantity //atributos
        this.description = description //atributos
    }
    calculatePriceIVA() { //funciones o metodos
        const IVA = 19 // calculo iva en chile 19%
        return (this.price) + ((this.price * IVA) / 100)
    }
    getName() { //funciones o metodos
        return this.name
    }
    getPrice() { //funciones o metodos
        return this.price
    }
    getQuantity() { //funciones o metodos
        return this.quantity
    }
    getDescription() { //funciones o metodos
        return this.description
    }
}

//crear lista de productos en arreglo

const listadoProductos =[]

listadoProductos.push(new product(" anillo de plata",5,500, "aro plata 924 ")) // objetos
listadoProductos.push(new product("collar",15, 500, "descripcion de los fideos ")) //objetos
listadoProductos.push(new product(" aro",20, 500, "descripcion de los fideos ")) //objetos
listadoProductos.push(new product("gorro ",25, 500, "descripcion de los fideos ")) //objetos


for (const producto of listadoProductos) //for off para recorrer el arreglo
console.log(producto.getName(), producto.getPrice(), producto.getQuantity(), producto.getDescription());

class Pedido { // clase
    constructor(productos, cantidad, total) { //funcion contructora producto
        this.productos = productos //atributos
        this.cantidad = cantidad //atributos
        this.total = total //atributos
    }
}

let Producto1 = "aro" //producto a comprar
let cantidad1 = 2 //cantidad a comprar de productos
let total1 = listadoProductos[2].getPrice() * cantidad1//total a pagar



listaPedidos = [] //lista de pedidos
listaPedidos.push(new Pedido(Producto1, cantidad1, total1)) //objetos
console.log(listaPedidos) //imprimir lista de pedidos);


