(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/details/details.component */ "./src/app/pages/details/details.component.ts");





var routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'candlesticks/:crypto', component: _pages_details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".root__container {\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: 0.5fr auto;\n  position: absolute;\n}\n\n.main__header {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 0.75fr 0.75fr 0.75fr;\n  grid-template-rows: 1fr;\n  box-shadow: 0.8rem 0.8rem 2rem rgba(0, 0, 255, 0.14);\n  height: 6rem;\n  margin: 0;\n  text-align: center;\n  align-items: center;\n  transition: background-color 500ms linear;\n  -webkit-animation: fadein 1s ease-in-out 0ms 1;\n          animation: fadein 1s ease-in-out 0ms 1;\n}\n\n.main__header-text {\n  text-transform: uppercase;\n  letter-spacing: 0.1rem;\n  display: inline;\n  margin: 0.5rem 0;\n  font-weight: 900;\n}\n\n.main__container-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -2;\n  opacity: 0;\n  background: white;\n  transition: opacity 300ms linear;\n}\n\n.main__footer {\n  background: transparent;\n  position: absolute;\n  bottom: 1rem;\n  left: 1.5rem;\n  z-index: 100;\n}\n\n.main__footer-text {\n  letter-spacing: 0.1rem;\n  color: white;\n}\n\n/*\n  ##Device = Low Resolution Tablets, Mobiles (Landscape)\n  ##Screen = B/w 481px to 767px\n*/\n\n@media (min-width: 481px) and (max-width: 767px) {\n  .main__header {\n    grid-template-columns: 1fr;\n  }\n}\n\n/*\n  ##Device = Most of the Smartphones Mobiles (Portrait)\n  ##Screen = B/w 320px to 479px\n*/\n\n@media (min-width: 320px) and (max-width: 480px) {\n  .main__header {\n    grid-template-columns: 1fr;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiwyQ0FBMkM7RUFDM0MsdUJBQXVCO0VBQ3ZCLG9EQUFvRDtFQUNwRCxZQUFZO0VBQ1osU0FBUztFQUNULGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIseUNBQXlDO0VBQ3pDLDhDQUFzQztVQUF0QyxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTs7O0NBR0M7O0FBQ0Q7RUFDRTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBOzs7Q0FHQzs7QUFDRDtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb290X19jb250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm1haW5fX2hlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNzVmciAwLjc1ZnIgMC43NWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgYm94LXNoYWRvdzogMC44cmVtIDAuOHJlbSAycmVtIHJnYmEoMCwgMCwgMjU1LCAwLjE0KTtcbiAgaGVpZ2h0OiA2cmVtO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcyBsaW5lYXI7XG4gIGFuaW1hdGlvbjogZmFkZWluIDFzIGVhc2UtaW4tb3V0IDBtcyAxO1xufVxuXG4ubWFpbl9faGVhZGVyLXRleHQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1hcmdpbjogMC41cmVtIDA7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi5tYWluX19jb250YWluZXItYmcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTI7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGxpbmVhcjtcbn1cblxuLm1haW5fX2Zvb3RlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMXJlbTtcbiAgbGVmdDogMS41cmVtO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5tYWluX19mb290ZXItdGV4dCB7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLypcbiAgIyNEZXZpY2UgPSBMb3cgUmVzb2x1dGlvbiBUYWJsZXRzLCBNb2JpbGVzIChMYW5kc2NhcGUpXG4gICMjU2NyZWVuID0gQi93IDQ4MXB4IHRvIDc2N3B4XG4qL1xuQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm1haW5fX2hlYWRlciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cblxuLypcbiAgIyNEZXZpY2UgPSBNb3N0IG9mIHRoZSBTbWFydHBob25lcyBNb2JpbGVzIChQb3J0cmFpdClcbiAgIyNTY3JlZW4gPSBCL3cgMzIwcHggdG8gNDc5cHhcbiovXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAubWFpbl9faGVhZGVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"root__container\">\n\n  <!-- Header -->\n  <header class=\"main__header\">\n    <div></div>\n    <!--<button class=\"main__header-text sim-button button11 logo\" (click)=\"goToHome()\">CRYPTO DASHBOARD</button>-->\n    <div (click)=\"goToHome()\" class=\"logo\">CRYPTO DASHBOARD</div>\n    <h3 (click)=\"toggleFiat()\" class=\"main__header-text flat-button\">{{fiat}}</h3>\n  </header>\n\n  <!-- Main -->\n  <main class=\"main__container\">\n    <div class=\"main__container-bg\"></div>\n    <router-outlet></router-outlet>\n  </main>\n\n  <!-- Footer -->\n  <footer class=\"main__footer\">\n    <small class=\"main__footer-text\"></small>\n  </footer>\n\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/settings/settings.service */ "./src/app/services/settings/settings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(settings, router) {
        this.settings = settings;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settings.fiat.subscribe(function (value) {
            _this.fiat = value;
        });
    };
    AppComponent.prototype.toggleFiat = function () {
        this.settings.toggleCurrency();
    };
    AppComponent.prototype.goToHome = function () {
        this.router.navigateByUrl('');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cards_crypto_card_crypto_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cards/crypto-card/crypto-card.component */ "./src/app/cards/crypto-card/crypto-card.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pages_details_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/details/details.component */ "./src/app/pages/details/details.component.ts");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/fesm5/ng-apexcharts.js");
