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
            if( !this.blackJackGameData.isCurrentPlayerDealer()||(this.blackJackGameData.isCurrentPlayerDealer() && this.blackJackGameData.getCurrentPlayer().getHandTotal() <=16)) {
            this.blackJackGameData.hit();
            }
              this.blackJackGameDataView.updatePoints();
              this.blackJackGameDataView.setNumberOfCardsOnScreen();
            this.blackJackGameDataView.checkAndUpdateWinner();
          this.blackJackGameDataView.setActiveOnCurrentPlayer();

    }

    stay() {
        // if the current player is the dealer

//        console.log("inside stay method " + this.blackJackGameData.isCurrentPlayerDealer())
//        if(this.blackJackGameData.isCurrentPlayerDealer() && this.blackJackGameData.getPlayer().getHandTotal() >=17) {
//
//        } else {
            // switch current player to next player
            this.blackJackGameDataView.removeActiveOnCurrentPlayer();
            this.blackJackGameData.setCurrentPlayer();

        this.blackJackGameDataView.setActiveOnCurrentPlayer();
    }
}