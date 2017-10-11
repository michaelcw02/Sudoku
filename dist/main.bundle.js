webpackJsonp(["main"],{

/***/ "../../../../../client/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../client/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../client/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);", ""]);

// module
exports.push([module.i, "@font-face {\r\n    font-family: Comfortaa;\r\n    src: url(" + __webpack_require__("../../../../../client/comfortaa.ttf") + ");\r\n}\r\n\r\n#title {\r\n    text-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);\r\n    font-family: 'Comfortaa', cursive;\r\n    font-weight: bold;\r\n}\r\n\r\n#options {\r\n    padding-top: 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <br>\r\n    <h1 id=\"title\">SUDOKU</h1>\r\n</div>\r\n<div class=\"container-fluid\" id=\"sudokuBox\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\" id=\"options\">\r\n            <app-options></app-options>\r\n        </div>\r\n        <div class=\"col-sm-9\" id=\"divPrincipal\">\r\n            <div id=\"screen\">\r\n                <app-sudoku></app-sudoku>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../client/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.fetchDataFromServer = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../client/app/app.component.html"),
        styles: [__webpack_require__("../../../../../client/app/app.component.css")]
    })
], AppComponent);

//This is like the main
//This is where all decorators are 
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../client/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_tooltip__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../client/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_sudoku_sudoku_component__ = __webpack_require__("../../../../../client/app/components/sudoku/sudoku.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_options_options_component__ = __webpack_require__("../../../../../client/app/components/options/options.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_load_sudoku_service__ = __webpack_require__("../../../../../client/app/services/load-sudoku.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_save_sudoku_service__ = __webpack_require__("../../../../../client/app/services/save-sudoku.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_communication_service__ = __webpack_require__("../../../../../client/app/services/communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_sudoku_service__ = __webpack_require__("../../../../../client/app/services/sudoku.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_timer_timer_component__ = __webpack_require__("../../../../../client/app/components/timer/timer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_sudoku_sudoku_component__["a" /* SudokuComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_options_options_component__["a" /* OptionsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_timer_timer_component__["a" /* TimerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__services_communication_service__["a" /* CommunicationService */],
            __WEBPACK_IMPORTED_MODULE_12__services_sudoku_service__["a" /* SudokuService */],
            __WEBPACK_IMPORTED_MODULE_10__services_save_sudoku_service__["a" /* SaveSudokuService */],
            __WEBPACK_IMPORTED_MODULE_9__services_load_sudoku_service__["a" /* LoadSudokuService */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../client/app/components/options/options.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#saveHeader,\r\n#loadHeader,\r\n#resignHeader {\r\n    background-color: #337AB7;\r\n    color: #FFFFFF;\r\n    text-align: center;\r\n}\r\n\r\n#howToHeader {\r\n    background-color: #0A9BD8;\r\n    color: #FFFFFF;\r\n    text-align: center;\r\n}\r\n\r\nbutton {\r\n    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);\r\n    font-family: 'Comfortaa', cursive;\r\n}\r\n\r\nselect {\r\n    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/options/options.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<app-timer></app-timer>-->\r\n<div id=\"howToPlay\">\r\n    <button class=\"btn btn-info btn-block \" id=\"showHowToPlay\" (click)=\"openModal(howToPlayModal)\"> HOW TO PLAY </button>\r\n</div>\r\n<br>\r\n\r\n<div class=\"input-group\">\r\n    <select class=\"form-control \" id=\"difficulty\">\r\n                            <option selected>Easy</option>\r\n                            <option>Medium</option>\r\n                            <option>Hard</option>\r\n                        </select>\r\n    <div id=\"level \">\r\n        <button class=\"btn btn-primary btn-block \" id=\"selectDifficulty\" (click)=\"openModal(resignModal)\"> SELECT DIFFICULTY </button>\r\n    </div>\r\n</div>\r\n<br>\r\n\r\n<div id=\"save\">\r\n    <button class=\"btn btn-primary btn-block\" id=\"saveGame\" (click)=\"openModal(template)\"> SAVE GAME <span class=\"glyphicon glyphicon-floppy-disk\"></span></button>\r\n</div>\r\n<br>\r\n\r\n<div id=\"load\">\r\n    <button class=\"btn btn-primary btn-block\" id=\"loadGame\" (click)=\"openModal(loadModal)\"> LOAD GAME <span class=\"glyphicon glyphicon-open\"></span></button>\r\n</div>\r\n<br>\r\n\r\n<div id=\"generate\">\r\n    <button class=\"btn btn-warning btn-block\" id=\"generateGame\" (click)=\"generate() \"> GENERATE GAME </button>\r\n</div>\r\n<br>\r\n\r\n<div id=\"reset\">\r\n    <button class=\"btn btn-danger btn-block\" id=\"resetGame\" (click)=\"reset() \"> RESET GAME </button>\r\n</div>\r\n<br>\r\n\r\n<div id=\"solution \">\r\n    <button class=\"btn btn-success btn-block \" id=\"showSolution \" (click)=\"solve() \"> SOLVE BY BACKTRACK</button>\r\n</div>\r\n<br>\r\n\r\n<div id=\"solutionStepByStep\">\r\n    <button class=\"btn btn-info btn-block \" id=\"showSolutionStepByStep \" (click)=\"solveStepByStep() \"> SOLVE BY BACKTRACK STEP BY STEP</button>\r\n</div>\r\n<br>\r\n\r\n<div id=\"nakedSingle\">\r\n    <button class=\"btn btn-danger btn-block \" id=\"showNakedSingleSolution \" (click)=\"solveByNakedSingle() \"> SOLVE BY NAKED SINGLE</button>\r\n</div>\r\n<br>\r\n\r\n<div id=\"hiddenSingle\">\r\n    <button class=\"btn btn-warning btn-block \" id=\"showHiddenSingleSolution \" (click)=\"solveByHiddenSingle() \"> SOLVE BY HIDDEN SINGLE</button>\r\n</div>\r\n<br>\r\n\r\n\r\n<!-- *********************************************\r\n                    MODALS\r\n    **********************************************-->\r\n\r\n<!--  HOW TO PLAY  -->\r\n<ng-template #howToPlayModal>\r\n    <div class=\"modal-header\" id=\"howToHeader\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">&times;</button>\r\n        <h3 class=\"modal-title\" id=\"myModalTitle\"><i class=\"fa fa-question-circle\"></i> HOW TO PLAY</h3>\r\n    </div>\r\n\r\n    <div class=\"modal-body\" id=\"howToBody\">\r\n        <ul>\r\n            <li>\r\n                <h4>Drag and drop the numbers from the right pane into the grid.</h4>\r\n            </li>\r\n            <li>\r\n                <h4>Double-click in the number to delete it.</h4>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</ng-template>\r\n\r\n\r\n<!--  SAVE  -->\r\n<ng-template #template>\r\n    <div class=\"modal-header\" id=\"saveHeader\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">&times;</button>\r\n        <h3 class=\"modal-title\" id=\"myModalTitle\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> SAVE THIS GAME</h3>\r\n    </div>\r\n\r\n    <div class=\"modal-body\" id=\"saveBody\">\r\n        <form role=\"form\" onsubmit=\"return false;\" id=\"formSaveGame\">\r\n            <div class=\"form-group\" id=\"groupUsername\">\r\n                <h4><label for=\"username\">User name:</label></h4>\r\n                <input type=\"text\" class=\"form-control\" id=\"username\" autofocus=\"true\" placeholder=\"Your name\" maxlength=\"30\" required/>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <button type=\"submit\" class=\"btn btn-primary\" id=\"send\" (click)=\"saveSudoku()\">SAVE <span class=\"glyphicon glyphicon-floppy-disk\"></span></button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</ng-template>\r\n\r\n\r\n<!--  RESIGN  -->\r\n<ng-template #resignModal>\r\n    <div class=\"modal-header\" id=\"resignHeader\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">&times;</button>\r\n        <h3 class=\"modal-title\" id=\"myModalTitle\">ARE YOU SURE YOU WANT TO RESIGN?</h3>\r\n    </div>\r\n\r\n    <div class=\"modal-body\" id=\"resignBody\">\r\n        <button id=\"btnConfirm\" class=\"btn btn-primary\" (click)=\"changeDifficulty()\">Yes, I want to resign</button>\r\n        <button id=\"btnCancel\" class=\"btn btn-warning\" (click)=\"modalRef.hide()\">No, I will keep struggling</button>\r\n    </div>\r\n</ng-template>\r\n\r\n\r\n<!--  LOAD  -->\r\n<ng-template #loadModal>\r\n    <div class=\"modal-header\" id=\"loadHeader\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">&times;</button>\r\n        <h3 class=\"modal-title\" id=\"myModalTitle\"><span class=\"glyphicon glyphicon-open\"></span> LOAD YOUR GAMES</h3>\r\n    </div>\r\n\r\n    <div class=\"modal-body\" id=\"loadBody\">\r\n        <form role=\"form\" onsubmit=\"return false;\" id=\"formLoadGame\">\r\n            <div class=\"form-group\" id=\"groupUsername\">\r\n                <label for=\"loadUserName\">User name:</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"loadUserName\" autofocus=\"true\" placeholder=\"Your name\" maxlength=\"30\" required/>\r\n            </div>\r\n\r\n            <div class=\"form-group\" id=\"games\">\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <button type=\"submit\" class=\"btn btn-primary\" id=\"load\" (click)=\"loadGames()\">LOAD GAMES <span class=\"glyphicon glyphicon-open\"></span></button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../client/app/components/options/options.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sudoku_service__ = __webpack_require__("../../../../../client/app/services/sudoku.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_communication_service__ = __webpack_require__("../../../../../client/app/services/communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OptionsComponent = (function () {
    function OptionsComponent(modalService, communicationService, sudokuService) {
        var _this = this;
        this.modalService = modalService;
        this.communicationService = communicationService;
        this.sudokuService = sudokuService;
        this.communicationService.getDifficulty$.subscribe(function () { return _this.getDifficulty(); });
        this.communicationService.loadGames$.subscribe(function () { return _this.loadGames(); });
    }
    OptionsComponent.prototype.ngOnInit = function () {
    };
    OptionsComponent.prototype.solve = function () {
        this.communicationService.callSolve();
    };
    OptionsComponent.prototype.generate = function () {
        this.communicationService.callGenerate();
    };
    OptionsComponent.prototype.reset = function () {
        this.communicationService.callReset();
    };
    OptionsComponent.prototype.changeDifficulty = function () {
        var difficulty = __WEBPACK_IMPORTED_MODULE_4_jquery__('#difficulty option:selected').val();
        this.communicationService.callChangeDifficulty(difficulty);
        this.modalRef.hide();
    };
    OptionsComponent.prototype.getDifficulty = function () {
        return __WEBPACK_IMPORTED_MODULE_4_jquery__('#difficulty option:selected').val();
    };
    OptionsComponent.prototype.saveSudoku = function () {
        var userName = __WEBPACK_IMPORTED_MODULE_4_jquery__('#username').val();
        this.communicationService.callSaveSudoku(userName);
        this.modalRef.hide();
    };
    OptionsComponent.prototype.loadGames = function () {
        var _this = this;
        var userName = __WEBPACK_IMPORTED_MODULE_4_jquery__('#loadUserName').val();
        this.sudokuService.getGames(userName, function (err, data) {
            _this.renderGames(JSON.parse(data._body).matches);
        });
    };
    OptionsComponent.prototype.renderGames = function (data) {
        var _this = this;
        data.forEach(function (x, i) { return __WEBPACK_IMPORTED_MODULE_4_jquery__('#games').append(__WEBPACK_IMPORTED_MODULE_4_jquery__('<div class="loadMatchPanel" id="loadedMatch">' +
            "<p class='info'> Match #" + (i + 1) + " </p>" +
            "<p class='info'> Date: " + _this.beautifyDate(x.date) + "</p>" +
            "</div> <br>").click(function () { return _this.renderSavedGame(x.grid); })); });
    };
    OptionsComponent.prototype.beautifyDate = function (date) {
        date = new Date(date);
        return date ? " " + (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " at " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ""
            : "Date not available";
    };
    OptionsComponent.prototype.renderSavedGame = function (grid) {
        this.communicationService.callRenderGame(grid);
        this.modalRef.hide();
    };
    OptionsComponent.prototype.solveByNakedSingle = function () {
        this.communicationService.callSolveByNakedSingle();
    };
    OptionsComponent.prototype.solveByHiddenSingle = function () {
        this.communicationService.callSolveByHiddenSingle();
    };
    OptionsComponent.prototype.solveStepByStep = function () {
        this.communicationService.callSolveStepByStep();
    };
    OptionsComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    return OptionsComponent;
}());
OptionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-options',
        template: __webpack_require__("../../../../../client/app/components/options/options.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/options/options.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_communication_service__["a" /* CommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_communication_service__["a" /* CommunicationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_sudoku_service__["a" /* SudokuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_sudoku_service__["a" /* SudokuService */]) === "function" && _c || Object])
], OptionsComponent);

var _a, _b, _c;
//# sourceMappingURL=options.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/sudoku/sudoku.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#headerError {\r\n    background-color: #c60000;\r\n    color: #FFFFFF;\r\n}\r\n\r\n#headerWait {\r\n    background-color: #2f9b14;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.modal-body {\r\n    text-align: center;\r\n}\r\n\r\n#sudoku {\r\n    box-shadow: 10px 10px 5px #888888;\r\n}\r\n\r\nbody {\r\n    font-family: 'Comfortaa', cursive;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/sudoku/sudoku.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"sudoku\">{{jsonSudoku}}</div>\r\n\r\n<ng-template #errorModal id=\"modalError\">\r\n    <div class=\"modal-header\" id=\"headerError\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">&times;</button>\r\n        <h3 class=\"modal-title\" id=\"myModalTitle\"><i class=\"fa fa-warning\"></i> Error</h3>\r\n    </div>\r\n    <div class=\"modal-body\" id=\"myModalMessage\">\r\n        <br>\r\n        <h4 id=\"messageError\"></h4>\r\n        <br>\r\n    </div>\r\n</ng-template>\r\n\r\n\r\n<ng-template #waitModal id=\"waitModal\">\r\n    <div class=\"modal-header\" id=\"headerWait\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">&times;</button>\r\n        <h3 class=\"modal-title\" id=\"myModalTitle\"> Wait...</h3>\r\n    </div>\r\n    <div class=\"modal-body\" id=\"myModalMessage\">\r\n        <br>\r\n        <h4 id=\"messageWait\"></h4>\r\n        <br>\r\n    </div>\r\n</ng-template>\r\n\r\n\r\n<ng-template #storeModal>\r\n    <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">&times;</button>\r\n        <h4 class=\"modal-title\" id=\"myModalTitle\">THERE IS A GAME SAVED IN LOCAL STORAGE, DO YOU WANT TO LOAD IT?</h4>\r\n    </div>\r\n\r\n    <div class=\"modal-body\" id=\"myModalMessage\">\r\n        <button id=\"btnConfirm\" class=\"btn btn-primary\" (click)=\"loadStorageGame()\">Yes, I want to load it</button>\r\n        <button id=\"btnCancel\"  class=\"btn btn-warning\"  (click)=\"modalRef.hide()\">No, I want another game</button>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../client/app/components/sudoku/sudoku.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SudokuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_communication_service__ = __webpack_require__("../../../../../client/app/services/communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sudoku_service__ = __webpack_require__("../../../../../client/app/services/sudoku.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_load_sudoku_service__ = __webpack_require__("../../../../../client/app/services/load-sudoku.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_save_sudoku_service__ = __webpack_require__("../../../../../client/app/services/save-sudoku.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_js_sudoku__ = __webpack_require__("../../../../../client/assets/js/sudoku.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_js_option__ = __webpack_require__("../../../../../client/assets/js/option.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_js_painter__ = __webpack_require__("../../../../../client/assets/js/painter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_js_sudokuGenerator__ = __webpack_require__("../../../../../client/assets/js/sudokuGenerator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets_js_sudokuHelper__ = __webpack_require__("../../../../../client/assets/js/sudokuHelper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__assets_js_sudokuSolver__ = __webpack_require__("../../../../../client/assets/js/sudokuSolver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__assets_js_sudokuSolverStep__ = __webpack_require__("../../../../../client/assets/js/sudokuSolverStep.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__assets_js_nakedSingleSolver__ = __webpack_require__("../../../../../client/assets/js/nakedSingleSolver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__assets_js_hiddenSingleSolver__ = __webpack_require__("../../../../../client/assets/js/hiddenSingleSolver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__assets_js_utils__ = __webpack_require__("../../../../../client/assets/js/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__assets_js_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__assets_js_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var SudokuComponent = (function () {
    function SudokuComponent(sudokuService, saveSudokuService, loadSudokuService, communicationService, modalService) {
        var _this = this;
        this.sudokuService = sudokuService;
        this.saveSudokuService = saveSudokuService;
        this.loadSudokuService = loadSudokuService;
        this.communicationService = communicationService;
        this.modalService = modalService;
        this.sudoku = new __WEBPACK_IMPORTED_MODULE_5__assets_js_sudoku__["a" /* Sudoku */](9, 9);
        this.sudokuSolver = new __WEBPACK_IMPORTED_MODULE_10__assets_js_sudokuSolver__["a" /* SudokuSolver */]();
        this.sudokuHelper = new __WEBPACK_IMPORTED_MODULE_9__assets_js_sudokuHelper__["a" /* SudokuHelper */]();
        this.sudokuSolverStep = new __WEBPACK_IMPORTED_MODULE_11__assets_js_sudokuSolverStep__["a" /* SudokuSolverStep */]();
        this.sudokuGenerator = new __WEBPACK_IMPORTED_MODULE_8__assets_js_sudokuGenerator__["a" /* SudokuGenerator */]();
        this.nakedSingleSolver = new __WEBPACK_IMPORTED_MODULE_12__assets_js_nakedSingleSolver__["a" /* NakedSingleSolver */]();
        this.hiddenSingleSolver = new __WEBPACK_IMPORTED_MODULE_13__assets_js_hiddenSingleSolver__["a" /* HiddenSingleSolver */]();
        this.communicationService.solve$.subscribe(function () { return _this.solve(); });
        this.communicationService.solveStepByStep$.subscribe(function () { return _this.solveStepByStep(); });
        this.communicationService.reset$.subscribe(function () { return _this.reset(); });
        this.communicationService.solveByNakedSingle$.subscribe(function () { return _this.solveByNakedSingle(); });
        this.communicationService.solveByHiddenSingle$.subscribe(function () { return _this.solveByHiddenSingle(); });
        this.communicationService.generate$.subscribe(function () {
            _this.sudoku.clean();
            _this.generate();
        });
        this.communicationService.changeDifficulty$.subscribe(function (difficulty) { return _this.changeDifficulty(difficulty); });
        this.communicationService.saveSudoku$.subscribe(function (username) { return _this.saveSudoku(username); });
        this.communicationService.renderGame$.subscribe(function (grid) { return _this.renderGame(grid); });
    }
    SudokuComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.onunload = function () { return _this.saveSudokuService.storeSudoku(_this.sudoku); };
        var sketch = function (p) {
            _this.painter = new __WEBPACK_IMPORTED_MODULE_7__assets_js_painter__["a" /* Painter */](60, p);
            var clicked = false;
            var options = [];
            p.preload = function () {
                Promise.resolve(_this.changeDifficulty('easy'))
                    .then(function () { return _this.showStorageModal(); });
            };
            p.setup = function () {
                _this.canvas = p.createCanvas(700, 545);
                _this.canvas.parent('screen');
                p.background(220);
                _this.painter.paintSudoku(_this.sudoku);
                for (var i = 1; i <= _this.sudoku.rows; i++)
                    options.push(new __WEBPACK_IMPORTED_MODULE_6__assets_js_option__["a" /* Option */](p.width - 80, i * 60 - 30, i, p));
            };
            p.draw = function () {
                p.background(179, 182, 165);
                _this.painter.paintSudoku(_this.sudoku); //Paints every 60fps
                drawOptions();
                if (_this.solveBySteps)
                    _this.solveBySteps = !_this.sudokuSolverStep.solve(_this.sudoku);
            };
            function drawOptions() {
                options.forEach(function (x) { return x.show(); });
            }
            p.mouseDragged = function () {
                for (var i = 0; i < options.length; i++)
                    if (options[i].collides(p.mouseX, p.mouseY)) {
                        options[i].x = p.mouseX;
                        options[i].y = p.mouseY;
                    }
            };
            p.mouseReleased = function () {
                options.forEach(function (x) {
                    if (x.collides(p.mouseX, p.mouseY)) {
                        var mapX = Math.floor(p.map(p.mouseX, 0, 545, 0, 9));
                        var mapY = Math.floor(p.map(p.mouseY, 0, p.height, 0, 9));
                        var data = { sudoku: _this.sudoku, row: mapY, col: mapX, value: x.value };
                        var result = _this.sudokuHelper.validOption(data);
                        if (result == "allowed") {
                            if (_this.sudoku.getSpot(mapY, mapX).state == "possible")
                                _this.sudoku.setValue(mapY, mapX, x.value);
                            else
                                result == undefined ? result : _this.openErrorModal(result); //Modal-Alert if is not valid
                        }
                        else
                            result == undefined ? result : _this.openErrorModal(result); //Modal-Alert if is not valid
                        x.restart();
                    }
                });
            };
            p.mousePressed = function () {
                var mapX = Math.floor(p.map(p.mouseX, 0, 545, 0, 9));
                var mapY = Math.floor(p.map(p.mouseY, 0, p.height, 0, 9));
                if (Object(__WEBPACK_IMPORTED_MODULE_14__assets_js_utils__["range"])(_this.sudoku.rows).includes(mapY) && Object(__WEBPACK_IMPORTED_MODULE_14__assets_js_utils__["range"])(_this.sudoku.cols).includes(mapX))
                    if (_this.sudoku.getSpot(mapY, mapX).state == "possible")
                        _this.sudoku.setValue(mapY, mapX);
            };
        };
        var myP5 = new p5(sketch);
    };
    SudokuComponent.prototype.showStorageModal = function () {
        if (this.loadSudokuService.retriveSudoku())
            this.modalRef = this.modalService.show(this.storeModal);
    };
    SudokuComponent.prototype.loadStorageGame = function () {
        var grid = this.loadSudokuService.retriveSudoku();
        this.sudoku.fillGrid(grid);
        this.modalRef.hide();
    };
    SudokuComponent.prototype.solve = function () {
        var _this = this;
        //this will become a promise, so it will use .then and .catch
        (!navigator.onLine) ? this.sudokuSolver.solve(this.sudoku)
            : this.sudokuService.getSolution(this.sudoku, function (err, res) {
                err ? _this.sudokuSolver.solve(_this.sudoku)
                    : _this.sudoku.load(JSON.parse(res._body).grid);
            });
        //return this.sudokuSolver.solve(this.sudoku);
    };
    SudokuComponent.prototype.solveStepByStep = function () {
        this.cleanUserInput();
        this.solveBySteps = true;
    };
    SudokuComponent.prototype.solveByNakedSingle = function () {
        var _this = this;
        this.cleanUserInput();
        var interval = setInterval(function () {
            if (_this.nakedSingleSolver.solve(_this.sudoku))
                clearInterval(interval);
        }, 1000);
    };
    SudokuComponent.prototype.solveByHiddenSingle = function () {
        var _this = this;
        this.cleanUserInput();
        var interval = setInterval(function () {
            if (_this.hiddenSingleSolver.solve(_this.sudoku))
                clearInterval(interval);
        }, 1000);
    };
    SudokuComponent.prototype.generate = function () {
        this.sudokuGenerator.generate(this.sudoku);
        this.sudokuHelper.generateNeighbors(this.sudoku);
    };
    SudokuComponent.prototype.reset = function () {
        this.solveBySteps = false;
        return this.sudokuHelper.resetSudoku(this.sudoku);
    };
    SudokuComponent.prototype.getDifficulty = function () {
        return this.communicationService.callGetDifficulty();
    };
    SudokuComponent.prototype.changeDifficulty = function (level) {
        var _this = this;
        this.sudokuService.getSudoku(level, function (err, data) {
            _this.sudoku.load(JSON.parse(data._body).grid);
            _this.sudokuHelper.generateNeighbors(_this.sudoku);
            _this.painter.paintSudoku(_this.sudoku);
        });
    };
    SudokuComponent.prototype.renderGame = function (grid) {
        this.sudoku.load(grid);
        this.sudokuHelper.generateNeighbors(this.sudoku);
        this.painter.paintSudoku(this.sudoku);
    };
    SudokuComponent.prototype.saveSudoku = function (user) {
        this.sudokuService.saveSudoku(user, this.sudoku);
    };
    /* Only clears values set by the user */
    SudokuComponent.prototype.cleanUserInput = function () {
        this.sudokuHelper.resetSudoku(this.sudoku, function (z) { return z == "possible"; });
    };
    SudokuComponent.prototype.openErrorModal = function (result) {
        this.modalRef = this.modalService.show(this.errorModal);
        switch (result) {
            case "rowException":
                $("#messageError").text("The number already exists in that row.");
                break;
            case "columnException":
                $("#messageError").text("The number already exists in that column.");
                break;
            case "subMatrixException":
                $("#messageError").text("The number already exists in that sub-grid.");
                break;
            case "rowMatrixException":
                $("#messageError").text("The number already exists in that row and sub-grid.");
                break;
            case "colMatrixException":
                $("#messageError").text("The number already exists in that column and sub-grid.");
                break;
            case "rowColException":
                $("#messageError").text("The number already exists in that row and column.");
                break;
            case "allException":
                $("#messageError").text("The number already exists in that row, column and sub-grid.");
                break;
            default:
                $("#messageError").text("Invalid space.");
                break;
        }
    };
    SudokuComponent.prototype.openWaitModal = function (result) {
        this.modalRef = this.modalService.show(this.waitModal);
        $("#messageWait").text(result);
    };
    return SudokuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('storeModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */]) === "function" && _a || Object)
], SudokuComponent.prototype, "storeModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('errorModal'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */]) === "function" && _b || Object)
], SudokuComponent.prototype, "errorModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('waitModal'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */]) === "function" && _c || Object)
], SudokuComponent.prototype, "waitModal", void 0);
SudokuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-sudoku',
        template: __webpack_require__("../../../../../client/app/components/sudoku/sudoku.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/sudoku/sudoku.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_sudoku_service__["a" /* SudokuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_sudoku_service__["a" /* SudokuService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_save_sudoku_service__["a" /* SaveSudokuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_save_sudoku_service__["a" /* SaveSudokuService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_load_sudoku_service__["a" /* LoadSudokuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_load_sudoku_service__["a" /* LoadSudokuService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__services_communication_service__["a" /* CommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_communication_service__["a" /* CommunicationService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _h || Object])
], SudokuComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=sudoku.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/timer/timer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header,\r\n.timer {\r\n    text-align: center;\r\n    font-size: 25px;\r\n}\r\n\r\n.buttons {\r\n    text-align: center;\r\n    font-size: 15px;\r\n}\r\n\r\nbutton {\r\n    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);\r\n    font-family: 'Comfortaa', cursive;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/timer/timer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">Time:\r\n    <span class=\"timer\" id=\"timer\"></span>\r\n</div>\r\n<div class=\"buttons\">\r\n    <button class=\"btn btn-info\" (click)=\"startTimer()\" id=\"button1\">Start</button>\r\n    <button class=\"btn btn-info\" (click)=\"stopTimer()\" id=\"button2\">Stop</button>\r\n    <button class=\"btn btn-info\" (click)=\"restartTimer()\" id=\"button3\">Restart</button>\r\n</div>"