/* harmony import */ var _cards_candlesticks_card_candlesticks_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cards/candlesticks-card/candlesticks-card.component */ "./src/app/cards/candlesticks-card/candlesticks-card.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _cards_crypto_card_crypto_card_component__WEBPACK_IMPORTED_MODULE_5__["CryptoCardComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _pages_details_details_component__WEBPACK_IMPORTED_MODULE_8__["DetailsComponent"],
                _cards_candlesticks_card_candlesticks_card_component__WEBPACK_IMPORTED_MODULE_10__["CandlesticksCardComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__["NgApexchartsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cards/candlesticks-card/candlesticks-card.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/cards/candlesticks-card/candlesticks-card.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.candlesticks__container {\n  display: grid;\n  text-align: center;\n  grid-template-columns: 100%;\n  grid-template-rows: 2fr 1fr;\n  justify-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.candlesticks-main {\n  width: 100%;\n}\n\n.candlesticks-brush {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZHMvY2FuZGxlc3RpY2tzLWNhcmQvY2FuZGxlc3RpY2tzLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jYXJkcy9jYW5kbGVzdGlja3MtY2FyZC9jYW5kbGVzdGlja3MtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY2FuZGxlc3RpY2tzX19jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYW5kbGVzdGlja3MtbWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FuZGxlc3RpY2tzLWJydXNoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/cards/candlesticks-card/candlesticks-card.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/cards/candlesticks-card/candlesticks-card.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"candlesticks__container\">\n  <apx-chart\n    [chart]=\"config.main.chart\"\n    [plotOptions]=\"config.main.plot\"\n    [series]=\"[{data: mainData}]\"\n    [xaxis]=\"config.main.x\"\n    [yaxis]=\"config.main.y\"\n    class=\"candlesticks-main\"\n  ></apx-chart>\n  <apx-chart\n    [chart]=\"config.brush.chart\"\n    [plotOptions]=\"config.brush.plot\"\n    [series]=\"[{data: brushData}]\"\n    [xaxis]=\"config.brush.x\"\n    [yaxis]=\"config.brush.y\"\n    class=\"candlesticks-brush\"\n  ></apx-chart>\n</div>\n"

/***/ }),

/***/ "./src/app/cards/candlesticks-card/candlesticks-card.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/cards/candlesticks-card/candlesticks-card.component.ts ***!
  \************************************************************************/
/*! exports provided: CandlesticksData, CandlesticksCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandlesticksData", function() { return CandlesticksData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandlesticksCardComponent", function() { return CandlesticksCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CandlesticksData = /** @class */ (function () {
    function CandlesticksData() {
    }
    return CandlesticksData;
}());

var CandlesticksCardComponent = /** @class */ (function () {
    function CandlesticksCardComponent() {
        var _this = this;
        this.config = {
            main: {
                chart: {
                    id: 'candles',
                    height: 290,
                    type: 'candlestick',
                    fontFamily: 'Orbitron',
                    toolbar: {
                        autoSelected: 'pan',
                        show: false
                    },
                    zoom: {
                        enabled: false
                    },
                },
                x: {
                    type: 'datetime',
                },
                y: {
                    labels: {
                        show: true,
                        formatter: function (val) {
                            return _this.fiatSymbol + " " + val.toFixed(2);
                        },
                    },
                },
            },
            brush: {
                chart: {
                    height: 160,
                    type: 'bar',
                    fontFamily: 'Orbitron',
                    brush: {
                        enabled: true,
                        target: 'candles'
                    },
                    selection: {
                        enabled: true,
                        fill: {
                            color: '#ccc',
                            opacity: 0.4
                        },
                        stroke: {
                            color: '#0D47A1',
                        }
                    },
                },
                plot: {
                    bar: {
                        columnWidth: '80%',
                        colors: {
                            ranges: [
                                {
                                    from: -1000,
                                    to: 0,
                                    color: '#F15B46'
                                }, {
                                    from: 1,
                                    to: 10000,
                                    color: '#FEB019'
                                }
                            ],
                        },
                    }
                },
                x: {
                    type: 'datetime',
                    axisBorder: {
                        offsetX: 13
                    }
                },
                y: {
                    labels: {
                        show: true,
                        formatter: function (val) {
                            return _this.fiatSymbol + " " + val.toFixed(2);
                        },
                    }
                },
            },
        };
    }
    CandlesticksCardComponent.prototype.ngOnInit = function () {
        this.config.brush.chart.selection.xaxis = {
            min: (new Date().getTime() - this.defaultSelectedTimeEnd),
            max: new Date().getTime(),
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CandlesticksCardComponent.prototype, "mainData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CandlesticksCardComponent.prototype, "brushData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CandlesticksCardComponent.prototype, "defaultSelectedTimeEnd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CandlesticksCardComponent.prototype, "fiatSymbol", void 0);
    CandlesticksCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-candlesticks-card',
            template: __webpack_require__(/*! ./candlesticks-card.component.html */ "./src/app/cards/candlesticks-card/candlesticks-card.component.html"),
            styles: [__webpack_require__(/*! ./candlesticks-card.component.css */ "./src/app/cards/candlesticks-card/candlesticks-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CandlesticksCardComponent);
    return CandlesticksCardComponent;
}());



/***/ }),

/***/ "./src/app/cards/crypto-card/crypto-card.component.css":
/*!*************************************************************!*\
  !*** ./src/app/cards/crypto-card/crypto-card.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crypto__card {\n  display: grid;\n  text-align: center;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 2fr 0.4fr;\n  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\n  justify-items: center;\n  padding: 2rem;\n  margin: 2rem;\n  width: 19rem;\n  height: 30rem;\n  cursor: pointer;\n  background-color: white;\n  border-radius: 2rem;\n  -webkit-animation: fadein 1.25s ease-in-out 0ms 1;\n          animation: fadein 1.25s ease-in-out 0ms 1;\n}\n\n.crypto-name__text {\n  text-transform: uppercase;\n  font-size: 1.4rem;\n  letter-spacing: 0.1rem;\n  margin-bottom: 1rem;\n}\n\n.crypto-price__text {\n  align-self: end;\n  width: 100%;\n  font-size: 2.3rem;\n  font-weight: 100;\n  letter-spacing: 0.1rem;\n}\n\n.crypto-fiat__text {\n  text-align: start;\n  font-size: 1.5rem;\n}\n\n.crypto-block__text {\n  display: block;\n  font-size: 1rem;\n  text-transform: uppercase;\n  letter-spacing: 0.1rem;\n  text-align: center;\n}\n\n.crypto-icon__container {\n  width: 10rem;\n  margin-bottom: 2rem;\n  display: flex;\n  justify-content: center;\n}\n\n.crypto-icon__container > svg {\n  width: 10rem;\n}\n\n.crypto-icon__container > img {\n  width: 10rem;\n  height: 10rem;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZHMvY3J5cHRvLWNhcmQvY3J5cHRvLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGlDQUFpQztFQUNqQyx5Q0FBeUM7RUFDekMscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpREFBeUM7VUFBekMseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NhcmRzL2NyeXB0by1jYXJkL2NyeXB0by1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3J5cHRvX19jYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDAuNGZyO1xuICBib3gtc2hhZG93OiAwIDAgMnJlbSByZ2JhKDAsIDAsIDI1NSwgMC4xKTtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAycmVtO1xuICBtYXJnaW46IDJyZW07XG4gIHdpZHRoOiAxOXJlbTtcbiAgaGVpZ2h0OiAzMHJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMS4yNXMgZWFzZS1pbi1vdXQgMG1zIDE7XG59XG5cbi5jcnlwdG8tbmFtZV9fdGV4dCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uY3J5cHRvLXByaWNlX190ZXh0IHtcbiAgYWxpZ24tc2VsZjogZW5kO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG59XG5cbi5jcnlwdG8tZmlhdF9fdGV4dCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmNyeXB0by1ibG9ja19fdGV4dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNyeXB0by1pY29uX19jb250YWluZXIge1xuICB3aWR0aDogMTByZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY3J5cHRvLWljb25fX2NvbnRhaW5lciA+IHN2ZyB7XG4gIHdpZHRoOiAxMHJlbTtcbn1cblxuLmNyeXB0by1pY29uX19jb250YWluZXIgPiBpbWcge1xuICB3aWR0aDogMTByZW07XG4gIGhlaWdodDogMTByZW07XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/cards/crypto-card/crypto-card.component.html":
/*!**************************************************************!*\
  !*** ./src/app/cards/crypto-card/crypto-card.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"crypto__card\" (click)=\"openDetails()\">\n  <h3 class=\"crypto-name__text\">{{crypto.fullName}}</h3>\n  <div class=\"crypto-icon__container\">\n    <img src=\"{{crypto.imageUrl}}\" alt=\"Image not found.\"/>\n  </div>\n  <div>\n    <span class=\"crypto-price__text\">{{ crypto.fiat.price }}</span>\n    <span class=\"crypto-fiat__text\">{{ crypto.fiat.symbol }}</span>\n    <span class=\"crypto-block__text\">Block #{{ crypto.blockNumber }}</span>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/cards/crypto-card/crypto-card.component.ts":
/*!************************************************************!*\
  !*** ./src/app/cards/crypto-card/crypto-card.component.ts ***!
  \************************************************************/
/*! exports provided: CryptoCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoCardComponent", function() { return CryptoCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_coin_info_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/coin-info.model */ "./src/app/models/coin-info.model.ts");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api/api.service */ "./src/app/services/api/api.service.ts");





var CryptoCardComponent = /** @class */ (function () {
    function CryptoCardComponent(api, router) {
        this.api = api;
        this.router = router;
    }
    CryptoCardComponent.prototype.ngOnInit = function () {
        this.crypto.imageUrl = this.api.baseImageUrl + this.crypto.imageUrl;
    };
    CryptoCardComponent.prototype.ngOnDestroy = function () {
    };
    CryptoCardComponent.prototype.openDetails = function () {
        this.router.navigateByUrl("/candlesticks/" + this.crypto.symbol);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_coin_info_model__WEBPACK_IMPORTED_MODULE_3__["CryptoInfo"])
    ], CryptoCardComponent.prototype, "crypto", void 0);
    CryptoCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crypto-card',
            template: __webpack_require__(/*! ./crypto-card.component.html */ "./src/app/cards/crypto-card/crypto-card.component.html"),
            styles: [__webpack_require__(/*! ./crypto-card.component.css */ "./src/app/cards/crypto-card/crypto-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CryptoCardComponent);
    return CryptoCardComponent;
}());



/***/ }),

