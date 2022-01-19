

let nave = prompt(`Digite o nome da nave:`);

let velocidade = 0

let opcaoEscolhida 


function abrirMenu() {

    let opcao  = prompt(`
    O que deseja fazer?
    1 - Acelerar a nave em 5km/s
    2 - Desacelerar em 5km/s
    3 - Imprimir dados de bordo
    4 - Sair do programa
    `)

    return opcao

}

function acelerarVelocidade(velocidade) {
    let novaVelocidade = velocidade + 5

    return novaVelocidade
}

function desacelerarVelocidade(velocidade) {
    let novaVelocidade = velocidade - 5

    if(novaVelocidade <0){
        novaVelocidade = 0
    }

    return novaVelocidade
}

function imprimirDados(nave,velocidade) {
     alert(`nave: ${nave} \nvelocidade: ${velocidade} km/s`)
}


// console.log(abrirMenu())
while (opcaoEscolhida !='4') {
    // console.log(abrirMenu())
    opcaoEscolhida = abrirMenu()

    switch (opcaoEscolhida) {
        case '1':
            velocidade = acelerarVelocidade(velocidade)
            break;
        case'2':
            velocidade = desacelerarVelocidade(velocidade)    
            break;
        case '3':
            imprimirDados(nave,velocidade) 
            break   
        case '4':
            alert(`Encerrando o programa!`)
            break;
        default:
            alert(`Tente novamente!`)
            break;
    }
    // console.log(abrirMenu())
}




