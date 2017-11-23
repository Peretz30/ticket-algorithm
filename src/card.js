const sortCard = (card, args) => {
    switch (card.type) {
        case 'bus':
            [card.busNumber, card.comment] = [args[3], args[4] || null];
            break;
        case 'airline':
            [card.flightName, card.gate, card.boardingZone, card.seat, card.comment] = [args[3], args[4], args[5], args[6], args[7] || null];
            break;
        case 'metro':
            card.comment = args[3] || null;
            break;
        case 'train':
            [card.trainNumber, card.seatNumber, card.carriageNumber, card.comment] = [args[3], args[4], args[5], args[6] || null];
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