/***/ }),

/***/ "../../../../../client/app/components/timer/timer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimerComponent = (function () {
    function TimerComponent() {
        this.worker = null;
    }
    TimerComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__("#timer").text("00:00");
    };
    TimerComponent.prototype.startTimer = function () {
        if (typeof (Worker) !== "undefined") {
            if (this.worker == null) {
                this.worker = new Worker("../../assets/js/timer.js");
            }
            this.worker.onmessage = function (e) { return __WEBPACK_IMPORTED_MODULE_1_jquery__("timer").text(e.data); };
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1_jquery__("timer").text("Browser does not support Web Workers");
        }
    };
    TimerComponent.prototype.stopTimer = function () {
        this.worker.terminate();
    };
    TimerComponent.prototype.restartTimer = function () {
        this.worker.terminate();
        this.worker = null;
    };
    return TimerComponent;
}());
TimerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-timer',
        template: __webpack_require__("../../../../../client/app/components/timer/timer.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/timer/timer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TimerComponent);

//# sourceMappingURL=timer.component.js.map

/***/ }),

/***/ "../../../../../client/app/services/communication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunicationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CommunicationService = (function () {
    function CommunicationService() {
        // Observable string sources
        this.solveCallSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.resetCallSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.generateCallSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.getDifficultyCallSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.changeDifficultyCallSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.saveSudokuCallSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.loadGamesCallSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.renderGameCallSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.solveByNakedSingleCallSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.solveByHiddenSingleCallSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.solveStepByStepCallSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        // Observable string streams
        this.solve$ = this.solveCallSource.asObservable();
        this.reset$ = this.resetCallSource.asObservable();
        this.generate$ = this.generateCallSource.asObservable();
        this.getDifficulty$ = this.getDifficultyCallSource.asObservable();
        this.changeDifficulty$ = this.changeDifficultyCallSource.asObservable();
        this.saveSudoku$ = this.saveSudokuCallSource.asObservable();
        this.loadGames$ = this.loadGamesCallSource.asObservable();
        this.renderGame$ = this.renderGameCallSource.asObservable();
        this.solveByNakedSingle$ = this.solveByNakedSingleCallSource.asObservable();
        this.solveByHiddenSingle$ = this.solveByHiddenSingleCallSource.asObservable();
        this.solveStepByStep$ = this.solveStepByStepCallSource.asObservable();
    }
    // Service message commands
    CommunicationService.prototype.callSolve = function () {
        this.solveCallSource.next();
    };
    CommunicationService.prototype.callSolveStepByStep = function () {
        this.solveStepByStepCallSource.next();
    };
    CommunicationService.prototype.callSolveByNakedSingle = function () {
        this.solveByNakedSingleCallSource.next();
    };
    CommunicationService.prototype.callSolveByHiddenSingle = function () {
        this.solveByHiddenSingleCallSource.next();
    };
    CommunicationService.prototype.callGenerate = function () {
        this.generateCallSource.next();
    };
    CommunicationService.prototype.callReset = function () {
        this.resetCallSource.next();
    };
    CommunicationService.prototype.callGetDifficulty = function () {
        this.getDifficultyCallSource.next();
    };
    CommunicationService.prototype.callChangeDifficulty = function (difficulty) {
        this.changeDifficultyCallSource.next(difficulty);
    };
    CommunicationService.prototype.callSaveSudoku = function (userName) {
        this.saveSudokuCallSource.next(userName);
    };
    CommunicationService.prototype.callLoadSudoku = function (userName) {
        this.loadGamesCallSource.next(userName);
    };
    CommunicationService.prototype.callRenderGame = function (grid) {
        this.renderGameCallSource.next(grid);
    };
    return CommunicationService;
}());
CommunicationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], CommunicationService);

