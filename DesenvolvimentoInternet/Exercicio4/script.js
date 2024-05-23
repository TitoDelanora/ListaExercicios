let ipTexto = document.querySelector("#ipNumero");
let ipTexto2 = document.querySelector("#ipNumero2");
let ipTexto3 = document.querySelector ("#ipNumero3");
let Resultado = document.querySelector("#Resultado1");
let Calcular = document.querySelector("#btResultadoUM");

function calcularMediaA(){
    let num1 = Number(ipTexto.value);
    let num2 = Number(ipTexto2.value);
    let num3 = Number(ipTexto3.value);
    let soma = (num1 + num2 + num3) /3 ;
    Resultado.textContent = String(soma)
}
Calcular.onclick=function(){
    calcularMediaA()
}