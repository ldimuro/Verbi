function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"app\" id=\"app\">\n\n  <header>\n    <!-- <div style=\"left: 50%;position:fixed;margin-top:9px;font-family: 'Inconsolata-Light', \n    'Courier New', Courier, monospace;\">\n      Take5</div> -->\n    <div class=\"header_items\" style=\"display: flex;justify-content: flex-end;\">\n      <a (click)=\"contactModal(true)\">\n        <mat-icon style=\"font-size:35px;padding-right:20px;margin-top:2px;\">mail_outline</mat-icon>\n      </a>\n      <a (click)=\"statsModal(true)\">\n        <mat-icon style=\"font-size:35px;padding-right:20px;margin-top:2px;\">equalizer</mat-icon>\n      </a>\n      <a (click)=\"tutorialModal(true)\">\n        <span style=\"font-size:35px;padding-right:20px;margin-top:2px;font-weight: bold;font-family: 'Arial'\">?</span>\n      </a>\n    </div>\n  </header>\n\n  <br>\n  <br>\n\n  <div *ngIf=\"!you_lose_open && !you_win_open\" class=\"game\" style=\"position:relative;height: 95vh;\"\n    [style.width]=\"isMobile ? '100%' : '50%'\" [style.margin]=\"isMobile ? '0' : '0 auto'\">\n    <div class=\"data\">\n      <div class=\"correct_words\" style=\"display: flex; justify-content:space-between;\">\n\n        <!-- 'WORDS' button -->\n        <div style=\"padding-top:18px;\"><button class=\"control\" style=\"padding: 5px;\"\n            (click)=\"wordsModal(true)\">WORDS</button></div>\n        <!-- <div style=\"font-size: 40px; font-family: 'Co'; margin-top: 15px;\"><b>{{starting_word}}</b></div> -->\n        <div style=\"font-size: 39px; font-family: 'Co'; margin-top: 15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>\n\n        <!-- WHITE FLAG BUTTON -->\n        <div style=\"padding-top:18px;\">\n          <!-- CREDIT:  <a href=\"https://www.flaticon.com/free-icons/white-flag\" title=\"white-flag icons\">White-flag icons created by Victoruler - Flaticon</a> -->\n          <img (click)=\"giveUpModal(true)\" class=\"control\" src=\"/assets/icons/white-flag.png\"\n            style=\"width:25px; height: 25px; padding: 5px;\" alt=\"image\">\n        </div>\n      </div>\n\n      <div class=\"used_letters\" style=\"position:fixed\">\n        <div class=\"used_letter_row\">\n          <div *ngFor=\"let letter of used_letters;\">\n            <div class=\"used_letter_icon\" [style.background-color]=\"letter.point_color\"\n              [style.color]=\"letter.font_color\" style=\"margin-bottom: 5px;\">\n              {{letter.name}}</div>\n          </div>\n        </div>\n      </div>\n\n      <br />\n\n      <div>\n        <div style=\"display: flex; justify-content: center; align-items: center; flex-direction: column; height: 20vh;\"\n          [style.height]=\"isMobile ? '25vh' : '20vh'\">\n          <div class=\"score\" style=\"text-align: center;\"><b>{{total_score}}</b></div>\n          <div *ngIf=\"user?.high_score !== undefined\" class=\"high_score\" style=\"text-align: center;\">BEST:<span\n              style=\"font-family: 'Inconsolata-Bold', 'Courier New', Courier, monospace;\">{{user?.high_score}}</span>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n\n    <!-- CELLS -->\n    <div class=\"container\">\n      <div *ngFor=\"let cell of cells; let i = index\" class=\"letters\">\n        <div class=\"point_value\" id=\"point_value_{{cell.name}}\" [style.color]=\"cell.color\">\n          <b>{{cell.point_value}}</b>\n        </div>\n        <button class=\"butt\" id=\"container_{{cell.name}}\" [disabled]=\"letter_selected\"\n          [style.height]=\"isMobile ? '20vw' : '10vw'\" [style.width]=\"isMobile ? '20vw' : '10vw'\"\n          [style.font-size]=\"isMobile ? '11vw' : '4.3vw'\" [style.cursor]=\"letter_selected ? 'auto' : 'cursor'\"\n          [style.background-color]=\"cell.color\" [style.color]=\"cell.font_color\"\n          [style.border-color]=\"cell.selected ? '#2b2827' : 'white'\" (click)=\"cellClicked(i)\">{{cell.value}}</button>\n      </div>\n    </div>\n\n    <!-- REMOVE -->\n    <span class=\"alert_text\" style=\"display: flex; justify-content: center;\" id=\"console\"\n      [style.visibility]=\"console_text_hidden ? 'hidden' : 'visible'\">{{console_text}}</span>\n    <!-- END REMOVE -->\n\n\n    <!-- KEYBOARD -->\n    <div *ngIf=\"show_keyboard\" id=\"keyboard\" [style.opacity]=\"keyboard_opacity\"\n      style=\"margin-left: 8px; position: absolute; bottom: 0; width: 100%; margin: 0 auto; margin-bottom: 3px;\"\n      [style.pointer-events]=\"((keyboard_opacity === '1.0' && keyboard_enabled) ? 'auto' : 'none')\" class=\"keyboard\">\n\n      <div style=\"display: flex; justify-content: center;\">\n        <div *ngFor=\"let key of keyboard_top;\">\n          <button class=\"butt-sm\" [style.width]=\"isMobile ? '8vw' : '4vw'\" [style.height]=\"isMobile ? '18vw' : '5vw'\"\n            [disabled]=\"!key.enabled || you_lose_open || stats_modal_open\" [style.background-color]=\"key.point_color\"\n            [style.opacity]=\"key.opacity\" [style.color]=\"key.font_color\" style=\"font-weight: bold;\"\n            (click)=\"keyboardClicked(key.name)\">{{key.name}}</button>\n        </div>\n      </div>\n\n      <div style=\"display: flex; justify-content: center; margin-top: 8px;\">\n        <div *ngFor=\"let key of keyboard_middle;\">\n          <button class=\"butt-sm\" [style.width]=\"isMobile ? '8vw' : '4vw'\" [style.height]=\"isMobile ? '18vw' : '5vw'\"\n            [disabled]=\"!key.enabled || you_lose_open || stats_modal_open\" [style.background-color]=\"key.point_color\"\n            [style.opacity]=\"key.opacity\" [style.color]=\"key.font_color\" style=\"font-weight: bold;\"\n            (click)=\"keyboardClicked(key.name)\">{{key.name}}</button>\n        </div>\n      </div>\n\n      <div style=\"display: flex; justify-content: center; margin-top: 8px;\">\n        <div *ngFor=\"let key of keyboard_bottom;\">\n          <button class=\"butt-sm\" [style.width]=\"isMobile ? '8vw' : '4vw'\" [style.height]=\"isMobile ? '18vw' : '5vw'\"\n            [disabled]=\"!key.enabled || you_lose_open || stats_modal_open\" [style.background-color]=\"key.point_color\"\n            [style.opacity]=\"key.opacity\" [style.color]=\"key.font_color\" style=\"font-weight: bold;\"\n            (click)=\"keyboardClicked(key.name)\">{{key.name}}</button>\n        </div>\n      </div>\n    </div>\n\n    <!-- USER LETTERS -->\n    <div *ngIf=\"letter_selected\" style=\"position: absolute; bottom: 0;width: 100%;margin: 0 auto; margin-bottom: 30px;\">\n      <div style=\"display: flex; justify-content: center;\">\n        <div *ngFor=\"let letter of user_letters; let i = index\" class=\"letters\">\n          <button class=\"user_letters\" [disabled]=\"!letter.enabled\" [style.background-color]=\"letter.color\"\n            [style.color]=\"letter.font_color\" [style.opacity]=\"letter.enabled ? '1.0' : '0.25'\"\n            [style.height]=\"isMobile ? '20vw' : '10vw'\" [style.width]=\"isMobile ? '20vw' : '10vw'\"\n            [style.font-size]=\"isMobile ? '11vw' : '4.3vw'\" (click)=\"userLetterClicked(i)\">{{letter.value}}</button>\n        </div>\n      </div>\n\n      <div style=\"margin-top: 20px;\">\n        <button class=\"control\" (click)=\"controlClicked('GO-BACK')\" style=\"float:left;margin-left: 5px;\">GO\n          BACK</button>\n\n        <button class=\"control\" [disabled]=\"cells[4].value === ''\" (click)=\"controlClicked('ENTER')\"\n          style=\"float:right;\">ENTER</button>\n\n        <button class=\"control\" [disabled]=\"cells[0].value === ''\" (click)=\"controlClicked('BACKSPACE')\"\n          style=\"float:right;\">&#60; DEL\n        </button>\n      </div>\n    </div>\n\n  </div>\n\n  <!-- YOU LOSE SCREEN -->\n  <div *ngIf=\"you_lose_open\" style=\"display: flex; justify-content: center;\">\n    <div [hidden]=\"!you_lose_open\" class=\"you_lose\" id=\"you_lose\" [style.width]=\"isMobile ? '100vw' : '400px'\">\n      <div>\n        <div class=\"modal_title\" style=\"text-align: center; font-size: 30px; padding: 10px; margin-top: 10px;\">\n          <b>{{losing_word}}</b>\n        </div>\n\n        <br>\n\n        <div style=\"text-align: center;font-size: 22px; padding: 10px;\">\n          <div class=\"modal_header\"><b>FINAL SCORE</b></div>\n          <div class=\"modal_text\" style=\"font-size:30px\"><b>{{final_score}}</b></div>\n        </div>\n\n        <div style=\"display: flex; justify-content: center;\">\n          <div style=\"text-align: left; font-size: 22px; padding: 10px; width: 90%;\">\n            <div class=\"modal_header\"><b>CORRECT WORDS ({{game_over_correct_words.length}})</b>\n            </div>\n\n            <!-- To Fix on iPad -->\n            <!-- <div style=\"font-family:'Courier New', Courier, monospace; text-align: center;\">\n              {{game_over_correct_words_formatted}}</div> -->\n            <div style=\"font-family: 'Inconsolata-Light', 'Courier New', Courier, monospace;\"\n              [style.margin-left]=\"game_over_correct_words.length <= 4 ? '0px' : '20px'\"\n              [style.text-align]=\"game_over_correct_words.length <= 4 ? 'center' : 'left'\">\n              {{game_over_correct_words_formatted}}</div>\n          </div>\n        </div>\n\n        <br>\n        <hr class=\"1px solid black\" style=\"width: 75%;\">\n        <!-- <hr> -->\n        <br>\n\n        <div *ngIf=\"final_score !== undefined\" style=\"text-align: center;font-size: 22px; padding: 10px;\">\n          <div class=\"modal_header\"><b>TODAY'S AVERAGE</b></div>\n          <div *ngIf=\"todays_game_data; else statsPlaceholder\">\n            <div class=\"modal_text\" style=\"font-size:30px\"><b>{{todays_game_data?.average_score}}</b></div>\n          </div>\n          <ng-template #statsPlaceholder>\n            <div class=\"modal_text\" style=\"font-size:25px\"><b>&mdash;</b></div>\n          </ng-template>\n        </div>\n\n        <div *ngIf=\"todays_game_data?.raw_scores.length > 0; else elseBlock\"\n          style=\"text-align: center;font-size: 22px; padding: 10px;\">\n\n          <div *ngIf=\"percentile_data && todays_game_data?.raw_scores?.length > 0\" class=\"modal_text\">\n            <div *ngIf=\"percentile_data.special_case?.message === null; else specialCase\">\n              You were better than <span style=\"font-family: 'Inconsolata-Bold', 'Courier New', Courier, monospace;\"\n                [style.color]=\"percentile_data?.percentile_color\">{{percentile_data.percentile}}%</span> of players\n              today\n            </div>\n            <ng-template #specialCase>\n              <div [style.color]=\"percentile_data.special_case?.color\">\n                <b>{{percentile_data.special_case.message}}</b>\n              </div>\n            </ng-template>\n          </div>\n\n          <div *ngIf=\"todays_game_data; else statsPlaceholder\">\n            <div\n              style=\"text-align: center;font-size: 22px; padding: 10px;font-family: 'Inconsolata-Bold', 'Courier New', Courier, monospace;\">\n              {{percentile_data.percentile_graphic}}\n            </div>\n          </div>\n          <ng-template #statsPlaceholder>\n            <div style=\"text-align: center;font-size: 22px; padding: 10px;\">\n              -⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️-\n            </div>\n          </ng-template>\n\n        </div>\n        <ng-template #elseBlock style=\"text-align: center;font-size: 22px; padding: 10px;\">\n          <div style=\"text-align: center;font-size: 22px; padding: 10px;\">\n            You are today's first player! Check back later for updated results\n          </div>\n        </ng-template>\n\n        <br>\n\n        <div style=\"display: flex; justify-content:center;\">\n          <button (click)=\"youLose(false)\" style=\"font-size: 20px;\" class=\"control\">PLAY\n            AGAIN</button>\n          <button (click)=\"shareScore()\" style=\"font-size: 20px;\" class=\"control\">SHARE</button>\n        </div>\n\n        <span class=\"alert_text\" style=\"display: flex; justify-content: center;\" id=\"copied_to_clipboard\"\n          [style.visibility]=\"copied_to_clipboard_hidden ? 'hidden' : 'visible'\">{{copied_to_clipboard}}</span>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"you_win_open\" style=\"display: flex; justify-content: center;\">\n    <div>\n      <div class=\"modal_title\" style=\"text-align: center; font-size: 30px; padding: 10px; margin-top: 10px;\"><b>PERFECT\n          SCORE!</b></div>\n\n      <div style=\"text-align: center;font-size: 22px; padding: 10px;\">\n        <div class=\"modal_header\"><b>Final Score</b></div>\n        <div class=\"modal_text\" style=\"font-size:25px\"><b>{{final_score}} ({{game_over_correct_words.length}}\n            word<span *ngIf=\"game_over_correct_words.length !== 1\">s</span>)</b></div>\n      </div>\n\n      <div style=\"text-align: center;font-size: 22px; padding: 10px;\">\n        Out of <b>1016 games</b>, this has only happened\n        <b>2</b> times. That's pretty rad.\n      </div>\n\n      <br>\n\n      <div style=\"display: flex; justify-content:center;\">\n        <button (click)=\"youWin(false)\" style=\"font-size: 20px;\" class=\"control\">PLAY\n          AGAIN</button>\n        <button style=\"font-size: 20px;\" class=\"control\">SHARE</button>\n      </div>\n    </div>\n  </div>\n\n\n\n</div>\n\n\n\n\n\n<!-- STATS MODAL -->\n<div [hidden]=\"!stats_modal_open\" class=\"modal stats_modal\" id=\"stats_modal\">\n  <div>\n    <div class=\"header_items\" style=\"display: flex;justify-content: flex-end;\">\n      <a (click)=\"statsModal(false)\">\n        <mat-icon style=\"font-size: 30px; padding-right:15px; padding-top: 10px;\">close</mat-icon>\n      </a>\n    </div>\n    <div class=\"modal_title\" style=\"font-size: 30px; text-align: center;\"><b>STATISTICS</b></div>\n  </div>\n\n\n\n  <div style=\"display: flex; justify-content: center; padding:10px;\">\n    <a class=\"tabs\" (click)=\"navigateStatsModalTabs(false)\" style=\"border-bottom-left-radius: 10px;\n    border-top-left-radius: 10px;\" [ngClass]=\"{'tabs_active': stats_step_num === 1}\"><span\n        style=\"font-family: 'Inconsolata-Light', 'Courier New', Courier, monospace;\">Personal</span></a>\n    <a class=\"tabs\" style=\"border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\" (click)=\"navigateStatsModalTabs(true)\"\n      [ngClass]=\"{'tabs_active': stats_step_num === 2}\"><span\n        style=\"font-family: 'Inconsolata-Light', 'Courier New', Courier, monospace;\">Global</span></a>\n  </div>\n\n\n\n  <!-- Personal stats -->\n  <div *ngIf=\"stats_step_num === 1; else step_2\">\n    <div *ngIf=\"stats_modal_open\" style=\"padding: 10px;\">\n      <div class=\"modal_header modal_header_sm\"><b>HIGH SCORE</b></div>\n      <div class=\"modal_text\" style=\"font-size:25px\"><b>{{user?.high_score}}</b></div>\n\n      <br>\n\n      <div class=\"modal_header modal_header_sm\"><b>AVERAGE SCORE</b></div>\n      <div class=\"modal_text\" style=\"font-size:25px\"><b>{{user?.average_score_per_game}} points</b></div>\n\n      <br>\n\n      <div class=\"modal_header modal_header_sm\"><b>GAMES PLAYED</b></div>\n      <div class=\"modal_text\" style=\"font-size:25px\"><b>{{user?.games_played_num}}</b></div>\n\n      <br>\n\n      <div class=\"modal_header modal_header_sm\"><b>HIGHEST SCORING WORD</b></div>\n      <div class=\"modal_text\" style=\"font-size:25px;\"><b>\"{{user?.highest_scoring_word.word}}\" -\n          {{user.highest_scoring_word.score}} points</b></div>\n    </div>\n  </div>\n  <!-- Global stats -->\n  <ng-template #step_2>\n    <div *ngIf=\"stats_modal_open\" style=\"padding: 10px;\">\n      <div class=\"modal_header modal_header_sm\"><b>TODAY'S HIGH SCORE</b></div>\n      <div class=\"modal_text\" style=\"font-size:25px\"><b>{{todays_game_data.high_score}}</b></div>\n\n      <br>\n\n      <div class=\"modal_header modal_header_sm\"><b>TODAY'S AVERAGE SCORE</b></div>\n      <div class=\"modal_text\" style=\"font-size:25px\"><b>{{todays_game_data.average_score}}</b></div>\n\n      <br>\n\n      <hr class=\"1px solid black\" style=\"width: 75%;\">\n\n      <br>\n\n      <div class=\"modal_header modal_header_sm\"><b>ALL TIME HIGH SCORE 🏆</b></div>\n      <div class=\"modal_text\" style=\"font-size:25px\"><b>{{all_time_data.all_time_high_score}}</b></div>\n\n      <br>\n\n      <div class=\"modal_header modal_header_sm\"><b>PERFECT GAME COUNT 💯</b></div>\n      <div class=\"modal_text\" style=\"font-size:25px\"><b>{{all_time_data.perfect_game_count}}</b></div>\n\n    </div>\n  </ng-template>\n</div>\n\n<!-- TUTORIAL MODAL -->\n<div [hidden]=\"!tutorial_modal_open\" class=\"modal tutorial_modal\" id=\"tutorial_modal\" style=\"position: relative\">\n  <div>\n    <div class=\"header_items\" style=\"display: flex;justify-content: flex-end;\">\n      <a (click)=\"tutorialModal(false)\">\n        <mat-icon style=\"font-size: 30px; padding-right:15px; padding-top: 10px;\">close</mat-icon>\n      </a>\n    </div>\n    <div class=\"modal_title\" style=\"font-size: 30px; text-align: center;\"><b>HOW TO PLAY ({{tutorial_step_num}}/3)</b>\n    </div>\n  </div>\n\n  <!-- STEP 1 -->\n  <div *ngIf=\"tutorial_step_num === 1\" id=\"step_1\">\n    <div style=\"display: flex; justify-content:center;margin-top:10px;\">\n      <img src=\"/assets/correct_word.gif\" alt=\"image\"\n        style=\"width: 80%; height: auto; border: 1px solid gray;border-radius: 5px;\">\n    </div>\n    <div style=\"display: flex; justify-content:center\">\n      <div class=\"modal_text\" style=\"padding: 13px;margin-top: 7px; width: 80%; font-size: 20px;\">\n        Create words by switching out letters one at a time and rearranging them\n      </div>\n    </div>\n  </div>\n\n  <!-- STEP 2 -->\n  <div *ngIf=\"tutorial_step_num === 2\" id=\"step_2\">\n    <div style=\"display: flex; justify-content:center;margin-top:10px;\">\n      <img src=\"/assets/incorrect_word.gif\" alt=\"image\"\n        style=\"width: 80%; height: auto; border: 1px solid gray;border-radius: 5px;\">\n    </div>\n    <div style=\"display: flex; justify-content:center\">\n      <div class=\"modal_text\" style=\"padding: 13px;margin-top: 7px; width: 80%; font-size: 20px;\">\n        If you enter a word that doesn't exist, the game is over\n      </div>\n    </div>\n  </div>\n\n  <!-- STEP 3 -->\n  <div *ngIf=\"tutorial_step_num === 3\" id=\"step_3\">\n    <div style=\"display: flex; justify-content:center;margin-top:10px;\">\n      <img src=\"/assets/letter_scores.png\" alt=\"image\"\n        style=\"width: 80%; height: auto; border: 1px solid gray;border-radius: 5px;\">\n    </div>\n    <div style=\"display: flex; justify-content:center\">\n      <div class=\"modal_text\" style=\"padding: 13px;margin-top: 7px; width: 80%; font-size: 20px;\">\n        The darker the color shade, the more points the letter is worth\n      </div>\n    </div>\n    <br>\n  </div>\n\n  <br>\n\n  <div style=\"position: absolute; bottom: 0;margin: 0 auto;width: 100%;display: flex; justify-content: center; padding-bottom: 10px;\">\n    <button *ngIf=\"tutorial_step_num > 1\" class=\"control\" (click)=\"navigateTutorialModalStep(false)\">&#60; BACK</button>\n    <button *ngIf=\"tutorial_step_num !== 3\" class=\"control\" (click)=\"navigateTutorialModalStep(true)\">NEXT ></button>\n    <button *ngIf=\"tutorial_step_num === 3\" class=\"control\" (click)=\"tutorialModal(false)\">DONE</button>\n  </div>\n</div>\n\n<!-- CONTACT MODAL -->\n<div [hidden]=\"!contact_modal_open\" class=\"modal stats_modal\" id=\"contact_modal\">\n  <div>\n    <div class=\"header_items\" style=\"display: flex;justify-content: flex-end;\">\n      <a (click)=\"contactModal(false)\">\n        <mat-icon style=\"font-size: 30px; padding-right:15px; padding-top: 10px;\">close</mat-icon>\n      </a>\n    </div>\n    <div class=\"modal_title\" style=\"font-size: 30px; text-align: center;\"><b>CONTACT</b></div>\n  </div>\n\n  <br>\n  <br>\n\n  <div>\n    <div class=\"modal_header\" style=\"display:flex; justify-content: center;\">\n      <b>Feedback/Questions?</b>\n    </div>\n    <a href=\"mailto:ldimuro@asu.edu?cc=&subject=take5 [insert subject here]\"><span\n        style=\"display:flex; justify-content: center;\"><u>Email Me!</u></span></a>\n  </div>\n\n  <br>\n\n  <div>\n    <div class=\"modal_header\" style=\"display:flex; justify-content: center;\"><b>Like the\n        game?</b>\n    </div>\n    <a target=\"_blank\" href=\"https://www.paypal.com/paypalme/loudimuro\"><span\n        style=\"display:flex; justify-content: center;\"><u>Buy me a coffee ☕️!</u></span></a>\n  </div>\n\n  <br>\n\n  <div style=\"display: flex; justify-content:center;\">\n    <!-- <div class=\"modal_text\" style=\"font-family: 'Co'; display:flex; justify-content: center;\"><b>Social Media</b>\n    </div> -->\n    <div style=\"display: grid; grid-template-columns: auto auto;\">\n      <div class=\"social_media_icon\">\n        <!-- Sharingbutton Facebook -->\n        <a class=\"resp-sharing-button__link\"\n          href=\"https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsharingbuttons.io\" target=\"_blank\" rel=\"noopener\"\n          aria-label=\"\">\n          <div class=\"resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small\">\n            <div aria-hidden=\"true\" class=\"resp-sharing-button__icon resp-sharing-button__icon--solidcircle\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n                <path\n                  d=\"M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm3.6 11.5h-2.1v7h-3v-7h-2v-2h2V8.34c0-1.1.35-2.82 2.65-2.82h2.35v2.3h-1.4c-.25 0-.6.13-.6.66V9.5h2.34l-.24 2z\" />\n              </svg>\n            </div>\n          </div>\n        </a>\n      </div>\n      <div class=\"social_media_icon\">\n        <!-- Sharingbutton Twitter -->\n        <a class=\"resp-sharing-button__link\"\n          href=\"https://twitter.com/intent/tweet/?text=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;url=http%3A%2F%2Fsharingbuttons.io\"\n          target=\"_blank\" rel=\"noopener\" aria-label=\"\">\n          <div class=\"resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small\">\n            <div aria-hidden=\"true\" class=\"resp-sharing-button__icon resp-sharing-button__icon--solidcircle\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n                <path\n                  d=\"M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm5.26 9.38v.34c0 3.48-2.64 7.5-7.48 7.5-1.48 0-2.87-.44-4.03-1.2 1.37.17 2.77-.2 3.9-1.08-1.16-.02-2.13-.78-2.46-1.83.38.1.8.07 1.17-.03-1.2-.24-2.1-1.3-2.1-2.58v-.05c.35.2.75.32 1.18.33-.7-.47-1.17-1.28-1.17-2.2 0-.47.13-.92.36-1.3C7.94 8.85 9.88 9.9 12.06 10c-.04-.2-.06-.4-.06-.6 0-1.46 1.18-2.63 2.63-2.63.76 0 1.44.3 1.92.82.6-.12 1.95-.27 1.95-.27-.35.53-.72 1.66-1.24 2.04z\" />\n              </svg>\n            </div>\n          </div>\n        </a>\n      </div>\n      <div class=\"social_media_icon\">\n        <!-- Sharingbutton Tumblr -->\n        <a class=\"resp-sharing-button__link\"\n          href=\"https://www.tumblr.com/widgets/share/tool?posttype=link&amp;title=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;caption=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;content=http%3A%2F%2Fsharingbuttons.io&amp;canonicalUrl=http%3A%2F%2Fsharingbuttons.io&amp;shareSource=tumblr_share_button\"\n          target=\"_blank\" rel=\"noopener\" aria-label=\"\">\n          <div class=\"resp-sharing-button resp-sharing-button--tumblr resp-sharing-button--small\">\n            <div aria-hidden=\"true\" class=\"resp-sharing-button__icon resp-sharing-button__icon--solidcircle\">\n              <svg version=\"1.1\" x=\"0px\" y=\"0px\" width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\"\n                enable-background=\"new 0 0 24 24\" xml:space=\"preserve\">\n                <path\n                  d=\"M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M15.492,17.616C11.401,19.544,9.5,17,9.5,14.031 V9.5h-2V8.142c0.549-0.178,1.236-0.435,1.627-0.768c0.393-0.334,0.707-0.733,0.943-1.2c0.238-0.467,0.401-0.954,0.49-1.675H12.5v3h2 v2h-2v3.719c0,2.468,1.484,2.692,2.992,1.701V17.616z\" />\n              </svg>\n            </div>\n          </div>\n        </a>\n      </div>\n      <div class=\"social_media_icon\">\n        <!-- Sharingbutton Pinterest -->\n        <a class=\"resp-sharing-button__link\"\n          href=\"https://pinterest.com/pin/create/button/?url=http%3A%2F%2Fsharingbuttons.io&amp;media=http%3A%2F%2Fsharingbuttons.io&amp;description=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.\"\n          target=\"_blank\" rel=\"noopener\" aria-label=\"\">\n          <div class=\"resp-sharing-button resp-sharing-button--pinterest resp-sharing-button--small\">\n            <div aria-hidden=\"true\" class=\"resp-sharing-button__icon resp-sharing-button__icon--solidcircle\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n                <path\n                  d=\"M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm1.4 15.56c-1 0-1.94-.53-2.25-1.14l-.65 2.52c-.4 1.45-1.57 2.9-1.66 3-.06.1-.2.07-.22-.04-.02-.2-.32-2 .03-3.5l1.18-5s-.3-.6-.3-1.46c0-1.36.8-2.37 1.78-2.37.85 0 1.25.62 1.25 1.37 0 .85-.53 2.1-.8 3.27-.24.98.48 1.78 1.44 1.78 1.73 0 2.9-2.24 2.9-4.9 0-2-1.35-3.5-3.82-3.5-2.8 0-4.53 2.07-4.53 4.4 0 .5.1.9.25 1.23l-1.5.82c-.36-.64-.54-1.43-.54-2.28 0-2.6 2.2-5.74 6.57-5.74 3.5 0 5.82 2.54 5.82 5.27 0 3.6-2 6.3-4.96 6.3z\" />\n              </svg>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<!-- CORRECT WORDS MODAL -->\n<div [hidden]=\"!words_modal_open\" class=\"modal words_modal\" id=\"words_modal\" style=\"position: relative\">\n  <div>\n    <div class=\"header_items\" style=\"display: flex;justify-content: flex-end;\">\n      <a (click)=\"wordsModal(false)\">\n        <mat-icon style=\"font-size: 30px; padding-right:15px; padding-top: 10px;\">close</mat-icon>\n      </a>\n    </div>\n    <!-- <div style=\"font-size: 30px; text-align: center; font-family: 'Co'\"><b>CORRECT WORDS</b></div> -->\n  </div>\n\n  <br>\n\n  <div style=\"height: 65%; overflow: scroll;\" id=\"word_list\">\n    <div style=\"color: #b31e0f; font-size: 30px; font-family:'Domine-Bold', 'Courier New', Courier, monospace;\"\n      class=\"modal_text\">\n      {{starting_word}}</div>\n    <hr class=\"1px solid black\" style=\"width: 75%;\">\n    <div *ngFor=\"let word of correct_words\" class=\"modal_text\"\n      style=\"font-size: 30px; font-family:'Domine-Regular', 'Courier New', Courier, monospace; margin-bottom: 5px;\">\n      <div style=\"text-align:center;\">\n        {{word}}\n      </div>\n    </div>\n  </div>\n\n  <div style=\"position: absolute; bottom: 0;margin: 0 auto;width: 100%;display: flex;\n  justify-content: center; padding-bottom: 20px;\">\n    <button class=\"control\" (click)=\"wordsModal(false)\">CLOSE</button>\n  </div>\n</div>\n\n<!-- GIVE UP MODAL -->\n<div [hidden]=\"!giveup_modal_open\" class=\"modal giveup_modal\" id=\"giveup_modal\" style=\"position: relative\">\n  <div>\n    <div class=\"header_items\" style=\"display: flex;justify-content: flex-end;\">\n      <!-- <a (click)=\"giveUpModal(false)\">\n        <mat-icon style=\"font-size: 24px; padding-right:15px; padding-top: 10px;\">close</mat-icon>\n      </a> -->\n    </div>\n    <div class=\"modal_title\" style=\"font-size: 28px; text-align: center; padding-top:25px;\"><b>Are you sure you want to\n        give up?</b></div>\n  </div>\n\n  <!-- <br>\n  <br> -->\n\n  <div style=\"display: flex; justify-content:center;\" style=\"position: absolute; bottom: 0;margin: 0 auto;width: 100%;display: flex;\n  justify-content: center; padding-bottom: 30px;\">\n    <button (click)=\"giveUpModal(false, true)\" style=\"font-size: 20px; width:60px;\" class=\"control\">YES</button>\n    <button (click)=\"giveUpModal(false)\" style=\"font-size: 20px; width:60px;\" class=\"control\">NO</button>\n  </div>\n\n\n</div>\n\n\n\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
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
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap\");\n.app {\n  position: absolute;\n  /*Can also be `fixed`*/\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  /*Solves a problem in which the content is being cut when the div is smaller than its' wrapper:*/\n  max-width: 101%;\n  overflow: none;\n}\n.correct_words,\n.used_letters,\n.score,\n.high_score,\n.highest_scoring_word {\n  font-size: 20px;\n  color: #4d4749;\n}\n.score {\n  font-size: 65px;\n  font-family: \"Inconsolata-Bold\", \"Courier New\", Courier, monospace;\n}\n.high_score {\n  font-family: \"Inconsolata-Light\", \"Courier New\", Courier, monospace;\n}\ntextarea {\n  font-size: 14px;\n  width: 95%;\n  display: flex;\n  justify-content: center;\n  resize: none;\n  border-color: lightgray;\n}\n.butt {\n  border: 1px outset white;\n  border-width: 5px;\n  border-style: solid;\n  border-radius: 10px;\n  background-color: white;\n  height: 80px;\n  width: 80px;\n  max-width: 110px;\n  max-height: 110px;\n  position: relative;\n  cursor: pointer;\n  font-size: 50px;\n  color: white;\n  font-family: \"Domine-Regular\", sans-serif;\n}\n.user_letters {\n  border: 1px outset white;\n  border-width: 5px;\n  border-style: solid;\n  border-radius: 10px;\n  background-color: #a0a0a0;\n  height: 80px;\n  width: 80px;\n  max-width: 110px;\n  max-height: 110px;\n  cursor: pointer;\n  color: #5c5c5c;\n  font-family: \"Domine-Regular\", sans-serif;\n}\n.butt-sm {\n  border: none;\n  border-radius: 7px;\n  background-color: #e0e0e0;\n  height: 80px;\n  width: 8vw;\n  max-width: 50px;\n  max-height: 70px;\n  margin-right: 8px;\n  font-size: 20px;\n}\n.control {\n  border: 1px outset #363636;\n  border-radius: 10px;\n  border-style: solid;\n  background-color: white;\n  color: #363636;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 10px;\n  margin-right: 8px;\n  font-size: 20px;\n  cursor: pointer;\n  font-family: \"Inconsolata-Light\", \"Courier New\", Courier, monospace;\n}\n.control:disabled {\n  opacity: 0.3;\n  cursor: auto;\n}\n.words_button {\n  border: 2px outset #363636;\n  border-radius: 10px;\n  border-style: solid;\n  background-color: white;\n  color: #363636;\n  font-size: 20px;\n  cursor: pointer;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n.letters {\n  display: inline-block;\n  position: relative;\n}\n.container {\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 20vh;\n}\n.used_letter_row {\n  display: flex;\n  justify-content: left;\n  flex-wrap: wrap;\n}\n.used_letter_icon {\n  display: inline-block;\n  flex-grow: 1;\n  width: 25px;\n  text-align: center;\n  margin-right: 5px;\n}\n.stats_modal {\n  position: fixed;\n  height: 500px;\n  width: 360px;\n  top: 50%;\n  left: 50%;\n  background-color: white;\n  border-radius: 20px;\n  transform: translate(-50%, -50%);\n  box-shadow: 0 0 10px #ccc;\n}\n.tutorial_modal {\n  position: fixed;\n  height: 570px;\n  width: 390px;\n  top: 50%;\n  left: 50%;\n  background-color: white;\n  border-radius: 20px;\n  transform: translate(-50%, -50%);\n  box-shadow: 0 0 10px #ccc;\n}\n.words_modal {\n  position: fixed;\n  height: 550px;\n  width: 330px;\n  top: 50%;\n  left: 50%;\n  background-color: white;\n  border-radius: 20px;\n  transform: translate(-50%, -50%);\n  box-shadow: 0 0 10px #ccc;\n}\n.giveup_modal {\n  position: fixed;\n  height: 200px;\n  width: 300px;\n  top: 50%;\n  left: 50%;\n  background-color: white;\n  border-radius: 20px;\n  transform: translate(-50%, -50%);\n  box-shadow: 0 0 10px #ccc;\n}\n.modal_text {\n  display: flex;\n  justify-content: center;\n  font-size: 24px;\n  color: #333;\n  font-family: \"Inconsolata-Light\", \"Courier New\", Courier, monospace;\n}\n.modal_header {\n  display: flex;\n  justify-content: center;\n  font-size: 20px;\n  color: #c61100;\n  font-family: \"Domine-Bold\", sans-serif;\n}\n.modal_header_sm {\n  font-size: 17px;\n}\n.modal_title {\n  font-family: \"Domine-Bold\", sans-serif;\n}\n.center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}\n.you_lose {\n  height: 100vh;\n  background-color: white;\n  border-radius: 8px;\n}\n.point_value {\n  text-align: center;\n  font-size: 34px;\n  opacity: 0;\n  margin-bottom: 10px;\n  filter: brightness(80%);\n  font-family: \"Inconsolata-Bold\", \"Courier New\", Courier, monospace;\n}\n.social_media_icon {\n  padding: 5px;\n}\n.alert_text {\n  font-size: 18px;\n  color: #3f3f3f;\n  margin-top: 20px;\n  font-family: \"Inconsolata-Light\", \"Courier New\", Courier, monospace;\n}\n.header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 40px;\n  background-color: white;\n  text-align: center;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 20px;\n  color: #4d4749;\n  border-bottom: 1px solid #b8b8b8;\n}\nul {\n  display: flex;\n  justify-content: flex-end;\n}\nul li {\n  list-style: none;\n  margin-right: 20px;\n  font-weight: bold;\n}\nheader {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 40px;\n  background-color: white;\n  text-align: center;\n  vertical-align: middle;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  color: #4d4749;\n  border-bottom: 1px solid #b8b8b8;\n  justify-content: flex-end;\n}\n.item {\n  padding: 10px;\n  font-size: 20px;\n}\n.footer {\n  position: sticky;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  color: #4d4749;\n  padding: 5px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 16px;\n}\n.data {\n  padding-left: 10px;\n}\n/* unvisited link */\n.tabs {\n  padding: 8px;\n  margin-top: 10px;\n  border: 1px solid #a0a0a0;\n  width: 20%;\n  text-align: center;\n}\n.tabs_active {\n  background-color: #de5445;\n  color: white;\n  pointer-events: none;\n  font-weight: bold;\n  border: none;\n  filter: none;\n}\n/* Glyph, by Harry Roberts */\nhr {\n  overflow: visible;\n  /* For IE */\n  padding: 0;\n  border: none;\n  border-top: medium double #cbcbcb;\n  color: #cbcbcb;\n  text-align: center;\n}\nhr:after {\n  display: inline-block;\n  position: relative;\n  top: -0.7em;\n  font-size: 1.5em;\n  padding: 0 0.25em;\n  background: white;\n}\n.blur-background_in {\n  filter: blur(30px);\n  -webkit-filter: blur(30px);\n  -o-filter: blur(30px);\n  -moz-filter: blur(30px);\n  pointer-events: none;\n  transition: all 0.1s ease-in;\n  -webkit-transition: all 0.1s ease-in;\n  -o-transition: all 0.1s ease-in;\n  -moz-transition: all 0.1s ease-in;\n}\n.in {\n  animation: blurin 0.3s, linear forwards;\n  -o-animation: blurin 0.3s, linear forwards;\n  -moz-animation: blurin 0.3s, linear forwards;\n  -webkit-animation: blurin 0.3s, linear forwards;\n}\n.blur-background_out {\n  animation: blurout 0.3s, linear forwards;\n  -o-animation: blurout 0.3s, linear forwards;\n  -moz-animation: blurout 0.3s, linear forwards;\n  -webkit-animation: blurout 0.3s, linear forwards;\n}\n.bounce {\n  animation: bounce 1s ease 1;\n  -o-animation: bounce 1s ease 1;\n  -moz-animation: bounce 1s ease 1;\n  -webkit-animation: bounce 1s ease 1;\n}\n.point_animation {\n  opacity: 1;\n  animation: fadein 0.25s linear forwards, rise 7s ease 1, fadeout 2.5s linear forwards;\n  -o-animation: fadein 0.25s linear forwards, rise 7s ease 1, fadeout 2.5s linear forwards;\n  -moz-animation: fadein 0.25s linear forwards, rise 7s ease 1, fadeout 2.5s linear forwards;\n  -webkit-animation: fadein 0.25s linear forwards, rise 7s ease 1, fadeout 2.5s linear forwards;\n}\n.console_animation_in {\n  opacity: 1;\n  animation: fadein 0.5s linear forwards;\n  -o-animation: fadein 0.5s linear forwards;\n  -moz-animation: fadein 0.5s linear forwards;\n  -webkit-animation: fadein 0.5s linear forwards;\n}\n.console_animation_out {\n  opacity: 1;\n  animation: fadeout 1s linear forwards;\n  -o-animation: fadeout 1s linear forwards;\n  -moz-animation: fadeout 1s linear forwards;\n  -webkit-animation: fadeout 1s linear forwards;\n}\n.fadein {\n  animation: fadein 0.5s;\n  -o-animation: fadein 0.5s;\n  -moz-animation: fadein 0.5s;\n  -webkit-animation: fadein 0.5s;\n}\n.modal_fadein {\n  animation: fadein 0.3s linear forwards;\n  -o-animation: fadein 0.3s linear forwards;\n  -moz-animation: fadein 0.3s linear forwards;\n  -webkit-animation: fadein 0.3s linear forwards;\n}\n.modal_fadeout {\n  animation: fadeout 0.5s linear forwards;\n  -o-animation: fadeout 0.5s linear forwards;\n  -moz-animation: fadeout 0.5s linear forwards;\n  -webkit-animation: fadeout 0.5s linear forwards;\n}\n@keyframes bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(1, 1) translateY(0);\n  }\n  30% {\n    transform: scale(1, 1) translateY(-20px);\n  }\n  50% {\n    transform: scale(1, 1) translateY(0);\n  }\n  65% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes rise {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(1, 1) translateY(-40px);\n  }\n  30% {\n    transform: scale(1, 1) translateY(-40px);\n  }\n  50% {\n    transform: scale(1, 1) translateY(-40px);\n  }\n  65% {\n    transform: scale(1, 1) translateY(-40px);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeout {\n  50% {\n    opacity: 1;\n  }\n  50%, 100% {\n    opacity: 0;\n  }\n}\n@keyframes blurout {\n  from {\n    filter: blur(30px);\n  }\n  to {\n    filter: none;\n  }\n}\n@keyframes blurin {\n  from {\n    filter: none;\n  }\n  to {\n    filter: blur(30px);\n  }\n}\n.resp-sharing-button__link,\n.resp-sharing-button__icon {\n  display: inline-block;\n}\n.resp-sharing-button__link {\n  text-decoration: none;\n  color: #fff;\n  margin: 0.5em;\n}\n.resp-sharing-button {\n  border-radius: 5px;\n  transition: 25ms ease-out;\n  padding: 0.5em 0.75em;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n}\n.resp-sharing-button__icon svg {\n  width: 40px;\n  height: 40px;\n  margin-right: 0.4em;\n  vertical-align: top;\n}\n.resp-sharing-button--small svg {\n  margin: 0;\n  vertical-align: middle;\n}\n/* Non solid icons get a stroke */\n.resp-sharing-button__icon {\n  stroke: #fff;\n  fill: none;\n}\n/* Solid icons get a fill */\n.resp-sharing-button__icon--solid,\n.resp-sharing-button__icon--solidcircle {\n  fill: #fff;\n  stroke: none;\n}\n.resp-sharing-button--twitter {\n  background-color: #55acee;\n}\n.resp-sharing-button--twitter:hover {\n  background-color: #2795e9;\n}\n.resp-sharing-button--pinterest {\n  background-color: #bd081c;\n}\n.resp-sharing-button--pinterest:hover {\n  background-color: #8c0615;\n}\n.resp-sharing-button--facebook {\n  background-color: #3b5998;\n}\n.resp-sharing-button--facebook:hover {\n  background-color: #2d4373;\n}\n.resp-sharing-button--tumblr {\n  background-color: #35465c;\n}\n.resp-sharing-button--tumblr:hover {\n  background-color: #222d3c;\n}\n.resp-sharing-button--reddit {\n  background-color: #5f99cf;\n}\n.resp-sharing-button--reddit:hover {\n  background-color: #3a80c1;\n}\n.resp-sharing-button--google {\n  background-color: #dd4b39;\n}\n.resp-sharing-button--google:hover {\n  background-color: #c23321;\n}\n.resp-sharing-button--linkedin {\n  background-color: #0077b5;\n}\n.resp-sharing-button--linkedin:hover {\n  background-color: #046293;\n}\n.resp-sharing-button--email {\n  background-color: #777;\n}\n.resp-sharing-button--email:hover {\n  background-color: #5e5e5e;\n}\n.resp-sharing-button--xing {\n  background-color: #1a7576;\n}\n.resp-sharing-button--xing:hover {\n  background-color: #114c4c;\n}\n.resp-sharing-button--whatsapp {\n  background-color: #25d366;\n}\n.resp-sharing-button--whatsapp:hover {\n  background-color: #1da851;\n}\n.resp-sharing-button--hackernews {\n  background-color: #ff6600;\n}\n.resp-sharing-button--hackernews:hover,\n.resp-sharing-button--hackernews:focus {\n  background-color: #fb6200;\n}\n.resp-sharing-button--vk {\n  background-color: #507299;\n}\n.resp-sharing-button--vk:hover {\n  background-color: #43648c;\n}\n.resp-sharing-button--facebook {\n  background-color: #3b5998;\n  border-color: #3b5998;\n}\n.resp-sharing-button--facebook:hover,\n.resp-sharing-button--facebook:active {\n  background-color: #2d4373;\n  border-color: #2d4373;\n}\n.resp-sharing-button--twitter {\n  background-color: #55acee;\n  border-color: #55acee;\n}\n.resp-sharing-button--twitter:hover,\n.resp-sharing-button--twitter:active {\n  background-color: #2795e9;\n  border-color: #2795e9;\n}\n.resp-sharing-button--tumblr {\n  background-color: #35465c;\n  border-color: #35465c;\n}\n.resp-sharing-button--tumblr:hover,\n.resp-sharing-button--tumblr:active {\n  background-color: #222d3c;\n  border-color: #222d3c;\n}\n.resp-sharing-button--email {\n  background-color: #777777;\n  border-color: #777777;\n}\n.resp-sharing-button--email:hover,\n.resp-sharing-button--email:active {\n  background-color: #5e5e5e;\n  border-color: #5e5e5e;\n}\n.resp-sharing-button--pinterest {\n  background-color: #bd081c;\n  border-color: #bd081c;\n}\n.resp-sharing-button--pinterest:hover,\n.resp-sharing-button--pinterest:active {\n  background-color: #8c0615;\n  border-color: #8c0615;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3VkaW11cm8vRGVza3RvcC9QZXJzb25hbCBQcm9qZWN0cy90YWtlNS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG9GQUFBO0FBRVI7RUFDSSxrQkFBQTtFQUFvQixzQkFBQTtFQUNwQixPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdHQUFBO0VBQ0EsZUFBQTtFQUlBLGNBQUE7QUNGSjtBREtBOzs7OztFQUtJLGVBQUE7RUFDQSxjQUFBO0FDRko7QURLQTtFQUNJLGVBQUE7RUFDQSxrRUFBQTtBQ0ZKO0FETUE7RUFDSSxtRUFBQTtBQ0hKO0FETUE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ0hKO0FETUE7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFHQSxlQUFBO0VBRUEsZUFBQTtFQUNBLFlBQUE7RUFJQSx5Q0FBQTtBQ1ZKO0FEaUNBO0VBSUksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFFQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFFQSxjQUFBO0VBSUEseUNBQUE7QUN0Q0o7QUR5Q0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDdENKO0FEeUNBO0VBQ0ksMEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUVBLG1FQUFBO0FDdkNKO0FEMENBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUN2Q0o7QUQwQ0E7RUFDSSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFHQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDREQUFBO0FDekNKO0FENENBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQ3pDSjtBRDRDQTtFQUVJLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUMxQ0o7QUQrQ0E7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDNUNKO0FEK0NBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUM1Q0o7QUQrQ0E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBRUEsbUJBQUE7RUFFQSxnQ0FBQTtFQUlBLHlCQUFBO0FDOUNKO0FEaURBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUVBLG1CQUFBO0VBRUEsZ0NBQUE7RUFJQSx5QkFBQTtBQ2hESjtBRG1EQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFFQSxtQkFBQTtFQUVBLGdDQUFBO0VBSUEseUJBQUE7QUNsREo7QURxREE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBRUEsbUJBQUE7RUFFQSxnQ0FBQTtFQUlBLHlCQUFBO0FDcERKO0FEdURBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtRUFBQTtBQ3BESjtBRHVEQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0NBQUE7QUNwREo7QUR1REE7RUFDSSxlQUFBO0FDcERKO0FEdURBO0VBQ0ksc0NBQUE7QUNwREo7QUR1REE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBR0EsNENBQUE7QUNwREo7QUR1REE7RUFJSSxhQUFBO0VBSUEsdUJBQUE7RUFFQSxrQkFBQTtBQzNESjtBRG9FQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLFVBQUE7RUFJQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0VBQUE7QUNyRUo7QUR3RUE7RUFDSSxZQUFBO0FDckVKO0FEd0VBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FDckVKO0FEd0VBO0VBTUksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNERBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FDMUVKO0FENkVBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FDMUVKO0FEaUZJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLGlCQUFBO0FDaEZSO0FEb0ZBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDREQUFBO0VBRUEsY0FBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7QUNuRko7QURzRkE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQ25GSjtBRHNGQTtFQUNJLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFFQSw0REFBQTtFQUNBLGVBQUE7QUNwRko7QUR3RkE7RUFDSSxrQkFBQTtBQ3JGSjtBRHlGQSxtQkFBQTtBQXdCQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDN0dKO0FEZ0hBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBR0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDL0dKO0FEOEhBLDRCQUFBO0FBRUE7RUFDSSxpQkFBQTtFQUFtQixXQUFBO0VBQ25CLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUMzSEo7QUQ2SEE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQzFISjtBRDhIQTtFQUNJLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBRUEsb0JBQUE7RUFFQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtBQzdISjtBRGdJQTtFQUNJLHVDQUFBO0VBQ0EsMENBQUE7RUFDQSw0Q0FBQTtFQUNBLCtDQUFBO0FDN0hKO0FEZ0lBO0VBQ0ksd0NBQUE7RUFDQSwyQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsZ0RBQUE7QUM3SEo7QURnSUE7RUFDSSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQ0FBQTtBQzdISjtBRGdJQTtFQUNJLFVBQUE7RUFDQSxxRkFBQTtFQUNBLHdGQUFBO0VBQ0EsMEZBQUE7RUFDQSw2RkFBQTtBQzdISjtBRGdJQTtFQUNJLFVBQUE7RUFDQSxzQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsMkNBQUE7RUFDQSw4Q0FBQTtBQzdISjtBRGdJQTtFQUNJLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsMENBQUE7RUFDQSw2Q0FBQTtBQzdISjtBRGdJQTtFQUNJLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FDN0hKO0FEZ0lBO0VBQ0ksc0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDJDQUFBO0VBQ0EsOENBQUE7QUM3SEo7QURnSUE7RUFDSSx1Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQ0FBQTtBQzdISjtBRG9JQTtFQUNJO0lBQ0ksb0NBQUE7RUNqSU47RURtSUU7SUFDSSxvQ0FBQTtFQ2pJTjtFRG1JRTtJQUNJLHdDQUFBO0VDaklOO0VEbUlFO0lBQ0ksb0NBQUE7RUNqSU47RURvSUU7SUFDSSxvQ0FBQTtFQ2xJTjtFRG9JRTtJQUNJLG9DQUFBO0VDbElOO0FBQ0Y7QUR1TUE7RUFDSTtJQUNJLG9DQUFBO0VDeklOO0VEMklFO0lBQ0ksd0NBQUE7RUN6SU47RUQySUU7SUFDSSx3Q0FBQTtFQ3pJTjtFRDJJRTtJQUNJLHdDQUFBO0VDeklOO0VENElFO0lBQ0ksd0NBQUE7RUMxSU47RUQ0SUU7SUFDSSxvQ0FBQTtFQzFJTjtBQUNGO0FEK01BO0VBQ0k7SUFDSSxVQUFBO0VDakpOO0VEbUpFO0lBQ0ksVUFBQTtFQ2pKTjtBQUNGO0FEK0tBO0VBSUk7SUFDSSxVQUFBO0VDeEpOO0VEMEpFO0lBRUksVUFBQTtFQ3pKTjtBQUNGO0FEbU1BO0VBQ0k7SUFDSSxrQkFBQTtFQ3pLTjtFRDJLRTtJQUNJLFlBQUE7RUN6S047QUFDRjtBRHVNQTtFQUNJO0lBQ0ksWUFBQTtFQzdLTjtFRCtLRTtJQUNJLGtCQUFBO0VDN0tOO0FBQ0Y7QURxTkE7O0VBRUkscUJBQUE7QUMzTEo7QUQ4TEE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDM0xKO0FEOExBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EseURBQUE7QUMzTEo7QUQ4TEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUMzTEo7QUQ4TEE7RUFDSSxTQUFBO0VBQ0Esc0JBQUE7QUMzTEo7QUQ4TEEsaUNBQUE7QUFDQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FDM0xKO0FEOExBLDJCQUFBO0FBQ0E7O0VBRUksVUFBQTtFQUNBLFlBQUE7QUMzTEo7QUQ4TEE7RUFDSSx5QkFBQTtBQzNMSjtBRDhMQTtFQUNJLHlCQUFBO0FDM0xKO0FEOExBO0VBQ0kseUJBQUE7QUMzTEo7QUQ4TEE7RUFDSSx5QkFBQTtBQzNMSjtBRDhMQTtFQUNJLHlCQUFBO0FDM0xKO0FEOExBO0VBQ0kseUJBQUE7QUMzTEo7QUQ4TEE7RUFDSSx5QkFBQTtBQzNMSjtBRDhMQTtFQUNJLHlCQUFBO0FDM0xKO0FEOExBO0VBQ0kseUJBQUE7QUMzTEo7QUQ4TEE7RUFDSSx5QkFBQTtBQzNMSjtBRDhMQTtFQUNJLHlCQUFBO0FDM0xKO0FEOExBO0VBQ0kseUJBQUE7QUMzTEo7QUQ4TEE7RUFDSSx5QkFBQTtBQzNMSjtBRDhMQTtFQUNJLHlCQUFBO0FDM0xKO0FEOExBO0VBQ0ksc0JBQUE7QUMzTEo7QUQ4TEE7RUFDSSx5QkFBQTtBQzNMSjtBRDhMQTtFQUNJLHlCQUFBO0FDM0xKO0FEOExBO0VBQ0kseUJBQUE7QUMzTEo7QUQ4TEE7RUFDSSx5QkFBQTtBQzNMSjtBRDhMQTtFQUNJLHlCQUFBO0FDM0xKO0FEOExBO0VBQ0kseUJBQUE7QUMzTEo7QUQ2TEE7O0VBRUkseUJBQUE7QUMxTEo7QUQ2TEE7RUFDSSx5QkFBQTtBQzFMSjtBRDZMQTtFQUNJLHlCQUFBO0FDMUxKO0FENkxBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtBQzFMSjtBRDZMQTs7RUFFSSx5QkFBQTtFQUNBLHFCQUFBO0FDMUxKO0FENkxBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtBQzFMSjtBRDZMQTs7RUFFSSx5QkFBQTtFQUNBLHFCQUFBO0FDMUxKO0FENkxBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtBQzFMSjtBRDZMQTs7RUFFSSx5QkFBQTtFQUNBLHFCQUFBO0FDMUxKO0FENkxBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtBQzFMSjtBRDZMQTs7RUFFSSx5QkFBQTtFQUNBLHFCQUFBO0FDMUxKO0FENkxBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtBQzFMSjtBRDZMQTs7RUFFSSx5QkFBQTtFQUNBLHFCQUFBO0FDMUxKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcIik7XG5cbi5hcHAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLypDYW4gYWxzbyBiZSBgZml4ZWRgKi9cbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC8qU29sdmVzIGEgcHJvYmxlbSBpbiB3aGljaCB0aGUgY29udGVudCBpcyBiZWluZyBjdXQgd2hlbiB0aGUgZGl2IGlzIHNtYWxsZXIgdGhhbiBpdHMnIHdyYXBwZXI6Ki9cbiAgICBtYXgtd2lkdGg6IDEwMSU7XG4gICAgLy8gbWF4LWhlaWdodDogMTAxJTtcblxuICAgIC8vIG92ZXJmbG93OiBhdXRvO1xuICAgIG92ZXJmbG93OiBub25lO1xufVxuXG4uY29ycmVjdF93b3Jkcyxcbi51c2VkX2xldHRlcnMsXG4uc2NvcmUsXG4uaGlnaF9zY29yZSxcbi5oaWdoZXN0X3Njb3Jpbmdfd29yZCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjNGQ0NzQ5O1xufVxuXG4uc2NvcmUge1xuICAgIGZvbnQtc2l6ZTogNjVweDtcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhLUJvbGQnLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgLy8gbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLmhpZ2hfc2NvcmUge1xuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEtTGlnaHQnLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbnRleHRhcmVhIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLmJ1dHQge1xuICAgIGJvcmRlcjogMXB4IG91dHNldCB3aGl0ZTtcbiAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDgwcHg7IC8vIDE1MHB4IGZvciBkZXNrdG9wLCAxMDBweCBmb3IgbW9iaWxlXG4gICAgd2lkdGg6IDgwcHg7IC8vMTUwcHggZm9yIGRlc2t0b3AsIDEwMHB4IGZvciBtb2JpbGVcbiAgICBtYXgtd2lkdGg6IDExMHB4O1xuICAgIG1heC1oZWlnaHQ6IDExMHB4O1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIFxuICAgIC8vIG1hcmdpbi10b3A6IDYwcHg7IC8vIGZvciBtb2JpbGVcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLy8gbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgIC8vIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgIC8vIGZvbnQtZmFtaWx5OiBcIkNvXCI7XG4gICAgZm9udC1mYW1pbHk6ICdEb21pbmUtUmVndWxhcicsIHNhbnMtc2VyaWY7XG59XG5cbi8vIC5idXR0OmhvdmVyOmVuYWJsZWQsXG4vLyAudXNlcl9sZXR0ZXJzOmhvdmVyOmVuYWJsZWQsXG4vLyAuYnV0dC1zbTpob3ZlcjplbmFibGVkLFxuLy8gLmNvbnRyb2w6aG92ZXI6ZW5hYmxlZCxcbi8vIC53b3Jkc19idXR0b246aG92ZXI6ZW5hYmxlZHtcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XG4vLyAgICAgLXdlYmtpdC1maWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcbi8vICAgICAtby1maWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcbi8vICAgICAtbW96LWZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xuLy8gfVxuXG4vLyBhOmhvdmVyIHtcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XG4vLyAgICAgLXdlYmtpdC1maWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcbi8vICAgICAtby1maWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcbi8vICAgICAtbW96LWZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xuLy8gfVxuXG4udXNlcl9sZXR0ZXJzIHtcbiAgICAvLyBib3JkZXI6IG5vbmU7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgYm9yZGVyOiAxcHggb3V0c2V0IHdoaXRlO1xuICAgIGJvcmRlci13aWR0aDogNXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjAsIDE2MCwgMTYwKTtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgbWF4LXdpZHRoOiAxMTBweDtcbiAgICBtYXgtaGVpZ2h0OiAxMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLy8gZm9udC1zaXplOiA1MHB4O1xuICAgIGNvbG9yOiByZ2IoOTIsIDkyLCA5Mik7XG5cbiAgICAvLyBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICAvLyBmb250LWZhbWlseTogXCJDb1wiO1xuICAgIGZvbnQtZmFtaWx5OiAnRG9taW5lLVJlZ3VsYXInLCBzYW5zLXNlcmlmO1xufVxuXG4uYnV0dC1zbSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMjQsIDIyNCk7XG4gICAgaGVpZ2h0OiA4MHB4OyAvLyA4MHB4IGZvciBkZXNrdG9wXG4gICAgd2lkdGg6IDh2dzsgLy82MHB4IGZvciBkZXNrdG9wLCAzM3B4IGZvciBtb2JpbGVcbiAgICBtYXgtd2lkdGg6IDUwcHg7XG4gICAgbWF4LWhlaWdodDogNzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5jb250cm9sIHtcbiAgICBib3JkZXI6IDFweCBvdXRzZXQgcmdiKDU0LCA1NCwgNTQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogcmdiKDU0LCA1NCwgNTQpO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAvLyBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhLUxpZ2h0JywgJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4uY29udHJvbDpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC4zO1xuICAgIGN1cnNvcjogYXV0bztcbn1cblxuLndvcmRzX2J1dHRvbiB7XG4gICAgYm9yZGVyOiAycHggb3V0c2V0IHJnYig1NCwgNTQsIDU0KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IHJnYig1NCwgNTQsIDU0KTtcbiAgICAvLyBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIC8vIHBhZGRpbmctdG9wOjEwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuLmxldHRlcnMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb250YWluZXIge1xuICAgIC8vIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyMHZoO1xuICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi51c2VkX2xldHRlcl9yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnVzZWRfbGV0dGVyX2ljb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uc3RhdHNfbW9kYWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHdpZHRoOiAzNjBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLy8gYm9yZGVyOiAxMHB4IHNvbGlkIHJnYigyMzIsIDIzMiwgMjMyKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjY2NjO1xufVxuXG4udHV0b3JpYWxfbW9kYWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDU3MHB4O1xuICAgIHdpZHRoOiAzOTBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLy8gYm9yZGVyOiAxMHB4IHNvbGlkIHJnYigyMzIsIDIzMiwgMjMyKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjY2NjO1xufVxuXG4ud29yZHNfbW9kYWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDU1MHB4O1xuICAgIHdpZHRoOiAzMzBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLy8gYm9yZGVyOiAxMHB4IHNvbGlkIHJnYigyMzIsIDIzMiwgMjMyKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjY2NjO1xufVxuXG4uZ2l2ZXVwX21vZGFsIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC8vIGJvcmRlcjogMTBweCBzb2xpZCByZ2IoMjMyLCAyMzIsIDIzMik7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2NjYztcbn1cblxuLm1vZGFsX3RleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEtTGlnaHQnLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbi5tb2RhbF9oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjYzYxMTAwO1xuICAgIGZvbnQtZmFtaWx5OiAnRG9taW5lLUJvbGQnLCBzYW5zLXNlcmlmO1xufVxuXG4ubW9kYWxfaGVhZGVyX3NtIHtcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5tb2RhbF90aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6ICdEb21pbmUtQm9sZCcsIHNhbnMtc2VyaWY7XG59XG5cbi5jZW50ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4ueW91X2xvc2Uge1xuICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgLy8gd2lkdGg6IDM2MHB4O1xuICAgIC8vIHRvcDogNTAlO1xuICAgIC8vIGxlZnQ6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAvLyBib3JkZXI6IDEwcHggc29saWQgcmdiKDIzMiwgMjMyLCAyMzIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAvLyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gICAgLy8gLW1vei1ib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gICAgLy8gLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gICAgLy8gYm94LXNoYWRvdzogMCAwIDEwcHggI2NjYztcbn1cblxuLnBvaW50X3ZhbHVlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICAgIC8vIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDMycHg7IC8vIDY2cHggZm9yIGRlc2t0b3BcbiAgICAvLyBtYXJnaW4tdG9wOiAtOTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xuICAgIGZvbnQtZmFtaWx5OidJbmNvbnNvbGF0YS1Cb2xkJywgJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4uc29jaWFsX21lZGlhX2ljb24ge1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLmFsZXJ0X3RleHQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogcmdiKDYzLCA2MywgNjMpO1xuICAgIG1hcmdpbi10b3A6MjBweDtcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhLUxpZ2h0JywgJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4uaGVhZGVyIHtcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XG4gICAgLy8gbGVmdDogMDtcbiAgICAvLyB0b3A6IDA7XG4gICAgLy8gd2lkdGg6IDEwMCU7XG5cbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICM0ZDQ3NDk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxODQsIDE4NCwgMTg0KTtcbn1cblxudWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAvLyBtYXJnaW46IDAgYXV0bztcbiAgICAvLyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIC8vIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAvLyBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIC8vIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLy8gcGFkZGluZzogMjBweDtcbiAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgLy8gZm9udC1zaXplOiAyNXB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG5cbmhlYWRlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgLy8gcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICAvLyBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICM0ZDQ3NDk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxODQsIDE4NCwgMTg0KTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uaXRlbSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICM0ZDQ3NDk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxODQsIDE4NCwgMTg0KTtcbn1cblxuLmRhdGEge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIHVudmlzaXRlZCBsaW5rICovXG4vLyBhOmxpbmsge1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbi8vIH1cblxuLy8gLyogdmlzaXRlZCBsaW5rICovXG4vLyBhOnZpc2l0ZWQge1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuLy8gfVxuXG4vLyAvKiBtb3VzZSBvdmVyIGxpbmsgKi9cbi8vIGE6aG92ZXIge1xuLy8gICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNkZTU0NDU7XG4vLyAgICAgLy8gY29sb3I6IHdoaXRlO1xuLy8gICAgIGZpbHRlcjogbm9uZTtcbi8vIH1cblxuLy8gLyogc2VsZWN0ZWQgbGluayAqL1xuLy8gYTphY3RpdmUge1xuLy8gICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNkZTU0NDU7XG4vLyAgICAgLy8gY29sb3I6IHdoaXRlO1xuLy8gICAgIGZpbHRlcjogbm9uZTtcbi8vIH1cblxuLnRhYnMge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNjAsIDE2MCwgMTYwKTtcbiAgICB3aWR0aDogMjAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRhYnNfYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGU1NDQ1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvLyBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gICAgLy8gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZmlsdGVyOiBub25lO1xufVxuXG4vLyBociB7XG4vLyAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbi8vICAgICBjb2xvcjogI2NjYztcbi8vICAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xuLy8gfVxuXG4vLyBociB7XG4vLyAgICAgYm9yZGVyOiAwO1xuLy8gICAgIGhlaWdodDogMXB4O1xuLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwLjc1KSwgcmdiYSgwLCAwLCAwLCAwKSk7XG4vLyB9XG5cbi8qIEdseXBoLCBieSBIYXJyeSBSb2JlcnRzICovXG5cbmhyIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTsgLyogRm9yIElFICovXG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogbWVkaXVtIGRvdWJsZSByZ2IoMjAzLCAyMDMsIDIwMyk7XG4gICAgY29sb3I6ICByZ2IoMjAzLCAyMDMsIDIwMyk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaHI6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMC43ZW07XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBwYWRkaW5nOiAwIDAuMjVlbTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuXG4uYmx1ci1iYWNrZ3JvdW5kX2luIHtcbiAgICBmaWx0ZXI6IGJsdXIoMzBweCk7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMzBweCk7XG4gICAgLW8tZmlsdGVyOiBibHVyKDMwcHgpO1xuICAgIC1tb3otZmlsdGVyOiBibHVyKDMwcHgpO1xuXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbjtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbjtcbn1cblxuLmluIHtcbiAgICBhbmltYXRpb246IGJsdXJpbiAwLjNzLCBsaW5lYXIgZm9yd2FyZHM7XG4gICAgLW8tYW5pbWF0aW9uOiBibHVyaW4gMC4zcywgbGluZWFyIGZvcndhcmRzO1xuICAgIC1tb3otYW5pbWF0aW9uOiBibHVyaW4gMC4zcywgbGluZWFyIGZvcndhcmRzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBibHVyaW4gMC4zcywgbGluZWFyIGZvcndhcmRzO1xufVxuXG4uYmx1ci1iYWNrZ3JvdW5kX291dCB7XG4gICAgYW5pbWF0aW9uOiBibHVyb3V0IDAuM3MsIGxpbmVhciBmb3J3YXJkcztcbiAgICAtby1hbmltYXRpb246IGJsdXJvdXQgMC4zcywgbGluZWFyIGZvcndhcmRzO1xuICAgIC1tb3otYW5pbWF0aW9uOiBibHVyb3V0IDAuM3MsIGxpbmVhciBmb3J3YXJkcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYmx1cm91dCAwLjNzLCBsaW5lYXIgZm9yd2FyZHM7XG59XG5cbi5ib3VuY2Uge1xuICAgIGFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UgMTtcbiAgICAtby1hbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIDE7XG4gICAgLW1vei1hbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIDE7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIDE7XG59XG5cbi5wb2ludF9hbmltYXRpb24ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uOiBmYWRlaW4gMC4yNXMgbGluZWFyIGZvcndhcmRzLCByaXNlIDdzIGVhc2UgMSwgZmFkZW91dCAyLjVzIGxpbmVhciBmb3J3YXJkcztcbiAgICAtby1hbmltYXRpb246IGZhZGVpbiAwLjI1cyBsaW5lYXIgZm9yd2FyZHMsIHJpc2UgN3MgZWFzZSAxLCBmYWRlb3V0IDIuNXMgbGluZWFyIGZvcndhcmRzO1xuICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMC4yNXMgbGluZWFyIGZvcndhcmRzLCByaXNlIDdzIGVhc2UgMSwgZmFkZW91dCAyLjVzIGxpbmVhciBmb3J3YXJkcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuMjVzIGxpbmVhciBmb3J3YXJkcywgcmlzZSA3cyBlYXNlIDEsIGZhZGVvdXQgMi41cyBsaW5lYXIgZm9yd2FyZHM7XG59XG5cbi5jb25zb2xlX2FuaW1hdGlvbl9pbiB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBhbmltYXRpb246IGZhZGVpbiAwLjVzIGxpbmVhciBmb3J3YXJkcztcbiAgICAtby1hbmltYXRpb246IGZhZGVpbiAwLjVzIGxpbmVhciBmb3J3YXJkcztcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDAuNXMgbGluZWFyIGZvcndhcmRzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41cyBsaW5lYXIgZm9yd2FyZHM7XG59XG5cbi5jb25zb2xlX2FuaW1hdGlvbl9vdXQge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uOiBmYWRlb3V0IDFzIGxpbmVhciBmb3J3YXJkcztcbiAgICAtby1hbmltYXRpb246IGZhZGVvdXQgMXMgbGluZWFyIGZvcndhcmRzO1xuICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlb3V0IDFzIGxpbmVhciBmb3J3YXJkcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZW91dCAxcyBsaW5lYXIgZm9yd2FyZHM7XG59XG5cbi5mYWRlaW4ge1xuICAgIGFuaW1hdGlvbjogZmFkZWluIDAuNXM7XG4gICAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMC41cztcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDAuNXM7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzO1xufVxuXG4ubW9kYWxfZmFkZWluIHtcbiAgICBhbmltYXRpb246IGZhZGVpbiAwLjNzIGxpbmVhciBmb3J3YXJkcztcbiAgICAtby1hbmltYXRpb246IGZhZGVpbiAwLjNzIGxpbmVhciBmb3J3YXJkcztcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDAuM3MgbGluZWFyIGZvcndhcmRzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC4zcyBsaW5lYXIgZm9yd2FyZHM7XG59XG5cbi5tb2RhbF9mYWRlb3V0IHtcbiAgICBhbmltYXRpb246IGZhZGVvdXQgMC41cyBsaW5lYXIgZm9yd2FyZHM7XG4gICAgLW8tYW5pbWF0aW9uOiBmYWRlb3V0IDAuNXMgbGluZWFyIGZvcndhcmRzO1xuICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlb3V0IDAuNXMgbGluZWFyIGZvcndhcmRzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlb3V0IDAuNXMgbGluZWFyIGZvcndhcmRzO1xufVxuXG4vLyAubW9kYWxfYXBwZWFyIHtcbi8vICAgICBhbmltYXRpb246IG1vZGFsX2FwcGVhciAwLjVzO1xuLy8gfVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDEwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgMzAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICAvLyA1OCUgIHsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpIHRyYW5zbGF0ZVkoLTdweCk7IH1cbiAgICA2NSUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxufVxuXG5ALW8ta2V5ZnJhbWVzIGJvdW5jZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDEwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgMzAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC01NXB4KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICAvLyA1OCUgIHsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpIHRyYW5zbGF0ZVkoLTdweCk7IH1cbiAgICA2NSUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxufVxuXG5ALW1vei1rZXlmcmFtZXMgYm91bmNlIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgMTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICAzMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTU1cHgpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIC8vIDU4JSAgeyB0cmFuc2Zvcm06IHNjYWxlKDEsMSkgdHJhbnNsYXRlWSgtN3B4KTsgfVxuICAgIDY1JSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2Uge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICAxMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDMwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNTVweCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgLy8gNTglICB7IHRyYW5zZm9ybTogc2NhbGUoMSwxKSB0cmFuc2xhdGVZKC03cHgpOyB9XG4gICAgNjUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyByaXNlIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgMTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC00MHB4KTtcbiAgICB9XG4gICAgMzAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC00MHB4KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC00MHB4KTtcbiAgICB9XG4gICAgLy8gNTglICB7IHRyYW5zZm9ybTogc2NhbGUoMSwxKSB0cmFuc2xhdGVZKC03cHgpOyB9XG4gICAgNjUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC00MHB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59XG5cbkAtby1rZXlmcmFtZXMgcmlzZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDEwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgfVxuICAgIDMwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgfVxuICAgIC8vIDU4JSAgeyB0cmFuc2Zvcm06IHNjYWxlKDEsMSkgdHJhbnNsYXRlWSgtN3B4KTsgfVxuICAgIDY1JSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcmlzZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDEwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgfVxuICAgIDMwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgfVxuICAgIC8vIDU4JSAgeyB0cmFuc2Zvcm06IHNjYWxlKDEsMSkgdHJhbnNsYXRlWSgtN3B4KTsgfVxuICAgIDY1JSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxufVxuXG5ALW1vei1rZXlmcmFtZXMgcmlzZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDEwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgfVxuICAgIDMwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgfVxuICAgIC8vIDU4JSAgeyB0cmFuc2Zvcm06IHNjYWxlKDEsMSkgdHJhbnNsYXRlWSgtN3B4KTsgfVxuICAgIDY1JSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbkAtby1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVvdXQge1xuICAgIC8vIDAlLDUwJSB7XG4gICAgLy8gICAgIG9wYWNpdHk6IDA7XG4gICAgLy8gfVxuICAgIDUwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDUwJSxcbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG59XG5cbkAtby1rZXlmcmFtZXMgZmFkZW91dCB7XG4gICAgLy8gMCUsNTAlIHtcbiAgICAvLyAgICAgb3BhY2l0eTogMDtcbiAgICAvLyB9XG4gICAgNTAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgNTAlLFxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIGZhZGVvdXQge1xuICAgIC8vIDAlLDUwJSB7XG4gICAgLy8gICAgIG9wYWNpdHk6IDA7XG4gICAgLy8gfVxuICAgIDUwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDUwJSxcbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlb3V0IHtcbiAgICAvLyAwJSw1MCUge1xuICAgIC8vICAgICBvcGFjaXR5OiAwO1xuICAgIC8vIH1cbiAgICA1MCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICA1MCUsXG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJsdXJvdXQge1xuICAgIGZyb20ge1xuICAgICAgICBmaWx0ZXI6IGJsdXIoMzBweCk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgZmlsdGVyOiBub25lO1xuICAgIH1cbn1cblxuQC1vLWtleWZyYW1lcyBibHVyb3V0IHtcbiAgICBmcm9tIHtcbiAgICAgICAgZmlsdGVyOiBibHVyKDMwcHgpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICB9XG59XG5cbkAtbW96LWtleWZyYW1lcyBibHVyb3V0IHtcbiAgICBmcm9tIHtcbiAgICAgICAgZmlsdGVyOiBibHVyKDMwcHgpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBibHVyb3V0IHtcbiAgICBmcm9tIHtcbiAgICAgICAgZmlsdGVyOiBibHVyKDMwcHgpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgYmx1cmluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgZmlsdGVyOiBub25lO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIGZpbHRlcjogYmx1cigzMHB4KTtcbiAgICB9XG59XG5cbkAtby1rZXlmcmFtZXMgYmx1cmluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgZmlsdGVyOiBub25lO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIGZpbHRlcjogYmx1cigzMHB4KTtcbiAgICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBibHVyaW4ge1xuICAgIGZyb20ge1xuICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgZmlsdGVyOiBibHVyKDMwcHgpO1xuICAgIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIGJsdXJpbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBmaWx0ZXI6IGJsdXIoMzBweCk7XG4gICAgfVxufVxuXG4vLyBAa2V5ZnJhbWVzIG1vZGFsX2FwcGVhciB7XG4vLyAgICAgZnJvbSB7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41LCAwLjUpO1xuLy8gICAgICAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVxuLy8gICAgIH1cbi8vICAgICB0byB7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG4vLyAgICAgfVxuLy8gfVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbl9fbGluayxcbi5yZXNwLXNoYXJpbmctYnV0dG9uX19pY29uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uX19saW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luOiAwLjVlbTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0cmFuc2l0aW9uOiAyNW1zIGVhc2Utb3V0O1xuICAgIHBhZGRpbmc6IDAuNWVtIDAuNzVlbTtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uX19pY29uIHN2ZyB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMC40ZW07XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXNtYWxsIHN2ZyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi8qIE5vbiBzb2xpZCBpY29ucyBnZXQgYSBzdHJva2UgKi9cbi5yZXNwLXNoYXJpbmctYnV0dG9uX19pY29uIHtcbiAgICBzdHJva2U6ICNmZmY7XG4gICAgZmlsbDogbm9uZTtcbn1cblxuLyogU29saWQgaWNvbnMgZ2V0IGEgZmlsbCAqL1xuLnJlc3Atc2hhcmluZy1idXR0b25fX2ljb24tLXNvbGlkLFxuLnJlc3Atc2hhcmluZy1idXR0b25fX2ljb24tLXNvbGlkY2lyY2xlIHtcbiAgICBmaWxsOiAjZmZmO1xuICAgIHN0cm9rZTogbm9uZTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXR3aXR0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NWFjZWU7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS10d2l0dGVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc5NWU5O1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tcGludGVyZXN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmQwODFjO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tcGludGVyZXN0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGMwNjE1O1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tZmFjZWJvb2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1mYWNlYm9vazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkNDM3Mztcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXR1bWJsciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1NDY1Yztcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXR1bWJscjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMmQzYztcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXJlZGRpdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmOTljZjtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXJlZGRpdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNhODBjMTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLWdvb2dsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGIzOTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLWdvb2dsZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyMzMyMTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLWxpbmtlZGluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3N2I1O1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tbGlua2VkaW46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDYyOTM7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1lbWFpbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3Nztcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLWVtYWlsOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWU1ZTVlO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0teGluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhNzU3Njtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXhpbmc6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTRjNGM7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS13aGF0c2FwcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1ZDM2Njtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXdoYXRzYXBwOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWRhODUxO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0taGFja2VybmV3cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjYwMDtcbn1cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1oYWNrZXJuZXdzOmhvdmVyLFxuLnJlc3Atc2hhcmluZy1idXR0b24tLWhhY2tlcm5ld3M6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYjYyMDA7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS12ayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUwNzI5OTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXZrOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM2NDhjO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tZmFjZWJvb2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XG4gICAgYm9yZGVyLWNvbG9yOiAjM2I1OTk4O1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tZmFjZWJvb2s6aG92ZXIsXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tZmFjZWJvb2s6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ0MzczO1xuICAgIGJvcmRlci1jb2xvcjogIzJkNDM3Mztcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXR3aXR0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NWFjZWU7XG4gICAgYm9yZGVyLWNvbG9yOiAjNTVhY2VlO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tdHdpdHRlcjpob3Zlcixcbi5yZXNwLXNoYXJpbmctYnV0dG9uLS10d2l0dGVyOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3OTVlOTtcbiAgICBib3JkZXItY29sb3I6ICMyNzk1ZTk7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS10dW1ibHIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTQ2NWM7XG4gICAgYm9yZGVyLWNvbG9yOiAjMzU0NjVjO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tdHVtYmxyOmhvdmVyLFxuLnJlc3Atc2hhcmluZy1idXR0b24tLXR1bWJscjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjJkM2M7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjIyZDNjO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tZW1haWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzc3Nzc7XG4gICAgYm9yZGVyLWNvbG9yOiAjNzc3Nzc3O1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tZW1haWw6aG92ZXIsXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tZW1haWw6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWU1ZTVlO1xuICAgIGJvcmRlci1jb2xvcjogIzVlNWU1ZTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXBpbnRlcmVzdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkMDgxYztcbiAgICBib3JkZXItY29sb3I6ICNiZDA4MWM7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1waW50ZXJlc3Q6aG92ZXIsXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tcGludGVyZXN0OmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhjMDYxNTtcbiAgICBib3JkZXItY29sb3I6ICM4YzA2MTU7XG59XG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiKTtcbi5hcHAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qQ2FuIGFsc28gYmUgYGZpeGVkYCovXG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICAvKlNvbHZlcyBhIHByb2JsZW0gaW4gd2hpY2ggdGhlIGNvbnRlbnQgaXMgYmVpbmcgY3V0IHdoZW4gdGhlIGRpdiBpcyBzbWFsbGVyIHRoYW4gaXRzJyB3cmFwcGVyOiovXG4gIG1heC13aWR0aDogMTAxJTtcbiAgb3ZlcmZsb3c6IG5vbmU7XG59XG5cbi5jb3JyZWN0X3dvcmRzLFxuLnVzZWRfbGV0dGVycyxcbi5zY29yZSxcbi5oaWdoX3Njb3JlLFxuLmhpZ2hlc3Rfc2NvcmluZ193b3JkIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzRkNDc0OTtcbn1cblxuLnNjb3JlIHtcbiAgZm9udC1zaXplOiA2NXB4O1xuICBmb250LWZhbWlseTogXCJJbmNvbnNvbGF0YS1Cb2xkXCIsIFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4uaGlnaF9zY29yZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkluY29uc29sYXRhLUxpZ2h0XCIsIFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG50ZXh0YXJlYSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDk1JTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHJlc2l6ZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5idXR0IHtcbiAgYm9yZGVyOiAxcHggb3V0c2V0IHdoaXRlO1xuICBib3JkZXItd2lkdGg6IDVweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIG1heC13aWR0aDogMTEwcHg7XG4gIG1heC1oZWlnaHQ6IDExMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkRvbWluZS1SZWd1bGFyXCIsIHNhbnMtc2VyaWY7XG59XG5cbi51c2VyX2xldHRlcnMge1xuICBib3JkZXI6IDFweCBvdXRzZXQgd2hpdGU7XG4gIGJvcmRlci13aWR0aDogNXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBhMGEwO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBtYXgtd2lkdGg6IDExMHB4O1xuICBtYXgtaGVpZ2h0OiAxMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzVjNWM1YztcbiAgZm9udC1mYW1pbHk6IFwiRG9taW5lLVJlZ3VsYXJcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmJ1dHQtc20ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogOHZ3O1xuICBtYXgtd2lkdGg6IDUwcHg7XG4gIG1heC1oZWlnaHQ6IDcwcHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5jb250cm9sIHtcbiAgYm9yZGVyOiAxcHggb3V0c2V0ICMzNjM2MzY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzM2MzYzNjtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIkluY29uc29sYXRhLUxpZ2h0XCIsIFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4uY29udHJvbDpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuMztcbiAgY3Vyc29yOiBhdXRvO1xufVxuXG4ud29yZHNfYnV0dG9uIHtcbiAgYm9yZGVyOiAycHggb3V0c2V0ICMzNjM2MzY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzM2MzYzNjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG4ubGV0dGVycyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMjB2aDtcbn1cblxuLnVzZWRfbGV0dGVyX3JvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4udXNlZF9sZXR0ZXJfaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxleC1ncm93OiAxO1xuICB3aWR0aDogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnN0YXRzX21vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogMzYwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDNweCAjY2NjO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAjY2NjO1xufVxuXG4udHV0b3JpYWxfbW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogNTcwcHg7XG4gIHdpZHRoOiAzOTBweDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNjY2M7XG59XG5cbi53b3Jkc19tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiA1NTBweDtcbiAgd2lkdGg6IDMzMHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDNweCAjY2NjO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggI2NjYztcbn1cblxuLmdpdmV1cF9tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDNweCAjY2NjO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggI2NjYztcbn1cblxuLm1vZGFsX3RleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1mYW1pbHk6IFwiSW5jb25zb2xhdGEtTGlnaHRcIiwgXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbi5tb2RhbF9oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2M2MTEwMDtcbiAgZm9udC1mYW1pbHk6IFwiRG9taW5lLUJvbGRcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1vZGFsX2hlYWRlcl9zbSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLm1vZGFsX3RpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRG9taW5lLUJvbGRcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNlbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi55b3VfbG9zZSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5wb2ludF92YWx1ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBvcGFjaXR5OiAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcbiAgZm9udC1mYW1pbHk6IFwiSW5jb25zb2xhdGEtQm9sZFwiLCBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuLnNvY2lhbF9tZWRpYV9pY29uIHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYWxlcnRfdGV4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMzZjNmM2Y7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkluY29uc29sYXRhLUxpZ2h0XCIsIFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjNGQ0NzQ5O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2I4YjhiODtcbn1cblxudWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxudWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNGQ0NzQ5O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2I4YjhiODtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLml0ZW0ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5mb290ZXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzRkNDc0OTtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZGF0YSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLyogdW52aXNpdGVkIGxpbmsgKi9cbi50YWJzIHtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTBhMGEwO1xuICB3aWR0aDogMjAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YWJzX2FjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZTU0NDU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IG5vbmU7XG4gIGZpbHRlcjogbm9uZTtcbn1cblxuLyogR2x5cGgsIGJ5IEhhcnJ5IFJvYmVydHMgKi9cbmhyIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIC8qIEZvciBJRSAqL1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3A6IG1lZGl1bSBkb3VibGUgI2NiY2JjYjtcbiAgY29sb3I6ICNjYmNiY2I7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaHI6YWZ0ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMC43ZW07XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHBhZGRpbmc6IDAgMC4yNWVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmJsdXItYmFja2dyb3VuZF9pbiB7XG4gIGZpbHRlcjogYmx1cigzMHB4KTtcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMzBweCk7XG4gIC1vLWZpbHRlcjogYmx1cigzMHB4KTtcbiAgLW1vei1maWx0ZXI6IGJsdXIoMzBweCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW47XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW47XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbjtcbn1cblxuLmluIHtcbiAgYW5pbWF0aW9uOiBibHVyaW4gMC4zcywgbGluZWFyIGZvcndhcmRzO1xuICAtby1hbmltYXRpb246IGJsdXJpbiAwLjNzLCBsaW5lYXIgZm9yd2FyZHM7XG4gIC1tb3otYW5pbWF0aW9uOiBibHVyaW4gMC4zcywgbGluZWFyIGZvcndhcmRzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYmx1cmluIDAuM3MsIGxpbmVhciBmb3J3YXJkcztcbn1cblxuLmJsdXItYmFja2dyb3VuZF9vdXQge1xuICBhbmltYXRpb246IGJsdXJvdXQgMC4zcywgbGluZWFyIGZvcndhcmRzO1xuICAtby1hbmltYXRpb246IGJsdXJvdXQgMC4zcywgbGluZWFyIGZvcndhcmRzO1xuICAtbW96LWFuaW1hdGlvbjogYmx1cm91dCAwLjNzLCBsaW5lYXIgZm9yd2FyZHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBibHVyb3V0IDAuM3MsIGxpbmVhciBmb3J3YXJkcztcbn1cblxuLmJvdW5jZSB7XG4gIGFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UgMTtcbiAgLW8tYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSAxO1xuICAtbW96LWFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UgMTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIDE7XG59XG5cbi5wb2ludF9hbmltYXRpb24ge1xuICBvcGFjaXR5OiAxO1xuICBhbmltYXRpb246IGZhZGVpbiAwLjI1cyBsaW5lYXIgZm9yd2FyZHMsIHJpc2UgN3MgZWFzZSAxLCBmYWRlb3V0IDIuNXMgbGluZWFyIGZvcndhcmRzO1xuICAtby1hbmltYXRpb246IGZhZGVpbiAwLjI1cyBsaW5lYXIgZm9yd2FyZHMsIHJpc2UgN3MgZWFzZSAxLCBmYWRlb3V0IDIuNXMgbGluZWFyIGZvcndhcmRzO1xuICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDAuMjVzIGxpbmVhciBmb3J3YXJkcywgcmlzZSA3cyBlYXNlIDEsIGZhZGVvdXQgMi41cyBsaW5lYXIgZm9yd2FyZHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC4yNXMgbGluZWFyIGZvcndhcmRzLCByaXNlIDdzIGVhc2UgMSwgZmFkZW91dCAyLjVzIGxpbmVhciBmb3J3YXJkcztcbn1cblxuLmNvbnNvbGVfYW5pbWF0aW9uX2luIHtcbiAgb3BhY2l0eTogMTtcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cyBsaW5lYXIgZm9yd2FyZHM7XG4gIC1vLWFuaW1hdGlvbjogZmFkZWluIDAuNXMgbGluZWFyIGZvcndhcmRzO1xuICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDAuNXMgbGluZWFyIGZvcndhcmRzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNXMgbGluZWFyIGZvcndhcmRzO1xufVxuXG4uY29uc29sZV9hbmltYXRpb25fb3V0IHtcbiAgb3BhY2l0eTogMTtcbiAgYW5pbWF0aW9uOiBmYWRlb3V0IDFzIGxpbmVhciBmb3J3YXJkcztcbiAgLW8tYW5pbWF0aW9uOiBmYWRlb3V0IDFzIGxpbmVhciBmb3J3YXJkcztcbiAgLW1vei1hbmltYXRpb246IGZhZGVvdXQgMXMgbGluZWFyIGZvcndhcmRzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZW91dCAxcyBsaW5lYXIgZm9yd2FyZHM7XG59XG5cbi5mYWRlaW4ge1xuICBhbmltYXRpb246IGZhZGVpbiAwLjVzO1xuICAtby1hbmltYXRpb246IGZhZGVpbiAwLjVzO1xuICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDAuNXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41cztcbn1cblxuLm1vZGFsX2ZhZGVpbiB7XG4gIGFuaW1hdGlvbjogZmFkZWluIDAuM3MgbGluZWFyIGZvcndhcmRzO1xuICAtby1hbmltYXRpb246IGZhZGVpbiAwLjNzIGxpbmVhciBmb3J3YXJkcztcbiAgLW1vei1hbmltYXRpb246IGZhZGVpbiAwLjNzIGxpbmVhciBmb3J3YXJkcztcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjNzIGxpbmVhciBmb3J3YXJkcztcbn1cblxuLm1vZGFsX2ZhZGVvdXQge1xuICBhbmltYXRpb246IGZhZGVvdXQgMC41cyBsaW5lYXIgZm9yd2FyZHM7XG4gIC1vLWFuaW1hdGlvbjogZmFkZW91dCAwLjVzIGxpbmVhciBmb3J3YXJkcztcbiAgLW1vei1hbmltYXRpb246IGZhZGVvdXQgMC41cyBsaW5lYXIgZm9yd2FyZHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlb3V0IDAuNXMgbGluZWFyIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgMTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgMzAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTIwcHgpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDY1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBib3VuY2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDEwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC01NXB4KTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxuICA2NSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBib3VuY2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDEwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC01NXB4KTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxuICA2NSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDEwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC01NXB4KTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxuICA2NSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcmlzZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgMTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTQwcHgpO1xuICB9XG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC00MHB4KTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gIH1cbiAgNjUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTQwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyByaXNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAxMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gIH1cbiAgMzAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTQwcHgpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC00MHB4KTtcbiAgfVxuICA2NSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcmlzZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgMTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTQwcHgpO1xuICB9XG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC00MHB4KTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gIH1cbiAgNjUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTQwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIHJpc2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDEwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC00MHB4KTtcbiAgfVxuICAzMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtNDBweCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTQwcHgpO1xuICB9XG4gIDY1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC00MHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBmYWRlaW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZW91dCB7XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1MCUsIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgZmFkZW91dCB7XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1MCUsIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBmYWRlb3V0IHtcbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUwJSwgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVvdXQge1xuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJsdXJvdXQge1xuICBmcm9tIHtcbiAgICBmaWx0ZXI6IGJsdXIoMzBweCk7XG4gIH1cbiAgdG8ge1xuICAgIGZpbHRlcjogbm9uZTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBibHVyb3V0IHtcbiAgZnJvbSB7XG4gICAgZmlsdGVyOiBibHVyKDMwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBmaWx0ZXI6IG5vbmU7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBibHVyb3V0IHtcbiAgZnJvbSB7XG4gICAgZmlsdGVyOiBibHVyKDMwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBmaWx0ZXI6IG5vbmU7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBibHVyb3V0IHtcbiAgZnJvbSB7XG4gICAgZmlsdGVyOiBibHVyKDMwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBmaWx0ZXI6IG5vbmU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYmx1cmluIHtcbiAgZnJvbSB7XG4gICAgZmlsdGVyOiBub25lO1xuICB9XG4gIHRvIHtcbiAgICBmaWx0ZXI6IGJsdXIoMzBweCk7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgYmx1cmluIHtcbiAgZnJvbSB7XG4gICAgZmlsdGVyOiBub25lO1xuICB9XG4gIHRvIHtcbiAgICBmaWx0ZXI6IGJsdXIoMzBweCk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBibHVyaW4ge1xuICBmcm9tIHtcbiAgICBmaWx0ZXI6IG5vbmU7XG4gIH1cbiAgdG8ge1xuICAgIGZpbHRlcjogYmx1cigzMHB4KTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGJsdXJpbiB7XG4gIGZyb20ge1xuICAgIGZpbHRlcjogbm9uZTtcbiAgfVxuICB0byB7XG4gICAgZmlsdGVyOiBibHVyKDMwcHgpO1xuICB9XG59XG4ucmVzcC1zaGFyaW5nLWJ1dHRvbl9fbGluayxcbi5yZXNwLXNoYXJpbmctYnV0dG9uX19pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbl9fbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMC41ZW07XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiAyNW1zIGVhc2Utb3V0O1xuICBwYWRkaW5nOiAwLjVlbSAwLjc1ZW07XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b25fX2ljb24gc3ZnIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjRlbTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXNtYWxsIHN2ZyB7XG4gIG1hcmdpbjogMDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLyogTm9uIHNvbGlkIGljb25zIGdldCBhIHN0cm9rZSAqL1xuLnJlc3Atc2hhcmluZy1idXR0b25fX2ljb24ge1xuICBzdHJva2U6ICNmZmY7XG4gIGZpbGw6IG5vbmU7XG59XG5cbi8qIFNvbGlkIGljb25zIGdldCBhIGZpbGwgKi9cbi5yZXNwLXNoYXJpbmctYnV0dG9uX19pY29uLS1zb2xpZCxcbi5yZXNwLXNoYXJpbmctYnV0dG9uX19pY29uLS1zb2xpZGNpcmNsZSB7XG4gIGZpbGw6ICNmZmY7XG4gIHN0cm9rZTogbm9uZTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXR3aXR0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVhY2VlO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tdHdpdHRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzk1ZTk7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1waW50ZXJlc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmQwODFjO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tcGludGVyZXN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjMDYxNTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLWZhY2Vib29rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLWZhY2Vib29rOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkNDM3Mztcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXR1bWJsciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTQ2NWM7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS10dW1ibHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyZDNjO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tcmVkZGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVmOTljZjtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXJlZGRpdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTgwYzE7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1nb29nbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tZ29vZ2xlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyMzMyMTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLWxpbmtlZGluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzdiNTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLWxpbmtlZGluOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0NjI5Mztcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLWVtYWlsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3Nztcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLWVtYWlsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVlNWU1ZTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXhpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE3NTc2O1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0teGluZzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTRjNGM7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS13aGF0c2FwcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNWQzNjY7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS13aGF0c2FwcDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZGE4NTE7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1oYWNrZXJuZXdzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjYwMDtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLWhhY2tlcm5ld3M6aG92ZXIsXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0taGFja2VybmV3czpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYjYyMDA7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS12ayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDcyOTk7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS12azpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzY0OGM7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XG4gIGJvcmRlci1jb2xvcjogIzNiNTk5ODtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLWZhY2Vib29rOmhvdmVyLFxuLnJlc3Atc2hhcmluZy1idXR0b24tLWZhY2Vib29rOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDQzNzM7XG4gIGJvcmRlci1jb2xvcjogIzJkNDM3Mztcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXR3aXR0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVhY2VlO1xuICBib3JkZXItY29sb3I6ICM1NWFjZWU7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS10d2l0dGVyOmhvdmVyLFxuLnJlc3Atc2hhcmluZy1idXR0b24tLXR3aXR0ZXI6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3OTVlOTtcbiAgYm9yZGVyLWNvbG9yOiAjMjc5NWU5O1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tdHVtYmxyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1NDY1YztcbiAgYm9yZGVyLWNvbG9yOiAjMzU0NjVjO1xufVxuXG4ucmVzcC1zaGFyaW5nLWJ1dHRvbi0tdHVtYmxyOmhvdmVyLFxuLnJlc3Atc2hhcmluZy1idXR0b24tLXR1bWJscjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyZDNjO1xuICBib3JkZXItY29sb3I6ICMyMjJkM2M7XG59XG5cbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1lbWFpbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3Nzc3Nzc7XG4gIGJvcmRlci1jb2xvcjogIzc3Nzc3Nztcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLWVtYWlsOmhvdmVyLFxuLnJlc3Atc2hhcmluZy1idXR0b24tLWVtYWlsOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZTVlNWU7XG4gIGJvcmRlci1jb2xvcjogIzVlNWU1ZTtcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXBpbnRlcmVzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZDA4MWM7XG4gIGJvcmRlci1jb2xvcjogI2JkMDgxYztcbn1cblxuLnJlc3Atc2hhcmluZy1idXR0b24tLXBpbnRlcmVzdDpob3Zlcixcbi5yZXNwLXNoYXJpbmctYnV0dG9uLS1waW50ZXJlc3Q6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjMDYxNTtcbiAgYm9yZGVyLWNvbG9yOiAjOGMwNjE1O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/firebase.service */
    "./src/app/services/firebase.service.ts");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/app.service */
    "./src/app/services/app.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(httpClient, datepipe, firebaseSvc, appSvc) {
        _classCallCheck(this, AppComponent);

        this.httpClient = httpClient;
        this.datepipe = datepipe;
        this.firebaseSvc = firebaseSvc;
        this.appSvc = appSvc;
        this.title = 'take5';
        this.cell_color = '#f2f2f2';
        this.cell_color_selected = '#f2f880';
        this.black = '#242022';
        this.cells = [{
          name: "cell1",
          value: "",
          point_value: 0,
          color: this.cell_color,
          user_letter_index: null,
          font_color: this.black,
          selected: false
        }, {
          name: "cell2",
          value: "",
          point_value: 0,
          color: this.cell_color,
          user_letter_index: null,
          font_color: this.black,
          selected: false
        }, {
          name: "cell3",
          value: "",
          point_value: 0,
          color: this.cell_color,
          user_letter_index: null,
          font_color: this.black,
          selected: false
        }, {
          name: "cell4",
          value: "",
          point_value: 0,
          color: this.cell_color,
          user_letter_index: null,
          font_color: this.black,
          selected: false
        }, {
          name: "cell5",
          value: "",
          point_value: 0,
          color: this.cell_color,
          user_letter_index: null,
          font_color: this.black,
          selected: false
        }];
        this.user_letter_color = '#f0f0f0';
        this.user_letter_selected_color = '#d6d6d6';
        this.user_letters = [{
          value: "",
          color: this.user_letter_color,
          enabled: true,
          font_color: this.black
        }, {
          value: "",
          color: this.user_letter_color,
          enabled: true,
          font_color: this.black
        }, {
          value: "",
          color: this.user_letter_color,
          enabled: true,
          font_color: this.black
        }, {
          value: "",
          color: this.user_letter_color,
          enabled: true,
          font_color: this.black
        }, {
          value: "",
          color: this.user_letter_color,
          enabled: true,
          font_color: this.black
        }]; // MULT-COLOR
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
        this.keyboard_top = [{
          name: 'Q',
          opacity: this.key_opacity_free,
          enabled: true,
          points: 10,
          row: 'top',
          point_color: this.point10_color,
          font_color: 'white'
        }, {
          name: 'W',
          opacity: this.key_opacity_free,
          enabled: true,
          points: 5,
          row: 'top',
          point_color: this.point5_color,
          font_color: 'white'
        }, {
          name: 'E',
          opacity: this.key_opacity_free,
          enabled: true,
          points: 1,
          row: 'top',
          point_color: this.point1_color,
          font_color: this.black
        }, {
          name: 'R',
          opacity: this.key_opacity_free,
          enabled: true,
          points: 1,
          row: 'top',
          point_color: this.point1_color,
          font_color: this.black
        }, {
          name: 'T',
          opacity: this.key_opacity_free,
          enabled: true,
          points: 2,
          row: 'top',
          point_color: this.point2_color,
          font_color: this.black
        }, {
          name: 'Y',
          opacity: this.key_opacity_free,
          enabled: true,
          points: 3,
          row: 'top',
          point_color: this.point3_color,
          font_color: 'white'
        }, {
          name: 'U',
          opacity: this.key_opacity_free,
          enabled: true,
          points: 2,
          row: 'top',
          point_color: this.point2_color,
          font_color: this.black
        }, {
          name: 'I',
          opacity: this.key_opacity_free,
          enabled: true,
          points: 1,
          row: 'top',
          point_color: this.point1_color,
          font_color: this.black
        }, {
          name: 'O',
          opacity: this.key_opacity_free,
          enabled: true,
          points: 1,
          row: 'top',
          point_color: this.point1_color,
          font_color: this.black
        }, {
          name: 'P',
          opacity: this.key_opacity_free,
          enabled: true,
          points: 3,
          row: 'top',
          point_color: this.point3_color,
          font_color: 'white'
        }];
        this.keyboard_middle = [{
          name: 'A',
          opacity: this.key_opacity_free,
          enabled: true,
          points: 1,
          row: 'middle',
          point_color: this.point1_color,
          font_color: this.black
        }, {
          name: 'S',
          opacity: this.key_opacity_free,
          enabled: true,
          points: 1,
          row: 'middle',
          point_color: this.point1_color,
          font_color: this.black
        }, {
          name: 'D',
          opacity: this.key_opacity_free,
          enabled: true,
          points: 2,
          row: 'middle',
          point_color: this.point2_color,
          font_color: this.black
        }, {
          name: 'F',
          opacity: this.key_opacity_free,
          enabled: true,
          points: 5,
          row: 'middle',
          point_color: this.point5_color,
          font_color: 'white'
        }, {
          name: 'G',
          opacity: this.key_opacity_free,
          enabled: true,
          points: 4,
          row: 'middle',
          point_color: this.point4_color,
          font_color: 'white'
        }, {
          name: 'H',
          opacity: this.key_opacity_free,
          enabled: true,
          points: 4,
          row: 'middle',
          point_color: this.point4_color,
          font_color: 'white'
        }, {
          name: 'J',
          opacity: this.key_opacity_free,
          enabled: true,
          points: 10,
          row: 'middle',
          point_color: this.point10_color,
          font_color: 'white'
        }, {
          name: 'K',
          opacity: this.key_opacity_free,
          enabled: true,
          points: 4,
          row: 'middle',
          point_color: this.point4_color,
          font_color: 'white'
        }, {
          name: 'L',
          opacity: this.key_opacity_free,
          enabled: true,
          points: 2,
          row: 'middle',
          point_color: this.point2_color,
          font_color: this.black
        }];
        this.keyboard_bottom = [{
          name: 'Z',
          opacity: this.key_opacity_free,
          enabled: true,
          points: 10,
          row: 'bottom',
          point_color: this.point10_color,
          font_color: 'white'
        }, {
          name: 'X',
          opacity: this.key_opacity_free,
          enabled: true,
          points: 10,
          row: 'bottom',
          point_color: this.point10_color,
          font_color: 'white'
        }, {
          name: 'C',
          opacity: this.key_opacity_free,
          enabled: true,
          points: 3,
          row: 'bottom',
          point_color: this.point3_color,
          font_color: 'white'
        }, {
          name: 'V',
          opacity: this.key_opacity_free,
          enabled: true,
          points: 5,
          row: 'bottom',
          point_color: this.point5_color,
          font_color: 'white'
        }, {
          name: 'B',
          opacity: this.key_opacity_free,
          enabled: true,
          points: 4,
          row: 'bottom',
          point_color: this.point4_color,
          font_color: 'white'
        }, {
          name: 'N',
          opacity: this.key_opacity_free,
          enabled: true,
          points: 2,
          row: 'bottom',
          point_color: this.point2_color,
          font_color: this.black
        }, {
          name: 'M',
          opacity: this.key_opacity_free,
          enabled: true,
          points: 3,
          row: 'bottom',
          point_color: this.point3_color,
          font_color: 'white'
        }];
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
        this.stats_step_num = 1; // PercentileData

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

      _createClass(AppComponent, [{
        key: "keyEvent",
        value: function keyEvent(event) {
          try {
            if (event.key) {
              var entered_key = event.key.toUpperCase();

              if (this.keyboard_enabled) {
                // If user is in letter selection mode
                if (this.used_letters.findIndex(function (letter) {
                  return letter.name === entered_key;
                }) === -1) {
                  this.keyboardClicked(event.key.toUpperCase());
                }
              } else {
                // If user is in word construction mode
                if ((entered_key === 'BACKSPACE' || entered_key === 'ENTER') && !this.you_lose_open) {
                  this.controlClicked(entered_key);
                }

                var letter_index = this.user_letters.findIndex(function (letter) {
                  return letter.value === entered_key && letter.enabled;
                });

                if (letter_index > -1 && this.user_letters[letter_index].enabled) {
                  this.userLetterClicked(letter_index);
                }
              }
            }
          } catch (ex) {}
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var now, now_str;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // Check to see if device is mobile
                    this.isMobile = window.matchMedia("only screen and (max-width: 920px)").matches;
                    console.log('isMobile: ' + this.isMobile); // Initialize Firebase

                    _context.next = 4;
                    return this.firebaseSvc.initializeApp();

                  case 4:
                    this.httpClient.get('/assets/word_list.txt', {
                      responseType: 'text'
                    }).subscribe(function (data) {
                      if (data) {
                        _this.word_list = data.split('\n'); // this.initial_word_list = this.word_list;
                        // this.initialize();
                      }
                    });
                    this.httpClient.get('/assets/initial_words.txt', {
                      responseType: 'text'
                    }).subscribe(function (data) {
                      if (data) {
                        _this.initial_word_list = data.split('\n'); // this.initialize();
                      }
                    }); // Check to see if today's day is present in the "daily_game_data" tree,
                    // and if it isn't, get new random word and create new "[insert data]_game_data" object
                    // and post to Firebase.

                    now = new Date();
                    now_str = this.datepipe.transform(now, 'yyyy-MM-dd');
                    _context.next = 10;
                    return this.firebaseSvc.getTodaysGameData(now_str);

                  case 10:
                    this.todays_game_data = _context.sent;
                    _context.next = 13;
                    return this.firebaseSvc.getAllTimeData();

                  case 13:
                    this.all_time_data = _context.sent;

                    if (this.todays_game_data) {
                      _context.next = 21;
                      break;
                    }

                    console.log('NEW DAY');
                    _context.next = 18;
                    return this.firebaseSvc.postNewDayGameData(now_str, this.chooseRandomWord());

                  case 18:
                    _context.next = 20;
                    return this.firebaseSvc.getTodaysGameData(now_str);

                  case 20:
                    this.todays_game_data = _context.sent;

                  case 21:
                    // Update Today's Game Data subscription
                    if (this.appSvc.updatedTodaysGameData) {
                      this.updatedTodaysGameDataObservable$ = this.appSvc.updatedTodaysGameData.subscribe(function (data) {
                        _this.todays_game_data = data; // Sort raw_scores to get the high score

                        if (_this.todays_game_data.raw_scores) {
                          var sorted_scores = _this.todays_game_data.raw_scores.sort(function (a, b) {
                            return a - b;
                          });

                          _this.todays_game_data.high_score = sorted_scores[_this.todays_game_data.raw_scores.length - 1];
                        } else {
                          _this.todays_game_data.high_score = '-';
                        }
                      });
                    }

                    this.initialize();

                  case 23:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "initialize",
        value: function initialize() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var random_word, i, _char, randomID;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    // const random_word: any = this.chooseRandomWord();
                    random_word = this.todays_game_data.today_word;
                    this.current_word = random_word;
                    this.starting_word = random_word; // Initialize Cells for starting word

                    for (i in random_word) {
                      _char = this.findLetter(random_word.charAt(i));
                      this.cells[i].value = random_word.charAt(i);
                      this.cells[i].color = _char.point_color;
                      this.cells[i].font_color = _char.font_color;
                      this.cells[i].point_value = _char.points;
                    } // Get User Credentials


                    this.userID_LocalStorage = JSON.parse(window.localStorage.getItem('userID_LocalStorage'));
                    this.played_before = JSON.parse(window.localStorage.getItem('played_before'));

                    if (this.userID_LocalStorage) {
                      _context2.next = 18;
                      break;
                    }

                    // If user doesn't exist, create new one
                    console.log('NEW USER FOUND');
                    randomID = 'user_' + this.appSvc.generateRandomID();
                    this.firebaseSvc.createNewUser(randomID);
                    this.userID_LocalStorage = randomID;
                    window.localStorage.setItem('userID_LocalStorage', JSON.stringify(this.userID_LocalStorage));
                    window.localStorage.removeItem('user');
                    _context2.next = 15;
                    return this.firebaseSvc.getUserData(this.userID_LocalStorage);

                  case 15:
                    this.user = _context2.sent;
                    _context2.next = 22;
                    break;

                  case 18:
                    console.log('WELCOME BACK, ' + this.userID_LocalStorage);
                    _context2.next = 21;
                    return this.firebaseSvc.getUserData(this.userID_LocalStorage);

                  case 21:
                    this.user = _context2.sent;

                  case 22:
                    // If User has never played before, automatically open Tutorial
                    if (!this.played_before) {
                      window.localStorage.setItem('played_before', 'true');
                      this.tutorialModal(true);
                    }

                  case 23:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "cellClicked",
        value: function cellClicked(index) {
          this.selected_cell = index;
          this.keyboard_opacity = '1.0';
          this.keyboard_enabled = true;
          this.most_recently_selected_letter_index = index;
          var letter = this.findLetter(this.cells[this.most_recently_selected_letter_index].value);
          this.cells[index].selected = true;
          this.cells[index].color = letter.point_color;
          this.cells[index].font_color = letter.font_color; // Ensures only 1 cell can be selected at a time

          for (var i in this.cells) {
            if (Number(i) !== Number(index)) {
              var _char2 = this.findLetter(this.cells[i].value);

              this.cells[i].color = _char2.point_color;
              this.cells[i].font_color = _char2.font_color;
              this.cells[i].selected = false;
            }
          }
        }
      }, {
        key: "keyboardClicked",
        value: function keyboardClicked(letter) {
          var _char3 = this.findLetter(letter);

          this.cells[this.selected_cell].value = _char3.name;
          this.cells[this.selected_cell].color = _char3.point_color;
          this.cells[this.selected_cell].font_color = _char3.font_color;
          this.cells[this.selected_cell].point_value = _char3.points;
          this.show_keyboard = false;
          this.keyboard_enabled = false;
          this.letter_selected = true;
          this.used_letters.push(_char3); // Hide keyboard letter

          _char3.opacity = this.key_opacity_used;
          _char3.enabled = false;
          this.updateUserLetters();
        }
      }, {
        key: "updateUserLetters",
        value: function updateUserLetters() {
          for (var i in this.cells) {
            this.user_letters[i].value = this.cells[i].value;
            this.user_letters[i].color = this.cells[i].color;
            this.user_letters[i].font_color = this.cells[i].font_color;
            this.cells[i].value = '';
            this.cells[i].color = this.cell_color;
            this.cells[i].selected = false;
          }
        }
      }, {
        key: "userLetterClicked",
        value: function userLetterClicked(index) {
          for (var i in this.cells) {
            if (this.cells[i].value === '') {
              this.cells[i].value = this.user_letters[index].value;
              this.cells[i].color = this.user_letters[index].color;
              this.cells[i].font_color = this.user_letters[index].font_color;
              this.cells[i].user_letter_index = index;

              var _char4 = this.findLetter(this.user_letters[index].value);

              this.cells[i].point_value = _char4.points;
              break;
            }
          }

          this.user_letters[index].enabled = false;
        }
      }, {
        key: "controlClicked",
        value: function controlClicked(control) {
          if (control === 'BACKSPACE' && this.cells[0].value !== '') {
            for (var i = this.cells.length - 1; i >= 0; i--) {
              if (this.cells[i].value !== '') {
                this.user_letters[this.cells[i].user_letter_index].color = this.cells[i].color;
                this.user_letters[this.cells[i].user_letter_index].font_color = this.cells[i].font_color;
                this.user_letters[this.cells[i].user_letter_index].enabled = true;
                this.cells[i].value = '';
                this.cells[i].color = this.cell_color;
                break;
              }
            }
          } else if (control === 'ENTER' && this.cells[4].value !== '') {
            var submitted_word = '';
            this.cells.forEach(function (cell) {
              submitted_word += cell.value;
            });
            this.submitGuess(submitted_word);
          } else if (control === 'GO-BACK') {
            this.reset(this.current_word, false, false); // Reset most recently selected letter

            var most_recent_char = this.used_letters[this.used_letters.length - 1];
            most_recent_char.opacity = this.key_opacity_free;
            most_recent_char.enabled = true;
            this.used_letters.pop();
          }
        }
      }, {
        key: "reset",
        value: function reset(new_word, hard_reset, animate) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            var i, _char5;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    for (i in this.cells) {
                      _char5 = this.findLetter(new_word[i]);
                      this.cells[i].value = _char5.name;
                      this.cells[i].color = _char5.point_color;
                      this.cells[i].font_color = _char5.font_color;
                      this.cells[i].user_letter_index = null;
                      this.cells[i].point_value = _char5.points;
                    }

                    this.user_letters.forEach(function (letter) {
                      letter.value = '';
                      letter.color = _this2.user_letter_color;
                      letter.enabled = true;
                    });
                    this.letter_selected = false;
                    this.show_keyboard = true;
                    this.console_text_hidden = true;
                    this.copied_to_clipboard_hidden = true;
                    this.current_word = new_word; // this.keyboard_opacity = this.keyboard_opacity;

                    if (hard_reset) {
                      // Reset keyboard keys
                      this.keyboard_top.forEach(function (key) {
                        key.enabled = true;
                        key.opacity = _this2.key_opacity_free;
                      });
                      this.keyboard_middle.forEach(function (key) {
                        key.enabled = true;
                        key.opacity = _this2.key_opacity_free;
                      });
                      this.keyboard_bottom.forEach(function (key) {
                        key.enabled = true;
                        key.opacity = _this2.key_opacity_free;
                      });
                      this.correct_words = [];
                      this.used_letters = [];
                      this.starting_word = new_word;
                      this.total_score = 0;
                      this.game_over_correct_words_formatted = '';
                    } // APPLY ANIMATIONS
                    // if (animate) {
                    //   // Apply BOUNCE animation to each letter with a 0.1s delay
                    //   for (let i = 1; i < this.cells.length + 1; i++) {
                    //     document.getElementById(`container_cell${i}`).classList.add('bounce');
                    //     await this.delay(50);
                    //     document.getElementById(`point_value_cell${i}`).classList.add('point_animation');
                    //     await this.delay(100);
                    //   }
                    //   // Wait for each letter to bounce (5 letters * 0.1s)
                    //   await this.delay(300);
                    //   // Remove BOUNCE animation from each letter
                    //   for (let i = 1; i < this.cells.length + 1; i++) {
                    //     document.getElementById(`container_cell${i}`).classList.remove('bounce');
                    //   }
                    //   await this.delay(800);
                    //   // Remove POINT_ANIMATION from each cell
                    //   for (let i = 1; i < this.cells.length + 1; i++) {
                    //     document.getElementById(`point_value_cell${i}`).classList.remove('point_animation');
                    //   }
                    // }


                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "calculateScore",
        value: function calculateScore(word) {
          var score = 0;

          for (var i = 0; i < word.length; i++) {
            var letter = this.findLetter(word.charAt(i));
            score += letter.points;
          }

          return score;
        }
      }, {
        key: "chooseRandomWord",
        value: function chooseRandomWord() {
          var random_word;
          var vowel_count; // Keep choosing a new word until its score is <= 13 points and doesn't have more than 2 vowels

          do {
            random_word = this.initial_word_list[Math.floor(Math.random() * this.initial_word_list.length)]; // If there are 3+ vowels in the word, re-pick random word

            var vowels = ['A', 'E', 'I', 'O', 'U'];
            vowel_count = 0;

            for (var i = 0; i < random_word.length; i++) {
              if (vowels.includes(random_word.charAt(i))) {
                vowel_count++;
              }
            }
          } while (this.calculateScore(random_word) > 13 || vowel_count >= 3);

          return random_word; // return this.initial_word_list[Math.floor(Math.random() * this.initial_word_list.length)];
          // return 'TAKES';
          // return 'LCHFZ';
          // return 'WITCH';
          // return 'ZACUH';
          // return 'PAZZY'
        }
      }, {
        key: "submitGuess",
        value: function submitGuess(word, autoguess) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var i;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!(this.correct_words.includes(word) || word === this.starting_word)) {
                      _context4.next = 6;
                      break;
                    }

                    this.console_text = 'Word already guessed';
                    this.console_text_hidden = false; // document.getElementById(`console`).classList.add('console_animation_in');
                    // document.getElementById(`console`).classList.remove('console_animation_out');
                    // await this.delay(2000);
                    // document.getElementById(`console`).classList.remove('console_animation_in');
                    // document.getElementById(`console`).classList.add('console_animation_out');
                    // if (autoguess) {
                    //   console.log('');
                    //   this.reset(this.current_word, false, false);
                    // }

                    return _context4.abrupt("return", false);

                  case 6:
                    if (!this.word_list.includes(word)) {
                      _context4.next = 11;
                      break;
                    }

                    this.successfulGuess(word);
                    return _context4.abrupt("return", true);

                  case 11:
                    this.game_over_correct_words = this.correct_words;

                    for (i in this.game_over_correct_words) {
                      this.game_over_correct_words_formatted += this.game_over_correct_words[i];
                      this.game_over_correct_words_formatted += ' ';
                    }

                    this.keyboard_enabled = false;
                    this.youLose(true, word);
                    return _context4.abrupt("return", false);

                  case 16:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "successfulGuess",
        value: function successfulGuess(word) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var points, placeholder_score, total_score_temp, highest_word_updated, high_score_updated, i, letters_remaining;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.correct_words.push(word);
                    this.current_word = word;
                    points = this.calculateScore(word);
                    placeholder_score = this.total_score;
                    total_score_temp = this.total_score += points; // Check to see if submitted word has a higher score than the user's record

                    highest_word_updated = false;

                    if (points > this.user.highest_scoring_word.score) {
                      this.user.highest_scoring_word.word = word;
                      this.user.highest_scoring_word.score = points;
                      highest_word_updated = true;
                    } // Check to see if total score is higher than the user's high score


                    high_score_updated = false;

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

                    this.reset(word, false, true); // ANIMATE SCORE GOING UP

                    this.total_score = placeholder_score;
                    i = 0;

                  case 13:
                    if (!(i < points)) {
                      _context5.next = 20;
                      break;
                    }

                    this.total_score++;
                    _context5.next = 17;
                    return this.delay(70);

                  case 17:
                    i++;
                    _context5.next = 13;
                    break;

                  case 20:
                    // If user enters the 26th letter, show You Win screen
                    letters_remaining = 26 - this.used_letters.length;

                    if (letters_remaining === 0) {
                      this.youWin(true, true);
                    }

                  case 22:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "findLetter",
        value: function findLetter(_char6) {
          var find_top = this.keyboard_top.find(function (letter) {
            return letter.name === _char6;
          });
          var find_middle = this.keyboard_middle.find(function (letter) {
            return letter.name === _char6;
          });
          var find_bottom = this.keyboard_bottom.find(function (letter) {
            return letter.name === _char6;
          });

          if (find_top) {
            return find_top;
          } else if (find_middle) {
            return find_middle;
          } else if (find_bottom) {
            return find_bottom;
          }
        }
      }, {
        key: "tutorialModal",
        value: function tutorialModal(open) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (open) {
                      this.tutorial_modal_open = true; // document.getElementById(`app`).classList.add('blur-background_in');
                      // document.getElementById(`app`).classList.remove('blur-background_out');
                      // let tutorial_modal = document.getElementById('tutorial_modal');
                      // tutorial_modal.classList.add('modal_fadein');
                      // tutorial_modal.classList.add('modal_appear');
                      // tutorial_modal.classList.remove('modal_fadeout');
                    } else {
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

                  case 1:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "navigateTutorialModalStep",
        value: function navigateTutorialModalStep(next) {
          next ? this.tutorial_step_num++ : this.tutorial_step_num--;
        }
      }, {
        key: "navigateStatsModalTabs",
        value: function navigateStatsModalTabs(next) {
          next ? this.stats_step_num++ : this.stats_step_num--;
        }
      }, {
        key: "statsModal",
        value: function statsModal(open) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    if (open) {
                      this.stats_modal_open = true; // document.getElementById(`app`).classList.add('blur-background_in');
                      // document.getElementById(`app`).classList.remove('blur-background_out');
                      // let stats_modal = document.getElementById('stats_modal');
                      // stats_modal.classList.add('modal_fadein');
                      // stats_modal.classList.add('modal_appear');
                      // stats_modal.classList.remove('modal_fadeout');
                    } else {
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

                  case 1:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "contactModal",
        value: function contactModal(open) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    if (open) {
                      this.contact_modal_open = true; // document.getElementById(`app`).classList.add('blur-background_in');
                      // document.getElementById(`app`).classList.remove('blur-background_out');
                      // let contact_modal = document.getElementById('contact_modal');
                      // contact_modal.classList.add('modal_fadein');
                      // contact_modal.classList.add('modal_appear');
                      // contact_modal.classList.remove('modal_fadeout');
                    } else {
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

                  case 1:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "wordsModal",
        value: function wordsModal(open) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    if (open) {
                      this.words_modal_open = true; // document.getElementById(`app`).classList.add('blur-background_in');
                      // document.getElementById(`app`).classList.remove('blur-background_out');
                      // let words_modal = document.getElementById('words_modal');
                      // words_modal.classList.add('modal_fadein');
                      // words_modal.classList.add('modal_appear');
                      // words_modal.classList.remove('modal_fadeout');
                    } else {
                      // document.getElementById(`app`).classList.remove('blur-background_in');
                      // document.getElementById(`app`).classList.add('blur-background_out');
                      // let words_modal = document.getElementById('words_modal');
                      // words_modal.classList.remove('modal_fadein');
                      // words_modal.classList.remove('modal_appear');
                      // words_modal.classList.add('modal_fadeout');
                      // Give time for blur_out animation to perform
                      // await this.delay(200);
                      // let word_list = document.getElementById(`word_list`);
                      // word_list.scrollTop = 0;
                      this.words_modal_open = false;
                    }

                  case 1:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "giveUpModal",
        value: function giveUpModal(open, give_up) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var i;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    if (open) {
                      this.giveup_modal_open = true; // document.getElementById(`app`).classList.add('blur-background_in');
                      // document.getElementById(`app`).classList.remove('blur-background_out');
                      // let giveup_modal = document.getElementById('giveup_modal');
                      // giveup_modal.classList.add('modal_fadein');
                      // giveup_modal.classList.add('modal_appear');
                      // giveup_modal.classList.remove('modal_fadeout');
                    } else {
                      // document.getElementById(`app`).classList.remove('blur-background_in');
                      // document.getElementById(`app`).classList.add('blur-background_out');
                      // let giveup_modal = document.getElementById('giveup_modal');
                      // giveup_modal.classList.remove('modal_fadein');
                      // giveup_modal.classList.remove('modal_appear');
                      // giveup_modal.classList.add('modal_fadeout');
                      // Give time for blur_out animation to perform
                      // await this.delay(200);
                      // let word_list = document.getElementById(`word_list`);
                      // word_list.scrollTop = 0;
                      this.giveup_modal_open = false;

                      if (give_up) {
                        this.game_over_correct_words = this.correct_words;

                        for (i in this.game_over_correct_words) {
                          this.game_over_correct_words_formatted += this.game_over_correct_words[i];
                          this.game_over_correct_words_formatted += ' ';
                        }

                        this.keyboard_enabled = false;
                        this.youLose(true, null);
                      }
                    } // let giveUp = confirm('Are you sure you want to give up?');
                    // if (giveUp) {
                    //   this.game_over_correct_words = this.correct_words;
                    //   for (let i in this.game_over_correct_words) {
                    //     this.game_over_correct_words_formatted += this.game_over_correct_words[i];
                    //     this.game_over_correct_words_formatted += ' ';
                    //   }
                    //   this.keyboard_enabled = false;
                    //   this.youLose(true, null);
                    // }


                  case 1:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "shareScore",
        value: function shareScore() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var copyText, newVariable;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    copyText = "Final Score: ".concat(this.final_score, "\n").concat(this.percentile_data.percentile_graphic, "\nBetter than ").concat(this.percentile_data.percentile, "% of players");
                    newVariable = window.navigator;

                    if (newVariable && newVariable.share) {
                      newVariable.navigator.share({
                        title: 'Take5',
                        text: copyText
                      }).then(function () {
                        console.log(copyText);
                      })["catch"](console.error);
                    } else {
                      // Copies to clipboard
                      this.appSvc.copyTextToClipboard(copyText);
                      this.copied_to_clipboard_hidden = false; // document.getElementById(`copied_to_clipboard`).classList.add('console_animation_in');
                      // document.getElementById(`copied_to_clipboard`).classList.remove('console_animation_out');
                      // await this.delay(2000);
                      // document.getElementById(`copied_to_clipboard`).classList.remove('console_animation_in');
                      // document.getElementById(`copied_to_clipboard`).classList.add('console_animation_out');
                    }

                  case 3:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "youLose",
        value: function youLose(open, losing_word) {
          if (open) {
            this.you_lose_open = true;
            this.final_score = this.total_score;

            if (losing_word !== null) {
              this.losing_word = "\"".concat(losing_word, "\" is not a word...");
            } else {
              // user gave up
              this.losing_word = 'You Lose!';
            } // document.getElementById(`app`).classList.add('blur-background_in');
            // document.getElementById(`app`).classList.remove('blur-background_out');
            // let stats_modal = document.getElementById('you_lose_modal');
            // stats_modal.classList.add('modal_fadein');
            // stats_modal.classList.add('modal_appear');
            // stats_modal.classList.remove('modal_fadeout');


            this.gameOver();
          } else {
            this.you_lose_open = false; // document.getElementById(`app`).classList.remove('blur-background_in');
            // document.getElementById(`app`).classList.add('blur-background_out');
            // let stats_modal = document.getElementById('you_lose_modal');
            // stats_modal.classList.remove('modal_fadein');
            // stats_modal.classList.remove('modal_appear');
            // stats_modal.classList.add('modal_fadeout');

            var new_random_word = this.chooseRandomWord();
            this.reset(new_random_word, true, false);
          }
        }
      }, {
        key: "youWin",
        value: function youWin(open, perfect_game) {
          if (open) {
            this.you_win_open = true;
            this.final_score = this.total_score;
            this.gameOver(true);
          } else {
            this.you_win_open = true;
            var new_random_word = this.chooseRandomWord();
            this.reset(new_random_word, true, false);
          }
        }
      }, {
        key: "gameOver",
        value: function gameOver(perfect_game) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var now, game_data, update_user, updated_user_highs, new_game_num, new_total_points_scored, new_average_score, new_perfect_games_count, new_all_time_high_score, sorted_raw_scores;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    this.todays_game_data = null; // Add game session to LocalStorage

                    now = new Date();
                    game_data = {
                      timestamp: this.datepipe.transform(now, 'yyyy-MM-dd HH:mm:ss z'),
                      correct_words: this.game_over_correct_words,
                      score: this.final_score,
                      starting_word: this.starting_word
                    }; // If there is data in localStorage, assign it to update_user, and then clear it from localStorage

                    updated_user_highs = JSON.parse(window.localStorage.getItem('updated_user_highs'));

                    if (updated_user_highs) {
                      update_user = updated_user_highs;
                      window.localStorage.removeItem('updated_user_highs');
                    } else {
                      update_user = this.user;
                    }

                    update_user.total_points_scored += this.final_score;
                    update_user.games_played_num = update_user.games_played_num + 1;
                    update_user.average_score_per_game = Number((Math.round(update_user.total_points_scored / update_user.games_played_num * 100) / 100).toFixed(2));
                    _context12.next = 10;
                    return this.firebaseSvc.updateUserData(update_user);

                  case 10:
                    // Add User ID to the Game Data and send to Firebase
                    game_data.id = this.userID_LocalStorage;
                    _context12.next = 13;
                    return this.firebaseSvc.updateGameLog(game_data);

                  case 13:
                    // Add game session data to All Time Game Data
                    new_game_num = this.all_time_data.games_num + 1;
                    new_total_points_scored = this.all_time_data.total_points_scored + game_data.score;
                    new_average_score = Number((Math.round(new_total_points_scored / new_game_num * 100) / 100).toFixed(2));

                    if (perfect_game) {
                      new_perfect_games_count = this.all_time_data.perfect_game_count + 1;
                    } else {
                      new_perfect_games_count = this.all_time_data.perfect_game_count;
                    }

                    if (game_data.score > this.all_time_data.all_time_high_score) {
                      new_all_time_high_score = game_data.score;
                    } else {
                      new_all_time_high_score = this.all_time_data.all_time_high_score;
                    }

                    _context12.next = 20;
                    return this.firebaseSvc.postAllTimeData(new_game_num, new_average_score, new_total_points_scored, new_all_time_high_score, new_perfect_games_count);

                  case 20:
                    _context12.next = 22;
                    return this.firebaseSvc.getAllTimeData();

                  case 22:
                    this.all_time_data = _context12.sent;
                    // this.todays_game_data = await this.firebaseSvc.getTodaysGameData(this.datepipe.transform(now, 'yyyy-MM-dd'));
                    // Calculate score percentile from all scores for today's word
                    sorted_raw_scores = [];

                    if (this.todays_game_data.raw_scores) {
                      sorted_raw_scores = this.todays_game_data.raw_scores.sort(function (a, b) {
                        return a - b;
                      });
                    }

                    this.percentile_data = this.appSvc.getPercentileData(sorted_raw_scores, this.final_score);

                  case 26:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "generateWordListData",
        value: function generateWordListData(word_list) {
          var _this3 = this;

          var total_points = 0;
          var high_scoring_words = [];
          var highest_scoring_word = '';
          var high_point_cutoff = 25;
          word_list.forEach(function (word) {
            var score = _this3.calculateScore(word);

            total_points += score; // Find highest scoring word

            if (score > _this3.calculateScore(highest_scoring_word)) {
              highest_scoring_word = word;
            } // Collect words whose score is above high_point_cutoff


            if (score > high_point_cutoff) {
              high_scoring_words.push(word);
            }
          });
          console.log("Average word score: ".concat((Math.round(total_points / word_list.length * 100) / 100).toFixed(2), " points"));
          console.log("Words with ".concat(high_point_cutoff, "+ points: ").concat(high_scoring_words.sort()));
          console.log("Highest scoring word: \"".concat(highest_scoring_word, "\" - ").concat(this.calculateScore(highest_scoring_word), " points"));
        }
      }, {
        key: "delay",
        value: function delay(ms) {
          return new Promise(function (resolve) {
            return setTimeout(resolve, ms);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
      }, {
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]
      }, {
        type: _services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keyup', ['$event'])], AppComponent.prototype, "keyEvent", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/services/app.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/app.service.ts ***!
    \*****************************************/

  /*! exports provided: AppService */

  /***/
  function srcAppServicesAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppService", function () {
      return AppService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppService = /*#__PURE__*/function () {
      function AppService() {
        _classCallCheck(this, AppService);

        this.updatedTodaysGameData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(AppService, [{
        key: "generateRandomID",
        value: function generateRandomID() {
          var S4 = function S4() {
            return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
          };

          return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
        }
        /**
         *
         * FUNCTIONS FOR CALCULATING THE MOVE POTENTIALS FOR A STARTING WORD
         * @returns
         */

      }, {
        key: "findAllPotentialOpeningMoves",
        value: function findAllPotentialOpeningMoves(word_list) {
          var valid_words = [];
          var myString = "ZONAL";
          var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

          for (var _i = 0, _alphabet = alphabet; _i < _alphabet.length; _i++) {
            var each = _alphabet[_i];

            for (var i = 0; i < myString.length; i++) {
              var temp = this.setCharAt(myString, i, each);
              var permutations = this.permut(temp);

              var _iterator = _createForOfIteratorHelper(permutations),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var p = _step.value;

                  if (word_list.includes(p)) {
                    valid_words.push(p);
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }

          return valid_words;
        } // Find all Permutations of a string

      }, {
        key: "permut",
        value: function permut(string) {
          if (string.length < 2) return string; // This is our break condition

          var permutations = []; // This array will hold our permutations

          for (var i = 0; i < string.length; i++) {
            var _char7 = string[i]; // Cause we don't want any duplicates:

            if (string.indexOf(_char7) != i) // if char was used already
              continue; // skip it this time

            var remainingString = string.slice(0, i) + string.slice(i + 1, string.length); //Note: you can concat Strings via '+' in JS

            var _iterator2 = _createForOfIteratorHelper(this.permut(remainingString)),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var subPermutation = _step2.value;
                permutations.push(_char7 + subPermutation);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }

          return permutations;
        }
      }, {
        key: "setCharAt",
        value: function setCharAt(str, index, chr) {
          if (index > str.length - 1) return str;
          return str.substring(0, index) + chr + str.substring(index + 1);
        }
      }, {
        key: "getMean",
        value: function getMean(scores) {
          var sum = 0;
          scores.forEach(function (num) {
            sum += num;
          });
          var mean = sum / scores.length;
          return mean;
        }
      }, {
        key: "getMedian",
        value: function getMedian(scores) {
          scores.sort(function (a, b) {
            return a - b;
          });
          var median;

          if (scores.length % 2 !== 0) {
            median = scores[Math.floor(scores.length / 2)];
          } else {
            var mid1 = scores[scores.length / 2 - 1];
            var mid2 = scores[scores.length / 2];
            median = (mid1 + mid2) / 2;
          }

          return median;
        }
      }, {
        key: "getMode",
        value: function getMode(scores) {
          var modes = [],
              count = [],
              i,
              number,
              maxIndex = 0;

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
      }, {
        key: "getPercentile",
        value: function getPercentile(scores, user_score) {
          // Remove user_score from raw_scores
          // const index = scores.indexOf(user_score);
          // if (index > -1) {
          //   scores.splice(index, 1);
          // }
          return 100 * scores.reduce(function (acc, v) {
            return acc + (v < user_score ? 1 : 0) + (v === user_score ? 0.5 : 0);
          }, 0) / scores.length;
        }
      }, {
        key: "getPercentileData",
        value: function getPercentileData(sorted_raw_scores, final_score) {
          var percentile_data = {
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
          percentile_data.mode = this.getMode(sorted_raw_scores); // Remove user_score from raw_scores

          var index = sorted_raw_scores.indexOf(final_score);

          if (index > -1) {
            sorted_raw_scores.splice(index, 1);
          }

          percentile_data.high_score =
          /*final_score > sorted_raw_scores[sorted_raw_scores.length - 1] ? final_score : */
          sorted_raw_scores[sorted_raw_scores.length - 1];
          percentile_data.low_score =
          /*final_score < sorted_raw_scores[0] ? final_score : */
          sorted_raw_scores[0];
          percentile_data.percentile = this.getPercentile(sorted_raw_scores, final_score).toFixed(1); // if (final_score > sorted_raw_scores[sorted_raw_scores.length - 1]) {
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
      }, {
        key: "getPercentileColor",
        value: function getPercentileColor(percentile) {
          var rounded_value = Math.round(percentile / 10) * 10 / 10;
          var color;

          if (rounded_value <= 2) {
            color = 'red';
          } else if (rounded_value > 2 && rounded_value <= 6) {
            color = '#f38d00'; // orange
          } else {
            color = '#0c8a1d'; // green
          }

          return color;
        }
      }, {
        key: "getPercentileGraphic",
        value: function getPercentileGraphic(low_score, high_score, percentile, final_score) {
          var graphic;

          if (final_score < low_score) {
            graphic = final_score + ' ';
          } else {
            graphic = low_score + ' ';
          }

          var rounded_value = Math.round(percentile / 10) * 10 / 10;
          var color_value;

          if (rounded_value <= 2) {
            color_value = '🟥';
          } else if (rounded_value > 2 && rounded_value <= 6) {
            color_value = '🟧';
          } else {
            color_value = '🟩';
          }

          if (low_score >= final_score) {
            rounded_value = 1;
            color_value = '💀';
          } else if (final_score > high_score) {
            rounded_value = 10;
            color_value = '⭐️';
          } else if (high_score === final_score) {
            rounded_value = 10;
          }

          for (var i = 1; i <= 10; i++) {
            if (color_value === '⭐️') {
              graphic += color_value;
            } else if (rounded_value === 10) {
              graphic += color_value;
            } else {
              if (i <= rounded_value) {
                graphic += color_value;
              } else {
                graphic += '⬜️';
              }
            }
          }

          graphic += ' ' + (final_score > high_score ? final_score : high_score) + '';
          return graphic;
        }
      }, {
        key: "getSpecialCase",
        value: function getSpecialCase(low_score, high_score, percentile, final_score) {
          var special_case = {
            message: null,
            color: null
          };

          if (final_score < low_score) {
            special_case.message = 'You currently have the lowest score for today\'s word';
            special_case.color = '#c61100';
          } else if (final_score === low_score) {
            special_case.message = 'You are currently tied for the lowest score for today\'s word';
            special_case.color = '#c61100';
          } else if (final_score > high_score) {
            special_case.message = 'You currently have the highest score for today\'s word!!';
            special_case.color = 'green';
          } else if (final_score === high_score) {
            special_case.message = 'You are currently tied for the highest score for today\'s word!!';
            special_case.color = 'green';
          }

          return special_case;
        }
      }, {
        key: "copyTextToClipboard",
        value: function copyTextToClipboard(text) {
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
      }, {
        key: "fallbackCopyTextToClipboard",
        value: function fallbackCopyTextToClipboard(text) {
          var textArea = document.createElement("textarea");
          textArea.value = text; // Avoid scrolling to bottom

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
          }

          document.body.removeChild(textArea);
        }
      }]);

      return AppService;
    }();

    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AppService);
    /***/
  },

  /***/
  "./src/app/services/firebase.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/firebase.service.ts ***!
    \**********************************************/

  /*! exports provided: FirebaseService */

  /***/
  function srcAppServicesFirebaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseService", function () {
      return FirebaseService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.esm.js");
    /* harmony import */


    var firebase_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase/analytics */
    "./node_modules/firebase/analytics/dist/index.esm.js");
    /* harmony import */


    var firebase_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase/database */
    "./node_modules/firebase/database/dist/index.esm.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js"); // Import the functions you need from the SDKs you need


    var FirebaseService = /*#__PURE__*/function () {
      function FirebaseService(appSvc, datepipe) {
        _classCallCheck(this, FirebaseService);

        this.appSvc = appSvc;
        this.datepipe = datepipe; // Your web app's Firebase configuration
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

      _createClass(FirebaseService, [{
        key: "initializeApp",
        value: function initializeApp() {
          // Initialize Firebase
          this.app = Object(firebase_app__WEBPACK_IMPORTED_MODULE_2__["initializeApp"])(this.firebaseConfig);
          this.database = Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["getDatabase"])(this.app);
        }
      }, {
        key: "getAnalytics",
        value: function getAnalytics() {
          var analytics = Object(firebase_analytics__WEBPACK_IMPORTED_MODULE_3__["getAnalytics"])(this.app);
        }
      }, {
        key: "createNewUser",
        value: function createNewUser(id) {
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
      }, {
        key: "getUserData",
        value: function getUserData(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var dbRef, retrieved_user;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    dbRef = Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["ref"])(this.database);
                    _context13.next = 3;
                    return Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["get"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["child"])(dbRef, "/users/".concat(id))).then(function (snapshot) {
                      if (snapshot.exists()) {
                        retrieved_user = snapshot.val();
                      } else {
                        retrieved_user = null;
                      }
                    })["catch"](function (error) {
                      console.error(error);
                      return error;
                    });

                  case 3:
                    console.log('🚨GET USER DATA🚨');
                    return _context13.abrupt("return", retrieved_user);

                  case 5:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "updateUserData",
        value: function updateUserData(userData) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
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

                  case 2:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "updateGameLog",
        value: function updateGameLog(game_data) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var timestamp, randomID, today, today_str, todays_game_data, updated_todays_game_data;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    timestamp = this.datepipe.transform(game_data.timestamp, 'yyyy-MM-dd HH:mm:ss z'); // Add Game Data to Game Log

                    randomID = this.appSvc.generateRandomID();
                    Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["set"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["ref"])(this.database, "/games_played/".concat(game_data.id, "/").concat(timestamp, " GAME").concat(randomID)), {
                      timestamp: game_data.timestamp,
                      score: game_data.score,
                      correct_words: game_data.correct_words,
                      starting_word: game_data.starting_word
                    });
                    console.log('🚨UPDATE GAME LOG🚨');
                    today = new Date();
                    today_str = this.datepipe.transform(today, 'yyyy-MM-dd'); // Update data for Today in "daily_game_data"

                    _context15.next = 8;
                    return this.getTodaysGameData(today_str);

                  case 8:
                    todays_game_data = _context15.sent;
                    todays_game_data.games_played_num += 1;
                    todays_game_data.total_points_scored += game_data.score;
                    todays_game_data.average_score = Number((Math.round(todays_game_data.total_points_scored / todays_game_data.games_played_num * 100) / 100).toFixed(2));
                    !todays_game_data.raw_scores ? todays_game_data.raw_scores = [game_data.score] : todays_game_data.raw_scores.push(game_data.score);
                    _context15.next = 15;
                    return Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["set"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["ref"])(this.database, "/daily_game_data/".concat(today_str, "_game_data/")), {
                      today_word: todays_game_data.today_word,
                      games_played_num: todays_game_data.games_played_num,
                      total_points_scored: todays_game_data.total_points_scored,
                      average_score: todays_game_data.average_score,
                      raw_scores: todays_game_data.raw_scores
                    });

                  case 15:
                    console.log('🚨UPDATE TODAYS GAME DATA🚨'); // Emit Updated TODAYS GAME DATA back to app.component

                    updated_todays_game_data = {
                      today_word: todays_game_data.today_word,
                      games_played_num: todays_game_data.games_played_num,
                      total_points_scored: todays_game_data.total_points_scored,
                      average_score: todays_game_data.average_score,
                      raw_scores: todays_game_data.raw_scores
                    };
                    this.appSvc.updatedTodaysGameData.emit(updated_todays_game_data);

                  case 18:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "getTodaysGameData",
        value: function getTodaysGameData(todays_date) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var dbRef, todays_game_data, sorted_scores;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    dbRef = Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["ref"])(this.database);
                    _context16.next = 3;
                    return Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["get"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["child"])(dbRef, "/daily_game_data/".concat(todays_date, "_game_data/"))).then(function (snapshot) {
                      if (snapshot.exists()) {
                        todays_game_data = snapshot.val();
                      } else {
                        todays_game_data = null;
                      }
                    })["catch"](function (error) {
                      console.error(error);
                      return error;
                    });

                  case 3:
                    console.log('🚨GET TODAYS GAME DATA🚨');

                    if (todays_game_data) {
                      if (todays_game_data.raw_scores) {
                        sorted_scores = todays_game_data.raw_scores.sort(function (a, b) {
                          return a - b;
                        });
                        todays_game_data.high_score = sorted_scores[todays_game_data.raw_scores.length - 1];
                      } else {
                        todays_game_data.high_score = '-';
                      }
                    }

                    return _context16.abrupt("return", todays_game_data);

                  case 6:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "postNewDayGameData",
        value: function postNewDayGameData(todays_date, random_word) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["set"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["ref"])(this.database, "/daily_game_data/".concat(todays_date, "_game_data")), {
                      today_word: random_word,
                      games_played_num: 0,
                      total_points_scored: 0,
                      average_score: 0
                    });
                    console.log('🚨POST NEW DAY GAME DATA🚨');

                  case 2:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "getAllTimeData",
        value: function getAllTimeData() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            var dbRef, all_time_data;
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    dbRef = Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["ref"])(this.database);
                    _context18.next = 3;
                    return Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["get"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["child"])(dbRef, "/all_time_data/")).then(function (snapshot) {
                      if (snapshot.exists()) {
                        all_time_data = snapshot.val();
                      } else {
                        all_time_data = null;
                      }
                    })["catch"](function (error) {
                      console.error(error);
                      return error;
                    });

                  case 3:
                    console.log('🚨GET ALL TIME GAME DATA🚨');
                    return _context18.abrupt("return", all_time_data);

                  case 5:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "postAllTimeData",
        value: function postAllTimeData(games_num, average_score, total_points_scored, all_time_high_score, perfect_game_count) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["set"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_4__["ref"])(this.database, "/all_time_data/"), {
                      games_num: games_num,
                      average_score: average_score,
                      total_points_scored: total_points_scored,
                      all_time_high_score: all_time_high_score,
                      perfect_game_count: perfect_game_count
                    });
                    console.log('🚨POST ALL TIME GAME DATA🚨');

                  case 2:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }]);

      return FirebaseService;
    }();

    FirebaseService.ctorParameters = function () {
      return [{
        type: _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]
      }];
    };

    FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FirebaseService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/loudimuro/Desktop/Personal Projects/take5/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map