//# sourceMappingURL=communication.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/load-sudoku.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadSudokuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoadSudokuService = (function () {
    function LoadSudokuService(http) {
        this.http = http;
        console.log('Sudoku Loader Service Up');
    }
    LoadSudokuService.prototype.getSudoku = function (level, callback) {
        this.http.get("api/sudoku/level/" + level)
            .subscribe(function (res) { return callback(undefined, res); }, function (err) { return callback(err); });
    };
    LoadSudokuService.prototype.getGames = function (userName, callback) {
        console.log("Estoy en loadSudokuService");
        this.http.get("api/sudoku/games/" + userName)
            .subscribe(function (res) { return callback(undefined, res); }, function (err) { return callback(err); });
    };
    LoadSudokuService.prototype.retriveSudoku = function () {
        return JSON.parse(localStorage.getItem("sudoku"));
    };
    return LoadSudokuService;
}());
LoadSudokuService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], LoadSudokuService);

var _a;
//# sourceMappingURL=load-sudoku.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/save-sudoku.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveSudokuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SaveSudokuService = (function () {
    function SaveSudokuService(http) {
        this.http = http;
        console.log('Sudoku Saver Service Up');
    }
    SaveSudokuService.prototype.saveSudoku = function (user, sudoku) {
        console.log("Trying to save from save-sudoku.service.ts");
        var gridmin = this.minifyJsonGrid(sudoku.grid);
        var data = { name: user, grid: gridmin, level: sudoku.level };
        this.http.post("api/sudoku", data)
            .subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); });
    };
    SaveSudokuService.prototype.minifyJsonGrid = function (grid) {
        var obj = grid.map(function (x) { return x; });
        var result = Array.from(new Array(9), function (x, i) {
            return Array.from(new Array(9), function (x, j) {
                return { value: obj[i][j].value, state: obj[i][j].state };
            });
        });
        return result;
    };
    SaveSudokuService.prototype.storeSudoku = function (sudoku) {
        var obj = this.minifyJsonGrid(sudoku.grid);
        localStorage.setItem("sudoku", JSON.stringify(obj));
    };
    return SaveSudokuService;
}());
SaveSudokuService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], SaveSudokuService);

