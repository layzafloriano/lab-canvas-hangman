class HangmanCanvas {
  constructor(secretWord) {
    this.secretWord = secretWord;
    this.ctx = document.getElementById("hangman").getContext("2d");
  }

  createBoard() {
    this.ctx.clearRect(0,0,850,1250);
  }

  drawLines(pi) {
    let x1 = 400;
    let x2 = 450;
    let y = 700;
    for (let i = 0; i < pi.length; i += 1) {
      this.ctx.beginPath();
      this.ctx.moveTo(x1, y);
      this.ctx.lineTo(x2, y);
      this.ctx.stroke();
      x1 = x1 + 60;
      x2 = x1 + 50;
    }
  }

  writeCorrectLetter(index) {
    this.ctx.fillText(this.secretWord[index], 400 , 700);
  }

  writeWrongLetter(letter, errorsLeft) {}

  drawHangman(shape) {}

  gameOver() {}

  winner() {}
}

const test = new HangmanCanvas("secret");
