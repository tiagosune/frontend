function calcularMedia(notas){
	
    let soma = 0
    for (let c = 0; c < notas.length; c++ ){
        soma += notas[c];
    }
    
    media = soma / notas.length;
    
    return media;
    
}

function aprovacao(notas){
    
    media = calcularMedia(notas);
    let condicao = media >= 7 ? "Aprovado" : "Reprovado";

    return "Média: " + media +" - " + "Situação: " + condicao; 

}
  
// console.log(aprovacao([8, 3, 9, 10]))


document.addEventListener('submit', function(evento){

    evento.preventDefault();
    evento.stopPropagation();

    let formulario = document.getElementById('formulario01');

    let dados = new FormData(formulario);

    let objeto = {};

    let notas = [];

    for(let key of dados.keys()){
        objeto[key] = dados.get(key);

        // push - adiciona itens no array
        notas.push(parseInt(dados.get(key)));
    }


    console.log(notas);
    console.log(objeto);

    document.getElementById('resultados').innerHTML = aprovacao(notas);

})