var _a;
//# sourceMappingURL=save-sudoku.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/sudoku.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SudokuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SudokuService = (function () {
    function SudokuService(http) {
        this.http = http;
        console.log('Sudoku Service is up');
    }
    //Saving
    SudokuService.prototype.saveSudoku = function (user, sudoku) {
        console.log("Trying to save from save-sudoku.service.ts");
        var gridmin = this.minifyJsonGrid(sudoku.grid);
        var data = { name: user, grid: gridmin, level: sudoku.level };
        this.http.post("api/sudoku", data)
            .subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); });
    };
    //Loading
    SudokuService.prototype.getSudoku = function (level, callback) {
        this.http.get("api/sudoku/level/" + level)
            .subscribe(function (res) { return callback(undefined, res); }, function (err) { return callback(err); });
    };
    SudokuService.prototype.getGames = function (userName, callback) {
        console.log("Estoy en loadSudokuService");
        this.http.get("api/sudoku/games/" + userName)
            .subscribe(function (res) { return callback(undefined, res); }, function (err) { return callback(err); });
    };
    SudokuService.prototype.getSolution = function (sudoku, callback) {
        var minGrid = this.minifyJsonGrid(sudoku.grid);
        this.http.post('api/sudoku/solve/', { grid: minGrid })
            .subscribe(function (res) { return callback(undefined, res); }, function (err) { return callback(err); });
    };
    //This should come from the helper class, but it will imply importing it
    SudokuService.prototype.minifyJsonGrid = function (grid) {
        var obj = grid.map(function (x) { return x; });
        var result = Array.from(new Array(9), function (x, i) {
            return Array.from(new Array(9), function (x, j) {
                return { value: obj[i][j].value, state: obj[i][j].state };
            });
        });
        return result;
    };
    return SudokuService;
}());
SudokuService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], SudokuService);

