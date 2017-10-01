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


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1 id=\"title\">SUDOKU</h1>\r\n</div>\r\n<div class=\"container-fluid\" id=\"sudokuBox\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\" id=\"options\">\r\n            <app-options></app-options>\r\n        </div>\r\n        <div class=\"col-sm-9\" id=\"divPrincipal\">\r\n            <div id=\"screen\">\r\n                <app-sudoku></app-sudoku>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

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
//This is where all the decorators are 
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_user_user_component__ = __webpack_require__("../../../../../client/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_sudoku_sudoku_component__ = __webpack_require__("../../../../../client/app/components/sudoku/sudoku.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_options_options_component__ = __webpack_require__("../../../../../client/app/components/options/options.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_load_sudoku_service__ = __webpack_require__("../../../../../client/app/services/load-sudoku.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_save_sudoku_service__ = __webpack_require__("../../../../../client/app/services/save-sudoku.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_communication_service__ = __webpack_require__("../../../../../client/app/services/communication.service.ts");
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
            __WEBPACK_IMPORTED_MODULE_7__components_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_sudoku_sudoku_component__["a" /* SudokuComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_options_options_component__["a" /* OptionsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__services_load_sudoku_service__["a" /* LoadSudokuService */],
            __WEBPACK_IMPORTED_MODULE_11__services_save_sudoku_service__["a" /* SaveSudokuService */],
            __WEBPACK_IMPORTED_MODULE_12__services_communication_service__["a" /* CommunicationService */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//Everything in the project will have to be imported into this file
/*
    Declarations:
      Components
    Imports:
      Modules
        Form Modules
        Http Modules
    Providers:
      Services
    Bootstrap:
      Only root component
*/
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../client/app/components/options/options.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/options/options.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"save\">\r\n    <button class=\"btn btn-primary btn-block\" id=\"saveGame\" (click)=\"openModal(template)\"> SAVE GAME <span class=\"glyphicon glyphicon-floppy-disk\"></span></button>\r\n</div>\r\n<br>\r\n<div id=\"load\">\r\n    <button class=\"btn btn-primary btn-block\" id=\"loadGame\" (click)=\"openModal(loadModal)\"> LOAD GAME <span class=\"glyphicon glyphicon-open\"></span></button>\r\n</div>\r\n<br>\r\n<div id=\"generate\">\r\n    <button class=\"btn btn-info btn-block\" id=\"generateGame\" (click)=\"generate() \"> GENERATE GAME </button></div>\r\n<br>\r\n<div class=\"input-group\">\r\n    <select class=\"form-control \" id=\"difficulty\">\r\n                        <option selected>Easy</option>\r\n                        <option>Medium</option>\r\n                        <option>Hard</option>\r\n                    </select>\r\n    <div id=\"level \">\r\n        <button class=\"btn btn-primary btn-block \" id=\"selectDifficulty\" (click)=\"openModal(resignModal)\"> SELECT DIFFICULTY </button>\r\n    </div>\r\n</div>\r\n<br>\r\n<div id=\"solution \">\r\n    <button class=\"btn btn-success btn-block \" id=\"showSolution \" (click)=\"solve() \"> SHOW SOLUTION </button>\r\n</div>\r\n<br>\r\n\r\n<!-- Modal oculto para preguntar por el usuario con el que desea guardar la partida -->\r\n<ng-template #template>\r\n    <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">&times;</button>\r\n        <h4 class=\"modal-title\" id=\"myModalTitle\">SAVE THIS GAME</h4>\r\n    </div>\r\n\r\n    <div class=\"modal-body\" id=\"myModalMessage\">\r\n        <form role=\"form\" onsubmit=\"return false;\" id=\"formSaveGame\">\r\n            <div class=\"form-group\" id=\"groupUsername\">\r\n                <label for=\"username\">User name:</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"username\" autofocus=\"true\" placeholder=\"Your name\" maxlength=\"30\" required/>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <button type=\"submit\" class=\"btn btn-primary\" id=\"send\" (click)=\"saveSudoku()\">SAVE <span class=\"glyphicon glyphicon-floppy-disk\"></span></button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #resignModal>\r\n    <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">&times;</button>\r\n        <h4 class=\"modal-title\" id=\"myModalTitle\">ARE YOU SURE YOU WANT TO RESIGN?</h4>\r\n    </div>\r\n\r\n    <div class=\"modal-body\" id=\"myModalMessage\">\r\n        <button id=\"btnConfirm\" class=\"btn btn-primary\" (click)=\"changeDifficulty()\">Yes, I want to resign</button>\r\n        <button id=\"btnCancel\"  class=\"btn btn-warning\"  (click)=\"modalRef.hide()\">No, I will keep struggling</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #loadModal>\r\n    <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">&times;</button>\r\n        <h4 class=\"modal-title\" id=\"myModalTitle\">LOAD YOUR GAMES</h4>\r\n    </div>\r\n\r\n    <div class=\"modal-body\" id=\"myModalMessage\">\r\n        <form role=\"form\" onsubmit=\"return false;\" id=\"formLoadGame\">\r\n            <div class=\"form-group\" id=\"groupUsername\">\r\n                <label for=\"loadUserName\">User name:</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"loadUserName\" autofocus=\"true\" placeholder=\"Your name\" maxlength=\"30\" required/>\r\n            </div>\r\n\r\n            <div class=\"form-group\" id=\"games\">\r\n                \r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <button type=\"submit\" class=\"btn btn-primary\" id=\"load\" (click)=\"loadGames()\">LOAD GAMES <span class=\"glyphicon glyphicon-open\"></span></button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../client/app/components/options/options.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_load_sudoku_service__ = __webpack_require__("../../../../../client/app/services/load-sudoku.service.ts");
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
    function OptionsComponent(modalService, communicationService, loadSudokuService) {
        var _this = this;
        this.modalService = modalService;
        this.communicationService = communicationService;
        this.loadSudokuService = loadSudokuService;
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
        this.loadSudokuService.getGames(userName, function (err, data) {
            _this.renderGames(JSON.parse(data._body).matches);
        });
    };
    OptionsComponent.prototype.renderGames = function (data) {
        var _this = this;
        data.forEach(function (x) { return __WEBPACK_IMPORTED_MODULE_4_jquery__('#games').append(__WEBPACK_IMPORTED_MODULE_4_jquery__('<div class="loadMatchPanel">' +
            "<p class='info'> ID of your saved game: " + x._id + " </p>" +
            "<p class='info'> Date when you saved the game: " + x.date + "</p>" +
            "</div>").click(function () { return _this.renderSavedGame(x.grid); })); });
    };
    OptionsComponent.prototype.renderSavedGame = function (grid) {
        console.log("Estoy listo para renderear el grid, me llego", grid);
        this.communicationService.callRenderGame(grid);
        this.modalRef.hide();
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_communication_service__["a" /* CommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_communication_service__["a" /* CommunicationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_load_sudoku_service__["a" /* LoadSudokuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_load_sudoku_service__["a" /* LoadSudokuService */]) === "function" && _c || Object])
], OptionsComponent);

