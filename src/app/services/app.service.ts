import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  generateRandomID() {
    let S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };

    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
  }

  /**
   * 
   * FUNCTIONS FOR CALCULATING THE MOVE POTENTIALS FOR A STARTING WORD
   * @returns 
   */

  findAllPotentialOpeningMoves(word_list: any) {
    let valid_words = [];
    let myString = "ZONAL";
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'V', 'Q', 'R', 'S', 'T', 'U', 'V', 'W'];
    for (let each of alphabet) {
      for (let i = 0; i < myString.length; i++) {
        let temp = this.setCharAt(myString, i, each);
        let permutations = this.permut(temp);
        for (let p of permutations) {
          console.log(p);
          if (word_list.includes(p)) {
            valid_words.push(p);
          }
        }
      }
    }

    return valid_words;
  }

  // Find all Permutations of a string
  permut(string) {
    if (string.length < 2) return string; // This is our break condition

    var permutations = []; // This array will hold our permutations
    for (var i = 0; i < string.length; i++) {
      var char = string[i];

      // Cause we don't want any duplicates:
      if (string.indexOf(char) != i) // if char was used already
        continue; // skip it this time

      var remainingString = string.slice(0, i) + string.slice(i + 1, string.length); //Note: you can concat Strings via '+' in JS

      for (var subPermutation of this.permut(remainingString))
        permutations.push(char + subPermutation)
    }
    return permutations;
  }

  setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
  }




}
