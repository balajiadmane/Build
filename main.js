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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_registr_hostpital_registr_hostpital_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/registr-hostpital/registr-hostpital.component */ "./src/app/form/registr-hostpital/registr-hostpital.component.ts");
/* harmony import */ var _form_add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form/add-patient/add-patient.component */ "./src/app/form/add-patient/add-patient.component.ts");
/* harmony import */ var _component_hospital_hospital_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/hospital/hospital.component */ "./src/app/component/hospital/hospital.component.ts");
/* harmony import */ var _form_login_hospital_login_hospital_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form/login-hospital/login-hospital.component */ "./src/app/form/login-hospital/login-hospital.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: "addPatient", component: _form_add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_3__["AddPatientComponent"] },
    { path: "regiserHospital", component: _form_registr_hostpital_registr_hostpital_component__WEBPACK_IMPORTED_MODULE_2__["RegistrHostpitalComponent"] },
    { path: "", component: _form_login_hospital_login_hospital_component__WEBPACK_IMPORTED_MODULE_5__["LoginHospitalComponent"] },
    { path: "hospital", component: _component_hospital_hospital_component__WEBPACK_IMPORTED_MODULE_4__["HospitalComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "#leftNavar{\n \n    padding: 0px;\n    border-radius: unset;\n}\n#mainContent{\n    box-shadow: 0px 2px 9px #d4d2d2;\n    height: 80vh;\n}   \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksYUFBYTtJQUNiLHFCQUFxQjtDQUN4QjtBQUNEO0lBQ0ksZ0NBQWdDO0lBQ2hDLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsZWZ0TmF2YXJ7XG4gXG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xufVxuI21haW5Db250ZW50e1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggOXB4ICNkNGQyZDI7XG4gICAgaGVpZ2h0OiA4MHZoO1xufSAgICJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-md bg-dark navbar-dark\">\n  <!-- Brand -->\n  <a class=\"navbar-brand\" href=\"#\">Hospital management</a>\n\n  <!-- Toggler/collapsibe Button -->\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <!-- Navbar links -->\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n    <ul class=\"navbar-nav\">\n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li> -->\n    </ul>\n  </div>\n  <div class=\"navbar-collapse collapse w-100 order-3 dual-collapse2\">\n      <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n      \n          </li>\n          <li class=\"nav-item\">\n              <a routerLink=\"\" *ngIf=\"userservice.isUserLoggedIn()\">Logout</a>\n          </li>\n      </ul>\n  </div>\n</nav>\n\n<div class=\"row\" style=\"margin-top: 4%;\">\n  <div class=\"col-md-2\" id=\"leftNavar\">\n      <ul class=\"list-group\" *ngIf= \"userservice.isUserLoggedIn()\">\n          <li class=\"list-group-item \"><a routerLink=\"addPatient\">Add patient</a></li>\n          <li class=\"list-group-item\"><a routerLink=\"hospital\">View patient</a></li>\n          <li class=\"list-group-item\"><a routerLink=\"searchPatient\">Search patient</a></li>\n        </ul>\n  </div>\n  <div class=\"col-md-9\" id=\"mainContent\">\n\n<router-outlet></router-outlet>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/user-details.service */ "./src/app/service/user-details.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(userservice) {
        this.userservice = userservice;
        this.title = 'hospital';
        console.log(this.userservice.isUserLoggedIn());
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_service_user_details_service__WEBPACK_IMPORTED_MODULE_1__["UserDetailsService"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _form_add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form/add-patient/add-patient.component */ "./src/app/form/add-patient/add-patient.component.ts");
/* harmony import */ var _service_patient_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/patient.service */ "./src/app/service/patient.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _form_registr_hostpital_registr_hostpital_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form/registr-hostpital/registr-hostpital.component */ "./src/app/form/registr-hostpital/registr-hostpital.component.ts");
/* harmony import */ var _service_hospital_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/hospital.service */ "./src/app/service/hospital.service.ts");
/* harmony import */ var _form_login_hospital_login_hospital_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./form/login-hospital/login-hospital.component */ "./src/app/form/login-hospital/login-hospital.component.ts");
/* harmony import */ var _component_hospital_hospital_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/hospital/hospital.component */ "./src/app/component/hospital/hospital.component.ts");
/* harmony import */ var _service_user_details_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/user-details.service */ "./src/app/service/user-details.service.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _form_add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_6__["AddPatientComponent"],
                _form_registr_hostpital_registr_hostpital_component__WEBPACK_IMPORTED_MODULE_10__["RegistrHostpitalComponent"],
                _form_login_hospital_login_hospital_component__WEBPACK_IMPORTED_MODULE_12__["LoginHospitalComponent"],
                _component_hospital_hospital_component__WEBPACK_IMPORTED_MODULE_13__["HospitalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot()
            ],
            providers: [_service_patient_service__WEBPACK_IMPORTED_MODULE_7__["PatientService"], _service_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"], _service_user_details_service__WEBPACK_IMPORTED_MODULE_14__["UserDetailsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/hospital/hospital.component.css":
/*!***********************************************************!*\
  !*** ./src/app/component/hospital/hospital.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#UnReleasedTb{\n    min-height: 40%;\n    max-height: 70%;\n    border-top: 2px solid green;\n    overflow: overlay;\n    border-bottom:2px solid green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hvc3BpdGFsL2hvc3BpdGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsOEJBQThCO0NBQ2pDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2hvc3BpdGFsL2hvc3BpdGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjVW5SZWxlYXNlZFRie1xuICAgIG1pbi1oZWlnaHQ6IDQwJTtcbiAgICBtYXgtaGVpZ2h0OiA3MCU7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGdyZWVuO1xuICAgIG92ZXJmbG93OiBvdmVybGF5O1xuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkIGdyZWVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/component/hospital/hospital.component.html":
/*!************************************************************!*\
  !*** ./src/app/component/hospital/hospital.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"col-md-12\" id=\"UnReleasedTb\">\n      <h3 class=\"text-info\">Un-Released patient</h3>\n      <table class=\"table table-stripped\">\n        <thead>\n          <tr>\n            <td>Name</td>\n            <td>Contact</td>\n            <td>Description</td>\n            <td>Building</td>\n            <td>Room</td>\n            <td>Billing</td>\n            <td>State</td>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let pt of patientUnReleased\">\n            <td>{{pt.name}}</td>\n            <td>{{pt.cont}}</td>\n            <td>{{pt.descr}}</td>\n            <td>{{pt.building}}</td>\n            <td>{{pt.room}}</td>\n            <td>{{pt.bill}}\n              <p class=\"text-info\" *ngIf=\"pt.bill === null\"> <i class=\"fa fa-inr\" aria-hidden=\"true\"></i>\n                0.0 </p>\n            </td>\n            <td><button (click)=\"AddBills(pt)\" data-toggle=\"modal\" data-target=\"#billModel\"\n                class=\"btn btn-info btn-sm\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n\n                Bills</button></td>\n            <td><button class=\"btn btn-warning btn-sm\" *ngIf=\"pt.state === 'FALSE'\" [disabled]=\"pt.state === 'FALSE'\"\n                (click)=\"releasePatient(pt)\">Released</button>\n              <button class=\"btn btn-success btn-sm\" *ngIf=\"pt.state != 'FALSE'\"\n                (click)=\"releasePatient(pt)\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                Release</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n\n    <div class=\"col-md-12\" id=\"releasedPatient\">\n      <h3 class=\"text-info\">Released patient</h3>\n      <table class=\"table table-stripped\">\n          <thead>\n            <tr>\n              <td>Name</td>\n              <td>Contact</td>\n              <td>Description</td>\n              <td>Building</td>\n              <td>Room</td>\n              <td>Billing</td>\n              <td>State</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let pt of patientReleased\">\n              <td>{{pt.name}}</td>\n              <td>{{pt.cont}}</td>\n              <td>{{pt.descr}}</td>\n              <td>{{pt.building}}</td>\n              <td>{{pt.room}}</td>\n              <td> <i class=\"fa fa-inr\" aria-hidden=\"true\"></i>\n                {{pt.bill}}\n\n                \n              </td>\n              <td><button (click)=\"AddBills(pt)\" [disabled]=\"pt.state === 'FALSE'\" data-toggle=\"modal\" data-target=\"#billModel\"\n                  class=\"btn btn-info btn-sm\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n\n                  Bills</button></td>\n              <td><button class=\"btn btn-warning btn-sm\" *ngIf=\"pt.state === 'FALSE'\" [disabled]=\"pt.state === 'FALSE'\"\n                  (click)=\"releasePatient(pt)\">Released</button>\n                <button class=\"btn btn-success btn-sm\" *ngIf=\"pt.state != 'FALSE'\"\n                  (click)=\"releasePatient(pt)\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                  Release</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n    </div>\n  \n\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"billModel\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal Heading</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <form #bill=\"ngForm\" (ngSubmit)=\"addPatientBills(bill.value)\">\n          <div class=\"form-group\">\n            <label for=\"\">\n              Enter Amount:\n            </label>\n            <input class=\"form-control\" type=\"text\" name=\"Bills\" ngModel>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"\">Discount:</label>\n            <input type=\"text\" class=\"form-control\" name=\"discount\" ngModel>\n          </div>\n          <input type=\"submit\" class=\"btn btn-primary btn-sm\" value=\"Add\">\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/component/hospital/hospital.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/hospital/hospital.component.ts ***!
  \**********************************************************/
/*! exports provided: HospitalComponent, Patient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalComponent", function() { return HospitalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patient", function() { return Patient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_patient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/patient.service */ "./src/app/service/patient.service.ts");
/* harmony import */ var _service_hospital_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/hospital.service */ "./src/app/service/hospital.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HospitalComponent = /** @class */ (function () {
    function HospitalComponent(patient, hospital, toaster) {
        this.patient = patient;
        this.hospital = hospital;
        this.toaster = toaster;
        this.patientList = [];
        this.patientReleased = [];
        this.patientUnReleased = [];
        this.patientIdBills = "";
    }
    HospitalComponent.prototype.ngOnInit = function () {
        this.patientLists();
    };
    HospitalComponent.prototype.patientLists = function () {
        var _this = this;
        this.patient.patientList().subscribe(function (response) {
            console.log(response);
            _this.patientList = response;
            _this.patientReleased = _this.patientList.filter(function (dt) { return dt.state === "FALSE"; });
            _this.patientUnReleased = _this.patientList.filter(function (dt) { return dt.state === "TRUE"; });
        }, function (error) {
        });
    };
    HospitalComponent.prototype.AddBills = function (patient) {
        this.patientIdBills = patient.id;
    };
    //=====add patient bills
    HospitalComponent.prototype.addPatientBills = function (bills) {
        var _this = this;
        bills['id'] = this.patientIdBills;
        var dis = bills.discount / 100;
        bills['Bills'] = bills.Bills - (bills.Bills * dis);
        this.hospital.addBills(bills).subscribe(function (response) {
            _this.toaster.successToastr(response.msg, "Success!");
        }, function (error) {
            _this.toaster.errorToastr("Error", "Error!");
        });
    };
    HospitalComponent.prototype.releasePatient = function (patient) {
        var _this = this;
        if (patient.state === "TRUE") {
            patient['state'] = "FALSE";
        }
        else {
            patient['state'] = "TRUE";
        }
        this.hospital.releasePatient(patient).subscribe(function (response) {
            _this.toaster.successToastr(response.msg, "Success!");
            _this.patientLists();
        }, function (error) {
            _this.toaster.errorToastr("Error", "Error!");
        });
    };
    HospitalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hospital',
            template: __webpack_require__(/*! ./hospital.component.html */ "./src/app/component/hospital/hospital.component.html"),
            styles: [__webpack_require__(/*! ./hospital.component.css */ "./src/app/component/hospital/hospital.component.css")]
        }),
        __metadata("design:paramtypes", [_service_patient_service__WEBPACK_IMPORTED_MODULE_1__["PatientService"],
            _service_hospital_service__WEBPACK_IMPORTED_MODULE_2__["HospitalService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]])
    ], HospitalComponent);
    return HospitalComponent;
}());

