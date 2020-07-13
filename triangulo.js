function dibTriangulo(){
   let filas=document.getElementsByClassName("inp-filas")[0].value;
   let triangulo=new Array();
   for(let i=0;i<filas;i++){
        triangulo[i]=Asteriscos(filas,i);
   }
   for(let i=0;i<triangulo.length;i++){
        console.log(' '+triangulo[(triangulo.length-1)-i]);
   }
}
function Asteriscos(filas,i){
    let asteriosco=" ";
    for(j=0;j<((2*(filas-i))-1);j++){
        
        asteriosco+="* ";
    }
    return asteriosco;
}