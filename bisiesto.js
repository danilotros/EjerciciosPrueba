function DeterBisiesto(){
let año=document.getElementsByClassName("inp-fecha")[0].value;
if((año%4==0 && año%100!=0)||(año%400==0&&año%100==0)){
    alert("Es un año bisiesto");
}else{
    alert("No es un año bisiesto");
}
}