var _a, _b, _c;
//# sourceMappingURL=options.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/sudoku/sudoku.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/sudoku/sudoku.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>{{jsonSudoku}}</h3>"

/***/ }),

/***/ "../../../../../client/app/components/sudoku/sudoku.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SudokuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_load_sudoku_service__ = __webpack_require__("../../../../../client/app/services/load-sudoku.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_save_sudoku_service__ = __webpack_require__("../../../../../client/app/services/save-sudoku.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_communication_service__ = __webpack_require__("../../../../../client/app/services/communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_js_sudoku__ = __webpack_require__("../../../../../client/assets/js/sudoku.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_js_option__ = __webpack_require__("../../../../../client/assets/js/option.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_js_painter__ = __webpack_require__("../../../../../client/assets/js/painter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_js_sudokuGenerator__ = __webpack_require__("../../../../../client/assets/js/sudokuGenerator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_js_sudokuHelper__ = __webpack_require__("../../../../../client/assets/js/sudokuHelper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets_js_sudokuSolver__ = __webpack_require__("../../../../../client/assets/js/sudokuSolver.js");
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
    function SudokuComponent(loadSudokuService, saveSudokuService, communicationService) {
        var _this = this;
        this.loadSudokuService = loadSudokuService;
        this.saveSudokuService = saveSudokuService;
        this.communicationService = communicationService;
        this.sudoku = new __WEBPACK_IMPORTED_MODULE_4__assets_js_sudoku__["a" /* Sudoku */](9, 9);
        this.sudokuSolver = new __WEBPACK_IMPORTED_MODULE_9__assets_js_sudokuSolver__["a" /* SudokuSolver */]();
        this.sudokuHelper = new __WEBPACK_IMPORTED_MODULE_8__assets_js_sudokuHelper__["a" /* SudokuHelper */]();
        this.sudokuGenerator = new __WEBPACK_IMPORTED_MODULE_7__assets_js_sudokuGenerator__["a" /* SudokuGenerator */]();
        this.communicationService.solve$.subscribe(function () { return _this.solve(); });
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
        var sketch = function (p) {
            _this.painter = new __WEBPACK_IMPORTED_MODULE_6__assets_js_painter__["a" /* Painter */](60, p);
            var clicked = false;
            var options = [];
            p.preload = function () {
                //jsonData = p.loadJSON('../../../assets/js/sudokuCases.json');
                _this.changeDifficulty('easy');
                //this.jsonSudoku = this.loadSudokuService.getSudoku('anyLevelPotentialCodeInjection')
            };
            p.setup = function () {
                _this.canvas = p.createCanvas(700, 545);
                _this.canvas.parent('screen');
                p.background(220);
                //sudoku.load(jsonData.grid);
                //this.saveSudokuService.saveSudoku(sudoku);
                //sudokuHelper.generateNeighbors(sudoku);
                _this.painter.paintSudoku(_this.sudoku);
                for (var i = 1; i <= _this.sudoku.rows; i++)
                    options.push(new __WEBPACK_IMPORTED_MODULE_5__assets_js_option__["a" /* Option */](p.width - 80, i * 60 - 30, i, p));
            };
            p.draw = function () {
                p.background(220);
                _this.painter.paintSudoku(_this.sudoku);
                drawOptions();
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
                for (var i = 0; i < options.length; i++)
                    if (options[i].collides(p.mouseX, p.mouseY)) {
                        var mapX = Math.floor(p.map(p.mouseX, 0, 545, 0, 9));
                        var mapY = Math.floor(p.map(p.mouseY, 0, p.height, 0, 9));
                        _this.sudoku.setValue(mapY, mapX, options[i].value);
                        options[i].restart();
                    }
            };
        };
        var myP5 = new p5(sketch);
    };
    SudokuComponent.prototype.solve = function () {
        return this.sudokuSolver.solve(this.sudoku);
    };
    SudokuComponent.prototype.generate = function () {
        this.sudokuGenerator.generate(this.sudoku);
        this.sudokuHelper.generateNeighbors(this.sudoku);
    };
    SudokuComponent.prototype.getDifficulty = function () {
        return this.communicationService.callGetDifficulty();
    };
    SudokuComponent.prototype.changeDifficulty = function (level) {
        var _this = this;
        this.loadSudokuService.getSudoku(level, function (err, data) {
            console.log("Cambiando DIFICULTAD llego", JSON.parse(data._body).grid);
            _this.sudoku.load(JSON.parse(data._body).grid);
            _this.sudokuHelper.generateNeighbors(_this.sudoku);
            _this.painter.paintSudoku(_this.sudoku);
        });
    };
    SudokuComponent.prototype.renderGame = function (grid) {
        console.log("llegue a renderear el juego y llego", grid);
        this.sudoku.loadSavedMatch(grid);
        this.sudokuHelper.generateNeighbors(this.sudoku);
        this.painter.paintSudoku(this.sudoku);
    };
    SudokuComponent.prototype.saveSudoku = function (user) {
        console.log("Estoy en sudoku componet");
        console.log(user);
        this.saveSudokuService.saveSudoku(user, this.sudoku);
    };
    return SudokuComponent;
}());
SudokuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-sudoku',
        template: __webpack_require__("../../../../../client/app/components/sudoku/sudoku.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/sudoku/sudoku.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_load_sudoku_service__["a" /* LoadSudokuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_load_sudoku_service__["a" /* LoadSudokuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_save_sudoku_service__["a" /* SaveSudokuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_save_sudoku_service__["a" /* SaveSudokuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_communication_service__["a" /* CommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_communication_service__["a" /* CommunicationService */]) === "function" && _c || Object])
], SudokuComponent);

var _a, _b, _c;
//# sourceMappingURL=sudoku.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user works!\n</p>\n"

/***/ }),

