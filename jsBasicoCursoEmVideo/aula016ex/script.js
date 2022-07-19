
let resp = document.querySelector('div#res')
let numIn = window.document.querySelector('input#num')
let analisa = document.getElementById('vetor')
let numeros = []
let vet = 0
let maiorValor = -1
let menorValor = 9999
let somaValores = 0
let mediaValores = 0
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}
function inLIsta(n,v){
    if(v.indexOf(Number(n))!= -1){
        return true
    }else{
        return false
    }
}
function maValor (v){
    if(maiorValor < v){
        maiorValor = v
    }
}
function meValor(v){
    if(menorValor > v){
        menorValor = v
    }
}
function adicionaNum(){
    /*let vet = Number(numIn.value)
    let analisa = document.getElementById('vetor')
    if(numIn == ''){     
        window.alert('digite um número!')
    }else if((numIn<1)||(numIn>100)){
        window.alert('digite um número válido!')
    }else{
       numeros.push(vet)
       tvetor = numeros.length
       let item = document.createElement('option')
       item.text =`Valor ${vet} adicionado`
       analisa.appendChild(item)
    }
    */

   if(isNumero(numIn.value) && !inLIsta(numIn.value, numeros)){
        resp.innerHTML = ''
        vet = Number(numIn.value)   
        maValor(vet) 
        meValor(vet)   
        numeros.push(vet)
        somaValores += vet
        mediaValores = somaValores/numeros.length
        let item = document.createElement('option')
        item.text =`Valor ${vet} adicionado`
        analisa.appendChild(item)
   }else{
    window.alert('Valor Inválido ou já encontrado na lista')
   }
   numIn.value = ''
   numIn.focus()
}
function exec(){
    resp.innerHTML= `Ao todo temos ${numeros.length} números cadastrados.<br>Maior valor informado foi ${maiorValor}<br>Menor valor Informado foi ${menorValor}<br>Soma dos valores informados foi ${somaValores}<br>A média dos valores informados é ${mediaValores}`   
}