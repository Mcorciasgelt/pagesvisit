const btn = document.getElementById("btnReestablecer")
const txtVisitas = document.getElementById("contadorVisitas")
let contador = 
    localStorage.getItem("visitas") 
    ? parseInt(localStorage.getItem("visitas")) 
    : 0 

sumarVisita()

function sumarVisita() {
    contador += 1
    txtVisitas.innerText = contador
}

localStorage.setItem("visitas", contador)


console.log(localStorage);


btn.addEventListener("click", () => {
    localStorage.clear()
    console.log(localStorage);
    txtVisitas.innerText = 0
})
