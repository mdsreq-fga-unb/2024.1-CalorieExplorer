const formulario = document.querySelector("form");
const inome = document.querySelector(".nome");
const iemail = document.querySelector(".email");
const itelefone = document.querySelector(".telefone");
const isenha = document.querySelector(".senha");
const botao = document.querySelector("Button");

function cadastrar(){

    fetch("http://localhost:8080/cadastro",
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method : "POST",
            body: JSON.Stringify({
                nome: inome.value,
                email: iemail.value,
                senha: isenha.value,
                telefone: itelefone.value
            })
        })

    .then(function (res) {conseole.log(res) })
    .catch(function (res) {console.lgo(res) })
}

function limpar (){
    inome.value = "",
    iemail.value = "",
    isenha.value = "",
    itelefone.value = ""

}

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    cadastrar();
    limpar();
});