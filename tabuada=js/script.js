function calcular(){
    let num = Number(document.getElementById("num").value)
    let res = document.getElementById("res")

    // variavel string que vai cocatena a resposta
    let res2 ="" 

    if(num == "" || num == isNaN(num)){
        alert("Insira um valor numerico")
    }else{
    
        for(cont=1;cont<=10;cont++){
        // variavel string que vai cocatena a resposta
        res2 = `${res2+num} x ${cont} = ${num*cont}<br>`

        res.innerHTML = res2
        } 
    }
}
document.getElementById("calcular").addEventListener('click', calcular)