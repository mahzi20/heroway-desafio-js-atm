// Cash Machine
// O Problema
// Desenvolva uma aplicação que simule a entrega de notas quando um cliente efetuar um saque em um caixa eletrônico.

// Sua aplicação deve:

// Entregar sempre o menor número de notas possíveis
// Sacar valores apenas com as notas disponíveis
// Ter saldo do cliente infinito
// Ter quantidade de notas infinita
// Possuir apenas notas de R$ 100,00, R$ 50,00, R$ 20,00 e R$ 10,00
// Retornar mensagens de erro em caso de entradas inválidas
// Observação:

// Exemplos:
// Entrada: 30.00
// Resultado: [20.00, 10.00]

// Entrada: 80.00
// Resultado: [50.00, 20.00, 10.00]

// Entrada: 125.00
// Resultado: Erro de notas indisponíveis

// Entrada: -130.00
// Resultado: Erro de valor inválido

// Entrada: NULL
// Resultado: Erro de valor nulo

const btnConfirma = document.getElementById('btnConfirmar');
const btnLimpar = document.getElementById('btnLimpar')
const input = document.getElementById('valor');
const visor = document.getElementById('visor');

const notas = [100, 50, 20, 10];
let vnotas = input.innerText;

function atribuirValor(element) {
    vnotas = vnotas.concat(element.innerHTML);
    input.value = vnotas;
 };

btnLimpar.addEventListener('click', () => {
  valor.value = '';
  visor.innerText = '';
  vnotas = '';
})

btnConfirma.addEventListener('click', () => {
  let valor = input.value;
  let connotas = '';
  if (valor%10 !== 0){
    visor.innerText = "Erro de notas indisponíveis";
} else if(valor == null || valor == 0){
    visor.innerText ="Erro de valor nulo";
} else{
    for (let i = 0; i < notas.length; i++) {
      
        let resto = valor%notas[i];
        valor = valor/notas[i];
        valor = parseInt(valor);     

        for (valor; valor > 0; valor--) {
            connotas = connotas.concat('$' + notas[i] + ', ');
        }
      
     valor = resto;
    }   
  
  visor.innerText = connotas.substring(0,(connotas.length - 2));
}
})
