function tabuada(){
    let n = window.document.querySelector
    ("input#num").value 
    let tab = document.getElementById('stab')
    if (n == ''){
        window.alert(`você deve digitar algum número` )
    }else{
        let num = Number(n)
        tab.innerHTML = ''
        for (let i=1;i <=10;i++){
            //tabuad +=`${num}    x ${i}  =   ${num*i}<br>`
            let item = document.createElement('option')
            item.text = `${num}   x    ${i}   =   ${num*i}`
            tab.appendChild(item)
            tab.style.color = 'black'
            tab.style.background = 'lightgray'
        }
    }
    
}