var Patient = /** @class */ (function () {
    function Patient() {
    }
    return Patient;
}());



/***/ }),

/***/ "./src/app/form/add-patient/add-patient.component.css":
/*!************************************************************!*\
  !*** ./src/app/form/add-patient/add-patient.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vYWRkLXBhdGllbnQvYWRkLXBhdGllbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/form/add-patient/add-patient.component.html":
/*!*************************************************************!*\
  !*** ./src/app/form/add-patient/add-patient.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-8\">\n      <div class=\"card\" style=\"margin-top: 4%;\">\n        <div class=\"card-header\">\n\n        </div>\n        <div class=\"card-body\">\n          <form #patientForm=\"ngForm\" (ngSubmit)=\"addPatient(patientForm.value)\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                      <label for=\"\">Enter name:</label>\n                      <input class=\"form-control\" type=\"text\" name=\"name\" ngModel>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"\">Enter contact:</label>\n                      <input class=\"form-control\" type=\"text\" name=\"cont\" ngModel>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"\">Description:</label>\n                      <textarea class=\"form-control\" name=\"descr\" ngModel  cols=\"30\" rows=\"4\"></textarea>\n                    </div>\n              </div>\n              <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                      <label for=\"\">Select building:</label>\n                      <select class=\"form-control\" name=\"building\" ngModel>\n                        <option>A</option>\n                        <option>B</option>\n                        <option>C</option>\n                      </select>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"\">Enter room:</label>\n                      <input class=\"form-control\" type=\"text\" name=\"room\" ngModel>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"\">Enter bed no:</label>\n                      <input class=\"form-control\" type=\"text\" name=\"bed\" ngModel>\n                    </div>\n                </div>\n            </div>\n          \n          \n            <input type=\"submit\" value=\"Add patient\" class=\"btn btn-primary\">\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-2\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/form/add-patient/add-patient.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/form/add-patient/add-patient.component.ts ***!
  \***********************************************************/
