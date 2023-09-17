var jogador1 = 1;
var jogador2 = 0;
var placar ;
var numero_jogador = 0


jogador1 > -1 && jogador2 > -1 ? console.log("Os jogadores sao válidos"):console.log("Os jogadores sao inválidos");

/*if(jogador1 > 0){
    console.log("1o jogador marcou ponto.")
}

if(jogador1 = 1){
    
    if(jogador1 > 0){
        console.log("1o jogador marcou ponto.")
    }else{
        console.log("ninguem marcou.")
    }

}else{
    console.log("jogador inválido.")
}*/

if (jogador1 > 0 && jogador2 == 0){
    console.log("1o jogador marcou ponto.")
    placar = jogador1 > jogador2;
}
else if( jogador2 > 0 && jogador1 == 0){
    console.log("2o jogador marcou ponto.")
    placar = jogador2 > jogador1;
}
else{
    console.log("ninguem marcou.")
}

switch(placar){
    case placar = jogador1 > jogador2:
        console.log("1o jogador venceu")
        break;
    case placar = jogador1 < jogador2:
        console.log("2o jogador venceu")
        break;
        default:
            console.log("ninguem marcou.")
}



let premio_da_partida = ['100.000', '1,00']
let premio = {jogadorVencedor: '100.000', jogadorPerdedor: '1,00'}

for (let x = 0; x < premio_da_partida.length; x++){
    console.log(x)
}

for (y in premio_da_partida){
    console.log(y)
}

for( z of premio_da_partida){
    console.log(z)
}


while( numero_jogador < 2){
    numero_jogador++;
    console.log(numero_jogador)
}

do{
    numero_jogador++;
    console.log(numero_jogador)
}while( numero_jogador < 2)