var _a;
//# sourceMappingURL=sudoku.service.js.map

/***/ }),

/***/ "../../../../../client/assets/js/hiddenSingleSolver.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sudokuHelper__ = __webpack_require__("../../../../../client/assets/js/sudokuHelper.js");


class HiddenSingleSolver {

	constructor(){
		this.sudokuHelper = new __WEBPACK_IMPORTED_MODULE_0__sudokuHelper__["a" /* SudokuHelper */]();
	}

	solve(sudoku){
		if(!this.hasEmptyValues(sudoku)) //Si ya todos los spots tienen un numero es que esta solucionado
            return true;
        else{
            //Se recorre por fila buscando las que solo tienen una posible solucion, y si la tienen se les pone
            range(sudoku.rows).forEach( x => this.spotsUniqueInRow(sudoku, x))
        }
	}

    spotsUniqueInRow(sudoku, row){
        let spots = sudoku.grid[row].reduce((z, x) => x.value == 0 ?
            z.concat({ spot: x, possibilities: x.getPossibilities() }) : z
        , [])
        spots.forEach(x => {
            let res = x.possibilities.filter(e => this.existsOnlyOnce(e, spots))
            x.spot.value = res.length == 1 ? res[0] : x.spot.value
            x.spot.state = res.length == 1 ? "heuristic" : x.spot.state
        })
    }