/*! exports provided: AddPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPatientComponent", function() { return AddPatientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_patient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/patient.service */ "./src/app/service/patient.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddPatientComponent = /** @class */ (function () {
    function AddPatientComponent(pat_service, toastr, router) {
        this.pat_service = pat_service;
        this.toastr = toastr;
        this.router = router;
    }
    AddPatientComponent.prototype.ngOnInit = function () {
    };
    AddPatientComponent.prototype.addPatient = function (form) {
        var _this = this;
        form['hospital_id'] = this.pat_service.getUser().id;
        this.pat_service.addPatient(form).subscribe(function (response) {
            console.log(response);
            _this.toastr.successToastr(response.msg, 'Success!');
            _this.router.navigate(['hospital']);
        }, function (error) {
            console.log(error);
        });
    };
    AddPatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-patient',
            template: __webpack_require__(/*! ./add-patient.component.html */ "./src/app/form/add-patient/add-patient.component.html"),
            styles: [__webpack_require__(/*! ./add-patient.component.css */ "./src/app/form/add-patient/add-patient.component.css")]
        }),
        __metadata("design:paramtypes", [_service_patient_service__WEBPACK_IMPORTED_MODULE_1__["PatientService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddPatientComponent);
    return AddPatientComponent;
}());



/***/ }),

