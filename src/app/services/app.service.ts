import { Injectable, EventEmitter } from '@angular/core';
import { PercentileData } from '../app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public updatedTodaysGameData: EventEmitter<any> = new EventEmitter<any>();
  errors = [];

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
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (let each of alphabet) {
      for (let i = 0; i < myString.length; i++) {
        let temp = this.setCharAt(myString, i, each);
        let permutations = this.permut(temp);
        for (let p of permutations) {
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
    // Remove user_score from raw_scores
    // const index = scores.indexOf(user_score);
    // if (index > -1) {
    //   scores.splice(index, 1);
    // }

    return ((100 *
      scores.reduce(
        (acc, v) => acc + (v < user_score ? 1 : 0) + (v === user_score ? 0.5 : 0),
        0
      )) /
      scores.length);
  }

  getPercentileData(sorted_raw_scores: any, final_score: any, perfect_game?: boolean) {
    let percentile_data: PercentileData = {
      high_score: 0,
      low_score: 0,
      mean: 0,
      median: 0,
      mode: [],
      percentile: 0,
      percentile_graphic: '',
      percentile_color: ''
    };

    percentile_data.mean = this.getMean(sorted_raw_scores);
    percentile_data.median = this.getMedian(sorted_raw_scores);
    percentile_data.mode = this.getMode(sorted_raw_scores);

    // Remove user_score from raw_scores
    const index = sorted_raw_scores.indexOf(final_score);
    if (index > -1) {
      sorted_raw_scores.splice(index, 1);
    }

    percentile_data.high_score = /*final_score > sorted_raw_scores[sorted_raw_scores.length - 1] ? final_score : */sorted_raw_scores[sorted_raw_scores.length - 1];
    percentile_data.low_score = /*final_score < sorted_raw_scores[0] ? final_score : */sorted_raw_scores[0];
    percentile_data.percentile = this.getPercentile(sorted_raw_scores, final_score).toFixed(1);

    // if (final_score > sorted_raw_scores[sorted_raw_scores.length - 1]) {
    //   percentile_data.high_score = final_score;
    // }
    // if (final_score < sorted_raw_scores[0]) {
    //   percentile_data.low_score = final_score;
    // }

    percentile_data.percentile_graphic = this.getPercentileGraphic(percentile_data.low_score, percentile_data.high_score, percentile_data.percentile, final_score, perfect_game);
    percentile_data.percentile_color = this.getPercentileColor(percentile_data.percentile);
    percentile_data.special_case = this.getSpecialCase(percentile_data.low_score, percentile_data.high_score, percentile_data.percentile, final_score);

    if (final_score < percentile_data.low_score) {
      percentile_data.low_score = final_score;
    }
    if(final_score > percentile_data.high_score) {
      percentile_data.high_score = final_score;
    }

    return percentile_data;
  }

  getPercentileColor(percentile: number) {
    let rounded_value = (Math.round(percentile / 10) * 10) / 10;
    let color;

    if (rounded_value <= 2) {
      color = 'red';
    }
    else if (rounded_value > 2 && rounded_value <= 6) {
      color = '#f38d00'; // orange
    }
    else {
      color = '#0c8a1d'; // green
    }

    return color;
  }

  getPercentileGraphic(low_score: number, high_score: number, percentile: number, final_score: number, perfect_game?: boolean) {
    let graphic = '';
    // if (final_score < low_score) {
    //   graphic = final_score + ' ';
    // }
    // else {
    //   graphic = low_score + ' ';
    // }

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


    if (low_score >= final_score) {
      rounded_value = 1;
      color_value = '💀';
    }
    else if (final_score > high_score) {
      rounded_value = 10;
      color_value = '⭐️';
    }
    else if (high_score === final_score) {
      rounded_value = 10;
    }

    if (!perfect_game) {
      for (let i = 1; i <= 10; i++) {
        if (color_value === '⭐️') {
          graphic += color_value;
        }
        else if (rounded_value === 10) {
          graphic += color_value;
        }
        else {
          if (i <= rounded_value) {
            graphic += color_value;
          }
          else {
            graphic += '⬜️';
          }
        }
      }
    }
    else {
      graphic = '🏆🏅🏆🏅🏆🏅🏆🏅🏆🏅';
    }

    // graphic += ' ' + (final_score > high_score ? final_score : high_score) + '';

    return graphic;
  }

  getSpecialCase(low_score: number, high_score: number, percentile: number, final_score: number) {
    let special_case = {
      message: null,
      color: null
    };

    if (final_score < low_score) {
      special_case.message = 'You currently have the lowest score for today\'s word';
      special_case.color = '#c61100';
    }
    else if (final_score === low_score) {
      special_case.message = 'You are currently tied for the lowest score for today\'s word';
      special_case.color = '#c61100';
    }
    else if (final_score > high_score) {
      special_case.message = 'You currently have the highest score for today\'s word!!';
      special_case.color = 'green';
    }
    else if (final_score === high_score) {
      special_case.message = 'You are currently tied for the highest score for today\'s word!!';
      special_case.color = 'green';
    }

    return special_case;
  }

  copyTextToClipboard(text: string) {

    // try {
    //   throw Error();
    // }
    // catch (ex) {
    //   console.log('CAUGHT FAKE ERROR');
    //   this.setErrors(ex);
    // }

    try {
      if (!navigator.clipboard) {
        this.fallbackCopyTextToClipboard(text);
        return;
      }
      navigator.clipboard.writeText(text).then(function () {
        console.log('Async: Copying to clipboard was successful!');
      }, function (err) {
        console.error('Async: Could not copy text: ', err);
      });
    }
    catch (ex) {
      this.setErrors(ex);
    }
  }

  fallbackCopyTextToClipboard(text: string) {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
      this.setErrors(err)
    }

    document.body.removeChild(textArea);
  }

  isMobile() {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
      return true;
    }
    else {
      return false;
    }
  }


  setErrors(error: any) {
    if (error === {}) {
      this.errors = []
    }
    else {
      this.errors.push(error);
    }
    return this.errors;
  }

  getErrors() {
    return this.errors;
  }


}
