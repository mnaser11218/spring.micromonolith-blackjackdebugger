// the purpose of this class is to mediate the behaviors of `GameData` and `GameView`
class BlackJackGame {
    startblackjack() {        
        this.blackJackGameData = new BlackJackGameStateLogger();
        this.blackJackGameDataView = new BlackJackGameView(this.blackJackGameData);

        this.blackJackGameDataView.createPlayersView();
        this.blackJackGameData.play();        
        this.blackJackGameDataView.clearGameOptions();
        this.blackJackGameDataView.setNumberOfCardsOnScreen();
        this.blackJackGameDataView.setActiveOnCurrentPlayer();
    }

    hit() {
        this.blackJackGameData.hit();
        this.blackJackGameDataView.updatePoints();
        this.blackJackGameDataView.setNumberOfCardsOnScreen();
        this.blackJackGameDataView.checkAndUpdateWinner();
        this.blackJackGameDataView.setActiveOnCurrentPlayer();
    }

    stay() {
        // if the current player is the dealer
        if(this.blackJackGameData.isCurrentPlayerDealer()) {            
            this.blackJackGameDataView.endGame();
        } else { 
            // switch current player to next player
            this.blackJackGameDataView.removeActiveOnCurrentPlayer();
            this.blackJackGameData.setCurrentPlayer();
        }
        this.blackJackGameDataView.setActiveOnCurrentPlayer();
    }
}