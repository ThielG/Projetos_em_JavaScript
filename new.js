let id = prompt('Qual id deseja pesquisar?')

async function getProdutcs() {
    let response = await fetch(`https://dummyjson.com/product/${id}`)
    let data = await response.json()
    console.log(data);
}

getProdutcs()

// async function getProdutcs() {
//     let response = await fetch('https://dummyjson.com/product')
//     let data = await response.json()
//     return data
// }

// let data = getProdutcs()

// ^ armazenamento em variavel sem apresentar no log. 