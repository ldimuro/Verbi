import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllTimeGameData, Cell, GameData, Letter, PercentileData, TodaysGameData, UserData } from './app.model';
import { DatePipe } from '@angular/common';
import { FirebaseService } from './services/firebase.service';
import { AppService } from './services/app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'take5';

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    try {
      if (event.key) {
        let entered_key = event.key.toUpperCase();

        if (this.keyboard_enabled) { // If user is in letter selection mode
          if (this.used_letters.findIndex(letter => letter.name === entered_key) === -1) {
            this.keyboardClicked(event.key.toUpperCase());
          }
        }
        else { // If user is in word construction mode
          if ((entered_key === 'BACKSPACE' || entered_key === 'ENTER') && !this.you_lose_open) {
            this.controlClicked(entered_key);
          }

          let letter_index = this.user_letters.findIndex(letter => letter.value === entered_key && letter.enabled);
          if (letter_index > -1 && this.user_letters[letter_index].enabled) {
            this.userLetterClicked(letter_index);
          }
        }
      }
    }
    catch (ex) { }
  }

  constructor(
    private httpClient: HttpClient,
    private datepipe: DatePipe,
    private firebaseSvc: FirebaseService,
    private appSvc: AppService,
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
  point5_color = '#700e01';
  point10_color = '#240000';

  keyboard_opacity = '1.0'; // 0.5
  key_used = '#8a8a8a';
  key_free = '#e0e0e0';
  key_opacity_free = '1.0';
  key_opacity_used = '0.0'; // 0.18
  keyboard_enabled = false;
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
  game_over_correct_words_formatted = '';

  console_text = 'placeholder';
  console_text_hidden = true;

  copied_to_clipboard = 'Copied results to clipboard';
  copied_to_clipboard_hidden = true;

  show_keyboard = true;
  letter_selected = false;
  selected_cell;

  stats_modal_open = false;
  tutorial_modal_open = false;
  contact_modal_open = false;
  you_lose_open = false;
  you_win_open = false;
  words_modal_open = false;
  giveup_modal_open = false;

  tutorial_step_num = 1;
  stats_step_num = 1;

  // USER LocalStorage data
  userID_LocalStorage;
  user: UserData;
  played_before;

  // Today's Game Data
  todays_game_data: TodaysGameData;

  // All Time Game Data
  all_time_data: AllTimeGameData;

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

  updatedTodaysGameDataObservable$: Subscription;
  logError$: Subscription;
  errors = [];

  isMobile;


  async ngOnInit() {

    // Check to see if device is mobile
    this.isMobile = this.appSvc.isMobile();
    console.log('isMobile: ' + this.isMobile);

    // Initialize Firebase
    await this.firebaseSvc.initializeApp();

    this.httpClient.get('/assets/word_list.txt', { responseType: 'text' })
      .subscribe(data => {
        if (data) {
          this.word_list = data.split('\n');
          // this.initial_word_list = this.word_list;
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


    // Check to see if today's day is present in the "daily_game_data" tree,
    // and if it isn't, get new random word and create new "[insert data]_game_data" object
    // and post to Firebase.
    let now = new Date();
    let now_str = this.datepipe.transform(now, 'yyyy-MM-dd');
    this.todays_game_data = await this.firebaseSvc.getTodaysGameData(now_str);
    this.all_time_data = await this.firebaseSvc.getAllTimeData();

    // Create new object in "daily_game_data" in Firebase
    if (!this.todays_game_data) {
      console.log('NEW DAY');
      await this.firebaseSvc.postNewDayGameData(now_str, this.chooseRandomWord());
      this.todays_game_data = await this.firebaseSvc.getTodaysGameData(now_str);
    }

    // Update Today's Game Data subscription
    if (this.appSvc.updatedTodaysGameData) {
      this.updatedTodaysGameDataObservable$ = this.appSvc.updatedTodaysGameData.subscribe((data) => {
        this.todays_game_data = data;

        // Sort raw_scores to get the high score
        if (this.todays_game_data.raw_scores) {
          let sorted_scores = this.todays_game_data.raw_scores.sort(((a, b) => {
            return a - b;
          }));
          this.todays_game_data.high_score = sorted_scores[this.todays_game_data.raw_scores.length - 1];
        }
        else {
          this.todays_game_data.high_score = '-';
        }
      })
    }

    this.initialize();
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
    this.played_before = JSON.parse(window.localStorage.getItem('played_before'));

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

    // If User has never played before, automatically open Tutorial
    if (!this.played_before) {
      window.localStorage.setItem('played_before', 'true');
      this.tutorialModal(true);
    }

  }


  cellClicked(index: any) {
    this.selected_cell = index;
    this.keyboard_opacity = '1.0';
    this.keyboard_enabled = true;
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
    this.keyboard_enabled = false;
    this.letter_selected = true;

    this.used_letters.push(char);

    // Hide keyboard letter
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
    if (control === 'BACKSPACE' && this.cells[0].value !== '') {
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
    else if (control === 'ENTER' && this.cells[4].value !== '') {
      let submitted_word = '';
      this.cells.forEach(cell => {
        submitted_word += cell.value;
      });

      this.submitGuess(submitted_word);
    }
    else if (control === 'GO-BACK') {
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
    this.console_text_hidden = true;
    this.copied_to_clipboard_hidden = true;
    this.current_word = new_word;
    // this.keyboard_opacity = this.keyboard_opacity;
    this.errors = this.appSvc.setErrors('');

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
      this.game_over_correct_words_formatted = '';
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
    let random_word;
    let vowel_count;

    // Keep choosing a new word until its score is <= 13 points and doesn't have more than 2 vowels
    do {
      random_word = this.initial_word_list[Math.floor(Math.random() * this.initial_word_list.length)];

      // If there are 3+ vowels in the word, re-pick random word
      let vowels = ['A', 'E', 'I', 'O', 'U'];
      vowel_count = 0;
      for (let i = 0; i < random_word.length; i++) {
        if (vowels.includes(random_word.charAt(i))) {
          vowel_count++;
        }
      }

    } while (this.calculateScore(random_word) > 13 || vowel_count >= 3);

    return random_word;
    // return this.initial_word_list[Math.floor(Math.random() * this.initial_word_list.length)];
    // return 'TAKES';
    // return 'LCHFZ';
    // return 'WITCH';
    // return 'ZACUH';
    // return 'PAZZY'
  }

  async submitGuess(word: string, autoguess?: boolean) {
    if (this.correct_words.includes(word) || word === this.starting_word) {

      this.console_text = 'Word already guessed';
      this.console_text_hidden = false;

      // document.getElementById(`console`).classList.add('console_animation_in');
      // document.getElementById(`console`).classList.remove('console_animation_out');

      // await this.delay(2000);

      // document.getElementById(`console`).classList.remove('console_animation_in');
      // document.getElementById(`console`).classList.add('console_animation_out');

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
      this.game_over_correct_words = this.correct_words;
      for (let i in this.game_over_correct_words) {
        this.game_over_correct_words_formatted += this.game_over_correct_words[i];
        this.game_over_correct_words_formatted += ' ';
      }

      this.keyboard_enabled = false;

      this.youLose(true, word);
      return false;
    }
  }

  async successfulGuess(word: string) {
    this.correct_words.push(word);
    this.current_word = word;
    let points = this.calculateScore(word);
    const placeholder_score = this.total_score;
    const total_score_temp = this.total_score += points;

    // Check to see if submitted word has a higher score than the user's record
    let highest_word_updated = false;
    if (points > this.user.highest_scoring_word.score) {
      this.user.highest_scoring_word.word = word;
      this.user.highest_scoring_word.score = points;
      highest_word_updated = true;
    }

    // Check to see if total score is higher than the user's high score
    let high_score_updated = false;
    if (total_score_temp > this.user.high_score) {
      this.user.high_score = total_score_temp;
      high_score_updated = true;
    }

    if (highest_word_updated || high_score_updated) {
      // this.firebaseSvc.updateUserData(this.user);
      // this.user = await this.firebaseSvc.getUserData(this.userID_LocalStorage);

      // If user beats their own record/scores a new highest scoring word, save it to LocalStorage and apply it to Firebase at the end of the game
      window.localStorage.setItem('updated_user_highs', JSON.stringify(this.user));
    }

    this.reset(word, false, true);

    // ANIMATE SCORE GOING UP
    this.total_score = placeholder_score;
    for (let i = 0; i < points; i++) {
      this.total_score++;
      await this.delay(70);
    }

    // If user enters the 26th letter, show You Win screen
    let letters_remaining = 26 - this.used_letters.length;
    if (letters_remaining === 0) {
      this.youWin(true, true);
    }
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

  async tutorialModal(open: boolean) {
    if (open) {
      this.tutorial_modal_open = true;
      // document.getElementById(`app`).classList.add('blur-background_in');
      // document.getElementById(`app`).classList.remove('blur-background_out');

      // let tutorial_modal = document.getElementById('tutorial_modal');
      // tutorial_modal.classList.add('modal_fadein');
      // tutorial_modal.classList.add('modal_appear');
      // tutorial_modal.classList.remove('modal_fadeout');
    }
    else {
      // document.getElementById(`app`).classList.remove('blur-background_in');
      // document.getElementById(`app`).classList.add('blur-background_out');

      // let tutorial_modal = document.getElementById('tutorial_modal');
      // tutorial_modal.classList.remove('modal_fadein');
      // tutorial_modal.classList.remove('modal_appear');
      // tutorial_modal.classList.add('modal_fadeout');

      // Give time for blur_out animation to perform
      // await this.delay(200);

      this.tutorial_modal_open = false;
      this.tutorial_step_num = 1;
    }
  }

  navigateTutorialModalStep(next: boolean) {
    next ? this.tutorial_step_num++ : this.tutorial_step_num--;
  }

  navigateStatsModalTabs(next: boolean) {
    next ? this.stats_step_num++ : this.stats_step_num--;
  }

  async statsModal(open: boolean) {
    if (open) {
      this.stats_modal_open = true;
      // document.getElementById(`app`).classList.add('blur-background_in');
      // document.getElementById(`app`).classList.remove('blur-background_out');

      // let stats_modal = document.getElementById('stats_modal');
      // stats_modal.classList.add('modal_fadein');
      // stats_modal.classList.add('modal_appear');
      // stats_modal.classList.remove('modal_fadeout');

      this.errors = this.appSvc.getErrors();
      console.log(this.errors);
    }
    else {
      // document.getElementById(`app`).classList.remove('blur-background_in');
      // document.getElementById(`app`).classList.add('blur-background_out');

      // let stats_modal = document.getElementById('stats_modal');
      // stats_modal.classList.remove('modal_fadein');
      // stats_modal.classList.remove('modal_appear');
      // stats_modal.classList.add('modal_fadeout');

      // Give time for blur_out animation to perform
      // await this.delay(200);

      this.stats_modal_open = false;
      this.stats_step_num = 1;
    }
  }

  async contactModal(open: boolean) {
    if (open) {
      this.contact_modal_open = true;
      // document.getElementById(`app`).classList.add('blur-background_in');
      // document.getElementById(`app`).classList.remove('blur-background_out');

      // let contact_modal = document.getElementById('contact_modal');
      // contact_modal.classList.add('modal_fadein');
      // contact_modal.classList.add('modal_appear');
      // contact_modal.classList.remove('modal_fadeout');
    }
    else {
      // document.getElementById(`app`).classList.remove('blur-background_in');
      // document.getElementById(`app`).classList.add('blur-background_out');

      // let contact_modal = document.getElementById('contact_modal');
      // contact_modal.classList.remove('modal_fadein');
      // contact_modal.classList.remove('modal_appear');
      // contact_modal.classList.add('modal_fadeout');

      // Give time for blur_out animation to perform
      // await this.delay(200);

      this.contact_modal_open = false;
    }
  }

  async wordsModal(open: boolean) {
    if (open) {
      this.words_modal_open = true;
      // document.getElementById(`app`).classList.add('blur-background_in');
      // document.getElementById(`app`).classList.remove('blur-background_out');

      // let words_modal = document.getElementById('words_modal');
      // words_modal.classList.add('modal_fadein');
      // words_modal.classList.add('modal_appear');
      // words_modal.classList.remove('modal_fadeout');
    }
    else {
      // document.getElementById(`app`).classList.remove('blur-background_in');
      // document.getElementById(`app`).classList.add('blur-background_out');

      // let words_modal = document.getElementById('words_modal');
      // words_modal.classList.remove('modal_fadein');
      // words_modal.classList.remove('modal_appear');
      // words_modal.classList.add('modal_fadeout');

      // Give time for blur_out animation to perform
      // await this.delay(200);

      let word_list = document.getElementById(`word_list`);
      word_list.scrollTop = 0;

      this.words_modal_open = false;
    }
  }

  async giveUpModal(open: boolean, give_up?: boolean) {
    if (open) {
      this.giveup_modal_open = true;
      // document.getElementById(`app`).classList.add('blur-background_in');
      // document.getElementById(`app`).classList.remove('blur-background_out');

      // let giveup_modal = document.getElementById('giveup_modal');
      // giveup_modal.classList.add('modal_fadein');
      // giveup_modal.classList.add('modal_appear');
      // giveup_modal.classList.remove('modal_fadeout');
    }
    else {
      // document.getElementById(`app`).classList.remove('blur-background_in');
      // document.getElementById(`app`).classList.add('blur-background_out');

      // let giveup_modal = document.getElementById('giveup_modal');
      // giveup_modal.classList.remove('modal_fadein');
      // giveup_modal.classList.remove('modal_appear');
      // giveup_modal.classList.add('modal_fadeout');

      // Give time for blur_out animation to perform
      // await this.delay(200);

      this.giveup_modal_open = false;

      if (give_up) {
        this.game_over_correct_words = this.correct_words;
        for (let i in this.game_over_correct_words) {
          this.game_over_correct_words_formatted += this.game_over_correct_words[i];
          this.game_over_correct_words_formatted += ' ';
        }

        this.keyboard_enabled = false;

        this.youLose(true, null);
      }
    }


    // let giveUp = confirm('Are you sure you want to give up?');
    // if (giveUp) {
    //   this.game_over_correct_words = this.correct_words;
    //   for (let i in this.game_over_correct_words) {
    //     this.game_over_correct_words_formatted += this.game_over_correct_words[i];
    //     this.game_over_correct_words_formatted += ' ';
    //   }

    //   this.keyboard_enabled = false;

    //   this.youLose(true, null);
    // }
  }

  async shareScore() {
    let copyText = `Final Score: ${this.final_score}\n${this.percentile_data.percentile_graphic}\nBetter than ${this.percentile_data.percentile}% of players`;
    
    try {
    // let newVariable: any;
    // newVariable = window.navigator;
    // if (newVariable && newVariable.share && this.isMobile) {
    //   newVariable.navigator.share({ // Brings up mobile share modal
    //     title: 'Take5',
    //     text: copyText
    //   }).then(() => {
    //     console.log(copyText);
    //   }).catch((err) => {
    //     this.appSvc.setErrors({stack: err});
    //   });
    // } else { // Copies to clipboard
    
      this.appSvc.copyTextToClipboard(copyText);

      this.copied_to_clipboard_hidden = false;
    }
    catch (ex) {
      this.appSvc.setErrors(ex);
    }
      

      // document.getElementById(`copied_to_clipboard`).classList.add('console_animation_in');
      // document.getElementById(`copied_to_clipboard`).classList.remove('console_animation_out');

      // await this.delay(2000);

      // document.getElementById(`copied_to_clipboard`).classList.remove('console_animation_in');
      // document.getElementById(`copied_to_clipboard`).classList.add('console_animation_out');
    // }
  }

  youLose(open: boolean, losing_word?: any) {
    if (open) {
      this.you_lose_open = true;
      this.final_score = this.total_score;

      if (losing_word !== null) {
        this.losing_word = `"${losing_word}" is not a word...`;
      }
      else { // user gave up
        this.losing_word = 'You Lose!'
      }

      // document.getElementById(`app`).classList.add('blur-background_in');
      // document.getElementById(`app`).classList.remove('blur-background_out');

      // let stats_modal = document.getElementById('you_lose_modal');
      // stats_modal.classList.add('modal_fadein');
      // stats_modal.classList.add('modal_appear');
      // stats_modal.classList.remove('modal_fadeout');

      this.gameOver();
    }
    else {
      this.you_lose_open = false;
      // document.getElementById(`app`).classList.remove('blur-background_in');
      // document.getElementById(`app`).classList.add('blur-background_out');

      // let stats_modal = document.getElementById('you_lose_modal');
      // stats_modal.classList.remove('modal_fadein');
      // stats_modal.classList.remove('modal_appear');
      // stats_modal.classList.add('modal_fadeout');

      let new_random_word = this.chooseRandomWord();
      this.reset(new_random_word, true, false);
    }
  }

  youWin(open: boolean, perfect_game?: boolean) {
    if (open) {
      this.you_win_open = true;
      this.final_score = this.total_score;
      this.gameOver(true);
    }
    else {
      this.you_win_open = true;
      let new_random_word = this.chooseRandomWord();
      this.reset(new_random_word, true, false);
    }
  }

  async gameOver(perfect_game?: boolean) {
    this.todays_game_data = null;

    // Add game session to LocalStorage
    let now = new Date();
    let game_data: GameData = {
      timestamp: this.datepipe.transform(now, 'yyyy-MM-dd HH:mm:ss z'),
      correct_words: this.game_over_correct_words,
      score: this.final_score,
      starting_word: this.starting_word
    }

    // If there is data in localStorage, assign it to update_user, and then clear it from localStorage
    let update_user: UserData;
    const updated_user_highs = JSON.parse(window.localStorage.getItem('updated_user_highs'));
    if (updated_user_highs) {
      update_user = updated_user_highs;
      window.localStorage.removeItem('updated_user_highs');
    }
    else {
      update_user = this.user;
    }

    update_user.total_points_scored += this.final_score;
    update_user.games_played_num = update_user.games_played_num + 1;
    update_user.average_score_per_game = Number((Math.round((update_user.total_points_scored / update_user.games_played_num) * 100) / 100).toFixed(2));

    await this.firebaseSvc.updateUserData(update_user);

    try {
      // Add User ID to the Game Data and send to Firebase
      game_data.id = this.userID_LocalStorage;
      this.appSvc.setErrors({stack: '\tBEFORE SETTING UPDATEGAMELOG'});
      await this.firebaseSvc.updateGameLog(game_data);
      this.appSvc.setErrors({stack: '\tAFTER UPDATED GAME LOG'});
    }
    catch (ex) {
      this.appSvc.setErrors({stack: ex});
    }

    // Update data for Today in "daily_game_data"
    let today = new Date();
    let today_str;
    today_str = this.datepipe.transform(today, 'yyyy-MM-dd');
    try {
      await this.firebaseSvc.setTodaysGameData(today_str, game_data);
    }
    catch (ex) {
      this.appSvc.setErrors({stack: ex});
    }
    

    // Add game session data to All Time Game Data
    const new_game_num = this.all_time_data.games_num + 1;
    const new_total_points_scored = this.all_time_data.total_points_scored + game_data.score;
    const new_average_score = Number((Math.round(((new_total_points_scored) / new_game_num) * 100) / 100).toFixed(2));

    let new_perfect_games_count;
    if (perfect_game) {
      new_perfect_games_count = this.all_time_data.perfect_game_count + 1;
    }
    else {
      new_perfect_games_count = this.all_time_data.perfect_game_count;
    }

    let new_all_time_high_score;
    if (game_data.score > this.all_time_data.all_time_high_score) {
      new_all_time_high_score = game_data.score;
    }
    else {
      new_all_time_high_score = this.all_time_data.all_time_high_score;
    }

    await this.firebaseSvc.postAllTimeData(new_game_num, new_average_score, new_total_points_scored, new_all_time_high_score, new_perfect_games_count);
    this.all_time_data = await this.firebaseSvc.getAllTimeData();

    // this.todays_game_data = await this.firebaseSvc.getTodaysGameData(this.datepipe.transform(now, 'yyyy-MM-dd'));

    // Calculate score percentile from all scores for today's word
    let sorted_raw_scores = [];
    if (this.todays_game_data.raw_scores) {
      sorted_raw_scores = this.todays_game_data.raw_scores.sort((a, b) => a - b);
    }
    this.percentile_data = this.appSvc.getPercentileData(sorted_raw_scores, this.final_score);
  }

  generateWordListData(word_list: any) {
    let total_points = 0;
    let high_scoring_words = [];
    let highest_scoring_word = '';
    let high_point_cutoff = 25;
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


