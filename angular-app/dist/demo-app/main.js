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

/***/ "./src/app/_resolvers/bom-master-resolver.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/_resolvers/bom-master-resolver.service.ts ***!
  \***********************************************************/
/*! exports provided: BomMasterResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BomMasterResolverService", function() { return BomMasterResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _bom_bom_service_bomservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bom/bom_service/bomservice.service */ "./src/app/bom/bom_service/bomservice.service.ts");



class BomMasterResolverService {
    constructor(bomservice) {
        this.bomservice = bomservice;
    }
    resolve(route, state) {
        return this.bomservice.getBomMaster();
    }
}
BomMasterResolverService.ɵfac = function BomMasterResolverService_Factory(t) { return new (t || BomMasterResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_bom_bom_service_bomservice_service__WEBPACK_IMPORTED_MODULE_1__["BomserviceService"])); };
BomMasterResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BomMasterResolverService, factory: BomMasterResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BomMasterResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _bom_bom_service_bomservice_service__WEBPACK_IMPORTED_MODULE_1__["BomserviceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_resolvers/item-master-resolver.service.ts":
/*!************************************************************!*\
  !*** ./src/app/_resolvers/item-master-resolver.service.ts ***!
  \************************************************************/
/*! exports provided: ItemMasterResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemMasterResolverService", function() { return ItemMasterResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _bom_bom_service_bomservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bom/bom_service/bomservice.service */ "./src/app/bom/bom_service/bomservice.service.ts");



class ItemMasterResolverService {
    constructor(bomservice) {
        this.bomservice = bomservice;
    }
    resolve(route, state) {
        return this.bomservice.getItemMaster();
    }
}
ItemMasterResolverService.ɵfac = function ItemMasterResolverService_Factory(t) { return new (t || ItemMasterResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_bom_bom_service_bomservice_service__WEBPACK_IMPORTED_MODULE_1__["BomserviceService"])); };
ItemMasterResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ItemMasterResolverService, factory: ItemMasterResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemMasterResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _bom_bom_service_bomservice_service__WEBPACK_IMPORTED_MODULE_1__["BomserviceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_resolvers/unit-resolver.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_resolvers/unit-resolver.service.ts ***!
  \*****************************************************/
/*! exports provided: UnitResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitResolverService", function() { return UnitResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _bom_bom_service_bomservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bom/bom_service/bomservice.service */ "./src/app/bom/bom_service/bomservice.service.ts");



class UnitResolverService {
    constructor(bomservice) {
        this.bomservice = bomservice;
    }
    resolve(route, state) {
        return this.bomservice.getUnitMaster();
    }
}
UnitResolverService.ɵfac = function UnitResolverService_Factory(t) { return new (t || UnitResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_bom_bom_service_bomservice_service__WEBPACK_IMPORTED_MODULE_1__["BomserviceService"])); };
UnitResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UnitResolverService, factory: UnitResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnitResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _bom_bom_service_bomservice_service__WEBPACK_IMPORTED_MODULE_1__["BomserviceService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _bom_bom_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bom/bom.component */ "./src/app/bom/bom.component.ts");
/* harmony import */ var _resolvers_item_master_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_resolvers/item-master-resolver.service */ "./src/app/_resolvers/item-master-resolver.service.ts");
/* harmony import */ var _resolvers_bom_master_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_resolvers/bom-master-resolver.service */ "./src/app/_resolvers/bom-master-resolver.service.ts");
/* harmony import */ var _resolvers_unit_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_resolvers/unit-resolver.service */ "./src/app/_resolvers/unit-resolver.service.ts");