/***/ "./src/app/form/login-hospital/login-hospital.component.css":
/*!******************************************************************!*\
  !*** ./src/app/form/login-hospital/login-hospital.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#loginFrame{\n    margin-top:100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9sb2dpbi1ob3NwaXRhbC9sb2dpbi1ob3NwaXRhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZm9ybS9sb2dpbi1ob3NwaXRhbC9sb2dpbi1ob3NwaXRhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ2luRnJhbWV7XG4gICAgbWFyZ2luLXRvcDoxMDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/form/login-hospital/login-hospital.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/form/login-hospital/login-hospital.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-3\"></div>\n  <div class=\"col-md-5\">\n    <div class=\"card\" id=\"loginFrame\">\n    \n      <div class=\"card-body\">\n          <form class=\"\" #login=\"ngForm\" (ngSubmit)=\"loginHospital(login.value)\">\n              <div class=\"form-group\">\n                <label for=\"\">Enter email:</label>\n                <input  class =\"form-control\" type=\"email\" name=\"email\"  ngModel>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"\">Ener password:</label>\n                <input class=\"form-control\" type=\"password\" name=\"password\" ngModel>\n              </div>\n              <input type=\"submit\" value=\"Login\" class=\"btn btn-primary\">\n              <a routerLink=\"regiserHospital\" style=\"float: right;\" class=\"text-info\">New Hospital</a>\n          </form>\n      </div>\n     \n    </div>\n  </div>\n  <div class=\"col-md-4\"></div>\n</div>"

/***/ }),

