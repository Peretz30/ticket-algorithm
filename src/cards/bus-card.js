import Card from './card';

export default class BusCard extends Card {
    constructor(from,to,number) {
        super(from, to);
        this.type = 'bus';
        this.number = number;
    }
}