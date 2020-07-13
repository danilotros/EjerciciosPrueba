window.addEventListener('load',()=>{
    document.getElementById('btn-arch').addEventListener('change',abrirArchivo);
    });
    function abrirArchivo(evento){
        let archivo=evento.target.files[0];
        if(archivo){
            let lector=new FileReader();
            lector.onload=function(e){
                let contenido=e.target.result;
                escribirArchivo(contenido);
            }
            lector.readAsText(archivo);
        }else{
            alert("No se ha seleccionado un archivo");
        }
    }
    function escribirArchivo(contenido){
        contenidos=contenido.replace(/\n|\r/g," ");
        contenidos=contenidos.split(" ").sort();
        linea='';
        for(contenido of contenidos){
            linea=linea+" "+contenido;
        }
        let blob = new Blob([linea], {type: "text/plain;charset=utf-8"});
        saveAs(blob, document.getElementById("text-nomb").value);
    }  