// Exercício 1.1:
const testingScope = escopo => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
        console.log(ifScope);
    } else {
        const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
}

testingScope(true);

//Exercício 1.2:
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);

//Exercício 2.1:
const fatorial = a => {
    let newNumber = 1
    for (let index = 2; index <= a; index += 1) {
        newNumber *= index;
    }
    return newNumber;
}

console.log(fatorial(4));

//Exercício 2.2:
const longestWord = text => {
    let arrayWords = text.split(' ');
    let maxLength = 0;
    let result = '';

    for (const word of arrayWords) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }
    return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

//exercício 2.3:
