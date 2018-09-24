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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  \r\n  .app-toolbar {\r\n    height: 48px;\r\n  }\r\n  \r\n  .app-is-mobile .app-toolbar {\r\n    position: fixed;\r\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n    z-index: 2;\r\n  }\r\n  \r\n  h1.app-name {\r\n    margin-left: 8px;\r\n  }\r\n  \r\n  .app-sidenav-container {\r\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n    flex: 1;\r\n  }\r\n  \r\n  .app-side-nav {\r\n    padding: 10px;\r\n  }\r\n  \r\n  .app-is-mobile .app-sidenav-container {\r\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\r\n    flex: 1 0 auto;\r\n  }\r\n  \r\n  .app-button-spacer {\r\n    padding: 0 10px;\r\n  }\r\n  \r\n  .app-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n  \r\n  .app-sidenav-content {\r\n    margin: 0;\r\n    padding: 0;\r\n   }\r\n  \r\n  .app-folder-field {\r\n  width: 360px\r\n}\r\n  \r\n  .app-icon {\r\n  padding: 0 0 0 20px;\r\n}\r\n  \r\n  .app-icon-button {\r\n  padding: 0 3px;\r\n  min-width: 0;\r\n  /* width: 24px; */\r\n  line-height: 20px;\r\n  border-radius: 50%;\r\n}\r\n  \r\n  .app-icon-rate-button {\r\n  padding: 0 3px;\r\n  min-width: 0;\r\n  line-height: 20px;\r\n  border-radius: 50%;\r\n  \r\n  color: lightslategray;  \r\n  background-color: transparent;\r\n}\r\n  \r\n  .app-icon-rated-button {\r\n  color: gold;  \r\n}\r\n  \r\n  .app-icon-arrow {\r\n  padding: 0 3px;\r\n}\r\n  \r\n  .app-settings-button{\r\n\tposition: absolute;\r\n  right: 30px;\r\n  top: 15px;\r\n}\r\n  \r\n  .app-cat-icon {\r\n\tposition: absolute;\r\n  right: 30px;\r\n  bottom: 60px;\r\n  padding: 10px 10px;\r\n}\r\n  \r\n  .app-rate-buttons{\r\n\tposition: absolute;\r\n  right: 30px;\r\n  bottom: 15px;\r\n}\r\n  \r\n  .app-image-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  margin: -4px;\r\n}\r\n  \r\n  .mat-paginator{\r\n  background: transparent;\r\n}\r\n  \r\n  .app-nav-buttons{\r\n\tposition: absolute;\r\n  left: 30px;\r\n  bottom: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n  \r\n  .app-message {\r\n  display: block;\r\n  text-align: center;\r\n  color: lightslategray;  \r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n }\r\n  \r\n  .app-content{\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\" [class.app-is-mobile]=\"mobileQuery.matches\">\r\n  \r\n  <mat-sidenav-container class=\"app-sidenav-container\"\r\n                         [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\r\n    <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\" [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\"\r\n                       [(opened)]=\"opened\" (opened)=\"events.push('open!')\" (closed)=\"events.push('close!')\"\r\n                       class=\"app-side-nav\">\r\n      \r\n        <mat-card>\r\n            <mat-card-header>\r\n                <mat-card-title>Location</mat-card-title>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-form-field class=\"app-folder-field\">\r\n                    <input matInput #folderPath placeholder=\"Folder\" [(ngModel)]=\"workFolder\">\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n        &nbsp;\r\n        <mat-card>\r\n            <mat-card-header>\r\n                <mat-card-title>Filter</mat-card-title>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <div>\r\n                    <button *ngFor=\"let cat of cats\" mat-icon-button (click)=\"setCatFilter(cat.name)\" \r\n                            [ngClass]=\"{'app-icon-rated-button': filterCat == cat.name }\" \r\n                            matTooltip = \"{{cat.name}} , shortcut: {{getKeyCode(cat.key)}}\"  \r\n                            class=\"app-icon-rate-button\"><mat-icon>{{cat.icon}}</mat-icon>\r\n                    </button>\r\n                </div>\r\n        \r\n                <div *ngIf=\"!unratedOnly\">\r\n                    <button mat-icon-button (click)=\"setRateFilter(1)\" [ngClass]=\"{'app-icon-rated-button': filterRating >= 1 }\" class=\"app-icon-rate-button\"><mat-icon>star</mat-icon></button>\r\n                    <button mat-icon-button (click)=\"setRateFilter(2)\" [ngClass]=\"{'app-icon-rated-button': filterRating >= 2 }\" class=\"app-icon-rate-button\"><mat-icon>star</mat-icon></button>\r\n                    <button mat-icon-button (click)=\"setRateFilter(3)\" [ngClass]=\"{'app-icon-rated-button': filterRating >= 3 }\" class=\"app-icon-rate-button\"><mat-icon>star</mat-icon></button>\r\n                    <button mat-icon-button (click)=\"setRateFilter(4)\" [ngClass]=\"{'app-icon-rated-button': filterRating >= 4 }\" class=\"app-icon-rate-button\"><mat-icon>star</mat-icon></button>\r\n                    <button mat-icon-button (click)=\"setRateFilter(5)\" [ngClass]=\"{'app-icon-rated-button': filterRating >= 5 }\" class=\"app-icon-rate-button\"><mat-icon>star</mat-icon></button>\r\n                    <mat-checkbox [(ngModel)]=\"includeHigherRating\">Include higher rating</mat-checkbox>\r\n                </div>\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n                <button mat-raised-button (click)=\"setRateFilter(-1); setCatFilter('')\">Clear Filter</button>\r\n                &nbsp;<mat-checkbox [(ngModel)]=\"unratedOnly\">Unrated only</mat-checkbox>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n        &nbsp;\r\n        <mat-card>\r\n           <mat-card-header>\r\n                <mat-card-title>What to do</mat-card-title>\r\n            </mat-card-header>\r\n                    \r\n            <mat-card-content>\r\n                <mat-radio-group [(ngModel)]=\"isRating\">\r\n                    <mat-radio-button [value]=\"true\">Rate</mat-radio-button>&nbsp;&nbsp;&nbsp;\r\n                    <mat-radio-button [value]=\"false\">Categorize</mat-radio-button>\r\n                </mat-radio-group>\r\n            </mat-card-content>\r\n\r\n            <mat-card-actions>\r\n                <button mat-raised-button (click)=\"displayFotos()\" color=\"primary\" [disabled]=\"!workFolder\">Display</button>                \r\n                <button mat-raised-button (click)=\"arrangeFotos()\" color=\"accent\" [disabled]=\"!workFolder\">Arrange</button>\r\n                <button mat-raised-button (click)=\"opened=false\">Cancel</button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n\r\n    </mat-sidenav>\r\n\r\n    <mat-sidenav-content class=\"app-content\">\r\n        <button mat-fab color=\"primary\" (click)=\"snav.toggle()\" class=\"app-settings-button\">\r\n            <mat-icon>menu</mat-icon>\r\n        </button>\r\n        <span  class=\"app-message\">\r\n            <span *ngIf=\"currentMessage\">                \r\n                <h1><div [innerHTML]=\"currentMessage\"></div></h1>\r\n            </span>\r\n            <span *ngIf=\"isBusy\">\r\n                <mat-spinner></mat-spinner>\r\n            </span>\r\n        </span>        \r\n        <span *ngIf=\"getCurrentFotoInfo(); let fi\"> \r\n            <div  class=\"app-rate-buttons\" *ngIf=\"!isRating\">\r\n                <button *ngFor=\"let cat of cats\" \r\n                        mat-icon-button \r\n                        (click)=\"categorize(cat.name)\" \r\n                        [ngClass]=\"{'app-icon-rated-button': fi.cat == cat.name }\"\r\n                        matTooltip = \"{{cat.name}} , shortcut: {{getKeyCode(cat.key)}}\"  \r\n                        class=\"app-icon-rate-button\"><mat-icon>{{cat.icon}}</mat-icon>\r\n                    </button>                \r\n            </div>\r\n\r\n            <div class=\"app-cat-icon\"  *ngIf=\"isRating\">\r\n                <span *ngFor=\"let cat of cats\">\r\n                        <mat-icon  color=\"accent\"\r\n                         *ngIf=\"fi.cat == cat.name\"\r\n                         matTooltip = \"{{cat.name}} , shortcut: {{getKeyCode(cat.key)}}\">{{cat.icon}}</mat-icon>\r\n                </span>\r\n            </div>\r\n\r\n            <div class=\"app-rate-buttons\" *ngIf=\"isRating\">\r\n                <button mat-icon-button (click)=\"rate(1)\" [ngClass]=\"{'app-icon-rated-button': fi.rating >= 1 }\" class=\"app-icon-rate-button\"><mat-icon>star</mat-icon></button>\r\n                <button mat-icon-button (click)=\"rate(2)\" [ngClass]=\"{'app-icon-rated-button': fi.rating >= 2 }\" class=\"app-icon-rate-button\"><mat-icon>star</mat-icon></button>\r\n                <button mat-icon-button (click)=\"rate(3)\" [ngClass]=\"{'app-icon-rated-button': fi.rating >= 3 }\" class=\"app-icon-rate-button\"><mat-icon>star</mat-icon></button>\r\n                <button mat-icon-button (click)=\"rate(4)\" [ngClass]=\"{'app-icon-rated-button': fi.rating >= 4 }\" class=\"app-icon-rate-button\"><mat-icon>star</mat-icon></button>\r\n                <button mat-icon-button (click)=\"rate(5)\" [ngClass]=\"{'app-icon-rated-button': fi.rating >= 5 }\" class=\"app-icon-rate-button\"><mat-icon>star</mat-icon></button>\r\n            </div>\r\n            \r\n          <div class=\"app-nav-buttons\">\r\n            <mat-chip-list class=\"app-image-info\">\r\n                <mat-chip color=\"primary\" selected>{{fi.name}}</mat-chip>\r\n            </mat-chip-list>\r\n            <mat-paginator [length]=\"allFotoInfos.length\" [hidePageSize]='true'\r\n                [pageSize]=\"1\" [pageIndex]=\"currentIndex\"\r\n                (page)=\"setCurrentIndex($event.pageIndex)\">\r\n            </mat-paginator>\r\n            </div>\r\n\r\n         <image-view id=\"myImage\" [url]=\"getCurrentFotoURL()\" [fullUrl]=\"getCurrentFotoFullURL()\"> </image-view>\r\n            \r\n        </span>\r\n        \r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: KEY_CODE, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_CODE", function() { return KEY_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_foto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/foto.service */ "./src/app/services/foto.service.ts");
/* harmony import */ var _impl_confirm_arrange_dialog_confirm_arrange_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./impl/confirm-arrange.dialog/confirm-arrange.dialog */ "./src/app/impl/confirm-arrange.dialog/confirm-arrange.dialog.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
    KEY_CODE[KEY_CODE["LEFT_ARROW"] = 37] = "LEFT_ARROW";
    KEY_CODE[KEY_CODE["ZERO"] = 96] = "ZERO";
})(KEY_CODE || (KEY_CODE = {}));
var AppComponent = /** @class */ (function () {
    function AppComponent(changeDetectorRef, media, dialog, fotoService) {
        this.dialog = dialog;
        this.fotoService = fotoService;
        this.isRating = true;
        this.workFolder = "C:\\temp\\test";
        this.filterRating = -1;
        this.filterCat = "";
        this.includeHigherRating = false;
        this.unratedOnly = false;
        this.currentIndex = -1;
        this.currentMessage = "";
        this.isBusy = false;
        this.cats = null;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fotoService.getCats(this.workFolder).subscribe(function (data) {
            _this.cats = data;
            if (_this.workFolder) {
                _this.displayFotos();
            }
            else {
                _this.opened = true;
            }
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    AppComponent.prototype.keyEvent = function (event) {
        //console.log(event.keyCode);
        if (event.keyCode == KEY_CODE.RIGHT_ARROW)
            this.forward();
        else if (event.keyCode == KEY_CODE.LEFT_ARROW)
            this.back();
        else if (this.isRating && event.keyCode > KEY_CODE.ZERO && event.keyCode <= KEY_CODE.ZERO + 5)
            this.rate(event.keyCode - KEY_CODE.ZERO);
        else {
            for (var _i = 0, _a = this.cats; _i < _a.length; _i++) {
                var cat = _a[_i];
                if (cat.key == event.keyCode)
                    this.categorize(cat.name);
            }
        }
    };
    AppComponent.prototype.getKeyCode = function (key) {
        return String.fromCharCode(key);
    };
    AppComponent.prototype.displayFotos = function () {
        var _this = this;
        this.currentIndex = -1;
        this.currentMessage = "retrieving fotos...";
        this.isBusy = true;
        this.opened = false;
        this.fotoService.getAll(this.workFolder, this.unratedOnly ? -100 : this.filterRating, this.includeHigherRating, this.filterCat).subscribe(function (data) {
            _this.allFotoInfos = data.sort(function (a, b) {
                var textA = a.name.toUpperCase();
                var textB = b.name.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
            if (_this.allFotoInfos != null && _this.allFotoInfos.length > 0) {
                for (var _i = 0, _a = _this.allFotoInfos; _i < _a.length; _i++) {
                    var fi = _a[_i];
                    fi.url = _this.fotoService.createURL(_this.workFolder, fi, true);
                    fi.fullUrl = _this.fotoService.createURL(_this.workFolder, fi, false);
                }
                _this.setCurrentIndex(0);
            }
            else {
                _this.currentMessage = "no fotos that match current filter criteria.<br>AAAA";
                _this.isBusy = false;
                _this.opened = true;
            }
        });
    };
    AppComponent.prototype.arrangeFotos = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_impl_confirm_arrange_dialog_confirm_arrange_dialog__WEBPACK_IMPORTED_MODULE_5__["ConfirmArrangeDialog"], {});
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.arrange) {
                _this.currentIndex = -1;
                _this.currentMessage = "arranging fotos...";
                _this.isBusy = true;
                _this.opened = false;
                _this.fotoService.arrange(_this.workFolder, _this.filterRating, _this.includeHigherRating, _this.filterCat, result.moveOrf).subscribe(function (data) {
                    _this.currentMessage = data.filesMoved + " foto(s) arranged.";
                    if (data.filesMoveErrors)
                        _this.currentMessage += "<br>" + data.filesMoveErrors + " errors.";
                    if (data.filesSkipped)
                        _this.currentMessage += "<br>" + data.filesSkipped + " files skipped.";
                    _this.isBusy = false;
                    _this.opened = true;
                });
            }
        });
    };
    AppComponent.prototype.getCurrentFotoInfo = function () {
        return this.allFotoInfos != null &&
            this.currentIndex >= 0 && this.currentIndex < this.allFotoInfos.length ?
            this.allFotoInfos[this.currentIndex] : null;
    };
    AppComponent.prototype.getCurrentFotoURL = function () {
        var fi = this.getCurrentFotoInfo();
        return fi != null ? fi.url : null;
    };
    AppComponent.prototype.getCurrentFotoFullURL = function () {
        var fi = this.getCurrentFotoInfo();
        return fi != null ? fi.fullUrl : null;
    };
    AppComponent.prototype.setRateFilter = function (filter) {
        this.filterRating = filter;
    };
    AppComponent.prototype.setCatFilter = function (filter) {
        this.filterCat = filter;
    };
    AppComponent.prototype.rate = function (rating) {
        var fi = this.getCurrentFotoInfo();
        this.rateAndCategorize(fi, rating, fi.cat);
    };
    AppComponent.prototype.categorize = function (cat) {
        var fi = this.getCurrentFotoInfo();
        this.rateAndCategorize(fi, fi.rating, cat);
    };
    AppComponent.prototype.rateAndCategorize = function (fi, rating, cat) {
        var _this = this;
        this.fotoService.rate(this.workFolder, fi, rating, cat).subscribe(function (newFi) {
            fi.name = newFi.name;
            fi.rating = newFi.rating;
            fi.cat = newFi.cat;
            fi.url = _this.fotoService.createURL(_this.workFolder, fi, true);
            fi.fullUrl = _this.fotoService.createURL(_this.workFolder, fi, false);
            if (_this.canGoForward()) {
                _this.forward();
            }
            else {
                _this.currentIndex = -1;
                _this.currentMessage = "you are done!!! If you are Natasha, you did really well!!!";
                _this.isBusy = false;
            }
        });
    };
    AppComponent.prototype.canGoBack = function () {
        return this.allFotoInfos.length > 0 && this.currentIndex > 0;
    };
    AppComponent.prototype.canGoForward = function () {
        return this.allFotoInfos.length > 0 && this.currentIndex < this.allFotoInfos.length - 1;
    };
    AppComponent.prototype.back = function () {
        if (this.canGoBack()) {
            this.setCurrentIndex(this.currentIndex - 1);
        }
    };
    AppComponent.prototype.forward = function () {
        if (this.canGoForward()) {
            this.setCurrentIndex(this.currentIndex + 1);
        }
    };
    AppComponent.prototype.setCurrentIndex = function (value) {
        var _this = this;
        this.currentIndex = -1;
        this.currentMessage = "";
        this.isBusy = false;
        var subsrciption = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(1).subscribe(function (t) {
            _this.currentIndex = value;
            subsrciption.unsubscribe();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "keyEvent", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["MediaMatcher"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_foto_service__WEBPACK_IMPORTED_MODULE_4__["FotoService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_image_zoom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-image-zoom */ "./node_modules/ngx-image-zoom/ngx-image-zoom.umd.js");
/* harmony import */ var ngx_image_zoom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_image_zoom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angular2_image_zoom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-image-zoom */ "./node_modules/angular2-image-zoom/index.js");
/* harmony import */ var angular2_image_zoom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_image_zoom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _image_view_image_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./image-view/image-view.component */ "./src/app/image-view/image-view.component.ts");
/* harmony import */ var _impl_confirm_arrange_dialog_confirm_arrange_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./impl/confirm-arrange.dialog/confirm-arrange.dialog */ "./src/app/impl/confirm-arrange.dialog/confirm-arrange.dialog.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _image_view_image_view_component__WEBPACK_IMPORTED_MODULE_9__["ImageViewComponent"],
                _impl_confirm_arrange_dialog_confirm_arrange_dialog__WEBPACK_IMPORTED_MODULE_10__["ConfirmArrangeDialog"]
            ],
            entryComponents: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _impl_confirm_arrange_dialog_confirm_arrange_dialog__WEBPACK_IMPORTED_MODULE_10__["ConfirmArrangeDialog"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                angular2_image_zoom__WEBPACK_IMPORTED_MODULE_7__["ImageZoomModule"],
                ngx_image_zoom__WEBPACK_IMPORTED_MODULE_6__["NgxImageZoomModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/image-view/image-view.component.css":
/*!*****************************************************!*\
  !*** ./src/app/image-view/image-view.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {box-sizing: border-box;}\r\n\r\n.center-fit {\r\n  display: block;\r\n  \r\n  max-width: 100%;\r\n  max-height: 100vh;\r\n  margin: auto;\r\n }\r\n"

/***/ }),

/***/ "./src/app/image-view/image-view.component.html":
/*!******************************************************!*\
  !*** ./src/app/image-view/image-view.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center-fit\" ng-blur><!--  *ngIf=\"visible\" [@myAnimation]> -->\r\n\r\n    <ngx-image-zoom\r\n        [thumbImage]=\"url\"\r\n        [fullImage]=\"fullImageUrl\"\r\n        [zoomMode]=\"'click'\"        \r\n        [enableLens]=\"true\"\r\n        [lensWidth]=\"400\"\r\n        [lensHeight]=\"400\"\r\n        [enableScrollZoom]=\"true\"\r\n        [magnification]=\"1\"\r\n        class=\"center-fit\"\r\n    ></ngx-image-zoom>\r\n\r\n    <!-- <ngx-image-zoom\r\n        [thumbImage]=\"url\"\r\n        [fullImage]=\"allowZoom ? fullUrl : ''\"\r\n        [zoomMode]=\"allowZoom ? 'click' : ''\"\r\n        (click)=\"allowZoom = !allowZoom\"\r\n        [enableLens]=\"true\"\r\n        [lensWidth]=\"400\"\r\n        [lensHeight]=\"400\"\r\n        [enableScrollZoom]=\"true\"\r\n        [magnification]=\"1\"\r\n    ></ngx-image-zoom> -->\r\n\r\n    <!-- <img \r\n        [allowZoom]=\"allowZoom\"\r\n        [src]=\"url\" \r\n        [imageZoom]=\"allowZoom ? fullUrl : ''\"\r\n        lensStyle=\"LENS\" \r\n        class=\"center-fit\"         \r\n        delay=\"1\"\r\n        minZoomLevel=\".2\"\r\n        maxZoomLevel=\"1.5\"\r\n        (click)=\"allowZoom = !allowZoom\"\r\n    > -->\r\n</div>"

/***/ }),

/***/ "./src/app/image-view/image-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/image-view/image-view.component.ts ***!
  \****************************************************/
/*! exports provided: ImageViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageViewComponent", function() { return ImageViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageViewComponent = /** @class */ (function () {
    function ImageViewComponent() {
        this.visible = false;
    }
    ImageViewComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.visible = true;
        var subsrciption = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(5000).subscribe(function (t) {
            _this.fullImageUrl = _this.fullUrl;
            subsrciption.unsubscribe();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ImageViewComponent.prototype, "url", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ImageViewComponent.prototype, "fullUrl", void 0);
    ImageViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'image-view',
            template: __webpack_require__(/*! ./image-view.component.html */ "./src/app/image-view/image-view.component.html"),
            styles: [__webpack_require__(/*! ./image-view.component.css */ "./src/app/image-view/image-view.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('myAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)', 'opacity': 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)', 'opacity': 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)', 'opacity': 0 })),
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ImageViewComponent);
    return ImageViewComponent;
}());



/***/ }),

/***/ "./src/app/impl/confirm-arrange.dialog/confirm-arrange.dialog.html":
/*!*************************************************************************!*\
  !*** ./src/app/impl/confirm-arrange.dialog/confirm-arrange.dialog.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Arrange fotos?</h1>\r\n<mat-dialog-content>\r\n  <p>\r\n  This will change the directory structure and will organize you images by the rating/category.\r\n</p>\r\n  <mat-checkbox [(ngModel)]=\"moveOrf\">Move ORF files</mat-checkbox>\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"false\" (click)=\"onNoClick()\">Cancel</button>\r\n  <button mat-button color=\"warn\" (click)=\"onYesClick()\">Continue</button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/impl/confirm-arrange.dialog/confirm-arrange.dialog.ts":
/*!***********************************************************************!*\
  !*** ./src/app/impl/confirm-arrange.dialog/confirm-arrange.dialog.ts ***!
  \***********************************************************************/
/*! exports provided: ConfirmArrangeDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmArrangeDialog", function() { return ConfirmArrangeDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmArrangeDialog = /** @class */ (function () {
    function ConfirmArrangeDialog(dialogRef) {
        this.dialogRef = dialogRef;
        this.moveOrf = true;
    }
    ConfirmArrangeDialog.prototype.onNoClick = function () {
        this.dialogRef.close({ arrange: false });
    };
    ConfirmArrangeDialog.prototype.onYesClick = function () {
        this.dialogRef.close({ arrange: true, moveOrf: this.moveOrf });
    };
    ConfirmArrangeDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'confirm-arrange.dialog',
            template: __webpack_require__(/*! ./confirm-arrange.dialog.html */ "./src/app/impl/confirm-arrange.dialog/confirm-arrange.dialog.html"),
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], ConfirmArrangeDialog);
    return ConfirmArrangeDialog;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeModule"],
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/foto.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/foto.service.ts ***!
  \******************************************/
/*! exports provided: FotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotoService", function() { return FotoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var backend_url = ""; //"http://localhost:4200/api/";
var FotoService = /** @class */ (function () {
    function FotoService(http) {
        this.http = http;
    }
    FotoService.prototype.getAll = function (workFolder, rating, includeHigherRating, cat) {
        var url = backend_url + "fotos/" + encodeURIComponent(workFolder);
        var body = {
            rating: rating,
            includeHigherRating: includeHigherRating,
            cat: cat
        };
        return this.http.post(url, body);
    };
    FotoService.prototype.getCats = function (workFolder) {
        var url = backend_url + "config/cat/" + encodeURIComponent(workFolder);
        return this.http.get(url);
    };
    // getFoto(workFolder: string, fi: FotoInfo) : Observable<any> {
    //   return this.http.get(this.createURL(workFolder, fi),{responseType: "blob"});
    // }
    FotoService.prototype.createURL = function (workFolder, fi, resized) {
        var fullpath = workFolder + "\\" + fi.name;
        var api = "foto/";
        if (resized)
            api += "resize/";
        return backend_url + api + encodeURIComponent(fullpath);
    };
    FotoService.prototype.rate = function (workFolder, fi, rating, cat) {
        var url = backend_url + "foto/" + encodeURIComponent(workFolder);
        var body = {
            name: fi.name,
            oldRating: fi.rating,
            newRating: rating,
            oldCat: fi.cat,
            newCat: cat
        };
        return this.http.put(url, body);
    };
    FotoService.prototype.arrange = function (workFolder, rating, includeHigherRating, cat, moveOrf) {
        var url = backend_url + "fotos/" + encodeURIComponent(workFolder);
        var body = {
            rating: rating,
            includeHigherRating: includeHigherRating,
            cat: cat,
            moveOrf: moveOrf
        };
        return this.http.put(url, body);
    };
    FotoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FotoService);
    return FotoService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Sandbox\web\foto-rate\front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map