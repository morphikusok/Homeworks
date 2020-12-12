class GameOfWords {
  constructor() {
    this.words = [];
    this.gameOver = Boolean;
  }
  
  play(word) {
    // здесь обрезал пробелы с концов, перевел в нижний регистр и разбил строку через пробел или запятую
    // если строка содержит пробел или запятую, то делаю проверку на количество элементов массива. Плюс проверка использовалось ли слово раньше
    if (word.trim().split(/,| /).length > 1 || JSON.stringify(this.words).toLowerCase().includes(word.toLowerCase())) {
      this.gameOver = true;
      return 'Game over';
    }
    // проверка на соответствие последней буквы
    if (this.words.length > 0) {
      let test = JSON.stringify(this.words[this.words.length - 1].toLowerCase());
        if (test.substring(test.length - 2, test.length - 1) !== word.toLowerCase().substring(0, 1)) {
          this.gameOver = true;
          return 'Game over';
        }
    }

    this.words = [...this.words, word];
    return this.words;
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
console.log(ng.restart())