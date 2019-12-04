var numTarefa = 0;

function recuperartudo() {
    fetch("http://www.professorisidro.com.br/tarefas.php", { "method": "GET" })
        .then(response => response.json())
        .then(json => geraTodas(json));
}

function geraTodas(json) {
    console.log("tudao = " + JSON.stringify(json));
    for (i = 0; i < json.length; i++) {
        let tarefa = json[i];
        console.log("tarefa = " + tarefa);
        criarTarefa(tarefa.nome);
    }
}

function criarTarefa(texto) {
    numTarefa++;

    var tarefaDOM = document.createElement("div");
    tarefaDOM.setAttribute("id", "t" + numTarefa);
    tarefaDOM.setAttribute("draggable", "true");
    tarefaDOM.setAttribute("class", "itemtarefa");
    tarefaDOM.setAttribute("ondragstart", "pegaItem(event);");
    tarefaDOM.innerHTML = texto;

    document.getElementById("pendentes").appendChild(tarefaDOM);
 
}

function pegaItem(evt) {
    console.log("comecei a arrastar " + evt.target.id);

    evt.dataTransfer.setData("TAREFA", evt.target.id);
}

function habilitaArrastar(evt) {
    evt.preventDefault();

}

function recebeItem(evt) {

    var idTarefa = evt.dataTransfer.getData("TAREFA");
    var tarefa = document.getElementById(idTarefa);
    console.log("Dropei a tarefa aqui =" + evt.target.id);

    evt.target.appendChild(tarefa);



}