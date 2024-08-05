import linkedList from "../LinkedList/linkedList.mjs";

export default class Graph {
    #listaAdyacencia = []
    #matrizAdyencia = []
    #map = new Map()
    #visited = new Array(this.#listaAdyacencia.length).fill(false);

    constructor() {}

    addVertices(...vertices) {
        for (let value of vertices) {
            this.#listaAdyacencia.push(new linkedList())
            this.#map.set(value,this.#listaAdyacencia.length-1)
        }
    }

    addV(value) {
        this.#listaAdyacencia.push(new linkedList())
        this.#map.set(value,this.#listaAdyacencia.length-1)
        this.#matrizAdyencia.push([])
        return value
    }
  


    addConexion(start, end, weight=1){
        if (this.#map.has(start) && this.#map.has(end)) {
            this.#listaAdyacencia[this.#map.get(start)].push(end,weight)
            this.#listaAdyacencia[this.#map.get(end)].push(start,weight)
            this.#matrizAdyencia[this.#map.get(start)][this.#map.get(end)] = weight
            this.#matrizAdyencia[this.#map.get(end)][this.#map.get(start)] = weight
            return true
        }
        return false;
    }

  dfs(origin, callback) {
    let originIndex = this.#map.get(origin);
    if (originIndex === undefined) {
        console.error(`Origen no encontrado en el mapa: ${origin}`);
        return;
    }

    this.#visited[originIndex] = true;
    callback(origin);

    let element = this.#listaAdyacencia[originIndex];
    if (element === undefined) {
        console.error(`Elemento no encontrado en la lista de adyacencia para el origen: ${origin}`);
        return;
    }

    if (typeof element.size !== 'function') {
        console.error(`El elemento en la lista de adyacencia no tiene el método size: ${element}`);
        return;
    }

    for (let i = 0; i < element.size(); i++) {
        let v = element.getElementAt(i);
        if (this.#visited[this.#map.get(v.ciudad.name)] !== true) {
            this.#visited[this.#map.get(v.ciudad.name)] = true;
            this.dfs(v.ciudad.name, callback);
        }
    }

}

    getVisit(){
        return this.#visited;
    }

    clearVisted(){
        this.#visited.fill(false)
    }

    dijkstra(verticeInit,print){

        let l = [];
        let lp = [];
        let v = [];
        let d = [];
        let dp = [];
        let v1;


        for (let i = 0; i < this.#matrizAdyencia.length; i++) {
            for (let j = 0; j < this.#matrizAdyencia.length; j++) {
                if (this.#matrizAdyencia[i][j] == undefined) {
                    this.#matrizAdyencia[i][j] = 10000;
                }
            }            
        }
        
        for(let i=0; i<this.#matrizAdyencia.length; i++){
          v[i] = i;
          lp[i]= v[i]
          d[i] = 10000;
        }
    
        v1 = this.#map.get(verticeInit);
        d[v1] = 0;
        dp = [...d];
    
        while (l.length !== this.#matrizAdyencia.length) {
            let minimo = Math.min(...dp.filter(value => value !== null));
            let indice = dp.indexOf(minimo);
            l.push(minimo);
    
            for (let i = 0; i < d.length; i++) {
                if (this.#matrizAdyencia[indice][i] !== 10000) {
                    let suma = d[indice] + this.#matrizAdyencia[indice][i];
                    if (d[i] > suma) {
                        d[i] = suma;
                    }
                }
            }

            dp[indice] = null;
        }

        console.log(d)
        print(d)
      }
}