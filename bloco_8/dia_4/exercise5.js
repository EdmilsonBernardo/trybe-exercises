
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
    const countA = names.reduce(((numberOfA, name) => {
        for(let index = 0; index < name.length; index += 1) {
            if( name[index] === 'A' || name[index] === 'a' ) {
                numberOfA += 1 } else { numberOfA += 0 };
        }
        return numberOfA;
    }), 0);
    return countA;
}

assert.deepStrictEqual(containsA(), 20);
