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
exports.push([module.i, "@font-face {\r\n    font-family: Comfortaa;\r\n    src: url(" + __webpack_require__("../../../../../client/comfortaa.ttf") + ");\r\n}\r\n\r\n#title {\r\n    text-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);\r\n    font-family: 'Comfortaa', cursive;\r\n    font-weight: bold;\r\n}\r\n\r\n#options {\r\n    padding-top: 0px;\r\n}\r\n\r\n#timerDiv {\r\n    text-align: left;\r\n}\r\n\r\n#infoWebSudoku {\r\n    float: right;\r\n    background-color: #B3B6A5;\r\n    font-size: 18px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <br>\r\n    <div class=\"col-sm-4\" id=\"timerDiv\"><br><br>\r\n        <app-timer></app-timer>\r\n    </div>\r\n    <div class=\"col-sm-5\">\r\n        <h1 id=\"title\">SUDOKU</h1>\r\n    </div>\r\n    <div class=\"col-sm-3\"></div>\r\n</div>\r\n<div class=\"container-fluid\" id=\"sudokuBox\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\" id=\"options\">\r\n            <app-options></app-options>\r\n        </div>\r\n        <div class=\"col-sm-9\" id=\"divPrincipal\">\r\n            <div id=\"screen\">\r\n                <app-sudoku></app-sudoku>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"infoWebSudoku\">\r\n    Difficulty levels taken from <a href=\"http://es.websudoku.com/\">WebSudoku</a>\r\n</div>"

/***/ }),

