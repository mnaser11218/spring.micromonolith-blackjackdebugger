// the purpose of this class is to encapsulate data about the `Game`
class BlackJackGameState {
    constructor() {
        this.player = new BlackJackPlayer("Leon");
        this.dealer = new BlackJackPlayer("Dealer");
        this.players = [this.player, this.dealer];
        this.currentPlayer = this.player;
        this.deck = new Deck();
        this.deck.shuffle();
    }

    isCurrentPlayerDealer() {
        return this.currentPlayer == this.dealer;
    }

    getDealer() {
        return this.dealer;
    }

    getPlayers() {
        return this.players;
    }
    
    getPlayer() {
        return this.player;
    }

    getDeck() {
        return this.deck;
    }

    getCurrentPlayer() {
        return this.currentPlayer;
    }
 setCurrentPlayer() {
        // switch current player to next player
        if(this.currentPlayer == this.player) {
            this.currentPlayer = this.dealer;
        } else {
            this.currentPlayer = this.player;
        }
    }
    
    hit() {
        // pop a card from the this.deck to the current player
        // check if current player new points are over 21
//        if(this.currentPlayer == this.dealer && this.currentPlayer.getHandTotal() >= 17){
//            this.setCurrentPlayer()
//        }else{
             const currentPlayer = this.getCurrentPlayer();
             const topMostCard = this.getDeck().removeAndFetchTopMostCard();
          currentPlayer.addCard(topMostCard);

    }



    play() {
        const deck = this.deck;

        this.dealer.hit(deck);
        this.dealer.hit(deck);
        this.player.hit(deck);
        this.player.hit(deck);
    }

    toString() {
        return JSON.stringify(this);
    }
}

