(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app\" id=\"app\">\n\n  <header>\n    <!-- <div style=\"left: 50%;position:fixed;margin-top:9px;font-family: 'Inconsolata-Light', \n    'Courier New', Courier, monospace;\">\n      Take5</div> -->\n    <div class=\"header_items\" style=\"display: flex;justify-content: flex-end;\">\n      <span>Version: 1.44</span>\n      <a (click)=\"contactModal(true)\">\n        <mat-icon style=\"font-size:35px;padding-right:20px;margin-top:2px;\">mail_outline</mat-icon>\n      </a>\n      <a (click)=\"statsModal(true)\">\n        <mat-icon style=\"font-size:35px;padding-right:20px;margin-top:2px;\">equalizer</mat-icon>\n      </a>\n      <a (click)=\"tutorialModal(true)\">\n        <span style=\"font-size:35px;padding-right:20px;margin-top:2px;font-weight: bold;font-family: 'Arial'\">?</span>\n      </a>\n    </div>\n  </header>\n\n  <br>\n  <br>\n\n  <div *ngIf=\"!you_lose_open && !you_win_open\" class=\"game\" style=\"position:relative;\"\n    [style.width]=\"isMobile ? '100%' : '50%'\" [style.margin]=\"isMobile ? '0' : '0 auto'\"\n    [style.height]=\"isMobile ? '82vh' : '95vh'\">\n    <div class=\"data\">\n      <div class=\"correct_words\" style=\"display: flex; justify-content:space-between;\">\n\n        <!-- 'WORDS' button -->\n        <div style=\"padding-top:18px;\"><button class=\"control\" style=\"padding: 5px;\"\n            (click)=\"wordsModal(true)\">WORDS</button></div>\n        <!-- <div style=\"font-size: 40px; font-family: 'Co'; margin-top: 15px;\"><b>{{starting_word}}</b></div> -->\n        <div style=\"font-size: 39px; font-family: 'Co'; margin-top: 15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>\n\n        <!-- WHITE FLAG BUTTON -->\n        <div style=\"padding-top:18px;\">\n          <!-- CREDIT:  <a href=\"https://www.flaticon.com/free-icons/white-flag\" title=\"white-flag icons\">White-flag icons created by Victoruler - Flaticon</a> -->\n          <img (click)=\"giveUpModal(true)\" class=\"control\" src=\"/assets/icons/white-flag.png\"\n            style=\"width:25px; height: 25px; padding: 5px;\" alt=\"image\">\n        </div>\n      </div>\n\n      <div class=\"used_letters\" style=\"position:fixed\">\n        <div class=\"used_letter_row\">\n          <div *ngFor=\"let letter of used_letters;\">\n            <div class=\"used_letter_icon\" [style.background-color]=\"letter.point_color\"\n              [style.color]=\"letter.font_color\" style=\"margin-bottom: 5px;\">\n              {{letter.name}}</div>\n          </div>\n        </div>\n      </div>\n\n      <br />\n\n      <div>\n        <div style=\"display: flex; justify-content: center; align-items: center; flex-direction: column; height: 20vh;\"\n          [style.height]=\"isMobile ? '18vh' : '20vh'\">\n          <div class=\"score\" style=\"text-align: center;\"><b>{{total_score}}</b></div>\n          <div *ngIf=\"user?.high_score !== undefined\" class=\"high_score\" style=\"text-align: center;\">BEST:<span\n              style=\"font-family: 'Inconsolata-Bold', 'Courier New', Courier, monospace;\">{{user?.high_score}}</span>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n\n    <!-- CELLS -->\n    <div class=\"container\">\n      <div *ngFor=\"let cell of cells; let i = index\" class=\"letters\">\n        <div class=\"point_value\" id=\"point_value_{{cell.name}}\" [style.color]=\"cell.color\">\n          <b>{{cell.point_value}}</b>\n        </div>\n        <button class=\"butt\" id=\"container_{{cell.name}}\" [disabled]=\"letter_selected\"\n          [style.height]=\"isMobile ? '20vw' : '10vw'\" [style.width]=\"isMobile ? '20vw' : '10vw'\" style=\"padding: 0px;\"\n          [style.font-size]=\"isMobile ? '11vw' : '4.3vw'\" [style.cursor]=\"letter_selected ? 'auto' : 'cursor'\"\n          [style.background-color]=\"cell.color\" [style.color]=\"cell.font_color\"\n          [style.border-color]=\"cell.selected ? '#2b2827' : 'white'\" (click)=\"cellClicked(i)\">{{cell.value}}</button>\n      </div>\n    </div>\n\n    <!-- REMOVE -->\n    <span class=\"alert_text\" style=\"display: flex; justify-content: center;\" id=\"console\"\n      [style.visibility]=\"console_text_hidden ? 'hidden' : 'visible'\">{{console_text}}</span>\n    <!-- END REMOVE -->\n\n\n    <!-- KEYBOARD -->\n    <div *ngIf=\"show_keyboard\" id=\"keyboard\" [style.opacity]=\"keyboard_opacity\"\n      style=\"margin-left: 8px; position: absolute; bottom: 0; width: 100%; margin: 0 auto;\"\n      [style.margin-bottom]=\"isMobile ? '0px' : '3px'\"\n      [style.pointer-events]=\"((keyboard_opacity === '1.0' && keyboard_enabled) ? 'auto' : 'none')\" class=\"keyboard\">\n\n      <div style=\"display: flex; justify-content: center;\">\n        <div *ngFor=\"let key of keyboard_top;\">\n          <button class=\"butt-sm\" [style.width]=\"isMobile ? '8vw' : '4vw'\" [style.height]=\"isMobile ? '12vh' : '9vh'\"\n            [disabled]=\"!key.enabled || you_lose_open || stats_modal_open\" [style.background-color]=\"key.point_color\"\n            [style.opacity]=\"key.opacity\" [style.color]=\"key.font_color\" style=\"font-weight: bold; padding: 0px;\"\n            (click)=\"keyboardClicked(key.name)\">{{key.name}}</button>\n        </div>\n      </div>\n\n      <div style=\"display: flex; justify-content: center; margin-top: 8px;\">\n        <div *ngFor=\"let key of keyboard_middle;\">\n          <button class=\"butt-sm\" [style.width]=\"isMobile ? '8vw' : '4vw'\" [style.height]=\"isMobile ? '12vh' : '9vh'\"\n            [disabled]=\"!key.enabled || you_lose_open || stats_modal_open\" [style.background-color]=\"key.point_color\"\n            [style.opacity]=\"key.opacity\" [style.color]=\"key.font_color\" style=\"font-weight: bold; padding: 0px;\"\n            (click)=\"keyboardClicked(key.name)\">{{key.name}}</button>\n        </div>\n      </div>\n\n      <div style=\"display: flex; justify-content: center; margin-top: 8px;\">\n        <div *ngFor=\"let key of keyboard_bottom;\">\n          <button class=\"butt-sm\" [style.width]=\"isMobile ? '8vw' : '4vw'\" [style.height]=\"isMobile ? '12vh' : '9vh'\"\n            [disabled]=\"!key.enabled || you_lose_open || stats_modal_open\" [style.background-color]=\"key.point_color\"\n            [style.opacity]=\"key.opacity\" [style.color]=\"key.font_color\" style=\"font-weight: bold; padding: 0px;\"\n            (click)=\"keyboardClicked(key.name)\">{{key.name}}</button>\n        </div>\n      </div>\n    </div>\n\n    <!-- USER LETTERS -->\n    <div *ngIf=\"letter_selected\" style=\"position: absolute; bottom: 0;width: 100%;margin: 0 auto; margin-bottom: 30px;\">\n      <div style=\"display: flex; justify-content: center;\">\n        <div *ngFor=\"let letter of user_letters; let i = index\" class=\"letters\">\n          <button class=\"user_letters\" [disabled]=\"!letter.enabled\" [style.background-color]=\"letter.color\"\n            [style.color]=\"letter.font_color\" [style.opacity]=\"letter.enabled ? '1.0' : '0.25'\"\n            [style.height]=\"isMobile ? '20vw' : '10vw'\" [style.width]=\"isMobile ? '20vw' : '10vw'\"\n            [style.font-size]=\"isMobile ? '11vw' : '4.3vw'\" style=\"padding: 0px;\"\n            (click)=\"userLetterClicked(i)\">{{letter.value}}</button>\n        </div>\n      </div>\n\n      <div style=\"margin-top: 20px;\">\n        <button class=\"control\" (click)=\"controlClicked('GO-BACK')\" style=\"float:left;margin-left: 5px;\">GO\n          BACK</button>\n\n        <button class=\"control\" [disabled]=\"cells[4].value === ''\" (click)=\"controlClicked('ENTER')\"\n          style=\"float:right;\">ENTER</button>\n\n        <button class=\"control\" [disabled]=\"cells[0].value === ''\" (click)=\"controlClicked('BACKSPACE')\"\n          style=\"float:right;\">&#60; DEL\n        </button>\n      </div>\n    </div>\n\n  </div>\n\n  <!-- YOU LOSE SCREEN -->\n  <div *ngIf=\"you_lose_open\" style=\"display: flex; justify-content: center;\">\n    <div [hidden]=\"!you_lose_open\" class=\"you_lose\" id=\"you_lose\" [style.width]=\"isMobile ? '100vw' : '400px'\">\n      <div>\n        <div class=\"modal_title\" style=\"text-align: center; font-size: 30px; padding: 10px; margin-top: 10px;\">\n          <b>{{losing_word}}</b>\n        </div>\n\n        <br>\n\n        <div style=\"text-align: center;font-size: 22px; padding: 10px;\">\n          <div class=\"modal_header\"><b>FINAL SCORE</b></div>\n          <div class=\"modal_text\" style=\"font-size:30px\"><b>{{final_score}}</b></div>\n        </div>\n\n        <div style=\"display: flex; justify-content: center;\">\n          <div style=\"text-align: left; font-size: 22px; padding: 10px; width: 90%;\">\n            <div class=\"modal_header\"><b>CORRECT WORDS ({{game_over_correct_words.length}})</b>\n            </div>\n\n            <!-- To Fix on iPad -->\n            <!-- <div style=\"font-family:'Courier New', Courier, monospace; text-align: center;\">\n              {{game_over_correct_words_formatted}}</div> -->\n            <div style=\"font-family: 'Inconsolata-Light', 'Courier New', Courier, monospace;\"\n              [style.margin-left]=\"game_over_correct_words.length <= 4 ? '0px' : '20px'\"\n              [style.text-align]=\"game_over_correct_words.length <= 4 ? 'center' : 'left'\">\n              {{game_over_correct_words_formatted}}</div>\n          </div>\n        </div>\n\n        <br>\n        <hr class=\"1px solid black\" style=\"width: 75%;\">\n        <!-- <hr> -->\n        <br>\n\n        <div *ngIf=\"final_score !== undefined\" style=\"text-align: center;font-size: 22px; padding: 10px;\">\n          <div class=\"modal_header\"><b>TODAY'S AVERAGE</b></div>\n          <div *ngIf=\"todays_game_data; else statsPlaceholder\">\n            <div class=\"modal_text\" style=\"font-size:30px\"><b>{{todays_game_data?.average_score}}</b></div>\n          </div>\n          <ng-template #statsPlaceholder>\n            <div class=\"modal_text\" style=\"font-size:25px\"><b>&mdash;</b></div>\n          </ng-template>\n        </div>\n\n        <div *ngIf=\"todays_game_data?.raw_scores.length > 0; else elseBlock\"\n          style=\"text-align: center;font-size: 22px; padding: 10px;\">\n\n          <div *ngIf=\"percentile_data && todays_game_data?.raw_scores?.length > 0\" class=\"modal_text\">\n            <div *ngIf=\"percentile_data.special_case?.message === null; else specialCase\">\n              You were better than <span style=\"font-family: 'Inconsolata-Bold', 'Courier New', Courier, monospace;\"\n                [style.color]=\"percentile_data?.percentile_color\">{{percentile_data.percentile}}%</span> of players\n              today\n            </div>\n            <ng-template #specialCase>\n              <div [style.color]=\"percentile_data.special_case?.color\">\n                <b>{{percentile_data.special_case.message}}</b>\n              </div>\n            </ng-template>\n          </div>\n\n          <div *ngIf=\"todays_game_data; else statsPlaceholder\">\n            <div\n              style=\"text-align: center;font-size: 22px; padding: 10px;font-family: 'Inconsolata-Bold', 'Courier New', Courier, monospace;\">\n              <span>{{percentile_data?.low_score}}</span> {{percentile_data.percentile_graphic}} <span>{{percentile_data?.high_score}}</span>\n            </div>\n          </div>\n          <ng-template #statsPlaceholder>\n            <div style=\"text-align: center;font-size: 22px; padding: 10px;\">\n              -⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️-\n            </div>\n          </ng-template>\n\n        </div>\n        <ng-template #elseBlock style=\"text-align: center;font-size: 22px; padding: 10px;\">\n          <div style=\"text-align: center;font-size: 22px; padding: 10px;\">\n            You are today's first player! Check back later for updated results\n          </div>\n        </ng-template>\n\n        <br>\n\n        <div style=\"display: flex; justify-content:center;\">\n          <button (click)=\"youLose(false)\" style=\"font-size: 20px;\" class=\"control\">PLAY\n            AGAIN</button>\n          <button (click)=\"shareScore()\" style=\"font-size: 20px;\" class=\"control\">SHARE</button>\n        </div>\n\n        <span class=\"alert_text\" style=\"display: flex; justify-content: center;\" id=\"copied_to_clipboard\"\n          [style.visibility]=\"copied_to_clipboard_hidden ? 'hidden' : 'visible'\">{{copied_to_clipboard}}</span>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"you_win_open\" style=\"display: flex; justify-content: center;\">\n    <div>\n      <div class=\"modal_title\" style=\"text-align: center; font-size: 30px; padding: 10px; margin-top: 10px;\"><b>PERFECT\n          SCORE!</b></div>\n\n      <div style=\"text-align: center;font-size: 22px; padding: 10px;\">\n        <div class=\"modal_header\"><b>Final Score</b></div>\n        <div class=\"modal_text\" style=\"font-size:25px\"><b>{{final_score}} ({{game_over_correct_words.length}}\n            word<span *ngIf=\"game_over_correct_words.length !== 1\">s</span>)</b></div>\n      </div>\n\n      <div style=\"text-align: center;font-size: 22px; padding: 10px;\">\n        Out of <b>1016 games</b>, this has only happened\n        <b>2</b> times. That's pretty rad.\n      </div>\n\n      <br>\n\n      <div style=\"display: flex; justify-content:center;\">\n        <button (click)=\"youWin(false)\" style=\"font-size: 20px;\" class=\"control\">PLAY\n          AGAIN</button>\n        <button style=\"font-size: 20px;\" class=\"control\">SHARE</button>\n      </div>\n    </div>\n  </div>\n\n\n\n</div>\n\n\n\n\n\n<!-- STATS MODAL -->\n<div [hidden]=\"!stats_modal_open\" class=\"modal stats_modal\" id=\"stats_modal\" [style.width]=\"isMobile ? '80%' : '360px'\">\n  <div>\n    <div class=\"header_items\" style=\"display: flex;justify-content: flex-end;\">\n      <a (click)=\"statsModal(false)\">\n        <mat-icon style=\"font-size: 30px; padding-right:15px; padding-top: 10px;\">close</mat-icon>\n      </a>\n    </div>\n    <div class=\"modal_title\" style=\"font-size: 30px; text-align: center;\"><b>STATISTICS</b></div>\n  </div>\n\n\n\n  <div style=\"display: flex; justify-content: center; padding:10px;\">\n    <a class=\"tabs\" (click)=\"navigateStatsModalTabs(false)\" style=\"border-bottom-left-radius: 10px;\n    border-top-left-radius: 10px;\" [ngClass]=\"{'tabs_active': stats_step_num === 1}\"><span\n        style=\"font-family: 'Inconsolata-Light', 'Courier New', Courier, monospace;\">Personal</span></a>\n    <a class=\"tabs\" style=\"border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\" (click)=\"navigateStatsModalTabs(true)\"\n      [ngClass]=\"{'tabs_active': stats_step_num === 2}\"><span\n        style=\"font-family: 'Inconsolata-Light', 'Courier New', Courier, monospace;\">Global</span></a>\n  </div>\n\n\n\n  <!-- Personal stats -->\n  <div *ngIf=\"stats_step_num === 1; else step_2\">\n    <div *ngIf=\"stats_modal_open\" style=\"padding: 10px;\">\n      <div class=\"modal_header modal_header_sm\"><b>HIGH SCORE</b></div>\n      <div class=\"modal_text\" style=\"font-size:25px\"><b>{{user?.high_score}}</b></div>\n\n      <br>\n\n      <div class=\"modal_header modal_header_sm\"><b>AVERAGE SCORE</b></div>\n      <div class=\"modal_text\" style=\"font-size:25px\"><b>{{user?.average_score_per_game}} points</b></div>\n\n      <br>\n\n      <div class=\"modal_header modal_header_sm\"><b>GAMES PLAYED</b></div>\n      <div class=\"modal_text\" style=\"font-size:25px\"><b>{{user?.games_played_num}}</b></div>\n\n      <br>\n\n      <div class=\"modal_header modal_header_sm\"><b>HIGHEST SCORING WORD</b></div>\n      <div class=\"modal_text\" style=\"font-size:25px;\"><b>\"{{user?.highest_scoring_word.word}}\"\n          {{user.highest_scoring_word.score}} points</b></div>\n    </div>\n  </div>\n  <!-- Global stats -->\n  <ng-template #step_2>\n    <div *ngIf=\"stats_modal_open\" style=\"padding: 10px;\">\n      <div class=\"modal_header modal_header_sm\"><b>TODAY'S HIGH SCORE</b></div>\n      <div class=\"modal_text\" style=\"font-size:25px\"><b>{{todays_game_data.high_score}}</b></div>\n\n      <br>\n\n      <div class=\"modal_header modal_header_sm\"><b>TODAY'S AVERAGE SCORE</b></div>\n      <div class=\"modal_text\" style=\"font-size:25px\"><b>{{todays_game_data.average_score}}</b></div>\n\n      <br>\n\n      <hr class=\"1px solid black\" style=\"width: 75%;\">\n\n      <br>\n\n      <div class=\"modal_header modal_header_sm\"><b>ALL TIME HIGH SCORE 🏆</b></div>\n      <div class=\"modal_text\" style=\"font-size:25px\"><b>{{all_time_data.all_time_high_score}}</b></div>\n\n      <br>\n\n      <div class=\"modal_header modal_header_sm\"><b>PERFECT GAME COUNT 💯</b></div>\n      <div class=\"modal_text\" style=\"font-size:25px\"><b>{{all_time_data.perfect_game_count}}</b></div>\n\n      <!-- <p style=\"display: flex; justify-content: center;\">ERRORS:</p>\n      <ul style=\"display: list-item;\">\n        <li *ngFor=\"let error of errors\" style=\"font-size: 10px;\">\n          <div *ngIf=\"error.stack; else elseBlock\" style=\"color: red;\">\n            {{error.stack}}\n          </div>\n          <ng-template #elseBlock>\n            <div style=\"color: rgb(36, 166, 36);\">\n              {{error.passed}}\n            </div>\n          </ng-template>\n        </li>\n      </ul> -->\n\n    </div>\n  </ng-template>\n\n\n</div>\n\n<!-- TUTORIAL MODAL -->\n<div [hidden]=\"!tutorial_modal_open\" class=\"modal tutorial_modal\" id=\"tutorial_modal\" [style.width]=\"isMobile ? '85%' : '400px'\">\n  <div>\n    <div class=\"header_items\" style=\"display: flex;justify-content: flex-end;\">\n      <a (click)=\"tutorialModal(false)\">\n        <mat-icon style=\"font-size: 30px; padding-right:15px; padding-top: 10px;\">close</mat-icon>\n      </a>\n    </div>\n    <div class=\"modal_title\" style=\"font-size: 30px; text-align: center;\"><b>HOW TO PLAY ({{tutorial_step_num}}/3)</b>\n    </div>\n  </div>\n\n  <!-- STEP 1 -->\n  <div *ngIf=\"tutorial_step_num === 1\" id=\"step_1\">\n    <div style=\"display: flex; justify-content:center;margin-top:10px;\">\n      <img src=\"/assets/correct_word.gif\" alt=\"image\"\n        style=\"width: 80%; height: auto; border: 1px solid gray;border-radius: 5px;\">\n    </div>\n    <div style=\"display: flex; justify-content:center\">\n      <div class=\"modal_text\" style=\"padding: 13px;margin-top: 7px; width: 80%; font-size: 20px;\">\n        Create words by switching out letters one at a time and rearranging them\n      </div>\n    </div>\n  </div>\n\n  <!-- STEP 2 -->\n  <div *ngIf=\"tutorial_step_num === 2\" id=\"step_2\">\n    <div style=\"display: flex; justify-content:center;margin-top:10px;\">\n      <img src=\"/assets/incorrect_word.gif\" alt=\"image\"\n        style=\"width: 80%; height: auto; border: 1px solid gray;border-radius: 5px;\">\n    </div>\n    <div style=\"display: flex; justify-content:center\">\n      <div class=\"modal_text\" style=\"padding: 13px;margin-top: 7px; width: 80%; font-size: 20px;\">\n        If you enter a word that doesn't exist, the game is over\n      </div>\n    </div>\n  </div>\n\n  <!-- STEP 3 -->\n  <div *ngIf=\"tutorial_step_num === 3\" id=\"step_3\">\n    <div style=\"display: flex; justify-content:center;margin-top:10px;\">\n      <img src=\"/assets/letter_scores.png\" alt=\"image\"\n        style=\"width: 80%; height: auto; border: 1px solid gray;border-radius: 5px;\">\n    </div>\n    <div style=\"display: flex; justify-content:center\">\n      <div class=\"modal_text\" style=\"padding: 13px;margin-top: 7px; width: 80%; font-size: 20px;\">\n        The darker the color shade, the more points the letter is worth\n      </div>\n    </div>\n    <br>\n  </div>\n\n  <br>\n\n  <div\n    style=\"position: absolute; bottom: 0;margin: 0 auto;width: 100%;display: flex; justify-content: center; padding-bottom: 10px;\">\n    <button *ngIf=\"tutorial_step_num > 1\" class=\"control\" (click)=\"navigateTutorialModalStep(false)\">&#60; BACK</button>\n    <button *ngIf=\"tutorial_step_num !== 3\" class=\"control\" (click)=\"navigateTutorialModalStep(true)\">NEXT ></button>\n    <button *ngIf=\"tutorial_step_num === 3\" class=\"control\" (click)=\"tutorialModal(false)\">DONE</button>\n  </div>\n</div>\n\n<!-- CONTACT MODAL -->\n<div [hidden]=\"!contact_modal_open\" class=\"modal stats_modal\" id=\"contact_modal\" [style.width]=\"isMobile ? '80%' : '360px'\">\n  <div>\n    <div class=\"header_items\" style=\"display: flex;justify-content: flex-end;\">\n      <a (click)=\"contactModal(false)\">\n        <mat-icon style=\"font-size: 30px; padding-right:15px; padding-top: 10px;\">close</mat-icon>\n      </a>\n    </div>\n    <div class=\"modal_title\" style=\"font-size: 30px; text-align: center;\"><b>CONTACT</b></div>\n  </div>\n\n  <br>\n  <br>\n\n  <div>\n    <div class=\"modal_header\" style=\"display:flex; justify-content: center;\">\n      <b>Feedback/Questions?</b>\n    </div>\n    <a href=\"mailto:ldimuro@asu.edu?cc=&subject=take5 [insert subject here]\"><span\n        style=\"display:flex; justify-content: center;\"><u>Email Me!</u></span></a>\n  </div>\n\n  <br>\n\n  <div>\n    <div class=\"modal_header\" style=\"display:flex; justify-content: center;\"><b>Like the\n        game?</b>\n    </div>\n    <a target=\"_blank\" href=\"https://www.paypal.com/paypalme/loudimuro\"><span\n        style=\"display:flex; justify-content: center;\"><u>Buy me a coffee ☕️!</u></span></a>\n  </div>\n\n  <br>\n\n  <div style=\"display: flex; justify-content:center;\">\n    <!-- <div class=\"modal_text\" style=\"font-family: 'Co'; display:flex; justify-content: center;\"><b>Social Media</b>\n    </div> -->\n    <div style=\"display: grid; grid-template-columns: auto auto;\">\n      <div class=\"social_media_icon\">\n        <!-- Sharingbutton Facebook -->\n        <a class=\"resp-sharing-button__link\"\n          href=\"https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsharingbuttons.io\" target=\"_blank\" rel=\"noopener\"\n          aria-label=\"\">\n          <div class=\"resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small\">\n            <div aria-hidden=\"true\" class=\"resp-sharing-button__icon resp-sharing-button__icon--solidcircle\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n                <path\n                  d=\"M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm3.6 11.5h-2.1v7h-3v-7h-2v-2h2V8.34c0-1.1.35-2.82 2.65-2.82h2.35v2.3h-1.4c-.25 0-.6.13-.6.66V9.5h2.34l-.24 2z\" />\n              </svg>\n            </div>\n          </div>\n        </a>\n      </div>\n      <div class=\"social_media_icon\">\n        <!-- Sharingbutton Twitter -->\n        <a class=\"resp-sharing-button__link\"\n          href=\"https://twitter.com/intent/tweet/?text=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;url=http%3A%2F%2Fsharingbuttons.io\"\n          target=\"_blank\" rel=\"noopener\" aria-label=\"\">\n          <div class=\"resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small\">\n            <div aria-hidden=\"true\" class=\"resp-sharing-button__icon resp-sharing-button__icon--solidcircle\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n                <path\n                  d=\"M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm5.26 9.38v.34c0 3.48-2.64 7.5-7.48 7.5-1.48 0-2.87-.44-4.03-1.2 1.37.17 2.77-.2 3.9-1.08-1.16-.02-2.13-.78-2.46-1.83.38.1.8.07 1.17-.03-1.2-.24-2.1-1.3-2.1-2.58v-.05c.35.2.75.32 1.18.33-.7-.47-1.17-1.28-1.17-2.2 0-.47.13-.92.36-1.3C7.94 8.85 9.88 9.9 12.06 10c-.04-.2-.06-.4-.06-.6 0-1.46 1.18-2.63 2.63-2.63.76 0 1.44.3 1.92.82.6-.12 1.95-.27 1.95-.27-.35.53-.72 1.66-1.24 2.04z\" />\n              </svg>\n            </div>\n          </div>\n        </a>\n      </div>\n      <div class=\"social_media_icon\">\n        <!-- Sharingbutton Tumblr -->\n        <a class=\"resp-sharing-button__link\"\n          href=\"https://www.tumblr.com/widgets/share/tool?posttype=link&amp;title=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;caption=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;content=http%3A%2F%2Fsharingbuttons.io&amp;canonicalUrl=http%3A%2F%2Fsharingbuttons.io&amp;shareSource=tumblr_share_button\"\n          target=\"_blank\" rel=\"noopener\" aria-label=\"\">\n          <div class=\"resp-sharing-button resp-sharing-button--tumblr resp-sharing-button--small\">\n            <div aria-hidden=\"true\" class=\"resp-sharing-button__icon resp-sharing-button__icon--solidcircle\">\n              <svg version=\"1.1\" x=\"0px\" y=\"0px\" width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\"\n                enable-background=\"new 0 0 24 24\" xml:space=\"preserve\">\n                <path\n                  d=\"M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M15.492,17.616C11.401,19.544,9.5,17,9.5,14.031 V9.5h-2V8.142c0.549-0.178,1.236-0.435,1.627-0.768c0.393-0.334,0.707-0.733,0.943-1.2c0.238-0.467,0.401-0.954,0.49-1.675H12.5v3h2 v2h-2v3.719c0,2.468,1.484,2.692,2.992,1.701V17.616z\" />\n              </svg>\n            </div>\n          </div>\n        </a>\n      </div>\n      <div class=\"social_media_icon\">\n        <!-- Sharingbutton Pinterest -->\n        <a class=\"resp-sharing-button__link\"\n          href=\"https://pinterest.com/pin/create/button/?url=http%3A%2F%2Fsharingbuttons.io&amp;media=http%3A%2F%2Fsharingbuttons.io&amp;description=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.\"\n          target=\"_blank\" rel=\"noopener\" aria-label=\"\">\n          <div class=\"resp-sharing-button resp-sharing-button--pinterest resp-sharing-button--small\">\n            <div aria-hidden=\"true\" class=\"resp-sharing-button__icon resp-sharing-button__icon--solidcircle\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n                <path\n                  d=\"M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm1.4 15.56c-1 0-1.94-.53-2.25-1.14l-.65 2.52c-.4 1.45-1.57 2.9-1.66 3-.06.1-.2.07-.22-.04-.02-.2-.32-2 .03-3.5l1.18-5s-.3-.6-.3-1.46c0-1.36.8-2.37 1.78-2.37.85 0 1.25.62 1.25 1.37 0 .85-.53 2.1-.8 3.27-.24.98.48 1.78 1.44 1.78 1.73 0 2.9-2.24 2.9-4.9 0-2-1.35-3.5-3.82-3.5-2.8 0-4.53 2.07-4.53 4.4 0 .5.1.9.25 1.23l-1.5.82c-.36-.64-.54-1.43-.54-2.28 0-2.6 2.2-5.74 6.57-5.74 3.5 0 5.82 2.54 5.82 5.27 0 3.6-2 6.3-4.96 6.3z\" />\n              </svg>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<!-- CORRECT WORDS MODAL -->\n<div [hidden]=\"!words_modal_open\" class=\"modal words_modal\" id=\"words_modal\" [style.width]=\"isMobile ? '75%' : '330px'\">\n  <div>\n    <div class=\"header_items\" style=\"display: flex;justify-content: flex-end;\">\n      <a (click)=\"wordsModal(false)\">\n        <mat-icon style=\"font-size: 30px; padding-right:15px; padding-top: 10px;\">close</mat-icon>\n      </a>\n    </div>\n    <!-- <div style=\"font-size: 30px; text-align: center; font-family: 'Co'\"><b>CORRECT WORDS</b></div> -->\n  </div>\n\n  <br>\n\n  <div style=\"height: 65%; overflow: scroll; overflow-x: hidden;\" id=\"word_list\">\n    <div style=\"color: #b31e0f; font-size: 30px; font-family:'Domine-Bold', 'Courier New', Courier, monospace;\"\n      class=\"modal_text\">\n      {{starting_word}}</div>\n    <hr class=\"1px solid black\" style=\"width: 75%;\">\n    <div *ngFor=\"let word of correct_words\" class=\"modal_text\"\n      style=\"font-size: 30px; font-family:'Domine-Regular', 'Courier New', Courier, monospace; margin-bottom: 5px;\">\n      <div style=\"text-align:center;\">\n        {{word}}\n      </div>\n    </div>\n  </div>\n\n  <div style=\"position: absolute; bottom: 0;margin: 0 auto;width: 100%;display: flex;\n  justify-content: center; padding-bottom: 20px;\">\n    <button class=\"control\" (click)=\"wordsModal(false)\">CLOSE</button>\n  </div>\n</div>\n\n<!-- GIVE UP MODAL -->\n<div [hidden]=\"!giveup_modal_open\" class=\"modal giveup_modal\" id=\"giveup_modal\">\n  <div>\n    <div class=\"header_items\" style=\"display: flex;justify-content: flex-end;\">\n      <!-- <a (click)=\"giveUpModal(false)\">\n        <mat-icon style=\"font-size: 24px; padding-right:15px; padding-top: 10px;\">close</mat-icon>\n      </a> -->\n    </div>\n    <div class=\"modal_title\"\n      style=\"font-size: 22px; text-align: center; padding-top:25px; font-family: 'Inconsolata-Light', 'Courier New', Courier, monospace; width: 60%;\n      margin: 0 auto;\">\n      <b>Are you sure you want to\n        give up?</b>\n    </div>\n  </div>\n\n  <!-- <br>\n  <br> -->\n\n  <div style=\"display: flex; justify-content:center;\" style=\"position: absolute; bottom: 0;margin: 0 auto;width: 100%;display: flex;\n  justify-content: center; padding-bottom: 30px;\">\n    <button (click)=\"giveUpModal(false, true)\" style=\"font-size: 20px; width:60px;\" class=\"control\">YES</button>\n    <button (click)=\"giveUpModal(false)\" style=\"font-size: 20px; width:60px;\" class=\"control\">NO</button>\n  </div>\n\n\n</div>\n\n\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap\");\n.app {\n  position: absolute;\n  /*Can also be `fixed`*/\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  /*Solves a problem in which the content is being cut when the div is smaller than its' wrapper:*/\n  max-width: 101%;\n  overflow: hidden;\n}\n.correct_words,\n.used_letters,\n.score,\n.high_score,\n.highest_scoring_word {\n  font-size: 20px;\n  color: #4d4749;\n}\n.score {\n  font-size: 65px;\n  font-family: \"Inconsolata-Bold\", \"Courier New\", Courier, monospace;\n}\n.high_score {\n  font-family: \"Inconsolata-Light\", \"Courier New\", Courier, monospace;\n}\ntextarea {\n  font-size: 14px;\n  width: 95%;\n  display: flex;\n  justify-content: center;\n  resize: none;\n  border-color: lightgray;\n}\n.butt {\n  border: 1px outset white;\n  border-width: 5px;\n  border-style: solid;\n  border-radius: 10px;\n  background-color: white;\n  max-width: 110px;\n  max-height: 110px;\n  position: relative;\n  cursor: pointer;\n  font-size: 50px;\n  color: white;\n  font-family: \"Domine-Regular\", sans-serif;\n}\n.user_letters {\n  border: 1px outset white;\n  border-width: 5px;\n  border-style: solid;\n  border-radius: 10px;\n  background-color: #a0a0a0;\n  height: 80px;\n  width: 80px;\n  max-width: 110px;\n  max-height: 110px;\n  cursor: pointer;\n  color: #5c5c5c;\n  font-family: \"Domine-Regular\", sans-serif;\n}\n.butt-sm {\n  border: none;\n  border-radius: 7px;\n  background-color: #e0e0e0;\n  height: 80px;\n  width: 8vw;\n  max-width: 50px;\n  max-height: 70px;\n  margin-right: 8px;\n  font-size: 20px;\n}\n.control {\n  border: 1px outset #363636;\n  border-radius: 10px;\n  border-style: solid;\n  background-color: white;\n  color: #363636;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 10px;\n  margin-right: 8px;\n  font-size: 20px;\n  cursor: pointer;\n  font-family: \"Inconsolata-Light\", \"Courier New\", Courier, monospace;\n}\n.control:disabled {\n  opacity: 0.3;\n  cursor: auto;\n}\n.words_button {\n  border: 2px outset #363636;\n  border-radius: 10px;\n  border-style: solid;\n  background-color: white;\n  color: #363636;\n  font-size: 20px;\n  cursor: pointer;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n.letters {\n  display: inline-block;\n  position: relative;\n}\n.container {\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 20vh;\n}\n.used_letter_row {\n  display: flex;\n  justify-content: left;\n  flex-wrap: wrap;\n}\n.used_letter_icon {\n  display: inline-block;\n  flex-grow: 1;\n  width: 25px;\n  text-align: center;\n  margin-right: 5px;\n}\n.stats_modal {\n  position: fixed;\n  height: 500px;\n  width: 360px;\n  top: 50%;\n  left: 50%;\n  background-color: white;\n  border-radius: 20px;\n  transform: translate(-50%, -50%);\n  box-shadow: 0 0 10px #ccc;\n}\n.tutorial_modal {\n  position: fixed;\n  height: 570px;\n  width: 390px;\n  top: 50%;\n  left: 50%;\n  background-color: white;\n  border-radius: 20px;\n  transform: translate(-50%, -50%);\n  box-shadow: 0 0 10px #ccc;\n}\n.words_modal {\n  position: fixed;\n  height: 550px;\n  width: 330px;\n  top: 50%;\n  left: 50%;\n  background-color: white;\n  border-radius: 20px;\n  transform: translate(-50%, -50%);\n  box-shadow: 0 0 10px #ccc;\n}\n.giveup_modal {\n  position: fixed;\n  height: 180px;\n  width: 300px;\n  top: 50%;\n  left: 50%;\n  background-color: white;\n  border-radius: 20px;\n  transform: translate(-50%, -50%);\n  box-shadow: 0 0 10px #ccc;\n}\n.modal_text {\n  display: flex;\n  justify-content: center;\n  font-size: 24px;\n  color: #333;\n  font-family: \"Inconsolata-Light\", \"Courier New\", Courier, monospace;\n}\n.modal_header {\n  display: flex;\n  justify-content: center;\n  font-size: 20px;\n  color: #c61100;\n  font-family: \"Domine-Bold\", sans-serif;\n}\n.modal_header_sm {\n  font-size: 17px;\n}\n.modal_title {\n  font-family: \"Domine-Bold\", sans-serif;\n}\n.center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}\n.you_lose {\n  height: 100vh;\n  background-color: white;\n  border-radius: 8px;\n}\n.point_value {\n  text-align: center;\n  font-size: 34px;\n  opacity: 0;\n  margin-bottom: 10px;\n  filter: brightness(80%);\n  font-family: \"Inconsolata-Bold\", \"Courier New\", Courier, monospace;\n}\n.social_media_icon {\n  padding: 5px;\n}\n.alert_text {\n  font-size: 18px;\n  color: #3f3f3f;\n  margin-top: 20px;\n  font-family: \"Inconsolata-Light\", \"Courier New\", Courier, monospace;\n}\n.header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 40px;\n  background-color: white;\n  text-align: center;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 20px;\n  color: #4d4749;\n  border-bottom: 1px solid #b8b8b8;\n}\nul {\n  display: flex;\n  justify-content: flex-end;\n}\nul li {\n  list-style: none;\n  margin-right: 20px;\n  font-weight: bold;\n}\nheader {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 40px;\n  background-color: white;\n  text-align: center;\n  vertical-align: middle;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  color: #4d4749;\n  border-bottom: 1px solid #b8b8b8;\n  justify-content: flex-end;\n}\n.item {\n  padding: 10px;\n  font-size: 20px;\n}\n.footer {\n  position: sticky;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  color: #4d4749;\n  padding: 5px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 16px;\n}\n.data {\n  padding-left: 10px;\n}\n/* unvisited link */\n.tabs {\n  padding: 8px;\n  margin-top: 10px;\n  border: 1px solid #a0a0a0;\n  width: 20%;\n  text-align: center;\n}\n.tabs_active {\n  background-color: #de5445;\n  color: white;\n  pointer-events: none;\n  font-weight: bold;\n  border: none;\n  filter: none;\n}\n/* Glyph, by Harry Roberts */\nhr {\n  overflow: visible;\n  /* For IE */\n  padding: 0;\n  border: none;\n  border-top: medium double #cbcbcb;\n  color: #cbcbcb;\n  text-align: center;\n}\nhr:after {\n  display: inline-block;\n  position: relative;\n  top: -0.7em;\n  font-size: 1.5em;\n  padding: 0 0.25em;\n  background: white;\n}\n.blur-background_in {\n  filter: blur(30px);\n  -webkit-filter: blur(30px);\n  -o-filter: blur(30px);\n  -moz-filter: blur(30px);\n  pointer-events: none;\n}\n.bounce {\n  animation: bounce 1s ease 1;\n  -o-animation: bounce 1s ease 1;\n  -moz-animation: bounce 1s ease 1;\n  -webkit-animation: bounce 1s ease 1;\n}\n.point_animation {\n  opacity: 1;\n  animation: fadein 0.25s linear forwards, rise 7s ease 1, fadeout 2.5s linear forwards;\n  -o-animation: fadein 0.25s linear forwards, rise 7s ease 1, fadeout 2.5s linear forwards;\n  -moz-animation: fadein 0.25s linear forwards, rise 7s ease 1, fadeout 2.5s linear forwards;\n  -webkit-animation: fadein 0.25s linear forwards, rise 7s ease 1, fadeout 2.5s linear forwards;\n}\n.console_animation_in {\n  opacity: 1;\n  animation: fadein 0.5s linear forwards;\n  -o-animation: fadein 0.5s linear forwards;\n  -moz-animation: fadein 0.5s linear forwards;\n  -webkit-animation: fadein 0.5s linear forwards;\n}\n.console_animation_out {\n  opacity: 1;\n  animation: fadeout 1s linear forwards;\n  -o-animation: fadeout 1s linear forwards;\n  -moz-animation: fadeout 1s linear forwards;\n  -webkit-animation: fadeout 1s linear forwards;\n}\n.fadein {\n  animation: fadein 0.5s;\n  -o-animation: fadein 0.5s;\n  -moz-animation: fadein 0.5s;\n  -webkit-animation: fadein 0.5s;\n}\n.modal_fadein {\n  animation: fadein 0.3s linear forwards;\n  -o-animation: fadein 0.3s linear forwards;\n  -moz-animation: fadein 0.3s linear forwards;\n  -webkit-animation: fadein 0.3s linear forwards;\n}\n.modal_fadeout {\n  animation: fadeout 0.5s linear forwards;\n  -o-animation: fadeout 0.5s linear forwards;\n  -moz-animation: fadeout 0.5s linear forwards;\n  -webkit-animation: fadeout 0.5s linear forwards;\n}\n@keyframes bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(1, 1) translateY(0);\n  }\n  30% {\n    transform: scale(1, 1) translateY(-20px);\n  }\n  50% {\n    transform: scale(1, 1) translateY(0);\n  }\n  65% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes rise {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(1, 1) translateY(-40px);\n  }\n  30% {\n    transform: scale(1, 1) translateY(-40px);\n  }\n  50% {\n    transform: scale(1, 1) translateY(-40px);\n  }\n  65% {\n    transform: scale(1, 1) translateY(-40px);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeout {\n  50% {\n    opacity: 1;\n  }\n  50%, 100% {\n    opacity: 0;\n  }\n}\n@keyframes blurout {\n  from {\n    filter: blur(30px);\n  }\n  to {\n    filter: none;\n  }\n}\n@keyframes blurin {\n  from {\n    filter: none;\n  }\n  to {\n    filter: blur(30px);\n  }\n}\n.resp-sharing-button__link,\n.resp-sharing-button__icon {\n  display: inline-block;\n}\n.resp-sharing-button__link {\n  text-decoration: none;\n  color: #fff;\n  margin: 0.5em;\n}\n.resp-sharing-button {\n  border-radius: 5px;\n  transition: 25ms ease-out;\n  padding: 0.5em 0.75em;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n}\n.resp-sharing-button__icon svg {\n  width: 40px;\n  height: 40px;\n  margin-right: 0.4em;\n  vertical-align: top;\n}\n.resp-sharing-button--small svg {\n  margin: 0;\n  vertical-align: middle;\n}\n/* Non solid icons get a stroke */\n.resp-sharing-button__icon {\n  stroke: #fff;\n  fill: none;\n}\n/* Solid icons get a fill */\n.resp-sharing-button__icon--solid,\n.resp-sharing-button__icon--solidcircle {\n  fill: #fff;\n  stroke: none;\n}\n.resp-sharing-button--twitter {\n  background-color: #55acee;\n}\n.resp-sharing-button--twitter:hover {\n  background-color: #2795e9;\n}\n.resp-sharing-button--pinterest {\n  background-color: #bd081c;\n}\n.resp-sharing-button--pinterest:hover {\n  background-color: #8c0615;\n}\n.resp-sharing-button--facebook {\n  background-color: #3b5998;\n}\n.resp-sharing-button--facebook:hover {\n  background-color: #2d4373;\n}\n.resp-sharing-button--tumblr {\n  background-color: #35465c;\n}\n.resp-sharing-button--tumblr:hover {\n  background-color: #222d3c;\n}\n.resp-sharing-button--reddit {\n  background-color: #5f99cf;\n}\n.resp-sharing-button--reddit:hover {\n  background-color: #3a80c1;\n}\n.resp-sharing-button--google {\n  background-color: #dd4b39;\n}\n.resp-sharing-button--google:hover {\n  background-color: #c23321;\n}\n.resp-sharing-button--linkedin {\n  background-color: #0077b5;\n}\n.resp-sharing-button--linkedin:hover {\n  background-color: #046293;\n}\n.resp-sharing-button--email {\n  background-color: #777;\n}\n.resp-sharing-button--email:hover {\n  background-color: #5e5e5e;\n}\n.resp-sharing-button--xing {\n  background-color: #1a7576;\n}\n.resp-sharing-button--xing:hover {\n  background-color: #114c4c;\n}\n.resp-sharing-button--whatsapp {\n  background-color: #25d366;\n}\n.resp-sharing-button--whatsapp:hover {\n  background-color: #1da851;\n}\n.resp-sharing-button--hackernews {\n  background-color: #ff6600;\n}\n.resp-sharing-button--hackernews:hover,\n.resp-sharing-button--hackernews:focus {\n  background-color: #fb6200;\n}\n.resp-sharing-button--vk {\n  background-color: #507299;\n}\n.resp-sharing-button--vk:hover {\n  background-color: #43648c;\n}\n.resp-sharing-button--facebook {\n  background-color: #3b5998;\n  border-color: #3b5998;\n}\n.resp-sharing-button--facebook:hover,\n.resp-sharing-button--facebook:active {\n  background-color: #2d4373;\n  border-color: #2d4373;\n}\n.resp-sharing-button--twitter {\n  background-color: #55acee;\n  border-color: #55acee;\n}\n.resp-sharing-button--twitter:hover,\n.resp-sharing-button--twitter:active {\n  background-color: #2795e9;\n  border-color: #2795e9;\n}\n.resp-sharing-button--tumblr {\n  background-color: #35465c;\n  border-color: #35465c;\n}\n.resp-sharing-button--tumblr:hover,\n.resp-sharing-button--tumblr:active {\n  background-color: #222d3c;\n  border-color: #222d3c;\n}\n.resp-sharing-button--email {\n  background-color: #777777;\n  border-color: #777777;\n}\n.resp-sharing-button--email:hover,\n.resp-sharing-button--email:active {\n  background-color: #5e5e5e;\n  border-color: #5e5e5e;\n}\n.resp-sharing-button--pinterest {\n  background-color: #bd081c;\n  border-color: #bd081c;\n}\n.resp-sharing-button--pinterest:hover,\n.resp-sharing-button--pinterest:active {\n  background-color: #8c0615;\n  border-color: #8c0615;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3VkaW11cm8vRGVza3RvcC9QZXJzb25hbCBQcm9qZWN0cy90YWtlNS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG9GQUFBO0FBRVI7RUFDSSxrQkFBQTtFQUFvQixzQkFBQTtFQUNwQixPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdHQUFBO0VBQ0EsZUFBQTtFQUlBLGdCQUFBO0FDRko7QURRQTs7Ozs7RUFLSSxlQUFBO0VBQ0EsY0FBQTtBQ0xKO0FEUUE7RUFDSSxlQUFBO0VBQ0Esa0VBQUE7QUNMSjtBRFNBO0VBQ0ksbUVBQUE7QUNOSjtBRFNBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNOSjtBRFNBO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFFQSx1QkFBQTtFQUdBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUdBLGVBQUE7RUFFQSxlQUFBO0VBQ0EsWUFBQTtFQUlBLHlDQUFBO0FDZko7QURzQ0E7RUFJSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUVBLGNBQUE7RUFJQSx5Q0FBQTtBQzNDSjtBRDhDQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUMzQ0o7QUQ4Q0E7RUFDSSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBRUEsbUVBQUE7QUM1Q0o7QUQrQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQzVDSjtBRCtDQTtFQUNJLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUdBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsNERBQUE7QUM5Q0o7QURpREE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FDOUNKO0FEaURBO0VBRUksd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQy9DSjtBRG9EQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNqREo7QURvREE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ2pESjtBRG9EQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFFQSxtQkFBQTtFQUVBLGdDQUFBO0VBSUEseUJBQUE7QUNuREo7QURzREE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBRUEsbUJBQUE7RUFFQSxnQ0FBQTtFQUlBLHlCQUFBO0FDckRKO0FEd0RBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUVBLG1CQUFBO0VBRUEsZ0NBQUE7RUFJQSx5QkFBQTtBQ3ZESjtBRDBEQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFFQSxtQkFBQTtFQUVBLGdDQUFBO0VBSUEseUJBQUE7QUN6REo7QUQ0REE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1FQUFBO0FDekRKO0FENERBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQ0FBQTtBQ3pESjtBRDREQTtFQUNJLGVBQUE7QUN6REo7QUQ0REE7RUFDSSxzQ0FBQTtBQ3pESjtBRDREQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFHQSw0Q0FBQTtBQ3pESjtBRDREQTtFQUlJLGFBQUE7RUFJQSx1QkFBQTtFQUVBLGtCQUFBO0FDaEVKO0FEeUVBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBRUEsVUFBQTtFQUlBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrRUFBQTtBQzFFSjtBRDZFQTtFQUNJLFlBQUE7QUMxRUo7QUQ2RUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUMxRUo7QUQ2RUE7RUFNSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0REFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUMvRUo7QURrRkE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUMvRUo7QURzRkk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsaUJBQUE7QUNyRlI7QUR5RkE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNERBQUE7RUFFQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtBQ3hGSjtBRDJGQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FDeEZKO0FEMkZBO0VBQ0ksZ0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUVBLDREQUFBO0VBQ0EsZUFBQTtBQ3pGSjtBRDZGQTtFQUNJLGtCQUFBO0FDMUZKO0FEOEZBLG1CQUFBO0FBd0JBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNsSEo7QURxSEE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFHQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNwSEo7QURtSUEsNEJBQUE7QUFFQTtFQUNJLGlCQUFBO0VBQW1CLFdBQUE7RUFDbkIsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ2hJSjtBRGtJQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDL0hKO0FEbUlBO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFFQSxvQkFBQTtBQ2pJSjtBRHVKQTtFQUNJLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLG1DQUFBO0FDcEpKO0FEdUpBO0VBQ0ksVUFBQTtFQUNBLHFGQUFBO0VBQ0Esd0ZBQUE7RUFDQSwwRkFBQTtFQUNBLDZGQUFBO0FDcEpKO0FEdUpBO0VBQ0ksVUFBQTtFQUNBLHNDQUFBO0VBQ0EseUNBQUE7RUFDQSwyQ0FBQTtFQUNBLDhDQUFBO0FDcEpKO0FEdUpBO0VBQ0ksVUFBQTtFQUNBLHFDQUFBO0VBQ0Esd0NBQUE7RUFDQSwwQ0FBQTtFQUNBLDZDQUFBO0FDcEpKO0FEdUpBO0VBQ0ksc0JBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUNwSko7QUR1SkE7RUFDSSxzQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsMkNBQUE7RUFDQSw4Q0FBQTtBQ3BKSjtBRHVKQTtFQUNJLHVDQUFBO0VBQ0EsMENBQUE7RUFDQSw0Q0FBQTtFQUNBLCtDQUFBO0FDcEpKO0FEMkpBO0VBQ0k7SUFDSSxvQ0FBQTtFQ3hKTjtFRDBKRTtJQUNJLG9DQUFBO0VDeEpOO0VEMEpFO0lBQ0ksd0NBQUE7RUN4Sk47RUQwSkU7SUFDSSxvQ0FBQTtFQ3hKTjtFRDJKRTtJQUNJLG9DQUFBO0VDekpOO0VEMkpFO0lBQ0ksb0NBQUE7RUN6Sk47QUFDRjtBRDhOQTtFQUNJO0lBQ0ksb0NBQUE7RUNoS047RURrS0U7SUFDSSx3Q0FBQTtFQ2hLTjtFRGtLRTtJQUNJLHdDQUFBO0VDaEtOO0VEa0tFO0lBQ0ksd0NBQUE7RUNoS047RURtS0U7SUFDSSx3Q0FBQTtFQ2pLTjtFRG1LRTtJQUNJLG9DQUFBO0VDaktOO0FBQ0Y7QURzT0E7RUFDSTtJQUNJLFVBQUE7RUN4S047RUQwS0U7SUFDSSxVQUFBO0VDeEtOO0FBQ0Y7QURzTUE7RUFJSTtJQUNJLFVBQUE7RUMvS047RURpTEU7SUFFSSxVQUFBO0VDaExOO0FBQ0Y7QUQwTkE7RUFDSTtJQUNJLGtCQUFBO0VDaE1OO0VEa01FO0lBQ0ksWUFBQTtFQ2hNTjtBQUNGO0FEOE5BO0VBQ0k7SUFDSSxZQUFBO0VDcE1OO0VEc01FO0lBQ0ksa0JBQUE7RUNwTU47QUFDRjtBRDRPQTs7RUFFSSxxQkFBQTtBQ2xOSjtBRHFOQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNsTko7QURxTkE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5REFBQTtBQ2xOSjtBRHFOQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ2xOSjtBRHFOQTtFQUNJLFNBQUE7RUFDQSxzQkFBQTtBQ2xOSjtBRHFOQSxpQ0FBQTtBQUNBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7QUNsTko7QURxTkEsMkJBQUE7QUFDQTs7RUFFSSxVQUFBO0VBQ0EsWUFBQTtBQ2xOSjtBRHFOQTtFQUNJLHlCQUFBO0FDbE5KO0FEcU5BO0VBQ0kseUJBQUE7QUNsTko7QURxTkE7RUFDSSx5QkFBQTtBQ2xOSjtBRHFOQTtFQUNJLHlCQUFBO0FDbE5KO0FEcU5BO0VBQ0kseUJBQUE7QUNsTko7QURxTkE7RUFDSSx5QkFBQTtBQ2xOSjtBRHFOQTtFQUNJLHlCQUFBO0FDbE5KO0FEcU5BO0VBQ0kseUJBQUE7QUNsTko7QURxTkE7RUFDSSx5QkFBQTtBQ2xOSjtBRHFOQTtFQUNJLHlCQUFBO0FDbE5KO0FEcU5BO0VBQ0kseUJBQUE7QUNsTko7QURxTkE7RUFDSSx5QkFBQTtBQ2xOSjtBRHFOQTtFQUNJLHlCQUFBO0FDbE5KO0FEcU5BO0VBQ0kseUJBQUE7QUNsTko7QURxTkE7RUFDSSxzQkFBQTtBQ2xOSjtBRHFOQTtFQUNJLHlCQUFBO0FDbE5KO0FEcU5BO0VBQ0kseUJBQUE7QUNsTko7QURxTkE7RUFDSSx5QkFBQTtBQ2xOSjtBRHFOQTtFQUNJLHlCQUFBO0FDbE5KO0FEcU5BO0VBQ0kseUJBQUE7QUNsTko7QURxTkE7RUFDSSx5QkFBQTtBQ2xOSjtBRG9OQTs7RUFFSSx5QkFBQTtBQ2pOSjtBRG9OQTtFQUNJLHlCQUFBO0FDak5KO0FEb05BO0VBQ0kseUJBQUE7QUNqTko7QURvTkE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FDak5KO0FEb05BOztFQUVJLHlCQUFBO0VBQ0EscUJBQUE7QUNqTko7QURvTkE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FDak5KO0FEb05BOztFQUVJLHlCQUFBO0VBQ0EscUJBQUE7QUNqTko7QURvTkE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FDak5KO0FEb05BOztFQUVJLHlCQUFBO0VBQ0EscUJBQUE7QUNqTko7QURvTkE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FDak5KO0FEb05BOztFQUVJLHlCQUFBO0VBQ0EscUJBQUE7QUNqTko7QURvTkE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FDak5KO0FEb05BOztFQUVJLHlCQUFBO0VBQ0EscUJBQUE7QUNqTkoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiKTtcblxuLmFwcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyAvKkNhbiBhbHNvIGJlIGBmaXhlZGAqL1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgLypTb2x2ZXMgYSBwcm9ibGVtIGluIHdoaWNoIHRoZSBjb250ZW50IGlzIGJlaW5nIGN1dCB3aGVuIHRoZSBkaXYgaXMgc21hbGxlciB0aGFuIGl0cycgd3JhcHBlcjoqL1xuICAgIG1heC13aWR0aDogMTAxJTtcbiAgICAvLyBtYXgtaGVpZ2h0OiAxMDElO1xuXG4gICAgLy8gb3ZlcmZsb3c6IGF1dG87XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC8vIHdpZHRoOiAxMDB2dztcbiAgICAvLyBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uY29ycmVjdF93b3Jkcyxcbi51c2VkX2xldHRlcnMsXG4uc2NvcmUsXG4uaGlnaF9zY29yZSxcbi5oaWdoZXN0X3Njb3Jpbmdfd29yZCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjNGQ0NzQ5O1xufVxuXG4uc2NvcmUge1xuICAgIGZvbnQtc2l6ZTogNjVweDtcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhLUJvbGQnLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgLy8gbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLmhpZ2hfc2NvcmUge1xuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEtTGlnaHQnLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbnRleHRhcmVhIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLmJ1dHQge1xuICAgIGJvcmRlcjogMXB4IG91dHNldCB3aGl0ZTtcbiAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAvLyBoZWlnaHQ6IDgwcHg7IC8vIDE1MHB4IGZvciBkZXNrdG9wLCAxMDBweCBmb3IgbW9iaWxlXG4gICAgLy8gd2lkdGg6IDgwcHg7IC8vMTUwcHggZm9yIGRlc2t0b3AsIDEwMHB4IGZvciBtb2JpbGVcbiAgICBtYXgtd2lkdGg6IDExMHB4O1xuICAgIG1heC1oZWlnaHQ6IDExMHB4O1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIFxuICAgIC8vIG1hcmdpbi10b3A6IDYwcHg7IC8vIGZvciBtb2JpbGVcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLy8gbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgIC8vIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgIC8vIGZvbnQtZmFtaWx5OiBcIkNvXCI7XG4gICAgZm9udC1mYW1pbHk6ICdEb21pbmUtUmVndWxhcicsIHNhbnMtc2VyaWY7XG59XG5cbi8vIC5idXR0OmhvdmVyOmVuYWJsZWQsXG4vLyAudXNlcl9sZXR0ZXJzOmhvdmVyOmVuYWJsZWQsXG4vLyAuYnV0dC1zbTpob3ZlcjplbmFibGVkLFxuLy8gLmNvbnRyb2w6aG92ZXI6ZW5hYmxlZCxcbi8vIC53b3Jkc19idXR0b246aG92ZXI6ZW5hYmxlZHtcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XG4vLyAgICAgLXdlYmtpdC1maWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcbi8vICAgICAtby1maWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcbi8vICAgICAtbW96LWZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xuLy8gfVxuXG4vLyBhOmhvdmVyIHtcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XG4vLyAgICAgLXdlYmtpdC1maWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcbi8vICAgICAtby1maWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcbi8vICAgICAtbW96LWZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xuLy8gfVxuXG4udXNlcl9sZXR0ZXJzIHtcbiAgICAvLyBib3JkZXI6IG5vbmU7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgYm9yZGVyOiAxcHggb3V0c2V0IHdoaXRlO1xuICAgIGJvcmRlci13aWR0aDogNXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjAsIDE2MCwgMTYwKTtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgbWF4LXdpZHRoOiAxMTBweDtcbiAgICBtYXgtaGVpZ2h0OiAxMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLy8gZm9udC1zaXplOiA1MHB4O1xuICAgIGNvbG9yOiByZ2IoOTIsIDkyLCA5Mik7XG5cbiAgICAvLyBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICAvLyBmb250LWZhbWlseTogXCJDb1wiO1xuICAgIGZvbnQtZmFtaWx5OiAnRG9taW5lLVJlZ3VsYXInLCBzYW5zLXNlcmlmO1xufVxuXG4uYnV0dC1zbSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMjQsIDIyNCk7XG4gICAgaGVpZ2h0OiA4MHB4OyAvLyA4MHB4IGZvciBkZXNrdG9wXG4gICAgd2lkdGg6IDh2dzsgLy82MHB4IGZvciBkZXNrdG9wLCAzM3B4IGZvciBtb2JpbGVcbiAgICBtYXgtd2lkdGg6IDUwcHg7XG4gICAgbWF4LWhlaWdodDogNzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5jb250cm9sIHtcbiAgICBib3JkZXI6IDFweCBvdXRzZXQgcmdiKDU0LCA1NCwgNTQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogcmdiKDU0LCA1NCwgNTQpO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAvLyBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhLUxpZ2h0JywgJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4uY29udHJvbDpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC4zO1xuICAgIGN1cnNvcjogYXV0bztcbn1cblxuLndvcmRzX2J1dHRvbiB7XG4gICAgYm9yZGVyOiAycHggb3V0c2V0IHJnYig1NCwgNTQsIDU0KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IHJnYig1NCwgNTQsIDU0KTtcbiAgICAvLyBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIC8vIHBhZGRpbmctdG9wOjEwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuLmxldHRlcnMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb250YWluZXIge1xuICAgIC8vIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyMHZoO1xuICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi51c2VkX2xldHRlcl9yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnVzZWRfbGV0dGVyX2ljb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uc3RhdHNfbW9kYWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHdpZHRoOiAzNjBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLy8gYm9yZGVyOiAxMHB4IHNvbGlkIHJnYigyMzIsIDIzMiwgMjMyKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjY2NjO1xufVxuXG4udHV0b3JpYWxfbW9kYWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDU3MHB4O1xuICAgIHdpZHRoOiAzOTBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLy8gYm9yZGVyOiAxMHB4IHNvbGlkIHJnYigyMzIsIDIzMiwgMjMyKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjY2NjO1xufVxuXG4ud29yZHNfbW9kYWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDU1MHB4O1xuICAgIHdpZHRoOiAzMzBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLy8gYm9yZGVyOiAxMHB4IHNvbGlkIHJnYigyMzIsIDIzMiwgMjMyKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjY2NjO1xufVxuXG4uZ2l2ZXVwX21vZGFsIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC8vIGJvcmRlcjogMTBweCBzb2xpZCByZ2IoMjMyLCAyMzIsIDIzMik7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2NjYztcbn1cblxuLm1vZGFsX3RleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEtTGlnaHQnLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbi5tb2RhbF9oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjYzYxMTAwO1xuICAgIGZvbnQtZmFtaWx5OiAnRG9taW5lLUJvbGQnLCBzYW5zLXNlcmlmO1xufVxuXG4ubW9kYWxfaGVhZGVyX3NtIHtcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5tb2RhbF90aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6ICdEb21pbmUtQm9sZCcsIHNhbnMtc2VyaWY7XG59XG5cbi5jZW50ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4ueW91X2xvc2Uge1xuICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgLy8gd2lkdGg6IDM2MHB4O1xuICAgIC8vIHRvcDogNTAlO1xuICAgIC8vIGxlZnQ6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAvLyBib3JkZXI6IDEwcHggc29saWQgcmdiKDIzMiwgMjMyLCAyMzIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAvLyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gICAgLy8gLW1vei1ib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gICAgLy8gLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gICAgLy8gYm94LXNoYWRvdzogMCAwIDEwcHggI2NjYztcbn1cblxuLnBvaW50X3ZhbHVlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICAgIC8vIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDMycHg7IC8vIDY2cHggZm9yIGRlc2t0b3BcbiAgICAvLyBtYXJnaW4tdG9wOiAtOTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xuICAgIGZvbnQtZmFtaWx5OidJbmNvbnNvbGF0YS1Cb2xkJywgJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4uc29jaWFsX21lZGlhX2ljb24ge1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLmFsZXJ0X3RleHQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogcmdiKDYzLCA2MywgNjMpO1xuICAgIG1hcmdpbi10b3A6MjBweDtcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhLUxpZ2h0JywgJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4uaGVhZGVyIHtcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XG4gICAgLy8gbGVmdDogMDtcbiAgICAvLyB0b3A6IDA7XG4gICAgLy8gd2lkdGg6IDEwMCU7XG5cbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICM0ZDQ3NDk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxODQsIDE4NCwgMTg0KTtcbn1cblxudWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAvLyBtYXJnaW46IDAgYXV0bztcbiAgICAvLyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIC8vIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAvLyBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIC8vIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLy8gcGFkZGluZzogMjBweDtcbiAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgLy8gZm9udC1zaXplOiAyNXB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG5cbmhlYWRlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgLy8gcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICAvLyBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICM0ZDQ3NDk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxODQsIDE4NCwgMTg0KTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uaXRlbSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICM0ZDQ3NDk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxODQsIDE4NCwgMTg0KTtcbn1cblxuLmRhdGEge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIHVudmlzaXRlZCBsaW5rICovXG4vLyBhOmxpbmsge1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbi8vIH1cblxuLy8gLyogdmlzaXRlZCBsaW5rICovXG4vLyBhOnZpc2l0ZWQge1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuLy8gfVxuXG4vLyAvKiBtb3VzZSBvdmVyIGxpbmsgKi9cbi8vIGE6aG92ZXIge1xuLy8gICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNkZTU0NDU7XG4vLyAgICAgLy8gY29sb3I6IHdoaXRlO1xuLy8gICAgIGZpbHRlcjogbm9uZTtcbi8vIH1cblxuLy8gLyogc2VsZWN0ZWQgbGluayAqL1xuLy8gYTphY3RpdmUge1xuLy8gICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNkZTU0NDU7XG4vLyAgICAgLy8gY29sb3I6IHdoaXRlO1xuLy8gICAgIGZpbHRlcjogbm9uZTtcbi8vIH1cblxuLnRhYnMge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNjAsIDE2MCwgMTYwKTtcbiAgICB3aWR0aDogMjAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRhYnNfYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGU1NDQ1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvLyBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gICAgLy8gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZmlsdGVyOiBub25lO1xufVxuXG4vLyBociB7XG4vLyAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbi8vICAgICBjb2xvcjogI2NjYztcbi8vICAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xuLy8gfVxuXG4vLyBociB7XG4vLyAgICAgYm9yZGVyOiAwO1xuLy8gICAgIGhlaWdodDogMXB4O1xuLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwLjc1KSwgcmdiYSgwLCAwLCAwLCAwKSk7XG4vLyB9XG5cbi8qIEdseXBoLCBieSBIYXJyeSBSb2JlcnRzICovXG5cbmhyIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTsgLyogRm9yIElFICovXG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogbWVkaXVtIGRvdWJsZSByZ2IoMjAzLCAyMDMsIDIwMyk7XG4gICAgY29sb3I6ICByZ2IoMjAzLCAyMDMsIDIwMyk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaHI6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMC43ZW07XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBwYWRkaW5nOiAwIDAuMjVlbTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuXG4uYmx1ci1iYWNrZ3JvdW5kX2luIHtcbiAgICBmaWx0ZXI6IGJsdXIoMzBweCk7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMzBweCk7XG4gICAgLW8tZmlsdGVyOiBibHVyKDMwcHgpO1xuICAgIC1tb3otZmlsdGVyOiBibHVyKDMwcHgpO1xuXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAvLyB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluO1xuICAgIC8vIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbjtcbiAgICAvLyAtby10cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluO1xuICAgIC8vIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbjtcbn1cblxuLmluIHtcbiAgICAvLyBhbmltYXRpb246IGJsdXJpbiAwLjNzLCBsaW5lYXIgZm9yd2FyZHM7XG4gICAgLy8gLW8tYW5pbWF0aW9uOiBibHVyaW4gMC4zcywgbGluZWFyIGZvcndhcmRzO1xuICAgIC8vIC1tb3otYW5pbWF0aW9uOiBibHVyaW4gMC4zcywgbGluZWFyIGZvcndhcmRzO1xuICAgIC8vIC13ZWJraXQtYW5pbWF0aW9uOiBibHVyaW4gMC4zcywgbGluZWFyIGZvcndhcmRzO1xufVxuXG4uYmx1ci1iYWNrZ3JvdW5kX291dCB7XG4gICAgLy8gYW5pbWF0aW9uOiBibHVyb3V0IDAuM3MsIGxpbmVhciBmb3J3YXJkcztcbiAgICAvLyAtby1hbmltYXRpb246IGJsdXJvdXQgMC4zcywgbGluZWFyIGZvcndhcmRzO1xuICAgIC8vIC1tb3otYW5pbWF0aW9uOiBibHVyb3V0IDAuM3MsIGxpbmVhciBmb3J3YXJkcztcbiAgICAvLyAtd2Via2l0LWFuaW1hdGlvbjogYmx1cm91dCAwLjNzLCBsaW5lYXIgZm9yd2FyZHM7XG59XG5cbi5ib3VuY2Uge1xuICAgIGFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UgMTtcbiAgICAtby1hbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIDE7XG4gICAgLW1vei1hbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIDE7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIDE7XG59XG5cbi5wb2ludF9hbmltYXRpb24ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uOiBmYWRlaW4gMC4yNXMgbGluZWFyIGZvcndhcmRzLCByaXNlIDdzIGVhc2UgMSwgZmFkZW91dCAyLjVzIGxpbmVhciBmb3J3YXJkcztcbiAgICAtby1hbmltYXRpb246IGZhZGVpbiAwLjI1cyBsaW5lYXIgZm9yd2FyZHMsIHJpc2UgN3MgZWFzZSAxLCBmYWRlb3V0IDIuNXMgbGluZWFyIGZvcndhcmRzO1xuICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMC4yNXMgbGluZWFyIGZvcndhcmRzLCByaXNlIDdzIGVhc2UgMSwgZmFkZW91dCAyLjVzIGxpbmVhciBmb3J3YXJkcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuMjVzIGxpbmVhciBmb3J3YXJkcywgcmlzZSA3cyBlYXNlIDEsIGZhZGVvdXQgMi41cyBsaW5lYXIgZm9yd2FyZHM7XG59XG5cbi5jb25zb2xlX2FuaW1hdGlvbl9pbiB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBhbmltYXRpb246IGZhZGVpbiAwLjVzIGxpbmVhciBmb3J3YXJkcztcbiAgICAtby1hbmltYXRpb246IGZhZGVpbiAwLjVzIGxpbmVhciBmb3J3YXJkcztcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDAuNXMgbGluZWFyIGZvcndhcmRzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41cyBsaW5lYXIgZm9yd2FyZHM7XG59XG5cbi5jb25zb2xlX2FuaW1hdGlvbl9vdXQge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uOiBmYWRlb3V0IDFzIGxpbmVhciBmb3J3YXJkcztcbiAgICAtby1hbmltYXRpb246IGZhZGVvdXQgMXMgbGluZWFyIGZvcndhcmRzO1xuICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlb3V0IDFzIGxpbmVhciBmb3J3YXJkcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZW91dCAxcyBsaW5lYXIgZm9yd2FyZHM7XG59XG5cbi5mYWRlaW4ge1xuICAgIGFuaW1hdGlvbjogZmFkZWluIDAuNXM7XG4gICAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMC41cztcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDAuNXM7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzO1xufVxuXG4ubW9kYWxfZmFkZWluIHtcbiAgICBhbmltYXRpb246IGZhZGVpbiAwLjNzIGxpbmVhciBmb3J3YXJkcztcbiAgICAtby1hbmltYXRpb246IGZhZGVpbiAwLjNzIGxpbmVhciBmb3J3YXJkcztcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDAuM3MgbGluZWFyIGZvcndhcmRzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC4zcyBsaW5lYXIgZm9yd2FyZHM7XG59XG5cbi5tb2RhbF9mYWRlb3V0IHtcbiAgICBhbmltYXRpb246IGZhZGVvdXQgMC41cyBsaW5lYXIgZm9yd2FyZHM7XG4gICAgLW8tYW5pbWF0aW9uOiBmYWRlb3V0IDAuNXMgbGluZWFyIGZvcndhcmRzO1xuICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlb3V0IDAuNXMgbGluZWFyIGZvcndhcmRzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlb3V0IDAuNXMgbGluZWFyIGZvcndhcmRzO1xufVxuXG4vLyAubW9kYWxfYXBwZWFyIHtcbi8vICAgICBhbmltYXRpb246IG1vZGFsX2FwcGVhciAwLjVzO1xuLy8gfVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDEwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgMzAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICAvLyA1OCUgIHsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpIHRyYW5zbGF0ZVkoLTdweCk7IH1cbiAgICA2NSUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxufVxuXG5ALW8ta2V5ZnJhbWVzIGJvdW5jZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDEwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgMzAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC01NXB4KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICAvLyA1OCUgIHsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpIHRyYW5zbGF0ZVkoLTdweCk7IH1cbiAgICA2NSUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxufVxuXG5ALW1vei1rZXlmcmFtZXMgYm91bmNlIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgMTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICAzMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTU1cHgpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIC8vIDU4JSAgeyB0cmFuc2Zvcm06IHNjYWxlKDEsMSkgdHJhbnNsYXRlWSgtN3B4KTsgfVxuICAgIDY1JSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2Uge1xuICAgIDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDEwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICAzMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNTVweCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICAvLyA1OCUgIHsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpIHRyYW5zbGF0ZVkoLTdweCk7IH1cbiAgICA2NSUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyByaXNlIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgMTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC00MHB4KTtcbiAgICB9XG4gICAgMzAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC00MHB4KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC00MHB4KTtcbiAgICB9XG4gICAgLy8gNTglICB7IHRyYW5zZm9ybTogc2NhbGUoMSwxKSB0cmFuc2xhdGVZKC03cHgpOyB9XG4gICAgNjUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC00MHB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59XG5cbkAtby1rZXlmcmFtZXMgcmlzZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDEwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgfVxuICAgIDMwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgfVxuICAgIC8vIDU4JSAgeyB0cmFuc2Zvcm06IHNjYWxlKDEsMSkgdHJhbnNsYXRlWSgtN3B4KTsgfVxuICAgIDY1JSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcmlzZSB7XG4gICAgMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgMTAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTQwcHgpO1xuICAgIH1cbiAgICAzMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC00MHB4KTtcbiAgICB9XG4gICAgLy8gNTglICB7IHRyYW5zZm9ybTogc2NhbGUoMSwxKSB0cmFuc2xhdGVZKC03cHgpOyB9XG4gICAgNjUlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTQwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxufVxuXG5ALW1vei1rZXlmcmFtZXMgcmlzZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDEwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgfVxuICAgIDMwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgfVxuICAgIC8vIDU4JSAgeyB0cmFuc2Zvcm06IHNjYWxlKDEsMSkgdHJhbnNsYXRlWSgtN3B4KTsgfVxuICAgIDY1JSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbkAtby1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVvdXQge1xuICAgIC8vIDAlLDUwJSB7XG4gICAgLy8gICAgIG9wYWNpdHk6IDA7XG4gICAgLy8gfVxuICAgIDUwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDUwJSxcbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG59XG5cbkAtby1rZXlmcmFtZXMgZmFkZW91dCB7XG4gICAgLy8gMCUsNTAlIHtcbiAgICAvLyAgICAgb3BhY2l0eTogMDtcbiAgICAvLyB9XG4gICAgNTAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgNTAlLFxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIGZhZGVvdXQge1xuICAgIC8vIDAlLDUwJSB7XG4gICAgLy8gICAgIG9wYWNpdHk6IDA7XG4gICAgLy8gfVxuICAgIDUwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDUwJSxcbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlb3V0IHtcbiAgICAvLyAwJSw1MCUge1xuICAgIC8vICAgICBvcGFjaXR5OiAwO1xuICAgIC8vIH1cbiAgICA1MCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICA1MCUsXG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJsdXJvdXQge1xuICAgIGZyb20ge1xuICAgICAgICBmaWx0ZXI6IGJsdXIoMzBweCk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgZmlsdGVyOiBub25lO1xuICAgIH1cbn1cblxuQC1vLWtleWZyYW1lcyBibHVyb3V0IHtcbiAgICBmcm9tIHtcbiAgICAgICAgZmlsdGVyOiBibHVyKDMwcHgpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICB9XG59XG5cbkAtbW96LWtleWZyYW1lcyBibHVyb3V0IHtcbiAgICBmcm9tIHtcbiAgICAgICAgZmlsdGVyOiBibHVyKDMwcHgpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBibHVyb3V0IHtcbiAgICBmcm9tIHtcbiAgICAgICAgZmlsdGVyOiBibHVyKDMwcHgpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgYmx1cmluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgZmlsdGVyOiBub25lO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIGZpbHRlcjogYmx1cigzMHB4KTtcbiAgICB9XG59XG5cbkAtby1rZXlmcmFtZXMgYmx1cmluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgZmlsdGVyOiBub25lO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIGZpbHRlcjogYmx1cigzMHB4KTtcbiAgICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBibHVyaW4ge1xuICAgIGZyb20ge1xuICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgZmlsdGVyOiBibHVyKDMwcHgpO1xuICAgIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIGJsdXJpbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBmaWx0ZXI6IGJsdXIoMzBweCk7XG4gICAgfVxufVxuXG4vLyBAa2V5ZnJhbWVzIG1vZGFsX2FwcGVhciB7XG4vLyAgICAgZnJvbSB7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41LCAwLjUpO1xuLy8gICAgICAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVxuLy8gICAgIH1cbi8vICAgICB0byB7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG4vLyAgICAgfVxuLy8gfVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbl9fbGluayxcbi5yZXNwLXNoYXJpbmctYnV0dG9uX19pY29uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uX19saW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luOiAwLjVlbTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0cmFuc2l0aW9uOiAyNW1zIGVhc2Utb3V0O1xuICAgIHBhZGRpbmc6IDAuNWVtIDAuNzVlbTtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uX19pY29uIHN2ZyB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMC40ZW07XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXNtYWxsIHN2ZyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi8qIE5vbiBzb2xpZCBpY29ucyBnZXQgYSBzdHJva2UgKi9cbi5yZXNwLXNoYXJpbmctYnV0dG9uX19pY29uIHtcbiAgICBzdHJva2U6ICNmZmY7XG4gICAgZmlsbDogbm9uZTtcbn1cblxuLyogU29saWQgaWNvbnMgZ2V0IGEgZmlsbCAqL1xuLnJlc3Atc2hhcmluZy1idXR0b25fX2ljb24tLXNvbGlkLFxuLnJlc3Atc2hhcmluZy1idXR0b25fX2ljb24tLXNvbGlkY2lyY2xlIHtcbiAgICBmaWxsOiAjZmZmO1xuICAgIHN0cm9rZTogbm9uZTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXR3aXR0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NWFjZWU7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS10d2l0dGVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc5NWU5O1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tcGludGVyZXN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmQwODFjO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tcGludGVyZXN0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGMwNjE1O1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tZmFjZWJvb2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1mYWNlYm9vazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkNDM3Mztcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXR1bWJsciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1NDY1Yztcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXR1bWJscjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMmQzYztcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXJlZGRpdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmOTljZjtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXJlZGRpdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNhODBjMTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLWdvb2dsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGIzOTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLWdvb2dsZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyMzMyMTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLWxpbmtlZGluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3N2I1O1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tbGlua2VkaW46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDYyOTM7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1lbWFpbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3Nztcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLWVtYWlsOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWU1ZTVlO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0teGluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhNzU3Njtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXhpbmc6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTRjNGM7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS13aGF0c2FwcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1ZDM2Njtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXdoYXRzYXBwOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWRhODUxO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0taGFja2VybmV3cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjYwMDtcbn1cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1oYWNrZXJuZXdzOmhvdmVyLFxuLnJlc3Atc2hhcmluZy1idXR0b24tLWhhY2tlcm5ld3M6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYjYyMDA7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS12ayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUwNzI5OTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXZrOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM2NDhjO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tZmFjZWJvb2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XG4gICAgYm9yZGVyLWNvbG9yOiAjM2I1OTk4O1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tZmFjZWJvb2s6aG92ZXIsXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tZmFjZWJvb2s6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ0MzczO1xuICAgIGJvcmRlci1jb2xvcjogIzJkNDM3Mztcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXR3aXR0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NWFjZWU7XG4gICAgYm9yZGVyLWNvbG9yOiAjNTVhY2VlO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tdHdpdHRlcjpob3Zlcixcbi5yZXNwLXNoYXJpbmctYnV0dG9uLS10d2l0dGVyOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3OTVlOTtcbiAgICBib3JkZXItY29sb3I6ICMyNzk1ZTk7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS10dW1ibHIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTQ2NWM7XG4gICAgYm9yZGVyLWNvbG9yOiAjMzU0NjVjO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tdHVtYmxyOmhvdmVyLFxuLnJlc3Atc2hhcmluZy1idXR0b24tLXR1bWJscjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjJkM2M7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjIyZDNjO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tZW1haWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzc3Nzc7XG4gICAgYm9yZGVyLWNvbG9yOiAjNzc3Nzc3O1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tZW1haWw6aG92ZXIsXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tZW1haWw6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWU1ZTVlO1xuICAgIGJvcmRlci1jb2xvcjogIzVlNWU1ZTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXBpbnRlcmVzdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkMDgxYztcbiAgICBib3JkZXItY29sb3I6ICNiZDA4MWM7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1waW50ZXJlc3Q6aG92ZXIsXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tcGludGVyZXN0OmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhjMDYxNTtcbiAgICBib3JkZXItY29sb3I6ICM4YzA2MTU7XG59XG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiKTtcbi5hcHAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qQ2FuIGFsc28gYmUgYGZpeGVkYCovXG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICAvKlNvbHZlcyBhIHByb2JsZW0gaW4gd2hpY2ggdGhlIGNvbnRlbnQgaXMgYmVpbmcgY3V0IHdoZW4gdGhlIGRpdiBpcyBzbWFsbGVyIHRoYW4gaXRzJyB3cmFwcGVyOiovXG4gIG1heC13aWR0aDogMTAxJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvcnJlY3Rfd29yZHMsXG4udXNlZF9sZXR0ZXJzLFxuLnNjb3JlLFxuLmhpZ2hfc2NvcmUsXG4uaGlnaGVzdF9zY29yaW5nX3dvcmQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjNGQ0NzQ5O1xufVxuXG4uc2NvcmUge1xuICBmb250LXNpemU6IDY1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkluY29uc29sYXRhLUJvbGRcIiwgXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbi5oaWdoX3Njb3JlIHtcbiAgZm9udC1mYW1pbHk6IFwiSW5jb25zb2xhdGEtTGlnaHRcIiwgXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbnRleHRhcmVhIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogOTUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcmVzaXplOiBub25lO1xuICBib3JkZXItY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLmJ1dHQge1xuICBib3JkZXI6IDFweCBvdXRzZXQgd2hpdGU7XG4gIGJvcmRlci13aWR0aDogNXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWF4LXdpZHRoOiAxMTBweDtcbiAgbWF4LWhlaWdodDogMTEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiRG9taW5lLVJlZ3VsYXJcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnVzZXJfbGV0dGVycyB7XG4gIGJvcmRlcjogMXB4IG91dHNldCB3aGl0ZTtcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhMGEwYTA7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIG1heC13aWR0aDogMTEwcHg7XG4gIG1heC1oZWlnaHQ6IDExMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjNWM1YzVjO1xuICBmb250LWZhbWlseTogXCJEb21pbmUtUmVndWxhclwiLCBzYW5zLXNlcmlmO1xufVxuXG4uYnV0dC1zbSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4dnc7XG4gIG1heC13aWR0aDogNTBweDtcbiAgbWF4LWhlaWdodDogNzBweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmNvbnRyb2wge1xuICBib3JkZXI6IDFweCBvdXRzZXQgIzM2MzYzNjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjMzYzNjM2O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiSW5jb25zb2xhdGEtTGlnaHRcIiwgXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbi5jb250cm9sOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC4zO1xuICBjdXJzb3I6IGF1dG87XG59XG5cbi53b3Jkc19idXR0b24ge1xuICBib3JkZXI6IDJweCBvdXRzZXQgIzM2MzYzNjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjMzYzNjM2O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5cbi5sZXR0ZXJzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMHZoO1xufVxuXG4udXNlZF9sZXR0ZXJfcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi51c2VkX2xldHRlcl9pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbGV4LWdyb3c6IDE7XG4gIHdpZHRoOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uc3RhdHNfbW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiAzNjBweDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNjY2M7XG59XG5cbi50dXRvcmlhbF9tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiA1NzBweDtcbiAgd2lkdGg6IDM5MHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDNweCAjY2NjO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggI2NjYztcbn1cblxuLndvcmRzX21vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDU1MHB4O1xuICB3aWR0aDogMzMwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDNweCAjY2NjO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAjY2NjO1xufVxuXG4uZ2l2ZXVwX21vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDE4MHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDNweCAjY2NjO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAjY2NjO1xufVxuXG4ubW9kYWxfdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LWZhbWlseTogXCJJbmNvbnNvbGF0YS1MaWdodFwiLCBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuLm1vZGFsX2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjYzYxMTAwO1xuICBmb250LWZhbWlseTogXCJEb21pbmUtQm9sZFwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubW9kYWxfaGVhZGVyX3NtIHtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4ubW9kYWxfdGl0bGUge1xuICBmb250LWZhbWlseTogXCJEb21pbmUtQm9sZFwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY2VudGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLnlvdV9sb3NlIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLnBvaW50X3ZhbHVlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDM0cHg7XG4gIG9wYWNpdHk6IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xuICBmb250LWZhbWlseTogXCJJbmNvbnNvbGF0YS1Cb2xkXCIsIFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4uc29jaWFsX21lZGlhX2ljb24ge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5hbGVydF90ZXh0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzNmM2YzZjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiSW5jb25zb2xhdGEtTGlnaHRcIiwgXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM0ZDQ3NDk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjhiOGI4O1xufVxuXG51bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG51bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM0ZDQ3NDk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjhiOGI4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uaXRlbSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjNGQ0NzQ5O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5kYXRhIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4vKiB1bnZpc2l0ZWQgbGluayAqL1xuLnRhYnMge1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhMGEwYTA7XG4gIHdpZHRoOiAyMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRhYnNfYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlNTQ0NTtcbiAgY29sb3I6IHdoaXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgZmlsdGVyOiBub25lO1xufVxuXG4vKiBHbHlwaCwgYnkgSGFycnkgUm9iZXJ0cyAqL1xuaHIge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgLyogRm9yIElFICovXG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXRvcDogbWVkaXVtIGRvdWJsZSAjY2JjYmNiO1xuICBjb2xvcjogI2NiY2JjYjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5ocjphZnRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0wLjdlbTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgcGFkZGluZzogMCAwLjI1ZW07XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uYmx1ci1iYWNrZ3JvdW5kX2luIHtcbiAgZmlsdGVyOiBibHVyKDMwcHgpO1xuICAtd2Via2l0LWZpbHRlcjogYmx1cigzMHB4KTtcbiAgLW8tZmlsdGVyOiBibHVyKDMwcHgpO1xuICAtbW96LWZpbHRlcjogYmx1cigzMHB4KTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5ib3VuY2Uge1xuICBhbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIDE7XG4gIC1vLWFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UgMTtcbiAgLW1vei1hbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIDE7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSAxO1xufVxuXG4ucG9pbnRfYW5pbWF0aW9uIHtcbiAgb3BhY2l0eTogMTtcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMC4yNXMgbGluZWFyIGZvcndhcmRzLCByaXNlIDdzIGVhc2UgMSwgZmFkZW91dCAyLjVzIGxpbmVhciBmb3J3YXJkcztcbiAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMC4yNXMgbGluZWFyIGZvcndhcmRzLCByaXNlIDdzIGVhc2UgMSwgZmFkZW91dCAyLjVzIGxpbmVhciBmb3J3YXJkcztcbiAgLW1vei1hbmltYXRpb246IGZhZGVpbiAwLjI1cyBsaW5lYXIgZm9yd2FyZHMsIHJpc2UgN3MgZWFzZSAxLCBmYWRlb3V0IDIuNXMgbGluZWFyIGZvcndhcmRzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuMjVzIGxpbmVhciBmb3J3YXJkcywgcmlzZSA3cyBlYXNlIDEsIGZhZGVvdXQgMi41cyBsaW5lYXIgZm9yd2FyZHM7XG59XG5cbi5jb25zb2xlX2FuaW1hdGlvbl9pbiB7XG4gIG9wYWNpdHk6IDE7XG4gIGFuaW1hdGlvbjogZmFkZWluIDAuNXMgbGluZWFyIGZvcndhcmRzO1xuICAtby1hbmltYXRpb246IGZhZGVpbiAwLjVzIGxpbmVhciBmb3J3YXJkcztcbiAgLW1vei1hbmltYXRpb246IGZhZGVpbiAwLjVzIGxpbmVhciBmb3J3YXJkcztcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzIGxpbmVhciBmb3J3YXJkcztcbn1cblxuLmNvbnNvbGVfYW5pbWF0aW9uX291dCB7XG4gIG9wYWNpdHk6IDE7XG4gIGFuaW1hdGlvbjogZmFkZW91dCAxcyBsaW5lYXIgZm9yd2FyZHM7XG4gIC1vLWFuaW1hdGlvbjogZmFkZW91dCAxcyBsaW5lYXIgZm9yd2FyZHM7XG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlb3V0IDFzIGxpbmVhciBmb3J3YXJkcztcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVvdXQgMXMgbGluZWFyIGZvcndhcmRzO1xufVxuXG4uZmFkZWluIHtcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cztcbiAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMC41cztcbiAgLW1vei1hbmltYXRpb246IGZhZGVpbiAwLjVzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNXM7XG59XG5cbi5tb2RhbF9mYWRlaW4ge1xuICBhbmltYXRpb246IGZhZGVpbiAwLjNzIGxpbmVhciBmb3J3YXJkcztcbiAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMC4zcyBsaW5lYXIgZm9yd2FyZHM7XG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMC4zcyBsaW5lYXIgZm9yd2FyZHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC4zcyBsaW5lYXIgZm9yd2FyZHM7XG59XG5cbi5tb2RhbF9mYWRlb3V0IHtcbiAgYW5pbWF0aW9uOiBmYWRlb3V0IDAuNXMgbGluZWFyIGZvcndhcmRzO1xuICAtby1hbmltYXRpb246IGZhZGVvdXQgMC41cyBsaW5lYXIgZm9yd2FyZHM7XG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlb3V0IDAuNXMgbGluZWFyIGZvcndhcmRzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZW91dCAwLjVzIGxpbmVhciBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBib3VuY2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDEwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxuICA2NSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgYm91bmNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAxMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAzMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNTVweCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgNjUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgYm91bmNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAxMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAzMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNTVweCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgNjUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDEwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgMzAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNTVweCk7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxuICA2NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJpc2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDEwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC00MHB4KTtcbiAgfVxuICAzMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTQwcHgpO1xuICB9XG4gIDY1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC00MHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgcmlzZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgMTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTQwcHgpO1xuICB9XG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC00MHB4KTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gIH1cbiAgNjUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTQwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHJpc2Uge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgMTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gIH1cbiAgMzAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gIH1cbiAgNjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyByaXNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAxMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gIH1cbiAgMzAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTQwcHgpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC00MHB4KTtcbiAgfVxuICA2NSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVvdXQge1xuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIGZhZGVvdXQge1xuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgZmFkZW91dCB7XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1MCUsIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlb3V0IHtcbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUwJSwgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBibHVyb3V0IHtcbiAgZnJvbSB7XG4gICAgZmlsdGVyOiBibHVyKDMwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBmaWx0ZXI6IG5vbmU7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgYmx1cm91dCB7XG4gIGZyb20ge1xuICAgIGZpbHRlcjogYmx1cigzMHB4KTtcbiAgfVxuICB0byB7XG4gICAgZmlsdGVyOiBub25lO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgYmx1cm91dCB7XG4gIGZyb20ge1xuICAgIGZpbHRlcjogYmx1cigzMHB4KTtcbiAgfVxuICB0byB7XG4gICAgZmlsdGVyOiBub25lO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgYmx1cm91dCB7XG4gIGZyb20ge1xuICAgIGZpbHRlcjogYmx1cigzMHB4KTtcbiAgfVxuICB0byB7XG4gICAgZmlsdGVyOiBub25lO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJsdXJpbiB7XG4gIGZyb20ge1xuICAgIGZpbHRlcjogbm9uZTtcbiAgfVxuICB0byB7XG4gICAgZmlsdGVyOiBibHVyKDMwcHgpO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIGJsdXJpbiB7XG4gIGZyb20ge1xuICAgIGZpbHRlcjogbm9uZTtcbiAgfVxuICB0byB7XG4gICAgZmlsdGVyOiBibHVyKDMwcHgpO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgYmx1cmluIHtcbiAgZnJvbSB7XG4gICAgZmlsdGVyOiBub25lO1xuICB9XG4gIHRvIHtcbiAgICBmaWx0ZXI6IGJsdXIoMzBweCk7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBibHVyaW4ge1xuICBmcm9tIHtcbiAgICBmaWx0ZXI6IG5vbmU7XG4gIH1cbiAgdG8ge1xuICAgIGZpbHRlcjogYmx1cigzMHB4KTtcbiAgfVxufVxuLnJlc3Atc2hhcmluZy1idXR0b25fX2xpbmssXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbl9faWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b25fX2xpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDAuNWVtO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogMjVtcyBlYXNlLW91dDtcbiAgcGFkZGluZzogMC41ZW0gMC43NWVtO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uX19pY29uIHN2ZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogMC40ZW07XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1zbWFsbCBzdmcge1xuICBtYXJnaW46IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi8qIE5vbiBzb2xpZCBpY29ucyBnZXQgYSBzdHJva2UgKi9cbi5yZXNwLXNoYXJpbmctYnV0dG9uX19pY29uIHtcbiAgc3Ryb2tlOiAjZmZmO1xuICBmaWxsOiBub25lO1xufVxuXG4vKiBTb2xpZCBpY29ucyBnZXQgYSBmaWxsICovXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbl9faWNvbi0tc29saWQsXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbl9faWNvbi0tc29saWRjaXJjbGUge1xuICBmaWxsOiAjZmZmO1xuICBzdHJva2U6IG5vbmU7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS10d2l0dGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1YWNlZTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXR3aXR0ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc5NWU5O1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tcGludGVyZXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkMDgxYztcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXBpbnRlcmVzdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YzA2MTU7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1mYWNlYm9vazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDQzNzM7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS10dW1ibHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU0NjVjO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tdHVtYmxyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMmQzYztcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXJlZGRpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1Zjk5Y2Y7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1yZWRkaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E4MGMxO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tZ29vZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGIzOTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLWdvb2dsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMjMzMjE7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1saW5rZWRpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc3YjU7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1saW5rZWRpbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDYyOTM7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1lbWFpbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1lbWFpbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZTVlNWU7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS14aW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhNzU3Njtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXhpbmc6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE0YzRjO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0td2hhdHNhcHAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjVkMzY2O1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0td2hhdHNhcHA6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWRhODUxO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0taGFja2VybmV3cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjY2MDA7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1oYWNrZXJuZXdzOmhvdmVyLFxuLnJlc3Atc2hhcmluZy1idXR0b24tLWhhY2tlcm5ld3M6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI2MjAwO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tdmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA3Mjk5O1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tdms6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM2NDhjO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xuICBib3JkZXItY29sb3I6ICMzYjU5OTg7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1mYWNlYm9vazpob3Zlcixcbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1mYWNlYm9vazphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ0MzczO1xuICBib3JkZXItY29sb3I6ICMyZDQzNzM7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS10d2l0dGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1YWNlZTtcbiAgYm9yZGVyLWNvbG9yOiAjNTVhY2VlO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tdHdpdHRlcjpob3Zlcixcbi5yZXNwLXNoYXJpbmctYnV0dG9uLS10d2l0dGVyOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzk1ZTk7XG4gIGJvcmRlci1jb2xvcjogIzI3OTVlOTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXR1bWJsciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTQ2NWM7XG4gIGJvcmRlci1jb2xvcjogIzM1NDY1Yztcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXR1bWJscjpob3Zlcixcbi5yZXNwLXNoYXJpbmctYnV0dG9uLS10dW1ibHI6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMmQzYztcbiAgYm9yZGVyLWNvbG9yOiAjMjIyZDNjO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tZW1haWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3Nzc3O1xuICBib3JkZXItY29sb3I6ICM3Nzc3Nzc7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1lbWFpbDpob3Zlcixcbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1lbWFpbDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWU1ZTVlO1xuICBib3JkZXItY29sb3I6ICM1ZTVlNWU7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1waW50ZXJlc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmQwODFjO1xuICBib3JkZXItY29sb3I6ICNiZDA4MWM7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1waW50ZXJlc3Q6aG92ZXIsXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tcGludGVyZXN0OmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YzA2MTU7XG4gIGJvcmRlci1jb2xvcjogIzhjMDYxNTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/app.service */ "./src/app/services/app.service.ts");






let AppComponent = class AppComponent {
    constructor(httpClient, datepipe, firebaseSvc, appSvc) {
        this.httpClient = httpClient;
        this.datepipe = datepipe;
        this.firebaseSvc = firebaseSvc;
        this.appSvc = appSvc;
        this.title = 'take5';
        this.cell_color = '#f2f2f2';
        this.cell_color_selected = '#f2f880';
        this.black = '#242022';
        this.cells = [
            { name: "cell1", value: "", point_value: 0, color: this.cell_color, user_letter_index: null, font_color: this.black, selected: false },
            { name: "cell2", value: "", point_value: 0, color: this.cell_color, user_letter_index: null, font_color: this.black, selected: false },
            { name: "cell3", value: "", point_value: 0, color: this.cell_color, user_letter_index: null, font_color: this.black, selected: false },
            { name: "cell4", value: "", point_value: 0, color: this.cell_color, user_letter_index: null, font_color: this.black, selected: false },
            { name: "cell5", value: "", point_value: 0, color: this.cell_color, user_letter_index: null, font_color: this.black, selected: false }
        ];
        this.user_letter_color = '#f0f0f0';
        this.user_letter_selected_color = '#d6d6d6';
        this.user_letters = [
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
        this.point1_color = '#fcd6d2';
        this.point2_color = '#f29c91';
        this.point3_color = '#de5445';
        this.point4_color = '#b31e0e';
        this.point5_color = '#700e01';
        this.point10_color = '#240000';
        this.keyboard_opacity = '1.0'; // 0.5
        this.key_used = '#8a8a8a';
        this.key_free = '#e0e0e0';
        this.key_opacity_free = '1.0';
        this.key_opacity_used = '0.0'; // 0.18
        this.keyboard_enabled = false;
        this.keyboard_top = [
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
        this.keyboard_middle = [
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
        this.keyboard_bottom = [
            { name: 'Z', opacity: this.key_opacity_free, enabled: true, points: 10, row: 'bottom', point_color: this.point10_color, font_color: 'white' },
            { name: 'X', opacity: this.key_opacity_free, enabled: true, points: 10, row: 'bottom', point_color: this.point10_color, font_color: 'white' },
            { name: 'C', opacity: this.key_opacity_free, enabled: true, points: 3, row: 'bottom', point_color: this.point3_color, font_color: 'white' },
            { name: 'V', opacity: this.key_opacity_free, enabled: true, points: 5, row: 'bottom', point_color: this.point5_color, font_color: 'white' },
            { name: 'B', opacity: this.key_opacity_free, enabled: true, points: 4, row: 'bottom', point_color: this.point4_color, font_color: 'white' },
            { name: 'N', opacity: this.key_opacity_free, enabled: true, points: 2, row: 'bottom', point_color: this.point2_color, font_color: this.black },
            { name: 'M', opacity: this.key_opacity_free, enabled: true, points: 3, row: 'bottom', point_color: this.point3_color, font_color: 'white' }
        ];
        this.word_list = [];
        this.initial_word_list = [];
        this.correct_words = [];
        this.used_letters = [];
        this.total_score = 0;
        this.current_word = '';
        this.losing_word = '';
        this.game_over_correct_words = [];
        this.game_over_correct_words_formatted = '';
        this.console_text = 'placeholder';
        this.console_text_hidden = true;
        this.copied_to_clipboard = 'Copied results to clipboard';
        this.copied_to_clipboard_hidden = true;
        this.show_keyboard = true;
        this.letter_selected = false;
        this.stats_modal_open = false;
        this.tutorial_modal_open = false;
        this.contact_modal_open = false;
        this.you_lose_open = false;
        this.you_win_open = false;
        this.words_modal_open = false;
        this.giveup_modal_open = false;
        this.tutorial_step_num = 1;
        this.stats_step_num = 1;
        // PercentileData
        this.percentile_data = {
            high_score: 0,
            low_score: 0,
            mean: 0,
            median: 0,
            mode: [],
            percentile: 0,
            percentile_graphic: ''
        };
        this.errors = [];
    }
    keyEvent(event) {
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
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Check to see if device is mobile
            this.isMobile = this.appSvc.isMobile();
            console.log('isMobile: ' + this.isMobile);
            // Initialize Firebase
            yield this.firebaseSvc.initializeApp();
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
            this.todays_game_data = yield this.firebaseSvc.getTodaysGameData(now_str);
            this.all_time_data = yield this.firebaseSvc.getAllTimeData();
            // Create new object in "daily_game_data" in Firebase
            if (!this.todays_game_data) {
                console.log('NEW DAY');
                yield this.firebaseSvc.postNewDayGameData(now_str, this.chooseRandomWord());
                this.todays_game_data = yield this.firebaseSvc.getTodaysGameData(now_str);
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
                });
            }
            this.initialize();
        });
    }
    initialize() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // const random_word: any = this.chooseRandomWord();
            const random_word = this.todays_game_data.today_word;
            this.current_word = random_word;
            this.starting_word = random_word;
            // Initialize Cells for starting word
            for (let i in random_word) {
                let char = this.findLetter(random_word.charAt(i));
                this.cells[i].value = random_word.charAt(i);
                this.cells[i].color = char.point_color;
                this.cells[i].font_color = char.font_color;
                this.cells[i].point_value = char.points;
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
                this.user = yield this.firebaseSvc.getUserData(this.userID_LocalStorage);
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
                this.user = yield this.firebaseSvc.getUserData(this.userID_LocalStorage);
                // this.getUserData(this.user);
                // console.log('REMOVED');
                // window.localStorage.removeItem('userID_LocalStorage');
            }
            // If User has never played before, automatically open Tutorial
            if (!this.played_before) {
                window.localStorage.setItem('played_before', 'true');
                this.tutorialModal(true);
            }
        });
    }
    cellClicked(index) {
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
    keyboardClicked(letter) {
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
    userLetterClicked(index) {
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
    controlClicked(control) {
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
    reset(new_word, hard_reset, animate) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
                    yield this.delay(50);
                    document.getElementById(`point_value_cell${i}`).classList.add('point_animation');
                    yield this.delay(100);
                }
                // Wait for each letter to bounce (5 letters * 0.1s)
                yield this.delay(300);
                // Remove BOUNCE animation from each letter
                for (let i = 1; i < this.cells.length + 1; i++) {
                    document.getElementById(`container_cell${i}`).classList.remove('bounce');
                }
                yield this.delay(800);
                // Remove POINT_ANIMATION from each cell
                for (let i = 1; i < this.cells.length + 1; i++) {
                    document.getElementById(`point_value_cell${i}`).classList.remove('point_animation');
                }
            }
        });
    }
    calculateScore(word) {
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
    submitGuess(word, autoguess) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.correct_words.includes(word) || word === this.starting_word) {
                this.console_text = 'Word already guessed';
                this.console_text_hidden = false;
                document.getElementById(`console`).classList.add('console_animation_in');
                document.getElementById(`console`).classList.remove('console_animation_out');
                yield this.delay(2000);
                document.getElementById(`console`).classList.remove('console_animation_in');
                document.getElementById(`console`).classList.add('console_animation_out');
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
        });
    }
    successfulGuess(word) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
                yield this.delay(70);
            }
            // If user enters the 26th letter, show You Win screen
            let letters_remaining = 26 - this.used_letters.length;
            if (letters_remaining === 0) {
                this.youWin(true, true);
            }
        });
    }
    findLetter(char) {
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
    tutorialModal(open) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (open) {
                this.tutorial_modal_open = true;
                document.getElementById(`app`).classList.add('blur-background_in');
                // document.getElementById(`app`).classList.remove('blur-background_out');
                // let tutorial_modal = document.getElementById('tutorial_modal');
                // tutorial_modal.classList.add('modal_fadein');
                // tutorial_modal.classList.add('modal_appear');
                // tutorial_modal.classList.remove('modal_fadeout');
            }
            else {
                document.getElementById(`app`).classList.remove('blur-background_in');
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
        });
    }
    navigateTutorialModalStep(next) {
        next ? this.tutorial_step_num++ : this.tutorial_step_num--;
    }
    navigateStatsModalTabs(next) {
        next ? this.stats_step_num++ : this.stats_step_num--;
    }
    statsModal(open) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (open) {
                this.stats_modal_open = true;
                document.getElementById(`app`).classList.add('blur-background_in');
                // document.getElementById(`app`).classList.remove('blur-background_out');
                // let stats_modal = document.getElementById('stats_modal');
                // stats_modal.classList.add('modal_fadein');
                // stats_modal.classList.add('modal_appear');
                // stats_modal.classList.remove('modal_fadeout');
                this.errors = this.appSvc.getErrors();
                console.log(this.errors);
            }
            else {
                document.getElementById(`app`).classList.remove('blur-background_in');
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
        });
    }
    contactModal(open) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (open) {
                this.contact_modal_open = true;
                document.getElementById(`app`).classList.add('blur-background_in');
                // document.getElementById(`app`).classList.remove('blur-background_out');
                // let contact_modal = document.getElementById('contact_modal');
                // contact_modal.classList.add('modal_fadein');
                // contact_modal.classList.add('modal_appear');
                // contact_modal.classList.remove('modal_fadeout');
            }
            else {
                document.getElementById(`app`).classList.remove('blur-background_in');
                // document.getElementById(`app`).classList.add('blur-background_out');
                // let contact_modal = document.getElementById('contact_modal');
                // contact_modal.classList.remove('modal_fadein');
                // contact_modal.classList.remove('modal_appear');
                // contact_modal.classList.add('modal_fadeout');
                // Give time for blur_out animation to perform
                // await this.delay(200);
                this.contact_modal_open = false;
            }
        });
    }
    wordsModal(open) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (open) {
                this.words_modal_open = true;
                document.getElementById(`app`).classList.add('blur-background_in');
                // document.getElementById(`app`).classList.remove('blur-background_out');
                // let words_modal = document.getElementById('words_modal');
                // words_modal.classList.add('modal_fadein');
                // words_modal.classList.add('modal_appear');
                // words_modal.classList.remove('modal_fadeout');
            }
            else {
                document.getElementById(`app`).classList.remove('blur-background_in');
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
        });
    }
    giveUpModal(open, give_up) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (open) {
                this.giveup_modal_open = true;
                document.getElementById(`app`).classList.add('blur-background_in');
                // document.getElementById(`app`).classList.remove('blur-background_out');
                // let giveup_modal = document.getElementById('giveup_modal');
                // giveup_modal.classList.add('modal_fadein');
                // giveup_modal.classList.add('modal_appear');
                // giveup_modal.classList.remove('modal_fadeout');
            }
            else {
                document.getElementById(`app`).classList.remove('blur-background_in');
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
        });
    }
    shareScore() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
            document.getElementById(`copied_to_clipboard`).classList.add('console_animation_in');
            document.getElementById(`copied_to_clipboard`).classList.remove('console_animation_out');
            yield this.delay(2000);
            document.getElementById(`copied_to_clipboard`).classList.remove('console_animation_in');
            document.getElementById(`copied_to_clipboard`).classList.add('console_animation_out');
            // }
        });
    }
    youLose(open, losing_word) {
        if (open) {
            this.you_lose_open = true;
            this.final_score = this.total_score;
            if (losing_word !== null) {
                this.losing_word = `"${losing_word}" is not a word...`;
            }
            else { // user gave up
                this.losing_word = 'You Lose!';
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
    youWin(open, perfect_game) {
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
    gameOver(perfect_game) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.todays_game_data = null;
            // Add game session to LocalStorage
            let now = new Date();
            let game_data = {
                timestamp: this.datepipe.transform(now, 'yyyy-MM-dd HH:mm:ss z'),
                correct_words: this.game_over_correct_words,
                score: this.final_score,
                starting_word: this.starting_word
            };
            // If there is data in localStorage, assign it to update_user, and then clear it from localStorage
            let update_user;
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
            yield this.firebaseSvc.updateUserData(update_user);
            try {
                // Add User ID to the Game Data and send to Firebase
                game_data.id = this.userID_LocalStorage;
                this.appSvc.setErrors({ stack: '\tBEFORE SETTING UPDATEGAMELOG' });
                yield this.firebaseSvc.updateGameLog(game_data);
                this.appSvc.setErrors({ stack: '\tAFTER UPDATED GAME LOG' });
            }
            catch (ex) {
                this.appSvc.setErrors({ stack: ex });
            }
            // Update data for Today in "daily_game_data"
            let today = new Date();
            let today_str;
            today_str = this.datepipe.transform(today, 'yyyy-MM-dd');
            try {
                yield this.firebaseSvc.setTodaysGameData(today_str, game_data);
            }
            catch (ex) {
                this.appSvc.setErrors({ stack: ex });
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
            yield this.firebaseSvc.postAllTimeData(new_game_num, new_average_score, new_total_points_scored, new_all_time_high_score, new_perfect_games_count);
            this.all_time_data = yield this.firebaseSvc.getAllTimeData();
            // this.todays_game_data = await this.firebaseSvc.getTodaysGameData(this.datepipe.transform(now, 'yyyy-MM-dd'));
            // Calculate score percentile from all scores for today's word
            let sorted_raw_scores = [];
            if (this.todays_game_data.raw_scores) {
                sorted_raw_scores = this.todays_game_data.raw_scores.sort((a, b) => a - b);
            }
            this.percentile_data = this.appSvc.getPercentileData(sorted_raw_scores, this.final_score);
        });
    }
    generateWordListData(word_list) {
        let total_points = 0;
        let high_scoring_words = [];
        let highest_scoring_word = '';
        let high_point_cutoff = 25;
        word_list.forEach(word => {
            let score = this.calculateScore(word);
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
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keyup', ['$event'])
], AppComponent.prototype, "keyEvent", null);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/services/app.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppService = class AppService {
    constructor() {
        this.updatedTodaysGameData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.errors = [];
    }
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
    findAllPotentialOpeningMoves(word_list) {
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
        if (string.length < 2)
            return string; // This is our break condition
        var permutations = []; // This array will hold our permutations
        for (var i = 0; i < string.length; i++) {
            var char = string[i];
            // Cause we don't want any duplicates:
            if (string.indexOf(char) != i) // if char was used already
                continue; // skip it this time
            var remainingString = string.slice(0, i) + string.slice(i + 1, string.length); //Note: you can concat Strings via '+' in JS
            for (var subPermutation of this.permut(remainingString))
                permutations.push(char + subPermutation);
        }
        return permutations;
    }
    setCharAt(str, index, chr) {
        if (index > str.length - 1)
            return str;
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
    getMedian(scores) {
        scores.sort(function (a, b) {
            return a - b;
        });
        let median;
        if (scores.length % 2 !== 0) {
            median = scores[Math.floor(scores.length / 2)];
        }
        else {
            var mid1 = scores[(scores.length / 2) - 1];
            var mid2 = scores[scores.length / 2];
            median = (mid1 + mid2) / 2;
        }
        return median;
    }
    getMode(scores) {
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
    getPercentile(scores, user_score) {
        // Remove user_score from raw_scores
        // const index = scores.indexOf(user_score);
        // if (index > -1) {
        //   scores.splice(index, 1);
        // }
        return ((100 *
            scores.reduce((acc, v) => acc + (v < user_score ? 1 : 0) + (v === user_score ? 0.5 : 0), 0)) /
            scores.length);
    }
    getPercentileData(sorted_raw_scores, final_score) {
        let percentile_data = {
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
        percentile_data.high_score = /*final_score > sorted_raw_scores[sorted_raw_scores.length - 1] ? final_score : */ sorted_raw_scores[sorted_raw_scores.length - 1];
        percentile_data.low_score = /*final_score < sorted_raw_scores[0] ? final_score : */ sorted_raw_scores[0];
        percentile_data.percentile = this.getPercentile(sorted_raw_scores, final_score).toFixed(1);
        // if (final_score > sorted_raw_scores[sorted_raw_scores.length - 1]) {
        //   percentile_data.high_score = final_score;
        // }
        // if (final_score < sorted_raw_scores[0]) {
        //   percentile_data.low_score = final_score;
        // }
        percentile_data.percentile_graphic = this.getPercentileGraphic(percentile_data.low_score, percentile_data.high_score, percentile_data.percentile, final_score);
        percentile_data.percentile_color = this.getPercentileColor(percentile_data.percentile);
        percentile_data.special_case = this.getSpecialCase(percentile_data.low_score, percentile_data.high_score, percentile_data.percentile, final_score);
        return percentile_data;
    }
    getPercentileColor(percentile) {
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
    getPercentileGraphic(low_score, high_score, percentile, final_score) {
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
        // graphic += ' ' + (final_score > high_score ? final_score : high_score) + '';
        return graphic;
    }
    getSpecialCase(low_score, high_score, percentile, final_score) {
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
    copyTextToClipboard(text) {
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
    fallbackCopyTextToClipboard(text) {
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
        }
        catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
            this.setErrors(err);
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
    setErrors(error) {
        if (error === {}) {
            this.errors = [];
        }
        else {
            this.errors.push(error);
        }
        return this.errors;
    }
    getErrors() {
        return this.errors;
    }
};
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppService);



/***/ }),

/***/ "./src/app/services/firebase.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/analytics */ "./node_modules/firebase/analytics/dist/index.esm.js");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");


// Import the functions you need from the SDKs you need





let FirebaseService = class FirebaseService {
    constructor(appSvc, datepipe) {
        this.appSvc = appSvc;
        this.datepipe = datepipe;
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        this.firebaseConfig = {
            apiKey: "AIzaSyBcHR4Q793wDKIikhy-SPyyu-GOrDkNAuY",
            authDomain: "lou-game.firebaseapp.com",
            databaseURL: "https://lou-game-default-rtdb.firebaseio.com/",
            projectId: "lou-game",
            storageBucket: "lou-game.appspot.com",
            messagingSenderId: "923427410117",
            appId: "1:923427410117:web:2419229e6bc6951b11a0ac",
            measurementId: "G-FQX5PSV3PS"
        };
    }
    initializeApp() {
        // Initialize Firebase
        this.app = Object(firebase_app__WEBPACK_IMPORTED_MODULE_2__["initializeApp"])(this.firebaseConfig);
        this.database = Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["getDatabase"])(this.app);
    }
    getAnalytics() {
        const analytics = Object(firebase_analytics__WEBPACK_IMPORTED_MODULE_3__["getAnalytics"])(this.app);
    }
    createNewUser(id) {
        try {
            Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["set"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["ref"])(this.database, '/users/' + id), {
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
        catch (ex) {
            this.appSvc.setErrors(ex);
        }
    }
    getUserData(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const dbRef = Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["ref"])(this.database);
            let retrieved_user;
            yield Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["get"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["child"])(dbRef, `/users/${id}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    retrieved_user = snapshot.val();
                }
                else {
                    retrieved_user = null;
                }
                this.appSvc.setErrors({ passed: 'GOT USER, ' + retrieved_user });
            }).catch((error) => {
                console.error(error);
                this.appSvc.setErrors(error);
                return error;
            });
            console.log('🚨GET USER DATA🚨');
            return retrieved_user;
        });
    }
    updateUserData(userData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["set"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["ref"])(this.database, '/users/' + userData.id), {
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
                this.appSvc.setErrors({ passed: 'UPDATED USER DATA' });
            }
            catch (ex) {
                this.appSvc.setErrors(ex);
            }
            console.log('🚨UPDATE USER DATA🚨');
        });
    }
    updateGameLog(game_data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(game_data.timestamp);
            // let timestamp = this.datepipe.transform(game_data.timestamp, 'yyyy-MM-dd HH:mm:ss z');
            // Add Game Data to Game Log
            let randomID = this.appSvc.generateRandomID();
            try {
                this.appSvc.setErrors({ stack: '\tBEFORE SETTING UPDATEGAMELOG' });
                Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["set"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["ref"])(this.database, `/games_played/${game_data.id}/${game_data.timestamp} GAME${randomID}`), {
                    timestamp: game_data.timestamp,
                    score: game_data.score,
                    correct_words: game_data.correct_words,
                    starting_word: game_data.starting_word
                });
                this.appSvc.setErrors({ stack: '\tAFTER UPDATED GAME LOG' });
            }
            catch (ex) {
                this.appSvc.setErrors(ex);
            }
            console.log('🚨UPDATE GAME LOG🚨');
            this.appSvc.setErrors({ passed: 'UPDATED GAME LOG' });
        });
    }
    setTodaysGameData(today_str, game_data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let todays_game_data = yield this.getTodaysGameData(today_str);
            todays_game_data.games_played_num += 1;
            todays_game_data.total_points_scored += game_data.score;
            todays_game_data.average_score = Number((Math.round((todays_game_data.total_points_scored / todays_game_data.games_played_num) * 100) / 100).toFixed(2));
            !todays_game_data.raw_scores ? todays_game_data.raw_scores = [game_data.score] : todays_game_data.raw_scores.push(game_data.score);
            try {
                yield Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["set"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["ref"])(this.database, `/daily_game_data/${today_str}_game_data/`), {
                    today_word: todays_game_data.today_word,
                    games_played_num: todays_game_data.games_played_num,
                    total_points_scored: todays_game_data.total_points_scored,
                    average_score: todays_game_data.average_score,
                    raw_scores: todays_game_data.raw_scores
                });
                this.appSvc.setErrors({ passed: 'UPDATED TODAYS GAME DATA' });
            }
            catch (ex) {
                this.appSvc.setErrors(ex);
            }
            console.log('🚨UPDATE TODAYS GAME DATA🚨');
            // Emit Updated TODAYS GAME DATA back to app.component
            let updated_todays_game_data = {
                today_word: todays_game_data.today_word,
                games_played_num: todays_game_data.games_played_num,
                total_points_scored: todays_game_data.total_points_scored,
                average_score: todays_game_data.average_score,
                raw_scores: todays_game_data.raw_scores
            };
            this.appSvc.updatedTodaysGameData.emit(updated_todays_game_data);
        });
    }
    getTodaysGameData(todays_date) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const dbRef = Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["ref"])(this.database);
            let todays_game_data;
            yield Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["get"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["child"])(dbRef, `/daily_game_data/${todays_date}_game_data/`)).then((snapshot) => {
                if (snapshot.exists()) {
                    todays_game_data = snapshot.val();
                }
                else {
                    todays_game_data = null;
                }
                this.appSvc.setErrors({ passed: 'GET TODAYS GAME DATA, ' + todays_game_data });
            }).catch((error) => {
                console.error(error);
                this.appSvc.setErrors(error);
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
        });
    }
    postNewDayGameData(todays_date, random_word) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["set"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["ref"])(this.database, `/daily_game_data/${todays_date}_game_data`), {
                    today_word: random_word,
                    games_played_num: 0,
                    total_points_scored: 0,
                    average_score: 0
                });
            }
            catch (ex) {
                this.appSvc.setErrors(ex);
            }
            console.log('🚨POST NEW DAY GAME DATA🚨');
        });
    }
    getAllTimeData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const dbRef = Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["ref"])(this.database);
            let all_time_data;
            yield Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["get"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["child"])(dbRef, `/all_time_data/`)).then((snapshot) => {
                if (snapshot.exists()) {
                    all_time_data = snapshot.val();
                }
                else {
                    all_time_data = null;
                }
                this.appSvc.setErrors({ passed: 'GET ALL TIME DATA, ' + all_time_data });
            }).catch((error) => {
                console.error(error);
                this.appSvc.setErrors(error);
                return error;
            });
            console.log('🚨GET ALL TIME GAME DATA🚨');
            return all_time_data;
        });
    }
    postAllTimeData(games_num, average_score, total_points_scored, all_time_high_score, perfect_game_count) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["set"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["ref"])(this.database, `/all_time_data/`), {
                    games_num: games_num,
                    average_score: average_score,
                    total_points_scored: total_points_scored,
                    all_time_high_score: all_time_high_score,
                    perfect_game_count: perfect_game_count
                });
                this.appSvc.setErrors({ passed: 'ALL TIME DATA POSTED' });
            }
            catch (ex) {
                this.appSvc.setErrors(ex);
            }
            console.log('🚨POST ALL TIME GAME DATA🚨');
        });
    }
};
FirebaseService.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] }
];
FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FirebaseService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/loudimuro/Desktop/Personal Projects/take5/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map