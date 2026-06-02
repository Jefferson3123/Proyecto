console.log("script cargado");

document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("container-login");

    if (!formulario) {
        console.log("Esta página no tiene login");
        return;
    }

    console.log("Formulario encontrado");

    formulario.addEventListener("submit", async (e) => {

        e.preventDefault();

        const usuario = document.getElementById("Usuario").value.trim();
        const password = document.getElementById("Contraseña").value.trim();

        try {

            const respuesta = await fetch(
                "http://localhost:3000/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        usuario,
                        password
                    })
                }
            );

            const datos = await respuesta.json();

            console.log(datos);

            if (datos.success) {

                alert("Bienvenido " + datos.usuario);

                window.location.href = "index.html";

            } else {

                alert(datos.message);

            }

        } catch (error) {

            console.error(error);

            alert("Error al conectar con el servidor");

        }

    });

});