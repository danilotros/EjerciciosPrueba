    let respuesta="";
function Serie(){
    let valor=document.getElementsByClassName("inp-fibonacci")[0].value;
    for(let i=0;i<valor;i++){
        respuesta=respuesta+" "+Fibonacci(i);
    }
    alert(respuesta);

}
function Fibonacci(valor){
    if(valor>1){
        return Fibonacci(valor-1)+Fibonacci(valor-2);
    }
    if(valor==1){
        return 1;
    }
    if(valor==0){
        return 0;
    }
    else{
        console.log("Debes ingresar valor positivo");
        return -1;
    }
}