/***/ "../../../../../client/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/*
Authors:
    Andrey Arguedas Espinoza
    Daniela Armas Sánchez
    Michael Chen Wang
    Kimberly Olivas Delgado
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../client/app/app.component.html"),
        styles: [__webpack_require__("../../../../../client/app/app.component.css")]
    })
], AppComponent);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_loading__ = __webpack_require__("../../../../ngx-loading/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../client/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_sudoku_sudoku_component__ = __webpack_require__("../../../../../client/app/components/sudoku/sudoku.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_options_options_component__ = __webpack_require__("../../../../../client/app/components/options/options.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_timer_timer_component__ = __webpack_require__("../../../../../client/app/components/timer/timer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_communication_service__ = __webpack_require__("../../../../../client/app/services/communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_sudoku_service__ = __webpack_require__("../../../../../client/app/services/sudoku.service.ts");
/*
Authors:
    Andrey Arguedas Espinoza
    Daniela Armas Sánchez
    Michael Chen Wang
    Kimberly Olivas Delgado
*/
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
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_sudoku_sudoku_component__["a" /* SudokuComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_options_options_component__["a" /* OptionsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_timer_timer_component__["a" /* TimerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_ngx_loading__["b" /* LoadingModule */].forRoot({
                animationType: __WEBPACK_IMPORTED_MODULE_6_ngx_loading__["a" /* ANIMATION_TYPES */].threeBounce,
                fullScreenBackdrop: true,
                backdropBorderRadius: '4px'
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__services_communication_service__["a" /* CommunicationService */],
            __WEBPACK_IMPORTED_MODULE_12__services_sudoku_service__["a" /* SudokuService */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
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
exports.push([module.i, "#saveHeader,\r\n#loadHeader,\r\n#resignHeader {\r\n    background-color: #337AB7;\r\n    color: #FFFFFF;\r\n    text-align: center;\r\n}\r\n\r\n#howToHeader {\r\n    background-color: #0A9BD8;\r\n    color: #FFFFFF;\r\n    text-align: center;\r\n}\r\n\r\n#headerError {\r\n    background-color: #c60000;\r\n    color: #FFFFFF;\r\n}\r\n\r\n#bodyError,\r\n#games {\r\n    text-align: center;\r\n}\r\n\r\nbutton {\r\n    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);\r\n    font-family: 'Comfortaa', cursive;\r\n}\r\n\r\nselect {\r\n    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/options/options.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"howToPlay\">\r\n    <button class=\"btn btn-info btn-block \" id=\"showHowToPlay\" (click)=\"openModal(howToPlayModal)\"> HOW TO PLAY </button>\r\n</div>\r\n<br>\r\n\r\n<div class=\"input-group\">\r\n    <select class=\"form-control \" id=\"difficulty\">\r\n                            <option selected>Easy</option>\r\n                            <option>Medium</option>\r\n                            <option>Hard</option>\r\n                        </select>\r\n    <div id=\"level \">\r\n        <button class=\"btn btn-primary btn-block \" id=\"selectDifficulty\" (click)=\"openModal(resignModal)\"> SELECT DIFFICULTY </button>\r\n    </div>\r\n</div>\r\n<br>\r\n\r\n<!----\r\n    Will be enable once we migrate the project and restablish mongo connections\r\n<div id=\"save\">\r\n    <button class=\"btn btn-primary btn-block\" id=\"saveGame\" (click)=\"openModal(template)\"> SAVE GAME <span class=\"glyphicon glyphicon-floppy-disk\"></span></button>\r\n</div>\r\n<br>\r\n-->\r\n\r\n<!--\r\n<div id=\"load\">\r\n    <button class=\"btn btn-primary btn-block\" id=\"loadGame\" (click)=\"openModal(loadModal)\"> LOAD GAME <span class=\"glyphicon glyphicon-open\"></span></button>\r\n</div>\r\n<br>\r\n-->\r\n\r\n<div id=\"generate\">\r\n    <button class=\"btn btn-warning btn-block\" id=\"generateGame\" (click)=\"generate() \"> GENERATE NEW GAME </button>\r\n</div>\r\n<br>\r\n\r\n<div id=\"reset\">\r\n    <button class=\"btn btn-danger btn-block\" id=\"resetGame\" (click)=\"reset() \"> RESET GAME </button>\r\n</div>\r\n<br>\r\n\r\n<div id=\"solution \">\r\n    <button class=\"btn btn-success btn-block \" id=\"showSolution \" (click)=\"solve() \"> SOLVE BY BACKTRACK</button>\r\n</div>\r\n<br>\r\n\r\n<div id=\"solutionStepByStep\">\r\n    <button class=\"btn btn-info btn-block \" id=\"showSolutionStepByStep \" (click)=\"solveStepByStep() \">BACKTRACK STEP BY STEP</button>\r\n</div>\r\n<br>\r\n\r\n<div id=\"nakedSingle\">\r\n    <button class=\"btn btn-danger btn-block \" id=\"showNakedSingleSolution \" (click)=\"solveByNakedSingle() \"> SOLVE BY NAKED SINGLE</button>\r\n</div>\r\n<br>\r\n\r\n<div id=\"hiddenSingle\">\r\n    <button class=\"btn btn-warning btn-block \" id=\"showHiddenSingleSolution \" (click)=\"solveByHiddenSingle() \"> SOLVE BY HIDDEN SINGLE</button>\r\n</div>\r\n<br>\r\n\r\n<!-- *********************************************\r\n                    MODALS\r\n********************************************** -->\r\n\r\n<!--  HOW TO PLAY  -->\r\n<ng-template #howToPlayModal>\r\n    <div class=\"modal-header\" id=\"howToHeader\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">&times;</button>\r\n        <h3 class=\"modal-title\" id=\"myModalTitle\"><i class=\"fa fa-question-circle\"></i> HOW TO PLAY</h3>\r\n    </div>\r\n\r\n    <div class=\"modal-body\" id=\"howToBody\">\r\n        <ul>\r\n            <li>\r\n                <h4>Click a number in the right pane, and then click a cell inside the grid.</h4>\r\n            </li>\r\n            <li>\r\n                <h4>Click in the number to delete it.</h4>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</ng-template>\r\n\r\n\r\n<!--  SAVE  -->\r\n<ng-template #template>\r\n    <div class=\"modal-header\" id=\"saveHeader\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">&times;</button>\r\n        <h3 class=\"modal-title\" id=\"myModalTitle\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> SAVE THIS GAME</h3>\r\n    </div>\r\n\r\n    <div class=\"modal-body\" id=\"saveBody\">\r\n        <form role=\"form\" onsubmit=\"return false;\" id=\"formSaveGame\">\r\n            <div class=\"form-group\" id=\"groupUsername\">\r\n                <h4><label for=\"username\">User name:</label></h4>\r\n                <input type=\"text\" class=\"form-control\" id=\"username\" autofocus=\"true\" placeholder=\"Your name\" maxlength=\"30\" required/>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <button type=\"submit\" class=\"btn btn-primary\" id=\"send\" (click)=\"saveSudoku()\">SAVE <span class=\"glyphicon glyphicon-floppy-disk\"></span></button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</ng-template>\r\n\r\n\r\n<!--  RESIGN  -->\r\n<ng-template #resignModal>\r\n    <div class=\"modal-header\" id=\"resignHeader\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">&times;</button>\r\n        <h3 class=\"modal-title\" id=\"myModalTitle\">ARE YOU SURE YOU WANT TO RESIGN?</h3>\r\n    </div>\r\n\r\n    <div class=\"modal-body\" id=\"resignBody\">\r\n        <button id=\"btnConfirm\" class=\"btn btn-primary\" (click)=\"changeDifficulty()\">Yes, I want to resign</button>\r\n        <button id=\"btnCancel\" class=\"btn btn-warning\" (click)=\"modalRef.hide()\">No, I will keep struggling</button>\r\n    </div>\r\n</ng-template>\r\n\r\n\r\n<!--  LOAD  -->\r\n<ng-template #loadModal>\r\n    <div class=\"modal-header\" id=\"loadHeader\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">&times;</button>\r\n        <h3 class=\"modal-title\" id=\"myModalTitle\"><span class=\"glyphicon glyphicon-open\"></span> LOAD YOUR GAMES</h3>\r\n    </div>\r\n\r\n    <div class=\"modal-body\" id=\"loadBody\">\r\n        <form role=\"form\" onsubmit=\"return false;\" id=\"formLoadGame\">\r\n            <div class=\"form-group\" id=\"groupUsername\">\r\n                <label for=\"loadUserName\">User name:</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"loadUserName\" autofocus=\"true\" placeholder=\"Your name\" maxlength=\"30\" required/>\r\n            </div>\r\n\r\n            <div class=\"form-group\" id=\"games\">\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <button type=\"submit\" class=\"btn btn-primary\" id=\"load\" (click)=\"loadGames()\">LOAD GAMES <span class=\"glyphicon glyphicon-open\"></span></button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #errorModal id=\"modalError\">\r\n    <div class=\"modal-header\" id=\"headerError\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">&times;</button>\r\n        <h3 class=\"modal-title\" id=\"myModalTitle\"><i class=\"fa fa-warning\"></i> Error</h3>\r\n    </div>\r\n    <div class=\"modal-body\" id=\"myModalMessage\">\r\n        <br>\r\n        <h4 id=\"messageError\"></h4>\r\n        <br>\r\n    </div>\r\n</ng-template>"

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
/*
Authors:
    Andrey Arguedas Espinoza
    Daniela Armas Sánchez
    Michael Chen Wang
    Kimberly Olivas Delgado
*/
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
            err ? __WEBPACK_IMPORTED_MODULE_4_jquery__("#games").text("User " + userName + " has no saved matches.")
                : _this.renderGames(JSON.parse(data._body).matches);
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
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('errorModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */]) === "function" && _a || Object)
], OptionsComponent.prototype, "errorModal", void 0);
OptionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-options',
        template: __webpack_require__("../../../../../client/app/components/options/options.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/options/options.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_communication_service__["a" /* CommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_communication_service__["a" /* CommunicationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_sudoku_service__["a" /* SudokuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_sudoku_service__["a" /* SudokuService */]) === "function" && _d || Object])
], OptionsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=options.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/sudoku/sudoku.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#headerError {\r\n    background-color: #c60000;\r\n    color: #FFFFFF;\r\n}\r\n\r\n#headerSuccess {\r\n    background-color: #2f9b14;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.modal-body {\r\n    text-align: center;\r\n}\r\n\r\n#sudoku {\r\n    box-shadow: 10px 10px 5px #888888;\r\n}\r\n\r\nbody {\r\n    font-family: 'Comfortaa', cursive;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/sudoku/sudoku.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"loading\"></ngx-loading>\r\n\r\n<div id=\"sudoku\">{{jsonSudoku}}</div>\r\n\r\n<ng-template #errorModal id=\"modalError\">\r\n    <div class=\"modal-header\" id=\"headerError\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">&times;</button>\r\n        <h3 class=\"modal-title\" id=\"myModalTitle\"><i class=\"fa fa-warning\"></i> Error</h3>\r\n    </div>\r\n    <div class=\"modal-body\" id=\"myModalMessage\">\r\n        <br>\r\n        <h4 id=\"messageError\"></h4>\r\n        <br>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #successModal id=\"modalSuccess\">\r\n    <div class=\"modal-header\" id=\"headerSuccess\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">&times;</button>\r\n        <h3 class=\"modal-title\" id=\"titleSuccess\"> Success</h3>\r\n    </div>\r\n    <div class=\"modal-body\" id=\"myModalMessage\">\r\n        <br>\r\n        <h4 id=\"messageSuccess\"></h4>\r\n        <br>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #storeModal>\r\n    <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">&times;</button>\r\n        <h4 class=\"modal-title\" id=\"myModalTitle\">THERE IS A GAME SAVED IN LOCAL STORAGE, DO YOU WANT TO LOAD IT?</h4>\r\n    </div>\r\n\r\n    <div class=\"modal-body\" id=\"myModalMessage\">\r\n        <button id=\"btnConfirm\" class=\"btn btn-primary\" (click)=\"loadStorageGame()\">Yes, I want to load it</button>\r\n        <button id=\"btnCancel\" class=\"btn btn-warning\" (click)=\"modalRef.hide()\">No, I want another game</button>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../client/app/components/sudoku/sudoku.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SudokuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_communication_service__ = __webpack_require__("../../../../../client/app/services/communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sudoku_service__ = __webpack_require__("../../../../../client/app/services/sudoku.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_js_sudoku__ = __webpack_require__("../../../../../client/assets/js/sudoku.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_js_option__ = __webpack_require__("../../../../../client/assets/js/option.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_js_painter__ = __webpack_require__("../../../../../client/assets/js/painter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_js_sudokuGenerator__ = __webpack_require__("../../../../../client/assets/js/sudokuGenerator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_js_sudokuHelper__ = __webpack_require__("../../../../../client/assets/js/sudokuHelper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets_js_sudokuSolver__ = __webpack_require__("../../../../../client/assets/js/sudokuSolver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__assets_js_sudokuSolverStep__ = __webpack_require__("../../../../../client/assets/js/sudokuSolverStep.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__assets_js_nakedSingleSolver__ = __webpack_require__("../../../../../client/assets/js/nakedSingleSolver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__assets_js_hiddenSingleSolver__ = __webpack_require__("../../../../../client/assets/js/hiddenSingleSolver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__assets_js_utils__ = __webpack_require__("../../../../../client/assets/js/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__assets_js_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__assets_js_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/*
Authors:
    Andrey Arguedas Espinoza
    Daniela Armas Sánchez
    Michael Chen Wang
    Kimberly Olivas Delgado
*/
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
    function SudokuComponent(sudokuService, communicationService, modalService) {
        var _this = this;
        this.sudokuService = sudokuService;
        this.communicationService = communicationService;
        this.modalService = modalService;
        this.loading = false;
        this.sudoku = new __WEBPACK_IMPORTED_MODULE_4__assets_js_sudoku__["a" /* Sudoku */](9, 9);
        this.sudokuSolver = new __WEBPACK_IMPORTED_MODULE_9__assets_js_sudokuSolver__["a" /* SudokuSolver */]();
        this.sudokuHelper = new __WEBPACK_IMPORTED_MODULE_8__assets_js_sudokuHelper__["a" /* SudokuHelper */]();
        this.sudokuSolverStep = new __WEBPACK_IMPORTED_MODULE_10__assets_js_sudokuSolverStep__["a" /* SudokuSolverStep */]();
        this.sudokuGenerator = new __WEBPACK_IMPORTED_MODULE_7__assets_js_sudokuGenerator__["a" /* SudokuGenerator */]();
        this.nakedSingleSolver = new __WEBPACK_IMPORTED_MODULE_11__assets_js_nakedSingleSolver__["a" /* NakedSingleSolver */]();
        this.hiddenSingleSolver = new __WEBPACK_IMPORTED_MODULE_12__assets_js_hiddenSingleSolver__["a" /* HiddenSingleSolver */]();
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
        window.onunload = function () { return _this.sudokuService.storeSudoku(_this.sudoku); }; //Local Storage
        var sketch = function (p) {
            _this.painter = new __WEBPACK_IMPORTED_MODULE_6__assets_js_painter__["a" /* Painter */](60, p);
            var clicked = false;
            var options = []; //The options of the "right pane" of the canvas
            p.preload = function () {
                Promise.resolve(_this.changeDifficulty('easy')) //We search for a random easy sudoku in our db
                    .then(function () { return _this.showStorageModal(); }); //Ask to the user if wants to retrieve the match saved in local storage
            };
            p.setup = function () {
                _this.canvas = p.createCanvas(700, 545);
                _this.canvas.parent('screen'); //For centering the canvas
                p.background(220);
                _this.painter.paintSudoku(_this.sudoku);
                Object(__WEBPACK_IMPORTED_MODULE_13__assets_js_utils__["range"])(1, 10).forEach(function (i) {
                    options.push(new __WEBPACK_IMPORTED_MODULE_5__assets_js_option__["a" /* Option */](p.width - 80, i * 60 - 30, i, p));
                });
            };
            p.draw = function () {
                p.background(179, 182, 165);
                _this.painter.paintSudoku(_this.sudoku); //Paints every 60fps
                drawOptions(); //Options at the right
                if (_this.solveBySteps)
                    _this.solveBySteps = !_this.sudokuSolverStep.solve(_this.sudoku);
            };
            function drawOptions() {
                options.forEach(function (x) { return x.show(); });
            }
            p.mouseClicked = function () {
                var mapX = Math.floor(p.map(p.mouseX, 0, 545, 0, 9));
                var mapY = Math.floor(p.map(p.mouseY, 0, p.height, 0, 9));
                _this.handleErase(mapX, mapY, options); //Erase if is necessary
                options.forEach(function (e, i) {
                    if (e.collides(p.mouseX, p.mouseY))
                        e.selected ? _this.handleSelection(e, mapX, mapY) : e.selected = true;
                });
            };
            p.mouseMoved = function () {
                options.filter(function (x) { return x.selected; });
                options.forEach(function (x) { return x.update(p.mouseX, p.mouseY); });
            };
        };
        var myP5 = new p5(sketch);
    };
    SudokuComponent.prototype.showStorageModal = function () {
        if (this.sudokuService.retriveSudoku())
            this.modalRef = this.modalService.show(this.storeModal);
    };
    SudokuComponent.prototype.loadStorageGame = function () {
        var grid = this.sudokuService.retriveSudoku();
        this.sudoku.fillGrid(grid);
        this.modalRef.hide();
    };
    SudokuComponent.prototype.solve = function () {
        this.cleanUserInput();
        this.loading = true;
        (!navigator.onLine) ? this.localSolve()
            : this.serverSolve();
    };
    SudokuComponent.prototype.localSolve = function () {
        this.loading = false;
        this.sudokuSolver.solve(this.sudoku);
    };
    SudokuComponent.prototype.handleSelection = function (option, mapX, mapY) {
        var data = { sudoku: this.sudoku, row: mapY, col: mapX, value: option.value };
        var result = this.sudokuHelper.validOption(data);
        if (result == "allowed") {
            if (this.sudoku.getSpot(mapY, mapX).state == "possible")
                this.sudoku.setValue(mapY, mapX, option.value);
            else
                result == undefined ? result : this.openErrorModal(result); //Modal-Alert if is not valid
        }
        else
            result == undefined ? result : this.openErrorModal(result); //Modal-Alert if is not valid
        option.selected = false;
        option.restart();
    };
    SudokuComponent.prototype.handleErase = function (mapX, mapY, options) {
        if (Object(__WEBPACK_IMPORTED_MODULE_13__assets_js_utils__["range"])(this.sudoku.rows).includes(mapY) && Object(__WEBPACK_IMPORTED_MODULE_13__assets_js_utils__["range"])(this.sudoku.cols).includes(mapX))
            if (this.sudoku.getSpot(mapY, mapX).state == "possible" && options.every(function (x) { return !x.selected; }))
                this.sudoku.setValue(mapY, mapX); //Puts to zero
    };
    SudokuComponent.prototype.serverSolve = function () {
        var _this = this;
        this.sudokuService.getSolution(this.sudoku)
            .subscribe(function (res) {
            _this.loading = false;
            _this.sudoku.load(res.grid);
        }, function (err) {
            _this.loading = false;
            _this.sudokuSolver.solve(_this.sudoku);
        });
    };
    SudokuComponent.prototype.solveStepByStep = function () {
        this.cleanUserInput();
        this.solveBySteps = true;
    };
    SudokuComponent.prototype.solveByNakedSingle = function () {
        var _this = this;
        this.cleanUserInput();
        var interval = setInterval(function () {
            if (_this.nakedSingleSolver.solve(_this.sudoku)) {
                clearInterval(interval);
                _this.sudokuHelper.hasEmptyValues(_this.sudoku) ?
                    _this.showError("The sudoku couldn't be solved by NakedSingle. Try another option.") :
                    _this.showSuccess("Solved", "The sudoku was solved");
            }
        }, 1000);
    };
    SudokuComponent.prototype.solveByHiddenSingle = function () {
        var _this = this;
        this.cleanUserInput();
        var interval = setInterval(function () {
            if (_this.hiddenSingleSolver.solve(_this.sudoku)) {
                clearInterval(interval);
                _this.sudokuHelper.hasEmptyValues(_this.sudoku) ?
                    _this.showError("The sudoku couldn't be solved by HiddenSingle. Try another option.") :
                    _this.showSuccess("Solved", "The sudoku was solved");
            }
        }, 1000);
    };
    SudokuComponent.prototype.generate = function () {
        this.sudokuHelper.resetSudoku(this.sudoku);
        this.sudokuGenerator.generate(this.sudoku);
        this.sudokuHelper.generateNeighbors(this.sudoku);
    };
    SudokuComponent.prototype.reset = function () {
        this.solveBySteps = false;
        this.sudokuHelper.resetSudoku(this.sudoku);
        this.sudokuHelper.resetNeighbors(this.sudoku);
        this.sudokuHelper.generateNeighbors(this.sudoku);
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
        var _this = this;
        this.sudokuService.saveSudoku(user, this.sudoku, function (err, res) {
            err ? _this.showError("There was an error saving the match.")
                : _this.showSuccess("Saved", "Match saved successfully.");
        });
    };
    /* Only clears values set by the user */
    SudokuComponent.prototype.cleanUserInput = function () {
        this.sudokuHelper.resetSudoku(this.sudoku, function (z) { return z == "possible"; });
    };
    SudokuComponent.prototype.showSuccess = function (title, message) {
        this.modalRef = this.modalService.show(this.successModal);
        $("#titleSuccess").text(title);
        $("#messageSuccess").text(message);
    };
    SudokuComponent.prototype.showError = function (message) {
        this.modalRef = this.modalService.show(this.errorModal);
        $("#messageError").text(message);
    };
    SudokuComponent.prototype.openErrorModal = function (result) {
        switch (result) {
            case "rowException":
                this.showError("The number already exists in that row.");
                break;
            case "columnException":
                this.showError("The number already exists in that column.");
                break;
            case "subMatrixException":
                this.showError("The number already exists in that sub-grid.");
                break;
            case "rowMatrixException":
                this.showError("The number already exists in that row and sub-grid.");
                break;
            case "colMatrixException":
                this.showError("The number already exists in that column and sub-grid.");
                break;
            case "rowColException":
                this.showError("The number already exists in that row and column.");
                break;
            case "allException":
                this.showError("The number already exists in that row, column and sub-grid.");
                break;
            default:
                this.showError("Invalid space.");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('errorModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */]) === "function" && _a || Object)
], SudokuComponent.prototype, "errorModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('storeModal'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */]) === "function" && _b || Object)
], SudokuComponent.prototype, "storeModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('successModal'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */]) === "function" && _c || Object)
], SudokuComponent.prototype, "successModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('waitModal'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */]) === "function" && _d || Object)
], SudokuComponent.prototype, "waitModal", void 0);
SudokuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-sudoku',
        template: __webpack_require__("../../../../../client/app/components/sudoku/sudoku.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/sudoku/sudoku.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_sudoku_service__["a" /* SudokuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_sudoku_service__["a" /* SudokuService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__services_communication_service__["a" /* CommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_communication_service__["a" /* CommunicationService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _g || Object])
], SudokuComponent);

var _a, _b, _c, _d, _e, _f, _g;
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

module.exports = "<div class=\"header\">Time:\r\n    <span class=\"timer\" id=\"timer\">{{minutes}}:{{seconds}}</span>\r\n</div>"

/***/ }),

/***/ "../../../../../client/app/components/timer/timer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/*
Authors:
    Andrey Arguedas Espinoza
    Daniela Armas Sánchez
    Michael Chen Wang
    Kimberly Olivas Delgado
*/
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
        this.minutes = -1;
        this.seconds = -1;
        this.worker = null;
    }
    TimerComponent.prototype.ngOnInit = function () {
        this.startTimer();
    };
    TimerComponent.prototype.startTimer = function () {
        var _this = this;
        if (typeof (Worker) !== "undefined") {
            if (this.worker == null) {
                this.worker = new Worker("../../assets/js/timer.js");
            }
            this.worker.onmessage = function (e) {
                _this.minutes = e.data.minutes;
                _this.seconds = e.data.seconds;
            };
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#timer").text("Browser does not support Web Workers");
        }
    };
    TimerComponent.prototype.stopTimer = function () {
        this.worker.terminate();
        this.worker = null;
    };
    TimerComponent.prototype.restartTimer = function () {
        this.worker.terminate();
        this.worker = null;
        this.minutes = 0;
        this.seconds = 0;
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

/***/ "../../../../../client/app/services/sudoku.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SudokuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/*
Authors:
    Andrey Arguedas Espinoza
    Daniela Armas Sánchez
    Michael Chen Wang
    Kimberly Olivas Delgado
*/
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
    SudokuService.prototype.saveSudoku = function (user, sudoku, callback) {
        console.log("Trying to save from save-sudoku.service.ts");
        var gridmin = this.minifyJsonGrid(sudoku.grid);
        var data = { name: user, grid: gridmin, level: sudoku.level };
        this.http.post("api/sudoku", data)
            .subscribe(function (res) { callback(undefined, res); console.log(res); }, function (err) { callback(err); console.log(err); });
    };
    //Loading
    SudokuService.prototype.getSudoku = function (level, callback) {
        this.http.get("api/sudoku/level/" + level)
            .subscribe(function (res) { return callback(undefined, res); }, function (err) { return callback(err); });
    };
    SudokuService.prototype.getGames = function (userName, callback) {
        this.http.get("api/sudoku/games/" + userName)
            .subscribe(function (res) { return callback(undefined, res); }, function (err) { return callback(err); });
    };
    SudokuService.prototype.getSolution = function (sudoku) {
        var minGrid = this.minifyJsonGrid(sudoku.grid);
        return this.http.post('api/sudoku/solve/', { grid: minGrid })
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(new Error(err.json())); });
    };
    SudokuService.prototype.minifyJsonGrid = function (grid) {
        var obj = grid.map(function (x) { return x; });
        var result = Array.from(new Array(9), function (x, i) {
            return Array.from(new Array(9), function (x, j) {
                return { value: obj[i][j].value, state: obj[i][j].state };
            });
        });
        return result;
    };
    SudokuService.prototype.storeSudoku = function (sudoku) {
        var obj = this.minifyJsonGrid(sudoku.grid);
        localStorage.setItem("sudoku", JSON.stringify(obj));
    };
    SudokuService.prototype.retriveSudoku = function () {
        return JSON.parse(localStorage.getItem("sudoku"));
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("../../../../../client/assets/js/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__utils__);
/*
Authors:
	Andrey Arguedas Espinoza
	Daniela Armas Sánchez
	Michael Chen Wang
	Kimberly Olivas Delgado
*/




class HiddenSingleSolver {

    constructor() {
        this.sudokuHelper = new __WEBPACK_IMPORTED_MODULE_0__sudokuHelper__["a" /* SudokuHelper */]();
    }

    solve(sudoku) {
        if (!this.sudokuHelper.hasEmptyValues(sudoku)) //Si ya todos los spots tienen un numero es que esta solucionado
            return true;
        else {
            //Se recorre por fila buscando las que solo tienen una posible solucion, y si la tienen se les pone
            let oldGrid = this.sudokuHelper.gridToMatrix(sudoku.grid)
            Object(__WEBPACK_IMPORTED_MODULE_1__utils__["range"])(sudoku.rows).forEach(x => this.spotsUniqueInRow(sudoku, x))
            Object(__WEBPACK_IMPORTED_MODULE_1__utils__["range"])(sudoku.cols).forEach(x => this.spotsUniqueInCol(sudoku, x))
            Object(__WEBPACK_IMPORTED_MODULE_1__utils__["range"])(1, 9, 3).forEach(row => {
                Object(__WEBPACK_IMPORTED_MODULE_1__utils__["range"])(1, 9, 3).forEach(col => {
                    this.spotsUniqueInSubMatrix(this.sudokuHelper.getSubMatrix(sudoku, row, col))
                })
            })
            return this.sudokuHelper.compareGrids(oldGrid, sudoku.grid)
        }
    }

    spotsUniqueInRow(sudoku, row) {
        let spots = sudoku.grid[row].reduce((z, x) => x.value == 0 ?
            z.concat({ spot: x, possibilities: x.getPossibilities() }) : z, [])
        this.updateUniqueSpots(spots)
    }

    spotsUniqueInCol(sudoku, col) {
        let grid = sudoku.grid
        let spots = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["range"])(sudoku.rows).reduce((z, x) => sudoku.getValue(x, col) == 0 ?
            z.concat({ spot: sudoku.getSpot(x, col), possibilities: sudoku.getSpot(x, col).getPossibilities() }) : z, [])
        this.updateUniqueSpots(spots)
    }

    spotsUniqueInSubMatrix(subMatrix) {
        let spots = subMatrix.reduce((z, x) => x.value == 0 ?
            z.concat({ spot: x, possibilities: x.getPossibilities() }) : z, [])
        this.updateUniqueSpots(spots)
    }

    updateUniqueSpots(spots) {
        spots.forEach(x => {
            let res = x.possibilities.filter(e => this.existsOnlyOnce(e, spots))
            x.spot.value = res.length == 1 ? res[0] : x.spot.value
            x.spot.state = res.length == 1 ? "heuristic" : x.spot.state
        })
    }

    existsOnlyOnce(elem, spots) {
        return spots.reduce((z, x) => x.possibilities.includes(elem) ? ++z : z, 0) == 1
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HiddenSingleSolver;


/***/ }),

/***/ "../../../../../client/assets/js/nakedSingleSolver.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sudokuHelper__ = __webpack_require__("../../../../../client/assets/js/sudokuHelper.js");
/*
Authors:
	Andrey Arguedas Espinoza
	Daniela Armas Sánchez
	Michael Chen Wang
	Kimberly Olivas Delgado
*/



class NakedSingleSolver {

    constructor() {
        this.sudokuHelper = new __WEBPACK_IMPORTED_MODULE_0__sudokuHelper__["a" /* SudokuHelper */]();
    }

    solve(sudoku) {
        if (!this.sudokuHelper.hasEmptyValues(sudoku)) //If every spot has a number
            return true;
        else {
            let oldGrid = this.sudokuHelper.gridToMatrix(sudoku.grid)
            let uniques = this.sudokuHelper.getSpotsWithOnePossibility(sudoku) //Only spots who has one possibility available
            uniques.forEach(x => x.setValueAndState(x.getPossibilities().shift(), "heuristic"))
            return this.sudokuHelper.compareGrids(oldGrid, sudoku.grid) //Compares before and after naked single
        }
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = NakedSingleSolver;


/***/ }),

/***/ "../../../../../client/assets/js/option.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
Authors:
	Andrey Arguedas Espinoza
	Daniela Armas Sánchez
	Michael Chen Wang
	Kimberly Olivas Delgado
*/

class Option {

    constructor(x, y, value, lib) {
        this.value = value
        this.x = x
        this.y = y
        this.original = { x: this.x, y: this.y }
        this.lib = lib
        this.selected = false
    }

    show() {
        this.lib.textSize(24)
        this.lib.textFont("Comfortaa")
        this.selected ? this.lib.fill(217, 83, 79) : this.lib.fill(0, 102, 153)
        this.lib.ellipse(this.x, this.y, 50, 50)
        this.lib.fill(255)
        this.lib.text(this.value, this.x - 5, this.y + 10)
    }

    restart() {
        this.x = this.original.x;
        this.y = this.original.y;
    }

    update(mouseX, mouseY) {
        if (this.selected) {
            this.x = mouseX
            this.y = mouseY
        } else
            this.restart()
    }

    collides(x, y) {
        return (this.lib.dist(this.x, this.y, x, y) < 40) //40px is the ratio of the cirlce of the option
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Option;


/***/ }),

/***/ "../../../../../client/assets/js/painter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("../../../../../client/assets/js/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__utils__);
/*
Authors:
	Andrey Arguedas Espinoza
	Daniela Armas Sánchez
	Michael Chen Wang
	Kimberly Olivas Delgado
*/



