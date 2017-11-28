const sortCard = (card, args) => {
    switch (card.type) {
        case 'bus':
            [card.busNumber, card.comment] = [args[3], args[4] || ''];
            card.description = 'Take a bus №' + card.busNumber + ' from ' + card.from + ' to ' + card.to + '.' + card.comment; 
            break;
        case 'airline':
            [card.flightName, card.gate, card.boardingZone, card.seat, card.comment] = [args[3], args[4], args[5], args[6], args[7] || ''];
            card.description = 'Take a flight ' + card.flightName + ' from ' + card.from + ' to ' + card.to + '. ' +
                'Gate ' + card.gate + '. ' +
                'Boarding zone ' + card.boardingZone + '. ' +
                'Seat ' + card.seat + '. ' +
                card.comment;  
            break;
        case 'metro':
            card.comment = args[3] || '';
            card.description = 'Take a metro train from station "' + card.from + '" to station "' + card.to + '". ' + card.comment;
            break;
        case 'train':
            [card.trainNumber, card.seatNumber, card.carriageNumber, card.comment] = [args[3], args[4], args[5], args[6] || ''];
            card.description = 'Take a train ' + card.trainNumber + ' from ' + card.from + ' to ' + card.to + '. ' +
                'Seat ' + card.seatNumber + '. ' +
                'Carriage number ' + card.carriageNumber + '. ' +
                card.comment;   
            break;
    }
    return card;
}

export default class Card {
    constructor(args) {
        [this.type, this.from, this.to] = [args[0], args[1], args[2]];
        sortCard(this, args);
    }
}