document.querySelector("#joquempo").addEventListener("click", function () {
    document.querySelector(".rockPaperScissors").style.display = "block";
    document.querySelector("#teste").style.display = "none";
    document.querySelector("#escolhaJogo").style.display = "none";
    document.querySelector("#jokenpo").style.display = "block";
    document.querySelector("#joquempo").style.display = "none";
});
document.querySelector("#teste").addEventListener("click", function () {
    document.querySelector(".teste1").style.display = "block";
    document.querySelector("#joquempo").style.display = "none";
    document.querySelector("#escolhaJogo").style.display = "none"
    document.querySelector("#caçaPalavras").style.display = "block";
    document.querySelector("#teste").style.display = "none";
});
//* PEDRA PAPEL TESOURA *//
document.querySelector(".rockPaperScissors div").addEventListener("click", function(event) {
    if(event.target.tagName === "FIGCAPTION"){
        const options = document.querySelectorAll(".rockPaperScissors figure");
        let optionPlayer = event.path[1].cloneNode(true);
        let optionComputer = options[parseInt(Math.random() * (3))].cloneNode(true);
        Joquempo(optionPlayer, optionComputer);
    }
});
function Joquempo(optionPlayer, optionComputer){
    const result = document.querySelector(".rockPaperScissors .result");
    document.querySelector("main").style.overflow = "hidden";
    result.classList.add("display--flex");
    const textResult = result.querySelector("h3");
    textResult.textContent = ResultJoquempo(optionPlayer.className, optionComputer.className);
    result.querySelector("div").textContent = "";
    optionPlayer.querySelector("figcaption").textContent = "Você";
    optionComputer.querySelector("figcaption").textContent = "Eu";
    result.querySelector("section").scrollTop = 0;
    result.querySelector("div").appendChild(optionPlayer);
    result.querySelector("div").appendChild(optionComputer);
    result.querySelector("button").textContent = "Reset";
    result.querySelector("button").addEventListener("click", function () {
        result.classList.remove("display--flex");
        result.querySelector("div").textContent = "";
        document.querySelector("main").style.overflow = "auto";
    });
}
//*FUNCTION PARA VER QUEM GANHOU OU SE DEU EMPATE*//
function ResultJoquempo(optionPlayer, optionComputer){
    if(optionPlayer === optionComputer){
        return "Empate, tente de novo!!";
    }
    else{
        switch(optionPlayer){
            case "pedra":
                if(optionComputer === "papel"){
                    return "Você perdeu! Tente de novo!!";
                }
                else{
                    return "Você ganhou!!";
                }
            break;
            case "papel":
                if(optionComputer === "tesoura"){
                    return "Você perdeu! Tente de novo!!";
                }
                else{
                    return "Você ganhou!!";
                }
            break;
            case "tesoura":
                if(optionComputer === "pedra"){
                    return "Você perdeu! Tente de novo!!";
                }
                else{
                    return "Você ganhou!!"
                }
            break;
        }
    }
}

