class Shrugman {
  constructor(words, hints, topics) {
    this.words = words;
    this.hints = hints;
    this.topics = topics;
    this.isPlaying = true;
    this.guessedLetters = [];
    this.playedWords = {};
    this.emoji = "¯\\_(:/)_/¯";
    this.lives = this.emoji.length;
    this.gameStats = [];
    this.wordOptions = {};
    this.category = null;
    this.randomWord = null;
  }

  startGame(topic) {
    this.category = topic;
    this.randomWord = this.getRandomWord(topic);
    this.guessedLetters = [];
    this.lives = this.emoji.length;
  }

  getRandomWord(topic) {
    const words = this.wordOptions[topic];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex].toUpperCase();
  }

  validateLetter(input) {
    if (this.isPlaying) {
      const letter = input.toUpperCase();
      if (/[a-zA-Z]/.test(letter)) {
        if (this.randomWord.includes(letter)) {
          if (!this.guessedLetters.includes(letter)) {
            this.guessedLetters.push(letter);
          }
        } else {
          if (!this.guessedLetters.includes(letter)) {
            this.guessedLetters.push(letter);
            this.lives--;
          }
        }
      }
    }
  }

  checkWin() {
    if (this.guessedLetters.join("") === this.randomWord) {
      this.isPlaying = false;
      return true;
    }
    return false;
  }

  checkLose() {
    if (this.lives === 0) {
      this.isPlaying = false;
      return true;
    }
    return false;
  }
}
