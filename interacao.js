function ok() {
    let dias = document.getElementById('weekday')
    let lista = document.getElementById('weekdays')
    let res = document.getElementById('res')
    if (dias.value.length == 0) {
        alert('É necessário que se digite um dia da semana!')
        console.log('Gentileza verificar o valor digitado!')
    } else {
        console.log('Tudo funcionando perfeitamente!')
    }
}












/* 
- FOR de LABEL terá o mesmo nome que a ID e NAME do input;
- Input tendo LIST terá o mesmo nome da ID de DATALIST;
- O VALUE de OPTIONS já dá opções, não é necessário fechar a tag;
- Verificar "onchange".
*/