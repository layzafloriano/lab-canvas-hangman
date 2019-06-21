var hangman;

class Hangman {
  constructor(){
    this.words = ['teste', 'oi', 'teste 2'];
    this.secretWord = '';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
    this.canvas = new HangmanCanvas("teste");
  }

  //gera uma palavra aleatória e retorna ela
   getWord(){
     let random = Math.floor(Math.random() * this.words.length) - 1;
     return this.words[random]
   }

   // Verifica se é letra
   checkIfLetter(keyCode) {
     if((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
       return true;
     }
     return false;
   }

   //Verifica e ganhou
   checkWinner(){
     let winner = this.secretWord.toUpperCase().split('').sort().join('');
     let letters = this.guessedLetter.toUpperCase().split('').sort().join('');
     if(winner===letters){
       return true;
     }
     return false;
   }
   // Vê se a letra já foi clicada
   checkClickedLetters(key) {
     console.log(this.letters.includes(key));
      if(this.letters.includes(key)) {
        return false
      }
      this.letters.push(key);
      for(let i = 0; i < this.secretWord.length; i += 1){
        if(this.secretWord[i] === key) {
          this.addCorrectLetter(i);
        }
        else {
          this.addWrongLetter(key);
        }
      }

    

      return true
    }

    //adiciona letra  certa (recebe index)
    addCorrectLetter(letter) {
    this.guessedLetter += this.secretWord[letter].toUpperCase();
    this.canvas.writeCorrectLetter(letter);
    }

    // subtrai a "vida"
    addWrongLetter(letter) {
     this.errorsLeft -= 1; 
     this.canvas.writeWrongLetter(letter, this.errorsLeft);
    }

    // Verifica game over
    checkGameOver(){
      if(this.errorsLeft <= 0){
        return true
      }
      return false
    }
}

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {
  if(e && hangman.checkIfLetter(e.keyCode)) {
    console.log(e.keyCode, "LETRA");
  } else {
    console.log(e.keyCode, "NAO É LETRA");
  }
};
