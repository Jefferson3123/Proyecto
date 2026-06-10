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

                console.log("Bienvenido " + datos.usuario);

                localStorage.setItem(
                    "usuario",
                    datos.usuario
                );

                localStorage.setItem(
                    "rol",
                    datos.rol
                );

                localStorage.setItem(
                    "id_usuario",
                    datos.id_usuario
                );

                localStorage.setItem(
                    "id_oficina",
                    datos.id_oficina
                );

                window.location.href = "index.html";

            } else {

                console.log(datos.message);

            }

        } catch (error) {

            console.error(error);

            console.error("Error al conectar con el servidor");

        }

    });

});
