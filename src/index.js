import { sortCards,cardsArray, pathDescription } from './sort';

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

const ticketAlgorithm = (dataCards) => {
    const sortedCards = sortCards(dataCards); // отсортировываем карточки по порядку
    const cards = cardsArray(sortedCards); // создаем из карточек массив объектов и добавляем описание
    const description = pathDescription(cards); // формируем конечный словесный список 
    return description;
};

export default ticketAlgorithm;



