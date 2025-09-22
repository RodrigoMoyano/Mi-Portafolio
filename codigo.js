/*Para usar JS debemos escribir entre estas lineas, le podemos asignar id a las lineas que querramos llamar o guardar su valor en variables para asi manipularlos*/
       function enviar(){//Para asociar la funcion saludar a un boton debo usar el evento onclick seguido del nombre de la funcion en la linea del boton
           var user =document.getElementById("txtUser").value;//De esta manera guardamos en nuestra variable de js el valor del campo con ID: txtUser
           var pass =document.getElementById("txtPass").value;
           alert("El mensaje ha sido enviado!" + user);
           console.log("El mensaje se envio correctamente" + comenta);
       }

       function sumar(){
            var n1 = parseInt(document.getElementById("txtUser").value);//De esta manera guardamos en nuestra variable de js el valor del campo con ID: txtUser
            var n2 = parseInt(document.getElementById("txtPass").value);
            alert("La suma es: " + (n1 + n2));
       }
