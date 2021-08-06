var tarefas = [];
var dias = [];

function prosseguir(){
    var tarefa = document.getElementById('tarefas').value;
    var dia = document.getElementById('weekdays').value;

    dias.push(dia)
    tarefas.push(tarefa);

    var html = '';

    for(var i = 0; i < tarefas.length; i++) {
        html += '<tr><td>' + dias[i] + '</td><td>' + tarefas[i] + '</td></tr>';
        document.getElementById('table').innerHTML = html;
    }
}


/* 
- FOR de LABEL terá o mesmo nome que a ID e NAME do input;
- Input tendo LIST terá o mesmo nome da ID de DATALIST;
- O VALUE de OPTIONS já dá opções, não é necessário fechar a tag;
- Verificar "onchange".
*/