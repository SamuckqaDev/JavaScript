//Chama o callback para cada elemento e devolve um novo array com a mesma quantidade de itens;
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
    }, 
    {
        name:'Rudson', 
        type: 'bird', 
        age: 3
    },
    {
        name:'Vladimir', 
        type: 'fish', 
        age: 1
    }, 
    {
        name: 'BoJack', 
        type: 'Horse', 
        age: 10
    }
]



const petNames = pets.map((pet) =>{ //Novo array como a mesma quantidade de lementos;
    return pet.name
})

const forEachPetNames = [] //array que recebe push dos valores;

pets.forEach((pets)=>{ //finção que fara push para dentro do array;
    forEachPetNames.push(pets.name)

})

console.log(petNames)
console.log(forEachPetNames)
