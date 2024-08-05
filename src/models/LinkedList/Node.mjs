export default class Node {
    ciudad 
    next

    constructor(ciudad) {
        this.ciudad = ciudad
        this.next = null
    }
    getCiudad () {
        return this.ciudad
    }
}