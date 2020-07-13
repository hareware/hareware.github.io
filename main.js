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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");
    } }, directives: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]], styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  box-sizing: border-box;\r\n  width: 100vw;\r\n  height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _battle_battle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./battle/battle.component */ "./src/app/battle/battle.component.ts");
/* harmony import */ var _battle_trooper_trooper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./battle/trooper/trooper.component */ "./src/app/battle/trooper/trooper.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__["IntroComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _battle_battle_component__WEBPACK_IMPORTED_MODULE_3__["BattleComponent"],
        _battle_trooper_trooper_component__WEBPACK_IMPORTED_MODULE_4__["TrooperComponent"],
        _board_board_component__WEBPACK_IMPORTED_MODULE_6__["BoardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__["IntroComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _battle_battle_component__WEBPACK_IMPORTED_MODULE_3__["BattleComponent"],
                    _battle_trooper_trooper_component__WEBPACK_IMPORTED_MODULE_4__["TrooperComponent"],
                    _board_board_component__WEBPACK_IMPORTED_MODULE_6__["BoardComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/battle/battle.component.ts":
/*!********************************************!*\
  !*** ./src/app/battle/battle.component.ts ***!
  \********************************************/
/*! exports provided: BattleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattleComponent", function() { return BattleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _trooper_trooper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trooper/trooper.component */ "./src/app/battle/trooper/trooper.component.ts");





const _c0 = function (a0, a1) { return { ko: a0, ok: a1 }; };
function BattleComponent_app_trooper_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-trooper", 8);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, ctx_r0.winEvil, ctx_r0.winGood))("config", ctx_r0.goodTrooperConfig);
} }
function BattleComponent_app_trooper_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-trooper", 9);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, ctx_r1.winGood, ctx_r1.winEvil))("config", ctx_r1.evilTrooperConfig);
} }
function BattleComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "The good guy has won");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function BattleComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "The bad guy has won");
} }
const _c1 = function (a0) { return { visible: a0 }; };
function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
class BattleComponent {
    constructor() {
        this.end = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.characters$.subscribe((params) => {
            console.log(params);
            if (params && !this.fighting) {
                this.goodTrooperConfig = params.good;
                this.evilTrooperConfig = params.evil;
                this.winGood = false;
                this.winEvil = false;
                this.fight();
            }
        });
    }
    onEnd() {
        if (this.winGood) {
            this.end.emit('The good guys have won');
        }
        else {
            this.end.emit('The bad guys have won');
        }
        this.fighting = false;
    }
    attack() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.goodTrooperConfig.animation = 'attack';
            this.evilTrooperConfig.animation = 'attack';
            yield timeout(100);
            this.goodTrooperConfig.animation = 'stand';
            this.evilTrooperConfig.animation = 'stand';
            yield timeout(100);
        });
    }
    fight() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.fighting = true;
            const youWin = Math.floor(Math.random() * 2) + 1;
            yield this.attack();
            yield this.attack();
            yield this.attack();
            yield this.attack();
            yield this.attack();
            if (youWin === 1) {
                this.winGood = true;
                this.winEvil = false;
                this.goodTrooperConfig.animation = 'stand';
                this.evilTrooperConfig.animation = 'dead';
                yield timeout(500);
                this.goodTrooperConfig.animation = 'win';
            }
            else {
                this.winGood = false;
                this.winEvil = true;
                this.goodTrooperConfig.animation = 'dead';
                this.evilTrooperConfig.animation = 'stand';
                yield timeout(500);
                this.evilTrooperConfig.animation = 'win';
            }
        });
    }
}
BattleComponent.ɵfac = function BattleComponent_Factory(t) { return new (t || BattleComponent)(); };
BattleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BattleComponent, selectors: [["app-battle"]], inputs: { characters$: "characters$" }, outputs: { end: "end" }, decls: 9, vars: 8, consts: [[1, "window", 3, "ngClass"], [1, "stadium"], ["class", "good", 3, "ngClass", "config", 4, "ngIf"], ["class", "evil", 3, "ngClass", "config", 4, "ngIf"], [1, "floor"], [3, "disabled", "click"], [4, "ngIf", "ngIfElse"], ["youLose", ""], [1, "good", 3, "ngClass", "config"], [1, "evil", 3, "ngClass", "config"]], template: function BattleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BattleComponent_app_trooper_2_Template, 1, 5, "app-trooper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, BattleComponent_app_trooper_3_Template, 1, 5, "app-trooper", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BattleComponent_Template_button_click_5_listener() { return ctx.onEnd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, BattleComponent_ng_container_6_Template, 2, 0, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, BattleComponent_ng_template_7_Template, 1, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c1, ctx.fighting));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.goodTrooperConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.evilTrooperConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.winGood && !ctx.winEvil);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.winGood)("ngIfElse", _r3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _trooper_trooper_component__WEBPACK_IMPORTED_MODULE_3__["TrooperComponent"]], styles: [".window[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  padding: 20px;\r\n  overflow: hidden;\r\n  background-color: black;\r\n  opacity: 0;\r\n  transition: 0.25s;\r\n  pointer-events: none;\r\n}\r\n\r\n.window.visible[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  pointer-events: all;\r\n}\r\n\r\n.stadium[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  display: block;\r\n  overflow: hidden;\r\n  background-color: #cccccc;\r\n  width: 300px;\r\n  height: 250px;\r\n  border-bottom: 5px solid black;\r\n}\r\n\r\n.floor[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n  height: 50px;\r\n  background-color: #ffffff;\r\n}\r\n\r\napp-trooper.good[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 250px;\r\n  height: 250px;\r\n  top: 0;\r\n  left: -50px;\r\n  right: auto;\r\n  bottom: auto;\r\n}\r\n\r\napp-trooper.good.ok[_ngcontent-%COMP%] {\r\n  top: 0;\r\n  left: 25px;\r\n  right: auto;\r\n  bottom: auto;\r\n}\r\n\r\napp-trooper.good.ko[_ngcontent-%COMP%] {\r\n  top: 105px;\r\n  left: -195px;\r\n  right: auto;\r\n  bottom: auto;\r\n}\r\n\r\napp-trooper.evil[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 250px;\r\n  height: 250px;\r\n  top: 0;\r\n  left: auto;\r\n  right: -50px;\r\n  bottom: auto;\r\n}\r\n\r\napp-trooper.evil.ok[_ngcontent-%COMP%] {\r\n  top: 0;\r\n  left: 25px;\r\n  right: auto;\r\n  bottom: auto;\r\n}\r\n\r\napp-trooper.evil.ko[_ngcontent-%COMP%] {\r\n  top: 105px;\r\n  left: auto;\r\n  right: -195px;\r\n  bottom: auto;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n  padding: 10px 20px;\r\n  border-radius: 2px;\r\n  border: none;\r\n  font-weight: 400;\r\n  font-family: \"Press Start 2P\", cursive;\r\n  transition: 0.25s;\r\n  opacity: 1;\r\n}\r\n\r\nbutton[disabled][_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmF0dGxlL2JhdHRsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLE1BQU07RUFDTixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLE1BQU07RUFDTixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLE1BQU07RUFDTixVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLE1BQU07RUFDTixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1YsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsc0NBQXNDO0VBQ3RDLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9iYXR0bGUvYmF0dGxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2luZG93IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiAwLjI1cztcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLndpbmRvdy52aXNpYmxlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbn1cclxuXHJcbi5zdGFkaXVtIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uZmxvb3Ige1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuYXBwLXRyb29wZXIuZ29vZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAtNTBweDtcclxuICByaWdodDogYXV0bztcclxuICBib3R0b206IGF1dG87XHJcbn1cclxuXHJcbmFwcC10cm9vcGVyLmdvb2Qub2sge1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAyNXB4O1xyXG4gIHJpZ2h0OiBhdXRvO1xyXG4gIGJvdHRvbTogYXV0bztcclxufVxyXG5cclxuYXBwLXRyb29wZXIuZ29vZC5rbyB7XHJcbiAgdG9wOiAxMDVweDtcclxuICBsZWZ0OiAtMTk1cHg7XHJcbiAgcmlnaHQ6IGF1dG87XHJcbiAgYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG5hcHAtdHJvb3Blci5ldmlsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgcmlnaHQ6IC01MHB4O1xyXG4gIGJvdHRvbTogYXV0bztcclxufVxyXG5cclxuYXBwLXRyb29wZXIuZXZpbC5vayB7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDI1cHg7XHJcbiAgcmlnaHQ6IGF1dG87XHJcbiAgYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG5hcHAtdHJvb3Blci5ldmlsLmtvIHtcclxuICB0b3A6IDEwNXB4O1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgcmlnaHQ6IC0xOTVweDtcclxuICBib3R0b206IGF1dG87XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlByZXNzIFN0YXJ0IDJQXCIsIGN1cnNpdmU7XHJcbiAgdHJhbnNpdGlvbjogMC4yNXM7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuYnV0dG9uW2Rpc2FibGVkXSB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BattleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-battle',
                templateUrl: './battle.component.html',
                styleUrls: ['./battle.component.css'],
            }]
    }], null, { characters$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], end: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/battle/trooper/trooper.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/battle/trooper/trooper.component.ts ***!
  \*****************************************************/
