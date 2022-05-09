import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cell, GameData, Letter, PercentileData, TodaysGameData, UserData } from './app.model';
import { DatePipe } from '@angular/common';
import { FirebaseService } from './services/firebase.service';
import { AppService } from './services/app.service';

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
    private datepipe: DatePipe,
    private firebaseSvc: FirebaseService,
    private appSvc: AppService
  ) { }


  cell_color = '#f2f2f2';
  cell_color_selected = '#f2f880';
  black = '#242022';
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
    { display: 'GO BACK', id: 'goBack', color: '#ffffff' },
    { display: 'ENTER', id: 'enter', color: '#ffffff' },
    { display: 'DELETE', id: 'delete', color: '#ffffff' },
  ];

  // MULT-COLOR
  // point1_color = '#e6e0cf';
  // point2_color = '#f0d47f';
  // point3_color = '#7EBDC2';
  // point4_color = '#2d6b8c';
  // point5_color = '#c9523e';
  // point10_color = '#4d4749';

  // BLUE
  // point1_color = '#61c9ff';
  // point2_color = '#00a6fb';
  // point3_color = '#0582ca';
  // point4_color = '#006494';
  // point5_color = '#003554';
  // point10_color = '#051923';

  // RED
  // point1_color = '#ffdbd6';
  // point2_color = '#ffada3';
  // point3_color = '#f4877b';
  // point4_color = '#f27c6f';
  // point5_color = '#e02d15';
  // point10_color = '#831a0c';

  // RED (alternate)
  point1_color = '#fcd6d2';
  point2_color = '#f29c91';
  point3_color = '#de5445';
  point4_color = '#b31e0e';
  point5_color = '#8a1101';
  point10_color = '#470000';

  keyboard_opacity = '1.0'; // 0.5
  key_used = '#8a8a8a';
  key_free = '#e0e0e0';
  key_opacity_free = '1.0';
  key_opacity_used = '0.0'; // 0.18
  keyboard_top: Letter[] = [
    { name: 'Q', opacity: this.key_opacity_free, enabled: true, points: 10, row: 'top', point_color: this.point10_color, font_color: 'white' },
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

  keyboard_middle: Letter[] = [
    { name: 'A', opacity: this.key_opacity_free, enabled: true, points: 1, row: 'middle', point_color: this.point1_color, font_color: this.black },
    { name: 'S', opacity: this.key_opacity_free, enabled: true, points: 1, row: 'middle', point_color: this.point1_color, font_color: this.black },
    { name: 'D', opacity: this.key_opacity_free, enabled: true, points: 2, row: 'middle', point_color: this.point2_color, font_color: this.black },
    { name: 'F', opacity: this.key_opacity_free, enabled: true, points: 5, row: 'middle', point_color: this.point5_color, font_color: 'white' },
    { name: 'G', opacity: this.key_opacity_free, enabled: true, points: 4, row: 'middle', point_color: this.point4_color, font_color: 'white' },
    { name: 'H', opacity: this.key_opacity_free, enabled: true, points: 4, row: 'middle', point_color: this.point4_color, font_color: 'white' },
    { name: 'J', opacity: this.key_opacity_free, enabled: true, points: 10, row: 'middle', point_color: this.point10_color, font_color: 'white' },
    { name: 'K', opacity: this.key_opacity_free, enabled: true, points: 4, row: 'middle', point_color: this.point4_color, font_color: 'white' },
    { name: 'L', opacity: this.key_opacity_free, enabled: true, points: 2, row: 'middle', point_color: this.point2_color, font_color: this.black }
  ];

  keyboard_bottom: Letter[] = [
    { name: 'Z', opacity: this.key_opacity_free, enabled: true, points: 10, row: 'bottom', point_color: this.point10_color, font_color: 'white' },
    { name: 'X', opacity: this.key_opacity_free, enabled: true, points: 10, row: 'bottom', point_color: this.point10_color, font_color: 'white' },
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
  percent_difference_from_average;

  show_keyboard = true;
  letter_selected = false;
  selected_cell;

  stats_modal_open = false;
  you_lose_modal_open = false;

  // USER LocalStorage data
  userID_LocalStorage;
  user: UserData;

  // Today's Game Data
  todays_game_data: TodaysGameData;

  // PercentileData
  percentile_data: PercentileData = {
    high_score: 0,
    low_score: 0,
    mean: 0,
    median: 0,
    mode: [],
    percentile: 0,
    percentile_graphic: ''
  };


  async ngOnInit() {
    // Initialize Firebase
    await this.firebaseSvc.initializeApp();

    // (document.getElementById('textarea') as HTMLInputElement).value = 'test\ttest2\ttest3\ttest4\tetst5\ttest6\ttest7';

    this.httpClient.get('/assets/word_list.txt', { responseType: 'text' })
      .subscribe(data => {
        if (data) {
          this.word_list = data.split('\n');
          this.initial_word_list = this.word_list;
          // this.initialize();
        }
      });

    this.httpClient.get('/assets/initial_words.txt', { responseType: 'text' })
      .subscribe(data => {
        if (data) {
          this.initial_word_list = data.split('\n');
          // this.initialize();
        }
      });

    // TODO: Check to see if today's day is present in the "daily_game_data" tree,
    // and if it isn't, get new random word and create new "[insert data]_game_data" object
    // and post to Firebase.

    let now = new Date();
    let now_str = this.datepipe.transform(now, 'yyyy-MM-dd');
    let test_str = '2022-05-07';
    this.todays_game_data = await this.firebaseSvc.getTodaysGameData(now_str);
    console.log('GOT TODAY DATA');

    console.log(this.todays_game_data);

    if (!this.todays_game_data) {
      // Create new object in "daily_game_data" in Firebase
      console.log('NEW DAY');
      await this.firebaseSvc.postNewDayGameData(now_str, this.chooseRandomWord());
      this.todays_game_data = await this.firebaseSvc.getTodaysGameData(now_str);
    }

    this.initialize();





    // const you_lost_modal = document.querySelector('.you_lose_modal');
    // const stats_modal = document.querySelector('.stats_modal');
    // window.onclick = (event: any) => {
    //   // console.log(event);
    //   if (event.target !== you_lost_modal && this.you_lose_modal_open) {
    //     // console.log('CLICKED OUTSIDE YOU_LOST');
    //   }
    //   else if (event.target !== stats_modal && this.stats_modal_open) {
    //     // console.log('CLICKED OUTSIDE STATS_MODAL');
    //   }
    // }

    // console.log(modalOuter);
    // modalOuter.classList.addEventListener('click', function(event) {
    //   const isOutside = !event.target.closest('.modal-inner');
    //   if (isOutside) {
    //     closeModal();
    //   }
    // })
  }

  async initialize() {
    // const random_word: any = this.chooseRandomWord();
    const random_word: any = this.todays_game_data.today_word;

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
    this.userID_LocalStorage = JSON.parse(window.localStorage.getItem('userID_LocalStorage'));

    if (!this.userID_LocalStorage) { // If user doesn't exist, create new one
      console.log('NEW USER FOUND');
      let randomID = 'user_' + this.appSvc.generateRandomID();
      this.firebaseSvc.createNewUser(randomID);
      this.userID_LocalStorage = randomID;
      window.localStorage.setItem('userID_LocalStorage', JSON.stringify(this.userID_LocalStorage));
      window.localStorage.removeItem('user');

      this.user = await this.firebaseSvc.getUserData(this.userID_LocalStorage);

      // let new_user: UserData = {
      //   id: '1234',
      //   high_score: 312,
      //   highest_scoring_word: {
      //     word: 'ZAXES',
      //     score: 23
      //   },
      //   total_points_scored: 0,
      //   games_played: null,
      //   average_score_per_game: 0
      // };

      // window.localStorage.setItem('user', JSON.stringify(new_user));
      // this.user = new_user;
    }
    else {
      console.log('WELCOME BACK, ' + this.userID_LocalStorage);
      this.user = await this.firebaseSvc.getUserData(this.userID_LocalStorage);
      // this.getUserData(this.user);

      // console.log('REMOVED');
      // window.localStorage.removeItem('userID_LocalStorage');
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

    // if (this.word_list.includes(string)) {
    //   let submission_successful = this.submitGuess(string/*, true*/);

    //   // Show keyboard letter and remove from used_letters if auto-guess contains word that already exists
    //   if (!submission_successful) {
    //     char.opacity = this.key_opacity_free;
    //     char.enabled = true;
    //     this.used_letters.pop();
    //   }
    // }
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
    else if (control === 'goBack') {
      console.log('PREVIOUS WORD: ' + this.current_word);
      this.reset(this.current_word, false, false);

      // Reset most recently selected letter
      let most_recent_char = this.used_letters[this.used_letters.length - 1];
      most_recent_char.opacity = this.key_opacity_free;
      most_recent_char.enabled = true;
      this.used_letters.pop();
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
    // return 'LCHFZ';
    // return 'WITCH';
    // return 'ZACUH';
    // return 'PAZZY'
  }

  submitGuess(word: string, autoguess?: boolean) {
    if (this.correct_words.includes(word) || word === this.starting_word) {
      alert('Word already guessed');

      // if (autoguess) {
      //   console.log('');
      //   this.reset(this.current_word, false, false);
      // }

      return false;
    }
    else if (this.word_list.includes(word)) {
      this.successfulGuess(word);
      return true;
    }
    else {
      // alert(`\'${word}\' is not a word. You Lose!\nSCORE: ${this.total_score}`);
      this.game_over_correct_words = this.correct_words;

      this.youLoseModal(true, word);
      return false;
    }
  }

  async successfulGuess(word: string) {
    this.correct_words.push(word);
    this.current_word = word;

    let points = this.calculateScore(word);
    this.total_score += points;

    // Check to see if submitted word has a higher score than the user's record
    let highest_word_updated = false;
    if (points > this.user.highest_scoring_word.score) {
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
      // this.saveToLocalStorage(this.user);

      this.firebaseSvc.updateUserData(this.user);
      this.user = await this.firebaseSvc.getUserData(this.userID_LocalStorage);
      // this.getUserData(this.user);
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

  async statsModal(open: boolean) {
    if (open) {
      this.stats_modal_open = true;
      document.getElementById(`app`).classList.add('blur-background_in');
      document.getElementById(`app`).classList.remove('blur-background_out');

      let stats_modal = document.getElementById('stats_modal');
      stats_modal.classList.add('modal_fadein');
      stats_modal.classList.add('modal_appear');
      stats_modal.classList.remove('modal_fadeout');
    }
    else {
      document.getElementById(`app`).classList.remove('blur-background_in');
      document.getElementById(`app`).classList.add('blur-background_out');

      let stats_modal = document.getElementById('stats_modal');
      stats_modal.classList.remove('modal_fadein');
      stats_modal.classList.remove('modal_appear');
      stats_modal.classList.add('modal_fadeout');

      // Give time for blur_out animation to perform
      await this.delay(200);

      this.stats_modal_open = false;
    }
  }

  youLoseModal(open: boolean, losing_word?: any) {
    if (open) {
      this.you_lose_modal_open = true;
      this.losing_word = losing_word;
      this.final_score = this.total_score;

      document.getElementById(`app`).classList.add('blur-background_in');
      document.getElementById(`app`).classList.remove('blur-background_out');

      let stats_modal = document.getElementById('you_lose_modal');
      stats_modal.classList.add('modal_fadein');
      stats_modal.classList.add('modal_appear');
      stats_modal.classList.remove('modal_fadeout');

      this.gameOver(losing_word);
    }
    else {
      this.you_lose_modal_open = false;
      document.getElementById(`app`).classList.remove('blur-background_in');
      document.getElementById(`app`).classList.add('blur-background_out');

      let stats_modal = document.getElementById('stats_modal');
      stats_modal.classList.remove('modal_fadein');
      stats_modal.classList.remove('modal_appear');
      stats_modal.classList.add('modal_fadeout');

      let new_random_word = this.chooseRandomWord();
      this.reset(new_random_word, true, false);
    }
  }

  async gameOver(losing_word: string) {
    // await this.delay(300);

    let new_random_word = this.chooseRandomWord();

    // Add game session to LocalStorage
    let now = new Date();
    let game_data: GameData = {
      timestamp: this.datepipe.transform(now, 'yyyy-MM-dd hh:mm:ss a z'),
      correct_words: this.game_over_correct_words,
      score: this.final_score
    }

    let update_user: UserData = this.user;

    if (!update_user.games_played.length) {
      update_user.games_played = [game_data];
    }
    else {
      update_user.games_played.push(game_data);
    }

    update_user.total_points_scored += this.final_score;
    update_user.average_score_per_game = Number((Math.round((update_user.total_points_scored / update_user.games_played.length) * 100) / 100).toFixed(2));

    await this.firebaseSvc.updateUserData(update_user);

    // Add User ID to the Game Data and send to Firebase
    game_data.id = this.userID_LocalStorage;
    await this.firebaseSvc.updateGameLog(game_data);

    this.todays_game_data = await this.firebaseSvc.getTodaysGameData(this.datepipe.transform(now, 'yyyy-MM-dd'));

    // Calculate score percentile from all scores for today's word
    let sorted_raw_scores = this.todays_game_data.raw_scores.sort((a, b) => a - b);
    this.percentile_data.high_score = sorted_raw_scores[sorted_raw_scores.length - 1];
    this.percentile_data.low_score = sorted_raw_scores[0];
    this.percentile_data.mean = this.appSvc.getMean(sorted_raw_scores);
    this.percentile_data.median = this.appSvc.getMedian(sorted_raw_scores);
    this.percentile_data.mode = this.appSvc.getMode(sorted_raw_scores);
    this.percentile_data.percentile = this.appSvc.getPercentile(sorted_raw_scores, this.final_score).toFixed(2);
    this.percentile_data.percentile_graphic = this.appSvc.getPercentileGraphic(this.percentile_data.low_score, this.percentile_data.high_score, this.percentile_data.percentile);

    console.log(this.percentile_data);
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


