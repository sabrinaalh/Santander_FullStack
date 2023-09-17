let array = ['string', 2,  true]
console.log(array)

let array2 = ['string', 2,  true, ['array3'], array, array[0]]
console.log(array2)
//console.log(array.forEach(function(item,index){console.log(item +' '+ index)}))
console.log(array.push("novo item"))//Adiciona no final
console.log(array.pop())//Remove o último
console.log(array.shift())//remove item no inicio
console.log(array.unshift("item na frente"))//Adiciona no inicio
console.log(array.indexOf(1))//Retorna o índice (posiçao)
console.log(array.splice(0,2))//remove ou substitui
console.log(array.slice(0, 3))//Retorna uma parte

function ser_pintar () {
    console.log("Ele pinta muito!")
}

//OBJETO: construçao
var pintura = {
    nome: 'noite estrelada',
    pintor: 'Van Gogh',
    lixo: array,
    funcao: ser_pintar()
}
console.log(pintura.funcao)

//Desestruturacao
var arrayInterno = pintura.lixo
//ou
var {nome, pintor,lixo,funcao} = pintura
console.log(nome, pintor,lixo,funcao)