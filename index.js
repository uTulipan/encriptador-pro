function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("foto");

    let textoCifrado = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "ios")
                        .replace(/a/gi, "fai")
                        .replace(/o/gi, "loker")
                        .replace(/u/gi, "rufa")

    if (document.getElementById("texto").value.length !=0) {
        document.getElementById("texto").value = textoCifrado;
        document.getElementById("titulo-mensaje").textContent = "Texto encriptado correctamente";
        document.getElementById("parrafo").textContent = "";
        document.getElementById("foto").src = "./img/ticket.png";
    }else{
        document.getElementById("foto").src = "./img/encriptado.png";
        alert ("Ingresa un texto");
    }
}

function desencriptar(){
    let texto = document.getElementById("texto").value;

    let textoCifrado = texto
        .replace(/enter/gi, "e")
          .replace(/ios/gi, "i")
          .replace(/fai/gi, "a")
         .replace(/loker/gi, "o")
         .replace(/rufa/gi, "u")

         if (texto.length !=0){
            document.getElementById("texto").value = textoCifrado;
        document.getElementById("titulo-mensaje").textContent = "Texto desencriptado correctamente";
        document.getElementById("parrafo").textContent = "";
        document.getElementById("foto").src = "./img/candado.png";
         } else {
            document.getElementById("foto").src = "./img/encriptado.png";
        alert ("Ingresa un texto");
         }
}