/***/ "../../../../../client/app/components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../client/app/components/user/user.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserComponent);

//# sourceMappingURL=user.component.js.map

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
        this.generateCallSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.getDifficultyCallSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.changeDifficultyCallSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.saveSudokuCallSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.loadGamesCallSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.renderGameCallSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        // Observable string streams
        this.solve$ = this.solveCallSource.asObservable();
        this.generate$ = this.generateCallSource.asObservable();
        this.getDifficulty$ = this.getDifficultyCallSource.asObservable();
        this.changeDifficulty$ = this.changeDifficultyCallSource.asObservable();
        this.saveSudoku$ = this.saveSudokuCallSource.asObservable();
        this.loadGames$ = this.loadGamesCallSource.asObservable();
        this.renderGame$ = this.renderGameCallSource.asObservable();
    }
    // Service message commands
    CommunicationService.prototype.callSolve = function () {
        this.solveCallSource.next();
    };
    CommunicationService.prototype.callGenerate = function () {
        this.generateCallSource.next();
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
                return { value: obj[i][j].value, default: obj[i][j].default };
            });
        });
        return result;
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

/***/ "../../../../../client/assets/js/option.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Option {

  constructor(x, y, value, lib) {
    this.value = value; //The idea is when a spot has value 0 will be a empty square
    this.x = x;
    this.y = y;
    this.original = { x : this.x, y : this.y}
    this.lib = lib;
  }

  show(){
    this.lib.textSize(24);
    this.lib.fill(0, 102, 153); 
    this.lib.ellipse( this.x, this.y, 30, 30); 
    this.lib.fill(255); 
    this.lib.text(this.value, this.x - 5, this.y + 10);
  }

  restart(){
    this.x = this.original.x;
    this.y = this.original.y;
  }

  collides(x, y){
    if(this.lib.dist(this.x, this.y, x, y) < 30)
      return true;
    return false;
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Option;


/***/ }),

