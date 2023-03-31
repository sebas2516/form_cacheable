function guardar (){
    db.collection("Formulario1").add({
        Identificacion: document.getElementById("id").value,
        Nombres: document.getElementById("name").value,
        Apellidos: document.getElementById("lastName").value,
        Correo: document.getElementById("email").value,
        Contraseña: document.getElementById("password").value,
        Firma: document.getElementById("firma-1").value
    })
    .then((docRef) => {
        alert("Exito")
    })
    .catch((error) => {
        alert("Error")
    });
}