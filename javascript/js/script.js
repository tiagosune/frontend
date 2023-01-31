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


// Formulario de envio de dados para soma de media 
document.getElementById('formulario01').addEventListener('submit', function(evento){

    evento.preventDefault();
    evento.stopPropagation();

    let dados = new FormData(this);

    let notas = [];

    for(let key of dados.keys()){

        let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // garantindo que vou receber numero

        if(!isNaN(numero)){
            notas.push(numero)
        }

    }
    
    console.log(notas);
    document.getElementById('resultados').innerHTML = aprovacao(notas);
})

document.getElementById('formulario02').addEventListener('submit', function(evento){
    
    evento.preventDefault();
    evento.stopPropagation();

    let dados = new FormData(this);
    let info = [];

    for(let key of dados.keys()){
        let teste = dados.get(key);

        info.push(teste);
    }

    console.log(info);

})

let campoObrigatorio = document.querySelectorAll('input.obrigatorio');
let campoCep = document.querySelectorAll('input.obrigatorio-cep');


function validaCampo(elemento){
    
    elemento.addEventListener('focusout', function(event){
        
        let erro = 'Caractere inválido, preencha corretamente.';
        event.preventDefault();
        
        if(this.value == '' || this.value < 0 || this.value > 10){
            document.querySelector('.message').innerHTML = erro;
            this.classList.add('erro');
            this.parentNode.classList.add('error');
            return false;
        }else{
            document.querySelector('.message').innerHTML = '';
            this.classList.remove('erro');
            this.parentNode.classList.remove('error');
        }
        
    })
}

function validaCampoCep(elemento){
    
    elemento.addEventListener('focusout', function(event){
        
        event.preventDefault();
        
        let erro = 'Digite apenas números válidos. (0-9)'
        let number = this.value.match(/^[\d]{5}-*[\d]{3}/) ? this.value.replace(/-/, '') : this.value;
        
        if(number != '' && number.match(/[0-9]*/) && number.length == 8){
            document.querySelector('.message').innerHTML = '';
            this.classList.remove('erro');
            this.parentNode.classList.remove('error')
        } else{
            document.querySelector('.message').innerHTML = erro;
            this.classList.add('erro');
            this.parentNode.classList.add('error');
            return false;
        }
        
    })
    
}


for(let emFoco of campoObrigatorio){
    validaCampo(emFoco);
}
for(let emFoco of campoCep){
    validaCampoCep(emFoco)
}