/***/ "../../../../../client/assets/js/painter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Painter{ //This class wil be in charge of paint in the matrix

  constructor(dimension, lib){
      this.dimension = dimension;
      this.lib = lib;
  }

  paintSudoku(sudoku){ //Make more elegant
    for(let i = 0; i < sudoku.rows; i++)
      for(let j = 0; j < sudoku.cols; j++){
        this.lib.fill(255);
        this.lib.rect(i * this.dimension, j * this.dimension, this.dimension, this.dimension);
        this.paintBorderLines(i, j);
      }
      
    this.paintNumbers(sudoku);     
  }

  paintNumbers(sudoku){
    for(let i = 0; i < sudoku.rows; i++)
      for(let j = 0; j < sudoku.cols; j++)
        if(sudoku.getValue(i, j) !== 0)
          this.paintNumber(sudoku.getValue(i, j), i, j, sudoku.getSpot(i, j).default);
  }

  paintNumber(number, i, j, def = false){
    this.lib.textSize(this.dimension);
    if(def)
      this.lib.fill(255, 0, 0);
    else
      this.lib.fill(0, 102, 153);
    this.lib.text(number, j * this.dimension + 20,  ( i + 1) * this.dimension - 10);
  }

  paintBorderLines(row, col){
    this.lib.fill(50);
    if( col % 3 === 0){
      if(row % 3 === 0)
        this.lib.rect(row * this.dimension, col * this.dimension, 5, this.dimension);
      this.lib.rect(row * this.dimension, col * this.dimension, this.dimension, 5);
    }
    else{
      if(row % 3 === 0)
        this.lib.rect(row * this.dimension, col * this.dimension, 5, this.dimension);
    }
    if(col === 8)
      this.lib.rect(row * this.dimension, (col + 1) * this.dimension, this.dimension, 5);
    if(row === 8)
      this.lib.rect( (row + 1) * this.dimension, col * this.dimension, 5, this.dimension);
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

    this.default = false; //Default is if is a value hardcoded before the start of solving

  }

  getAllNeighbors() {
    let neighbors = [];
    neighbors = neighbors.concat(this.rowNeighbors, this.colNeighbors, this.subMatrixNeighbors);
    return neighbors;
  }


  setNeighbors(sudoku, subMatrix) {
    this.setRowNeighbors(sudoku);
    this.setColNeighbors(sudoku);
    this.setSubMatrixNeighbors(subMatrix);
  }


  setRowNeighbors(sudoku) {
    range(sudoku.rows).forEach( (x, i) => {
      if (i <= 8 && i !== this.row) this.rowNeighbors.push(sudoku.getSpot(i, this.col))
    } );
  }

  setColNeighbors(sudoku) {
    range(sudoku.cols).forEach( (x, j) => {
      if (j <= 8 && j !== this.col) this.colNeighbors.push(sudoku.getSpot(this.row, j))
    } );
  }

  setSubMatrixNeighbors(subMatrix) {
    range(subMatrix.length).forEach( (x, i) => {
      if (subMatrix[i] !== this) this.subMatrixNeighbors.push(subMatrix[i])
    } )
  }

  isValidOption(value) {
    let neighbors = this.getAllNeighbors();
    return !neighbors.some((n) => n.value === value);
  }


}
/* harmony export (immutable) */ __webpack_exports__["a"] = Spot;


