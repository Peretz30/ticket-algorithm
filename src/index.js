import cardsList from './pre-proc-data'

const dataCards = [ 
    ['train', 'Bologna Centrale', 'Firenze S.M.N.', 587, '56b', 4],
    ['train', 'Firenze S.M.N.', 'Pisa Centrale', 'R 3163', '21c', 9, '(конец пути)'],
    ['airline', 'Moscow Sheremetyevo (SVO)', 'Bologna (BLQ)', 'DL31', 'A22', 'D3', '24C'],
    ['bus', 'Bologna (BLQ)', 'Bologna Centrale', 'Aerobus'],
    ['metro', 'Teatralnaya', 'Belorussky Station', 'Последний вагон. (начало пути)'],
    ['bus', 'Belorussky Station', 'Moscow Sheremetyevo (SVO)', 851],
   ];
/* вид отсортированного массива
    ['metro', 'Teatralnaya', 'Belorussky Station', 'Последний вагон. (начало пути)'],
    ['bus', 'Belorussky Station', 'Moscow Sheremetyevo (SVO)', 851],
    ['airline', 'Moscow Sheremetyevo (SVO)', 'Bologna (BLQ)', 'DL31', 'A22', 'D3', '24C'],
    ['bus', 'Bologna (BLQ)', 'Bologna Centrale', 'Aerobus'],
    ['train', 'Bologna Centrale', 'Firenze S.M.N.', 587, '56b', 4],
    ['train', 'Firenze S.M.N.', 'Pisa Centrale', 'R 3163', '21c', 9, '(конец пути)']
*/

const sortCards = (dataCards) => {
    let fromArray = dataCards.reduce((acc, elem, index, arr) => { // собираем массив точек отправления
        acc.push(elem[1]);
        return acc;
    }, [])
    let toArray = dataCards.reduce((acc, elem, index, arr) => { // собираем массив точек прибытия
        acc.push(elem[2]);
        return acc;
    }, [])

    // начало сортировки, суть заключается в том что мы сравниваем массив точек отправления с массивом точек прибытия. Например, если точки отправления нет
    // среди точек прибытия значит это начало пути, записываем этот элемент в новый массив и удаляем из старого и т.д.
    const sortedCards = [];
    for (let i = 0; i < dataCards.length;i++) {
        fromArray.filter((elem, ind, arr) => { 
            if (toArray.includes(elem)) {
                return true;
            } else { // если найдена уникальная точка
                if (!sortedCards.includes(dataCards[ind])) { // и она не была найдена ранее
                    sortedCards.push(dataCards[ind]); // добавляем ее в массив
                    }   
                toArray.splice(ind, 1); // удаление элемента по индексу из старого массива, чтобы снова на нее не наткнуться
                return false;
            };
        });
    };    
   
    return console.log(sortedCards);
}

sortCards(dataCards);