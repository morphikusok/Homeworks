class GameOfWords {
  constructor() {
    this.words = [];
    this.gameOver = false;
  }

  play(word) {
    if (!this.gameOver) {
      // здесь обрезал пробелы с концо и разбил строку через пробел или запятую
      // если строка содержит пробел или запятую, то делаю проверку на количество элементов массива. Плюс проверка использовалось ли слово раньше
      if (word.trim().split(/,| /).length > 1 || JSON.stringify(this.words).toLowerCase().includes(word.toLowerCase())) {
        this.gameOver = true;
        return 'Game over';
      }
      // проверка на соответствие последней буквы
      if (this.words.length > 0) {
        const lastWord = JSON.stringify(this.words[this.words.length - 1].toLowerCase());
        if (lastWord.substring(lastWord.length - 2, lastWord.length - 1) !== word.toLowerCase().substring(0, 1)) {
          this.gameOver = true;
          return 'Game over';
        }
      }

      this.words = [...this.words, word];
      return this.words;
    }
    return 'Game is over. You must to restart game.'
  }

  restart() {
    this.words = [];
    this.gameOver = false;
    return 'Game restarted';
  }
}

const ng = new GameOfWords();
console.log(ng.play('Booss'));
console.log(ng.play('Supra'));
console.log(ng.restart());
console.log(ng.play('Supra'));
