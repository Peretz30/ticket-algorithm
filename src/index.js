import cardsList from './pre-proc-data'

const dataCards = [ 
    ['train', 'Bologna Centrale', 'Firenze S.M.N.', 587, '56b', 4],
    ['train', 'Firenze S.M.N.', 'Pisa Centrale', 'R 3163', '21c', 9, '(конец пути)'],
    ['airline', 'Moscow Sheremetyevo (SVO)', 'Bologna (BLQ)', 'DL31', 'A22', 'D3', '24C'],
    ['bus', 'Bologna (BLQ)', 'Bologna Centrale', 'Aerobus'],
    ['metro', 'Teatralnaya', 'Belorussky Station', 'Последний вагон. (начало пути)'],
    ['bus', 'Belorussky Station', 'Moscow Sheremetyevo (SVO)', 851],
   ];
/*
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

    // начало сортировки
    const sortedCards = [];
    for (let i = 0; i < dataCards.length;i++) {
        fromArray.filter((elem, ind, arr) => { 
            if (toArray.includes(elem)) {
                return true;
            } else {
                if (!sortedCards.includes(elem)) {
                    sortedCards.push(elem);
                    }   
                toArray.splice(ind, 1); // удаление элемента по индексу из массива toArray
                return false;
            };
        });
    };    
    /*
    const beginIndex = fromArray.reduce((acc, elem, ind, arr) => { // находим начало путешествия в виде номера индекса элемента массива
        
        if (!toArray.includes(elem)) acc = ind; // ищем точку отправления, которой нет среди точек прибытия и запоминаем ее индекс. Это и будет начало пути.
        return acc;
    }, 0);

    */
    const endIndex = toArray.reduce((acc, elem, ind, arr) => { // находим конец путешествия в виде номера индекса элемента массива
        if (!fromArray.includes(elem)) acc = ind; // ищем точку прибытия, которой нет среди точек отправления и запоминаем ее индекс. Это и будет конец пути.
        return acc;
    }, 0);


    /*
    const buildPath = (beginIndex,endIndex,dataCards) => {
        dataCards.reduce((acc, elem, ind, arr) => {
            const firstDestination;
            if (ind === beginIndex) {
                acc.push(elem);
                firstDestination = elem[2];
            }
            if (elem[1] === firstDestination) acc.push(elem); // следующий элемент
        }, []);
    }
    */
    return console.log(sortedCards);
}

sortCards(dataCards);