//var pacientes = document.querySelectorAll(".paciente");
var table = document.querySelector("table");
//Event Bubbling e a interferência de eventos é um tipo de propagação de eventos em que o evento é acionado primeiro no 
//elemento de destino mais interno e, em seguida, acionado sucessivamente nos ancestrais do elemento de destino na mesma 
//hierarquia de aninhamento até atingir o elemento DOM ou o objeto de documento mais externo
//Delegando a função de remoção para o pai usando Event Bubbling 
table.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fedeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
});



//event.target - evento que foi clickado
//parentNode - pai de qualquer modulo do html 


// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         //this palavra reservada, quem acionou o evento, quem o evento esta atrelado, this palavra de contexto
//         this.remove();
//     });
// });