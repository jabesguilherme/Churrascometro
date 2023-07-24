// Carne - 400 gr por pessoa + de 6 horas passa a ser 650 gr por pessoa
// Cerveja - 1200 ml por pessoa + 6 horas passa a ser - 2000 ml por pessoa
// Refrigerante/agua - 1000 ml por pessoa +  6 horas passa a ser - 1500ml por pessoa

// crianças valem por 0,5 + 6 horas passa a ser - 750 ml por criança


let inputAdultos = document.getElementById("adultos");
let inputCrianca = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCrianca.value;
    let duracao = inputDuracao.value;
    
    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao)/2 * criancas);

    resultado.innerHTML = `<h3 class="result-info">Você irá precisar de:</h3>`
    
    resultado.innerHTML = `
    <div class="result-block">
        <img src="./img/carne.png"></img>
        <p>${qtdTotalCarne/1000} Kg de Carne</p>
        </div>
        `

    resultado.innerHTML += `
    <div class="result-block">
        <img src="./img/cerveja.png"></img>
        <p>${Math.ceil(qtdTotalCerveja/355)} Latas de Cerveja</p>
        </div>
        `
    resultado.innerHTML += `
    <div class="result-block">
        <img src="./img/refrigerante.png"></img>
    <p>${Math.ceil(qtdTotalBebida/2000)} Garrafas 2l de Bebidas</p>
    </div>
    `
}


function carnePP(duracao){
    if(duracao >= 6){
        return  650;
    }else{
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return  2000;
    }else{
        return 1200;
    }
}

function bebidaPP(duracao){
    if(duracao >= 6){
        return  1500;
    }else{
        return 1000;
    }
}

/*======================== typed js ===========================*/
const typed = new Typed('.spanT',{
    strings:["CARNE","CERVEJA","REFRIGERANTE"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
})


"CARNE","CERVEJA","REFRIGERANTE"