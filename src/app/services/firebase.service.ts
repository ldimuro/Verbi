import { Injectable } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, child, push, update, set, get } from "firebase/database";
import { UserData } from '../app.model';

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

  constructor() { }

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

  async updateUserData(userData: UserData) {;
    // Get a key for a new Post.
    const newPostKey = push(child(ref(this.database), `users`)).key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates['/users/' + userData.id + newPostKey] = userData;

    return update(ref(this.database), updates);
  }

}
