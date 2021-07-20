let dias = document.getElementById('weekday')
let tar = document.getElementById('tarefas')
let resp = document.getElementById('res')

function semanatarefa(Dias, Tarefas) {

var qd = document.getElementById('quadro')
var qtdLinhas = qd.rows.length
var linha = qd.insertRow(qtdLinhas)

var cellDiasdaSemana = linha.insertCell(0)
var cellTarefas = linha.insertCell(1)

cellDiasdaSemana = qtdLinhas
cellTarefas = qtdLinhas



}


function OK() {
    document.getElementById('tarefas').focus(); // Serve para mudar de input automaticamente. Ps:Obrigado Arthur! //
    if (dias.value.length == 0 || dias == Number) {
        alert('Gentileza digitar um valor válido!')
    } else {}
}


function prosseguir() {
    if (tar.value.length == 0) {
    alert('Digite uma tarefa!')
    } else {}
}










/* 
- FOR de LABEL terá o mesmo nome que a ID e NAME do input;
- Input tendo LIST terá o mesmo nome da ID de DATALIST;
- O VALUE de OPTIONS já dá opções, não é necessário fechar a tag;
- Verificar "onchange".
*/