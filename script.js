let pessoas = [];

let editandoIndex = null;

let dados = localStorage.getItem("pessoas");

if (dados) {
    pessoas = JSON.parse(dados);
}

atualizarLista();

function editar(index) {
    let pessoa = pessoas[index]

    document.getElementById("nome")
    document.getElementById("idade")

    editandoIndex = index;
}

function cadastrar() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;

    if (!nome || !idade) {
    alert("Preencha todos os campos!");
    return;
    
}

if (idade <= 0) {
    alert("Idade inválida!");
    return;
}
if (editandoIndex !== null) {
    pessoa[editandoIndex] = {nome, idade };
    editandoIndex = null;
}else {
    pessoas.push({ nome, idade });
}
    let pessoa = {
        nome: nome,
        idade: idade
    };

    localStorage.setItem("pessoas", JSON.stringify(pessoas));

    atualizarLista();
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
}

function atualizarLista() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    for (let i = 0; i < pessoas.length; i++) {
        let item = `
            <li>
                ${pessoas[i].nome} - ${pessoas[i].idade} anos
                <button onclick="editar(${i})">Editar</button>
                <button onclick="remover(${i})">Remover</button>
            </li>
        `;
        lista.innerHTML += item;
    }
}

function remover(index) {
    pessoas.splice(index, 1);
    localStorage.setItem("pessoas", JSON.stringify(pessoas));
    atualizarLista();
}