/***/ "./src/app/models/candlestick.model.ts":
/*!*********************************************!*\
  !*** ./src/app/models/candlestick.model.ts ***!
  \*********************************************/
/*! exports provided: Candlestick, CandlestickAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Candlestick", function() { return Candlestick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandlestickAdapter", function() { return CandlestickAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Candlestick = /** @class */ (function () {
    function Candlestick(time, close, high, low, open, volumeFrom, volumeTo) {
        this.time = time;
        this.close = close;
        this.high = high;
        this.low = low;
        this.open = open;
        this.volumeFrom = volumeFrom;
        this.volumeTo = volumeTo;
    }
    return Candlestick;
}());

var CandlestickAdapter = /** @class */ (function () {
    function CandlestickAdapter() {
    }
    CandlestickAdapter.prototype.adapt = function (item) {
        return new Candlestick(item.time * 1000, item.close, item.high, item.low, item.open, item.volumefrom, item.volumeto);
    };
    CandlestickAdapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CandlestickAdapter);
    return CandlestickAdapter;
}());



/***/ }),

/***/ "./src/app/models/coin-info.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/coin-info.model.ts ***!
  \*******************************************/
/*! exports provided: FiatInfo, CryptoInfo, CryptoInfoAdapter, ShortCoinInfoAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiatInfo", function() { return FiatInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoInfo", function() { return CryptoInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoInfoAdapter", function() { return CryptoInfoAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortCoinInfoAdapter", function() { return ShortCoinInfoAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FiatInfo = /** @class */ (function () {
    function FiatInfo(symbol, price) {
        this.symbol = symbol;
        this.price = price;
    }
    return FiatInfo;
}());

