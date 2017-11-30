const { sortCards,cardsArray, pathDescription } = require('./../src/sort');

test('Сортировка', () => {
  const dataCards = [ 
    ['train', 'Bologna Centrale', 'Firenze S.M.N.', '№587', '56b', 4],
    ['train', 'Firenze S.M.N.', 'Pisa Centrale', 'R 3163', '21c', 9, '(End of path).'],
    ['airline', 'Moscow Sheremetyevo (SVO)', 'Bologna (BLQ)', 'DL31', 'A22', 'D3', '24C'],
    ['bus', 'Bologna (BLQ)', 'Bologna Centrale', 465],
    ['metro', 'Teatralnaya', 'Belorusskaya', 'Last carriage. (Path beginning)'],
    ['bus', 'Belorusskaya', 'Moscow Sheremetyevo (SVO)', 851],
   ];
  expect((sortCards(dataCards)===['metro', 'Teatralnaya', 'Belorusskaya', 'Last carriage. (Path beginning)'],
  ['bus', 'Belorusskaya', 'Moscow Sheremetyevo (SVO)', 851],
  ['airline', 'Moscow Sheremetyevo (SVO)', 'Bologna (BLQ)', 'DL31', 'A22', 'D3', '24C'],
  ['bus', 'Bologna (BLQ)', 'Bologna Centrale', 465],
  ['train', 'Bologna Centrale', 'Firenze S.M.N.', 587, '56b', 4],
  ['train', 'Firenze S.M.N.', 'Pisa Centrale', 'R 3163', '21c', 9, '(End of path).'])).toBeTruthy();
});
