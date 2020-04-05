//adicionando paciente 
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    //evita o comportamento padrão do html de atualizar quando for clicado 
    event.preventDefault();

    //pegando os dados do form
    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);
    var erros = validaPaciente(paciente);
 
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        //alert("Paciente Inválido");
        //sai imediatamente da função
        return;
    }
   
    adicionaPacienteNaTabela(paciente);
   
    //limpando o formulario
    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
     //controla o html interno de um elementos
    mensagensErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);

     //colocando o tr dentro do conjunto de tabela de pacientes 
     var tabela = document.querySelector("#tabela-pacientes");

     tabela.appendChild(pacienteTr);


}

//objeto representa coisas que tem caracteristicas comuns 
//função nomiada 
function obtemPacienteDoFormulario(form) {

    //criando um objeto e passando suas propriedades(caracteristicas)
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
    }
    return paciente;
}

function montaTr(paciente) {

    //criando um elemento no html 
    //criando a tabela de pacientes 
    var pacienteTr = document.createElement("tr");
    //adiciona a classe paciente na tr
    pacienteTr.classList.add("paciente");

    //cria um elemento no html
    // var nomeTd = document.createElement("td");
    // nomeTd.classList.add("info-nome");
    // nomeTd.textContent = paciente.nome;

    // var pesoTd = montaTd(paciente.peso, "info-peso");
    //adicionando como filho cada uma das td´s dentro da tr
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));   
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente)
{
    var erros = [];
    if (paciente.nome.length == 0) {
        erros.push("O campo nome não pode ser branco");
    }
    if (!validaPeso(paciente.peso))  {
        erros.push("Peso é inválido!");
    }
   
    if (!validaAltura(paciente.altura)){ 
        erros.push("Altura é inválida!");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }
    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }
    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser branco");
    }
    return erros;
}

function exibeMensagensDeErro(erros){
    var mensagensErro = document.querySelector("#mensagens-erro");
   
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        mensagensErro.appendChild(li);
    });
}