var CryptoInfo = /** @class */ (function () {
    function CryptoInfo(id, fullName, name, symbol, imageUrl, url, algorithm, proofType, blockNumber, fiat) {
        this.id = id;
        this.fullName = fullName;
        this.name = name;
        this.symbol = symbol;
        this.imageUrl = imageUrl;
        this.url = url;
        this.algorithm = algorithm;
        this.proofType = proofType;
        this.blockNumber = blockNumber;
        this.fiat = fiat;
    }
    return CryptoInfo;
}());

var CryptoInfoAdapter = /** @class */ (function () {
    function CryptoInfoAdapter() {
    }
    CryptoInfoAdapter.prototype.adapt = function (item) {
        var fiat = Object.getOwnPropertyNames(item.RAW)[0];
        var rawData = item.RAW[fiat];
        return new CryptoInfo(item.CoinInfo.Id, item.CoinInfo.FullName, item.CoinInfo.Name, rawData.FROMSYMBOL, item.CoinInfo.ImageUrl, item.CoinInfo.Url, item.CoinInfo.Algorithm, item.CoinInfo.ProofType, item.CoinInfo.BlockNumber, new FiatInfo(rawData.TOSYMBOL, parseFloat(rawData.PRICE).toFixed(2)));
    };
    CryptoInfoAdapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CryptoInfoAdapter);
    return CryptoInfoAdapter;
}());

