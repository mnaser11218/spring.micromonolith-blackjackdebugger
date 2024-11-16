// the purpose of this class is to encapsulate data about the `Player`
class BlackJackPlayerState {
    // a blackjack player should receive a name when created
    // a black jack player's hand is empty until receiving cards from a dealer
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    // add card to hand
    hit(deck) {
        const incomingCard = deck.removeAndFetchTopMostCard();
        this.addCard(incomingCard);
    }
    getCards(){
   return this.cards;
   //return "get cards method"
    }
    
    addCard(cardToAddToHand) {
        this.cards.push(cardToAddToHand);
    }

    getHandTotal() {
        let total = 0;
        this.cards.forEach(currentCard=> {
            let currentCardValue = currentCard.getValue();
            total += currentCardValue
        })
        return total;
    }

    toString() {
        return JSON.stringify(this);
    }
}