/*! exports provided: TrooperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrooperComponent", function() { return TrooperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18) { return { "race-human": a0, "race-ghoul": a1, "animation-stand": a2, "animation-attack": a3, "animation-win": a4, "animation-dead": a5, "class-peasant": a6, "class-knight": a7, "class-soldier": a8, "class-warlock": a9, "class-mage": a10, "class-king": a11, "direction-right": a12, "direction-left": a13, "weapon-none": a14, "weapon-sword": a15, "weapon-stick": a16, "weapon-staff": a17, "weapon-spear": a18 }; };
class TrooperComponent {
    constructor() { }
    ngOnInit() { }
}
TrooperComponent.ɵfac = function TrooperComponent_Factory(t) { return new (t || TrooperComponent)(); };
TrooperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrooperComponent, selectors: [["app-trooper"]], inputs: { config: "config" }, decls: 3, vars: 21, consts: [[1, "trooper", 3, "ngClass"], [1, "weapon"], [1, "body"]], template: function TrooperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](1, _c0, [!(ctx.config == null ? null : ctx.config.race) || (ctx.config == null ? null : ctx.config.race) === "human", ctx.config.race === "ghoul", !(ctx.config == null ? null : ctx.config.animation) || (ctx.config == null ? null : ctx.config.animation) === "stand", (ctx.config == null ? null : ctx.config.animation) === "attack", (ctx.config == null ? null : ctx.config.animation) === "win", (ctx.config == null ? null : ctx.config.animation) === "dead", !(ctx.config == null ? null : ctx.config.class) || (ctx.config == null ? null : ctx.config.class) === "peasant", (ctx.config == null ? null : ctx.config.class) === "knight", (ctx.config == null ? null : ctx.config.class) === "soldier", (ctx.config == null ? null : ctx.config.class) === "warlock", (ctx.config == null ? null : ctx.config.class) === "mage", (ctx.config == null ? null : ctx.config.class) === "king", !(ctx.config == null ? null : ctx.config.direction) || (ctx.config == null ? null : ctx.config.direction) === "right", (ctx.config == null ? null : ctx.config.direction) === "left", !(ctx.config == null ? null : ctx.config.weapon) || ctx.config.weapon === "none", (ctx.config == null ? null : ctx.config.weapon) === "sword", (ctx.config == null ? null : ctx.config.weapon) === "stick", (ctx.config == null ? null : ctx.config.weapon) === "staff", (ctx.config == null ? null : ctx.config.weapon) === "spear"]));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  box-sizing: border-box;\r\n  width: 250px;\r\n  height: 250px;\r\n}\r\n\r\n.trooper[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: block;\r\n  box-sizing: border-box;\r\n  width: 250px;\r\n  height: 250px;\r\n  background-color: transparent;\r\n}\r\n\r\n.trooper[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 250px;\r\n  height: 250px;\r\n  top: 0;\r\n  left: 0;\r\n  image-rendering: crisp-edges;\r\n  background-color: transparent;\r\n  background-repeat: no-repeat;\r\n  background-size: calc(250px * 6) calc(250px * 12);\r\n  background-position-x: 0;\r\n  background-position-y: 0;\r\n}\r\n\r\n.trooper[_ngcontent-%COMP%]    > div.body[_ngcontent-%COMP%] {\r\n  z-index: 1;\r\n}\r\n\r\n.trooper[_ngcontent-%COMP%]    > div.weapon[_ngcontent-%COMP%] {\r\n  z-index: 0;\r\n  background-image: url('weapons.png');\r\n}\r\n\r\n.trooper.race-human[_ngcontent-%COMP%]    > .body[_ngcontent-%COMP%] {\r\n  background-image: url('humans.png');\r\n}\r\n\r\n.trooper.race-ghoul[_ngcontent-%COMP%]    > .body[_ngcontent-%COMP%] {\r\n  background-image: url('ghouls.png');\r\n}\r\n\r\n.trooper.class-peasant[_ngcontent-%COMP%]    > .body[_ngcontent-%COMP%] {\r\n  background-position-y: calc(250px * -0);\r\n}\r\n\r\n.trooper.class-knight[_ngcontent-%COMP%]    > .body[_ngcontent-%COMP%] {\r\n  background-position-y: calc(250px * -1);\r\n}\r\n\r\n.trooper.class-soldier[_ngcontent-%COMP%]    > .body[_ngcontent-%COMP%] {\r\n  background-position-y: calc(250px * -2);\r\n}\r\n\r\n.trooper.class-warlock[_ngcontent-%COMP%]    > .body[_ngcontent-%COMP%] {\r\n  background-position-y: calc(250px * -3);\r\n}\r\n\r\n.trooper.class-mage[_ngcontent-%COMP%]    > .body[_ngcontent-%COMP%] {\r\n  background-position-y: calc(250px * -4);\r\n}\r\n\r\n.trooper.class-king[_ngcontent-%COMP%]    > .body[_ngcontent-%COMP%] {\r\n  background-position-y: calc(250px * -5);\r\n}\r\n\r\n.trooper.direction-right[_ngcontent-%COMP%] {\r\n  transform: scaleX(1);\r\n}\r\n\r\n.trooper.direction-left[_ngcontent-%COMP%] {\r\n  transform: scaleX(-1);\r\n}\r\n\r\n.trooper.weapon-none[_ngcontent-%COMP%]    > .weapon[_ngcontent-%COMP%] {\r\n  background-position-y: calc(250px * -0);\r\n}\r\n\r\n.trooper.weapon-sword[_ngcontent-%COMP%]    > .weapon[_ngcontent-%COMP%] {\r\n  background-position-y: calc(250px * -1);\r\n}\r\n\r\n.trooper.weapon-stick[_ngcontent-%COMP%]    > .weapon[_ngcontent-%COMP%] {\r\n  background-position-y: calc(250px * -2);\r\n}\r\n\r\n.trooper.weapon-staff[_ngcontent-%COMP%]    > .weapon[_ngcontent-%COMP%] {\r\n  background-position-y: calc(250px * -3);\r\n}\r\n\r\n.trooper.weapon-spear[_ngcontent-%COMP%]    > .weapon[_ngcontent-%COMP%] {\r\n  background-position-y: calc(250px * -4);\r\n}\r\n\r\n.trooper.animation-stand[_ngcontent-%COMP%]    > .body[_ngcontent-%COMP%] {\r\n  background-position-x: calc(250px * -0);\r\n}\r\n\r\n.trooper.animation-stand[_ngcontent-%COMP%]    > .weapon[_ngcontent-%COMP%] {\r\n  background-position-x: calc(250px * -0);\r\n}\r\n\r\n.trooper.animation-attack[_ngcontent-%COMP%]    > .body[_ngcontent-%COMP%] {\r\n  background-position-x: calc(250px * -1);\r\n}\r\n\r\n.trooper.animation-attack[_ngcontent-%COMP%]    > .weapon[_ngcontent-%COMP%] {\r\n  background-position-x: calc(250px * -1);\r\n}\r\n\r\n.trooper.animation-win[_ngcontent-%COMP%]    > .body[_ngcontent-%COMP%] {\r\n  background-position-x: calc(250px * -1);\r\n}\r\n\r\n.trooper.animation-win[_ngcontent-%COMP%]    > .weapon[_ngcontent-%COMP%] {\r\n  background-position-x: calc(250px * -2);\r\n}\r\n\r\n.trooper.animation-dead.direction-right[_ngcontent-%COMP%] {\r\n  transform: scaleX(1) rotate(-90deg) !important;\r\n}\r\n\r\n.trooper.animation-dead.direction-left[_ngcontent-%COMP%] {\r\n  transform: scaleX(-1) rotate(-90deg) !important;\r\n}\r\n\r\n.trooper.animation-dead[_ngcontent-%COMP%]    > .body[_ngcontent-%COMP%] {\r\n  background-position-x: calc(250px * -0) !important;\r\n}\r\n\r\n.trooper.animation-dead[_ngcontent-%COMP%]    > .weapon[_ngcontent-%COMP%] {\r\n  background-position-x: calc(250px * -0) !important;\r\n  background-position-y: calc(250px * -0) !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmF0dGxlL3Ryb29wZXIvdHJvb3Blci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixNQUFNO0VBQ04sT0FBTztFQUNQLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLGlEQUFpRDtFQUNqRCx3QkFBd0I7RUFDeEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG9DQUEyRDtBQUM3RDs7QUFFQTtFQUNFLG1DQUEwRDtBQUM1RDs7QUFFQTtFQUNFLG1DQUEwRDtBQUM1RDs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtEQUFrRDtFQUNsRCxrREFBa0Q7QUFDcEQiLCJmaWxlIjoic3JjL2FwcC9iYXR0bGUvdHJvb3Blci90cm9vcGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxufVxyXG5cclxuLnRyb29wZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4udHJvb3BlciA+IGRpdiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGltYWdlLXJlbmRlcmluZzogY3Jpc3AtZWRnZXM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNhbGMoMjUwcHggKiA2KSBjYWxjKDI1MHB4ICogMTIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogMDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDA7XHJcbn1cclxuXHJcbi50cm9vcGVyID4gZGl2LmJvZHkge1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi50cm9vcGVyID4gZGl2LndlYXBvbiB7XHJcbiAgei1pbmRleDogMDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL3Ryb29wZXJzL3dlYXBvbnMucG5nKTtcclxufVxyXG5cclxuLnRyb29wZXIucmFjZS1odW1hbiA+IC5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL3Ryb29wZXJzL2h1bWFucy5wbmcpO1xyXG59XHJcblxyXG4udHJvb3Blci5yYWNlLWdob3VsID4gLmJvZHkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvdHJvb3BlcnMvZ2hvdWxzLnBuZyk7XHJcbn1cclxuXHJcbi50cm9vcGVyLmNsYXNzLXBlYXNhbnQgPiAuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjYWxjKDI1MHB4ICogLTApO1xyXG59XHJcblxyXG4udHJvb3Blci5jbGFzcy1rbmlnaHQgPiAuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjYWxjKDI1MHB4ICogLTEpO1xyXG59XHJcblxyXG4udHJvb3Blci5jbGFzcy1zb2xkaWVyID4gLmJvZHkge1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogY2FsYygyNTBweCAqIC0yKTtcclxufVxyXG5cclxuLnRyb29wZXIuY2xhc3Mtd2FybG9jayA+IC5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNhbGMoMjUwcHggKiAtMyk7XHJcbn1cclxuXHJcbi50cm9vcGVyLmNsYXNzLW1hZ2UgPiAuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjYWxjKDI1MHB4ICogLTQpO1xyXG59XHJcblxyXG4udHJvb3Blci5jbGFzcy1raW5nID4gLmJvZHkge1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogY2FsYygyNTBweCAqIC01KTtcclxufVxyXG5cclxuLnRyb29wZXIuZGlyZWN0aW9uLXJpZ2h0IHtcclxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxufVxyXG5cclxuLnRyb29wZXIuZGlyZWN0aW9uLWxlZnQge1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxufVxyXG5cclxuLnRyb29wZXIud2VhcG9uLW5vbmUgPiAud2VhcG9uIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNhbGMoMjUwcHggKiAtMCk7XHJcbn1cclxuXHJcbi50cm9vcGVyLndlYXBvbi1zd29yZCA+IC53ZWFwb24ge1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogY2FsYygyNTBweCAqIC0xKTtcclxufVxyXG5cclxuLnRyb29wZXIud2VhcG9uLXN0aWNrID4gLndlYXBvbiB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjYWxjKDI1MHB4ICogLTIpO1xyXG59XHJcblxyXG4udHJvb3Blci53ZWFwb24tc3RhZmYgPiAud2VhcG9uIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNhbGMoMjUwcHggKiAtMyk7XHJcbn1cclxuXHJcbi50cm9vcGVyLndlYXBvbi1zcGVhciA+IC53ZWFwb24ge1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogY2FsYygyNTBweCAqIC00KTtcclxufVxyXG5cclxuLnRyb29wZXIuYW5pbWF0aW9uLXN0YW5kID4gLmJvZHkge1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogY2FsYygyNTBweCAqIC0wKTtcclxufVxyXG5cclxuLnRyb29wZXIuYW5pbWF0aW9uLXN0YW5kID4gLndlYXBvbiB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjYWxjKDI1MHB4ICogLTApO1xyXG59XHJcblxyXG4udHJvb3Blci5hbmltYXRpb24tYXR0YWNrID4gLmJvZHkge1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogY2FsYygyNTBweCAqIC0xKTtcclxufVxyXG5cclxuLnRyb29wZXIuYW5pbWF0aW9uLWF0dGFjayA+IC53ZWFwb24ge1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogY2FsYygyNTBweCAqIC0xKTtcclxufVxyXG5cclxuLnRyb29wZXIuYW5pbWF0aW9uLXdpbiA+IC5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNhbGMoMjUwcHggKiAtMSk7XHJcbn1cclxuXHJcbi50cm9vcGVyLmFuaW1hdGlvbi13aW4gPiAud2VhcG9uIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNhbGMoMjUwcHggKiAtMik7XHJcbn1cclxuXHJcbi50cm9vcGVyLmFuaW1hdGlvbi1kZWFkLmRpcmVjdGlvbi1yaWdodCB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSkgcm90YXRlKC05MGRlZykgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRyb29wZXIuYW5pbWF0aW9uLWRlYWQuZGlyZWN0aW9uLWxlZnQge1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKSByb3RhdGUoLTkwZGVnKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udHJvb3Blci5hbmltYXRpb24tZGVhZCA+IC5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNhbGMoMjUwcHggKiAtMCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRyb29wZXIuYW5pbWF0aW9uLWRlYWQgPiAud2VhcG9uIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNhbGMoMjUwcHggKiAtMCkgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNhbGMoMjUwcHggKiAtMCkgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrooperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-trooper',
                templateUrl: './trooper.component.html',
                styleUrls: ['./trooper.component.css'],
            }]
    }], function () { return []; }, { config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/board/board.component.ts":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BoardComponent {
    constructor() { }
    ngOnInit() {
    }
}
BoardComponent.ɵfac = function BoardComponent_Factory(t) { return new (t || BoardComponent)(); };
BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["app-board"]], decls: 2, vars: 0, template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "board works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  overflow: hidden;\r\n  box-sizing: border-box;\r\n  width: var(--game-width);\r\n  height: var(--game-width);\r\n  background-color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IHZhcigtLWdhbWUtd2lkdGgpO1xyXG4gIGhlaWdodDogdmFyKC0tZ2FtZS13aWR0aCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-board',
                templateUrl: './board.component.html',
                styleUrls: ['./board.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _battle_battle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../battle/battle.component */ "./src/app/battle/battle.component.ts");





function HomeComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("* ", result_r1, "");
} }
const CLASSES = [
    'peasant',
    'knight',
    'soldier',
    'warlock',
    'mage',
    'king',
];
const WEAPONS = ['sword', 'stick', 'staff', 'spear'];
class HomeComponent {
    constructor() {
        this.characters$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.results = [];
    }
    ngOnInit() { }
    onPlay() {
        this.characters$.next({
            good: {
                race: 'human',
                animation: 'stand',
                class: CLASSES[Math.floor(Math.random() * CLASSES.length)],
                direction: 'right',
                weapon: WEAPONS[Math.floor(Math.random() * WEAPONS.length)],
            },
            evil: {
                race: 'ghoul',
                animation: 'stand',
                class: CLASSES[Math.floor(Math.random() * CLASSES.length)],
                direction: 'left',
                weapon: WEAPONS[Math.floor(Math.random() * WEAPONS.length)],
            },
        });
    }
    onResult(winner) {
        this.results.push(winner);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 6, vars: 2, consts: [[3, "click"], [4, "ngFor", "ngForOf"], [3, "characters$", "end"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_0_listener() { return ctx.onPlay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A1Luchar!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_4_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-battle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("end", function HomeComponent_Template_app_battle_end_5_listener($event) { return ctx.onResult($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.results);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("characters$", ctx.characters$);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _battle_battle_component__WEBPACK_IMPORTED_MODULE_3__["BattleComponent"]], styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  overflow: hidden;\r\n  box-sizing: border-box;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  color: black;\r\n  background-color: white;\r\n  text-align: center;\r\n  font-family: \"Press Start 2P\", cursive;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  font-family: \"Press Start 2P\", cursive;\r\n  margin-top: 20px;\r\n  padding: 10px 20px;\r\n  border-radius: 2px;\r\n  border: none;\r\n  font-weight: 400;\r\n  transition: 0.25s;\r\n  opacity: 1;\r\n}\r\n\r\nbutton[disabled][_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogXCJQcmVzcyBTdGFydCAyUFwiLCBjdXJzaXZlO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlByZXNzIFN0YXJ0IDJQXCIsIGN1cnNpdmU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHRyYW5zaXRpb246IDAuMjVzO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbmJ1dHRvbltkaXNhYmxlZF0ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/intro/intro.component.ts":
/*!******************************************!*\
  !*** ./src/app/intro/intro.component.ts ***!
  \******************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class IntroComponent {
    constructor() { }
    ngOnInit() {
    }
}
IntroComponent.ɵfac = function IntroComponent_Factory(t) { return new (t || IntroComponent)(); };
IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroComponent, selectors: [["app-intro"]], decls: 2, vars: 0, template: function IntroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "intro works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n  overflow: hidden;\r\n  box-sizing: border-box;\r\n  width: var(--game-width);\r\n  height: var(--game-width);\r\n  background-color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm8vaW50cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvaW50cm8vaW50cm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IHZhcigtLWdhbWUtd2lkdGgpO1xyXG4gIGhlaWdodDogdmFyKC0tZ2FtZS13aWR0aCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-intro',
                templateUrl: './intro.component.html',
                styleUrls: ['./intro.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\alber\Documents\GitHub\game\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map