var ShortCoinInfoAdapter = /** @class */ (function () {
    function ShortCoinInfoAdapter() {
    }
    ShortCoinInfoAdapter.prototype.adapt = function (item) {
        var c = Object.getOwnPropertyNames(item.DISPLAY)[0];
        var fiat = Object.getOwnPropertyNames(item.DISPLAY[c])[0];
        var disData = item.DISPLAY[c][fiat];
        var rawData = item.RAW[c][fiat];
        return new CryptoInfo('', rawData.FROMSYMBOL, rawData.FROMSYMBOL, disData.FROMSYMBOL, disData.IMAGEURL, '', '', '', 0, new FiatInfo(disData.TOSYMBOL, parseFloat(rawData.PRICE).toFixed(2)));
    };
    ShortCoinInfoAdapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ShortCoinInfoAdapter);
    return ShortCoinInfoAdapter;
}());



/***/ }),

/***/ "./src/app/models/settings.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/settings.model.ts ***!
  \******************************************/
/*! exports provided: AvailableFiat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailableFiat", function() { return AvailableFiat; });
var AvailableFiat;
(function (AvailableFiat) {
    AvailableFiat["USD"] = "USD";
    AvailableFiat["UAH"] = "UAH";
})(AvailableFiat || (AvailableFiat = {}));


/***/ }),

