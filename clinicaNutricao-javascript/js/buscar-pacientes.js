//consulmindo uma api com javascript 

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");

    //objeto do javascript responsavel por fazer requisições 
    var xhr = new XMLHttpRequest();

    //abre a connexão com o endereço, e fazendo a requisição 
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    var erroAjax = document.querySelector("#erro-ajax");
    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
    
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log( xhr.status);
            console.log( xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }

    });

    //pega e requisição e envia 
    xhr.send();

});

//usando tecnica ajax que faz uma requisição no javascript de forma assincrôna 