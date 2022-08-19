var num = [5, 7, 2, 3]
num[4] = 6
num.push(9)

console.log (`Vetor: ${num}`)

console.log(`O vetor tem ${num.length} posições`)

console.log(`Vetor ordenado: ${num.sort()}`)

console.log(`Vetor: `)
for(let i = 0; i < num.length; i++){
    
    console.log(num[i])
}

let pos = num.indexOf(4)
if(pos == -1){
    console.log(`O valor não foi encontrado!`)
}else{
    console.log(`O valor 2 está na posição ${pos}`)
}