console.log("dashboard.js cargado");

const usuario = localStorage.getItem("usuario");

if (!usuario) {

    window.location.href = "login.html";

}

document.addEventListener("DOMContentLoaded", () => {

    const usuarioConectado =
        document.getElementById("usuarioConectado");

    const usuarioFooter =
        document.getElementById("usuarioFooter");

    if (usuarioConectado) {

        usuarioConectado.textContent = usuario;

    }

    if (usuarioFooter) {

        usuarioFooter.textContent = usuario;

    }

    const rol = localStorage.getItem("rol");

    const btnPrestamos =
        document.getElementById("btnPrestamos");

    const btnUsuarios =
        document.getElementById("btnUsuarios");

    const btnAuditoria =
        document.getElementById("btnAuditoria");

    if (rol === "4") {

        // TRÁMITES


        btnUsuarios.style.display = "none";
        btnAuditoria.style.display = "none";

    }

    if (rol === "3") {

        // GESTOR

        btnAuditoria.style.display = "none";

    }

    if (rol === "4") {

        // ADMINISTRADOR
        // Ve todo

    }

});

function cerrarSesion() {

    localStorage.removeItem("usuario");
    localStorage.removeItem("rol");

    window.location.href = "login.html";

}