class Painter { //This class wil be in charge of paint the sudoku every 60fps

    constructor(dimension, lib) {
        this.dimension = dimension
        this.lib = lib
    }

    paintSudoku(sudoku) {
        sudoku.grid.forEach((x, i) => x.forEach((y, j) => {
            this.lib.fill(255)
            this.lib.rect(i * this.dimension, j * this.dimension, this.dimension, this.dimension)
            this.paintBorderLines(i, j)
        }))
        this.paintNumbers(sudoku)
    }

    paintNumbers(sudoku) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["range"])(sudoku.rows).forEach(i => {
            Object(__WEBPACK_IMPORTED_MODULE_0__utils__["range"])(sudoku.cols).forEach(j => {
                if (sudoku.getValue(i, j) !== 0)
                    this.paintNumber(sudoku.getValue(i, j), i, j, sudoku.getSpot(i, j).state)
            })
        })
    }

    /* Paints the numbers in the sudoku (default = black, heuristic = green, possible = blue)*/
    paintNumber(number, i, j, state = "possible") {
        this.lib.textSize(this.dimension - 10)
        this.lib.textFont("Comfortaa")
        switch (state) {
            case "default":
                this.lib.fill(0);
                break;
            case "possible":
                this.lib.fill(0, 102, 153);
                break;
            case "heuristic":
                this.lib.fill(47, 155, 20);
                break;
        }
        this.lib.text(number, j * this.dimension + 20, (i + 1) * this.dimension - 10)
    }

    /* Paints the black border lines visible at the canvas */

    paintBorderLines(row, col) {
        this.lib.fill(50)
        if (col % 3 === 0) {
            if (row % 3 === 0)
                this.lib.rect(row * this.dimension, col * this.dimension, 5, this.dimension)
            this.lib.rect(row * this.dimension, col * this.dimension, this.dimension, 5)
        } else {
            if (row % 3 === 0)
                this.lib.rect(row * this.dimension, col * this.dimension, 5, this.dimension)
        }
        if (col === 8)
            this.lib.rect(row * this.dimension, (col + 1) * this.dimension, this.dimension, 5)
        if (row === 8)
            this.lib.rect((row + 1) * this.dimension, col * this.dimension, 5, this.dimension)
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Painter;


/***/ }),

