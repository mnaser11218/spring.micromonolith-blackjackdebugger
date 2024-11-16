// the purpose of this class is to mediate the behaviors of `PlayerData` and `PlayerView`
class BlackJackPlayer {
    constructor(name) {
        this.name = name;
        this.blackJackPlayerData = new BlackJackPlayerStateLogger(name);
        this.blackJackPlayerView = new BlackJackPlayerView(this.blackJackPlayerData);
    }

    // prints the cards of the current BlackJackPlayerState
    viewHand() {
       return this.blackJackPlayerView.viewHand();
      // return "in view hand method"
    }

    // add card to hand
    hit(deck) {
        this.addCard(deck.removeAndFetchTopMostCard());
    }
    
    addCard(cardToAddToHand) {
        this.blackJackPlayerView.clearHand();    
        this.blackJackPlayerData.addCard(cardToAddToHand);
        this.blackJackPlayerView.renderHand();
    }

    getHandTotal() {
        return this.blackJackPlayerData.getHandTotal();
    }

    toString() {
        return this.blackJackPlayerData.toString();
    }
}