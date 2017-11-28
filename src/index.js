import { sortCards } from './sort';
import Card from './card';

const dataCards = [ 
    ['train', 'Bologna Centrale', 'Firenze S.M.N.', '№587', '56b', 4],
    ['train', 'Firenze S.M.N.', 'Pisa Centrale', 'R 3163', '21c', 9, '(End of path)'],
    ['airline', 'Moscow Sheremetyevo (SVO)', 'Bologna (BLQ)', 'DL31', 'A22', 'D3', '24C'],
    ['bus', 'Bologna (BLQ)', 'Bologna Centrale', 465],
    ['metro', 'Teatralnaya', 'Belorusskaya', 'Last carriage. (Path beginning)'],
    ['bus', 'Belorusskaya', 'Moscow Sheremetyevo (SVO)', 851],
   ];
/* вид отсортированного массива
    ['metro', 'Teatralnaya', 'Belorusskaya', 'Последний вагон. (начало пути)'],
    ['bus', 'Belorusskaya', 'Moscow Sheremetyevo (SVO)', 851],
    ['airline', 'Moscow Sheremetyevo (SVO)', 'Bologna (BLQ)', 'DL31', 'A22', 'D3', '24C'],
    ['bus', 'Bologna (BLQ)', 'Bologna Centrale', 465],
    ['train', 'Bologna Centrale', 'Firenze S.M.N.', 587, '56b', 4],
    ['train', 'Firenze S.M.N.', 'Pisa Centrale', 'R 3163', '21c', 9, '(конец пути)']
*/

const sortedCards = sortCards(dataCards); // отсортировываем карточки по порядку

const cardsArray = (sortedCards) => { // создаем из карточек объекты и добавляем описание
    return sortedCards.reduce((acc, elem, ind, arr) => {
        acc.push(new Card(elem));
        return acc;
    }, []);
};

const cards = cardsArray(sortedCards); // создаем из карточек объекты и добавляем описание

const pathDescription = (cardsArray) => {
    return cardsArray.reduce((acc, card, ind, arr) => {
        acc += card.description + '\n';
        return acc;
    }, '');
}


console.log(pathDescription(cards));