/***/ "../../../../../client/assets/js/spot.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
Authors:
	Andrey Arguedas Espinoza
	Daniela Armas Sánchez
	Michael Chen Wang
	Kimberly Olivas Delgado
*/

class Spot {

    constructor(row, col, value = 0) {

        this.value = value //The idea is when a spot has value 0 will be a empty square

        this.row = row //Row position at the matrix
        this.col = col //Column position at the matrix

        this.rowNeighbors = [] // Row neigbors
        this.colNeighbors = [] // Column neigbors
        this.subMatrixNeighbors = [] //The subsquare neighbors

        this.state = "possible"

        /* Three possible states:
           1- Default : The user can not change it
           2- Heuristic: The value was set by an algorithm(backtrack) or a technique(naked or hidden single) 
           3- Possible: The value was set by the user
        */

    }

    getAllNeighbors() {
        let neighbors = []
        neighbors = neighbors.concat(this.rowNeighbors, this.colNeighbors, this.subMatrixNeighbors)
        return neighbors
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
        this.setRowNeighbors(sudoku)
        this.setColNeighbors(sudoku)
        this.setSubMatrixNeighbors(subMatrix)
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
        return !neighbors.some((n) => n.value === value)
    }

    setValueAndState(value = 0, state = "possible") {
        this.value = value
        this.state = state
    }

