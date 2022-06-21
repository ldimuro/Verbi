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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app\" id=\"app\">\n\n  <header>\n    <!-- <div style=\"left: 50%;position:fixed;margin-top:9px;font-family: 'Inconsolata-Light', \n    'Courier New', Courier, monospace;\">\n      Take5</div> -->\n    <div class=\"header_items\" style=\"display: flex;justify-content: flex-end;\">\n      <a (click)=\"contactModal(true)\">\n        <mat-icon style=\"font-size:35px;padding-right:20px;margin-top:2px;\">mail_outline</mat-icon>\n      </a>\n      <a (click)=\"statsModal(true)\">\n        <mat-icon style=\"font-size:35px;padding-right:20px;margin-top:2px;\">equalizer</mat-icon>\n      </a>\n      <a (click)=\"tutorialModal(true)\">\n        <span style=\"font-size:35px;padding-right:20px;margin-top:2px;font-weight: bold;font-family: 'Arial'\">?</span>\n      </a>\n    </div>\n  </header>\n\n  <br>\n  <br>\n\n  <div *ngIf=\"!you_lose_open && !you_win_open\" class=\"game\" style=\"position:relative;height: 95vh;\"\n    [style.width]=\"isMobile ? '100%' : '50%'\" [style.margin]=\"isMobile ? '0' : '0 auto'\">\n    <div class=\"data\">\n      <div class=\"correct_words\" style=\"display: flex; justify-content:space-between;\">\n\n        <!-- 'WORDS' button -->\n        <div style=\"padding-top:18px;\"><button class=\"control\" style=\"padding: 5px;\"\n            (click)=\"wordsModal(true)\">WORDS</button></div>\n        <!-- <div style=\"font-size: 40px; font-family: 'Co'; margin-top: 15px;\"><b>{{starting_word}}</b></div> -->\n        <div style=\"font-size: 39px; font-family: 'Co'; margin-top: 15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>\n\n        <!-- WHITE FLAG BUTTON -->\n        <div style=\"padding-top:18px;\">\n          <!-- CREDIT:  <a href=\"https://www.flaticon.com/free-icons/white-flag\" title=\"white-flag icons\">White-flag icons created by Victoruler - Flaticon</a> -->\n          <img (click)=\"giveUpModal(true)\" class=\"control\" src=\"/assets/icons/white-flag.png\"\n            style=\"width:25px; height: 25px; padding: 5px;\" alt=\"image\">\n        </div>\n      </div>\n\n      <div class=\"used_letters\" style=\"position:fixed\">\n        <div class=\"used_letter_row\">\n          <div *ngFor=\"let letter of used_letters;\">\n            <div class=\"used_letter_icon\" [style.background-color]=\"letter.point_color\"\n              [style.color]=\"letter.font_color\" style=\"margin-bottom: 5px;\">\n              {{letter.name}}</div>\n          </div>\n        </div>\n      </div>\n\n      <br />\n\n      <div>\n        <div style=\"display: flex; justify-content: center; align-items: center; flex-direction: column; height: 20vh;\"\n          [style.height]=\"isMobile ? '25vh' : '20vh'\">\n          <div class=\"score\" style=\"text-align: center;\"><b>{{total_score}}</b></div>\n          <div *ngIf=\"user?.high_score !== undefined\" class=\"high_score\" style=\"text-align: center;\">BEST:<span\n              style=\"font-family: 'Inconsolata-Bold', 'Courier New', Courier, monospace;\">{{user?.high_score}}</span>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n\n    <!-- CELLS -->\n    <div class=\"container\">\n      <div *ngFor=\"let cell of cells; let i = index\" class=\"letters\">\n        <div class=\"point_value\" id=\"point_value_{{cell.name}}\" [style.color]=\"cell.color\">\n          <b>{{cell.point_value}}</b>\n        </div>\n        <button class=\"butt\" id=\"container_{{cell.name}}\" [disabled]=\"letter_selected\"\n          [style.height]=\"isMobile ? '20vw' : '10vw'\" [style.width]=\"isMobile ? '20vw' : '10vw'\"\n          [style.font-size]=\"isMobile ? '11vw' : '4.3vw'\" [style.cursor]=\"letter_selected ? 'auto' : 'cursor'\"\n          [style.background-color]=\"cell.color\" [style.color]=\"cell.font_color\"\n          [style.border-color]=\"cell.selected ? '#2b2827' : 'white'\" (click)=\"cellClicked(i)\">{{cell.value}}</button>\n      </div>\n    </div>\n\n    <!-- REMOVE -->\n    <span class=\"alert_text\" style=\"display: flex; justify-content: center;\" id=\"console\"\n      [style.visibility]=\"console_text_hidden ? 'hidden' : 'visible'\">{{console_text}}</span>\n    <!-- END REMOVE -->\n\n\n    <!-- KEYBOARD -->\n    <div *ngIf=\"show_keyboard\" id=\"keyboard\" [style.opacity]=\"keyboard_opacity\"\n      style=\"margin-left: 8px; position: absolute; bottom: 0; width: 100%; margin: 0 auto; margin-bottom: 3px;\"\n      [style.pointer-events]=\"((keyboard_opacity === '1.0' && keyboard_enabled) ? 'auto' : 'none')\" class=\"keyboard\">\n\n      <div style=\"display: flex; justify-content: center;\">\n        <div *ngFor=\"let key of keyboard_top;\">\n          <button class=\"butt-sm\" [style.width]=\"isMobile ? '8vw' : '4vw'\" [style.height]=\"isMobile ? '18vw' : '5vw'\"\n            [disabled]=\"!key.enabled || you_lose_open || stats_modal_open\" [style.background-color]=\"key.point_color\"\n            [style.opacity]=\"key.opacity\" [style.color]=\"key.font_color\" style=\"font-weight: bold;\"\n            (click)=\"keyboardClicked(key.name)\">{{key.name}}</button>\n        </div>\n      </div>\n\n      <div style=\"display: flex; justify-content: center; margin-top: 8px;\">\n        <div *ngFor=\"let key of keyboard_middle;\">\n          <button class=\"butt-sm\" [style.width]=\"isMobile ? '8vw' : '4vw'\" [style.height]=\"isMobile ? '18vw' : '5vw'\"\n            [disabled]=\"!key.enabled || you_lose_open || stats_modal_open\" [style.background-color]=\"key.point_color\"\n            [style.opacity]=\"key.opacity\" [style.color]=\"key.font_color\" style=\"font-weight: bold;\"\n            (click)=\"keyboardClicked(key.name)\">{{key.name}}</button>\n        </div>\n      </div>\n\n      <div style=\"display: flex; justify-content: center; margin-top: 8px;\">\n        <div *ngFor=\"let key of keyboard_bottom;\">\n          <button class=\"butt-sm\" [style.width]=\"isMobile ? '8vw' : '4vw'\" [style.height]=\"isMobile ? '18vw' : '5vw'\"\n            [disabled]=\"!key.enabled || you_lose_open || stats_modal_open\" [style.background-color]=\"key.point_color\"\n            [style.opacity]=\"key.opacity\" [style.color]=\"key.font_color\" style=\"font-weight: bold;\"\n            (click)=\"keyboardClicked(key.name)\">{{key.name}}</button>\n        </div>\n      </div>\n    </div>\n\n    <!-- USER LETTERS -->\n    <div *ngIf=\"letter_selected\" style=\"position: absolute; bottom: 0;width: 100%;margin: 0 auto; margin-bottom: 30px;\">\n      <div style=\"display: flex; justify-content: center;\">\n        <div *ngFor=\"let letter of user_letters; let i = index\" class=\"letters\">\n          <button class=\"user_letters\" [disabled]=\"!letter.enabled\" [style.background-color]=\"letter.color\"\n            [style.color]=\"letter.font_color\" [style.opacity]=\"letter.enabled ? '1.0' : '0.25'\"\n            [style.height]=\"isMobile ? '20vw' : '10vw'\" [style.width]=\"isMobile ? '20vw' : '10vw'\"\n            [style.font-size]=\"isMobile ? '11vw' : '4.3vw'\" (click)=\"userLetterClicked(i)\">{{letter.value}}</button>\n        </div>\n      </div>\n\n      <div style=\"margin-top: 20px;\">\n        <button class=\"control\" (click)=\"controlClicked('GO-BACK')\" style=\"float:left;margin-left: 5px;\">GO\n          BACK</button>\n\n        <button class=\"control\" [disabled]=\"cells[4].value === ''\" (click)=\"controlClicked('ENTER')\"\n          style=\"float:right;\">ENTER</button>\n\n        <button class=\"control\" [disabled]=\"cells[0].value === ''\" (click)=\"controlClicked('BACKSPACE')\"\n          style=\"float:right;\">&#60; DEL\n        </button>\n      </div>\n    </div>\n\n  </div>\n\n  <!-- YOU LOSE SCREEN -->\n  <div *ngIf=\"you_lose_open\" style=\"display: flex; justify-content: center;\">\n    <div [hidden]=\"!you_lose_open\" class=\"you_lose\" id=\"you_lose\" [style.width]=\"isMobile ? '100vw' : '400px'\">\n      <div>\n        <div class=\"modal_title\" style=\"text-align: center; font-size: 30px; padding: 10px; margin-top: 10px;\">\n          <b>{{losing_word}}</b>\n        </div>\n\n        <br>\n\n        <div style=\"text-align: center;font-size: 22px; padding: 10px;\">\n          <div class=\"modal_header\"><b>FINAL SCORE</b></div>\n          <div class=\"modal_text\" style=\"font-size:30px\"><b>{{final_score}}</b></div>\n        </div>\n\n        <div style=\"display: flex; justify-content: center;\">\n          <div style=\"text-align: left; font-size: 22px; padding: 10px; width: 90%;\">\n            <div class=\"modal_header\"><b>CORRECT WORDS ({{game_over_correct_words.length}})</b>\n            </div>\n\n            <!-- To Fix on iPad -->\n            <!-- <div style=\"font-family:'Courier New', Courier, monospace; text-align: center;\">\n              {{game_over_correct_words_formatted}}</div> -->\n            <div style=\"font-family: 'Inconsolata-Light', 'Courier New', Courier, monospace;\"\n              [style.margin-left]=\"game_over_correct_words.length <= 4 ? '0px' : '20px'\"\n              [style.text-align]=\"game_over_correct_words.length <= 4 ? 'center' : 'left'\">\n              {{game_over_correct_words_formatted}}</div>\n          </div>\n        </div>\n\n        <br>\n        <hr class=\"1px solid black\" style=\"width: 75%;\">\n        <!-- <hr> -->\n        <br>\n\n        <div *ngIf=\"final_score !== undefined\" style=\"text-align: center;font-size: 22px; padding: 10px;\">\n          <div class=\"modal_header\"><b>TODAY'S AVERAGE</b></div>\n          <div *ngIf=\"todays_game_data; else statsPlaceholder\">\n            <div class=\"modal_text\" style=\"font-size:30px\"><b>{{todays_game_data?.average_score}}</b></div>\n          </div>\n          <ng-template #statsPlaceholder>\n            <div class=\"modal_text\" style=\"font-size:25px\"><b>&mdash;</b></div>\n          </ng-template>\n        </div>\n\n        <div *ngIf=\"todays_game_data?.raw_scores.length > 0; else elseBlock\"\n          style=\"text-align: center;font-size: 22px; padding: 10px;\">\n\n          <div *ngIf=\"percentile_data && todays_game_data?.raw_scores?.length > 0\" class=\"modal_text\">\n            <div *ngIf=\"percentile_data.special_case?.message === null; else specialCase\">\n              You were better than <span style=\"font-family: 'Inconsolata-Bold', 'Courier New', Courier, monospace;\"\n                [style.color]=\"percentile_data?.percentile_color\">{{percentile_data.percentile}}%</span> of players\n              today\n            </div>\n            <ng-template #specialCase>\n              <div [style.color]=\"percentile_data.special_case?.color\">\n                <b>{{percentile_data.special_case.message}}</b>\n              </div>\n            </ng-template>\n          </div>\n\n          <div *ngIf=\"todays_game_data; else statsPlaceholder\">\n            <div\n              style=\"text-align: center;font-size: 22px; padding: 10px;font-family: 'Inconsolata-Bold', 'Courier New', Courier, monospace;\">\n              {{percentile_data.percentile_graphic}}\n            </div>\n          </div>\n          <ng-template #statsPlaceholder>\n            <div style=\"text-align: center;font-size: 22px; padding: 10px;\">\n              -⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️-\n            </div>\n          </ng-template>\n\n        </div>\n        <ng-template #elseBlock style=\"text-align: center;font-size: 22px; padding: 10px;\">\n          <div style=\"text-align: center;font-size: 22px; padding: 10px;\">\n            You are today's first player! Check back later for updated results\n          </div>\n        </ng-template>\n\n        <br>\n\n        <div style=\"display: flex; justify-content:center;\">\n          <button (click)=\"youLose(false)\" style=\"font-size: 20px;\" class=\"control\">PLAY\n            AGAIN</button>\n          <button (click)=\"shareScore()\" style=\"font-size: 20px;\" class=\"control\">SHARE</button>\n        </div>\n\n        <span class=\"alert_text\" style=\"display: flex; justify-content: center;\" id=\"copied_to_clipboard\"\n          [style.visibility]=\"copied_to_clipboard_hidden ? 'hidden' : 'visible'\">{{copied_to_clipboard}}</span>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"you_win_open\" style=\"display: flex; justify-content: center;\">\n    <div>\n      <div class=\"modal_title\" style=\"text-align: center; font-size: 30px; padding: 10px; margin-top: 10px;\"><b>PERFECT\n          SCORE!</b></div>\n\n      <div style=\"text-align: center;font-size: 22px; padding: 10px;\">\n        <div class=\"modal_header\"><b>Final Score</b></div>\n        <div class=\"modal_text\" style=\"font-size:25px\"><b>{{final_score}} ({{game_over_correct_words.length}}\n            word<span *ngIf=\"game_over_correct_words.length !== 1\">s</span>)</b></div>\n      </div>\n\n      <div style=\"text-align: center;font-size: 22px; padding: 10px;\">\n        Out of <b>1016 games</b>, this has only happened\n        <b>2</b> times. That's pretty rad.\n      </div>\n\n      <br>\n\n      <div style=\"display: flex; justify-content:center;\">\n        <button (click)=\"youWin(false)\" style=\"font-size: 20px;\" class=\"control\">PLAY\n          AGAIN</button>\n        <button style=\"font-size: 20px;\" class=\"control\">SHARE</button>\n      </div>\n    </div>\n  </div>\n\n\n\n</div>\n\n\n\n\n\n<!-- STATS MODAL -->\n<div [hidden]=\"!stats_modal_open\" class=\"modal stats_modal\" id=\"stats_modal\">\n  <div>\n    <div class=\"header_items\" style=\"display: flex;justify-content: flex-end;\">\n      <a (click)=\"statsModal(false)\">\n        <mat-icon style=\"font-size: 30px; padding-right:15px; padding-top: 10px;\">close</mat-icon>\n      </a>\n    </div>\n    <div class=\"modal_title\" style=\"font-size: 30px; text-align: center;\"><b>STATISTICS</b></div>\n  </div>\n\n\n\n  <div style=\"display: flex; justify-content: center; padding:10px;\">\n    <a class=\"tabs\" (click)=\"navigateStatsModalTabs(false)\" style=\"border-bottom-left-radius: 10px;\n    border-top-left-radius: 10px;\" [ngClass]=\"{'tabs_active': stats_step_num === 1}\"><span\n        style=\"font-family: 'Inconsolata-Light', 'Courier New', Courier, monospace;\">Personal</span></a>\n    <a class=\"tabs\" style=\"border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\" (click)=\"navigateStatsModalTabs(true)\"\n      [ngClass]=\"{'tabs_active': stats_step_num === 2}\"><span\n        style=\"font-family: 'Inconsolata-Light', 'Courier New', Courier, monospace;\">Global</span></a>\n  </div>\n\n\n\n  <!-- Personal stats -->\n  <div *ngIf=\"stats_step_num === 1; else step_2\">\n    <div *ngIf=\"stats_modal_open\" style=\"padding: 10px;\">\n      <div class=\"modal_header modal_header_sm\"><b>HIGH SCORE</b></div>\n      <div class=\"modal_text\" style=\"font-size:25px\"><b>{{user?.high_score}}</b></div>\n\n      <br>\n\n      <div class=\"modal_header modal_header_sm\"><b>AVERAGE SCORE</b></div>\n      <div class=\"modal_text\" style=\"font-size:25px\"><b>{{user?.average_score_per_game}} points</b></div>\n\n      <br>\n\n      <div class=\"modal_header modal_header_sm\"><b>GAMES PLAYED</b></div>\n      <div class=\"modal_text\" style=\"font-size:25px\"><b>{{user?.games_played_num}}</b></div>\n\n      <br>\n\n      <div class=\"modal_header modal_header_sm\"><b>HIGHEST SCORING WORD</b></div>\n      <div class=\"modal_text\" style=\"font-size:25px;\"><b>\"{{user?.highest_scoring_word.word}}\" -\n          {{user.highest_scoring_word.score}} points</b></div>\n    </div>\n  </div>\n  <!-- Global stats -->\n  <ng-template #step_2>\n    <div *ngIf=\"stats_modal_open\" style=\"padding: 10px;\">\n      <div class=\"modal_header modal_header_sm\"><b>TODAY'S HIGH SCORE</b></div>\n      <div class=\"modal_text\" style=\"font-size:25px\"><b>{{todays_game_data.high_score}}</b></div>\n\n      <br>\n\n      <div class=\"modal_header modal_header_sm\"><b>TODAY'S AVERAGE SCORE</b></div>\n      <div class=\"modal_text\" style=\"font-size:25px\"><b>{{todays_game_data.average_score}}</b></div>\n\n      <br>\n\n      <hr class=\"1px solid black\" style=\"width: 75%;\">\n\n      <br>\n\n      <div class=\"modal_header modal_header_sm\"><b>ALL TIME HIGH SCORE 🏆</b></div>\n      <div class=\"modal_text\" style=\"font-size:25px\"><b>{{all_time_data.all_time_high_score}}</b></div>\n\n      <br>\n\n      <div class=\"modal_header modal_header_sm\"><b>PERFECT GAME COUNT 💯</b></div>\n      <div class=\"modal_text\" style=\"font-size:25px\"><b>{{all_time_data.perfect_game_count}}</b></div>\n\n    </div>\n  </ng-template>\n</div>\n\n<!-- TUTORIAL MODAL -->\n<div [hidden]=\"!tutorial_modal_open\" class=\"modal tutorial_modal\" id=\"tutorial_modal\" style=\"position: relative\">\n  <div>\n    <div class=\"header_items\" style=\"display: flex;justify-content: flex-end;\">\n      <a (click)=\"tutorialModal(false)\">\n        <mat-icon style=\"font-size: 30px; padding-right:15px; padding-top: 10px;\">close</mat-icon>\n      </a>\n    </div>\n    <div class=\"modal_title\" style=\"font-size: 30px; text-align: center;\"><b>HOW TO PLAY ({{tutorial_step_num}}/3)</b>\n    </div>\n  </div>\n\n  <!-- STEP 1 -->\n  <div *ngIf=\"tutorial_step_num === 1\" id=\"step_1\">\n    <div style=\"display: flex; justify-content:center;margin-top:10px;\">\n      <img src=\"/assets/correct_word.gif\" alt=\"image\"\n        style=\"width: 80%; height: auto; border: 1px solid gray;border-radius: 5px;\">\n    </div>\n    <div style=\"display: flex; justify-content:center\">\n      <div class=\"modal_text\" style=\"padding: 13px;margin-top: 7px; width: 80%; font-size: 20px;\">\n        Create words by switching out letters one at a time and rearranging them\n      </div>\n    </div>\n  </div>\n\n  <!-- STEP 2 -->\n  <div *ngIf=\"tutorial_step_num === 2\" id=\"step_2\">\n    <div style=\"display: flex; justify-content:center;margin-top:10px;\">\n      <img src=\"/assets/incorrect_word.gif\" alt=\"image\"\n        style=\"width: 80%; height: auto; border: 1px solid gray;border-radius: 5px;\">\n    </div>\n    <div style=\"display: flex; justify-content:center\">\n      <div class=\"modal_text\" style=\"padding: 13px;margin-top: 7px; width: 80%; font-size: 20px;\">\n        If you enter a word that doesn't exist, the game is over\n      </div>\n    </div>\n  </div>\n\n  <!-- STEP 3 -->\n  <div *ngIf=\"tutorial_step_num === 3\" id=\"step_3\">\n    <div style=\"display: flex; justify-content:center;margin-top:10px;\">\n      <img src=\"/assets/letter_scores.png\" alt=\"image\"\n        style=\"width: 80%; height: auto; border: 1px solid gray;border-radius: 5px;\">\n    </div>\n    <div style=\"display: flex; justify-content:center\">\n      <div class=\"modal_text\" style=\"padding: 13px;margin-top: 7px; width: 80%; font-size: 20px;\">\n        The darker the color shade, the more points the letter is worth\n      </div>\n    </div>\n    <br>\n  </div>\n\n  <br>\n\n  <div style=\"position: absolute; bottom: 0;margin: 0 auto;width: 100%;display: flex; justify-content: center; padding-bottom: 10px;\">\n    <button *ngIf=\"tutorial_step_num > 1\" class=\"control\" (click)=\"navigateTutorialModalStep(false)\">&#60; BACK</button>\n    <button *ngIf=\"tutorial_step_num !== 3\" class=\"control\" (click)=\"navigateTutorialModalStep(true)\">NEXT ></button>\n    <button *ngIf=\"tutorial_step_num === 3\" class=\"control\" (click)=\"tutorialModal(false)\">DONE</button>\n  </div>\n</div>\n\n<!-- CONTACT MODAL -->\n<div [hidden]=\"!contact_modal_open\" class=\"modal stats_modal\" id=\"contact_modal\">\n  <div>\n    <div class=\"header_items\" style=\"display: flex;justify-content: flex-end;\">\n      <a (click)=\"contactModal(false)\">\n        <mat-icon style=\"font-size: 30px; padding-right:15px; padding-top: 10px;\">close</mat-icon>\n      </a>\n    </div>\n    <div class=\"modal_title\" style=\"font-size: 30px; text-align: center;\"><b>CONTACT</b></div>\n  </div>\n\n  <br>\n  <br>\n\n  <div>\n    <div class=\"modal_header\" style=\"display:flex; justify-content: center;\">\n      <b>Feedback/Questions?</b>\n    </div>\n    <a href=\"mailto:ldimuro@asu.edu?cc=&subject=take5 [insert subject here]\"><span\n        style=\"display:flex; justify-content: center;\"><u>Email Me!</u></span></a>\n  </div>\n\n  <br>\n\n  <div>\n    <div class=\"modal_header\" style=\"display:flex; justify-content: center;\"><b>Like the\n        game?</b>\n    </div>\n    <a target=\"_blank\" href=\"https://www.paypal.com/paypalme/loudimuro\"><span\n        style=\"display:flex; justify-content: center;\"><u>Buy me a coffee ☕️!</u></span></a>\n  </div>\n\n  <br>\n\n  <div style=\"display: flex; justify-content:center;\">\n    <!-- <div class=\"modal_text\" style=\"font-family: 'Co'; display:flex; justify-content: center;\"><b>Social Media</b>\n    </div> -->\n    <div style=\"display: grid; grid-template-columns: auto auto;\">\n      <div class=\"social_media_icon\">\n        <!-- Sharingbutton Facebook -->\n        <a class=\"resp-sharing-button__link\"\n          href=\"https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsharingbuttons.io\" target=\"_blank\" rel=\"noopener\"\n          aria-label=\"\">\n          <div class=\"resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small\">\n            <div aria-hidden=\"true\" class=\"resp-sharing-button__icon resp-sharing-button__icon--solidcircle\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n                <path\n                  d=\"M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm3.6 11.5h-2.1v7h-3v-7h-2v-2h2V8.34c0-1.1.35-2.82 2.65-2.82h2.35v2.3h-1.4c-.25 0-.6.13-.6.66V9.5h2.34l-.24 2z\" />\n              </svg>\n            </div>\n          </div>\n        </a>\n      </div>\n      <div class=\"social_media_icon\">\n        <!-- Sharingbutton Twitter -->\n        <a class=\"resp-sharing-button__link\"\n          href=\"https://twitter.com/intent/tweet/?text=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;url=http%3A%2F%2Fsharingbuttons.io\"\n          target=\"_blank\" rel=\"noopener\" aria-label=\"\">\n          <div class=\"resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small\">\n            <div aria-hidden=\"true\" class=\"resp-sharing-button__icon resp-sharing-button__icon--solidcircle\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n                <path\n                  d=\"M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm5.26 9.38v.34c0 3.48-2.64 7.5-7.48 7.5-1.48 0-2.87-.44-4.03-1.2 1.37.17 2.77-.2 3.9-1.08-1.16-.02-2.13-.78-2.46-1.83.38.1.8.07 1.17-.03-1.2-.24-2.1-1.3-2.1-2.58v-.05c.35.2.75.32 1.18.33-.7-.47-1.17-1.28-1.17-2.2 0-.47.13-.92.36-1.3C7.94 8.85 9.88 9.9 12.06 10c-.04-.2-.06-.4-.06-.6 0-1.46 1.18-2.63 2.63-2.63.76 0 1.44.3 1.92.82.6-.12 1.95-.27 1.95-.27-.35.53-.72 1.66-1.24 2.04z\" />\n              </svg>\n            </div>\n          </div>\n        </a>\n      </div>\n      <div class=\"social_media_icon\">\n        <!-- Sharingbutton Tumblr -->\n        <a class=\"resp-sharing-button__link\"\n          href=\"https://www.tumblr.com/widgets/share/tool?posttype=link&amp;title=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;caption=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;content=http%3A%2F%2Fsharingbuttons.io&amp;canonicalUrl=http%3A%2F%2Fsharingbuttons.io&amp;shareSource=tumblr_share_button\"\n          target=\"_blank\" rel=\"noopener\" aria-label=\"\">\n          <div class=\"resp-sharing-button resp-sharing-button--tumblr resp-sharing-button--small\">\n            <div aria-hidden=\"true\" class=\"resp-sharing-button__icon resp-sharing-button__icon--solidcircle\">\n              <svg version=\"1.1\" x=\"0px\" y=\"0px\" width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\"\n                enable-background=\"new 0 0 24 24\" xml:space=\"preserve\">\n                <path\n                  d=\"M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M15.492,17.616C11.401,19.544,9.5,17,9.5,14.031 V9.5h-2V8.142c0.549-0.178,1.236-0.435,1.627-0.768c0.393-0.334,0.707-0.733,0.943-1.2c0.238-0.467,0.401-0.954,0.49-1.675H12.5v3h2 v2h-2v3.719c0,2.468,1.484,2.692,2.992,1.701V17.616z\" />\n              </svg>\n            </div>\n          </div>\n        </a>\n      </div>\n      <div class=\"social_media_icon\">\n        <!-- Sharingbutton Pinterest -->\n        <a class=\"resp-sharing-button__link\"\n          href=\"https://pinterest.com/pin/create/button/?url=http%3A%2F%2Fsharingbuttons.io&amp;media=http%3A%2F%2Fsharingbuttons.io&amp;description=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.\"\n          target=\"_blank\" rel=\"noopener\" aria-label=\"\">\n          <div class=\"resp-sharing-button resp-sharing-button--pinterest resp-sharing-button--small\">\n            <div aria-hidden=\"true\" class=\"resp-sharing-button__icon resp-sharing-button__icon--solidcircle\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n                <path\n                  d=\"M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm1.4 15.56c-1 0-1.94-.53-2.25-1.14l-.65 2.52c-.4 1.45-1.57 2.9-1.66 3-.06.1-.2.07-.22-.04-.02-.2-.32-2 .03-3.5l1.18-5s-.3-.6-.3-1.46c0-1.36.8-2.37 1.78-2.37.85 0 1.25.62 1.25 1.37 0 .85-.53 2.1-.8 3.27-.24.98.48 1.78 1.44 1.78 1.73 0 2.9-2.24 2.9-4.9 0-2-1.35-3.5-3.82-3.5-2.8 0-4.53 2.07-4.53 4.4 0 .5.1.9.25 1.23l-1.5.82c-.36-.64-.54-1.43-.54-2.28 0-2.6 2.2-5.74 6.57-5.74 3.5 0 5.82 2.54 5.82 5.27 0 3.6-2 6.3-4.96 6.3z\" />\n              </svg>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<!-- CORRECT WORDS MODAL -->\n<div [hidden]=\"!words_modal_open\" class=\"modal words_modal\" id=\"words_modal\" style=\"position: relative\">\n  <div>\n    <div class=\"header_items\" style=\"display: flex;justify-content: flex-end;\">\n      <a (click)=\"wordsModal(false)\">\n        <mat-icon style=\"font-size: 30px; padding-right:15px; padding-top: 10px;\">close</mat-icon>\n      </a>\n    </div>\n    <!-- <div style=\"font-size: 30px; text-align: center; font-family: 'Co'\"><b>CORRECT WORDS</b></div> -->\n  </div>\n\n  <br>\n\n  <div style=\"height: 65%; overflow: scroll;\" id=\"word_list\">\n    <div style=\"color: #b31e0f; font-size: 30px; font-family:'Domine-Bold', 'Courier New', Courier, monospace;\"\n      class=\"modal_text\">\n      {{starting_word}}</div>\n    <hr class=\"1px solid black\" style=\"width: 75%;\">\n    <div *ngFor=\"let word of correct_words\" class=\"modal_text\"\n      style=\"font-size: 30px; font-family:'Domine-Regular', 'Courier New', Courier, monospace; margin-bottom: 5px;\">\n      <div style=\"text-align:center;\">\n        {{word}}\n      </div>\n    </div>\n  </div>\n\n  <div style=\"position: absolute; bottom: 0;margin: 0 auto;width: 100%;display: flex;\n  justify-content: center; padding-bottom: 20px;\">\n    <button class=\"control\" (click)=\"wordsModal(false)\">CLOSE</button>\n  </div>\n</div>\n\n<!-- GIVE UP MODAL -->\n<div [hidden]=\"!giveup_modal_open\" class=\"modal giveup_modal\" id=\"giveup_modal\" style=\"position: relative\">\n  <div>\n    <div class=\"header_items\" style=\"display: flex;justify-content: flex-end;\">\n      <!-- <a (click)=\"giveUpModal(false)\">\n        <mat-icon style=\"font-size: 24px; padding-right:15px; padding-top: 10px;\">close</mat-icon>\n      </a> -->\n    </div>\n    <div class=\"modal_title\" style=\"font-size: 28px; text-align: center; padding-top:25px;\"><b>Are you sure you want to\n        give up?</b></div>\n  </div>\n\n  <!-- <br>\n  <br> -->\n\n  <div style=\"display: flex; justify-content:center;\" style=\"position: absolute; bottom: 0;margin: 0 auto;width: 100%;display: flex;\n  justify-content: center; padding-bottom: 30px;\">\n    <button (click)=\"giveUpModal(false, true)\" style=\"font-size: 20px; width:60px;\" class=\"control\">YES</button>\n    <button (click)=\"giveUpModal(false)\" style=\"font-size: 20px; width:60px;\" class=\"control\">NO</button>\n  </div>\n\n\n</div>\n\n\n\n<router-outlet></router-outlet>");

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
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap\");\n.app {\n  position: absolute;\n  /*Can also be `fixed`*/\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  /*Solves a problem in which the content is being cut when the div is smaller than its' wrapper:*/\n  max-width: 101%;\n  max-height: 101%;\n  overflow: none;\n}\n.correct_words,\n.used_letters,\n.score,\n.high_score,\n.highest_scoring_word {\n  font-size: 20px;\n  color: #4d4749;\n}\n.score {\n  font-size: 65px;\n  font-family: \"Inconsolata-Bold\", \"Courier New\", Courier, monospace;\n}\n.high_score {\n  font-family: \"Inconsolata-Light\", \"Courier New\", Courier, monospace;\n}\ntextarea {\n  font-size: 14px;\n  width: 95%;\n  display: flex;\n  justify-content: center;\n  resize: none;\n  border-color: lightgray;\n}\n.butt {\n  border: 1px outset white;\n  border-width: 5px;\n  border-style: solid;\n  border-radius: 10px;\n  background-color: white;\n  height: 80px;\n  width: 80px;\n  max-width: 110px;\n  max-height: 110px;\n  position: relative;\n  cursor: pointer;\n  font-size: 50px;\n  color: white;\n  font-family: \"Domine-Regular\", sans-serif;\n}\n.butt:hover:enabled,\n.user_letters:hover:enabled,\n.butt-sm:hover:enabled,\n.control:hover:enabled,\n.words_button:hover:enabled {\n  cursor: pointer;\n  filter: brightness(90%);\n  -webkit-filter: brightness(90%);\n  -o-filter: brightness(90%);\n  -moz-filter: brightness(90%);\n}\na:hover {\n  cursor: pointer;\n  filter: brightness(90%);\n  -webkit-filter: brightness(90%);\n  -o-filter: brightness(90%);\n  -moz-filter: brightness(90%);\n}\n.user_letters {\n  border: 1px outset white;\n  border-width: 5px;\n  border-style: solid;\n  border-radius: 10px;\n  background-color: #a0a0a0;\n  height: 80px;\n  width: 80px;\n  max-width: 110px;\n  max-height: 110px;\n  cursor: pointer;\n  color: #5c5c5c;\n  font-family: \"Domine-Regular\", sans-serif;\n}\n.butt-sm {\n  border: none;\n  border-radius: 7px;\n  background-color: #e0e0e0;\n  height: 80px;\n  width: 8vw;\n  max-width: 50px;\n  max-height: 70px;\n  margin-right: 8px;\n  font-size: 20px;\n}\n.control {\n  border: 1px outset #363636;\n  border-radius: 10px;\n  border-style: solid;\n  background-color: white;\n  color: #363636;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 10px;\n  margin-right: 8px;\n  font-size: 20px;\n  cursor: pointer;\n  font-family: \"Inconsolata-Light\", \"Courier New\", Courier, monospace;\n}\n.control:disabled {\n  opacity: 0.3;\n  cursor: auto;\n}\n.words_button {\n  border: 2px outset #363636;\n  border-radius: 10px;\n  border-style: solid;\n  background-color: white;\n  color: #363636;\n  font-size: 20px;\n  cursor: pointer;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n.letters {\n  display: inline-block;\n  position: relative;\n}\n.container {\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 20vh;\n}\n.used_letter_row {\n  display: flex;\n  justify-content: left;\n  flex-wrap: wrap;\n}\n.used_letter_icon {\n  display: inline-block;\n  flex-grow: 1;\n  width: 25px;\n  text-align: center;\n  margin-right: 5px;\n}\n.stats_modal {\n  position: fixed;\n  height: 500px;\n  width: 360px;\n  top: 50%;\n  left: 50%;\n  background-color: white;\n  border-radius: 20px;\n  transform: translate(-50%, -50%);\n  box-shadow: 0 0 10px #ccc;\n}\n.tutorial_modal {\n  position: fixed;\n  height: 570px;\n  width: 390px;\n  top: 50%;\n  left: 50%;\n  background-color: white;\n  border-radius: 20px;\n  transform: translate(-50%, -50%);\n  box-shadow: 0 0 10px #ccc;\n}\n.words_modal {\n  position: fixed;\n  height: 550px;\n  width: 330px;\n  top: 50%;\n  left: 50%;\n  background-color: white;\n  border-radius: 20px;\n  transform: translate(-50%, -50%);\n  box-shadow: 0 0 10px #ccc;\n}\n.giveup_modal {\n  position: fixed;\n  height: 200px;\n  width: 300px;\n  top: 50%;\n  left: 50%;\n  background-color: white;\n  border-radius: 20px;\n  transform: translate(-50%, -50%);\n  box-shadow: 0 0 10px #ccc;\n}\n.modal_text {\n  display: flex;\n  justify-content: center;\n  font-size: 24px;\n  color: #333;\n  font-family: \"Inconsolata-Light\", \"Courier New\", Courier, monospace;\n}\n.modal_header {\n  display: flex;\n  justify-content: center;\n  font-size: 20px;\n  color: #c61100;\n  font-family: \"Domine-Bold\", sans-serif;\n}\n.modal_header_sm {\n  font-size: 17px;\n}\n.modal_title {\n  font-family: \"Domine-Bold\", sans-serif;\n}\n.center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}\n.you_lose {\n  height: 100vh;\n  background-color: white;\n  border-radius: 8px;\n}\n.point_value {\n  text-align: center;\n  font-size: 34px;\n  opacity: 0;\n  margin-bottom: 10px;\n  filter: brightness(80%);\n  font-family: \"Inconsolata-Bold\", \"Courier New\", Courier, monospace;\n}\n.social_media_icon {\n  padding: 5px;\n}\n.alert_text {\n  font-size: 18px;\n  color: #3f3f3f;\n  margin-top: 20px;\n  font-family: \"Inconsolata-Light\", \"Courier New\", Courier, monospace;\n}\n.header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 40px;\n  background-color: white;\n  text-align: center;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 20px;\n  color: #4d4749;\n  border-bottom: 1px solid #b8b8b8;\n}\nul {\n  display: flex;\n  justify-content: flex-end;\n}\nul li {\n  list-style: none;\n  margin-right: 20px;\n  font-weight: bold;\n}\nheader {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 40px;\n  background-color: white;\n  text-align: center;\n  vertical-align: middle;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  color: #4d4749;\n  border-bottom: 1px solid #b8b8b8;\n  justify-content: flex-end;\n}\n.item {\n  padding: 10px;\n  font-size: 20px;\n}\n.footer {\n  position: sticky;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  color: #4d4749;\n  padding: 5px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 16px;\n}\n.data {\n  padding-left: 10px;\n}\n/* unvisited link */\n.tabs {\n  padding: 8px;\n  margin-top: 10px;\n  border: 1px solid #a0a0a0;\n  width: 20%;\n  text-align: center;\n}\n.tabs_active {\n  background-color: #de5445;\n  color: white;\n  pointer-events: none;\n  font-weight: bold;\n  border: none;\n  filter: none;\n}\n/* Glyph, by Harry Roberts */\nhr {\n  overflow: visible;\n  /* For IE */\n  padding: 0;\n  border: none;\n  border-top: medium double #cbcbcb;\n  color: #cbcbcb;\n  text-align: center;\n}\nhr:after {\n  display: inline-block;\n  position: relative;\n  top: -0.7em;\n  font-size: 1.5em;\n  padding: 0 0.25em;\n  background: white;\n}\n.blur-background_in {\n  filter: blur(30px);\n  -webkit-filter: blur(30px);\n  -o-filter: blur(30px);\n  -moz-filter: blur(30px);\n  pointer-events: none;\n  transition: all 0.1s ease-in;\n  -webkit-transition: all 0.1s ease-in;\n  -o-transition: all 0.1s ease-in;\n  -moz-transition: all 0.1s ease-in;\n}\n.in {\n  animation: blurin 0.3s, linear forwards;\n  -o-animation: blurin 0.3s, linear forwards;\n  -moz-animation: blurin 0.3s, linear forwards;\n  -webkit-animation: blurin 0.3s, linear forwards;\n}\n.blur-background_out {\n  animation: blurout 0.3s, linear forwards;\n  -o-animation: blurout 0.3s, linear forwards;\n  -moz-animation: blurout 0.3s, linear forwards;\n  -webkit-animation: blurout 0.3s, linear forwards;\n}\n.bounce {\n  animation: bounce 1s ease 1;\n  -o-animation: bounce 1s ease 1;\n  -moz-animation: bounce 1s ease 1;\n  -webkit-animation: bounce 1s ease 1;\n}\n.point_animation {\n  opacity: 1;\n  animation: fadein 0.25s linear forwards, rise 7s ease 1, fadeout 2.5s linear forwards;\n  -o-animation: fadein 0.25s linear forwards, rise 7s ease 1, fadeout 2.5s linear forwards;\n  -moz-animation: fadein 0.25s linear forwards, rise 7s ease 1, fadeout 2.5s linear forwards;\n  -webkit-animation: fadein 0.25s linear forwards, rise 7s ease 1, fadeout 2.5s linear forwards;\n}\n.console_animation_in {\n  opacity: 1;\n  animation: fadein 0.5s linear forwards;\n  -o-animation: fadein 0.5s linear forwards;\n  -moz-animation: fadein 0.5s linear forwards;\n  -webkit-animation: fadein 0.5s linear forwards;\n}\n.console_animation_out {\n  opacity: 1;\n  animation: fadeout 1s linear forwards;\n  -o-animation: fadeout 1s linear forwards;\n  -moz-animation: fadeout 1s linear forwards;\n  -webkit-animation: fadeout 1s linear forwards;\n}\n.fadein {\n  animation: fadein 0.5s;\n  -o-animation: fadein 0.5s;\n  -moz-animation: fadein 0.5s;\n  -webkit-animation: fadein 0.5s;\n}\n.modal_fadein {\n  animation: fadein 0.3s linear forwards;\n  -o-animation: fadein 0.3s linear forwards;\n  -moz-animation: fadein 0.3s linear forwards;\n  -webkit-animation: fadein 0.3s linear forwards;\n}\n.modal_fadeout {\n  animation: fadeout 0.5s linear forwards;\n  -o-animation: fadeout 0.5s linear forwards;\n  -moz-animation: fadeout 0.5s linear forwards;\n  -webkit-animation: fadeout 0.5s linear forwards;\n}\n@keyframes bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(1, 1) translateY(0);\n  }\n  30% {\n    transform: scale(1, 1) translateY(-20px);\n  }\n  50% {\n    transform: scale(1, 1) translateY(0);\n  }\n  65% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes rise {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(1, 1) translateY(-40px);\n  }\n  30% {\n    transform: scale(1, 1) translateY(-40px);\n  }\n  50% {\n    transform: scale(1, 1) translateY(-40px);\n  }\n  65% {\n    transform: scale(1, 1) translateY(-40px);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeout {\n  50% {\n    opacity: 1;\n  }\n  50%, 100% {\n    opacity: 0;\n  }\n}\n@keyframes blurout {\n  from {\n    filter: blur(30px);\n  }\n  to {\n    filter: none;\n  }\n}\n@keyframes blurin {\n  from {\n    filter: none;\n  }\n  to {\n    filter: blur(30px);\n  }\n}\n.resp-sharing-button__link,\n.resp-sharing-button__icon {\n  display: inline-block;\n}\n.resp-sharing-button__link {\n  text-decoration: none;\n  color: #fff;\n  margin: 0.5em;\n}\n.resp-sharing-button {\n  border-radius: 5px;\n  transition: 25ms ease-out;\n  padding: 0.5em 0.75em;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n}\n.resp-sharing-button__icon svg {\n  width: 40px;\n  height: 40px;\n  margin-right: 0.4em;\n  vertical-align: top;\n}\n.resp-sharing-button--small svg {\n  margin: 0;\n  vertical-align: middle;\n}\n/* Non solid icons get a stroke */\n.resp-sharing-button__icon {\n  stroke: #fff;\n  fill: none;\n}\n/* Solid icons get a fill */\n.resp-sharing-button__icon--solid,\n.resp-sharing-button__icon--solidcircle {\n  fill: #fff;\n  stroke: none;\n}\n.resp-sharing-button--twitter {\n  background-color: #55acee;\n}\n.resp-sharing-button--twitter:hover {\n  background-color: #2795e9;\n}\n.resp-sharing-button--pinterest {\n  background-color: #bd081c;\n}\n.resp-sharing-button--pinterest:hover {\n  background-color: #8c0615;\n}\n.resp-sharing-button--facebook {\n  background-color: #3b5998;\n}\n.resp-sharing-button--facebook:hover {\n  background-color: #2d4373;\n}\n.resp-sharing-button--tumblr {\n  background-color: #35465c;\n}\n.resp-sharing-button--tumblr:hover {\n  background-color: #222d3c;\n}\n.resp-sharing-button--reddit {\n  background-color: #5f99cf;\n}\n.resp-sharing-button--reddit:hover {\n  background-color: #3a80c1;\n}\n.resp-sharing-button--google {\n  background-color: #dd4b39;\n}\n.resp-sharing-button--google:hover {\n  background-color: #c23321;\n}\n.resp-sharing-button--linkedin {\n  background-color: #0077b5;\n}\n.resp-sharing-button--linkedin:hover {\n  background-color: #046293;\n}\n.resp-sharing-button--email {\n  background-color: #777;\n}\n.resp-sharing-button--email:hover {\n  background-color: #5e5e5e;\n}\n.resp-sharing-button--xing {\n  background-color: #1a7576;\n}\n.resp-sharing-button--xing:hover {\n  background-color: #114c4c;\n}\n.resp-sharing-button--whatsapp {\n  background-color: #25d366;\n}\n.resp-sharing-button--whatsapp:hover {\n  background-color: #1da851;\n}\n.resp-sharing-button--hackernews {\n  background-color: #ff6600;\n}\n.resp-sharing-button--hackernews:hover,\n.resp-sharing-button--hackernews:focus {\n  background-color: #fb6200;\n}\n.resp-sharing-button--vk {\n  background-color: #507299;\n}\n.resp-sharing-button--vk:hover {\n  background-color: #43648c;\n}\n.resp-sharing-button--facebook {\n  background-color: #3b5998;\n  border-color: #3b5998;\n}\n.resp-sharing-button--facebook:hover,\n.resp-sharing-button--facebook:active {\n  background-color: #2d4373;\n  border-color: #2d4373;\n}\n.resp-sharing-button--twitter {\n  background-color: #55acee;\n  border-color: #55acee;\n}\n.resp-sharing-button--twitter:hover,\n.resp-sharing-button--twitter:active {\n  background-color: #2795e9;\n  border-color: #2795e9;\n}\n.resp-sharing-button--tumblr {\n  background-color: #35465c;\n  border-color: #35465c;\n}\n.resp-sharing-button--tumblr:hover,\n.resp-sharing-button--tumblr:active {\n  background-color: #222d3c;\n  border-color: #222d3c;\n}\n.resp-sharing-button--email {\n  background-color: #777777;\n  border-color: #777777;\n}\n.resp-sharing-button--email:hover,\n.resp-sharing-button--email:active {\n  background-color: #5e5e5e;\n  border-color: #5e5e5e;\n}\n.resp-sharing-button--pinterest {\n  background-color: #bd081c;\n  border-color: #bd081c;\n}\n.resp-sharing-button--pinterest:hover,\n.resp-sharing-button--pinterest:active {\n  background-color: #8c0615;\n  border-color: #8c0615;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3VkaW11cm8vRGVza3RvcC9QZXJzb25hbCBQcm9qZWN0cy90YWtlNS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG9GQUFBO0FBRVI7RUFDSSxrQkFBQTtFQUFvQixzQkFBQTtFQUNwQixPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdHQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBR0EsY0FBQTtBQ0RKO0FESUE7Ozs7O0VBS0ksZUFBQTtFQUNBLGNBQUE7QUNESjtBRElBO0VBQ0ksZUFBQTtFQUNBLGtFQUFBO0FDREo7QURLQTtFQUNJLG1FQUFBO0FDRko7QURLQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDRko7QURLQTtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUdBLGVBQUE7RUFFQSxlQUFBO0VBQ0EsWUFBQTtFQUlBLHlDQUFBO0FDVEo7QURZQTs7Ozs7RUFLSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUNUSjtBRFlBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FDVEo7QURZQTtFQUlJLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBRUEsY0FBQTtFQUlBLHlDQUFBO0FDakJKO0FEb0JBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ2pCSjtBRG9CQTtFQUNJLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFFQSxtRUFBQTtBQ2xCSjtBRHFCQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDbEJKO0FEcUJBO0VBQ0ksMEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBR0EsZUFBQTtFQUNBLGVBQUE7RUFDQSw0REFBQTtBQ3BCSjtBRHVCQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUNwQko7QUR1QkE7RUFFSSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDckJKO0FEMEJBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ3ZCSjtBRDBCQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDdkJKO0FEMEJBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUVBLG1CQUFBO0VBRUEsZ0NBQUE7RUFJQSx5QkFBQTtBQ3pCSjtBRDRCQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFFQSxtQkFBQTtFQUVBLGdDQUFBO0VBSUEseUJBQUE7QUMzQko7QUQ4QkE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBRUEsbUJBQUE7RUFFQSxnQ0FBQTtFQUlBLHlCQUFBO0FDN0JKO0FEZ0NBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUVBLG1CQUFBO0VBRUEsZ0NBQUE7RUFJQSx5QkFBQTtBQy9CSjtBRGtDQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUVBQUE7QUMvQko7QURrQ0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNDQUFBO0FDL0JKO0FEa0NBO0VBQ0ksZUFBQTtBQy9CSjtBRGtDQTtFQUNJLHNDQUFBO0FDL0JKO0FEa0NBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUdBLDRDQUFBO0FDL0JKO0FEa0NBO0VBSUksYUFBQTtFQUlBLHVCQUFBO0VBRUEsa0JBQUE7QUN0Q0o7QUQrQ0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFFQSxVQUFBO0VBSUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtFQUFBO0FDaERKO0FEbURBO0VBQ0ksWUFBQTtBQ2hESjtBRG1EQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtRUFBQTtBQ2hESjtBRG1EQTtFQU1JLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDREQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQ3JESjtBRHdEQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQ3JESjtBRDRESTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxpQkFBQTtBQzNEUjtBRCtEQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0REFBQTtFQUVBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0FDOURKO0FEaUVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUM5REo7QURpRUE7RUFDSSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBRUEsNERBQUE7RUFDQSxlQUFBO0FDL0RKO0FEbUVBO0VBQ0ksa0JBQUE7QUNoRUo7QURvRUEsbUJBQUE7QUF3QkE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ3hGSjtBRDJGQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUdBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQzFGSjtBRHlHQSw0QkFBQTtBQUVBO0VBQ0ksaUJBQUE7RUFBbUIsV0FBQTtFQUNuQixVQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDdEdKO0FEd0dBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNyR0o7QUR5R0E7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUVBLG9CQUFBO0VBRUEsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7QUN4R0o7QUQyR0E7RUFDSSx1Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQ0FBQTtBQ3hHSjtBRDJHQTtFQUNJLHdDQUFBO0VBQ0EsMkNBQUE7RUFDQSw2Q0FBQTtFQUNBLGdEQUFBO0FDeEdKO0FEMkdBO0VBQ0ksMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUNBQUE7QUN4R0o7QUQyR0E7RUFDSSxVQUFBO0VBQ0EscUZBQUE7RUFDQSx3RkFBQTtFQUNBLDBGQUFBO0VBQ0EsNkZBQUE7QUN4R0o7QUQyR0E7RUFDSSxVQUFBO0VBQ0Esc0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDJDQUFBO0VBQ0EsOENBQUE7QUN4R0o7QUQyR0E7RUFDSSxVQUFBO0VBQ0EscUNBQUE7RUFDQSx3Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsNkNBQUE7QUN4R0o7QUQyR0E7RUFDSSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQ3hHSjtBRDJHQTtFQUNJLHNDQUFBO0VBQ0EseUNBQUE7RUFDQSwyQ0FBQTtFQUNBLDhDQUFBO0FDeEdKO0FEMkdBO0VBQ0ksdUNBQUE7RUFDQSwwQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsK0NBQUE7QUN4R0o7QUQrR0E7RUFDSTtJQUNJLG9DQUFBO0VDNUdOO0VEOEdFO0lBQ0ksb0NBQUE7RUM1R047RUQ4R0U7SUFDSSx3Q0FBQTtFQzVHTjtFRDhHRTtJQUNJLG9DQUFBO0VDNUdOO0VEK0dFO0lBQ0ksb0NBQUE7RUM3R047RUQrR0U7SUFDSSxvQ0FBQTtFQzdHTjtBQUNGO0FEa0xBO0VBQ0k7SUFDSSxvQ0FBQTtFQ3BITjtFRHNIRTtJQUNJLHdDQUFBO0VDcEhOO0VEc0hFO0lBQ0ksd0NBQUE7RUNwSE47RURzSEU7SUFDSSx3Q0FBQTtFQ3BITjtFRHVIRTtJQUNJLHdDQUFBO0VDckhOO0VEdUhFO0lBQ0ksb0NBQUE7RUNySE47QUFDRjtBRDBMQTtFQUNJO0lBQ0ksVUFBQTtFQzVITjtFRDhIRTtJQUNJLFVBQUE7RUM1SE47QUFDRjtBRDBKQTtFQUlJO0lBQ0ksVUFBQTtFQ25JTjtFRHFJRTtJQUVJLFVBQUE7RUNwSU47QUFDRjtBRDhLQTtFQUNJO0lBQ0ksa0JBQUE7RUNwSk47RURzSkU7SUFDSSxZQUFBO0VDcEpOO0FBQ0Y7QURrTEE7RUFDSTtJQUNJLFlBQUE7RUN4Sk47RUQwSkU7SUFDSSxrQkFBQTtFQ3hKTjtBQUNGO0FEZ01BOztFQUVJLHFCQUFBO0FDdEtKO0FEeUtBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ3RLSjtBRHlLQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlEQUFBO0FDdEtKO0FEeUtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDdEtKO0FEeUtBO0VBQ0ksU0FBQTtFQUNBLHNCQUFBO0FDdEtKO0FEeUtBLGlDQUFBO0FBQ0E7RUFDSSxZQUFBO0VBQ0EsVUFBQTtBQ3RLSjtBRHlLQSwyQkFBQTtBQUNBOztFQUVJLFVBQUE7RUFDQSxZQUFBO0FDdEtKO0FEeUtBO0VBQ0kseUJBQUE7QUN0S0o7QUR5S0E7RUFDSSx5QkFBQTtBQ3RLSjtBRHlLQTtFQUNJLHlCQUFBO0FDdEtKO0FEeUtBO0VBQ0kseUJBQUE7QUN0S0o7QUR5S0E7RUFDSSx5QkFBQTtBQ3RLSjtBRHlLQTtFQUNJLHlCQUFBO0FDdEtKO0FEeUtBO0VBQ0kseUJBQUE7QUN0S0o7QUR5S0E7RUFDSSx5QkFBQTtBQ3RLSjtBRHlLQTtFQUNJLHlCQUFBO0FDdEtKO0FEeUtBO0VBQ0kseUJBQUE7QUN0S0o7QUR5S0E7RUFDSSx5QkFBQTtBQ3RLSjtBRHlLQTtFQUNJLHlCQUFBO0FDdEtKO0FEeUtBO0VBQ0kseUJBQUE7QUN0S0o7QUR5S0E7RUFDSSx5QkFBQTtBQ3RLSjtBRHlLQTtFQUNJLHNCQUFBO0FDdEtKO0FEeUtBO0VBQ0kseUJBQUE7QUN0S0o7QUR5S0E7RUFDSSx5QkFBQTtBQ3RLSjtBRHlLQTtFQUNJLHlCQUFBO0FDdEtKO0FEeUtBO0VBQ0kseUJBQUE7QUN0S0o7QUR5S0E7RUFDSSx5QkFBQTtBQ3RLSjtBRHlLQTtFQUNJLHlCQUFBO0FDdEtKO0FEd0tBOztFQUVJLHlCQUFBO0FDcktKO0FEd0tBO0VBQ0kseUJBQUE7QUNyS0o7QUR3S0E7RUFDSSx5QkFBQTtBQ3JLSjtBRHdLQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUNyS0o7QUR3S0E7O0VBRUkseUJBQUE7RUFDQSxxQkFBQTtBQ3JLSjtBRHdLQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUNyS0o7QUR3S0E7O0VBRUkseUJBQUE7RUFDQSxxQkFBQTtBQ3JLSjtBRHdLQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUNyS0o7QUR3S0E7O0VBRUkseUJBQUE7RUFDQSxxQkFBQTtBQ3JLSjtBRHdLQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUNyS0o7QUR3S0E7O0VBRUkseUJBQUE7RUFDQSxxQkFBQTtBQ3JLSjtBRHdLQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUNyS0o7QUR3S0E7O0VBRUkseUJBQUE7RUFDQSxxQkFBQTtBQ3JLSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xuXG4uYXBwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qQ2FuIGFsc28gYmUgYGZpeGVkYCovXG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICAvKlNvbHZlcyBhIHByb2JsZW0gaW4gd2hpY2ggdGhlIGNvbnRlbnQgaXMgYmVpbmcgY3V0IHdoZW4gdGhlIGRpdiBpcyBzbWFsbGVyIHRoYW4gaXRzJyB3cmFwcGVyOiovXG4gICAgbWF4LXdpZHRoOiAxMDElO1xuICAgIG1heC1oZWlnaHQ6IDEwMSU7XG5cbiAgICAvLyBvdmVyZmxvdzogYXV0bztcbiAgICBvdmVyZmxvdzogbm9uZTtcbn1cblxuLmNvcnJlY3Rfd29yZHMsXG4udXNlZF9sZXR0ZXJzLFxuLnNjb3JlLFxuLmhpZ2hfc2NvcmUsXG4uaGlnaGVzdF9zY29yaW5nX3dvcmQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogIzRkNDc0OTtcbn1cblxuLnNjb3JlIHtcbiAgICBmb250LXNpemU6IDY1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YS1Cb2xkJywgJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIC8vIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5oaWdoX3Njb3JlIHtcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhLUxpZ2h0JywgJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG50ZXh0YXJlYSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiA5NSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5idXR0IHtcbiAgICBib3JkZXI6IDFweCBvdXRzZXQgd2hpdGU7XG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiA4MHB4OyAvLyAxNTBweCBmb3IgZGVza3RvcCwgMTAwcHggZm9yIG1vYmlsZVxuICAgIHdpZHRoOiA4MHB4OyAvLzE1MHB4IGZvciBkZXNrdG9wLCAxMDBweCBmb3IgbW9iaWxlXG4gICAgbWF4LXdpZHRoOiAxMTBweDtcbiAgICBtYXgtaGVpZ2h0OiAxMTBweDtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBcbiAgICAvLyBtYXJnaW4tdG9wOiA2MHB4OyAvLyBmb3IgbW9iaWxlXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC8vIG1hcmdpbi1yaWdodDogN3B4O1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAvLyBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICAvLyBmb250LWZhbWlseTogXCJDb1wiO1xuICAgIGZvbnQtZmFtaWx5OiAnRG9taW5lLVJlZ3VsYXInLCBzYW5zLXNlcmlmO1xufVxuXG4uYnV0dDpob3ZlcjplbmFibGVkLFxuLnVzZXJfbGV0dGVyczpob3ZlcjplbmFibGVkLFxuLmJ1dHQtc206aG92ZXI6ZW5hYmxlZCxcbi5jb250cm9sOmhvdmVyOmVuYWJsZWQsXG4ud29yZHNfYnV0dG9uOmhvdmVyOmVuYWJsZWR7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xuICAgIC13ZWJraXQtZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XG4gICAgLW8tZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XG4gICAgLW1vei1maWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcbn1cblxuYTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xuICAgIC13ZWJraXQtZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XG4gICAgLW8tZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XG4gICAgLW1vei1maWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcbn1cblxuLnVzZXJfbGV0dGVycyB7XG4gICAgLy8gYm9yZGVyOiBub25lO1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAgIGJvcmRlcjogMXB4IG91dHNldCB3aGl0ZTtcbiAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYwLCAxNjAsIDE2MCk7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIG1heC13aWR0aDogMTEwcHg7XG4gICAgbWF4LWhlaWdodDogMTEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC8vIGZvbnQtc2l6ZTogNTBweDtcbiAgICBjb2xvcjogcmdiKDkyLCA5MiwgOTIpO1xuXG4gICAgLy8gZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgLy8gZm9udC1mYW1pbHk6IFwiQ29cIjtcbiAgICBmb250LWZhbWlseTogJ0RvbWluZS1SZWd1bGFyJywgc2Fucy1zZXJpZjtcbn1cblxuLmJ1dHQtc20ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMjI0LCAyMjQpO1xuICAgIGhlaWdodDogODBweDsgLy8gODBweCBmb3IgZGVza3RvcFxuICAgIHdpZHRoOiA4dnc7IC8vNjBweCBmb3IgZGVza3RvcCwgMzNweCBmb3IgbW9iaWxlXG4gICAgbWF4LXdpZHRoOiA1MHB4O1xuICAgIG1heC1oZWlnaHQ6IDcwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY29udHJvbCB7XG4gICAgYm9yZGVyOiAxcHggb3V0c2V0IHJnYig1NCwgNTQsIDU0KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IHJnYig1NCwgNTQsIDU0KTtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLy8gZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YS1MaWdodCcsICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuLmNvbnRyb2w6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuMztcbiAgICBjdXJzb3I6IGF1dG87XG59XG5cbi53b3Jkc19idXR0b24ge1xuICAgIGJvcmRlcjogMnB4IG91dHNldCByZ2IoNTQsIDU0LCA1NCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiByZ2IoNTQsIDU0LCA1NCk7XG4gICAgLy8gbWFyZ2luLXRvcDogMTVweDtcbiAgICAvLyBwYWRkaW5nLXRvcDoxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5cbi5sZXR0ZXJzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICAvLyBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMjB2aDtcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udXNlZF9sZXR0ZXJfcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi51c2VkX2xldHRlcl9pY29uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnN0YXRzX21vZGFsIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICB3aWR0aDogMzYwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC8vIGJvcmRlcjogMTBweCBzb2xpZCByZ2IoMjMyLCAyMzIsIDIzMik7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2NjYztcbn1cblxuLnR1dG9yaWFsX21vZGFsIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiA1NzBweDtcbiAgICB3aWR0aDogMzkwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC8vIGJvcmRlcjogMTBweCBzb2xpZCByZ2IoMjMyLCAyMzIsIDIzMik7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2NjYztcbn1cblxuLndvcmRzX21vZGFsIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiA1NTBweDtcbiAgICB3aWR0aDogMzMwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC8vIGJvcmRlcjogMTBweCBzb2xpZCByZ2IoMjMyLCAyMzIsIDIzMik7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2NjYztcbn1cblxuLmdpdmV1cF9tb2RhbCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAvLyBib3JkZXI6IDEwcHggc29saWQgcmdiKDIzMiwgMjMyLCAyMzIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblxuICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDNweCAjY2NjO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDNweCAjY2NjO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNjY2M7XG59XG5cbi5tb2RhbF90ZXh0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhLUxpZ2h0JywgJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4ubW9kYWxfaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogI2M2MTEwMDtcbiAgICBmb250LWZhbWlseTogJ0RvbWluZS1Cb2xkJywgc2Fucy1zZXJpZjtcbn1cblxuLm1vZGFsX2hlYWRlcl9zbSB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4ubW9kYWxfdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnRG9taW5lLUJvbGQnLCBzYW5zLXNlcmlmO1xufVxuXG4uY2VudGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLnlvdV9sb3NlIHtcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XG4gICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIC8vIHdpZHRoOiAzNjBweDtcbiAgICAvLyB0b3A6IDUwJTtcbiAgICAvLyBsZWZ0OiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLy8gYm9yZGVyOiAxMHB4IHNvbGlkIHJnYigyMzIsIDIzMiwgMjMyKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgLy8gLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblxuICAgIC8vIC1tb3otYm94LXNoYWRvdzogMCAwIDNweCAjY2NjO1xuICAgIC8vIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDNweCAjY2NjO1xuICAgIC8vIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNjY2M7XG59XG5cbi5wb2ludF92YWx1ZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAvLyBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLy8gcG9zaXRpb246IGZpeGVkO1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAzMnB4OyAvLyA2NnB4IGZvciBkZXNrdG9wXG4gICAgLy8gbWFyZ2luLXRvcDogLTkycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcbiAgICBmb250LWZhbWlseTonSW5jb25zb2xhdGEtQm9sZCcsICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuLnNvY2lhbF9tZWRpYV9pY29uIHtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5hbGVydF90ZXh0IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6IHJnYig2MywgNjMsIDYzKTtcbiAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YS1MaWdodCcsICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuLmhlYWRlciB7XG4gICAgLy8gcG9zaXRpb246IGZpeGVkO1xuICAgIC8vIGxlZnQ6IDA7XG4gICAgLy8gdG9wOiAwO1xuICAgIC8vIHdpZHRoOiAxMDAlO1xuXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjNGQ0NzQ5O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTg0LCAxODQsIDE4NCk7XG59XG5cbnVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgLy8gbWFyZ2luOiAwIGF1dG87XG4gICAgLy8gdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAvLyB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgLy8gaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAvLyBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC8vIHBhZGRpbmc6IDIwcHg7XG4gICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIC8vIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuXG5oZWFkZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIC8vIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgLy8gZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjNGQ0NzQ5O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTg0LCAxODQsIDE4NCk7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLml0ZW0ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjNGQ0NzQ5O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTg0LCAxODQsIDE4NCk7XG59XG5cbi5kYXRhIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiB1bnZpc2l0ZWQgbGluayAqL1xuLy8gYTpsaW5rIHtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4vLyB9XG5cbi8vIC8qIHZpc2l0ZWQgbGluayAqL1xuLy8gYTp2aXNpdGVkIHtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbi8vIH1cblxuLy8gLyogbW91c2Ugb3ZlciBsaW5rICovXG4vLyBhOmhvdmVyIHtcbi8vICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZGU1NDQ1O1xuLy8gICAgIC8vIGNvbG9yOiB3aGl0ZTtcbi8vICAgICBmaWx0ZXI6IG5vbmU7XG4vLyB9XG5cbi8vIC8qIHNlbGVjdGVkIGxpbmsgKi9cbi8vIGE6YWN0aXZlIHtcbi8vICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZGU1NDQ1O1xuLy8gICAgIC8vIGNvbG9yOiB3aGl0ZTtcbi8vICAgICBmaWx0ZXI6IG5vbmU7XG4vLyB9XG5cbi50YWJzIHtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTYwLCAxNjAsIDE2MCk7XG4gICAgd2lkdGg6IDIwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YWJzX2FjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlNTQ0NTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLy8gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICAgIC8vIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZpbHRlcjogbm9uZTtcbn1cblxuLy8gaHIge1xuLy8gICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4vLyAgICAgY29sb3I6ICNjY2M7XG4vLyAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcbi8vIH1cblxuLy8gaHIge1xuLy8gICAgIGJvcmRlcjogMDtcbi8vICAgICBoZWlnaHQ6IDFweDtcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC43NSksIHJnYmEoMCwgMCwgMCwgMCkpO1xuLy8gfVxuXG4vKiBHbHlwaCwgYnkgSGFycnkgUm9iZXJ0cyAqL1xuXG5ociB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIEZvciBJRSAqL1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci10b3A6IG1lZGl1bSBkb3VibGUgcmdiKDIwMywgMjAzLCAyMDMpO1xuICAgIGNvbG9yOiAgcmdiKDIwMywgMjAzLCAyMDMpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmhyOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTAuN2VtO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgcGFkZGluZzogMCAwLjI1ZW07XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cblxuLmJsdXItYmFja2dyb3VuZF9pbiB7XG4gICAgZmlsdGVyOiBibHVyKDMwcHgpO1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDMwcHgpO1xuICAgIC1vLWZpbHRlcjogYmx1cigzMHB4KTtcbiAgICAtbW96LWZpbHRlcjogYmx1cigzMHB4KTtcblxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW47XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbjtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW47XG59XG5cbi5pbiB7XG4gICAgYW5pbWF0aW9uOiBibHVyaW4gMC4zcywgbGluZWFyIGZvcndhcmRzO1xuICAgIC1vLWFuaW1hdGlvbjogYmx1cmluIDAuM3MsIGxpbmVhciBmb3J3YXJkcztcbiAgICAtbW96LWFuaW1hdGlvbjogYmx1cmluIDAuM3MsIGxpbmVhciBmb3J3YXJkcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYmx1cmluIDAuM3MsIGxpbmVhciBmb3J3YXJkcztcbn1cblxuLmJsdXItYmFja2dyb3VuZF9vdXQge1xuICAgIGFuaW1hdGlvbjogYmx1cm91dCAwLjNzLCBsaW5lYXIgZm9yd2FyZHM7XG4gICAgLW8tYW5pbWF0aW9uOiBibHVyb3V0IDAuM3MsIGxpbmVhciBmb3J3YXJkcztcbiAgICAtbW96LWFuaW1hdGlvbjogYmx1cm91dCAwLjNzLCBsaW5lYXIgZm9yd2FyZHM7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJsdXJvdXQgMC4zcywgbGluZWFyIGZvcndhcmRzO1xufVxuXG4uYm91bmNlIHtcbiAgICBhbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIDE7XG4gICAgLW8tYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSAxO1xuICAgIC1tb3otYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSAxO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSAxO1xufVxuXG4ucG9pbnRfYW5pbWF0aW9uIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGFuaW1hdGlvbjogZmFkZWluIDAuMjVzIGxpbmVhciBmb3J3YXJkcywgcmlzZSA3cyBlYXNlIDEsIGZhZGVvdXQgMi41cyBsaW5lYXIgZm9yd2FyZHM7XG4gICAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMC4yNXMgbGluZWFyIGZvcndhcmRzLCByaXNlIDdzIGVhc2UgMSwgZmFkZW91dCAyLjVzIGxpbmVhciBmb3J3YXJkcztcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDAuMjVzIGxpbmVhciBmb3J3YXJkcywgcmlzZSA3cyBlYXNlIDEsIGZhZGVvdXQgMi41cyBsaW5lYXIgZm9yd2FyZHM7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjI1cyBsaW5lYXIgZm9yd2FyZHMsIHJpc2UgN3MgZWFzZSAxLCBmYWRlb3V0IDIuNXMgbGluZWFyIGZvcndhcmRzO1xufVxuXG4uY29uc29sZV9hbmltYXRpb25faW4ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cyBsaW5lYXIgZm9yd2FyZHM7XG4gICAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMC41cyBsaW5lYXIgZm9yd2FyZHM7XG4gICAgLW1vei1hbmltYXRpb246IGZhZGVpbiAwLjVzIGxpbmVhciBmb3J3YXJkcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNXMgbGluZWFyIGZvcndhcmRzO1xufVxuXG4uY29uc29sZV9hbmltYXRpb25fb3V0IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGFuaW1hdGlvbjogZmFkZW91dCAxcyBsaW5lYXIgZm9yd2FyZHM7XG4gICAgLW8tYW5pbWF0aW9uOiBmYWRlb3V0IDFzIGxpbmVhciBmb3J3YXJkcztcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZW91dCAxcyBsaW5lYXIgZm9yd2FyZHM7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVvdXQgMXMgbGluZWFyIGZvcndhcmRzO1xufVxuXG4uZmFkZWluIHtcbiAgICBhbmltYXRpb246IGZhZGVpbiAwLjVzO1xuICAgIC1vLWFuaW1hdGlvbjogZmFkZWluIDAuNXM7XG4gICAgLW1vei1hbmltYXRpb246IGZhZGVpbiAwLjVzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41cztcbn1cblxuLm1vZGFsX2ZhZGVpbiB7XG4gICAgYW5pbWF0aW9uOiBmYWRlaW4gMC4zcyBsaW5lYXIgZm9yd2FyZHM7XG4gICAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMC4zcyBsaW5lYXIgZm9yd2FyZHM7XG4gICAgLW1vei1hbmltYXRpb246IGZhZGVpbiAwLjNzIGxpbmVhciBmb3J3YXJkcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuM3MgbGluZWFyIGZvcndhcmRzO1xufVxuXG4ubW9kYWxfZmFkZW91dCB7XG4gICAgYW5pbWF0aW9uOiBmYWRlb3V0IDAuNXMgbGluZWFyIGZvcndhcmRzO1xuICAgIC1vLWFuaW1hdGlvbjogZmFkZW91dCAwLjVzIGxpbmVhciBmb3J3YXJkcztcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZW91dCAwLjVzIGxpbmVhciBmb3J3YXJkcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZW91dCAwLjVzIGxpbmVhciBmb3J3YXJkcztcbn1cblxuLy8gLm1vZGFsX2FwcGVhciB7XG4vLyAgICAgYW5pbWF0aW9uOiBtb2RhbF9hcHBlYXIgMC41cztcbi8vIH1cblxuQGtleWZyYW1lcyBib3VuY2Uge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICAxMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDMwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgLy8gNTglICB7IHRyYW5zZm9ybTogc2NhbGUoMSwxKSB0cmFuc2xhdGVZKC03cHgpOyB9XG4gICAgNjUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICAgIH1cbn1cblxuQC1vLWtleWZyYW1lcyBib3VuY2Uge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICAxMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDMwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNTVweCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgLy8gNTglICB7IHRyYW5zZm9ybTogc2NhbGUoMSwxKSB0cmFuc2xhdGVZKC03cHgpOyB9XG4gICAgNjUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICAgIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIGJvdW5jZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDEwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgMzAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC01NXB4KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICAvLyA1OCUgIHsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpIHRyYW5zbGF0ZVkoLTdweCk7IH1cbiAgICA2NSUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgMTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICAzMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTU1cHgpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIC8vIDU4JSAgeyB0cmFuc2Zvcm06IHNjYWxlKDEsMSkgdHJhbnNsYXRlWSgtN3B4KTsgfVxuICAgIDY1JSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgcmlzZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDEwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgfVxuICAgIDMwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgfVxuICAgIC8vIDU4JSAgeyB0cmFuc2Zvcm06IHNjYWxlKDEsMSkgdHJhbnNsYXRlWSgtN3B4KTsgfVxuICAgIDY1JSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxufVxuXG5ALW8ta2V5ZnJhbWVzIHJpc2Uge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICAxMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTQwcHgpO1xuICAgIH1cbiAgICAzMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTQwcHgpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTQwcHgpO1xuICAgIH1cbiAgICAvLyA1OCUgIHsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpIHRyYW5zbGF0ZVkoLTdweCk7IH1cbiAgICA2NSUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTQwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICAgIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHJpc2Uge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICAxMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTQwcHgpO1xuICAgIH1cbiAgICAzMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTQwcHgpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTQwcHgpO1xuICAgIH1cbiAgICAvLyA1OCUgIHsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpIHRyYW5zbGF0ZVkoLTdweCk7IH1cbiAgICA2NSUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTQwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICAgIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIHJpc2Uge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICAxMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTQwcHgpO1xuICAgIH1cbiAgICAzMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTQwcHgpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTQwcHgpO1xuICAgIH1cbiAgICAvLyA1OCUgIHsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpIHRyYW5zbGF0ZVkoLTdweCk7IH1cbiAgICA2NSUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTQwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlaW4ge1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG5ALW8ta2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbkAtbW96LWtleWZyYW1lcyBmYWRlaW4ge1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlb3V0IHtcbiAgICAvLyAwJSw1MCUge1xuICAgIC8vICAgICBvcGFjaXR5OiAwO1xuICAgIC8vIH1cbiAgICA1MCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICA1MCUsXG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxufVxuXG5ALW8ta2V5ZnJhbWVzIGZhZGVvdXQge1xuICAgIC8vIDAlLDUwJSB7XG4gICAgLy8gICAgIG9wYWNpdHk6IDA7XG4gICAgLy8gfVxuICAgIDUwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDUwJSxcbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG59XG5cbkAtbW96LWtleWZyYW1lcyBmYWRlb3V0IHtcbiAgICAvLyAwJSw1MCUge1xuICAgIC8vICAgICBvcGFjaXR5OiAwO1xuICAgIC8vIH1cbiAgICA1MCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICA1MCUsXG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZW91dCB7XG4gICAgLy8gMCUsNTAlIHtcbiAgICAvLyAgICAgb3BhY2l0eTogMDtcbiAgICAvLyB9XG4gICAgNTAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgNTAlLFxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBibHVyb3V0IHtcbiAgICBmcm9tIHtcbiAgICAgICAgZmlsdGVyOiBibHVyKDMwcHgpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICB9XG59XG5cbkAtby1rZXlmcmFtZXMgYmx1cm91dCB7XG4gICAgZnJvbSB7XG4gICAgICAgIGZpbHRlcjogYmx1cigzMHB4KTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgfVxufVxuXG5ALW1vei1rZXlmcmFtZXMgYmx1cm91dCB7XG4gICAgZnJvbSB7XG4gICAgICAgIGZpbHRlcjogYmx1cigzMHB4KTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmx1cm91dCB7XG4gICAgZnJvbSB7XG4gICAgICAgIGZpbHRlcjogYmx1cigzMHB4KTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJsdXJpbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBmaWx0ZXI6IGJsdXIoMzBweCk7XG4gICAgfVxufVxuXG5ALW8ta2V5ZnJhbWVzIGJsdXJpbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBmaWx0ZXI6IGJsdXIoMzBweCk7XG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmx1cmluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgZmlsdGVyOiBub25lO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIGZpbHRlcjogYmx1cigzMHB4KTtcbiAgICB9XG59XG5cbkAtbW96LWtleWZyYW1lcyBibHVyaW4ge1xuICAgIGZyb20ge1xuICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgZmlsdGVyOiBibHVyKDMwcHgpO1xuICAgIH1cbn1cblxuLy8gQGtleWZyYW1lcyBtb2RhbF9hcHBlYXIge1xuLy8gICAgIGZyb20ge1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSwgMC41KTtcbi8vICAgICAgICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcbi8vICAgICB9XG4vLyAgICAgdG8ge1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuLy8gICAgIH1cbi8vIH1cblxuLnJlc3Atc2hhcmluZy1idXR0b25fX2xpbmssXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbl9faWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbl9fbGluayB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogMC41ZW07XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdHJhbnNpdGlvbjogMjVtcyBlYXNlLW91dDtcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjc1ZW07XG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbl9faWNvbiBzdmcge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNGVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1zbWFsbCBzdmcge1xuICAgIG1hcmdpbjogMDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4vKiBOb24gc29saWQgaWNvbnMgZ2V0IGEgc3Ryb2tlICovXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbl9faWNvbiB7XG4gICAgc3Ryb2tlOiAjZmZmO1xuICAgIGZpbGw6IG5vbmU7XG59XG5cbi8qIFNvbGlkIGljb25zIGdldCBhIGZpbGwgKi9cbi5yZXNwLXNoYXJpbmctYnV0dG9uX19pY29uLS1zb2xpZCxcbi5yZXNwLXNoYXJpbmctYnV0dG9uX19pY29uLS1zb2xpZGNpcmNsZSB7XG4gICAgZmlsbDogI2ZmZjtcbiAgICBzdHJva2U6IG5vbmU7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS10d2l0dGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVhY2VlO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tdHdpdHRlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3OTVlOTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXBpbnRlcmVzdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkMDgxYztcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXBpbnRlcmVzdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhjMDYxNTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLWZhY2Vib29rIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tZmFjZWJvb2s6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDQzNzM7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS10dW1ibHIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTQ2NWM7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS10dW1ibHI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjJkM2M7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1yZWRkaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1Zjk5Y2Y7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1yZWRkaXQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTgwYzE7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1nb29nbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZDRiMzk7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1nb29nbGU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMjMzMjE7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1saW5rZWRpbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzdiNTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLWxpbmtlZGluOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ2MjkzO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tZW1haWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1lbWFpbDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVlNWU1ZTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXhpbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTc1NzY7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS14aW5nOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE0YzRjO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0td2hhdHNhcHAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNWQzNjY7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS13aGF0c2FwcDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkYTg1MTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLWhhY2tlcm5ld3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjY2MDA7XG59XG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0taGFja2VybmV3czpob3Zlcixcbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1oYWNrZXJuZXdzOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI2MjAwO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tdmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MDcyOTk7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS12azpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzNjQ4Yztcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLWZhY2Vib29rIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xuICAgIGJvcmRlci1jb2xvcjogIzNiNTk5ODtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLWZhY2Vib29rOmhvdmVyLFxuLnJlc3Atc2hhcmluZy1idXR0b24tLWZhY2Vib29rOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkNDM3MztcbiAgICBib3JkZXItY29sb3I6ICMyZDQzNzM7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS10d2l0dGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVhY2VlO1xuICAgIGJvcmRlci1jb2xvcjogIzU1YWNlZTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXR3aXR0ZXI6aG92ZXIsXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tdHdpdHRlcjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzk1ZTk7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjc5NWU5O1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tdHVtYmxyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU0NjVjO1xuICAgIGJvcmRlci1jb2xvcjogIzM1NDY1Yztcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXR1bWJscjpob3Zlcixcbi5yZXNwLXNoYXJpbmctYnV0dG9uLS10dW1ibHI6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyZDNjO1xuICAgIGJvcmRlci1jb2xvcjogIzIyMmQzYztcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLWVtYWlsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3Nzc3O1xuICAgIGJvcmRlci1jb2xvcjogIzc3Nzc3Nztcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLWVtYWlsOmhvdmVyLFxuLnJlc3Atc2hhcmluZy1idXR0b24tLWVtYWlsOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVlNWU1ZTtcbiAgICBib3JkZXItY29sb3I6ICM1ZTVlNWU7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1waW50ZXJlc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZDA4MWM7XG4gICAgYm9yZGVyLWNvbG9yOiAjYmQwODFjO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tcGludGVyZXN0OmhvdmVyLFxuLnJlc3Atc2hhcmluZy1idXR0b24tLXBpbnRlcmVzdDphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4YzA2MTU7XG4gICAgYm9yZGVyLWNvbG9yOiAjOGMwNjE1O1xufVxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcIik7XG4uYXBwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKkNhbiBhbHNvIGJlIGBmaXhlZGAqL1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgLypTb2x2ZXMgYSBwcm9ibGVtIGluIHdoaWNoIHRoZSBjb250ZW50IGlzIGJlaW5nIGN1dCB3aGVuIHRoZSBkaXYgaXMgc21hbGxlciB0aGFuIGl0cycgd3JhcHBlcjoqL1xuICBtYXgtd2lkdGg6IDEwMSU7XG4gIG1heC1oZWlnaHQ6IDEwMSU7XG4gIG92ZXJmbG93OiBub25lO1xufVxuXG4uY29ycmVjdF93b3Jkcyxcbi51c2VkX2xldHRlcnMsXG4uc2NvcmUsXG4uaGlnaF9zY29yZSxcbi5oaWdoZXN0X3Njb3Jpbmdfd29yZCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM0ZDQ3NDk7XG59XG5cbi5zY29yZSB7XG4gIGZvbnQtc2l6ZTogNjVweDtcbiAgZm9udC1mYW1pbHk6IFwiSW5jb25zb2xhdGEtQm9sZFwiLCBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuLmhpZ2hfc2NvcmUge1xuICBmb250LWZhbWlseTogXCJJbmNvbnNvbGF0YS1MaWdodFwiLCBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxudGV4dGFyZWEge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiA5NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICByZXNpemU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogbGlnaHRncmF5O1xufVxuXG4uYnV0dCB7XG4gIGJvcmRlcjogMXB4IG91dHNldCB3aGl0ZTtcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBtYXgtd2lkdGg6IDExMHB4O1xuICBtYXgtaGVpZ2h0OiAxMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJEb21pbmUtUmVndWxhclwiLCBzYW5zLXNlcmlmO1xufVxuXG4uYnV0dDpob3ZlcjplbmFibGVkLFxuLnVzZXJfbGV0dGVyczpob3ZlcjplbmFibGVkLFxuLmJ1dHQtc206aG92ZXI6ZW5hYmxlZCxcbi5jb250cm9sOmhvdmVyOmVuYWJsZWQsXG4ud29yZHNfYnV0dG9uOmhvdmVyOmVuYWJsZWQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xuICAtd2Via2l0LWZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xuICAtby1maWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcbiAgLW1vei1maWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcbn1cblxuYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XG4gIC13ZWJraXQtZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XG4gIC1vLWZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xuICAtbW96LWZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xufVxuXG4udXNlcl9sZXR0ZXJzIHtcbiAgYm9yZGVyOiAxcHggb3V0c2V0IHdoaXRlO1xuICBib3JkZXItd2lkdGg6IDVweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EwYTBhMDtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODBweDtcbiAgbWF4LXdpZHRoOiAxMTBweDtcbiAgbWF4LWhlaWdodDogMTEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM1YzVjNWM7XG4gIGZvbnQtZmFtaWx5OiBcIkRvbWluZS1SZWd1bGFyXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5idXR0LXNtIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDh2dztcbiAgbWF4LXdpZHRoOiA1MHB4O1xuICBtYXgtaGVpZ2h0OiA3MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY29udHJvbCB7XG4gIGJvcmRlcjogMXB4IG91dHNldCAjMzYzNjM2O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICMzNjM2MzY7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogXCJJbmNvbnNvbGF0YS1MaWdodFwiLCBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuLmNvbnRyb2w6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjM7XG4gIGN1cnNvcjogYXV0bztcbn1cblxuLndvcmRzX2J1dHRvbiB7XG4gIGJvcmRlcjogMnB4IG91dHNldCAjMzYzNjM2O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICMzNjM2MzY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuLmxldHRlcnMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDIwdmg7XG59XG5cbi51c2VkX2xldHRlcl9yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnVzZWRfbGV0dGVyX2ljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsZXgtZ3JvdzogMTtcbiAgd2lkdGg6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zdGF0c19tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDM2MHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDNweCAjY2NjO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggI2NjYztcbn1cblxuLnR1dG9yaWFsX21vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDU3MHB4O1xuICB3aWR0aDogMzkwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDNweCAjY2NjO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAjY2NjO1xufVxuXG4ud29yZHNfbW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogNTUwcHg7XG4gIHdpZHRoOiAzMzBweDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNjY2M7XG59XG5cbi5naXZldXBfbW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNjY2M7XG59XG5cbi5tb2RhbF90ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtZmFtaWx5OiBcIkluY29uc29sYXRhLUxpZ2h0XCIsIFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4ubW9kYWxfaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNjNjExMDA7XG4gIGZvbnQtZmFtaWx5OiBcIkRvbWluZS1Cb2xkXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tb2RhbF9oZWFkZXJfc20ge1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5tb2RhbF90aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRvbWluZS1Cb2xkXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5jZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4ueW91X2xvc2Uge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ucG9pbnRfdmFsdWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgb3BhY2l0eTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XG4gIGZvbnQtZmFtaWx5OiBcIkluY29uc29sYXRhLUJvbGRcIiwgXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbi5zb2NpYWxfbWVkaWFfaWNvbiB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmFsZXJ0X3RleHQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjM2YzZjNmO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJJbmNvbnNvbGF0YS1MaWdodFwiLCBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzRkNDc0OTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiOGI4Yjg7XG59XG5cbnVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbnVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzRkNDc0OTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiOGI4Yjg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5pdGVtIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uZm9vdGVyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICM0ZDQ3NDk7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmRhdGEge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi8qIHVudmlzaXRlZCBsaW5rICovXG4udGFicyB7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2EwYTBhMDtcbiAgd2lkdGg6IDIwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFic19hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGU1NDQ1O1xuICBjb2xvcjogd2hpdGU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiBub25lO1xuICBmaWx0ZXI6IG5vbmU7XG59XG5cbi8qIEdseXBoLCBieSBIYXJyeSBSb2JlcnRzICovXG5ociB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICAvKiBGb3IgSUUgKi9cbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItdG9wOiBtZWRpdW0gZG91YmxlICNjYmNiY2I7XG4gIGNvbG9yOiAjY2JjYmNiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmhyOmFmdGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTAuN2VtO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwYWRkaW5nOiAwIDAuMjVlbTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5ibHVyLWJhY2tncm91bmRfaW4ge1xuICBmaWx0ZXI6IGJsdXIoMzBweCk7XG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDMwcHgpO1xuICAtby1maWx0ZXI6IGJsdXIoMzBweCk7XG4gIC1tb3otZmlsdGVyOiBibHVyKDMwcHgpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW47XG59XG5cbi5pbiB7XG4gIGFuaW1hdGlvbjogYmx1cmluIDAuM3MsIGxpbmVhciBmb3J3YXJkcztcbiAgLW8tYW5pbWF0aW9uOiBibHVyaW4gMC4zcywgbGluZWFyIGZvcndhcmRzO1xuICAtbW96LWFuaW1hdGlvbjogYmx1cmluIDAuM3MsIGxpbmVhciBmb3J3YXJkcztcbiAgLXdlYmtpdC1hbmltYXRpb246IGJsdXJpbiAwLjNzLCBsaW5lYXIgZm9yd2FyZHM7XG59XG5cbi5ibHVyLWJhY2tncm91bmRfb3V0IHtcbiAgYW5pbWF0aW9uOiBibHVyb3V0IDAuM3MsIGxpbmVhciBmb3J3YXJkcztcbiAgLW8tYW5pbWF0aW9uOiBibHVyb3V0IDAuM3MsIGxpbmVhciBmb3J3YXJkcztcbiAgLW1vei1hbmltYXRpb246IGJsdXJvdXQgMC4zcywgbGluZWFyIGZvcndhcmRzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYmx1cm91dCAwLjNzLCBsaW5lYXIgZm9yd2FyZHM7XG59XG5cbi5ib3VuY2Uge1xuICBhbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIDE7XG4gIC1vLWFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UgMTtcbiAgLW1vei1hbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIDE7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSAxO1xufVxuXG4ucG9pbnRfYW5pbWF0aW9uIHtcbiAgb3BhY2l0eTogMTtcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMC4yNXMgbGluZWFyIGZvcndhcmRzLCByaXNlIDdzIGVhc2UgMSwgZmFkZW91dCAyLjVzIGxpbmVhciBmb3J3YXJkcztcbiAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMC4yNXMgbGluZWFyIGZvcndhcmRzLCByaXNlIDdzIGVhc2UgMSwgZmFkZW91dCAyLjVzIGxpbmVhciBmb3J3YXJkcztcbiAgLW1vei1hbmltYXRpb246IGZhZGVpbiAwLjI1cyBsaW5lYXIgZm9yd2FyZHMsIHJpc2UgN3MgZWFzZSAxLCBmYWRlb3V0IDIuNXMgbGluZWFyIGZvcndhcmRzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuMjVzIGxpbmVhciBmb3J3YXJkcywgcmlzZSA3cyBlYXNlIDEsIGZhZGVvdXQgMi41cyBsaW5lYXIgZm9yd2FyZHM7XG59XG5cbi5jb25zb2xlX2FuaW1hdGlvbl9pbiB7XG4gIG9wYWNpdHk6IDE7XG4gIGFuaW1hdGlvbjogZmFkZWluIDAuNXMgbGluZWFyIGZvcndhcmRzO1xuICAtby1hbmltYXRpb246IGZhZGVpbiAwLjVzIGxpbmVhciBmb3J3YXJkcztcbiAgLW1vei1hbmltYXRpb246IGZhZGVpbiAwLjVzIGxpbmVhciBmb3J3YXJkcztcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzIGxpbmVhciBmb3J3YXJkcztcbn1cblxuLmNvbnNvbGVfYW5pbWF0aW9uX291dCB7XG4gIG9wYWNpdHk6IDE7XG4gIGFuaW1hdGlvbjogZmFkZW91dCAxcyBsaW5lYXIgZm9yd2FyZHM7XG4gIC1vLWFuaW1hdGlvbjogZmFkZW91dCAxcyBsaW5lYXIgZm9yd2FyZHM7XG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlb3V0IDFzIGxpbmVhciBmb3J3YXJkcztcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVvdXQgMXMgbGluZWFyIGZvcndhcmRzO1xufVxuXG4uZmFkZWluIHtcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cztcbiAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMC41cztcbiAgLW1vei1hbmltYXRpb246IGZhZGVpbiAwLjVzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNXM7XG59XG5cbi5tb2RhbF9mYWRlaW4ge1xuICBhbmltYXRpb246IGZhZGVpbiAwLjNzIGxpbmVhciBmb3J3YXJkcztcbiAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMC4zcyBsaW5lYXIgZm9yd2FyZHM7XG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMC4zcyBsaW5lYXIgZm9yd2FyZHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC4zcyBsaW5lYXIgZm9yd2FyZHM7XG59XG5cbi5tb2RhbF9mYWRlb3V0IHtcbiAgYW5pbWF0aW9uOiBmYWRlb3V0IDAuNXMgbGluZWFyIGZvcndhcmRzO1xuICAtby1hbmltYXRpb246IGZhZGVvdXQgMC41cyBsaW5lYXIgZm9yd2FyZHM7XG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlb3V0IDAuNXMgbGluZWFyIGZvcndhcmRzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZW91dCAwLjVzIGxpbmVhciBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBib3VuY2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDEwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxuICA2NSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgYm91bmNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAxMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAzMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNTVweCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgNjUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgYm91bmNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAxMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAzMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNTVweCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgNjUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAxMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAzMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNTVweCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgNjUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJpc2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDEwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC00MHB4KTtcbiAgfVxuICAzMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTQwcHgpO1xuICB9XG4gIDY1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC00MHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgcmlzZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgMTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTQwcHgpO1xuICB9XG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC00MHB4KTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gIH1cbiAgNjUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTQwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHJpc2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDEwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC00MHB4KTtcbiAgfVxuICAzMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTQwcHgpO1xuICB9XG4gIDY1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC00MHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyByaXNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAxMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gIH1cbiAgMzAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTQwcHgpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC00MHB4KTtcbiAgfVxuICA2NSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVvdXQge1xuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIGZhZGVvdXQge1xuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgZmFkZW91dCB7XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1MCUsIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlb3V0IHtcbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUwJSwgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBibHVyb3V0IHtcbiAgZnJvbSB7XG4gICAgZmlsdGVyOiBibHVyKDMwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBmaWx0ZXI6IG5vbmU7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgYmx1cm91dCB7XG4gIGZyb20ge1xuICAgIGZpbHRlcjogYmx1cigzMHB4KTtcbiAgfVxuICB0byB7XG4gICAgZmlsdGVyOiBub25lO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgYmx1cm91dCB7XG4gIGZyb20ge1xuICAgIGZpbHRlcjogYmx1cigzMHB4KTtcbiAgfVxuICB0byB7XG4gICAgZmlsdGVyOiBub25lO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgYmx1cm91dCB7XG4gIGZyb20ge1xuICAgIGZpbHRlcjogYmx1cigzMHB4KTtcbiAgfVxuICB0byB7XG4gICAgZmlsdGVyOiBub25lO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJsdXJpbiB7XG4gIGZyb20ge1xuICAgIGZpbHRlcjogbm9uZTtcbiAgfVxuICB0byB7XG4gICAgZmlsdGVyOiBibHVyKDMwcHgpO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIGJsdXJpbiB7XG4gIGZyb20ge1xuICAgIGZpbHRlcjogbm9uZTtcbiAgfVxuICB0byB7XG4gICAgZmlsdGVyOiBibHVyKDMwcHgpO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgYmx1cmluIHtcbiAgZnJvbSB7XG4gICAgZmlsdGVyOiBub25lO1xuICB9XG4gIHRvIHtcbiAgICBmaWx0ZXI6IGJsdXIoMzBweCk7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBibHVyaW4ge1xuICBmcm9tIHtcbiAgICBmaWx0ZXI6IG5vbmU7XG4gIH1cbiAgdG8ge1xuICAgIGZpbHRlcjogYmx1cigzMHB4KTtcbiAgfVxufVxuLnJlc3Atc2hhcmluZy1idXR0b25fX2xpbmssXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbl9faWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b25fX2xpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDAuNWVtO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogMjVtcyBlYXNlLW91dDtcbiAgcGFkZGluZzogMC41ZW0gMC43NWVtO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uX19pY29uIHN2ZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogMC40ZW07XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1zbWFsbCBzdmcge1xuICBtYXJnaW46IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi8qIE5vbiBzb2xpZCBpY29ucyBnZXQgYSBzdHJva2UgKi9cbi5yZXNwLXNoYXJpbmctYnV0dG9uX19pY29uIHtcbiAgc3Ryb2tlOiAjZmZmO1xuICBmaWxsOiBub25lO1xufVxuXG4vKiBTb2xpZCBpY29ucyBnZXQgYSBmaWxsICovXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbl9faWNvbi0tc29saWQsXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbl9faWNvbi0tc29saWRjaXJjbGUge1xuICBmaWxsOiAjZmZmO1xuICBzdHJva2U6IG5vbmU7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS10d2l0dGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1YWNlZTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXR3aXR0ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc5NWU5O1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tcGludGVyZXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkMDgxYztcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXBpbnRlcmVzdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YzA2MTU7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1mYWNlYm9vazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDQzNzM7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS10dW1ibHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU0NjVjO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tdHVtYmxyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMmQzYztcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXJlZGRpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1Zjk5Y2Y7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1yZWRkaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E4MGMxO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tZ29vZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGIzOTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLWdvb2dsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMjMzMjE7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1saW5rZWRpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc3YjU7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1saW5rZWRpbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDYyOTM7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1lbWFpbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1lbWFpbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZTVlNWU7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS14aW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhNzU3Njtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXhpbmc6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE0YzRjO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0td2hhdHNhcHAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjVkMzY2O1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0td2hhdHNhcHA6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWRhODUxO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0taGFja2VybmV3cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjY2MDA7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1oYWNrZXJuZXdzOmhvdmVyLFxuLnJlc3Atc2hhcmluZy1idXR0b24tLWhhY2tlcm5ld3M6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI2MjAwO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tdmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA3Mjk5O1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tdms6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM2NDhjO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xuICBib3JkZXItY29sb3I6ICMzYjU5OTg7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1mYWNlYm9vazpob3Zlcixcbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1mYWNlYm9vazphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ0MzczO1xuICBib3JkZXItY29sb3I6ICMyZDQzNzM7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS10d2l0dGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1YWNlZTtcbiAgYm9yZGVyLWNvbG9yOiAjNTVhY2VlO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tdHdpdHRlcjpob3Zlcixcbi5yZXNwLXNoYXJpbmctYnV0dG9uLS10d2l0dGVyOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzk1ZTk7XG4gIGJvcmRlci1jb2xvcjogIzI3OTVlOTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXR1bWJsciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTQ2NWM7XG4gIGJvcmRlci1jb2xvcjogIzM1NDY1Yztcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXR1bWJscjpob3Zlcixcbi5yZXNwLXNoYXJpbmctYnV0dG9uLS10dW1ibHI6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMmQzYztcbiAgYm9yZGVyLWNvbG9yOiAjMjIyZDNjO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tZW1haWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3Nzc3O1xuICBib3JkZXItY29sb3I6ICM3Nzc3Nzc7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1lbWFpbDpob3Zlcixcbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1lbWFpbDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWU1ZTVlO1xuICBib3JkZXItY29sb3I6ICM1ZTVlNWU7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1waW50ZXJlc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmQwODFjO1xuICBib3JkZXItY29sb3I6ICNiZDA4MWM7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1waW50ZXJlc3Q6aG92ZXIsXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tcGludGVyZXN0OmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YzA2MTU7XG4gIGJvcmRlci1jb2xvcjogIzhjMDYxNTtcbn0iXX0= */");

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
            this.isMobile = window.matchMedia("only screen and (max-width: 920px)").matches;
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
                document.getElementById(`app`).classList.remove('blur-background_out');
                let tutorial_modal = document.getElementById('tutorial_modal');
                tutorial_modal.classList.add('modal_fadein');
                tutorial_modal.classList.add('modal_appear');
                tutorial_modal.classList.remove('modal_fadeout');
            }
            else {
                document.getElementById(`app`).classList.remove('blur-background_in');
                document.getElementById(`app`).classList.add('blur-background_out');
                let tutorial_modal = document.getElementById('tutorial_modal');
                tutorial_modal.classList.remove('modal_fadein');
                tutorial_modal.classList.remove('modal_appear');
                tutorial_modal.classList.add('modal_fadeout');
                // Give time for blur_out animation to perform
                yield this.delay(200);
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
                yield this.delay(200);
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
                document.getElementById(`app`).classList.remove('blur-background_out');
                let contact_modal = document.getElementById('contact_modal');
                contact_modal.classList.add('modal_fadein');
                contact_modal.classList.add('modal_appear');
                contact_modal.classList.remove('modal_fadeout');
            }
            else {
                document.getElementById(`app`).classList.remove('blur-background_in');
                document.getElementById(`app`).classList.add('blur-background_out');
                let contact_modal = document.getElementById('contact_modal');
                contact_modal.classList.remove('modal_fadein');
                contact_modal.classList.remove('modal_appear');
                contact_modal.classList.add('modal_fadeout');
                // Give time for blur_out animation to perform
                yield this.delay(200);
                this.contact_modal_open = false;
            }
        });
    }
    wordsModal(open) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (open) {
                this.words_modal_open = true;
                document.getElementById(`app`).classList.add('blur-background_in');
                document.getElementById(`app`).classList.remove('blur-background_out');
                let words_modal = document.getElementById('words_modal');
                words_modal.classList.add('modal_fadein');
                words_modal.classList.add('modal_appear');
                words_modal.classList.remove('modal_fadeout');
            }
            else {
                document.getElementById(`app`).classList.remove('blur-background_in');
                document.getElementById(`app`).classList.add('blur-background_out');
                let words_modal = document.getElementById('words_modal');
                words_modal.classList.remove('modal_fadein');
                words_modal.classList.remove('modal_appear');
                words_modal.classList.add('modal_fadeout');
                // Give time for blur_out animation to perform
                yield this.delay(200);
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
                document.getElementById(`app`).classList.remove('blur-background_out');
                let giveup_modal = document.getElementById('giveup_modal');
                giveup_modal.classList.add('modal_fadein');
                giveup_modal.classList.add('modal_appear');
                giveup_modal.classList.remove('modal_fadeout');
            }
            else {
                document.getElementById(`app`).classList.remove('blur-background_in');
                document.getElementById(`app`).classList.add('blur-background_out');
                let giveup_modal = document.getElementById('giveup_modal');
                giveup_modal.classList.remove('modal_fadein');
                giveup_modal.classList.remove('modal_appear');
                giveup_modal.classList.add('modal_fadeout');
                // Give time for blur_out animation to perform
                yield this.delay(200);
                let word_list = document.getElementById(`word_list`);
                word_list.scrollTop = 0;
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
            let newVariable;
            newVariable = window.navigator;
            if (newVariable && newVariable.share) {
                newVariable.navigator.share({
                    title: 'Take5',
                    text: copyText
                }).then(() => {
                    console.log(copyText);
                })
                    .catch(console.error);
            }
            else { // Copies to clipboard
                this.appSvc.copyTextToClipboard(copyText);
                this.copied_to_clipboard_hidden = false;
                document.getElementById(`copied_to_clipboard`).classList.add('console_animation_in');
                document.getElementById(`copied_to_clipboard`).classList.remove('console_animation_out');
                yield this.delay(2000);
                document.getElementById(`copied_to_clipboard`).classList.remove('console_animation_in');
                document.getElementById(`copied_to_clipboard`).classList.add('console_animation_out');
            }
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
            // Add User ID to the Game Data and send to Firebase
            game_data.id = this.userID_LocalStorage;
            yield this.firebaseSvc.updateGameLog(game_data);
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
        let graphic;
        if (final_score < low_score) {
            graphic = final_score + ' ';
        }
        else {
            graphic = low_score + ' ';
        }
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
        graphic += ' ' + (final_score > high_score ? final_score : high_score) + '';
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
        }
        document.body.removeChild(textArea);
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
            }).catch((error) => {
                console.error(error);
                return error;
            });
            console.log('🚨GET USER DATA🚨');
            return retrieved_user;
        });
    }
    updateUserData(userData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
            console.log('🚨UPDATE USER DATA🚨');
        });
    }
    updateGameLog(game_data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let timestamp = this.datepipe.transform(game_data.timestamp, 'yyyy-MM-dd HH:mm:ss z');
            // Add Game Data to Game Log
            let randomID = this.appSvc.generateRandomID();
            Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["set"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["ref"])(this.database, `/games_played/${game_data.id}/${timestamp} GAME${randomID}`), {
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
            let todays_game_data = yield this.getTodaysGameData(today_str);
            todays_game_data.games_played_num += 1;
            todays_game_data.total_points_scored += game_data.score;
            todays_game_data.average_score = Number((Math.round((todays_game_data.total_points_scored / todays_game_data.games_played_num) * 100) / 100).toFixed(2));
            !todays_game_data.raw_scores ? todays_game_data.raw_scores = [game_data.score] : todays_game_data.raw_scores.push(game_data.score);
            yield Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["set"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["ref"])(this.database, `/daily_game_data/${today_str}_game_data/`), {
                today_word: todays_game_data.today_word,
                games_played_num: todays_game_data.games_played_num,
                total_points_scored: todays_game_data.total_points_scored,
                average_score: todays_game_data.average_score,
                raw_scores: todays_game_data.raw_scores
            });
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
        });
    }
    postNewDayGameData(todays_date, random_word) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["set"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["ref"])(this.database, `/daily_game_data/${todays_date}_game_data`), {
                today_word: random_word,
                games_played_num: 0,
                total_points_scored: 0,
                average_score: 0
            });
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
            }).catch((error) => {
                console.error(error);
                return error;
            });
            console.log('🚨GET ALL TIME GAME DATA🚨');
            return all_time_data;
        });
    }
    postAllTimeData(games_num, average_score, total_points_scored, all_time_high_score, perfect_game_count) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["set"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["ref"])(this.database, `/all_time_data/`), {
                games_num: games_num,
                average_score: average_score,
                total_points_scored: total_points_scored,
                all_time_high_score: all_time_high_score,
                perfect_game_count: perfect_game_count
            });
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