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

//EXERCÍCIO 2:
const numberDrawn = Math.floor(Math.random() * 5 + 1);

const Drawn = (numberBet) => (numberBet === numberDrawn) ? 'Parabéns você ganhou' : 'Tente novamente';

//EXERCÍCIO 3:
const responseEvaluator = (correct) => (used) => (correct.toUpperCase() === used.toUpperCase()) ? true : false;

//EXERCÍCIO 4:
const totalPoints = (array1, array2) => {
    let total = 0;
    for (let index = 0; index <= array1.length; index += 1) {
        if (array2[index] === array1[index]) {
            total += 1;
        } else if (array2[index] === 'N.A') {
            total = total;
        } else {
            total -= 0.5;
        }
    }
    return total;
};

const totalHits = (feedback, responsesUsed, action) => action(feedback, responsesUsed);
