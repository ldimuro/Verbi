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

  getMean(scores) {
    let sum = 0;
    scores.forEach(num => {
      sum += num;
    });
    let mean = sum / scores.length;

    return mean;
  }

  getMedian(scores: any) {
    scores.sort(function (a, b) {
      return a - b;
    });

    let median;
    if (scores.length % 2 !== 0) {
      median = scores[Math.floor(scores.length / 2)];
    } else {
      var mid1 = scores[(scores.length / 2) - 1];
      var mid2 = scores[scores.length / 2];
      median = (mid1 + mid2) / 2;
    }

    return median;
  }

  getMode(scores: any) {
    let modes = [], count = [], i, number, maxIndex = 0;

    for (i = 0; i < scores.length; i += 1) {
      number = scores[i];
      count[number] = (count[number] || 0) + 1;
      if (count[number] > maxIndex) {
        maxIndex = count[number];
      }
    }

    for (i in count) {
      if (count.hasOwnProperty(i)) {
        if (count[i] === maxIndex) {
          modes.push(Number(i));
        }
      }
    }

    return modes;
  }

  getPercentile(scores: any, user_score: any) {
    return ((100 *
      scores.reduce(
        (acc, v) => acc + (v < user_score ? 1 : 0) + (v === user_score ? 0.5 : 0),
        0
      )) /
    scores.length);
  }

  getPercentileGraphic(low_score: number, high_score: number, percentile: number) {
    let graphic = low_score + ' ';
    let rounded_value = (Math.round(percentile / 10) * 10) / 10;
    let color_value;

    if (rounded_value <= 2) {
      color_value = '🟥';
    }
    else if (rounded_value > 2 && rounded_value <= 6) {
      color_value = '🟧';
    }
    else {
      color_value = '🟩';
    }

    // If high score === low score, that means the user is the first to play
    if (high_score === low_score || percentile === 100) {
      rounded_value = 10;
      color_value = '🟩';
    }

    for (let i = 0; i < 10; i++) {
      if (i <= rounded_value - 1) {
        graphic += color_value;
      }
      else {
        graphic += '⬜️';
      }
    }
    graphic += ' ' + high_score + '';

    return graphic;
  }


}
