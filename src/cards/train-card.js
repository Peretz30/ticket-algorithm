import Card from './card';

export default class TrainCard extends Card {
    constructor(from, to, number, seatNumber) {
        super(from, to);
        this.type = 'train';
        this.number = number;
    }
}