    cleanNeighbors() {
        this.rowNeighbors = []
        this.colNeighbors = []
        this.subMatrixNeighbors = []
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
/*
Authors:
	Andrey Arguedas Espinoza
	Daniela Armas Sánchez
	Michael Chen Wang
	Kimberly Olivas Delgado
*/




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

    setValueAndState(i, j, value, state) {
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
                    this.grid[i][j] = new __WEBPACK_IMPORTED_MODULE_0__spot__["a" /* Spot */](i, j, (sudoku[i][j].value != undefined) ?
                        sudoku[i][j].value //For Saved Matches
                        :
                        sudoku[i][j])) //For Sudokus loaded by simple JSONS
        });
        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["range"])(this.rows).map((x, i) => {
            Object(__WEBPACK_IMPORTED_MODULE_1__utils__["range"])(this.cols).map((y, j) => {
                this.grid[i][j].state = (sudoku[i][j].state != undefined) ?
                    sudoku[i][j].state //For Saved Matches
                    :
                    sudoku[i][j] ? "default" : "possible" //For Sudokus loaded by simple JSONS
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
/*
Authors:
	Andrey Arguedas Espinoza
	Daniela Armas Sánchez
	Michael Chen Wang
	Kimberly Olivas Delgado
*/





class SudokuGenerator {
    constructor() {
        this.sudokuHelper = new __WEBPACK_IMPORTED_MODULE_1__sudokuHelper__["a" /* SudokuHelper */]();
    }

    solve(sudoku) {
        if (!this.sudokuHelper.hasEmptyValues(sudoku)) //Si ya todos los spots tienen un numero es que esta solucionado
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

    generate(sudoku) { //Este sudoku por parámetro ingresa vacío pero sale con sólo 17 spots de la solución
        this.sudokuHelper.resetNeighbors(sudoku)
        this.sudokuHelper.resetSudoku(sudoku)
        let newSudoku = new __WEBPACK_IMPORTED_MODULE_0__sudoku__["a" /* Sudoku */](9, 9) // Se crea un sudoku vacío
        this.sudokuHelper.generateNeighbors(newSudoku); // Se le asignan los vecinos
        this.solve(newSudoku); //Solves newsudoku entirely
        let spotsWithValues = Math.floor(Math.random() * 5) + 17 //17 to 23 spots
        while (spotsWithValues > this.sudokuHelper.countValues(sudoku)) {
            let row = Math.floor(Math.random() * 9)
            let col = Math.floor(Math.random() * 9)
            let value = newSudoku.getValue(row, col) //Se obtiene el valor de un spot aleatorio del newSudoku (resuelto)
            if (!sudoku.getValue(row, col)) //Verifica que ese spot en el sudoku (parámetro) no tenga valor (o sea que sea igual a 0)
                sudoku.setSpot(row, col, value) // Asigna el valor en el spot del sudoku (parámetro)
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SudokuGenerator;


/***/ }),

/***/ "../../../../../client/assets/js/sudokuHelper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
Authors:
	Andrey Arguedas Espinoza
	Daniela Armas Sánchez
	Michael Chen Wang
	Kimberly Olivas Delgado
*/

/* This class will help in some operations, to separate basic logic */

class SudokuHelper {

    constructor() {
        this.subMatrix = []
    }

    /* Generates row, column and subMatrix neighbors for each spot */

    generateNeighbors(sudoku) {
        this.generateSubMatrix(sudoku)
        let grid = sudoku.grid
        grid.forEach(x => x.forEach(elem => elem.setNeighbors(sudoku, this.findInSubMatrix(elem))))
    }

    resetSudoku(sudoku, fun = z => z == "possible" || z == "heuristic") {
        sudoku.grid.forEach((row, i) => {
            row.forEach((spot, j) => {
                if (fun(sudoku.getSpot(i, j).state))
                    sudoku.setValueAndState(i, j, 0, "possible") //Sets to zero
            })
        })
    }


    gridToMatrix(grid) { //Grid of spots to a grid with only integers
        return grid.map(x => x.map(y => y.value))
    }

    nextEmpty(sudoku) { //Gives the coordinates of the next empty spot
        let grid = sudoku.grid
        return grid.reduce((z, x, i) =>
            x.reduce((acum, e, j) => !sudoku.getValue(i, j) ? { row: i, col: j } : acum, z), {})
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

    generateSubMatrix(sudoku) {
        range(1, sudoku.rows, 3).forEach(row => {
            range(1, sudoku.cols, 3).forEach(col => {
                this.subMatrix.push(this.getSubMatrix(sudoku, row, col))
            })
        })
    }

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

    compareGrids(oldGrid, newGrid) {
        return oldGrid.reduce((z, x, i) =>
            x.reduce((acum, e, j) =>
                e != newGrid[i][j].value ? false : acum, z), true)
    }

    hasEmptyValues(sudoku) { //Auxiliar to see if sudoku has empty values
        return sudoku.grid.some(x => x.some(y => !y.value))
    }

    handleException(current, value) { //Returns if the row or column or subMatrix is blocking
        let cols = current.colNeighbors.some(x => x.value == value);
        let rows = current.rowNeighbors.some(x => x.value == value);
        let subm = current.subMatrixNeighbors.some(x => x.value == value);

        switch (cols || rows || subm) {
            case cols && rows && subm:
                return "allException";
            case rows && cols:
                return "rowColException";
            case cols && subm:
                return "colMatrixException";
            case rows && subm:
                return "rowMatrixException";
            case rows:
                return "rowException";
            case cols:
                return "columnException";
            case subm:
                return "subMatrixException";
            default:
                break;
        }
    }

    /* Counts how many spots have values different than zero */
    countValues(sudoku) {
        let grid = sudoku.grid
        return grid.reduce((z, x) => x.reduce((acum, e) => e.value ? ++acum : acum, z), 0)
    }

    resetNeighbors(sudoku) {
        let grid = sudoku.grid
        grid.forEach(x => x.forEach(s => s.cleanNeighbors()))
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SudokuHelper;


/***/ }),

/***/ "../../../../../client/assets/js/sudokuSolver.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sudokuHelper__ = __webpack_require__("../../../../../client/assets/js/sudokuHelper.js");
/*
Authors:
	Andrey Arguedas Espinoza
	Daniela Armas Sánchez
	Michael Chen Wang
	Kimberly Olivas Delgado
*/



class SudokuSolver {
    constructor() {
        this.sudokuHelper = new __WEBPACK_IMPORTED_MODULE_0__sudokuHelper__["a" /* SudokuHelper */]()
    }

    solve(sudoku) {
        if (!this.sudokuHelper.hasEmptyValues(sudoku)) //Si ya todos los spots tienen un numero es que esta solucionado
            return true
        else {
            let curr = this.sudokuHelper.nextEmpty(sudoku); //Sacamos la fila y columna del primer spot vacio que encuentre
            let currentSpot = sudoku.getSpot(curr.row, curr.col); //Nos traemos al objeto en esa posicion

            for (let o = 1; o <= 9; o++) { //Para cada posibilidad
                if (currentSpot.isValidOption(o)) { //Si es valida (No esta en la fila, columna o submatriz)
                    currentSpot.setValueAndState(o, "heuristic") //Value is set by the algorithm
                    if (this.solve(sudoku)) //Recursive call
                        return true //The sudoku is solved
                }
            }
            currentSpot.value = 0 //BACKTRACK 
        }
        return false; //Breaks recursion
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SudokuSolver;


/***/ }),

/***/ "../../../../../client/assets/js/sudokuSolverStep.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sudokuHelper__ = __webpack_require__("../../../../../client/assets/js/sudokuHelper.js");
/*
Authors:
	Andrey Arguedas Espinoza
	Daniela Armas Sánchez
	Michael Chen Wang
	Kimberly Olivas Delgado
*/



/* This solver emulates the backtrack algorithm without using recursion, that's why it uses a stack
    the use of this technique was necessary to show every step in the solution process of the algorithm
*/

class SudokuSolverStep {
    constructor() {
        this.sudokuHelper = new __WEBPACK_IMPORTED_MODULE_0__sudokuHelper__["a" /* SudokuHelper */]() //Helps with some commons methods of a sudoku
        this.stack = [] //To manage recursion without using native recursion
        this.backtrack = false //A variable to record if last iteration required backtrack
    }

    solve(sudoku) {
        if (!this.sudokuHelper.hasEmptyValues(sudoku)) //If sudoku is solved the algorithm ends
            return true
        else {
            let curr = this.sudokuHelper.nextEmpty(sudoku) //Coordinates of next empty spot
            let currentSpot = sudoku.getSpot(curr.row, curr.col) //Empty spot
            let o = 1
            if (this.backtrack) {
                let back = this.stack.pop()
                o = back.value + 1
                currentSpot = back.last
                this.backtrack = false
            }
            for (; o <= 9; o++) { //Para cada posibilidad
                if (currentSpot.isValidOption(o)) { //Si es valida (No esta en la fila, columna o submatriz)
                    currentSpot.setValueAndState(o, "heuristic")
                    this.stack.push({ last: currentSpot, value: o })
                    return false
                }
            }
            let lastSpot = this.lastInStack().last
            sudoku.setValue(lastSpot.row, lastSpot.col) //Puts to zero
            this.backtrack = true //Backtrack needed
        }
    }

    lastInStack() {
        return this.stack[this.stack.length - 1]
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = SudokuSolverStep;


/***/ }),

/***/ "../../../../../client/assets/js/utils.js":
/***/ (function(module, exports) {

/*
Authors:
	Andrey Arguedas Espinoza
	Daniela Armas Sánchez
	Michael Chen Wang
	Kimberly Olivas Delgado
*/

/**
 * This method was copied from Underscore.js
 * http://underscorejs.org/
 */
range = function(start, stop, step) {
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