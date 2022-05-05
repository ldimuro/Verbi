import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cell, GameData, Letter, UserData } from './app.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'take5';

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
    private httpClient: HttpClient,
    private datepipe: DatePipe
  ) { }


  test = ['A', 'B', 'C']

  cell_color = '#f2f2f2';
  cell_color_selected = '#f2f880';
  black = '#4d4749';
  cells: Cell[] = [
    { name: "cell1", value: "", point_value: 0, color: this.cell_color, user_letter_index: null, font_color: this.black, selected: false },
    { name: "cell2", value: "", point_value: 0, color: this.cell_color, user_letter_index: null, font_color: this.black, selected: false },
    { name: "cell3", value: "", point_value: 0, color: this.cell_color, user_letter_index: null, font_color: this.black, selected: false },
    { name: "cell4", value: "", point_value: 0, color: this.cell_color, user_letter_index: null, font_color: this.black, selected: false },
    { name: "cell5", value: "", point_value: 0, color: this.cell_color, user_letter_index: null, font_color: this.black, selected: false }
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
  keyboard_top: Letter[] = [
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

  keyboard_middle: Letter[]  = [
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

  keyboard_bottom: Letter[]  = [
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
  current_word = '';
  losing_word = '';
  final_score;
  game_over_correct_words = [];

  show_keyboard = true;
  letter_selected = false;
  selected_cell;

  stats_modal_open = false;
  you_lose_modal_open = false;

  // USER LocalStorage data
  user: UserData;
  high_score;
  highest_scoring_word: string;
  highest_scoring_word_value: number;


  ngOnInit() {
    this.httpClient.get('/assets/word_list.txt', { responseType: 'text' })
      .subscribe(data => {
        if (data) {
          this.word_list = data.split('\n');
          this.initial_word_list = this.word_list;

          // this.generateWordListData(this.word_list);

          // this.initialize();
        }
      });

    this.httpClient.get('/assets/initial_words.txt', { responseType: 'text' })
      .subscribe(data => {
        if (data) {
          this.initial_word_list = data.split('\n');
          this.initialize();
        }
      });

    const you_lost_modal = document.querySelector('.you_lose_modal');
    const stats_modal = document.querySelector('.stats_modal');
    window.onclick = (event: any) => {
      // console.log(event);
      if (event.target !== you_lost_modal && this.you_lose_modal_open) {
        // console.log('CLICKED OUTSIDE YOU_LOST');
      }
      else if (event.target !== stats_modal && this.stats_modal_open) {
        // console.log('CLICKED OUTSIDE STATS_MODAL');
      }
    }

    // console.log(modalOuter);
    // modalOuter.classList.addEventListener('click', function(event) {
    //   const isOutside = !event.target.closest('.modal-inner');
    //   if (isOutside) {
    //     closeModal();
    //   }
    // })
  }

  initialize() {
    const random_word: any = this.chooseRandomWord();
    this.current_word = random_word;
    this.starting_word = random_word;

    // Initialize Cells for starting word
    for (let i in random_word) {
      let char = this.findLetter(random_word.charAt(i));
      this.cells[i].value = random_word.charAt(i);
      this.cells[i].color = char.point_color;
      this.cells[i].font_color = char.font_color;
      this.cells[i].point_value = char.points
    }

    // Get User Credentials
    this.user = JSON.parse(window.localStorage.getItem('user'));

    if (!this.user) { // If user doesn't exist, create new one
      console.log('NEW USER FOUND');
      let new_user: UserData = {
        id: '1234',
        high_score: 289,
        highest_scoring_word: {
          word: 'ZAXES',
          score: 23
        },
        total_points_scored: 0,
        games_played: [],
        average_score_per_game: 0
      };

      window.localStorage.setItem('user', JSON.stringify(new_user));
      this.user = new_user;
    }
    else {
      console.log(this.user);
      this.getUserData(this.user);
      // console.log('REMOVED');
      // window.localStorage.removeItem('user');
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


    // Ensures only 1 cell can be selected at a time
    for (let i in this.cells) {
      if (Number(i) !== Number(index)) {
        let char = this.findLetter(this.cells[i].value);
        this.cells[i].color = char.point_color;
        this.cells[i].font_color = char.font_color;
        this.cells[i].selected = false;
      }
    }
  }

  keyboardClicked(letter: any) {
    let char = this.findLetter(letter);
    this.cells[this.selected_cell].value = char.name;
    this.cells[this.selected_cell].color = char.point_color;
    this.cells[this.selected_cell].font_color = char.font_color;
    this.cells[this.selected_cell].point_value = char.points;

    this.show_keyboard = false;
    this.letter_selected = true;

    this.used_letters.push(char);

    // Hide keyboard letter
    char.opacity = this.key_opacity_used;
    char.enabled = false;

    // Check to see if arrangement of new letters is a word
    let string = '';
    this.cells.forEach(cell => {
      string += cell.value;
    });

    this.updateUserLetters();

    if (this.word_list.includes(string)) {
      let submission_successful = this.submitGuess(string, true);

      // Show keyboard letter and remove from used_letters if auto-guess contains word that already exists
      if (!submission_successful) {
        char.opacity = this.key_opacity_free;
        char.enabled = true;
        this.used_letters.pop();
      }
    }
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
  }

  userLetterClicked(index: any) {
    for (let i in this.cells) {
      if (this.cells[i].value === '') {
        this.cells[i].value = this.user_letters[index].value;
        this.cells[i].color = this.user_letters[index].color;
        this.cells[i].font_color = this.user_letters[index].font_color;
        this.cells[i].user_letter_index = index;

        let char = this.findLetter(this.user_letters[index].value);
        this.cells[i].point_value = char.points;

        if (index === this.most_recently_selected_letter_index) {
        }

        break;
      }
    }

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
          break;
        }
      }
    }
    else if (control === 'enter') {
      let submitted_word = '';
      this.cells.forEach(cell => {
        submitted_word += cell.value;
      });

      this.submitGuess(submitted_word);
    }
  }

  async reset(new_word: string, hard_reset: boolean, animate: boolean) {
    for (let i in this.cells) {
      let char = this.findLetter(new_word[i]);
      this.cells[i].value = char.name;
      this.cells[i].color = char.point_color;
      this.cells[i].font_color = char.font_color;
      this.cells[i].user_letter_index = null;
      this.cells[i].point_value = char.points;
    }

    this.user_letters.forEach(letter => {
      letter.value = '';
      letter.color = this.user_letter_color;
      letter.enabled = true;
    });

    this.letter_selected = false;
    this.show_keyboard = true;
    // this.keyboard_opacity = this.keyboard_opacity;

    if (hard_reset) {
      // Reset keyboard keys
      this.keyboard_top.forEach(key => {
        key.enabled = true;
        key.opacity = this.key_opacity_free;
      });

      this.keyboard_middle.forEach(key => {
        key.enabled = true;
        key.opacity = this.key_opacity_free;
      });

      this.keyboard_bottom.forEach(key => {
        key.enabled = true;
        key.opacity = this.key_opacity_free;
      });

      this.correct_words = [];
      this.used_letters = [];
      this.starting_word = new_word;
      this.total_score = 0;
    }
    
    // APPLY ANIMATIONS
    if (animate) {
      // Apply BOUNCE animation to each letter with a 0.1s delay
      for (let i = 1; i < this.cells.length + 1; i++) {
        document.getElementById(`container_cell${i}`).classList.add('bounce');
        await this.delay(50);
        document.getElementById(`point_value_cell${i}`).classList.add('point_animation');
        await this.delay(100);
      }

      // Wait for each letter to bounce (5 letters * 0.1s)
      await this.delay(300);

      // Remove BOUNCE animation from each letter
      for (let i = 1; i < this.cells.length + 1; i++) {
        document.getElementById(`container_cell${i}`).classList.remove('bounce');
      }

      await this.delay(800);

      // Remove POINT_ANIMATION from each cell
      for (let i = 1; i < this.cells.length + 1; i++) {
        document.getElementById(`point_value_cell${i}`).classList.remove('point_animation');
      }
    }
  }

  calculateScore(word: string) {
    let score = 0;

    for (let i = 0; i < word.length; i++) {
      let letter = this.findLetter(word.charAt(i));
      score += letter.points;
    }

    return score;
  }

  chooseRandomWord() {
    return this.initial_word_list[Math.floor(Math.random() * this.initial_word_list.length)];
    // return 'SLCHF';
    // return 'WITCH';
    // return 'ZACUH';
  }

  submitGuess(word: string, autoguess?: boolean) {
    if (this.correct_words.includes(word) || word === this.starting_word) {
      alert('Word already guessed');

      if (autoguess) {
        this.reset(this.current_word, false, false);
      }

      return false;
    }
    else if (this.word_list.includes(word)) {
      this.successfulGuess(word);
      return true;
    }
    else {
      // alert(`\'${word}\' is not a word. You Lose!\nSCORE: ${this.total_score}`);
      this.game_over_correct_words = this.correct_words;

      this.gameOver(word);
      return false;
    }
  }

  successfulGuess(word: string) {
    this.correct_words.push(word);
    this.current_word = word;

    let points = this.calculateScore(word);
    this.total_score += points;

    // Check to see if submitted word has a higher score than the user's record
    let highest_word_updated = false;
    if (points > this.highest_scoring_word_value) {
      this.user.highest_scoring_word.word = word;
      this.user.highest_scoring_word.score = points;
      highest_word_updated = true;
    }

    // Check to see if total score is higher than the user's high score
    let high_score_updated = false;
    if (this.total_score > this.user.high_score) {
      this.user.high_score = this.total_score;
      high_score_updated = true;
    }

    if (highest_word_updated || high_score_updated) {
      this.saveToLocalStorage(this.user);
    }

    this.reset(word, false, true);
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

  youLoseModal(open: boolean, losing_word?: any) {
    if (open) {
      this.you_lose_modal_open = true;
      this.losing_word = losing_word;
      this.final_score = this.total_score;
      document.getElementById(`app`).classList.add('blur-background');
    }
    else {
      this.you_lose_modal_open = false;
      document.getElementById(`app`).classList.remove('blur-background');
    }
  }

  statsModal(open: boolean) {
    if (open) {
      this.stats_modal_open = true;
      document.getElementById(`app`).classList.add('blur-background');
      // console.log(document.getElementById('stats_modal'));
      // document.getElementById('stats_modal').classList.add('fadein');
    }
    else {
      this.stats_modal_open = false;
      document.getElementById(`app`).classList.remove('blur-background');
      // document.getElementsByClassName(`stats_modal`)[0].classList.remove('fadein');
    }
  }

  gameOver(losing_word: string) {
    this.youLoseModal(true, losing_word);
    let new_random_word = this.chooseRandomWord();

    // Add game session to LocalStorage
    let now = new Date();
    let game_data: GameData = {
      timestamp: this.datepipe.transform(now, 'yyyy-MM-dd hh:mm:ss a z'),
      correct_words: this.game_over_correct_words,
      score: this.final_score
    }

    let update_user: UserData = this.user;
    update_user.games_played.push(game_data);
    update_user.total_points_scored += this.final_score;
    update_user.average_score_per_game = Number((Math.round((update_user.total_points_scored / update_user.games_played.length) * 100) / 100).toFixed(2));
    this.saveToLocalStorage(update_user);

    this.reset(new_random_word, true, false);
  }

  saveToLocalStorage(user: any) {
    console.log('SAVED DATA TO LOCAL STORAGE', user);
    window.localStorage.setItem('user', JSON.stringify(user));

    this.getUserData(user);
  }

  getUserData(user: any) {
    this.user = user;
    this.high_score = user.high_score;
    this.highest_scoring_word = user.highest_scoring_word.word;
    this.highest_scoring_word_value = user.highest_scoring_word.score;
  }

  generateWordListData(word_list: any) {
    let total_points = 0;
    let high_scoring_words = [];
    let highest_scoring_word = '';
    let high_point_cutoff = 18;
    word_list.forEach(word => {
      let score = this.calculateScore(word)
      total_points += score;

      // Find highest scoring word
      if (score > this.calculateScore(highest_scoring_word)) {
        highest_scoring_word = word;
      }

      // Collect words whose score is above high_point_cutoff
      if (score > high_point_cutoff) {
        high_scoring_words.push(word);
      }
    });

    console.log(`Average word score: ${(Math.round((total_points / word_list.length) * 100) / 100).toFixed(2)} points`);
    console.log(`Words with ${high_point_cutoff}+ points: ${high_scoring_words.sort()}`);
    console.log(`Highest scoring word: "${highest_scoring_word}" - ${this.calculateScore(highest_scoring_word)} points`);
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }



}


