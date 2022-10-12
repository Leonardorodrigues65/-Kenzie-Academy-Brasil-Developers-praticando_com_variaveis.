
 
 alert("Gasolina Comum 6.80 litro ")


 let Dinheiro = prompt("Quanto em Dinheiro deseja abastecer")
let gasolina = 6.80;


let qtdLitros =parseInt ( Dinheiro / gasolina );

alert(`Foi abastecido em seu veiculo essa quantidade de Litros: ${qtdLitros.toFixed(1)}`)



alert("Transforme graus Celsius em graus Fahrenheit.")


let C = prompt("Informe a temperatura em graus Celsius")

let F = 0

let resultado = F = (9 * C+160) / 5

alert(`temperatura em Fahrenheit ${resultado} `)




alert("Transforme graus Fahrenheit em graus Celsius")

let f = prompt("Informe a temperatura em Fahrenheit")

let c = 0

let resultado2 = c = ((f - 32)* 5) / 9;

alert (`temperatura em graus Celsius  ${resultado2.toFixed(6)} graus`)



alert("Descubra o Comprimento , Largura e altura de uma Caixa retangular em metros")

let com = prompt("Informe o Comprimento da Sua Caixa")

let lar = prompt("Informe a Largura da sua Caixa")

let alt = prompt("Informe  a Altura da sua Caixa")

let volume = com*lar*alt;

alert (`Resultado da sua Caixa ${volume} m³`)



alert("insira um valor numerico inteiro para saber o valor informado ao quadrado")

let valor =prompt("Insira aqui")

let valorQuadrado = +valor*valor;

alert(`O valor ${valor} ao quadrado é ${valorQuadrado}`)




alert("Realize a soma de  6 numeros e tire a media")

let nota1 = parseInt( prompt("insira o primeiro numero") )
let nota2 =parseInt( prompt("insira o segundo numero") )
let nota3 = parseInt (  prompt("insira o terceiro numero") )
let nota4 = parseInt ( prompt("insira o quarto numero") )
let nota5 =  parseInt (  prompt("insira o quinto numero") )

let soma = (nota1 + nota2 + nota3 + nota4 + nota5) 

let media = (soma/5)

alert(`Resultado: ${soma} media: ${media}`)




alert("Resto da divisão do Primeiro pelo Segundo")

let valor1 = prompt("insira um numero")
let valor2 = prompt ("insira um numero")

let resultadoSoma = ( valor1 * valor2 )

let Resto =( valor1 %  valor2 )

alert(`Resultado da soma: ${resultadoSoma} resto:${Resto}`)





alert("Escreva uma Frase ou uma palavra para saber a quantidade de caracteres")


let frase = prompt("insira uma Palavra ou Frase")


let qtdFrase = frase.length;



alert(`Essa é a quantidade de caracteres que sua frase ou palavra tem:${qtdFrase}`)





alert("Primeira letra e ultima letra")

let inicio = prompt ("insira sua palavra ")

let letra1 = letra1[0].tolocaluppercase() +letra1.substring(1)



alert(`primeira letra ${letra1}`)




alert("Informação Cracha")


let nome = prompt("insira seu nome ")
let sobrenome = prompt("informe seu sobrenome")
let idade = prompt ("informe sua idade ")
let setor = prompt ("informe seu setor")


alert(`nome; ${nome} Sobrenome ${sobrenome} Idade: ${idade} Setor: ${setor}`)