const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'BillOfMaterial', component: _bom_bom_component__WEBPACK_IMPORTED_MODULE_3__["BomComponent"], resolve: { item_master: _resolvers_item_master_resolver_service__WEBPACK_IMPORTED_MODULE_4__["ItemMasterResolverService"], bom_master: _resolvers_bom_master_resolver_service__WEBPACK_IMPORTED_MODULE_5__["BomMasterResolverService"], unit_master: _resolvers_unit_resolver_service__WEBPACK_IMPORTED_MODULE_6__["UnitResolverService"] } }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["[_nghost-%COMP%]     .p-card{\r\n    padding : 20px;\r\n    box-shadow: 0px 0px 16px #888888;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZ0NBQWdDO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLnAtY2FyZHtcclxuICAgIHBhZGRpbmcgOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNnB4ICM4ODg4ODg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-card.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _bom_bom_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bom/bom.component */ "./src/app/bom/bom.component.ts");
/* harmony import */ var _bom_bom_service_bomservice_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bom/bom_service/bomservice.service */ "./src/app/bom/bom_service/bomservice.service.ts");
/* harmony import */ var _resolvers_bom_master_resolver_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_resolvers/bom-master-resolver.service */ "./src/app/_resolvers/bom-master-resolver.service.ts");
/* harmony import */ var _resolvers_item_master_resolver_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_resolvers/item-master-resolver.service */ "./src/app/_resolvers/item-master-resolver.service.ts");
/* harmony import */ var _resolvers_unit_resolver_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_resolvers/unit-resolver.service */ "./src/app/_resolvers/unit-resolver.service.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-confirmdialog.js");
/* harmony import */ var _form_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./form.directive */ "./src/app/form.directive.ts");
























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_bom_bom_service_bomservice_service__WEBPACK_IMPORTED_MODULE_11__["BomserviceService"], _resolvers_bom_master_resolver_service__WEBPACK_IMPORTED_MODULE_12__["BomMasterResolverService"], _resolvers_item_master_resolver_service__WEBPACK_IMPORTED_MODULE_13__["ItemMasterResolverService"], _resolvers_unit_resolver_service__WEBPACK_IMPORTED_MODULE_14__["UnitResolverService"], primeng_api__WEBPACK_IMPORTED_MODULE_20__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_20__["ConfirmationService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_7__["CardModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_15__["TableModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__["InputTextModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_17__["DialogModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__["DropdownModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_19__["ToastModule"],
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_21__["ConfirmDialogModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _bom_bom_component__WEBPACK_IMPORTED_MODULE_10__["BomComponent"],
        _form_directive__WEBPACK_IMPORTED_MODULE_22__["FormDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        primeng_card__WEBPACK_IMPORTED_MODULE_7__["CardModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_15__["TableModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__["InputTextModule"],
        primeng_dialog__WEBPACK_IMPORTED_MODULE_17__["DialogModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__["DropdownModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_19__["ToastModule"],
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_21__["ConfirmDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                    _bom_bom_component__WEBPACK_IMPORTED_MODULE_10__["BomComponent"],
                    _form_directive__WEBPACK_IMPORTED_MODULE_22__["FormDirective"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    primeng_card__WEBPACK_IMPORTED_MODULE_7__["CardModule"],
                    primeng_table__WEBPACK_IMPORTED_MODULE_15__["TableModule"],
                    primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__["InputTextModule"],
                    primeng_dialog__WEBPACK_IMPORTED_MODULE_17__["DialogModule"],
                    primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__["DropdownModule"],
                    primeng_toast__WEBPACK_IMPORTED_MODULE_19__["ToastModule"],
                    primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_21__["ConfirmDialogModule"]
                ],
                providers: [_bom_bom_service_bomservice_service__WEBPACK_IMPORTED_MODULE_11__["BomserviceService"], _resolvers_bom_master_resolver_service__WEBPACK_IMPORTED_MODULE_12__["BomMasterResolverService"], _resolvers_item_master_resolver_service__WEBPACK_IMPORTED_MODULE_13__["ItemMasterResolverService"], _resolvers_unit_resolver_service__WEBPACK_IMPORTED_MODULE_14__["UnitResolverService"], primeng_api__WEBPACK_IMPORTED_MODULE_20__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_20__["ConfirmationService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/bom/bom.component.ts":
/*!**************************************!*\
  !*** ./src/app/bom/bom.component.ts ***!
  \**************************************/
/*! exports provided: BomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BomComponent", function() { return BomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _bom_service_bomservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bom_service/bomservice.service */ "./src/app/bom/bom_service/bomservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-card.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-confirmdialog.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
/* harmony import */ var _form_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../form.directive */ "./src/app/form.directive.ts");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");

















function BomComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BomComponent_ng_template_20_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.addNewItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Item ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function BomComponent_ng_template_20_Template_input_input_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); return _r0.filterGlobal($event.target.value, "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BomComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Finished Product Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p-sortIcon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Finished Product Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p-sortIcon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BomComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BomComponent_ng_template_22_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const bom_master_table_r9 = ctx.$implicit; const ri_r10 = ctx.rowIndex; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.deleteBomTableRow(bom_master_table_r9, ri_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BomComponent_ng_template_22_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const bom_master_table_r9 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.editItem(bom_master_table_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bom_master_table_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bom_master_table_r9.BM_TABLE_I_CODENO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bom_master_table_r9.BM_TABLE_NAME);
} }
function BomComponent_ng_template_26_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Finished Product Code is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BomComponent_ng_template_26_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BomComponent_ng_template_26_div_10_div_1_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.f.I_CODENO.errors.required);
} }
function BomComponent_ng_template_26_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Finished Product Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BomComponent_ng_template_26_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BomComponent_ng_template_26_div_18_div_1_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.f.I_NAME.errors.required);
} }
function BomComponent_ng_template_26_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const units_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", units_r27.I_UOM_CODE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", units_r27.I_UOM_NAME, " ");
} }
function BomComponent_ng_template_26_div_39_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Raw Material Code is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BomComponent_ng_template_26_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BomComponent_ng_template_26_div_39_div_1_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.m.I_CODENO.errors.required);
} }
function BomComponent_ng_template_26_div_47_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Raw Material Name is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BomComponent_ng_template_26_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BomComponent_ng_template_26_div_47_div_1_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.m.I_NAME.errors.required);
} }
function BomComponent_ng_template_26_option_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const units_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", units_r30.I_UOM_CODE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", units_r30.I_UOM_NAME, " ");
} }
function BomComponent_ng_template_26_div_63_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Quantity is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BomComponent_ng_template_26_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BomComponent_ng_template_26_div_63_div_1_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.m.VQTY.errors.required);
} }
function BomComponent_ng_template_26_ng_template_75_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function BomComponent_ng_template_26_ng_template_75_Template_input_input_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](74); return _r21.filterGlobal($event.target.value, "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BomComponent_ng_template_26_ng_template_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Raw Material Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p-sortIcon", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Raw Material Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p-sortIcon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Unit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p-sortIcon", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p-sortIcon", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Scrap Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "p-sortIcon", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "width": "100%" }; };
function BomComponent_ng_template_26_ng_template_77_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-dropdown", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BomComponent_ng_template_26_ng_template_77_ng_template_3_Template_p_dropdown_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const material_table_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return material_table_r34.RAW_MAT_CDE = $event; })("onChange", function BomComponent_ng_template_26_ng_template_77_ng_template_3_Template_p_dropdown_onChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ri_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r52.onMaterialTablecodeNo(ri_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const material_table_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("optionLabel", ctx_r37.label)("options", ctx_r37.I_CODENO)("ngModel", material_table_r34.RAW_MAT_CDE)("filter", true)("resetFilterOnHide", true)("virtualScroll", true);
} }
function BomComponent_ng_template_26_ng_template_77_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const material_table_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", material_table_r34.RAW_MAT_CDE, " ");
} }
function BomComponent_ng_template_26_ng_template_77_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-dropdown", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BomComponent_ng_template_26_ng_template_77_ng_template_7_Template_p_dropdown_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const material_table_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return material_table_r34.RAW_MAT_NAME = $event; })("onChange", function BomComponent_ng_template_26_ng_template_77_ng_template_7_Template_p_dropdown_onChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ri_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r59.onMaterialTablecodeName(ri_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const material_table_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("optionLabel", ctx_r39.label)("options", ctx_r39.I_NAME)("ngModel", material_table_r34.RAW_MAT_NAME)("filter", true)("resetFilterOnHide", true)("virtualScroll", true);
} }
function BomComponent_ng_template_26_ng_template_77_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const material_table_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", material_table_r34.RAW_MAT_NAME, " ");
} }
function BomComponent_ng_template_26_ng_template_77_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BomComponent_ng_template_26_ng_template_77_ng_template_13_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const material_table_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return material_table_r34.VQTY = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const material_table_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", material_table_r34.VQTY);
} }
function BomComponent_ng_template_26_ng_template_77_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const material_table_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", material_table_r34.VQTY, " ");
} }
function BomComponent_ng_template_26_ng_template_77_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BomComponent_ng_template_26_ng_template_77_ng_template_17_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const material_table_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return material_table_r34.SQTY = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const material_table_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", material_table_r34.SQTY);
} }
function BomComponent_ng_template_26_ng_template_77_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const material_table_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", material_table_r34.SQTY, " ");
} }
function BomComponent_ng_template_26_ng_template_77_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BomComponent_ng_template_26_ng_template_77_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const material_table_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r73.onMaterialTableRowEditInit(material_table_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BomComponent_ng_template_26_ng_template_77_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BomComponent_ng_template_26_ng_template_77_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78); const ri_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex; const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r76.onDeleteMaterialTable(ri_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BomComponent_ng_template_26_ng_template_77_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BomComponent_ng_template_26_ng_template_77_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const material_table_r34 = ctx_r80.$implicit; const ri_r36 = ctx_r80.rowIndex; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r79.onMaterialTableRowEditSave(material_table_r34, ri_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BomComponent_ng_template_26_ng_template_77_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BomComponent_ng_template_26_ng_template_77_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const material_table_r34 = ctx_r83.$implicit; const ri_r36 = ctx_r83.rowIndex; const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r82.onMaterialTableRowEditCancel(material_table_r34, ri_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BomComponent_ng_template_26_ng_template_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BomComponent_ng_template_26_ng_template_77_ng_template_3_Template, 1, 9, "ng-template", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BomComponent_ng_template_26_ng_template_77_ng_template_4_Template, 1, 1, "ng-template", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BomComponent_ng_template_26_ng_template_77_ng_template_7_Template, 1, 9, "ng-template", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BomComponent_ng_template_26_ng_template_77_ng_template_8_Template, 1, 1, "ng-template", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BomComponent_ng_template_26_ng_template_77_ng_template_13_Template, 1, 1, "ng-template", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BomComponent_ng_template_26_ng_template_77_ng_template_14_Template, 1, 1, "ng-template", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BomComponent_ng_template_26_ng_template_77_ng_template_17_Template, 1, 1, "ng-template", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, BomComponent_ng_template_26_ng_template_77_ng_template_18_Template, 1, 1, "ng-template", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BomComponent_ng_template_26_ng_template_77_button_20_Template, 2, 0, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BomComponent_ng_template_26_ng_template_77_button_21_Template, 2, 0, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BomComponent_ng_template_26_ng_template_77_button_22_Template, 1, 0, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, BomComponent_ng_template_26_ng_template_77_button_23_Template, 1, 0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const material_table_r34 = ctx.$implicit;
    const editing_r35 = ctx.editing;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pEditableRow", material_table_r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](material_table_r34.UNIT_VALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !editing_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !editing_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", editing_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", editing_r35);
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
const _c2 = function () { return ["RAW_MAT_CDE", "RAW_MAT_NAME", "UNIT_VALUE", "VQTY", "SQTY"]; };
function BomComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Finished Product Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p-dropdown", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function BomComponent_ng_template_26_Template_p_dropdown_onChange_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r85.onProdcodeNoSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BomComponent_ng_template_26_div_10_Template, 2, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Finished Product Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p-dropdown", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function BomComponent_ng_template_26_Template_p_dropdown_onChange_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r87.onProdNameSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, BomComponent_ng_template_26_div_18_Template, 2, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Unit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, BomComponent_ng_template_26_option_28_Template, 2, 2, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "form", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Raw Material Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p-dropdown", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function BomComponent_ng_template_26_Template_p_dropdown_onChange_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r88.onMaterialcodeNoSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, BomComponent_ng_template_26_div_39_Template, 2, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Raw Material Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p-dropdown", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function BomComponent_ng_template_26_Template_p_dropdown_onChange_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.onMaterialNameSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, BomComponent_ng_template_26_div_47_Template, 2, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Unit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "select", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, BomComponent_ng_template_26_option_57_Template, 2, 2, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, BomComponent_ng_template_26_div_63_Template, 2, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Scrap Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BomComponent_ng_template_26_Template_button_click_71_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r90.addMaterialToTable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p-table", 71, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, BomComponent_ng_template_26_ng_template_75_Template, 4, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, BomComponent_ng_template_26_ng_template_76_Template, 18, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, BomComponent_ng_template_26_ng_template_77_Template, 24, 6, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.productForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("optionLabel", ctx_r4.label)("options", ctx_r4.I_CODENO)("filter", true)("showClear", true)("resetFilterOnHide", true)("virtualScroll", true)("autofocus", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.f.I_CODENO.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("optionLabel", ctx_r4.label)("options", ctx_r4.I_NAME)("filter", true)("showClear", true)("resetFilterOnHide", true)("virtualScroll", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.f.I_NAME.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.unit_master_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.materialForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("optionLabel", ctx_r4.label)("options", ctx_r4.I_CODENO)("filter", true)("showClear", true)("resetFilterOnHide", true)("virtualScroll", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.m.I_CODENO.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("optionLabel", ctx_r4.label)("options", ctx_r4.I_NAME)("filter", true)("showClear", true)("resetFilterOnHide", true)("virtualScroll", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.m.I_NAME.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.unit_master_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c1, ctx_r4.submitted && ctx_r4.m.VQTY.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.m.VQTY.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r4.material_table)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c2));
} }
function BomComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BomComponent_ng_template_27_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r91.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BomComponent_ng_template_27_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r93.resetMaterialForm(); return ctx_r93.resetproductForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BomComponent_ng_template_27_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r94.displayBasic = false; ctx_r94.resetMaterialForm(); return ctx_r94.resetproductForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c3 = function () { return { width: "30vw" }; };
const _c4 = function () { return ["BM_TABLE_I_CODENO", "BM_TABLE_NAME"]; };
const _c5 = function () { return [10, 25, 50]; };
const _c6 = function () { return { width: "95vw" }; };
class BomComponent {
    constructor(bomservice, route, fb, messageService, confirmationService) {
        this.bomservice = bomservice;
        this.route = route;
        this.fb = fb;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.bom_master_table = [];
        this.material_table = [];
        this.bom_detail = [];
        this.submitted = false;
        this.I_CODENO = [];
        this.I_NAME = [];
        this.clonedProducts = {};
    }
    ngOnInit() {
        this.productForm = this.fb.group({
            I_CODENO: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            unit_value: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            I_NAME: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.materialForm = this.fb.group({
            I_CODENO: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            unit_value: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            I_NAME: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            VQTY: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            SQTY: ['']
        });
        this.item_master = this.route.snapshot.data['item_master'];
        this.bom_master_list = this.route.snapshot.data['bom_master'];
        this.unit_master_list = this.route.snapshot.data['unit_master'];
        for (let list of this.bom_master_list) {
            this.bom_master_table.push({ BM_TABLE_I_CODE: list.BM_I_CODE, BM_TABLE_CODE: list.BM_CODE, BM_TABLE_I_CODENO: this.materialCode(list.BM_I_CODE), BM_TABLE_NAME: this.materialName(list.BM_I_CODE) });
        }
        for (let items of this.item_master) {
            this.I_CODENO.push({ label: items.I_CODENO, value: items.I_CODE });
            this.I_NAME.push({ label: items.I_NAME, value: items.I_CODE });
        }
    }
    get f() {
        return this.productForm.controls;
    }
    get m() {
        return this.materialForm.controls;
    }
    addNewItem() {
        this.bom_detail = [];
        this.displayBasic = true;
        this.submitted = false;
        this.newItem = true;
    }
    editItem(bom_master_table) {
        this.newItem = false;
        this.submitted = false;
        this.f['I_CODENO'].setValue(bom_master_table.BM_TABLE_I_CODE);
        this.f['I_NAME'].setValue(bom_master_table.BM_TABLE_I_CODE);
        this.getUnit(this.f['I_NAME'].value, -1);
        this.bomservice.getBomDetailTable(bom_master_table.BM_TABLE_CODE).subscribe(data => {
            this.bom_detail = data;
        });
        for (let detail of this.bom_detail) {
            this.material_table.push({ id: this.material_table.length + 1, RAW_MAT_CDE: this.materialCode(detail.BD_I_CODE), RAW_MAT_NAME: this.materialName(detail.BD_I_CODE), SQTY: detail.BD_SCRAPQTY, UNIT_VALUE: this.getUnitCodeValue(detail.BD_I_CODE), VQTY: detail.BD_VQTY });
        }
        console.log(this.material_table);
        this.displayBasic = true;
    }
    deleteBomTableRow(bom_master_table, index) {
        console.log(bom_master_table);
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete?',
            header: 'Delete Confirmation',
            icon: 'pi pi-exclamation-triangle',
            key: 'c1',
            accept: () => {
                this.bomservice.deleteBomTable(bom_master_table.BM_TABLE_CODE).subscribe(data => {
                    this.messageService.add({ key: 't1', severity: 'success', summary: 'Delete Message', detail: data });
                    this.bom_master_table.splice(index, 1);
                });
            }
        });
    }
    onProdcodeNoSelected() {
        this.f['I_NAME'].setValue(this.f['I_CODENO'].value);
        console.log(typeof (this.f['I_CODENO'].value));
        this.getUnit(this.f['I_NAME'].value, -1);
    }
    onProdNameSelected() {
        this.f['I_CODENO'].setValue(this.f['I_NAME'].value);
        this.getUnit(this.f['I_CODENO'].value, -1);
    }
    onMaterialcodeNoSelected() {
        this.m['I_NAME'].setValue(this.m['I_CODENO'].value);
        this.getUnit(this.m['I_NAME'].value, -2);
    }
    onMaterialNameSelected() {
        this.m['I_CODENO'].setValue(this.m['I_NAME'].value);
        console.log(this.m['I_NAME'].value);
        this.getUnit(this.m['I_CODENO'].value, -2);
    }
    getUnit(i_code, index) {
        for (let items of this.item_master) {
            if (items.I_CODE == i_code) {
                if (index == -1) {
                    this.f['unit_value'].setValue(items.I_UOM_CODE);
                }
                else if (index == -2) {
                    this.m['unit_value'].setValue(items.I_UOM_CODE);
                }
            }
        }
    }
    resetMaterialForm() {
        this.m["I_CODENO"].setValue(0);
        this.m["unit_value"].setValue('');
        this.m["I_NAME"].setValue('');
        this.m["VQTY"].setValue('');
        this.m["SQTY"].setValue('');
        this.submitted = false;
    }
    resetproductForm() {
        this.f['I_CODENO'].setValue(0);
        this.f['I_NAME'].setValue('');
        this.f['unit_value'].setValue('');
        this.submitted = false;
        this.material_table = [];
    }
    materialCode(cde) {
        for (let code of this.item_master) {
            if (cde == code.I_CODE) {
                return code.I_CODENO;
            }
        }
    }
    materialValue(cde) {
        for (let code of this.unit_master_list) {
            if (cde == code.I_UOM_CODE) {
                return code.I_UOM_NAME;
            }
        }
    }
    materialName(cde) {
        for (let code of this.item_master) {
            if (cde == code.I_CODE) {
                return code.I_NAME;
            }
        }
    }
    getMaterialCode(name) {
        for (let item of this.item_master) {
            if (item.I_CODENO == name) {
                return item.I_CODE;
            }
        }
    }
    getUnitCodeValue(materialCode) {
        for (let items of this.item_master) {
            if (items.I_CODE == materialCode) {
                return this.materialValue(items.I_UOM_CODE);
            }
        }
    }
    addMaterialToTable() {
        this.submitted = true;
        for (let materials of this.material_table) {
            if (materials.RAW_MAT_CDE == this.materialCode(this.m['I_CODENO'].value)) {
                this.messageService.add({ key: "t2", severity: 'info', summary: 'Warning Message', detail: 'Selected Material already added' });
                return;
            }
        }
        if (this.materialForm.invalid || this.productForm.invalid) {
            this.messageService.add({ key: "t2", severity: 'error', summary: 'Error', detail: 'Please Fill all required fields' });
            return;
        }
        this.material_table.push({ id: this.material_table.length + 1, RAW_MAT_CDE: this.materialCode(this.m['I_CODENO'].value), RAW_MAT_NAME: this.materialName(this.m['I_NAME'].value), SQTY: this.m['SQTY'].value, UNIT_VALUE: this.materialValue(this.m['unit_value'].value), VQTY: this.m['VQTY'].value });
        this.messageService.add({ key: "t2", severity: 'success', summary: 'success', detail: 'Material Added to the table' });
        this.resetMaterialForm();
        this.submitted = false;
    }
    onMaterialTableRowEditInit(material_table) {
        this.clonedProducts[material_table.id] = Object.assign({}, material_table);
    }
    onMaterialTableRowEditSave(material_table, index) {
        delete this.clonedProducts[material_table.id];
        this.material_table[index] = { id: this.material_table.length + 1, RAW_MAT_CDE: this.materialCode(Number(material_table.RAW_MAT_CDE)), RAW_MAT_NAME: this.materialName(Number(material_table.RAW_MAT_NAME)), SQTY: material_table.SQTY, UNIT_VALUE: material_table.UNIT_VALUE, VQTY: material_table.VQTY };
        this.messageService.add({ key: "t2", severity: 'success', summary: 'Success', detail: 'Raw Material   is updated' });
    }
    onMaterialTableRowEditCancel(material_table, index) {
        this.material_table[index] = this.clonedProducts[material_table.id];
        delete this.clonedProducts[material_table.id];
    }
    onMaterialTablecodeNo(index) {
        this.material_table[index].RAW_MAT_NAME = this.material_table[index].RAW_MAT_CDE;
        this.material_table[index].UNIT_VALUE = this.getUnitCodeValue(Number(this.material_table[index].RAW_MAT_NAME));
    }
    onMaterialTablecodeName(index) {
        this.material_table[index].RAW_MAT_CDE = this.material_table[index].RAW_MAT_NAME;
        this.material_table[index].UNIT_VALUE = this.getUnitCodeValue(Number(this.material_table[index].RAW_MAT_CDE));
    }
    onDeleteMaterialTable(index) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.material_table.splice(index, 1);
                this.messageService.add({ key: "t2", severity: 'success', summary: 'Successful', detail: 'Deleted' });
            }
        });
    }
    save() {
        if (this.productForm.invalid || this.material_table.length == 0) {
            this.messageService.add({ key: "t2", severity: 'error', summary: 'Error', detail: 'Please Fill all required fields' });
            return;
        }
        this.bom_master = { BM_I_CODE: this.f['I_CODENO'].value, ES_DELETE: false, MODIFY: true };
        this.confirmationService.confirm({
            message: 'Are you sure that you want to save?',
            header: 'Save Confirmation',
            icon: 'fas fa-save',
            accept: () => {
                this.bomservice.saveBomMaster(this.bom_master).subscribe(res => {
                    for (let materials of this.material_table) {
                        this.bom_detail.push({
                            BD_BM_CODE: res, BD_I_CODE: this.getMaterialCode(materials.RAW_MAT_CDE), BD_SCRAPQTY: materials.SQTY,
                            BD_VQTY: materials.VQTY, ES_DELETE: false
                        });
                    }
                    this.bomservice.saveBomDetail(this.bom_detail).subscribe(data => {
                        this.displayBasic = false;
                        this.bom_detail = [];
                        this.resetMaterialForm();
                        this.resetproductForm();
                        this.messageService.add({ key: "t1", severity: 'success', summary: 'Success', detail: 'Added Successfully' });
                        this.bom_master_table.push({ BM_TABLE_CODE: res, BM_TABLE_I_CODE: this.bom_master.BM_I_CODE, BM_TABLE_I_CODENO: this.materialCode(this.bom_master.BM_I_CODE), BM_TABLE_NAME: this.materialName(this.bom_master.BM_I_CODE) });
                    });
                });
            },
            reject: () => {
                this.bom_detail = [];
            }
        });
    }
}
BomComponent.ɵfac = function BomComponent_Factory(t) { return new (t || BomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bom_service_bomservice_service__WEBPACK_IMPORTED_MODULE_2__["BomserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"])); };
BomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BomComponent, selectors: [["app-bom"]], decls: 28, vars: 23, consts: [[1, "app-content", "content", "container-fluid"], [1, "content-wrapper"], [1, "content-header", "row"], [1, "content-header-left", "col-md-6", "col-xs-12", "mb-1"], [1, "content-header-title"], [1, "content-header-right", "breadcrumbs-right", "breadcrumbs-top", "col-md-6", "col-xs-12"], [1, "breadcrumb-wrapper", "col-xs-12"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", ""], [1, "breadcrumb-item", "active"], [1, "content-body"], ["position", "bottom-center", "key", "t1"], ["key", "c1", 3, "baseZIndex"], [3, "value", "rows", "paginator", "globalFilterFields", "rowsPerPageOptions", "loading"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["header", "Bill Of Material", 3, "visible", "maximizable", "baseZIndex", "closable", "visibleChange"], ["key", "t2"], [3, "baseZIndex"], ["pTemplate", "content"], ["pTemplate", "footer"], [1, "row", "justify-content-between"], [1, "col-md-3"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-plus"], [1, "p-input-icon-left"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search...", 3, "input"], ["pSortableColumn", "BM_TABLE_I_CODENO"], ["field", "BM_TABLE_I_CODENO"], ["pSortableColumn", "BM_TABLE_NAME"], ["field", "BM_TABLE_NAME"], [1, "btn", "btn-outline-danger", "mr-1", "round", 3, "click"], [1, "fas", "fa-trash"], [1, "btn", "btn-outline-warning", "mr-1", "round", 3, "click"], [1, "far", "fa-edit"], [1, "btn", "btn-outline-info", "mr-1", "round"], [1, "far", "fa-eye"], [1, "container", "productForm"], ["focusInvalidInput", "", 3, "formGroup"], [1, "form-row"], [1, "form-group", "col-12", "col-md-2"], ["for", "P_I_CODENO"], [1, "text-danger"], [1, "form-group", "col-12", "col-md-4"], ["formControlName", "I_CODENO", "placeholder", "Select Finished Product Code", "itemSize", "10", "styleClass", "pop-dropdown", 3, "optionLabel", "options", "filter", "showClear", "resetFilterOnHide", "virtualScroll", "autofocus", "onChange"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "P_I_NAME"], ["formControlName", "I_NAME", "placeholder", "Select Finished Product Code", "itemSize", "10", "styleClass", "pop-dropdown", 3, "optionLabel", "options", "filter", "showClear", "resetFilterOnHide", "virtualScroll", "onChange"], [1, "form-group", "col-12", "col-md-6"], ["for", "p_unit"], ["id", "p_unit", "formControlName", "unit_value", "placeholder", "select", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "container", "materialForm"], ["for", "M_I_CODENO"], ["formControlName", "I_CODENO", "placeholder", "Select Raw Material Code", "itemSize", "10", "styleClass", "pop-dropdown", 3, "optionLabel", "options", "filter", "showClear", "resetFilterOnHide", "virtualScroll", "onChange"], ["for", "M_I_NAME"], ["formControlName", "I_NAME", "placeholder", "Select Raw Material Name", "itemSize", "10", "styleClass", "pop-dropdown", 3, "optionLabel", "options", "filter", "showClear", "resetFilterOnHide", "virtualScroll", "onChange"], [1, "form-group", "col-4", "col-md-3"], ["for", "m_unit"], ["id", "m_unit", "formControlName", "unit_value", "placeholder", "select", 1, "form-control"], [1, "d-sm-none", "d-md-block", "col-md-1"], ["for", "m_qty"], ["id", "m_qty", "type", "number", "formControlName", "VQTY", "placeholder", "0.00", 1, "form-control", 3, "ngClass"], ["for", "m_sqty"], ["id", "m_sqty", "type", "number", "formControlName", "SQTY", "placeholder", "0.00", 1, "form-control"], [1, "col-md-12", "material-add-btn"], ["dataKey", "id", "editMode", "row", 3, "value", "globalFilterFields"], [1, "alert", "alert-danger"], [4, "ngIf"], [3, "value"], [2, "float", "right"], [1, "pi", "pi-search", "text-bold"], ["pInputText", "", "type", "text", "placeholder", "Search...", 2, "width", "500px", 3, "input"], ["pSortableColumn", "RAW_MAT_CDE"], ["field", "RAW_MAT_CDE"], ["pSortableColumn", "RAW_MAT_NAME"], ["field", "RAW_MAT_NAME"], ["pSortableColumn", "UNIT_VALUE"], ["field", "UNIT_VALUE"], ["pSortableColumn", "VQTY"], ["field", "VQTY"], ["pSortableColumn", "SQTY"], ["field", "SQTY"], [3, "pEditableRow"], ["pEditableColumn", ""], ["pTemplate", "input"], ["pTemplate", "output"], ["pInitEditableRow", "", "class", "btn btn-outline-warning mr-1 round", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-danger mr-1 round", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "pSaveEditableRow", "", "icon", "pi pi-check", "class", "p-button-rounded p-button-text p-button-success p-mr-2", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "pCancelEditableRow", "", "icon", "pi pi-times", "class", "p-button-rounded p-button-text p-button-danger", 3, "click", 4, "ngIf"], ["itemSize", "10", 3, "optionLabel", "options", "ngModel", "filter", "resetFilterOnHide", "virtualScroll", "ngModelChange", "onChange"], ["pInputText", "", "type", "text", 3, "ngModel", "ngModelChange"], ["pInitEditableRow", "", 1, "btn", "btn-outline-warning", "mr-1", "round", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "pSaveEditableRow", "", "icon", "pi pi-check", 1, "p-button-rounded", "p-button-text", "p-button-success", "p-mr-2", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "pCancelEditableRow", "", "icon", "pi pi-times", 1, "p-button-rounded", "p-button-text", "p-button-danger", 3, "click"], [1, "row"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "fas", "fa-save"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-undo"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "fas", "fa-times"]], template: function BomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bill Of Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Bill Of Material ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "p-toast", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "p-confirmDialog", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p-table", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BomComponent_ng_template_20_Template, 11, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BomComponent_ng_template_21_Template, 9, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BomComponent_ng_template_22_Template, 12, 2, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p-dialog", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BomComponent_Template_p_dialog_visibleChange_23_listener($event) { return ctx.displayBasic = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "p-toast", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "p-confirmDialog", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, BomComponent_ng_template_26_Template, 78, 40, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, BomComponent_ng_template_27_Template, 10, 0, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("baseZIndex", 10000);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.bom_master_table)("rows", 10)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c4))("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c5))("loading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.displayBasic)("maximizable", true)("baseZIndex", 10000)("closable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("baseZIndex", 10000);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], primeng_card__WEBPACK_IMPORTED_MODULE_5__["Card"], primeng_toast__WEBPACK_IMPORTED_MODULE_6__["Toast"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialog"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"], primeng_dialog__WEBPACK_IMPORTED_MODULE_9__["Dialog"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputText"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["SortableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["SortIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _form_directive__WEBPACK_IMPORTED_MODULE_11__["FormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["Dropdown"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["EditableRow"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["EditableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["CellEditor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["InitEditableRow"], primeng_button__WEBPACK_IMPORTED_MODULE_14__["ButtonDirective"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["SaveEditableRow"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["CancelEditableRow"]], styles: ["[_nghost-%COMP%]     .p-datatable .p-datatable-header{\r\n    background: none;\r\n    border: none;\r\n}\r\n[_nghost-%COMP%]     .p-datatable .p-datatable-header .p-inputtext{\r\n    border:none;\r\n}\r\n[_nghost-%COMP%]     .p-datatable .p-datatable-header .p-inputtext:enabled:focus{\r\n    border-bottom: 1px solid #2196f3;\r\n    box-shadow: none;\r\n}\r\n[_nghost-%COMP%]     .p-datatable .p-datatable-header .p-inputtext:enabled:hover{\r\n    border-bottom: 1px solid #2196f3;\r\n\r\n}\r\n[_nghost-%COMP%]     .p-dialog-content .container.productForm, [_nghost-%COMP%]     .p-dialog-content .container.materialForm{\r\n    padding : 20px;\r\n    margin : 10px 10px 10px 0px;\r\n    box-shadow: 0px 0px 10px #cfcdcd;\r\n}\r\n[_nghost-%COMP%]     .p-dialog-footer{\r\n    text-align: center;\r\n    padding-top: 10px;\r\n}\r\n[_nghost-%COMP%]     .material-add-btn{\r\n    text-align: right;\r\n}\r\n[_nghost-%COMP%]     .pop-dropdown .p-dropdown-items-wrapper, [_nghost-%COMP%]     .pop-dropdown{\r\n    width : 20rem;\r\n}\r\n[_nghost-%COMP%]     .p-dropdown.ng-dirty.ng-invalid{\r\n    border-color: unset !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9tL2JvbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0NBQWdDOztBQUVwQztBQUNBO0lBQ0ksY0FBYztJQUNkLDJCQUEyQjtJQUMzQixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvYm9tL2JvbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZSAucC1kYXRhdGFibGUtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlIC5wLWRhdGF0YWJsZS1oZWFkZXIgLnAtaW5wdXR0ZXh0e1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZSAucC1kYXRhdGFibGUtaGVhZGVyIC5wLWlucHV0dGV4dDplbmFibGVkOmZvY3Vze1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMTk2ZjM7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUgLnAtZGF0YXRhYmxlLWhlYWRlciAucC1pbnB1dHRleHQ6ZW5hYmxlZDpob3ZlcntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjE5NmYzO1xyXG5cclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnAtZGlhbG9nLWNvbnRlbnQgLmNvbnRhaW5lci5wcm9kdWN0Rm9ybSw6aG9zdCA6Om5nLWRlZXAgLnAtZGlhbG9nLWNvbnRlbnQgLmNvbnRhaW5lci5tYXRlcmlhbEZvcm17XHJcbiAgICBwYWRkaW5nIDogMjBweDtcclxuICAgIG1hcmdpbiA6IDEwcHggMTBweCAxMHB4IDBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjY2ZjZGNkO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAucC1kaWFsb2ctZm9vdGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXRlcmlhbC1hZGQtYnRue1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAucG9wLWRyb3Bkb3duIC5wLWRyb3Bkb3duLWl0ZW1zLXdyYXBwZXIsIDpob3N0IDo6bmctZGVlcCAucG9wLWRyb3Bkb3due1xyXG4gICAgd2lkdGggOiAyMHJlbTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnAtZHJvcGRvd24ubmctZGlydHkubmctaW52YWxpZHtcclxuICAgIGJvcmRlci1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bom',
                templateUrl: './bom.component.html',
                styleUrls: ['./bom.component.css']
            }]
    }], function () { return [{ type: _bom_service_bomservice_service__WEBPACK_IMPORTED_MODULE_2__["BomserviceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/bom/bom_service/bomservice.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/bom/bom_service/bomservice.service.ts ***!
  \*******************************************************/
/*! exports provided: BomserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BomserviceService", function() { return BomserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class BomserviceService {
    constructor(http) {
        this.http = http;
        this.url = "/api/";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    getBomMaster() {
        return this.http.get(this.url + "getBomMaster");
    }
    getItemMaster() {
        return this.http.get(this.url + "getItemMaster");
    }
    getUnitMaster() {
        return this.http.get(this.url + "getUnitMaster");
    }
    saveBomMaster(bom_master) {
        return this.http.post(this.url + "postBomMaster", JSON.stringify(bom_master), this.httpOptions);
    }
    saveBomDetail(bom_detail) {
        return this.http.post(this.url + 'postBomDetail', JSON.stringify(bom_detail), this.httpOptions);
    }
    deleteBomTable(bm_code) {
        return this.http.put(this.url + 'deleteBomTable?bm_code=' + bm_code, this.httpOptions);
    }
    getBomDetailTable(bd_bm_code) {
        return this.http.get(this.url + 'getBomDetailTable?bd_bm_code=' + bd_bm_code);
    }
}
BomserviceService.ɵfac = function BomserviceService_Factory(t) { return new (t || BomserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BomserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BomserviceService, factory: BomserviceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BomserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/form.directive.ts":
/*!***********************************!*\
  !*** ./src/app/form.directive.ts ***!
  \***********************************/
/*! exports provided: FormDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDirective", function() { return FormDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FormDirective {
    constructor(el) {
        this.el = el;
    }
    onFormSubmit() {
        const invalidControl = this.el.nativeElement.querySelector('.ng-invalid');
        if (invalidControl) {
            invalidControl.focus();
        }
    }
}
FormDirective.ɵfac = function FormDirective_Factory(t) { return new (t || FormDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
FormDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FormDirective, selectors: [["", "focusInvalidInput", ""]], hostBindings: function FormDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function FormDirective_submit_HostBindingHandler() { return ctx.onFormSubmit(); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[focusInvalidInput]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onFormSubmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['submit']
        }] }); })();


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


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 195, vars: 0, consts: [[1, "app-content", "content", "container-fluid"], [1, "content-wrapper"], [1, "content-header", "row"], [1, "content-header-left", "col-md-6", "col-xs-12", "mb-1"], [1, "content-header-title"], [1, "content-header-right", "breadcrumbs-right", "breadcrumbs-top", "col-md-6", "col-xs-12"], [1, "breadcrumb-wrapper", "col-xs-12"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "index.html"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content-body"], [1, ""], ["id", "", 1, "card-block"], ["id", "invoice-company-details", 1, "row"], [1, "col-md-6", "col-sm-12", "text-xs-center", "text-md-left"], [1, "px-0", "list-unstyled"], [1, "text-bold-800"], [1, "col-md-6", "col-sm-12", "text-xs-center", "text-md-right"], [1, "pb-3"], [1, "lead", "text-bold-800"], ["id", "invoice-customer-details", 1, "row", "pt-2"], [1, "col-sm-12", "text-xs-center", "text-md-left"], [1, "text-muted"], ["id", "invoice-items-details", 1, "pt-2"], [1, "row"], [1, "table-responsive", "col-sm-12"], [1, "table"], [1, "text-xs-right"], ["scope", "row"], [1, "col-md-7", "col-sm-12", "text-xs-center", "text-md-left"], [1, "lead"], [1, "col-md-8"], [1, "table", "table-borderless", "table-sm"], [1, "col-md-5", "col-sm-12"], [1, "table-responsive"], [1, "text-bold-800", "text-xs-right"], [1, "pink", "text-xs-right"], [1, "bg-grey", "bg-lighten-4"], [1, "text-xs-center"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Invoice Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Invoice Template ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Robust Creative Studio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "4025 Oak Avenue,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Melbourne,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Florida 32940,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "INVOICE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "# INV-001001");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Balance Due");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "$ 12,000.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Bill To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Mr. Bret Lezama");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "4879 Westfall Avenue,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Albuquerque,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "New Mexico-87102.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Invoice Date :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " 06/05/2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Terms :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Due on Receipt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Due Date :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " 10/05/2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "table", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Item & Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Create PSD for mobile APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Simply dummy text of the printing and typesetting industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "$ 20.00/hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "120");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "$ 2400.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "iOS Application Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Pellentesque maximus feugiat lorem at cursus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "$ 25.00/hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "260");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "$ 6500.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "WordPress Template Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Vestibulum euismod est eu elit convallis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "$ 20.00/hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "300");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "$ 6000.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Payment Methods:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "table", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Bank name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "ABC Bank, USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Acc name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Amanda Orton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "IBAN:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "FGS165461646546AA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "SWIFT code:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "BTNPP34");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Total due");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "table", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Sub Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "$ 14,900.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "TAX (12%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "$ 1,788.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " $ 16,688.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Payment Made");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "(-) $ 4,688.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "tr", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Balance Due");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "td", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "$ 12,000.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Authorized person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Amanda Orton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Managing Director");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NavComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 88, vars: 0, consts: [[1, "header-navbar", "navbar", "navbar-with-menu", "navbar-fixed-top", "navbar-semi-dark", "navbar-shadow"], [1, "navbar-wrapper"], [1, "navbar-header"], [1, "nav", "navbar-nav"], [1, "nav-item", "mobile-menu", "hidden-md-up", "float-xs-left"], [1, "nav-link", "nav-menu-main", "menu-toggle", "hidden-xs"], [1, "pi", "pi-align-justify", 2, "font-size", "2rem"], [1, "nav-item"], ["routerLink", "", 1, "navbar-brand", "nav-link"], ["alt", "branding logo", "src", "assets/images/logo/robust-logo-light.png", "data-expand", "assets/images/logo/logo-light.png", "data-collapse", "assets/images/logo/logo-small.png", 1, "brand-logo"], [1, "nav-item", "hidden-md-up", "float-xs-right"], ["data-toggle", "collapse", "data-target", "#navbar-mobile", 1, "nav-link", "open-navbar-container"], [1, "pi", "pi-ellipsis-h"], [1, "navbar-container", "content", "container-fluid"], ["id", "navbar-mobile", 1, "collapse", "navbar-toggleable-sm"], [1, "nav-item", "hidden-sm-down"], [1, "pi", "pi-align-justify"], [1, "nav-link", "hidden-xs"], [1, "nav", "navbar-nav", "float-xs-right"], [1, "dropdown", "dropdown-user", "nav-item", 2, "padding-top", "10px"], ["href", "#", "data-toggle", "dropdown", 1, "nav-link", "dropdown-user-link"], [1, "pi", "pi-chevron-down"], [1, "dropdown-menu", "dropdown-menu-right"], ["href", "#", 1, "dropdown-item"], [1, "icon-head"], [1, "icon-mail6"], [1, "icon-clipboard2"], [1, "icon-calendar5"], [1, "dropdown-divider"], [1, "icon-power3"], ["data-scroll-to-active", "true", 1, "main-menu", "menu-fixed", "menu-dark", "menu-accordion", "menu-shadow"], [1, "main-menu-content"], ["id", "main-menu-navigation", "data-menu", "menu-navigation", 1, "navigation", "navigation-main"], ["routerLink", ""], [1, "fas", "fa-home"], [1, "menu-title"], [1, "fas", "fa-code-branch"], ["routerLink", "BillOfMaterial"], [1, "fas", "fa-money-bill-wave"], [1, "fas", "fa-store"], [1, "fas", "fa-comments-dollar"], [1, "fas", "fa-file-invoice-dollar"], [1, "fas", "fa-sliders-h"], [1, "fas", "fa-user"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "FY 2020-2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "ERP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Edit Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " My Inbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Calender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Masters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Purchase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "GST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Utility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.css']
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

module.exports = __webpack_require__(/*! F:\Santosh\angular-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map