function funcao(){
    console.log("Alguma mensagem...")
}


function quem_escreveu (nome){
   console.log(`Foi ${nome} quem escreveu :) `)
}



var detalhes = function funcaoDetalhes() {
    console.log("Sem detalhes.")
}

var erros = function(){
    console.log("Sem erros.")
}

funcao()
quem_escreveu("sabrina")

var usuario = prompt("Digite seu nome:")

alert(`Olá, tudo bem ${usuario}?`)