/***/ "./src/app/form/login-hospital/login-hospital.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/form/login-hospital/login-hospital.component.ts ***!
  \*****************************************************************/
/*! exports provided: LoginHospitalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginHospitalComponent", function() { return LoginHospitalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_hospital_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/hospital.service */ "./src/app/service/hospital.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginHospitalComponent = /** @class */ (function () {
    function LoginHospitalComponent(hospital, toaster, router) {
        this.hospital = hospital;
        this.toaster = toaster;
        this.router = router;
    }
    LoginHospitalComponent.prototype.ngOnInit = function () {
        window.localStorage.clear();
    };
    LoginHospitalComponent.prototype.loginHospital = function (form) {
        var _this = this;
        this.hospital.loginHospital(form).subscribe(function (response) {
            _this.toaster.successToastr(response.msg, "Success!");
            window.localStorage.setItem("user", JSON.stringify(response));
            _this.router.navigate(['hospital']);
        }, function (error) {
            _this.toaster.errorToastr(error.msg, "Error!");
        });
    };
    LoginHospitalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-hospital',
            template: __webpack_require__(/*! ./login-hospital.component.html */ "./src/app/form/login-hospital/login-hospital.component.html"),
            styles: [__webpack_require__(/*! ./login-hospital.component.css */ "./src/app/form/login-hospital/login-hospital.component.css")]
        }),
        __metadata("design:paramtypes", [_service_hospital_service__WEBPACK_IMPORTED_MODULE_1__["HospitalService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginHospitalComponent);
    return LoginHospitalComponent;
}());



/***/ }),

/***/ "./src/app/form/registr-hostpital/registr-hostpital.component.css":
/*!************************************************************************!*\
  !*** ./src/app/form/registr-hostpital/registr-hostpital.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vcmVnaXN0ci1ob3N0cGl0YWwvcmVnaXN0ci1ob3N0cGl0YWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/form/registr-hostpital/registr-hostpital.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/form/registr-hostpital/registr-hostpital.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n        <form #regisHot = \"ngForm\" (ngSubmit)=\"registerHospital(regisHot.value)\">\n\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"\">Name</label>\n                    <input class=\"form-control\" type=\"text\" name=\"name\" ngModel>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"\">contact</label>\n                  <input class=\"form-control\" type=\"text\" name=\"contact\" ngModel>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"\">Email</label>\n                  <input class=\"form-control\" type=\"email\" name=\"email\" ngModel>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"\">Address</label>\n                    <textarea name=\"address\"  class=\"form-control\" cols=\"30\" rows=\"4\" ngModel></textarea>\n                  </div>\n            </div>\n            <div class=\"col-md-6\">\n             \n                  <div class=\"form-group\">\n                    <label for=\"\">password</label>\n                    <input class=\"form-control\" type=\"password\" name=\"password\" ngModel>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"\">confirm password:</label>\n                    <input class=\"form-control\" type=\"password\" name=\"cnf_password\" ngModel>\n                  </div>\n            </div>\n          </div>\n         \n         \n\n            <input type=\"submit\" style=\"float: right;\" class=\"btn btn-primary\" value=\"Register\" value=\"Register\">\n        </form>\n      </div>\n      <div class=\"col-md-2\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/form/registr-hostpital/registr-hostpital.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/form/registr-hostpital/registr-hostpital.component.ts ***!
  \***********************************************************************/
