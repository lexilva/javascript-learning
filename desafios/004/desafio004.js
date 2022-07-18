function calcular(){
    var produto = window.prompt('Que produto voce está comrpando?')
    var preco = Number(window.prompt(`Quanto custa ${produto} que você está comprando?`))
    var pagamento = Number(window.prompt(`Qual foi o valor que você deu para pagar ${produto}`))
    preco.toFixed(2)
    preco.toLocaleString('pt-Br',{style:'Currency', currency:'BRL'})
    var troco = pagamento - preco
    document.write(produto)
   /*var resultado = window.document.querySelector('div#res')
    resultado = `${preco}`
    window.alert(`Você comprou ${produto} que custou ${preco}.&nbsp Deu ${pagamento} em dinheiro e vai receber ${troco}.&nbsp Volte Sempre!`)*/
    window.alert(preco)

}