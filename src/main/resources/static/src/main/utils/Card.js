class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit.toLowerCase();
    }

    getIcon() {
        if(this.suit == "hearts") {
            return "♥"
        } else if(this.suit == "diamonds") {
            return "♢";
        } else if(this.suit == "clubs") {
            return "♧"
        } else if(this.suit == "spades") {
            return "♠";
        }
    }

    // all card's secondary value is equal to their primary value, except the `ace` card
    getValue() {
        if(this.rank == "king") {
            return 10;
        } else if(this.rank == "queen") {
            return 10;
        } else if(this.rank == "jack") {
            return 10;
        } else if(this.rank == "ace") {
            return 11;
        } else {
            return this.rank;
        }
    }

    toString() {
        return this.getValue() + " of " + this.getIcon();
    }
}