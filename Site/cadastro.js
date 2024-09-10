const formulario = document.querySelector("#formulario");
const inome = document.querySelector(".nome");
const iemail = document.querySelector(".email");
const itelefone = document.querySelector(".telefone");
const isenha = document.querySelector(".senha");
const botao = document.querySelector("button");

function cadastrar() {
    fetch("http://localhost:8080/api/usuarios", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            nome: inome.value,
            email: iemail.value,
            senha: isenha.value,
            telefone: itelefone.value
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Usuário criado com sucesso:", data);
    })
    .catch(error => {
        console.error("Erro ao criar usuário:", error);
    });
}

function limpar() {
    inome.value = "";
    iemail.value = "";
    isenha.value = "";
    itelefone.value = "";
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    cadastrar();
    limpar();
});