let num = [4, 6, 2, 8]
num[4] = 1
num.push(9)
num.length
num.sort()

console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro numero é o ${num[0]}`)

for (let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for (let cont in num){
    console.log(`A posição ${cont} tem o valor ${num[cont]}`)
}

let procurar = num.indexOf(8)
console.log(`O valor 8 esta na posição ${procurar}`)