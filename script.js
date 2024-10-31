//console.log("Bom dia!")

//---------- Array ----------

let dia = "lindo"

let frutas = ["parafusadeiras", "tv", "celular", "uva"]
console.log(frutas[1])

let series = ["Aneis de Poder", "Game of Thrones", "Impuros", "Black Mirror", "Vikings"]

//.push <--- acresenta mais um valor no FINAL
//series.push("Flash")
//console.log(series)

//.unshift <--- acresenta mais um valor no INICIO
//series.unshift("The Office")
//console.log(series)

//.reverse <--- organiza os elementos em ordem inversa
series.reverse()
console.log(series)

//.sort <--- organiza os elementos em ordem crescente númerica ou alfabética
let numeros = [5,2,3,7,9,1,3,4]
numeros.sort()
console.log(numeros)

//.shift <--- remove o PRIMEIRO valor da lista
series.shift()
console.log(series)

//.pop <--- remove o ÚLTIMO valor da lista
series.pop()
console.log(series)

//.slice <--- Pega os itens de uma array, criando uma nova array sem desmontar a array original
let umaSerie = series.slice(0,4)
console.log(umaSerie)

//---------- Objetos ----------

const aluno ={
    nome: "Ricardo",
    idade: 30,
    profissão: "Dev",
    cpf: 888888
}

aluno.endereço = "Rua das Flores"
console.log(aluno)

delete aluno.cpf
console.log(aluno)