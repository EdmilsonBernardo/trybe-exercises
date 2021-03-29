//EXERCÍCIO 1:
const newObject = (nomeCompleto) => ({
    nomeCompleto,
    email: `${nomeCompleto.split(' ').join('_')}@trybe.com`
});

const newEmployees = () => {
    const employees = {
        id1: newObject('Pedro Guerra'),
        id2: newObject('Luiza Drumond'),
        id3: newObject('Carla Paiva')
    }
    return employees;
};

console.log(newEmployees());
