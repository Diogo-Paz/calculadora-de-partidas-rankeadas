
let total = calculoMediaRanqueada(83,1)

// mensagem requisitada abaixo
console.log("O herói tem o saldo de : "+ total+" vitórias e está no nível: "+ resultadoPatente(total))

//calcular media de vitorias e derrotas, --> vitorias - derrotas

function calculoMediaRanqueada(vitorias = 0, derrotas = 0){

    let media = vitorias - derrotas
    return media


}

//função que calcula qual sua patente
function resultadoPatente(total){

    if(total <= 10 ) {
    
        patenteAtual = "Ferro"

    return patenteAtual
    }else if (total >= 11 && total <= 20) {
       
       patenteAtual = "Bronze"
        return patenteAtual
    }else if(total >= 21 && total <= 50){
    
        patenteAtual = "Prata"
        return patenteAtual
    
    }else if (total >= 51 && total <= 80) {
    
       patenteAtual = "Ouro"
       return patenteAtual
        
    }else if (total >= 81 && total <= 90) {
    
        patenteAtual = "Diamante"
        return patenteAtual
    
    }else if (total >= 91 && total <= 100) {
    
        patenteAtual = "Lendário"
       return patenteAtual
        
    }else if (total >= 101) {
    
        patenteAtual = "Imortal"
       return patenteAtual
        
    }else{
    
        console.log("final")
    }



}
