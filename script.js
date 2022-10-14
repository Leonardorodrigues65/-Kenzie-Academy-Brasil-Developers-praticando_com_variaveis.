
 
//Exercicio 1


let Dinheiro = prompt("Quanto em Dinheiro deseja abastecer")

let gasolina = 6.80;


let qtdLitros =parseInt ( Dinheiro / gasolina );

alert(`O Cliente abasteceu  ${qtdLitros}L `)

// Exercicio 2


let C = prompt("Informe a temperatura em graus Celsius  para ser Transformada em Fahrenheit")

let F = 0

let resultado = F = (9 * C+160) / 5

alert(`O valor ${C}ºC  em Fahrenheit é ${resultado} `)


//Exercicio 3

let f = prompt("Informe a temperatura em Fahrenheit para ser Transformada em Celsius")

let c = 0

let resultado2 = c = ((f - 32)* 5) / 9;

alert (`O valor ${F}ºF em Celsius é ${resultado2.toFixed(5)} `)


// Exercicio 4

let com = prompt("Descubra o Comprimento , Largura e altura de uma Caixa retangular em metros , PARA INICIAR  Informe o Comprimento da Sua Caixa:")           

let lar = prompt("Informe a Largura da sua Caixa")

let alt = prompt("Informe  a Altura da sua Caixa")

let volume = com*lar*alt;

alert (`O volume é de: ${volume} m³`)

//Exercio 5

let valor =prompt("insira um valor numerico inteiro para saber o valor informado ao quadrado")

let valorQuadrado = +valor*valor;

alert(`O valor ${valor} ao quadrado é ${valorQuadrado}`)


//Exercicio 6



let nota1 = parseInt( prompt("Realize a soma de  6 numeros e tire a media :  Insira o Primeiro Numero :") )          
let nota2 =parseInt( prompt("insira o segundo numero") )
let nota3 = parseInt (prompt("insira o terceiro numero") )
let nota4 = parseInt (prompt("insira o quarto numero") )
let nota5 =  parseInt ( prompt("insira o quinto numero") )

let soma = (nota1 + nota2 + nota3 + nota4 + nota5) 

let media = (soma/5)

alert(`A soma dos valores informados é: ${soma} e a média das notas é: ${media}`)


//Exercicio 7



let valor1 = prompt(" Resto da divisão do Primeiro pelo Segundo .Insira O Primeiro numero :")
let valor2 = prompt ("insira o segundo numero")

let resultadoSoma = ( valor1 * valor2 )

let Resto =( valor1 %  valor2 )

alert(`O resto da divisão de ${ valor1} por ${valor2} é: ${Resto}`)


// Exercicio 8



let frase = prompt("Escreva uma Frase ou uma palavra para saber a quantidade de caracteres")


let qtdFrase = frase.length;


alert(`Este texto tem:${qtdFrase} caracteres`)



//Exercicio 9

let frase1 = prompt ("insira uma palavra ou frase  ")

let letra1 = frase1.toLocaleUpperCase()[0]

let letra2 = frase1.substr(-1)

alert(`A primeira letra deste texto é ${letra1} e última é a  ${letra2}    `)


//Exercicio 10


let nome = prompt("INFORMAÇÃO PARA SEU CRACHÁ:  Insira seu nome ")
let sobrenome = prompt("informe seu sobrenome")
let idade = prompt ("informe sua idade ")
let setor = prompt ("informe seu setor")

let resultadoNome = nome.toLocaleUpperCase()
let resultadoSobre =sobrenome.toLocaleUpperCase()




alert(`nome: ${resultadoNome}  ${resultadoSobre}    Idade - ${idade}   Setor- ${setor}`)