/*module.exports = { //Remove this at working with p5
  Spot
}*/

/***/ }),

/***/ "../../../../../client/assets/js/sudoku.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spot__ = __webpack_require__("../../../../../client/assets/js/spot.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("../../../../../client/assets/js/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__utils__);
//let {Spot} = require('./spot'); //Only necessary for mocha not for p5




class Sudoku {

	constructor(rows, cols) {
		this.rows = rows;
		this.cols = cols;

		this.grid = Array.from( new Array(this.rows), (x, i) => {
			return Array.from( new Array(this.cols), (x, j) => new __WEBPACK_IMPORTED_MODULE_0__spot__["a" /* Spot */](i, j) )
		} )
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

	setSpot(i, j, value, def = true) {
      this.grid[i][j].value = value;
      this.grid[i][j].default = def;
  }

    clean(){
    	this.grid.forEach( (x, i) => { x.forEach( (elem, j) => {
        	elem.value = 0;
        	elem.default = false;
   		 } )} );
  	}

	load(sudoku) { //Loads from json
		Object(__WEBPACK_IMPORTED_MODULE_1__utils__["range"])(this.rows).map((x, i) => {
			Object(__WEBPACK_IMPORTED_MODULE_1__utils__["range"])(this.cols).map( (y, j) => this.grid[i][j] = new __WEBPACK_IMPORTED_MODULE_0__spot__["a" /* Spot */](i, j, sudoku[i][j]) )
		});
		Object(__WEBPACK_IMPORTED_MODULE_1__utils__["range"])(this.rows).map((x, i) => {
			Object(__WEBPACK_IMPORTED_MODULE_1__utils__["range"])(this.cols).map( (y, j) => {
				this.grid[i][j].default = sudoku[i][j] ? true : false
			} )
		});
	}

	loadSavedMatch(sudoku){
		Object(__WEBPACK_IMPORTED_MODULE_1__utils__["range"])(this.rows).map((x, i) => {
			Object(__WEBPACK_IMPORTED_MODULE_1__utils__["range"])(this.cols).map( (y, j) => this.grid[i][j] = new __WEBPACK_IMPORTED_MODULE_0__spot__["a" /* Spot */](i, j, sudoku[i][j].value) )
		});
		Object(__WEBPACK_IMPORTED_MODULE_1__utils__["range"])(this.rows).map((x, i) => {
			Object(__WEBPACK_IMPORTED_MODULE_1__utils__["range"])(this.cols).map( (y, j) => {
				this.grid[i][j].default = sudoku[i][j].default
			} )
		});
	}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Sudoku;


/*module.exports = { //Remove this at working with p5
  Sudoku
}*/

/***/ }),

/***/ "../../../../../client/assets/js/sudokuGenerator.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sudoku__ = __webpack_require__("../../../../../client/assets/js/sudoku.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sudokuHelper__ = __webpack_require__("../../../../../client/assets/js/sudokuHelper.js");



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
                    sudoku.setValue(currentSpot.row, currentSpot.col, o); //Le metemos el valor      
                    if (this.solve(sudoku)) //Vuelva a ejecutar este algoritmo (Note que en la proxima llamada este spot ya no sera empty)
                        return true; //Si llega hasta aca es que lo soluciono
                }
                options = options.filter(x => x != o); //Elimina del array la opción ya que no fue válida
            }
            sudoku.setValue(currentSpot.row, currentSpot.col); //BACKTRACK Si llega aca es por que hubo backtrack, borra el current ya que la opcion escogida no era correcta
        }
        return false; //Este return permite romper la recursion, sino la pila se llenaria
    }

    //Pasar a funcional
    hasEmptyValues(sudoku) { //Auxiliar to see if sudoku is solved, this should be in sudoku helper
        for (let i = 0; i < sudoku.rows; i++)
            for (let j = 0; j < sudoku.cols; j++)
                if (sudoku.getValue(i, j) === 0)
                    return true;
        return false;
    }

    generate(sudoku) { //Este sudoku por parámetro ingresa vacío pero sale con sólo 17 spots de la solución
        //HACER FUNCIONAL
        let newSudoku = new __WEBPACK_IMPORTED_MODULE_0__sudoku__["a" /* Sudoku */](9, 9); // Se crea un sudoku vacío
        this.sudokuHelper.generateNeighbors(newSudoku); // Se le asignan los vecinos
        this.solve(newSudoku); //Se resuelve el newSudoku por completo
        let i = 0;
        while (i < 17) { //Para que asigne sólo 17 casillas por default
            let row = Math.floor(Math.random() * 8);
            let col = Math.floor(Math.random() * 8);
            let value = newSudoku.getValue(row, col); //Se obtiene el valor de un spot aleatorio del newSudoku (resuelto)
            if (!sudoku.getValue(row, col)) { //Verifica que ese spot en el sudoku (parámetro) no tenga valor (o sea que sea igual a 0)
                sudoku.setSpot(row, col, value); // Asigna el valor en el spot del sudoku (parámetro)
                i++;
            }
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SudokuGenerator;


/***/ }),

