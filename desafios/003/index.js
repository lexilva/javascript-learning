function calcular(){
    var num = window.prompt('Digite um número inteiro qualquer:')
    var res = Number(num)
    var antecessor = res - 1
    var sucessor = res +1
    window.alert(`Antes de ${res}, temos o número ${antecessor}.\nDepois de ${res}, temos o número ${sucessor}.`)
}