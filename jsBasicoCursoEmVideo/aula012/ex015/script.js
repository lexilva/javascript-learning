function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = window.document.getElementById('txtano')
   var res = window.document.querySelector('div#res')
   if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] verifique os dados e tente novamente!!')
   }else{
         var fsex = window.document.getElementsByName('radsex')
         var idade = ano - Number(fano.value)
         var genero = ''
         var img = document.createElement('img')
         img.setAttribute('id','foto')
         if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <10){
               //Criança
               img.setAttribute('src','bebehomem.png')
            }else if( idade < 21){
               //Jovem
               img.setAttribute('src', 'jovemhomem.png')
            }else if(idade < 50){
               //Adulto
               img.setAttribute('src','adultohomem.png')
            }else{
               //Idoso
               img.setAttribute('src','idosohomem.png')
            }
         }else if(fsex[1].checked){
            genero = 'Mulher'
               if(idade >=0 && idade <10){
                  //Criança
                  img.setAttribute('src','bebemulher.png')
               }else if( idade < 21){
                  //Jovem
                  img.setAttribute('src','jovemmulher.png')
               }else if(idade < 50){
                  //Adulto
                  img.setAttribute('src','adultomulher.png')
               }else{
                  //Idoso
                  img.setAttribute('src','idosomulher.png')
               }
         }
         res.style.textAlign = 'center'
         res.innerHTML = `Detectamos ${genero} com ${idade} anos`
         res.appendChild(img)
   }
}