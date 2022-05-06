import { Injectable } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, child, push, update, set, get } from "firebase/database";
import { GameData, TodaysGameData, UserData } from '../app.model';
import { AppService } from './app.service';

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
    private appSvc: AppService
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
      games_played: 0,
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
      games_played: userData.games_played,
      total_points_scored: userData.total_points_scored,
      average_score_per_game: userData.average_score_per_game
    });
  }

  async updateGameLog(game_data: GameData) {
    // Add Game Data to Game Log
    let randomID = this.appSvc.generateRandomID();
    set(ref(this.database, `/games_played/${game_data.timestamp.split(' ')[0]}/game_${randomID}`), {
      id: game_data.id,
      timestamp: game_data.timestamp,
      score: game_data.score,
      correct_words: game_data.correct_words
    });

    // Update TodaysGameData
    let todays_game_data: TodaysGameData = await this.getTodaysGamesData();
    todays_game_data.games_played_num += 1;
    todays_game_data.total_points_scored += game_data.score;
    todays_game_data.average_score = Number((Math.round((todays_game_data.total_points_scored / todays_game_data.games_played_num) * 100) / 100).toFixed(2));;

    await set(ref(this.database, '/todays_game_data/'), {
      today_word: todays_game_data.today_word,
      games_played_num: todays_game_data.games_played_num,
      total_points_scored: todays_game_data.total_points_scored,
      average_score: todays_game_data.average_score
    });
  }

  async getTodaysGamesData() {
    const dbRef = ref(this.database);
    let todays_game_data: UserData;

    await get(child(dbRef, `/todays_game_data/`)).then((snapshot) => {
      if (snapshot.exists()) {
        todays_game_data = snapshot.val();
      } else {
        todays_game_data = null;
      }
    }).catch((error) => {
      console.error(error);
      return error;
    });

    return todays_game_data;
  }

}
