let amigos = [];
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();
    if (nombreAmigo === '') {
        alert("Por favor, inserte un nombre.");
        return;
    }
    amigos.push(nombreAmigo);
    document.getElementById('amigo').value = '';
    actualizarListaAmigos();
}
function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        li.classList.add('list-item');
        listaAmigos.appendChild(li);
    });
}
function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    if (amigos.length === 0) {
        resultado.innerHTML = "<li>No hay amigos para sortear.</li>";
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];
    resultado.innerHTML = `<li class="winner">El amigo seleccionado es: <strong>${amigoSeleccionado}</strong></li>`;
}