    existsOnlyOnce(elem, spots){
        return spots.reduce( (z, x) => x.possibilities.includes(elem) ? ++z : z ,0) == 1
    }

	//Pasar a funcional
	hasEmptyValues(sudoku){ //Auxiliar to see if sudoku is solved, this should be in sudoku helper
		for(let i = 0; i < sudoku.rows; i++)
			for(let j = 0; j < sudoku.cols; j++)
				if(sudoku.getValue(i, j) === 0)
					return true;
		return false;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HiddenSingleSolver;


/***/ }),

/***/ "../../../../../client/assets/js/nakedSingleSolver.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sudokuHelper__ = __webpack_require__("../../../../../client/assets/js/sudokuHelper.js");


class NakedSingleSolver {

	constructor(){
		this.sudokuHelper = new __WEBPACK_IMPORTED_MODULE_0__sudokuHelper__["a" /* SudokuHelper */]();
	}

	solve(sudoku){
		if(!this.hasEmptyValues(sudoku)) //Si ya todos los spots tienen un numero es que esta solucionado
            return true;
        else{
            let uniques = this.sudokuHelper.getSpotsWithOnePossibility(sudoku) //Only spots who has one possibility available
            if(!uniques.length) //Ya no se puede seguir usando naked single
                return true
            uniques.forEach( x => x.setValueAndState(x.getPossibilities().shift(), "heuristic"))
            return false;
        }
	}


	//Pasar a funcional
	hasEmptyValues(sudoku){ //Auxiliar to see if sudoku is solved, this should be in sudoku helper
		for(let i = 0; i < sudoku.rows; i++)
			for(let j = 0; j < sudoku.cols; j++)
				if(sudoku.getValue(i, j) === 0)
					return true;
		return false;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NakedSingleSolver;


/***/ }),

/***/ "../../../../../client/assets/js/option.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Option {

    constructor(x, y, value, lib) {
        this.value = value; //The idea is when a spot has value 0 will be a empty square
        this.x = x;
        this.y = y;
        this.original = { x: this.x, y: this.y }
        this.lib = lib;
    }

    show() {
        this.lib.textSize(24);
        this.lib.textFont("Comfortaa");
        this.lib.fill(0, 102, 153);
        this.lib.ellipse(this.x, this.y, 50, 50);
        this.lib.fill(255);
        this.lib.text(this.value, this.x - 5, this.y + 10);
    }

    restart() {
        this.x = this.original.x;
        this.y = this.original.y;
    }

    collides(x, y){
        return (this.lib.dist(this.x, this.y, x, y) < 40)
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Option;


/***/ }),

/***/ "../../../../../client/assets/js/painter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Painter { //This class wil be in charge of paint in the matrix

    constructor(dimension, lib) {
        this.dimension = dimension;
        this.lib = lib;
    }

  paintSudoku(sudoku){ 
    sudoku.grid.forEach( (x, i) => x.forEach( (y, j) => {
      this.lib.fill(255)
      this.lib.rect(i * this.dimension, j * this.dimension, this.dimension, this.dimension);
      this.paintBorderLines(i, j);  
    }))
    this.paintNumbers(sudoku);     
  }

  paintNumbers(sudoku){ //this one could be done with filter x.forEach.filter.forEach
    for(let i = 0; i < sudoku.rows; i++)
      for(let j = 0; j < sudoku.cols; j++)
        if(sudoku.getValue(i, j) !== 0)
          this.paintNumber(sudoku.getValue(i, j), i, j, sudoku.getSpot(i, j).state);
  }

  paintNumber(number, i, j, state = "possible") {
      this.lib.textSize(this.dimension - 10);
      this.lib.textFont("Comfortaa");
      switch(state){
          case "default" : 
            this.lib.fill(0);
            break;
          case "possible" : 
            this.lib.fill(0, 0, 255);
            break;
          case "heuristic" :
            this.lib.fill(0, 255, 0);
            break;
      }
      this.lib.text(number, j * this.dimension + 20, (i + 1) * this.dimension - 10);
  }

  paintBorderLines(row, col) {
      this.lib.fill(50);
      if (col % 3 === 0) {
          if (row % 3 === 0)
              this.lib.rect(row * this.dimension, col * this.dimension, 5, this.dimension);
          this.lib.rect(row * this.dimension, col * this.dimension, this.dimension, 5);
      } else {
          if (row % 3 === 0)
              this.lib.rect(row * this.dimension, col * this.dimension, 5, this.dimension);
      }
      if (col === 8)
          this.lib.rect(row * this.dimension, (col + 1) * this.dimension, this.dimension, 5);
      if (row === 8)
          this.lib.rect((row + 1) * this.dimension, col * this.dimension, 5, this.dimension);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Painter;


/***/ }),

/***/ "../../../../../client/assets/js/spot.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Spot {

    constructor(row, col, value = 0) {

        this.value = value; //The idea is when a spot has value 0 will be a empty square

        this.row = row; //Row position at the matrix
        this.col = col; //Column position at the matrix

        this.rowNeighbors = []; // Row neigbors
        this.colNeighbors = []; // Column neigbors
        this.subMatrixNeighbors = []; //The subsquare neighbors

        this.state = "possible";

        /* Three possible states:
           1- Default : The user can not change it
           2- Heuristic: The value was set by an algorithm(backtrack) or a technique(naked or hidden single) 
           3- Possible: The value was set by the user
        */

    }

    getAllNeighbors() {
        let neighbors = [];
        neighbors = neighbors.concat(this.rowNeighbors, this.colNeighbors, this.subMatrixNeighbors);
        return neighbors;
    }

    getPossibilities() {
        let possibilities = this.getAllNeighbors()
        possibilities = possibilities.map(x => x.value)
        return range(1, 10).filter(x => !possibilities.includes(x))
    }

    countPossibilities() {
        let poss = this.getPossibilities()
        return poss.length
    }


    setNeighbors(sudoku, subMatrix) {
        this.setRowNeighbors(sudoku);
        this.setColNeighbors(sudoku);
        this.setSubMatrixNeighbors(subMatrix);
    }


    setColNeighbors(sudoku) {
        range(sudoku.cols).forEach((x, i) => {
            if (i <= sudoku.cols - 1 && i !== this.row) this.colNeighbors.push(sudoku.getSpot(i, this.col))
        });
    }

    setRowNeighbors(sudoku) {
        range(sudoku.rows).forEach((x, j) => {
            if (j <= sudoku.rows - 1 && j !== this.col) this.rowNeighbors.push(sudoku.getSpot(this.row, j))
        });
    }

    setSubMatrixNeighbors(subMatrix) {
        range(subMatrix.length).forEach((x, i) => {
            if (subMatrix[i] !== this) this.subMatrixNeighbors.push(subMatrix[i])
        })
    }

    isValidOption(value) {
        let neighbors = this.getAllNeighbors();
        return !neighbors.some((n) => n.value === value);
    }

    setValueAndState(value = 0, state = "possible"){
        this.value = value
        this.state = state
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Spot;



/***/ }),

