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
   
    return sortedCards;
}

export { sortCards } ;