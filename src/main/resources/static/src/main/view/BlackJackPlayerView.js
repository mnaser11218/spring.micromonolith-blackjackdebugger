// the purpose of this class is to manipulate the DOM by evaluating the `Player` state
class BlackJackPlayerView {
    constructor(player) {
        this.playerData = player;
    }

    viewHand() {
        console.log("Printing the hand of player [" + this.name + "]");
        this.playerData.cards.forEach(card => {
            console.log("\t" + card.toString());
        });
       // return this.playerData.cards;
    }

    getHandWebElement() {
        const playerName = this.playerData.name;
        const playerHandId = "hand_" + playerName;
        const playerHandElement = document.getElementById(playerHandId);
        return playerHandElement;
    }

    clearHand() {
        this.getHandWebElement().innerHTML = "";
    }

    renderHand() {
        this.playerData.cards.forEach(card => {
            const cardElement = document.createElement("div");
            cardElement.className = "card";
            cardElement.innerHTML = card.getValue() + "<br/>" + card.getIcon();
            this.getHandWebElement().appendChild(cardElement);
        });
    }    
}