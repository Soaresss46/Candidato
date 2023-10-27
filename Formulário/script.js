class Candidato {
    constructor(nome, idade, profissao, telefone, endereco, cidade) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
        this.telefone = telefone;
        this.endereco = endereco;
        this.cidade = cidade;
    }
}

function mostraDados() {
    const formulario = document.querySelector("#formulario").children;
    let pessoa = new Candidato();

    for (let i = 0; i < formulario.length; i++) {
        let elemento = formulario.item(i);
        pessoa[elemento.id] = elemento.value;
    }

    document.querySelector("#iddados").innerHTML = `Candidato ${pessoa.nome} tem ${pessoa.idade} anos, tem a profissão ${pessoa.profissao}, número de telefone ${pessoa.telefone}, endereço ${pessoa.endereco} na cidade ${pessoa.cidade}`;
}

document.getElementById("form").addEventListener("submit", (e) => {
    mostraDados();
    e.preventDefault();
});
