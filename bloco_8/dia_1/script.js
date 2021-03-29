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

//EXERCÍCIO 2:
const numberDrawn = Math.floor(Math.random() * 5 + 1);

const Drawn = (numberBet) => (numberBet === numberDrawn) ? 'Parabéns você ganhou' : 'Tente novamente';
