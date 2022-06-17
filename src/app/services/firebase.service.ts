import { Injectable } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, child, push, update, set, get } from "firebase/database";
import { AllTimeGameData, GameData, TodaysGameData, UserData } from '../app.model';
import { AppService } from './app.service';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebaseConfig = {
    apiKey: "AIzaSyBcHR4Q793wDKIikhy-SPyyu-GOrDkNAuY",
    authDomain: "lou-game.firebaseapp.com",
    databaseURL: "https://lou-game-default-rtdb.firebaseio.com/",
    projectId: "lou-game",
    storageBucket: "lou-game.appspot.com",
    messagingSenderId: "923427410117",
    appId: "1:923427410117:web:2419229e6bc6951b11a0ac",
    measurementId: "G-FQX5PSV3PS"
  };

  app;
  database;

  constructor(
    private appSvc: AppService,
    private datepipe: DatePipe
  ) { }

  initializeApp() {
    // Initialize Firebase
    this.app = initializeApp(this.firebaseConfig);
    this.database = getDatabase(this.app);
  }

  getAnalytics() {
    const analytics = getAnalytics(this.app);
  }

  createNewUser(id: string) {
    set(ref(this.database, '/users/' + id), {
      id: id,
      high_score: 0,
      highest_scoring_word: {
        word: '',
        score: 0
      },
      games_played_num: 0,
      total_points_scored: 0,
      average_score_per_game: 0.00
    });
  }

  async getUserData(id: string): Promise<UserData> {
    const dbRef = ref(this.database);
    let retrieved_user: UserData;

    await get(child(dbRef, `/users/${id}`)).then((snapshot) => {
      if (snapshot.exists()) {
        retrieved_user = snapshot.val();
      } else {
        retrieved_user = null;
      }
    }).catch((error) => {
      console.error(error);
      return error;
    });
    console.log('🚨GET USER DATA🚨');

    return retrieved_user;
  }

  async updateUserData(userData: UserData) {
    set(ref(this.database, '/users/' + userData.id), {
      id: userData.id,
      high_score: userData.high_score,
      highest_scoring_word: {
        word: userData.highest_scoring_word.word,
        score: userData.highest_scoring_word.score
      },
      games_played_num: userData.games_played_num,
      total_points_scored: userData.total_points_scored,
      average_score_per_game: userData.average_score_per_game
    });
    console.log('🚨UPDATE USER DATA🚨');
  }

  async updateGameLog(game_data: GameData) {
    let timestamp = this.datepipe.transform(game_data.timestamp, 'yyyy-MM-dd HH:mm:ss z');

    // Add Game Data to Game Log
    let randomID = this.appSvc.generateRandomID();
    set(ref(this.database, `/games_played/${game_data.id}/${timestamp} GAME${randomID}`), {
      timestamp: game_data.timestamp,
      score: game_data.score,
      correct_words: game_data.correct_words,
      starting_word: game_data.starting_word
    });
    console.log('🚨UPDATE GAME LOG🚨');


    let today = new Date();
    let today_str;
    today_str = this.datepipe.transform(today, 'yyyy-MM-dd');

    // Update data for Today in "daily_game_data"
    let todays_game_data: TodaysGameData = await this.getTodaysGameData(today_str);
    todays_game_data.games_played_num += 1;
    todays_game_data.total_points_scored += game_data.score;
    todays_game_data.average_score = Number((Math.round((todays_game_data.total_points_scored / todays_game_data.games_played_num) * 100) / 100).toFixed(2));

    !todays_game_data.raw_scores ? todays_game_data.raw_scores = [game_data.score] : todays_game_data.raw_scores.push(game_data.score);

    await set(ref(this.database, `/daily_game_data/${today_str}_game_data/`), {
      today_word: todays_game_data.today_word,
      games_played_num: todays_game_data.games_played_num,
      total_points_scored: todays_game_data.total_points_scored,
      average_score: todays_game_data.average_score,
      raw_scores: todays_game_data.raw_scores
    });
    console.log('🚨UPDATE TODAYS GAME DATA🚨');


    // Emit Updated TODAYS GAME DATA back to app.component
    let updated_todays_game_data: TodaysGameData = {
      today_word: todays_game_data.today_word,
      games_played_num: todays_game_data.games_played_num,
      total_points_scored: todays_game_data.total_points_scored,
      average_score: todays_game_data.average_score,
      raw_scores: todays_game_data.raw_scores
    };

    this.appSvc.updatedTodaysGameData.emit(updated_todays_game_data);
  }

  async getTodaysGameData(todays_date) {
    const dbRef = ref(this.database);
    let todays_game_data: TodaysGameData;

    await get(child(dbRef, `/daily_game_data/${todays_date}_game_data/`)).then((snapshot) => {
      if (snapshot.exists()) {
        todays_game_data = snapshot.val();
      } else {
        todays_game_data = null;
      }
    }).catch((error) => {
      console.error(error);
      return error;
    });
    console.log('🚨GET TODAYS GAME DATA🚨');

    if (todays_game_data) {
      if (todays_game_data.raw_scores) {
        let sorted_scores = todays_game_data.raw_scores.sort(((a, b) => {
          return a - b;
        }));
        todays_game_data.high_score = sorted_scores[todays_game_data.raw_scores.length - 1];
      }
      else {
        todays_game_data.high_score = '-';
      }
    }

    return todays_game_data;
  }

  async postNewDayGameData(todays_date: string, random_word: string) {
    set(ref(this.database, `/daily_game_data/${todays_date}_game_data`), {
      today_word: random_word,
      games_played_num: 0,
      total_points_scored: 0,
      average_score: 0
    });
    console.log('🚨POST NEW DAY GAME DATA🚨');
  }

  async getAllTimeData() {
    const dbRef = ref(this.database);
    let all_time_data: AllTimeGameData;

    await get(child(dbRef, `/all_time_data/`)).then((snapshot) => {
      if (snapshot.exists()) {
        all_time_data = snapshot.val();
      } else {
        all_time_data = null;
      }
    }).catch((error) => {
      console.error(error);
      return error;
    });
    console.log('🚨GET ALL TIME GAME DATA🚨');

    return all_time_data;
  }

  async postAllTimeData(games_num: number, average_score: number, total_points_scored: number, all_time_high_score: number, perfect_game_count: number) {
    set(ref(this.database, `/all_time_data/`), {
      games_num: games_num,
      average_score: average_score,
      total_points_scored: total_points_scored,
      all_time_high_score: all_time_high_score,
      perfect_game_count: perfect_game_count
    });
    console.log('🚨POST ALL TIME GAME DATA🚨');
  }

}
