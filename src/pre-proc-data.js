import Card  from './card';

const sortCards = (acc, elem, ind, arr) => {
    acc.push(new Card(elem));
    return acc;
}

const cardsList = (cards) => {
    return cards.reduce(sortCards, []);
}

export default cardsList;