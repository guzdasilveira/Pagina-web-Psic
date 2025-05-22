(function () {
    emailjs.init("YOUR_USER_ID"); // Reemplaza con tu User ID de EmailJS
  })();
  
  document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
  
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        nombre: this.nombre.value,
        email: this.email.value,
        mensaje: this.mensaje.value,
      })
      .then(
        () => {
          alert("¡Mensaje enviado! Carla se contactará pronto.");
          this.reset();
        },
        (error) => {
          alert("Hubo un error al enviar el mensaje. Intentá de nuevo.");
          console.error("Error de EmailJS:", error);
        }
      );
  });
  