/***/ "./src/app/pages/details/details.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/details/details.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crypto-details__card {\n  color: white;\n  display: grid;\n  text-align: center;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 2fr 0.4fr;\n  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\n  justify-items: center;\n  padding: 2rem;\n  margin: 2rem;\n  width: 10fr;\n  height: 60rem;\n  z-index: -1;\n  cursor: pointer;\n  border-radius: 2rem;\n  -webkit-animation: fadein 1.25s ease-in-out 0ms 1;\n          animation: fadein 1.25s ease-in-out 0ms 1;\n  background: rgba(255, 140, 140, 1);\n  background: linear-gradient(to bottom, rgba(255, 140, 140, 1) 0%, rgba(0, 0, 117, 1) 100%);\n}\n\n.crypto__container {\n}\n\n.crypto-name__text {\n  text-transform: uppercase;\n  font-size: 3rem;\n  letter-spacing: 0.1rem;\n  margin-bottom: 1rem;\n}\n\n.crypto-price__text {\n  align-self: end;\n  width: 100%;\n  font-size: 3rem;\n  font-weight: 100;\n  letter-spacing: 0.1rem;\n}\n\n.candlestick__container {\n  display: grid;\n  text-align: center;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 2fr 0.4fr;\n  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\n  justify-items: center;\n  padding: 2rem;\n  margin: 2rem;\n  height: 35rem;\n  z-index: 1;\n  cursor: pointer;\n  border-radius: 2rem;\n  -webkit-animation: fadein 1.25s ease-in-out 0ms 1;\n          animation: fadein 1.25s ease-in-out 0ms 1;\n  background: rgb(255, 255, 255);\n  background: linear-gradient(to bottom, rgba(255, 140, 140, 1) 0%, rgb(255, 255, 255) 100%);\n  color: black;\n  width: 40rem;\n  font-family: Orbitron;\n  font-size: 10px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 400;\n  line-height: 23px;\n}\n\n.candlestick__main {\n  width: 100%;\n  height: 100%;\n}\n\n.transparent {\n  cursor: pointer;\n  font-size: 1rem;\n  fill: transparent;\n  background: none;\n  color: white;\n  /*box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);*/\n}\n\n.period-button__container {\n  color: white;\n  display: grid;\n  text-align: center;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr;\n}\n\n.hidden {\n  cursor: pointer;\n  display: none;\n  transition: 1s all ease;\n}\n\n.selected {\n  cursor: pointer;\n  font-size: 2rem;\n  font-weight: 900;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsaUNBQWlDO0VBQ2pDLHlDQUF5QztFQUN6QyxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlEQUF5QztVQUF6Qyx5Q0FBeUM7RUFDekMsa0NBQWtDO0VBQ2xDLDBGQUEwRjtBQUM1Rjs7QUFFQTtBQUNBOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGlDQUFpQztFQUNqQyx5Q0FBeUM7RUFDekMscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLFVBQVU7RUFDVixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlEQUF5QztVQUF6Qyx5Q0FBeUM7RUFDekMsOEJBQThCO0VBQzlCLDBGQUEwRjtFQUMxRixZQUFZO0VBQ1osWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcnlwdG8tZGV0YWlsc19fY2FyZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDAuNGZyO1xuICBib3gtc2hhZG93OiAwIDAgMnJlbSByZ2JhKDAsIDAsIDI1NSwgMC4xKTtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAycmVtO1xuICBtYXJnaW46IDJyZW07XG4gIHdpZHRoOiAxMGZyO1xuICBoZWlnaHQ6IDYwcmVtO1xuICB6LWluZGV4OiAtMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBhbmltYXRpb246IGZhZGVpbiAxLjI1cyBlYXNlLWluLW91dCAwbXMgMTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE0MCwgMTQwLCAxKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDE0MCwgMTQwLCAxKSAwJSwgcmdiYSgwLCAwLCAxMTcsIDEpIDEwMCUpO1xufVxuXG4uY3J5cHRvX19jb250YWluZXIge1xufVxuXG4uY3J5cHRvLW5hbWVfX3RleHQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDNyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5jcnlwdG8tcHJpY2VfX3RleHQge1xuICBhbGlnbi1zZWxmOiBlbmQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG59XG5cbi5jYW5kbGVzdGlja19fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDAuNGZyO1xuICBib3gtc2hhZG93OiAwIDAgMnJlbSByZ2JhKDAsIDAsIDI1NSwgMC4xKTtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAycmVtO1xuICBtYXJnaW46IDJyZW07XG4gIGhlaWdodDogMzVyZW07XG4gIHotaW5kZXg6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMS4yNXMgZWFzZS1pbi1vdXQgMG1zIDE7XG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDE0MCwgMTQwLCAxKSAwJSwgcmdiKDI1NSwgMjU1LCAyNTUpIDEwMCUpO1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiA0MHJlbTtcbiAgZm9udC1mYW1pbHk6IE9yYml0cm9uO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xufVxuXG4uY2FuZGxlc3RpY2tfX21haW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udHJhbnNwYXJlbnQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLypib3gtc2hhZG93OiAwIDAgMnJlbSByZ2JhKDAsIDAsIDI1NSwgMC4xKTsqL1xufVxuXG4ucGVyaW9kLWJ1dHRvbl9fY29udGFpbmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBncmlkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xufVxuXG4uaGlkZGVuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBub25lO1xuICB0cmFuc2l0aW9uOiAxcyBhbGwgZWFzZTtcbn1cblxuLnNlbGVjdGVkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/details/details.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/details/details.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"crypto-details__card\">\n  <div *ngIf=\"cryptoInfo\" class=\"crypto__container\">\n    <h1 class=\"crypto-name__text\">{{cryptoInfo.name}}</h1>\n    <h1 class=\"crypto-price__text\">1{{cryptoInfo.symbol}} = {{cryptoInfo.fiat.price}}{{cryptoInfo.fiat.symbol}}</h1>\n  </div>\n  <div *ngIf=\"mainCandlesticks && brushCandlesticks && cryptoInfo\" class=\"candlestick__container\">\n    <div class=\"period-button__container\">\n      <div [ngClass]=\"{'selected': candlesticksPeriod === 'day'}\" class=\"flat-button transparent\">\n        <label>\n          <input (ngModelChange)=\"loadCandles()\" [(ngModel)]=\"candlesticksPeriod\" [value]=\"'day'\" class=\"hidden\"\n                 type=\"radio\">\n          1MONTH\n        </label>\n      </div>\n      <div [ngClass]=\"{'selected': candlesticksPeriod === 'hour'}\" class=\"flat-button transparent\">\n        <label>\n          <input (ngModelChange)=\"loadCandles()\" [(ngModel)]=\"candlesticksPeriod\" [value]=\"'hour'\" class=\"hidden\"\n                 type=\"radio\">\n          1DAY\n        </label>\n      </div>\n      <div [ngClass]=\"{'selected': candlesticksPeriod === 'minute'}\" class=\"flat-button transparent\">\n        <label>\n          <input (ngModelChange)=\"loadCandles()\" [(ngModel)]=\"candlesticksPeriod\" [value]=\"'minute'\" class=\"hidden\"\n                 type=\"radio\">\n          1HOUR\n        </label>\n      </div>\n    </div>\n    <app-candlesticks-card [brushData]=\"brushCandlesticks\"\n                           [defaultSelectedTimeEnd]=\"timeDeltas[candlesticksPeriod]\"\n                           [fiatSymbol]=\"cryptoInfo.fiat.symbol\"\n                           [mainData]=\"mainCandlesticks\"\n                           class=\"candlestick__main\"\n    ></app-candlesticks-card>\n  </div>\n</section>\n\n\n"

