console.log('Teste')

var x = 10
// ^ Valores variavéis. 

const y = 10
// ^ Valores constantes.

let z = 10
// ^ Forma mais atualizada do "var".

let texto = "texto"
let inteiro = 10
let decimal = 10.10
let boleano = true
let objeto = {
    "id":"20",
    "name":"Ricardo",
    "age":"40"
}
let lista = ["maça", "uva", "Laranja"]

console.log(texto)
console.log(inteiro)
console.log(decimal)
console.log(boleano)
console.log(objeto)
console.log(objeto.name)
console.log(lista)
console.log(lista[1])

for(let a = 0; a < 10; a++){
    console.log(a)
}

for(let x in lista){
    console.log(lista[x])
}

// function soma(){
//     console.log(5+5)
// }

// soma()

let soma = () => console.log(5+5)

soma()

// ^ Arrow function serve para minimizar o tamanho do código (entre outras coisas).

let list = [1,2,3,4]

let valor_1 = list.map((e)=>{
    return e*2;
})

let valor_2 = list.forEach((e)=>{
    return e*2;
})

console.log(valor_1);
console.log(valor_2);
