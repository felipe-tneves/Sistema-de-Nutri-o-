//seleciona e muda o texto do site
var titulo = document.querySelector(".titulo");
titulo.textContent = "Tadeu Nutricionista";

//calculando o IMC, trazendo as informações dos pacientes
var pacientes = document.querySelectorAll(".paciente");

//loop for para calcular e pegar a informações de todos os pacientes 
for(var i =0; i< pacientes.length; i++)
{
    //declarando a variavel paciente no indice for 
    var paciente = pacientes[i];

    //pegando peso
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    //pegando a altura 
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    //calculando o IMC 
    var tdImc = paciente.querySelector(".info-imc");
    
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    //validação
    if (!pesoEhValido) {
        console.log("Peso inválido!");
        alert("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";
        //paciente.style.color = "red";
        paciente.classList.add("paciente-invalido");
    }
    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alert("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida!";
        //paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("paciente-invalido");
    }
    
    if (pesoEhValido && alturaEhValida) {
    
        var imc =calculaImc(peso,altura);
        //colocando o ressultado na tabela 
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    //toFixed determina a quantidade de casas descimais 
    return imc.toFixed(2);
}

function validaPeso(peso) {
    if(peso >= 0 && peso< 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura) {
    if (altura >=0 && altura <= 3.0) {
        return true;
    }else{
        return false;
    }
    
}