/*! exports provided: RegistrHostpitalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrHostpitalComponent", function() { return RegistrHostpitalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_hospital_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/hospital.service */ "./src/app/service/hospital.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrHostpitalComponent = /** @class */ (function () {
    function RegistrHostpitalComponent(hospital, toaster, router) {
        this.hospital = hospital;
        this.toaster = toaster;
        this.router = router;
    }
    RegistrHostpitalComponent.prototype.ngOnInit = function () {
    };
    RegistrHostpitalComponent.prototype.registerHospital = function (form) {
        var _this = this;
        this.hospital.registerHospital(form).subscribe(function (response) {
            _this.toaster.successToastr(response.msg, "success!");
            _this.router.navigate(['']);
        }, function (error) {
            _this.toaster.errorToastr("Error", "Erro!");
        });
    };
    RegistrHostpitalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registr-hostpital',
            template: __webpack_require__(/*! ./registr-hostpital.component.html */ "./src/app/form/registr-hostpital/registr-hostpital.component.html"),
            styles: [__webpack_require__(/*! ./registr-hostpital.component.css */ "./src/app/form/registr-hostpital/registr-hostpital.component.css")]
        }),
        __metadata("design:paramtypes", [_service_hospital_service__WEBPACK_IMPORTED_MODULE_1__["HospitalService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegistrHostpitalComponent);
    return RegistrHostpitalComponent;
}());



/***/ }),

/***/ "./src/app/service/hospital.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/hospital.service.ts ***!
  \*********************************************/
/*! exports provided: HospitalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalService", function() { return HospitalService; });
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


var HospitalService = /** @class */ (function () {
    function HospitalService(http) {
        this.http = http;
        this.url = "http://52.66.197.146:5000/hospital";
    }
    HospitalService.prototype.registerHospital = function (payload) {
        return this.http.post(this.url + "/registerHospital", payload);
    };
    //-------add biilss
    HospitalService.prototype.addBills = function (payload) {
        return this.http.post(this.url + "/addPatientBill", payload);
    };
    //----release patient 
    HospitalService.prototype.releasePatient = function (payload) {
        return this.http.put(this.url + "/releasePation", payload);
    };
    HospitalService.prototype.loginHospital = function (payload) {
        return this.http.post(this.url + "/loginHospital", payload);
    };
    HospitalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HospitalService);
    return HospitalService;
}());



/***/ }),

/***/ "./src/app/service/patient.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/patient.service.ts ***!
  \********************************************/
/*! exports provided: PatientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientService", function() { return PatientService; });
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


var PatientService = /** @class */ (function () {
    function PatientService(http) {
        this.http = http;
        this.url = "http://52.66.197.146:5000/users";
        this.urlH = "http://52.66.197.146:5000/hospital";
    }
    PatientService.prototype.addPatient = function (payload) {
        // return this.http.post(this.url+"/addPatient",payload);
        return this.http.post(this.url + "/addPatient", payload);
    };
    //--------list of patient
    PatientService.prototype.patientList = function () {
        return this.http.get(this.urlH + "/patientsList?id=" + this.getUser().id);
    };
    PatientService.prototype.getUser = function () {
        return JSON.parse(window.localStorage.getItem("user"));
    };
    PatientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PatientService);
    return PatientService;
}());



/***/ }),

/***/ "./src/app/service/user-details.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/user-details.service.ts ***!
  \*************************************************/
/*! exports provided: UserDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsService", function() { return UserDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserDetailsService = /** @class */ (function () {
    function UserDetailsService() {
        if (window.localStorage.getItem('user') === null) {
            window.localStorage.setItem("user", JSON.stringify({
                id: "",
                token: ""
            }));
        }
    }
    /**
     *
     */
    UserDetailsService.prototype.getUserId = function () {
        return this.getUser().id;
    };
    /**
     * get token
     */
    UserDetailsService.prototype.getUserToken = function () {
        return this.getUser().token;
    };
    UserDetailsService.prototype.getUser = function () {
        return JSON.parse(window.localStorage.getItem('user'));
    };
    /**
     * is user is logged in
     */
    UserDetailsService.prototype.isUserLoggedIn = function () {
        return this.getUser().id != undefined && this.getUser().id != "" && this.getUser().id != null;
    };
    UserDetailsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UserDetailsService);
    return UserDetailsService;
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

module.exports = __webpack_require__(/*! /home/balaji/Desktop/s/ui/hospitalManagemenetUI/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map