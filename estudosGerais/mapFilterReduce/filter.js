const pets = [
    {
        name: 'barry',
        type: 'Dog',
        age: 6
    },
    {
        name: 'concthita',
        age: 'cat',
        idade: 8
    },
    {
        name: 'bolinha',
        type:'dog', 
        age: 2 
    }

]


const lessThenFive = (numero)=> {
    return numero < 5 
}

const newPets = pets.filter((pet) =>{
    return pet.age < 5
})


const newPets2 = pets.filter(({age}) => lessThenFive(age))

console.log(newPets)
console.log(newPets2)

