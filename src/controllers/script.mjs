import Graph from "../models/Graph/Graph.mjs";

let graph = new Graph();

let btn_addV = document.getElementById('btn-addV')
btn_addV.addEventListener('click', ()=> {
    let vertexName = document.getElementById('vertex-name').value
    graph.addV(vertexName)
    document.getElementById('vertex-name').value = '';
    alert('Se ha agregado ' + vertexName)
});

let btn_addC = document.getElementById('btn-addC')
btn_addC.addEventListener('click', ()=> {
    let startVertex = document.getElementById("start-vertex").value.trim();
    let endVertex = document.getElementById("end-vertex").value.trim();

    if (startVertex == '' || endVertex=='') {
        alert('Tiene que llenar los campos')
    } else {
        let weight = parseInt(document.getElementById("insert-conex").value);
        console.log(startVertex,endVertex)
        console.log(graph.addConexion(startVertex,endVertex,weight))

        document.getElementById('start-vertex').value = '';
        document.getElementById('end-vertex').value = '';
        document.getElementById('insert-conex').value = '';
    }
});


let count = 0
let btn_dfs = document.getElementById('btn-dfs')

btn_dfs.addEventListener('click', ()=> {
    let ciudadOrigin = document.getElementById('dfs-start').value;
    
    if(count == 0){
        graph.dfs(ciudadOrigin,callback);
    }

    else{
        count = 0;
        graph.clearVisted()
        graph.dfs(ciudadOrigin,callback);
    }

    count++;
});

let body = document.getElementById('dfs-result')

const callback = (nameCiu) => {
    console.log(nameCiu)
    addTable(nameCiu)
};

let addTable = (nameCiu) => {
    let tr = document.createElement('tr')
    let td = document.createElement('td')

    td.textContent = nameCiu

    tr.appendChild(td)
    body.appendChild(tr)
};

let print = (d) =>{
    let referencia = document.getElementById('dja-result');
  
    d.forEach(valor => {
      let pel = document.createElement('p')
      pel.textContent = valor;
      console.log(pel)
      referencia.appendChild(pel);
  }); 
  }
  let btn_dijsktra = document.getElementById('btn-dja');
  btn_dijsktra.addEventListener('click',()=>{
    let vinit = document.getElementById('Vinit').value;
    graph.dijkstra(vinit,print);
  })