/***/ "../../../../../client/assets/js/sudokuHelper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class SudokuHelper { //This class will help in some operations, to separate basic logic from other logic
	
	constructor(){
		this.subMatrix = [];
	}

	generateNeighbors(sudoku) {
		this.generateSubMatrix(sudoku);
		let grid = sudoku.grid;
		grid.forEach( (x, i) => {
			x.forEach( (elem, j) => {
				elem.setNeighbors(sudoku, this.findInSubMatrix(elem))
			} )
		} );
	}

	nextEmpty(sudoku) {
		let grid = sudoku.grid;
		let result = {};
		grid.forEach( (x, i) => {
			x.forEach( (elem, j) => {
				if( !sudoku.getValue(i, j) ) result = { row: i, col: j }
			} )
		} );
		return result;
	}

	findInSubMatrix(spot){
		return this.subMatrix.find( elem => elem.indexOf(spot) > -1 );
	}

	generateSubMatrix(sudoku){ //Cambiar por generadores, que acepten intervalos
		//Chen como cambiaria usted esto?
		//range(1, sudoku.rows, 3).forEach( (x, i) => { range(1, sudoku.cols, 3).forEach( (elem, j) => this.subMatrix.push( this.getSubMatrix(sudoku,i, j) ) ) } );
		for(let i = 1; i < sudoku.rows; i += 3)
			for(let j = 1; j < sudoku.cols; j += 3)
				this.subMatrix.push( this.getSubMatrix(sudoku,i, j) );
	}

	/**
	 * Creates an array of the submatrix by adding 9 spots, requires a centered i & j
	 * @param {*} sudoku 
	 * @param {*} i 
	 * @param {*} j 
	 * @return {[]} subMatrix
	 */
	getSubMatrix(sudoku,i, j){
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
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SudokuHelper;



/***/ }),

