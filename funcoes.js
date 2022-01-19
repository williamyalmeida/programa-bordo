let nave = prompt(`Digite o nome da nave:`);

let velocidade = 0
let opcaoEscolhida



function mostrarMenu() {
    let opcao
    while (opcao != '1' && opcao != '2' && opcao != '3' & opcao != '4') {
        opcao = prompt(`\n1 - Acelerar a nave em 5km/s\n2 - Desacelerar em 5km/s\n3 - Imprimir dados de bordo\n4 - Sair do programa`)
    }

    return opcao
}


// mostrarMenu()

function acelerarVelocidade(velocidade) {
    let novaVelocidade = velocidade + 5

    return novaVelocidade
}


function desacelerarVelocidade(velocidade) {
    let novaVelocidade = velocidade - 5
    if(novaVelocidade < 0){
        velocidade = 0
    }

    return novaVelocidade
}

function imprimirDadosDeBordo(nave,velocidade) {
    alert(`nave: ${nave} velocidade:${velocidade}km/s`)
}


do{
    opcaoEscolhida = mostrarMenu()

    switch (opcaoEscolhida) {
        case '1':
            velocidade = acelerarVelocidade(velocidade)
            break;

        case '2':
            velocidade = desacelerarVelocidade(velocidade)
            break;

        case'3':
            imprimirDadosDeBordo(nave,velocidade)
            break;

        default:
            alert(`Encerrando!!`)
            break;
    }

}while(opcaoEscolhida != '4')