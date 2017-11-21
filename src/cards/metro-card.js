import Card from './card';

export default class MetroCard extends Card {
    constructor(from,to) {
        super(from, to);
        this.type = 'metro';
    }
}