/***/ }),

/***/ "./src/app/pages/details/details.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/details/details.component.ts ***!
  \****************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/settings/settings.service */ "./src/app/services/settings/settings.service.ts");





var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(activeRouter, api, settings) {
        this.activeRouter = activeRouter;
        this.api = api;
        this.settings = settings;
        this.candlesticksPeriod = 'day';
        this.timeDeltas = {
            minute: 1000 * 60 * 60,
            hour: 1000 * 60 * 60 * 24,
            day: 1000 * 60 * 60 * 24 * 30,
        };
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settings.fiat.subscribe(function (value) {
            _this.fiat = value;
            _this.loadCandles();
        });
    };
    DetailsComponent.prototype.loadCandles = function () {
        var _this = this;
        this.activeRouter.paramMap.subscribe(function (route) {
            _this.crypto = route.params.crypto;
            _this.api.getSingleCryptoInfo(_this.crypto, _this.fiat)
                .subscribe(function (coinInfo) {
                _this.cryptoInfo = coinInfo;
            });
            _this.api.getCandlesticks(_this.crypto, _this.fiat, _this.candlesticksPeriod, 150).subscribe(function (candlesticks) {
                _this.candlesticks = candlesticks;
                _this.mainCandlesticks = [];
                _this.brushCandlesticks = [];
                candlesticks.forEach(function (c) {
                    var time = new Date(c.time);
                    _this.mainCandlesticks.push({
                        x: time,
                        y: [c.open, c.high, c.low, c.close],
                    });
                    _this.brushCandlesticks.push({
                        x: time,
                        y: [c.high],
                    });
                });
            });
        });
    };
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/pages/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/pages/details/details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main__container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(auto-fill, 1fr);\n  align-items: center;\n  justify-items: center;\n  height: 100%;\n}\n\n/*\n  ##Device = Low Resolution Tablets, Mobiles (Landscape)\n  ##Screen = B/w 481px to 767px\n*/\n\n@media (min-width: 481px) and (max-width: 767px) {\n  .main__container {\n    grid-template-columns: 1fr;\n  }\n}\n\n/*\n  ##Device = Most of the Smartphones Mobiles (Portrait)\n  ##Screen = B/w 320px to 479px\n*/\n\n@media (min-width: 320px) and (max-width: 480px) {\n  .main__container {\n    grid-template-columns: 1fr;\n  }\n}\n\n.hidden {\n  cursor: pointer;\n  display: none;\n  transition: 1s all ease;\n}\n\n.selected {\n  cursor: pointer;\n  font-size: 2rem;\n  font-weight: 900;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTs7O0NBR0M7O0FBQ0Q7RUFDRTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBOzs7Q0FHQzs7QUFDRDtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maWxsLCAxZnIpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLypcbiAgIyNEZXZpY2UgPSBMb3cgUmVzb2x1dGlvbiBUYWJsZXRzLCBNb2JpbGVzIChMYW5kc2NhcGUpXG4gICMjU2NyZWVuID0gQi93IDQ4MXB4IHRvIDc2N3B4XG4qL1xuQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm1haW5fX2NvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cblxuLypcbiAgIyNEZXZpY2UgPSBNb3N0IG9mIHRoZSBTbWFydHBob25lcyBNb2JpbGVzIChQb3J0cmFpdClcbiAgIyNTY3JlZW4gPSBCL3cgMzIwcHggdG8gNDc5cHhcbiovXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAubWFpbl9fY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuXG4uaGlkZGVuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBub25lO1xuICB0cmFuc2l0aW9uOiAxcyBhbGwgZWFzZTtcbn1cblxuLnNlbGVjdGVkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main__container\">\n  <input (ngModelChange)=\"loadCryptos()\" [(ngModel)]=\"fiat\" class=\"hidden\" type=\"radio\">\n  <app-crypto-card *ngFor=\"let crypto of cryptos\" [crypto]=\"crypto\"></app-crypto-card>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/settings/settings.service */ "./src/app/services/settings/settings.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(api, settings) {
        this.api = api;
        this.settings = settings;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settings.fiat.subscribe(function (value) {
            _this.fiat = value;
            _this.loadCryptos();
        });
    };
    HomeComponent.prototype.loadCryptos = function () {
        var _this = this;
        console.log(this.fiat);
        this.api.getTopByVolume(this.fiat, 50).subscribe(function (cryptos) {
            _this.cryptos = cryptos;
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/services/api/api.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/api/api.service.ts ***!
  \*********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_coin_info_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/coin-info.model */ "./src/app/models/coin-info.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_candlestick_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/candlestick.model */ "./src/app/models/candlestick.model.ts");






var ApiService = /** @class */ (function () {
    function ApiService(http, coinAdapter, candlestickAdapter, detailedCoinInfoAdapter) {
        this.http = http;
        this.coinAdapter = coinAdapter;
        this.candlestickAdapter = candlestickAdapter;
        this.detailedCoinInfoAdapter = detailedCoinInfoAdapter;
        this.baseImageUrl = 'https://cryptocompare.com';
        this.baseApiUrl = 'https://min-api.cryptocompare.com/data';
    }
    ApiService.prototype.getTopByVolume = function (fiat, limit) {
        var _this = this;
        if (fiat === void 0) { fiat = 'USD'; }
        if (limit === void 0) { limit = 10; }
        var url = this.baseApiUrl + "/top/totalvolfull?limit=" + limit + "&tsym=" + fiat;
        return this.http.get(url).pipe(
        // Adapt all elements to CryptoInfo
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.Data.map(function (item) { return _this.coinAdapter.adapt(item); }); }));
    };
    ApiService.prototype.getTopByMarketCap = function (fiat, limit) {
        var _this = this;
        if (fiat === void 0) { fiat = 'USD'; }
        if (limit === void 0) { limit = 10; }
        var url = this.baseApiUrl + "/top/mktcapfull?limit=" + limit + "&tsym=" + fiat;
        return this.http.get(url).pipe(
        // Adapt all elements to CryptoInfo
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.Data.map(function (item) { return _this.coinAdapter.adapt(item); }); }));
    };
    ApiService.prototype.getCandlesticks = function (crypto, fiat, period, limit) {
        var _this = this;
        if (fiat === void 0) { fiat = 'USD'; }
        if (period === void 0) { period = 'minute'; }
        if (limit === void 0) { limit = 10; }
        // TODO (ivandru): The histo${period} hack is not sustainable. It's clean, but needs rethinking.
        var url = this.baseApiUrl + "/histo" + period + "?limit=" + limit + "&tsym=" + fiat + "&fsym=" + crypto;
        return this.http.get(url).pipe(
        // Adapt all elements to Candlestick
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.Data.map(function (item) { return _this.candlestickAdapter.adapt(item); }); }));
    };
    ApiService.prototype.getSingleCryptoInfo = function (crypto, fiat) {
        var _this = this;
        if (fiat === void 0) { fiat = 'USD'; }
        // TODO (ivandru): The histo${period} hack is not sustainable. It's clean, but needs rethinking.
        var url = this.baseApiUrl + "/pricemultifull?tsyms=" + fiat + "&fsyms=" + crypto;
        return this.http.get(url).pipe(
        // Adapt all elements to CryptoInfo
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return _this.detailedCoinInfoAdapter.adapt(data); }));
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _models_coin_info_model__WEBPACK_IMPORTED_MODULE_3__["CryptoInfoAdapter"],
            _models_candlestick_model__WEBPACK_IMPORTED_MODULE_5__["CandlestickAdapter"],
            _models_coin_info_model__WEBPACK_IMPORTED_MODULE_3__["ShortCoinInfoAdapter"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/settings/settings.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/settings/settings.service.ts ***!
  \*******************************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_settings_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/settings.model */ "./src/app/models/settings.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var SettingsService = /** @class */ (function () {
    function SettingsService() {
        this.fiat = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](_models_settings_model__WEBPACK_IMPORTED_MODULE_2__["AvailableFiat"].USD);
    }
    SettingsService.prototype.toggleCurrency = function () {
        // TODO (ivandru): Refactor this
        if (this.fiat.getValue() === _models_settings_model__WEBPACK_IMPORTED_MODULE_2__["AvailableFiat"].UAH) {
            this.fiat.next(_models_settings_model__WEBPACK_IMPORTED_MODULE_2__["AvailableFiat"].USD);
        }
        else if (this.fiat.getValue() === _models_settings_model__WEBPACK_IMPORTED_MODULE_2__["AvailableFiat"].USD) {
            this.fiat.next(_models_settings_model__WEBPACK_IMPORTED_MODULE_2__["AvailableFiat"].UAH);
        }
    };
    SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsService);
    return SettingsService;
}());



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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\NIT KKR - Aaryav\Resume-Projects\crypto-dashboard-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map