/***/ "../../../../../client/assets/js/sudokuSolver.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sudokuHelper__ = __webpack_require__("../../../../../client/assets/js/sudokuHelper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__painter__ = __webpack_require__("../../../../../client/assets/js/painter.js");



class SudokuSolver {
	constructor(){
		this.sudokuHelper = new __WEBPACK_IMPORTED_MODULE_0__sudokuHelper__["a" /* SudokuHelper */]();
		this.painter = new __WEBPACK_IMPORTED_MODULE_1__painter__["a" /* Painter */](60);
	}

	solve(sudoku){
		if( !this.hasEmptyValues(sudoku) ) //Si ya todos los spots tienen un numero es que esta solucionado
			return true;
		else {
				let curr = this.sudokuHelper.nextEmpty(sudoku); //Sacamos la fila y columna del primer spot vacio que encuentre
				let currentSpot = sudoku.getSpot(curr.row, curr.col);//Nos traemos al objeto en esa posicion

				for(let o = 1; o <= 9; o++){ //Para cada posibilidad
					if(currentSpot.isValidOption(o)){ //Si es valida (No esta en la fila, columna o submatriz)
						sudoku.setValue(currentSpot.row, currentSpot.col, o); //Le metemos el valor
						//this.painter.paintSudoku(sudoku); //Desearia que cada set de valor se viera, pero p5 no lo hace asi por que la funcion draw ya usa un for, y se stackearia horrible
						if(this.solve(sudoku)) //Vuelva a ejecutar este algoritmo (Note que en la proxima llamada este spot ya no sera empty)
							return true; //Si llega hasta aca es que lo soluciono
					}
				}
				sudoku.setValue(currentSpot.row, currentSpot.col); //BACKTRACK Si llega aca es por que hubo backtrack, borra el current ya que la opcion escogida no era correcta
			}
		return false; //Este return permite romper la recursion, sino la pila se llenaria
		
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
/* harmony export (immutable) */ __webpack_exports__["a"] = SudokuSolver;


/***/ }),

/***/ "../../../../../client/assets/js/utils.js":
/***/ (function(module, exports) {

//Copied from Underscore.js
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

module.exports = {
    range
}

/**
 * export class Utils {
    constructor() { }
    range (start, stop, step) {
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
}

 */

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