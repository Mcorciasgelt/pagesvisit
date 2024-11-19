const btn = document.getElementById("btnReestablecer")
const txtVisitas = document.getElementById("contadorVisitas")

document.addEventListener("DOMContentLoaded", () => {
    let contador = parseInt(localStorage.getItem("visitas")) || 0

    sumarVisita()

    function sumarVisita() {
        contador += 1
        txtVisitas.innerText = contador
        localStorage.setItem("visitas", contador)
    }

    btn.addEventListener("click", () => {
        contador = 0
        localStorage.clear()
        txtVisitas.innerText = contador
    })
})
