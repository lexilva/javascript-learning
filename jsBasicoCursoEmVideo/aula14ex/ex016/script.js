

function contar(){
    let start = window.document.querySelector('input#ini')
    let sta = Number(start.value)
    let res = window.document.querySelector('div#res')
    let final = window.document.getElementById('end').value
    let end = Number(final)
    let step = window.document.getElementById('stp').value
    let stp = Number(step)
    let resposta = 'contando: <br>'
    if ((sta == '')||(end == '')){
        res.innerHTML = 'Impossível Contar!'
    }else if (stp == 0){
        window.alert('Passo Inválido! considerando passo 1')
        stp = 1
    }
     if(end < sta){
        //Contagem Regressiva
        for(let c = sta; c>= end; c-=stp){
            resposta += `${c} \u{1F449}`
        }
    }else {
        //Contagem Progressiva
        for (let c = sta; c <= end; c+=stp){
            resposta += `${c} \u{1F449} `
        }
    }
    res.innerHTML= `${resposta} \u{1F3C1}`
}