const log = (prompt) => console.log(prompt);

// the purpose of this class is to log information about data about the `Game`
class BlackJackGameStateLogger {
    constructor() {
        this.blackJackGameData = new BlackJackGameState();
    }

    isCurrentPlayerDealer() {
        log("Checking if current player is last player.");
        const outcome = this.blackJackGameData.isCurrentPlayerDealer();

        log("Current player is " + (outcome ? "" : "not") + " last player.")
        console.log("inside iscurrent play dealer method: " + outcome)
        // return this.blackJackGameData.isCurrentPlayerDealer();
        return outcome;

    }

    getPlayer() {
        log("Player is " + this.blackJackGameData.getPlayer())
        return this.blackJackGameData.getPlayer();
    }

    getDealer() {
        log("BlackJackDealer is " + this.blackJackGameData.getDealer())
        return this.blackJackGameData.getDealer();
    }

    getPlayers() {
        log("Players are " + this.blackJackGameData.getPlayers())
        return this.blackJackGameData.getPlayers();
    }

    getDeck() {
        log("Deck is " + this.blackJackGameData.getDeck())
        return this.blackJackGameData.getDeck();
    }
    
    getCurrentPlayer() {
        log("Current player is " + this.blackJackGameData.currentPlayer)
        return this.blackJackGameData.currentPlayer;
    }

    setCurrentPlayer() {
        this.getCurrentPlayer();
        log("Setting new current player")
        this.blackJackGameData.setCurrentPlayer();
        this.getCurrentPlayer();
    }

    hit() {
    console.log("inside hit method")
        this.blackJackGameData.hit();
    }

    play() {
        console.log("inside play method")

        log("Playing initial hand")
        this.blackJackGameData.play();
        log("Initial hand played")
    }
}