/***/ "../../../../../client/assets/js/sudoku.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spot__ = __webpack_require__("../../../../../client/assets/js/spot.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("../../../../../client/assets/js/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__utils__);



class Sudoku {

	constructor(rows, cols) {
		this.rows = rows;
		this.cols = cols;
		this.grid = Array.from(new Array(this.rows), (x, i) => {
			return Array.from(new Array(this.cols), (x, j) => new __WEBPACK_IMPORTED_MODULE_0__spot__["a" /* Spot */](i, j))
		})
	}

	getSpot(i, j) {
		return this.grid[i][j]
	}

	getValue(i, j) {
		return this.grid[i][j].value
	}

	setValue(i, j, value = 0) {
		this.grid[i][j].value = value
	}

	setSpot(i, j, value, state = "default") {
		this.grid[i][j].value = value;
		this.grid[i][j].state = state;
	}

	setValueAndState(i, j, value, state){
		this.grid[i][j].setValueAndState(value, state)
	}

	clean() {
		this.grid.forEach((x, i) => {
			x.forEach((elem, j) => {
				elem.value = 0;
				elem.state = "possible";
			})
		});
	}

	load(sudoku) {
		Object(__WEBPACK_IMPORTED_MODULE_1__utils__["range"])(this.rows).map((x, i) => {
			Object(__WEBPACK_IMPORTED_MODULE_1__utils__["range"])(this.cols).map((y, j) => 
				this.grid[i][j] = new __WEBPACK_IMPORTED_MODULE_0__spot__["a" /* Spot */](i, j, (sudoku[i][j].value != undefined) 
				? sudoku[i][j].value //For Saved Matches
				: sudoku[i][j])) //For Sudokus loaded by simple JSONS
		});
		Object(__WEBPACK_IMPORTED_MODULE_1__utils__["range"])(this.rows).map((x, i) => {
			Object(__WEBPACK_IMPORTED_MODULE_1__utils__["range"])(this.cols).map((y, j) => {
				this.grid[i][j].state = (sudoku[i][j].state != undefined) 
				? sudoku[i][j].state //For Saved Matches
				: sudoku[i][j] ? "default" : "possible" //For Sudokus loaded by simple JSONS
			})
		});
	}

	fillGrid(obj) {
		this.grid.forEach((x, i) => {
			x.forEach((spot, j) => {
				spot.value = obj[i][j].value;
				spot.state = obj[i][j].state;
			})
		});
	}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Sudoku;




/***/ }),

/***/ "../../../../../client/assets/js/sudokuGenerator.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sudoku__ = __webpack_require__("../../../../../client/assets/js/sudoku.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sudokuHelper__ = __webpack_require__("../../../../../client/assets/js/sudokuHelper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("../../../../../client/assets/js/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__utils__);




class SudokuGenerator {
    constructor() {
        this.sudokuHelper = new __WEBPACK_IMPORTED_MODULE_1__sudokuHelper__["a" /* SudokuHelper */]();
    }

    solve(sudoku) {
        if (!this.hasEmptyValues(sudoku)) //Si ya todos los spots tienen un numero es que esta solucionado
            return true;
        else {
            let curr = this.sudokuHelper.nextEmpty(sudoku); //Sacamos la fila y columna del primer spot vacio que encuentre
            let currentSpot = sudoku.getSpot(curr.row, curr.col); //Nos traemos al objeto en esa posicion
            let options = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //Array que contiene las opciones de cada spot
            while (options.length) { //Mientras exista alguna opción sin probar
                let o = options[Math.floor(Math.random() * options.length)]; //Elije aleatoriamente una opción del array
                if (currentSpot.isValidOption(o)) { //Si es valida (No esta en la fila, columna o submatriz)
                    currentSpot.setValueAndState(o, "heuristic") //The value was set by an algorithm     
                    if (this.solve(sudoku)) //Vuelva a ejecutar este algoritmo (Note que en la proxima llamada este spot ya no sera empty)
                        return true; //Si llega hasta aca es que lo soluciono
                }
                options = options.filter(x => x != o); //Elimina del array la opción ya que no fue válida
            }
            currentSpot.value = 0 //BACKTRACK
        }
        return false; //This return breaks recursion
    }

    hasEmptyValues(sudoku){ //Auxiliar to see if sudoku is solved, this should be in sudoku helper
        return sudoku.grid.some( x => x.some( y => y.value === 0) )
	}

    generate(sudoku) { //Este sudoku por parámetro ingresa vacío pero sale con sólo 17 spots de la solución
        //HACER FUNCIONAL
        let newSudoku = new __WEBPACK_IMPORTED_MODULE_0__sudoku__["a" /* Sudoku */](9, 9); // Se crea un sudoku vacío
        this.sudokuHelper.generateNeighbors(newSudoku); // Se le asignan los vecinos
        this.solve(newSudoku); //Se resuelve el newSudoku por completo
        //Para que asigne sólo 17 casillas por default
        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["range"])(17).forEach( i => {
            let row = Math.floor(Math.random() * 8);
            let col = Math.floor(Math.random() * 8);            
            let value = newSudoku.getValue(row, col); //Se obtiene el valor de un spot aleatorio del newSudoku (resuelto)
            if (!sudoku.getValue(row, col)) { //Verifica que ese spot en el sudoku (parámetro) no tenga valor (o sea que sea igual a 0)
                sudoku.setSpot(row, col, value); // Asigna el valor en el spot del sudoku (parámetro)
                console.log(i)
            }
        })
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SudokuGenerator;


/***/ }),

/***/ "../../../../../client/assets/js/sudokuHelper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* This class will help in some operations, to separate basic logic */

class SudokuHelper { 

    constructor() {
        this.subMatrix = [];
    }

    generateNeighbors(sudoku) {
        this.generateSubMatrix(sudoku);
        let grid = sudoku.grid;
        grid.forEach( x => x.forEach( elem => elem.setNeighbors(sudoku, this.findInSubMatrix(elem)) ))
    }

    resetSudoku(sudoku, fun = z => z == "possible" || z == "heuristic") {
        sudoku.grid.forEach((row, i) => {
            row.forEach((spot, j) => {
                if (fun(sudoku.getSpot(i, j).state))
                    sudoku.setValueAndState(i, j, 0, "possible") //Sets to zero
            })
        });
    }

    nextEmpty(sudoku) { //Please pass this to reduce
        let grid = sudoku.grid;
        let result = {};
        grid.forEach((x, i) => {
            x.forEach((elem, j) => {
                if (!sudoku.getValue(i, j)) result = { row: i, col: j }
            })
        })
        return result
    }

