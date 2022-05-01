import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import * as config from './assets/word_list.txt';
// import * as words from './test.json';
// import words from '../assets/word_list.txt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'lou-game';

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key) {
      let current_letters = '';
      this.user_letters.forEach(letter => {
        current_letters += letter.value;
      });

      console.log(event.key.toUpperCase());

      console.log(current_letters);

      if (current_letters.includes(event.key.toUpperCase())) {
        this.keyboardClicked(event.key.toUpperCase());
      }
    }
  }

  constructor(
    private httpClient: HttpClient
  ) {
  }

  // TODO: EACH LETTER HAS A COLOR BASED ON ITS RARITY

  cell_color = '#ffffff';
  cell_color_selected = '#f2f880';
  black = '#4d4749';
  cells = [
    { name: "cell1", value: "", color: this.cell_color, user_letter_index: null, font_color: this.black, selected: false },
    { name: "cell2", value: "", color: this.cell_color, user_letter_index: null, font_color: this.black, selected: false },
    { name: "cell3", value: "", color: this.cell_color, user_letter_index: null, font_color: this.black, selected: false },
    { name: "cell4", value: "", color: this.cell_color, user_letter_index: null, font_color: this.black, selected: false },
    { name: "cell5", value: "", color: this.cell_color, user_letter_index: null, font_color: this.black, selected: false }
  ];

  user_letter_color = '#f0f0f0';
  user_letter_selected_color = '#d6d6d6'
  user_letters = [
    { value: "", color: this.user_letter_color, enabled: true, font_color: this.black },
    { value: "", color: this.user_letter_color, enabled: true, font_color: this.black },
    { value: "", color: this.user_letter_color, enabled: true, font_color: this.black },
    { value: "", color: this.user_letter_color, enabled: true, font_color: this.black },
    { value: "", color: this.user_letter_color, enabled: true, font_color: this.black }
  ];

  user_letter_controls = [
    { display: 'ENTER', id: 'enter', color: '#ffffff' },
    { display: 'DELETE', id: 'delete', color: '#ffffff' }
  ];

  point1_color = '#e6e0cf';
  point2_color = '#f0d47f';
  point3_color = '#7EBDC2';
  point4_color = '#2d6b8c';
  point5_color = '#c9523e';
  point10_color = '#4d4749';

  keyboard_opacity = '1.0'; // 0.5
  key_used = '#8a8a8a';
  key_free = '#e0e0e0';
  key_opacity_free = '1.0';
  key_opacity_used = '0.0'; // 0.18
  keyboard_top = [
    { name: 'Q', opacity: this.key_opacity_free, enabled: true, points: 10, row: 'top', point_color: this.point10_color, font_color: 'gold' },
    { name: 'W', opacity: this.key_opacity_free, enabled: true, points: 5, row: 'top', point_color: this.point5_color, font_color: 'white' },
    { name: 'E', opacity: this.key_opacity_free, enabled: true, points: 1, row: 'top', point_color: this.point1_color, font_color: this.black },
    { name: 'R', opacity: this.key_opacity_free, enabled: true, points: 1, row: 'top', point_color: this.point1_color, font_color: this.black },
    { name: 'T', opacity: this.key_opacity_free, enabled: true, points: 2, row: 'top', point_color: this.point2_color, font_color: this.black },
    { name: 'Y', opacity: this.key_opacity_free, enabled: true, points: 3, row: 'top', point_color: this.point3_color, font_color: 'white' },
    { name: 'U', opacity: this.key_opacity_free, enabled: true, points: 2, row: 'top', point_color: this.point2_color, font_color: this.black },
    { name: 'I', opacity: this.key_opacity_free, enabled: true, points: 1, row: 'top', point_color: this.point1_color, font_color: this.black },
    { name: 'O', opacity: this.key_opacity_free, enabled: true, points: 1, row: 'top', point_color: this.point1_color, font_color: this.black },
    { name: 'P', opacity: this.key_opacity_free, enabled: true, points: 3, row: 'top', point_color: this.point3_color, font_color: 'white' }
  ];

  keyboard_middle = [
    { name: 'A', opacity: this.key_opacity_free, enabled: true, points: 1, row: 'middle', point_color: this.point1_color, font_color: this.black },
    { name: 'S', opacity: this.key_opacity_free, enabled: true, points: 1, row: 'middle', point_color: this.point1_color, font_color: this.black },
    { name: 'D', opacity: this.key_opacity_free, enabled: true, points: 2, row: 'middle', point_color: this.point2_color, font_color: this.black },
    { name: 'F', opacity: this.key_opacity_free, enabled: true, points: 5, row: 'middle', point_color: this.point5_color, font_color: 'white' },
    { name: 'G', opacity: this.key_opacity_free, enabled: true, points: 4, row: 'middle', point_color: this.point4_color, font_color: 'white' },
    { name: 'H', opacity: this.key_opacity_free, enabled: true, points: 4, row: 'middle', point_color: this.point4_color, font_color: 'white' },
    { name: 'J', opacity: this.key_opacity_free, enabled: true, points: 10, row: 'middle', point_color: this.point10_color, font_color: 'gold' },
    { name: 'K', opacity: this.key_opacity_free, enabled: true, points: 4, row: 'middle', point_color: this.point4_color, font_color: 'white' },
    { name: 'L', opacity: this.key_opacity_free, enabled: true, points: 2, row: 'middle', point_color: this.point2_color, font_color: this.black }
  ];

  keyboard_bottom = [
    { name: 'Z', opacity: this.key_opacity_free, enabled: true, points: 10, row: 'bottom', point_color: this.point10_color, font_color: 'gold' },
    { name: 'X', opacity: this.key_opacity_free, enabled: true, points: 10, row: 'bottom', point_color: this.point10_color, font_color: 'gold' },
    { name: 'C', opacity: this.key_opacity_free, enabled: true, points: 3, row: 'bottom', point_color: this.point3_color, font_color: 'white' },
    { name: 'V', opacity: this.key_opacity_free, enabled: true, points: 5, row: 'bottom', point_color: this.point5_color, font_color: 'white' },
    { name: 'B', opacity: this.key_opacity_free, enabled: true, points: 4, row: 'bottom', point_color: this.point4_color, font_color: 'white' },
    { name: 'N', opacity: this.key_opacity_free, enabled: true, points: 2, row: 'bottom', point_color: this.point2_color, font_color: this.black },
    { name: 'M', opacity: this.key_opacity_free, enabled: true, points: 3, row: 'bottom', point_color: this.point3_color, font_color: 'white' }
  ];

  starting_word;
  word_list = [];
  initial_word_list = [];
  correct_words = [];
  used_letters = [];
  total_score = 0;
  most_recently_selected_letter_index;

  show_keyboard = true;
  letter_selected = false;
  selected_cell;

  ngOnInit() {
    this.httpClient.get('/assets/word_list.txt', { responseType: 'text' })
      .subscribe(data => {
        if (data) {
          this.word_list = data.split('\n');
          this.initial_word_list = this.word_list;
          this.initialize();
        }
      });

    // this.httpClient.get('/assets/initial_words.txt', { responseType: 'text' })
    //   .subscribe(data => {
    //     if (data) {
    //       this.initial_word_list = data.split('\n');
    //       this.initialize();
    //     }
    //   });
  }

  initialize() {
    const random_word: any = this.chooseRandomWord();
    this.starting_word = random_word;
    this.correct_words.push(this.starting_word);

    for (let i in random_word) {
      let char = this.findLetter(random_word.charAt(i));
      this.cells[i].value = random_word.charAt(i);
      this.cells[i].color = char.point_color;
      this.cells[i].font_color = char.font_color;
    }
  }

  cellClicked(index: any) {
    this.selected_cell = index;
    this.keyboard_opacity = '1.0';
    this.most_recently_selected_letter_index = index;

    let letter = this.findLetter(this.cells[this.most_recently_selected_letter_index].value);
    this.cells[index].selected = true;
    this.cells[index].color = letter.point_color;
    this.cells[index].font_color = letter.font_color;
    // this.cells[index].color = this.cell_color_selected;
    

    // Ensures only 1 cell can be selected at a time
    for (let i in this.cells) {
      if (Number(i) !== Number(index)) {
        let char = this.findLetter(this.cells[i].value);
        this.cells[i].color = char.point_color;
        this.cells[i].font_color = char.font_color;
        this.cells[i].selected = false;

        // this.cells[i].color = this.cell_color;
      }
    }
  }

  keyboardClicked(letter: any) {
    let c = this.findLetter(letter);
    this.cells[this.selected_cell].value = c.name;
    this.cells[this.selected_cell].color = c.point_color;
    this.cells[this.selected_cell].font_color = c.font_color;

    this.show_keyboard = false;
    this.letter_selected = true;

    this.used_letters.push(letter);

    let char = this.findLetter(letter);
    // char.color = this.key_used;
    char.opacity = this.key_opacity_used;
    char.enabled = false;


    this.updateUserLetters();
  }

  updateUserLetters() {
    for (let i in this.cells) {
      this.user_letters[i].value = this.cells[i].value;

      this.user_letters[i].color = this.cells[i].color;
      this.user_letters[i].font_color = this.cells[i].font_color;

      this.cells[i].value = '';
      this.cells[i].color = this.cell_color;
      this.cells[i].selected = false;
    }

    // this.user_letters[this.most_recently_selected_letter_index].color = this.cell_color_selected;
  }

  userLetterClicked(index: any) {
    for (let i in this.cells) {
      if (this.cells[i].value === '') {
        this.cells[i].value = this.user_letters[index].value;
        this.cells[i].color = this.user_letters[index].color;
        this.cells[i].font_color = this.user_letters[index].font_color;
        this.cells[i].user_letter_index = index;

        if (index === this.most_recently_selected_letter_index) {
          // this.cells[i].color = this.cell_color_selected;
        }

        break;
      }
    }

    // this.user_letters[index].color = this.user_letter_selected_color;
    this.user_letters[index].enabled = false;
  }

  controlClicked(control: any) {
    if (control === 'delete') {
      for (let i = this.cells.length - 1; i >= 0; i--) {
        if (this.cells[i].value !== '') {
          this.user_letters[this.cells[i].user_letter_index].color = this.cells[i].color;
          this.user_letters[this.cells[i].user_letter_index].font_color = this.cells[i].font_color;
          this.user_letters[this.cells[i].user_letter_index].enabled = true;
          this.cells[i].value = '';
          this.cells[i].color = this.cell_color;
          
          // this.cells[i].value = '';
          // this.user_letters[this.cells[i].user_letter_index].color = this.user_letter_color;
          // this.user_letters[this.cells[i].user_letter_index].enabled = true;
          break;
        }
      }
    }
    else if (control === 'enter') {
      let submitted_word = '';
      this.cells.forEach(cell => {
        submitted_word += cell.value;
      });

      if (this.correct_words.includes(submitted_word)) {
        alert('Word already guessed');
      }
      else if (this.word_list.includes(submitted_word)) {
        this.correct_words.push(submitted_word);

        let points = this.calculateScore(submitted_word);
        this.total_score += points;

        this.reset(submitted_word, false);
      }
      else {
        alert(`\'${submitted_word}\' is not a word. You Lose!\nSCORE: ${this.total_score}`)
        let new_random_word = this.chooseRandomWord();
        this.reset(new_random_word, true);
      }
    }
  }

  reset(new_word: string, hard_reset: boolean) {
    for (let i in this.cells) {
      let char = this.findLetter(new_word[i]);
      this.cells[i].value = char.name;
      this.cells[i].color = char.point_color;
      this.cells[i].font_color = char.font_color;
      this.cells[i].user_letter_index = null;

      // this.cells[i].value = new_word[i];
      // this.cells[i].color = this.cell_color;
      // this.cells[i].user_letter_index = null;
    }

    this.user_letters.forEach(letter => {
      letter.value = '';
      letter.color = this.user_letter_color;
      letter.enabled = true;
    });

    this.letter_selected = false;
    this.show_keyboard = true;
    this.keyboard_opacity = this.keyboard_opacity;

    if (hard_reset) {
      this.keyboard_top.forEach(key => {
        key.enabled = true;
        key.opacity = this.key_opacity_free;
        // key.color = this.findLetter(key.name).point_color;
      });

      this.keyboard_middle.forEach(key => {
        key.enabled = true;
        key.opacity = this.key_opacity_free;
        // key.color = this.findLetter(key.name).point_color;
      });

      this.keyboard_bottom.forEach(key => {
        key.enabled = true;
        key.opacity = this.key_opacity_free;
        // key.color = this.findLetter(key.name).point_color;
      });

      this.correct_words = [];
      this.starting_word = new_word;
      this.total_score = 0;
    }
  }

  calculateScore(word: string) {
    let score = 0;

    for (let i = 0; i < word.length; i++) {
      let letter = this.findLetter(word.charAt(i));
      score += letter.points;
      // console.log(word.charAt(i) + ': ' + letter.points);
    }

    return score;
  }

  chooseRandomWord() {
    return this.initial_word_list[Math.floor(Math.random() * this.initial_word_list.length)];
    // return 'SLCHF';
    // return 'WITCH';
    // return 'ZACUH';
  }

  findLetter(char: string) {
    let find_top = this.keyboard_top.find(letter => letter.name === char);
    let find_middle = this.keyboard_middle.find(letter => letter.name === char);
    let find_bottom = this.keyboard_bottom.find(letter => letter.name === char);

    if (find_top) {
      return find_top;
    }
    else if (find_middle) {
      return find_middle;
    }
    else if (find_bottom) {
      return find_bottom;
    }
  }



}


