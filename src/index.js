import Card  from './card';

const dataCards = [
    ['metro', 'Teatralnaya', 'Belorussky Station'],
    ['bus', 'Belorussky Station', 'Moscow Sheremetyevo (SVO)', 851],
    ['airline', 'Moscow Sheremetyevo (SVO)', 'Bologna (BLQ)', 'DL31', 'A22', 'D3', '24C'],
    ['bus','Bologna (BLQ)', 'Bologna Centrale', 'Aerobus'],
    ['train','Bologna Centrale', 'Firenze S.M.N.', 587, '56b', 4],
    ['train','Firenze S.M.N.', 'Pisa Centrale', 'R 3163', '21c', 9]
];

const sortCards = (acc, elem, ind, arr) => {
    acc.push(new Card(elem));
    return acc;
}

const cardsList = (cards) => {
    return cards.reduce(sortCards, []);
}

console.log(cardsList(dataCards));