    findInSubMatrix(spot) {
        return this.subMatrix.find(elem => elem.indexOf(spot) > -1);
    }

    getSpotsWithOnePossibility(sudoku) {
        let grid = sudoku.grid;

        return grid.reduce((z, x) =>
                x.reduce((acum, e) => e.countPossibilities() == 1 ? acum.concat(e) : acum, z), [])
            .filter(x => x.value == 0)
    }

    generateSubMatrix(sudoku) { //Cambiar por generadores, que acepten intervalos
        //Chen como cambiaria usted esto?
        //range(1, sudoku.rows, 3).forEach( (x, i) => { range(1, sudoku.cols, 3).forEach( (elem, j) => this.subMatrix.push( this.getSubMatrix(sudoku,i, j) ) ) } );
        for (let i = 1; i < sudoku.rows; i += 3)
            for (let j = 1; j < sudoku.cols; j += 3)
                this.subMatrix.push(this.getSubMatrix(sudoku, i, j));
    }

    /**
     * Creates an array of the submatrix by adding 9 spots, requires a centered i & j
     * @param {*} sudoku 
     * @param {*} i 
     * @param {*} j 
     * @return {[]} subMatrix
     */
    getSubMatrix(sudoku, i, j) {
        let subMatrix = [];
        subMatrix.push(sudoku.getSpot(i, j));
        subMatrix.push(sudoku.getSpot(i + 1, j));
        subMatrix.push(sudoku.getSpot(i - 1, j));
        subMatrix.push(sudoku.getSpot(i, j + 1));
        subMatrix.push(sudoku.getSpot(i, j - 1));
        subMatrix.push(sudoku.getSpot(i + 1, j + 1));
        subMatrix.push(sudoku.getSpot(i - 1, j - 1));
        subMatrix.push(sudoku.getSpot(i - 1, j + 1));
        subMatrix.push(sudoku.getSpot(i + 1, j - 1));
        return subMatrix;
    }

    validOption({ sudoku, row, col, value }) {
        let current = sudoku.getSpot(row, col)
        if (current) 
            return current.isValidOption(value) ? "allowed" : this.handleException(current, value)
    }

    handleException(current, value) { //Returns if the row or column or subMatrix is blocking
        let cols = current.colNeighbors.some(x => x.value == value);
        let rows = current.rowNeighbors.some(x => x.value == value);
        let subm = current.subMatrixNeighbors.some(x => x.value == value);

        if (cols && rows && subm) return "allException";
        if (cols) {
            if (rows) return "rowColException";
            if (subm) return "colMatrixException";
            return "columnException";
        }
        if (rows) {
            return (subm) ? "rowMatrixException"
                          : "rowException";
        }
        if (subm) return "subMatrixException";
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SudokuHelper;


/***/ }),

/***/ "../../../../../client/assets/js/sudokuSolver.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sudokuHelper__ = __webpack_require__("../../../../../client/assets/js/sudokuHelper.js");


class SudokuSolver {
	constructor(){
		this.sudokuHelper = new __WEBPACK_IMPORTED_MODULE_0__sudokuHelper__["a" /* SudokuHelper */]();
	}

	solve(sudoku){
		if( !this.hasEmptyValues(sudoku) ) //Si ya todos los spots tienen un numero es que esta solucionado
			return true;
		else {
				let curr = this.sudokuHelper.nextEmpty(sudoku); //Sacamos la fila y columna del primer spot vacio que encuentre
				let currentSpot = sudoku.getSpot(curr.row, curr.col);//Nos traemos al objeto en esa posicion

				for(let o = 1; o <= 9; o++){ //Para cada posibilidad
					if(currentSpot.isValidOption(o)){ //Si es valida (No esta en la fila, columna o submatriz)
						currentSpot.setValueAndState(o, "heuristic") //Value is set by the algorithm
						if(this.solve(sudoku)) //Vuelva a ejecutar este algoritmo (Note que en la proxima llamada este spot ya no sera empty)
							return true; //Si llega hasta aca es que lo soluciono
					}
				}
				currentSpot.value = 0//BACKTRACK Si llega aca es por que hubo backtrack, borra el current ya que la opcion escogida no era correcta
			}
		return false; //Este return permite romper la recursion, sino la pila se llenaria
	}

	//Pasar a funcional. -Listo
    hasEmptyValues(sudoku){ //Auxiliar to see if sudoku is solved, this should be in sudoku helper
        return sudoku.grid.some( x => x.some( y => y.value === 0) )
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SudokuSolver;


/***/ }),

/***/ "../../../../../client/assets/js/sudokuSolverStep.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sudokuHelper__ = __webpack_require__("../../../../../client/assets/js/sudokuHelper.js");


/* This solver emulates the backtrack algorithm without using recursion, that's why it uses a stack
    the use of this technique was necessary to show every step in the solution process of the algorithm
*/

class SudokuSolverStep {
	constructor(){
        this.sudokuHelper = new __WEBPACK_IMPORTED_MODULE_0__sudokuHelper__["a" /* SudokuHelper */]() //Helps with some commons methods of a sudoku
        this.stack = [] //To manage recursion without using native recursion
        this.backtrack = false //A variable to record if last iteration required backtrack
	}

	solve(sudoku){
		if( !this.hasEmptyValues(sudoku) ) //If sudoku is solved the algorithm ends
			return true
		else {
                let curr = this.sudokuHelper.nextEmpty(sudoku) //Coordinates of next empty spot
                let currentSpot = sudoku.getSpot(curr.row, curr.col) //Empty spot
                let o = 1 
                if(this.backtrack){
                    let back = this.stack.pop()
                    o = back.value + 1
                    currentSpot = back.last
                    this.backtrack = false
                }
                for( ; o <= 9; o++){ //Para cada posibilidad
					if(currentSpot.isValidOption(o)){ //Si es valida (No esta en la fila, columna o submatriz)
                        currentSpot.setValueAndState(o, "heuristic")
                        this.stack.push({last: currentSpot, value : o})
                        return false
					}
                }
                let lastSpot = this.lastInStack().last
                sudoku.setValue(lastSpot.row, lastSpot.col) //Puts to zero
                this.backtrack = true //Backtrack needed
			}
    }

    lastInStack(){
       return this.stack[this.stack.length - 1]
    }
    
    hasEmptyValues(sudoku){ //Auxiliar to see if sudoku is solved, this should be in sudoku helper
        return sudoku.grid.some( x => x.some( y => y.value === 0) )
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SudokuSolverStep;


/***/ }),

/***/ "../../../../../client/assets/js/utils.js":
/***/ (function(module, exports) {

/**
 * This method was copied from Underscore.js
 * http://underscorejs.org/
 */
range = function (start, stop, step) {
    if (stop == null) {
        stop = start || 0;
        start = 0;
    }
    if (!step) {
        step = stop < start ? -1 : 1;
    }

    let length = Math.max(Math.ceil((stop - start) / step), 0);
    let range = Array(length);

    for (let idx = 0; idx < length; idx++, start += step) {
        range[idx] = start;
    }

    return range;
};

module.exports = { range }

/***/ }),

/***/ "../../../../../client/comfortaa.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "comfortaa.9b0d6f2226dc73cdaa58.ttf";

/***/ }),

/***/ "../../../../../client/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../client/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../client/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../client/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../client/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map