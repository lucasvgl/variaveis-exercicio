console.log ("Coé Lucao")
//testando comentários no navegador
prompt("beba awa")

const nome="Lucas Vogel"
console.log(nome)
let idade= 30
console.log(idade)

// console.log(num.toFixed(2)) serve para mostrar a quantidade
//de casas decimais dentro da variável - exemplo idade 10,1
// ctrl + ;  deixa tudo como comentário

console.log ("Coé,",nome,idade)

let petCheck
//petcheck = prompt("Você tem pet?")
//console.log(petCheck)

petCheck = confirm("Você tem pet?")
console.log(petCheck)

const nomeDoPet = prompt("Qual o nome do seu pet?")
console.log(nomeDoPet)

console.log (typeof nome)
console.log (typeof idade)
console.log (typeof petCheck)
console.log (typeof nomeDoPet)

let altura = 1.80
console.log(altura.toFixed(2)) //mostra os 2 digitos decimais da altura

//código para converter o valor do prompt de String para Número
let money  = Number (prompt("Quanto você tem de dinheiro agora?"))
console.log(typeof money)
let resposta = money +10
console.log(resposta)
let newresposta = toString(resposta) //converteu a variável money de numero para string)
console.log (typeof newresposta)

//exercício de fixação

const livro = "Saco de Ossos"
let pesoDoLivro = 0.874
let marcadorDePaginas = true 
console.log("O livro",livro,"pesa",pesoDoLivro.toFixed(2),"e tem marcador de páginas", marcadorDePaginas)
console.log(typeof livro)
console.log(typeof pesoDoLivro)
console.log(typeof marcadorDePaginas)

//exercicio de fixacação 
let varA = 5
let varB = 10
let varC 
console.log(varA,varB,varC)
varC = varA
varA = varB
varB = varC
varC =     //preciso limpar o valor da variável C aqui nessa linha
console.log(varA,varB,varC)