//CAÇA PALAVRA COMEÇA AQUI
function getRandomInt() { //função para gerar numeros randons para escolher as 3 palavras
    let min = 0;
    let  max = 19;
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomInt2() { //função para gerar numeros randons para escolher aonde as palavras vao ser alocadas
    let min = 0;
    let  max = 9;
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomInt3() { //função para gerar numeros randons para as letras que vao completar o caça palavra
    let min = 0;
    let  max = 25;
    return Math.floor(Math.random() * (max - min)) + min;
}


    let vinte = ["Ariel", "Mickey", "Cinderela", "Minnie", "Rapunzel", "Elsa", "Woody", "Pateta", "Cruella",
"Pooh", "Sininho", "Fera", "Merida", "Olaf", "Simba", "Pluto", "Mufasa", "Tarzan", "Nemo", "Dory"]

    let vinteLetras = []
    for(let i = 0; i < vinte.length; i++){ 
        vinteLetras.push(vinte[i].split(""))
    } //transforma as palavras em arrays separando letra por letra pra jogar no caçaTabela depous

    let numerosRandomsPalavras = []
    numerosRandomsPalavras.push(getRandomInt()) //numerosRandomsPalavras[0] = indice da 1 palavra aleatoria de "vinteLetras"
    numerosRandomsPalavras.push(getRandomInt()) //numerosRandomsPalavras[1] = indice da 2 palavra aleatoria de "vinteLetras"
    
    //checando se o 2 indice é igual ao primeiro e mudando caso seja
    if(numerosRandomsPalavras[1] === numerosRandomsPalavras[0] && numerosRandomsPalavras[1] < 19){
        numerosRandomsPalavras[1] = numerosRandomsPalavras[1] + 1
    } else if(numerosRandomsPalavras[1] === numerosRandomsPalavras[0] && numerosRandomsPalavras[1] === 19){
        numerosRandomsPalavras[1] = numerosRandomsPalavras[1] - 1
    }

    numerosRandomsPalavras.push(getRandomInt()) //numerosRandomsPalavras[2] = indice da 3 palavra aleatoria de "vinte"

    //checando se o 3 indice é igual ao 1 ou 2 e mudando caso seja
    if(numerosRandomsPalavras[2] === numerosRandomsPalavras[1] && numerosRandomsPalavras[0] > numerosRandomsPalavras[1] && numerosRandomsPalavras[0] / 2 !== numerosRandomsPalavras[1] 
        && numerosRandomsPalavras[1] !== 0){
            numerosRandomsPalavras[2] = (numerosRandomsPalavras[0] - numerosRandomsPalavras[1])
    } else if(numerosRandomsPalavras[2] === numerosRandomsPalavras[1] && numerosRandomsPalavras[1] > numerosRandomsPalavras[0] && numerosRandomsPalavras[1] / 2 !== numerosRandomsPalavras[0] 
        && numerosRandomsPalavras[0] !== 0){
            numerosRandomsPalavras[2] = (numerosRandomsPalavras[1] - numerosRandomsPalavras[0])
    } else if(numerosRandomsPalavras[2] === numerosRandomsPalavras[1] && numerosRandomsPalavras[0] > numerosRandomsPalavras[1] && numerosRandomsPalavras[0] / 2 === numerosRandomsPalavras[1] 
        && numerosRandomsPalavras[1] !== 1){
            numerosRandomsPalavras[2] = ((numerosRandomsPalavras[0] - numerosRandomsPalavras[1]) + 1)
    } else if(numerosRandomsPalavras[2] === numerosRandomsPalavras[1] && numerosRandomsPalavras[1] > numerosRandomsPalavras[0] && numerosRandomsPalavras[1] / 2 === numerosRandomsPalavras[0] 
        && numerosRandomsPalavras[0] !== 1){
            numerosRandomsPalavras[2] = ((numerosRandomsPalavras[1] - numerosRandomsPalavras[0]) + 1)
    } else if(numerosRandomsPalavras[2] === numerosRandomsPalavras[1] && numerosRandomsPalavras[0] > numerosRandomsPalavras[1] && numerosRandomsPalavras[0] / 2 !== numerosRandomsPalavras[1] 
        && numerosRandomsPalavras[1] === 0 && numerosRandomsPalavras[0] === 1){
            numerosRandomsPalavras[2] = 2
    } else if(numerosRandomsPalavras[2] === numerosRandomsPalavras[1] && numerosRandomsPalavras[1] > numerosRandomsPalavras[0] && numerosRandomsPalavras[1] / 2 !== numerosRandomsPalavras[0] 
        && numerosRandomsPalavras[0] === 0 && numerosRandomsPalavras[1] === 1){
            numerosRandomsPalavras[2] = 2
    } else if(numerosRandomsPalavras[2] === numerosRandomsPalavras[1] && numerosRandomsPalavras[0] > numerosRandomsPalavras[1] && numerosRandomsPalavras[0] / 2 !== numerosRandomsPalavras[1] 
        && numerosRandomsPalavras[1] === 0 && numerosRandomsPalavras[0] !== 1){
            numerosRandomsPalavras[2] = (numerosRandomsPalavras[0] - 1)
    } else if(numerosRandomsPalavras[2] === numerosRandomsPalavras[1] && numerosRandomsPalavras[1] > numerosRandomsPalavras[0] && numerosRandomsPalavras[1] / 2 !== numerosRandomsPalavras[0] 
        && numerosRandomsPalavras[0] === 0 && numerosRandomsPalavras[1] !== 1){
            numerosRandomsPalavras[2] = (numerosRandomsPalavras[1] - 1)
    } else if(numerosRandomsPalavras[2] === numerosRandomsPalavras[1] && numerosRandomsPalavras[0] > numerosRandomsPalavras[1] && numerosRandomsPalavras[0] / 2 === numerosRandomsPalavras[1] 
        && numerosRandomsPalavras[1] === 1){
            numerosRandomsPalavras[2] = ((numerosRandomsPalavras[0] - numerosRandomsPalavras[1]) + 2)
    } else if(numerosRandomsPalavras[2] === numerosRandomsPalavras[1] && numerosRandomsPalavras[1] > numerosRandomsPalavras[0] && numerosRandomsPalavras[1] / 2 === numerosRandomsPalavras[0] 
        && numerosRandomsPalavras[0] === 1){
            numerosRandomsPalavras[2] = ((numerosRandomsPalavras[1] - numerosRandomsPalavras[0]) + 2)
    }

    if(numerosRandomsPalavras[2] === numerosRandomsPalavras[0] && numerosRandomsPalavras[0] > numerosRandomsPalavras[1] && numerosRandomsPalavras[0] / 2 !== numerosRandomsPalavras[1] 
        && numerosRandomsPalavras[1] !== 0){
            numerosRandomsPalavras[2] = (numerosRandomsPalavras[0] - numerosRandomsPalavras[1])
    } else if(numerosRandomsPalavras[2] === numerosRandomsPalavras[0] && numerosRandomsPalavras[1] > numerosRandomsPalavras[0] && numerosRandomsPalavras[1] / 2 !== numerosRandomsPalavras[0] 
        && numerosRandomsPalavras[0] !== 0){
            numerosRandomsPalavras[2] = (numerosRandomsPalavras[1] - numerosRandomsPalavras[0])
    } else if(numerosRandomsPalavras[2] === numerosRandomsPalavras[0] && numerosRandomsPalavras[0] > numerosRandomsPalavras[1] && numerosRandomsPalavras[0] / 2 === numerosRandomsPalavras[1] 
        && numerosRandomsPalavras[1] !== 1){
            numerosRandomsPalavras[2] = ((numerosRandomsPalavras[0] - numerosRandomsPalavras[1]) + 1)
    } else if(numerosRandomsPalavras[2] === numerosRandomsPalavras[0] && numerosRandomsPalavras[1] > numerosRandomsPalavras[0] && numerosRandomsPalavras[1] / 2 === numerosRandomsPalavras[0] 
        && numerosRandomsPalavras[0] !== 1){
            numerosRandomsPalavras[2] = ((numerosRandomsPalavras[1] - numerosRandomsPalavras[0]) + 1)
    } else if(numerosRandomsPalavras[2] === numerosRandomsPalavras[0] && numerosRandomsPalavras[0] > numerosRandomsPalavras[1] && numerosRandomsPalavras[0] / 2 !== numerosRandomsPalavras[1] 
        && numerosRandomsPalavras[1] === 0 && numerosRandomsPalavras[0] === 1){
            numerosRandomsPalavras[2] = 2
    } else if(numerosRandomsPalavras[2] === numerosRandomsPalavras[0] && numerosRandomsPalavras[1] > numerosRandomsPalavras[0] && numerosRandomsPalavras[1] / 2 !== numerosRandomsPalavras[0] 
        && numerosRandomsPalavras[0] === 0 && numerosRandomsPalavras[1] === 1){
            numerosRandomsPalavras[2] = 2
    } else if(numerosRandomsPalavras[2] === numerosRandomsPalavras[0] && numerosRandomsPalavras[0] > numerosRandomsPalavras[1] && numerosRandomsPalavras[0] / 2 !== numerosRandomsPalavras[1] 
        && numerosRandomsPalavras[1] === 0 && numerosRandomsPalavras[0] !== 1){
            numerosRandomsPalavras[2] = (numerosRandomsPalavras[0] - 1)
    } else if(numerosRandomsPalavras[2] === numerosRandomsPalavras[0] && numerosRandomsPalavras[1] > numerosRandomsPalavras[0] && numerosRandomsPalavras[1] / 2 !== numerosRandomsPalavras[0] 
        && numerosRandomsPalavras[0] === 0 && numerosRandomsPalavras[1] !== 1){
            numerosRandomsPalavras[2] = (numerosRandomsPalavras[1] - 1)
    } else if(numerosRandomsPalavras[2] === numerosRandomsPalavras[0] && numerosRandomsPalavras[0] > numerosRandomsPalavras[1] && numerosRandomsPalavras[0] / 2 === numerosRandomsPalavras[1] 
        && numerosRandomsPalavras[1] === 1){
            numerosRandomsPalavras[2] = ((numerosRandomsPalavras[0] - numerosRandomsPalavras[1]) + 2)
    } else if(numerosRandomsPalavras[2] === numerosRandomsPalavras[0] && numerosRandomsPalavras[1] > numerosRandomsPalavras[0] && numerosRandomsPalavras[1] / 2 === numerosRandomsPalavras[0] 
        && numerosRandomsPalavras[0] === 1){
            numerosRandomsPalavras[2] = ((numerosRandomsPalavras[1] - numerosRandomsPalavras[0]) + 2)
    }

    console.log(numerosRandomsPalavras)
        
    let escolhidas = [] // aonde as 3 palavras aleatorias selecionadas vao ficar
    escolhidas.push(vinteLetras[numerosRandomsPalavras[0]])
    escolhidas.push(vinteLetras[numerosRandomsPalavras[1]])
    escolhidas.push(vinteLetras[numerosRandomsPalavras[2]])
    
    let numerosRandomsIndices = []
    numerosRandomsIndices.push(getRandomInt2()) //numerosRandomsIndices[0] = 1 linha
    numerosRandomsIndices.push(getRandomInt2()) //numerosRandomsIndices[1] = 1 coluna
    numerosRandomsIndices.push(getRandomInt2()) //numerosRandomsIndices[2] = 2 linha
    numerosRandomsIndices.push(getRandomInt2()) //numerosRandomsIndices[3] = 2 coluna
    numerosRandomsIndices.push(getRandomInt2()) //numerosRandomsIndices[4] = 3 linha
    numerosRandomsIndices.push(getRandomInt2()) //numerosRandomsIndices[5] = 3 coluna

    console.log(numerosRandomsIndices)
    console.log(escolhidas[0])
    console.log(escolhidas[1])
    console.log(escolhidas[2])
    
    // array bidimensional 10x10
    let caçaTabela = [["","","","","","","","","",""], ["","","","","","","","","",""], ["","","","","","","","","",""], 
    ["","","","","","","","","",""], ["","","","","","","","","",""], ["","","","","","","","","",""], ["","","","","","","","","",""], 
    ["","","","","","","","","",""], ["","","","","","","","","",""], ["","","","","","","","","",""]]


    //checando espaço dentro do caçaTabela pra alocar a primeira palavra
    if(numerosRandomsIndices[1] + escolhidas[0].length <= 10){
        for(let i = 0; i < escolhidas[0].length; i++){
            caçaTabela[numerosRandomsIndices[0]][numerosRandomsIndices[1] + i] = escolhidas[0][i]
        }
    } else if(numerosRandomsIndices[1] + escolhidas[0].length > 10 && numerosRandomsIndices[1] - 
        escolhidas[0].length >= 0){
        for(let i = 0; i < escolhidas[0].length; i++){
            caçaTabela[numerosRandomsIndices[0]][numerosRandomsIndices[1] - i] = escolhidas[0][i]
        }
    } else if(numerosRandomsIndices[1] + escolhidas[0].length > 10 && numerosRandomsIndices[1] - 
        escolhidas[0].length < 0 && numerosRandomsIndices[0] + escolhidas[0].length <= 10){
        for(let i = 0; i < escolhidas[0].length; i++){
            caçaTabela[numerosRandomsIndices[0] + i][numerosRandomsIndices[1]] = escolhidas[0][i]
        }
    } else if(numerosRandomsIndices[1] + escolhidas[0].length > 10 && numerosRandomsIndices[1] - 
        escolhidas[0].length < 0 && numerosRandomsIndices[0] + escolhidas[0].length > 10 && numerosRandomsIndices[0] - 
        escolhidas[0].length >= 0){
        for(let i = 0; i < escolhidas[0].length; i++){
            caçaTabela[numerosRandomsIndices[0] - i][numerosRandomsIndices[1]] = escolhidas[0][i]
        }
    } else{
        for(let i = 0; i < escolhidas[0].length; i++){
            caçaTabela[numerosRandomsIndices[0]][0 + i] = escolhidas[0][i]
        }
    }


    //checando espaço dentro do caçaTabela pra alocar a segunda palavra
    let vazio = ""
    let checagemDeCasas = []

    if(numerosRandomsIndices[3] + escolhidas[1].length <= 10){
        for(let i = 0; i < escolhidas[1].length; i++){
            checagemDeCasas.push(caçaTabela[numerosRandomsIndices[2]][numerosRandomsIndices[3] + i])
            for(let j = 0; j < checagemDeCasas.length; j++){
                vazio += checagemDeCasas[j]
            }
        }
        for(let i = 0; i < escolhidas[1].length; i++){
            if(vazio === ""){
                caçaTabela[numerosRandomsIndices[2]][numerosRandomsIndices[3] + i] = escolhidas[1][i]
            }
        }
    } else if(numerosRandomsIndices[3] + escolhidas[1].length <= 10 && (numerosRandomsIndices[3] + 1) - escolhidas[1].length >= 0 && vazio !== ""){
        vazio = ""
        checagemDeCasas = []
        for(let i = 0; i < escolhidas[1].length; i++){
            checagemDeCasas.push(caçaTabela[numerosRandomsIndices[2]][numerosRandomsIndices[3] - i])
            for(let j = 0; j < checagemDeCasas.length; j++){
                vazio += checagemDeCasas[j]
            }
        }
        for(let i = 0; i < escolhidas[1].length; i++){
            if(vazio === ""){
                caçaTabela[numerosRandomsIndices[2]][numerosRandomsIndices[3] - i] = escolhidas[1][i]
            }
        }
    } else if(numerosRandomsIndices[3] + escolhidas[1].length > 10 && (numerosRandomsIndices[3] + 1) - escolhidas[1].length >= 0){
        vazio = ""
        checagemDeCasas = []
        for(let i = 0; i < escolhidas[1].length; i++){
            checagemDeCasas.push(caçaTabela[numerosRandomsIndices[2]][numerosRandomsIndices[3] - i])
            for(let j = 0; j < checagemDeCasas.length; j++){
                vazio += checagemDeCasas[j]
            }
        }
        for(let i = 0; i < escolhidas[1].length; i++){
            if(vazio === ""){
                caçaTabela[numerosRandomsIndices[2]][numerosRandomsIndices[3] - i] = escolhidas[1][i]
            }
        }
    } else if(numerosRandomsIndices[3] + escolhidas[1].length <= 10 && (numerosRandomsIndices[3] + 1) - escolhidas[1].length >= 0 &&
        numerosRandomsIndices[2] + escolhidas[1].length <= 10 && vazio !== ""){
        vazio = ""
        checagemDeCasas = []
        for(let i = 0; i < escolhidas[1].length; i++){
            checagemDeCasas.push(caçaTabela[numerosRandomsIndices[2] + i][numerosRandomsIndices[3]])
            for(let j = 0; j < checagemDeCasas.length; j++){
                vazio += checagemDeCasas[j]
            }
        }
        for(let i = 0; i < escolhidas[1].length; i++){
            if(vazio === ""){
                caçaTabela[numerosRandomsIndices[2] + i][numerosRandomsIndices[3]] = escolhidas[1][i]
            }
        }
    } else if(numerosRandomsIndices[3] + escolhidas[1].length > 10 && (numerosRandomsIndices[3] + 1) - escolhidas[1].length < 0 &&
        numerosRandomsIndices[2] + escolhidas[1].length <= 10){
        vazio = ""
        checagemDeCasas = []
        for(let i = 0; i < escolhidas[1].length; i++){
            checagemDeCasas.push(caçaTabela[numerosRandomsIndices[2] + i][numerosRandomsIndices[3]])
            for(let j = 0; j < checagemDeCasas.length; j++){
                vazio += checagemDeCasas[j]
            }
        }
        for(let i = 0; i < escolhidas[1].length; i++){
            if(vazio === ""){
                caçaTabela[numerosRandomsIndices[2] + i][numerosRandomsIndices[3]] = escolhidas[1][i]
            }
        }
    } else if(numerosRandomsIndices[3] + escolhidas[1].length <= 10 && (numerosRandomsIndices[3] + 1) - escolhidas[1].length >= 0 &&
    numerosRandomsIndices[2] + escolhidas[1].length <= 10 && (numerosRandomsIndices[2] + 1) - escolhidas[1].length >= 0 && vazio !== ""){
        vazio = ""
        checagemDeCasas = []
        for(let i = 0; i < escolhidas[1].length; i++){
            checagemDeCasas.push(caçaTabela[numerosRandomsIndices[2] - i][numerosRandomsIndices[3]])
            for(let j = 0; j < checagemDeCasas.length; j++){
                vazio += checagemDeCasas[j]
            }
        }
        for(let i = 0; i < escolhidas[1].length; i++){
            if(vazio === ""){
                caçaTabela[numerosRandomsIndices[2] - i][numerosRandomsIndices[3]] = escolhidas[1][i]
            }
        }
    } else if(numerosRandomsIndices[3] + escolhidas[1].length > 10 && (numerosRandomsIndices[3] + 1) - escolhidas[1].length < 0 &&
    numerosRandomsIndices[2] + escolhidas[1].length > 10 && (numerosRandomsIndices[2] + 1) - escolhidas[1].length >= 0){
        vazio = ""
        checagemDeCasas = []
        for(let i = 0; i < escolhidas[1].length; i++){
            checagemDeCasas.push(caçaTabela[numerosRandomsIndices[2] - i][numerosRandomsIndices[3]])
            for(let j = 0; j < checagemDeCasas.length; j++){
                vazio += checagemDeCasas[j]
            }
        }
        for(let i = 0; i < escolhidas[1].length; i++){
            if(vazio === ""){
                caçaTabela[numerosRandomsIndices[2] - i][numerosRandomsIndices[3]] = escolhidas[1][i]
            }
        }
    } else if(vazio !== 0 || numerosRandomsIndices[3] + escolhidas[1].length > 10 && (numerosRandomsIndices[3] + 1) - escolhidas[1].length < 0 &&
    numerosRandomsIndices[2] + escolhidas[1].length > 10 && (numerosRandomsIndices[2] + 1) - escolhidas[1].length >= 0){
        vazio = ""
        checagemDeCasas = []
        for(let i = 0; i < escolhidas[1].length; i++){
            checagemDeCasas.push(caçaTabela[numerosRandomsIndices[2]][0 + i])
            for(let j = 0; j < checagemDeCasas.length; j++){
                vazio += checagemDeCasas[j]
            }
        }
        for(let i = 0; i < escolhidas[1].length; i++){
            if(vazio === ""){
                caçaTabela[numerosRandomsIndices[2]][0 + i] = escolhidas[1][i]
            }
        }
    }   

    console.log(vazio)

    if(vazio !== ""){
        vazio = ""
        checagemDeCasas = []
        for(let i = 0; i < escolhidas[1].length; i++){
            checagemDeCasas.push(caçaTabela[9 - i][8 - i])
            for(let j = 0; j < checagemDeCasas.length; j++){
                vazio += checagemDeCasas[j]
            }
        }
        for(let i = 0; i < escolhidas[1].length; i++){
            if(vazio === ""){
                caçaTabela[9 - i][8 - i] = escolhidas[1][i]
            }
        }
    } 
    if(vazio !== ""){
        vazio = ""
        checagemDeCasas = []
        for(let i = 0; i < escolhidas[1].length; i++){
            checagemDeCasas.push(caçaTabela[9 - i][1 + i])
            for(let j = 0; j < checagemDeCasas.length; j++){
                vazio += checagemDeCasas[j]
            }
        }
        for(let i = 0; i < escolhidas[1].length; i++){
            if(vazio === ""){
                caçaTabela[9 - i][1 + i] = escolhidas[1][i]
            }
        }
    } 
    if(vazio !== ""){
        vazio = ""
        checagemDeCasas = []
        for(let i = 0; i < escolhidas[1].length; i++){
            checagemDeCasas.push(caçaTabela[0 + i][1 + i])
            for(let j = 0; j < checagemDeCasas.length; j++){
                vazio += checagemDeCasas[j]
            }
        }
        for(let i = 0; i < escolhidas[1].length; i++){
            if(vazio === ""){
                caçaTabela[0 + i][1 + i] = escolhidas[1][i]
            }
        }
    } 
    if(vazio !== ""){
        vazio = ""
        checagemDeCasas = []
        for(let i = 0; i < escolhidas[1].length; i++){
            checagemDeCasas.push(caçaTabela[0 + i][8 - i])
            for(let j = 0; j < checagemDeCasas.length; j++){
                vazio += checagemDeCasas[j]
            }
        }
        for(let i = 0; i < escolhidas[1].length; i++){
            if(vazio === ""){
                caçaTabela[0 + i][8 - i] = escolhidas[1][i]
            }
        }
    } 
    if(vazio !== ""){
        vazio = ""
        checagemDeCasas = []
        for(let i = 0; i < escolhidas[1].length; i++){
            checagemDeCasas.push(caçaTabela[9 - i][0])
            for(let j = 0; j < checagemDeCasas.length; j++){
                vazio += checagemDeCasas[j]
            }
        }
        for(let i = 0; i < escolhidas[1].length; i++){
            if(vazio === ""){
                caçaTabela[9 - i][0] = escolhidas[1][i]
            }
        }
    }
    if(vazio !== ""){
        vazio = ""
        checagemDeCasas = []
        for(let i = 0; i < escolhidas[1].length; i++){
            checagemDeCasas.push(caçaTabela[9][9 - i])
            for(let j = 0; j < checagemDeCasas.length; j++){
                vazio += checagemDeCasas[j]
            }
        }
        for(let i = 0; i < escolhidas[1].length; i++){
            if(vazio === ""){
                caçaTabela[9][9 - i] = escolhidas[1][i]
            }
        }
    }
    if(vazio !== ""){
        vazio = ""
        checagemDeCasas = []
        for(let i = 0; i < escolhidas[1].length; i++){
            checagemDeCasas.push(caçaTabela[0 + i][9])
            for(let j = 0; j < checagemDeCasas.length; j++){
                vazio += checagemDeCasas[j]
            }
        }
        for(let i = 0; i < escolhidas[1].length; i++){
            if(vazio === ""){
                caçaTabela[0 + i][9] = escolhidas[1][i]
            }
        }
    }

    //checando espaço dentro do caçaTabela pra alocar a terceira palavra
    let vazioDois = ""
    let checagemDeCasasDois = []
   
    if(numerosRandomsIndices[5] + escolhidas[2].length <= 10){
        for(let i = 0; i < escolhidas[2].length; i++){
            checagemDeCasasDois.push(caçaTabela[numerosRandomsIndices[4]][numerosRandomsIndices[5] + i])
            for(let j = 0; j < checagemDeCasasDois.length; j++){
                vazioDois += checagemDeCasasDois[j]
            }
        }
        for(let i = 0; i < escolhidas[2].length; i++){
            if(vazioDois === ""){
                caçaTabela[numerosRandomsIndices[4]][numerosRandomsIndices[5] + i] = escolhidas[2][i]
            }
        }
    } else if(numerosRandomsIndices[5] + escolhidas[2].length <= 10 && (numerosRandomsIndices[5] + 1) - escolhidas[2].length >= 0 && vazioDois !== ""){
        vazioDois = ""
        checagemDeCasasDois = []
        for(let i = 0; i < escolhidas[2].length; i++){
            checagemDeCasasDois.push(caçaTabela[numerosRandomsIndices[4]][numerosRandomsIndices[5] - i])
            for(let j = 0; j < checagemDeCasasDois.length; j++){
                vazioDois += checagemDeCasasDois[j]
            }
        }
        for(let i = 0; i < escolhidas[2].length; i++){
            if(vazioDois === ""){
                caçaTabela[numerosRandomsIndices[4]][numerosRandomsIndices[5] - i] = escolhidas[2][i]
            }
        }
    } else if(numerosRandomsIndices[5] + escolhidas[2].length > 10 && (numerosRandomsIndices[5] + 1) - escolhidas[2].length >= 0){
        vazioDois = ""
        checagemDeCasasDois = []
        for(let i = 0; i < escolhidas[2].length; i++){
            checagemDeCasasDois.push(caçaTabela[numerosRandomsIndices[4]][numerosRandomsIndices[5] - i])
            for(let j = 0; j < checagemDeCasasDois.length; j++){
                vazioDois += checagemDeCasasDois[j]
            }
        }
        for(let i = 0; i < escolhidas[2].length; i++){
            if(vazioDois === ""){
                caçaTabela[numerosRandomsIndices[4]][numerosRandomsIndices[5] - i] = escolhidas[2][i]
            }
        }
    } else if(numerosRandomsIndices[5] + escolhidas[2].length <= 10 && (numerosRandomsIndices[5] + 1) - escolhidas[2].length >= 0 &&
        numerosRandomsIndices[4] + escolhidas[2].length <= 10 && vazioDois !== ""){
        vazioDois = ""
        checagemDeCasasDois = []
        for(let i = 0; i < escolhidas[2].length; i++){
            checagemDeCasasDois.push(caçaTabela[numerosRandomsIndices[4] + i][numerosRandomsIndices[5]])
            for(let j = 0; j < checagemDeCasasDois.length; j++){
                vazioDois += checagemDeCasasDois[j]
            }
        }
        for(let i = 0; i < escolhidas[2].length; i++){
            if(vazioDois === ""){
                caçaTabela[numerosRandomsIndices[4] + i][numerosRandomsIndices[5]] = escolhidas[2][i]
            }
        }
    } else if(numerosRandomsIndices[5] + escolhidas[2].length > 10 && (numerosRandomsIndices[5] + 1) - escolhidas[2].length < 0 &&
        numerosRandomsIndices[4] + escolhidas[2].length <= 10){
        vazioDois = ""
        checagemDeCasasDois = []
        for(let i = 0; i < escolhidas[2].length; i++){
            checagemDeCasasDois.push(caçaTabela[numerosRandomsIndices[4] + i][numerosRandomsIndices[5]])
            for(let j = 0; j < checagemDeCasasDois.length; j++){
                vazioDois += checagemDeCasasDois[j]
            }
        }
        for(let i = 0; i < escolhidas[2].length; i++){
            if(vazioDois === ""){
                caçaTabela[numerosRandomsIndices[4] + i][numerosRandomsIndices[5]] = escolhidas[2][i]
            }
        }
    } else if(numerosRandomsIndices[5] + escolhidas[2].length <= 10 && (numerosRandomsIndices[5] + 1) - escolhidas[2].length >= 0 &&
    numerosRandomsIndices[4] + escolhidas[2].length <= 10 && (numerosRandomsIndices[4] + 1) - escolhidas[2].length >= 0 && vazioDois !== ""){
        vazioDois = ""
        checagemDeCasasDois = []
        for(let i = 0; i < escolhidas[2].length; i++){
            checagemDeCasasDois.push(caçaTabela[numerosRandomsIndices[4] - i][numerosRandomsIndices[5]])
            for(let j = 0; j < checagemDeCasasDois.length; j++){
                vazioDois += checagemDeCasasDois[j]
            }
        }
        for(let i = 0; i < escolhidas[2].length; i++){
            if(vazioDois === ""){
                caçaTabela[numerosRandomsIndices[4] - i][numerosRandomsIndices[5]] = escolhidas[2][i]
            }
        }
    } else if(numerosRandomsIndices[5] + escolhidas[2].length > 10 && (numerosRandomsIndices[5] + 1) - escolhidas[2].length < 0 &&
    numerosRandomsIndices[4] + escolhidas[2].length > 10 && (numerosRandomsIndices[4] + 1) - escolhidas[2].length >= 0){
        vazioDois = ""
        checagemDeCasasDois = []
        for(let i = 0; i < escolhidas[2].length; i++){
            checagemDeCasasDois.push(caçaTabela[numerosRandomsIndices[4] - i][numerosRandomsIndices[5]])
            for(let j = 0; j < checagemDeCasasDois.length; j++){
                vazioDois += checagemDeCasasDois[j]
            }
        }
        for(let i = 0; i < escolhidas[2].length; i++){
            if(vazioDois === ""){
                caçaTabela[numerosRandomsIndices[4] - i][numerosRandomsIndices[5]] = escolhidas[2][i]
            }
        }
    } else if(vazioDois !== 0 || numerosRandomsIndices[5] + escolhidas[2].length > 10 && (numerosRandomsIndices[5] + 1) - escolhidas[2].length < 0 &&
    numerosRandomsIndices[4] + escolhidas[2].length > 10 && (numerosRandomsIndices[4] + 1) - escolhidas[2].length >= 0){
        vazioDois = ""
        checagemDeCasasDois = []
        for(let i = 0; i < escolhidas[2].length; i++){
            checagemDeCasasDois.push(caçaTabela[numerosRandomsIndices[4]][0 + i])
            for(let j = 0; j < checagemDeCasasDois.length; j++){
                vazioDois += checagemDeCasasDois[j]
            }
        }
        for(let i = 0; i < escolhidas[2].length; i++){
            if(vazioDois === ""){
                caçaTabela[numerosRandomsIndices[4]][0 + i] = escolhidas[2][i]
            }
        }
    }  

    console.log(vazioDois)

    
    if(vazioDois !== ""){
        vazioDois = ""
        checagemDeCasasDois = []
        for(let i = 0; i < escolhidas[2].length; i++){
            checagemDeCasasDois.push(caçaTabela[9 - i][0])
            for(let j = 0; j < checagemDeCasasDois.length; j++){
                vazioDois += checagemDeCasasDois[j]
            }
        }
        for(let i = 0; i < escolhidas[2].length; i++){
            if(vazioDois === ""){
                caçaTabela[9 - i][0] = escolhidas[2][i]
            }
        }
    }
    if(vazioDois !== ""){
        vazioDois = ""
        checagemDeCasasDois = []
        for(let i = 0; i < escolhidas[2].length; i++){
            checagemDeCasasDois.push(caçaTabela[9][9 - i])
            for(let j = 0; j < checagemDeCasasDois.length; j++){
                vazioDois += checagemDeCasasDois[j]
            }
        }
        for(let i = 0; i < escolhidas[2].length; i++){
            if(vazioDois === ""){
                caçaTabela[9][9 - i] = escolhidas[2][i]
            }
        }
    }
    if(vazioDois !== ""){
        vazioDois = ""
        checagemDeCasasDois = []
        for(let i = 0; i < escolhidas[2].length; i++){
            checagemDeCasasDois.push(caçaTabela[0 + i][9])
            for(let j = 0; j < checagemDeCasasDois.length; j++){
                vazioDois += checagemDeCasasDois[j]
            }
        }
        for(let i = 0; i < escolhidas[2].length; i++){
            if(vazioDois === ""){
                caçaTabela[0 + i][9] = escolhidas[2][i]
            }
        }
    }
    if(vazioDois !== ""){
        vazioDois = ""
        checagemDeCasasDois = []
        for(let i = 0; i < escolhidas[2].length; i++){
            checagemDeCasasDois.push(caçaTabela[0][0 + i])
            for(let j = 0; j < checagemDeCasasDois.length; j++){
                vazioDois += checagemDeCasasDois[j]
            }
        }
        for(let i = 0; i < escolhidas[2].length; i++){
            if(vazioDois === ""){
                caçaTabela[0][0 + i] = escolhidas[2][i]
            }
        }
    } 
    
    let letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", 
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    for(let i = 0; i < caçaTabela.length; i++){
        for(let j = 0; j < caçaTabela[i].length; j++){
            if(caçaTabela[i][j] === ""){
                caçaTabela[i][j] = letras[getRandomInt3()]
            } else if(caçaTabela[i][j] !== ""){
                caçaTabela[i][j] = caçaTabela[i][j].toUpperCase()
            }
        }
    }

    console.table(caçaTabela)


    let zeroCem = []
    
for(let i = 0; i < caçaTabela.length; i++){
    for(let j = 0; j < caçaTabela[i].length; j++){
        zeroCem.push(caçaTabela[i][j])
    }
}

for(let i = 0; i < zeroCem.length; i++){
    document.getElementById(`${i}`).innerText = zeroCem[i]
}

let palavrasEscolhidas = []
palavrasEscolhidas.push(vinte[numerosRandomsPalavras[0]].toUpperCase())
palavrasEscolhidas.push(vinte[numerosRandomsPalavras[1]].toUpperCase())
palavrasEscolhidas.push(vinte[numerosRandomsPalavras[2]].toUpperCase())

console.log(palavrasEscolhidas)

const tabela = document.getElementById("tabela")

let array = []
let letraBloco = []
let venceu = []

tabela.addEventListener("click", function(event){
    console.log(event.target.id)
    let quadradinNumero = event.target.id
    let quadradin = event.target
    console.log(event.target.tagName)
    
    
    if(event.target.tagName === "TD"){
        array.push(quadradinNumero)
        if(array[0] === quadradinNumero){
            letraBloco.push(event.target.innerText)
            quadradin.style.background = "#F3826F"
        } else if(array[0] !== quadradinNumero && Number(array[array.length - 1]) + 11 === Number(array[array.length - 2])){
            quadradin.style.background = "#F3826F"
            letraBloco.push(event.target.innerText)
            if(letraBloco.join("") === palavrasEscolhidas[0] || letraBloco.join("") === palavrasEscolhidas[1] || letraBloco.join("") === palavrasEscolhidas[2]){
                venceu.push(letraBloco.join(""))
                array = []
                letraBloco = []
            }
            if(letraBloco.join("") === palavrasEscolhidas[0].split("").reverse().join("") || letraBloco.join("") === palavrasEscolhidas[1].split("").reverse().join("") || letraBloco.join("") === palavrasEscolhidas[2].split("").reverse().join("")){
                venceu.push(letraBloco.join(""))
                array = []
                letraBloco = []
            }
            if(venceu.length === 3){
                if(confirm("Você Venceu")){
                    window.location.reload()
                }
            }
        } else if(array[0] !== quadradinNumero && Number(array[array.length - 1]) - 11 === Number(array[array.length - 2])){
            quadradin.style.background = "#F3826F"
            letraBloco.push(event.target.innerText)
            if(letraBloco.join("") === palavrasEscolhidas[0] || letraBloco.join("") === palavrasEscolhidas[1] || letraBloco.join("") === palavrasEscolhidas[2]){
                venceu.push(letraBloco.join(""))
                array = []
                letraBloco = []
            }
            if(letraBloco.join("") === palavrasEscolhidas[0].split("").reverse().join("") || letraBloco.join("") === palavrasEscolhidas[1].split("").reverse().join("") || letraBloco.join("") === palavrasEscolhidas[2].split("").reverse().join("")){
                venceu.push(letraBloco.join(""))
                array = []
                letraBloco = []
            }
            if(venceu.length === 3){
                if(confirm("Você Venceu")){
                    window.location.reload()
                }
            }
        } else if(array[0] !== quadradinNumero && Number(array[array.length - 1]) + 9 === Number(array[array.length - 2])){
            quadradin.style.background = "#F3826F"
            letraBloco.push(event.target.innerText)
            if(letraBloco.join("") === palavrasEscolhidas[0] || letraBloco.join("") === palavrasEscolhidas[1] || letraBloco.join("") === palavrasEscolhidas[2]){
                venceu.push(letraBloco.join(""))
                array = []
                letraBloco = []
            }
            if(letraBloco.join("") === palavrasEscolhidas[0].split("").reverse().join("") || letraBloco.join("") === palavrasEscolhidas[1].split("").reverse().join("") || letraBloco.join("") === palavrasEscolhidas[2].split("").reverse().join("")){
                venceu.push(letraBloco.join(""))
                array = []
                letraBloco = []
            }
            if(venceu.length === 3){
                if(confirm("Você Venceu")){
                    window.location.reload()
                }
            }
        } else if(array[0] !== quadradinNumero && Number(array[array.length - 1]) - 9 === Number(array[array.length - 2])){
            quadradin.style.background = "#F3826F"
            letraBloco.push(event.target.innerText)
            if(letraBloco.join("") === palavrasEscolhidas[0] || letraBloco.join("") === palavrasEscolhidas[1] || letraBloco.join("") === palavrasEscolhidas[2]){
                venceu.push(letraBloco.join(""))
                array = []
                letraBloco = []
            }
            if(letraBloco.join("") === palavrasEscolhidas[0].split("").reverse().join("") || letraBloco.join("") === palavrasEscolhidas[1].split("").reverse().join("") || letraBloco.join("") === palavrasEscolhidas[2].split("").reverse().join("")){
                venceu.push(letraBloco.join(""))
                array = []
                letraBloco = []
            }
            if(venceu.length === 3){
                if(confirm("Você Venceu")){
                    window.location.reload()
                }
            }
        } else if(array[0] !== quadradinNumero && Number(array[array.length - 1]) + 10 === Number(array[array.length - 2])){
            quadradin.style.background = "#F3826F"
            letraBloco.push(event.target.innerText)
            if(letraBloco.join("") === palavrasEscolhidas[0] || letraBloco.join("") === palavrasEscolhidas[1] || letraBloco.join("") === palavrasEscolhidas[2]){
                venceu.push(letraBloco.join(""))
                array = []
                letraBloco = []
            }
            if(letraBloco.join("") === palavrasEscolhidas[0].split("").reverse().join("") || letraBloco.join("") === palavrasEscolhidas[1].split("").reverse().join("") || letraBloco.join("") === palavrasEscolhidas[2].split("").reverse().join("")){
                venceu.push(letraBloco.join(""))
                array = []
                letraBloco = []
            }
            if(venceu.length === 3){
                if(confirm("Você Venceu")){
                    window.location.reload()
                }
            }
        } else if(array[0] !== quadradinNumero && Number(array[array.length - 1]) - 10 === Number(array[array.length - 2])){
            quadradin.style.background = "#F3826F"
            letraBloco.push(event.target.innerText)
            if(letraBloco.join("") === palavrasEscolhidas[0] || letraBloco.join("") === palavrasEscolhidas[1] || letraBloco.join("") === palavrasEscolhidas[2]){
                venceu.push(letraBloco.join(""))
                array = []
                letraBloco = []
            }
            if(letraBloco.join("") === palavrasEscolhidas[0].split("").reverse().join("") || letraBloco.join("") === palavrasEscolhidas[1].split("").reverse().join("") || letraBloco.join("") === palavrasEscolhidas[2].split("").reverse().join("")){
                venceu.push(letraBloco.join(""))
                array = []
                letraBloco = []
            }
            if(venceu.length === 3){
                if(confirm("Você Venceu")){
                    window.location.reload()
                }
            }
        } else if(array[0] !== quadradinNumero && Number(array[array.length - 1]) + 1 === Number(array[array.length - 2])){
            quadradin.style.background = "#F3826F"
            letraBloco.push(event.target.innerText)
            if(letraBloco.join("") === palavrasEscolhidas[0] || letraBloco.join("") === palavrasEscolhidas[1] || letraBloco.join("") === palavrasEscolhidas[2]){
                venceu.push(letraBloco.join(""))
                array = []
                letraBloco = []
            }
            if(letraBloco.join("") === palavrasEscolhidas[0].split("").reverse().join("") || letraBloco.join("") === palavrasEscolhidas[1].split("").reverse().join("") || letraBloco.join("") === palavrasEscolhidas[2].split("").reverse().join("")){
                venceu.push(letraBloco.join(""))
                array = []
                letraBloco = []
            }
            if(venceu.length === 3){
                if(confirm("Você Venceu")){
                    window.location.reload()
                }
            }
        } else if(array[0] !== quadradinNumero && Number(array[array.length - 1]) - 1 === Number(array[array.length - 2])){
            quadradin.style.background = "#F3826F"
            letraBloco.push(event.target.innerText)
            if(letraBloco.join("") === palavrasEscolhidas[0] || letraBloco.join("") === palavrasEscolhidas[1] || letraBloco.join("") === palavrasEscolhidas[2]){
                venceu.push(letraBloco.join(""))
                array = []
                letraBloco = []
            }
            if(letraBloco.join("") === palavrasEscolhidas[0].split("").reverse().join("") || letraBloco.join("") === palavrasEscolhidas[1].split("").reverse().join("") || letraBloco.join("") === palavrasEscolhidas[2].split("").reverse().join("")){
                venceu.push(letraBloco.join(""))
                array = []
                letraBloco = []
            }
            if(venceu.length === 3){
                if(confirm("Você Venceu")){
                    window.location.reload()
                }
            }
        } else if(array[array.length - 1] === array[array.length - 2]){
            for(let i = 0; i < array.length; i++){
                document.getElementById(`${array[i]}`).style.background = "#C05C7E"
            }
            array = []
            letraBloco = []
        } else{
            for(let i = 0; i < array.length; i++){
                document.getElementById(`${array[i]}`).style.background = "#C05C7E"
            }
            array = []
            letraBloco = []
        }
    }
    console.log(array)
    console.log(letraBloco)
})
