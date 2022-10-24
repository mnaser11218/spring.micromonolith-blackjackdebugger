class Deck {
    
    // upon construction, create 52 cards: 13 ranks x 4 suits
    constructor() {        
        const suits = ["hearts", "diamonds", "spades", "clubs"]
        const ranks =  ["ace",2,3,4,5,6,7,8,9,10,"jack","queen","king"]
        this.cards = []
        suits.forEach(suit => {
            ranks.forEach(rank => {
                const newCardObject = new Card(rank, suit);
                this.cards.push(newCardObject);
            });
        });
    }

    // simulates getting a card from the deck
    removeAndFetchTopMostCard() {
        const topMostCard = this.cards.pop();
        return topMostCard;
    }
    
    // simulates shuffling a deck
    shuffle() {
        for (let currentIndex = this.cards.length - 1; currentIndex > 1; currentIndex--) {
            const randomIndex = Math.floor(Math.random() * currentIndex);
            const currentCard = this.cards[currentIndex];
            this.cards[currentIndex]  = this.cards[randomIndex];
            this.cards[randomIndex] = currentCard;
          }
    }

    toString() {
        return JSON.stringify(this);
    }
}