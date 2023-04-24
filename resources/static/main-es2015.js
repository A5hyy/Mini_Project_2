(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/2yL":
/*!***********************************************************!*\
  !*** ./src/app/views/pages/auth/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../main/settings/commons.settings */ "zene");
/* harmony import */ var jsencrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsencrypt */ "mBZc");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js */ "NFKh");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-webstorage */ "OGQ0");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../register/register.component */ "NflW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _main_service_authentication_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../main/service/authentication/auth.service */ "C5RH");
/* harmony import */ var _main_service_common_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../main/service/common/alert.service */ "zz9i");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");



















function LoginComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(formBuilder, authService, alertService, route, dialog) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.alertService = alertService;
        this.route = route;
        this.dialog = dialog;
        this.loginSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
    }
    ngOnInit() {
        this.initLoginForm();
        this.loginSubscription = this.authService.getLoggedInStatus().subscribe(results => {
            if (results.status) {
                this.route.navigate([_main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].PAGES.home]);
            }
            else {
                this.alertService.showToaster('Login error : Incorrect username or password entered. Please try again', _main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].TOASTER_MESSAGES.error);
            }
        });
    }
    initLoginForm() {
        this.loginForm = this.formBuilder.group({
            userName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])
            ],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])
            ]
        });
    }
    ngOnDestroy() {
        this.loginSubscription.unsubscribe();
    }
    isControlHasError(controlName, validationType) {
        const control = this.loginForm.controls[controlName];
        if (!control) {
            return false;
        }
        const result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    }
    submit() {
        const controls = this.loginForm.controls;
        /** check form */
        if (this.loginForm.invalid) {
            Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
            return;
        }
        const userName = controls.userName.value.trim();
        const password = this.getEncryptedPassword(controls.password.value);
        this.authService.userLogin({ username: userName, password });
    }
    getEncryptedPassword(password) {
        password = crypto_js__WEBPACK_IMPORTED_MODULE_4__["SHA1"](password);
        password = crypto_js__WEBPACK_IMPORTED_MODULE_4__["enc"].Base64.stringify(password);
        const crypt = new jsencrypt__WEBPACK_IMPORTED_MODULE_3__["JSEncrypt"]();
        crypt.setPublicKey(this.publicKey || _main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].KEYS.PUBLIC_KEY);
        password = crypt.encrypt(password);
        return password;
    }
    register() {
        const dialogRef = this.dialog.open(_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], {
            panelClass: 'custom-dialog-panel',
            width: '70%'
        });
    }
    goToClient() {
        this.route.navigate(['/auth/client-page/']);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_main_service_authentication_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_main_service_common_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 26, vars: 3, consts: [["id", "card", 2, "text-align", "center", "padding-top", "200px"], [1, "row"], [2, "color", "#0F3460"], [1, "t-a-c"], ["autocomplete", "off", "id", "login-form", 1, "kt-form", 2, "padding-top", "25px", 3, "formGroup"], [1, "form-group", 2, "padding-top", "10px"], [2, "width", "300px"], ["autocomplete", "off", "formControlName", "userName", "matInput", "", "placeholder", "User Name", "type", "text", 1, "user-name"], [4, "ngIf"], ["autocomplete", "off", "formControlName", "password", "matInput", "", "placeholder", "Password", "type", "password", 1, "password"], [2, "padding-top", "35px"], ["color", "primary", "mat-raised-button", "", 2, "margin-right", "15px", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "FitnessApp : Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "mat-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, LoginComponent_mat_error_12_Template, 3, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, LoginComponent_mat_error_18_Template, 3, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_21_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Sign In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_23_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, " system password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isControlHasError("userName", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isControlHasError("password", "required"));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ngx_webstorage__WEBPACK_IMPORTED_MODULE_5__["LocalStorage"])(_main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].PUBLIC_KEY)
], LoginComponent.prototype, "publicKey", void 0);


/***/ }),

/***/ "/KI2":
/*!*******************************************************************!*\
  !*** ./src/app/views/pages/auth/service/user-register.service.ts ***!
  \*******************************************************************/
/*! exports provided: UserRegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterService", function() { return UserRegisterService; });
/* harmony import */ var _main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../main/settings/commons.settings */ "zene");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");




class UserRegisterService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.onRegisterUser = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    registerUser(userRQ) {
        let response = this.httpClient.post(_main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_0__["SETTINGS"].ENDPOINTS.registerUser.url, userRQ);
        response.subscribe((data) => {
            this.onRegisterUser.next(data);
        });
    }
}
UserRegisterService.ɵfac = function UserRegisterService_Factory(t) { return new (t || UserRegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UserRegisterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserRegisterService, factory: UserRegisterService.ɵfac });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\muham\OneDrive\Desktop\FINAL MINI PROJECT\FitnessApp-Frontend\src\main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "5OIO":
/*!******************************************!*\
  !*** ./src/app/main/guard/auth-guard.ts ***!
  \******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _settings_commons_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../settings/commons.settings */ "zene");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _service_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/authentication/auth.service */ "C5RH");




class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route, state) {
        if (!this.authService.isLoggedIn()) {
            if (localStorage.getItem(_settings_commons_settings__WEBPACK_IMPORTED_MODULE_0__["SETTINGS"].ACCESS_TOKEN) != null) {
                // this.alertService.showToaster('Your session is expired', SETTINGS.TOASTER_MESSAGES.warning);
            }
            this.authService.setLoggedOut();
            return false;
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });


/***/ }),

/***/ "AytR":
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

/***/ "BKQV":
/*!****************************************************!*\
  !*** ./src/app/views/pages/home/model/user-dto.ts ***!
  \****************************************************/
/*! exports provided: UserDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDTO", function() { return UserDTO; });
class UserDTO {
    constructor(userDTO) {
        userDTO = userDTO || {};
        this.userID = userDTO.userID || '';
        this.userName = userDTO.userName || '';
        this.firstName = userDTO.firstName || '';
        this.lastName = userDTO.lastName || '';
        this.email = userDTO.email || '';
        this.dateOfBirthStr = userDTO.dateOfBirthStr || '';
        this.status = userDTO.status || 'ACT';
        this.userType = userDTO.userType || 'ADMIN';
    }
}


/***/ }),

/***/ "BYi5":
/*!********************************************!*\
  !*** ./src/app/shared/material.imports.ts ***!
  \********************************************/
/*! exports provided: MaterialImports */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialImports", function() { return MaterialImports; });
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/table */ "GXRp");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ "mPVK");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ "jMqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ "40+f");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tree */ "OLiY");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-bar */ "BTe0");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/chips */ "f44v");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button-toggle */ "Ynp+");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/stepper */ "hzfI");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "q7Ft");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/core */ "8Y7J");



































class MaterialImports {
}
MaterialImports.ɵfac = function MaterialImports_Factory(t) { return new (t || MaterialImports)(); };
MaterialImports.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineNgModule"]({ type: MaterialImports });
MaterialImports.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineInjector"]({ imports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkTableModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_30__["MatCardModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__["DragDropModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_14__["MatTreeModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵsetNgModuleScope"](MaterialImports, { exports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkTableModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_30__["MatCardModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__["DragDropModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_14__["MatTreeModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"]] }); })();


/***/ }),

/***/ "BlT6":
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/home/users/add-user/add-user.component.ts ***!
  \***********************************************************************/
/*! exports provided: CUSTOM_DATE_FORMATS, AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_DATE_FORMATS", function() { return CUSTOM_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../main/settings/commons.settings */ "zene");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _model_user_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/user-dto */ "BKQV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material-moment-adapter */ "fgD+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/user.service */ "UaSX");
/* harmony import */ var _main_service_application_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../main/service/application/date.service */ "Tgva");
/* harmony import */ var _main_service_common_alert_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../main/service/common/alert.service */ "zz9i");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");




















function AddUserComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddUserComponent_div_60_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddUserComponent_div_60_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddUserComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, AddUserComponent_div_60_mat_error_6_Template, 3, 0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, AddUserComponent_div_60_mat_error_12_Template, 3, 0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.isControlHasError("password", "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.isControlHasError("confirmPassword", "required"));
} }
function AddUserComponent_ng_container_63_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddUserComponent_ng_container_63_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r11.onSave($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r8.isFormValid());
} }
const CUSTOM_DATE_FORMATS = {
    parse: {
        dateInput: 'DD/MM/YYYY',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'DD/MM/YYYY',
        dateA11yLabel: 'DD/MM/YYYY',
        monthYearA11yLabel: 'DD/MM/YYYY',
    },
};
class AddUserComponent {
    constructor(dialogRef, formBuilder, userService, dateService, alertService, data) {
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.dateService = dateService;
        this.alertService = alertService;
        this.data = data;
        this.userDto = new _model_user_dto__WEBPACK_IMPORTED_MODULE_5__["UserDTO"]();
        this.onSaveOrUpdateUserSubs = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
    }
    ngOnInit() {
        this.userDto = new _model_user_dto__WEBPACK_IMPORTED_MODULE_5__["UserDTO"](this.data.user);
        this.title = this.data.title;
        this.type = this.data.type;
        this.initUserForm();
        if (this.type !== 'ADD') {
            this.userAddEditForm.get('password').clearValidators();
            this.userAddEditForm.get('password').setErrors(null);
            this.userAddEditForm.get('confirmPassword').clearValidators();
            this.userAddEditForm.get('confirmPassword').setErrors(null);
            this.userAddEditForm.updateValueAndValidity({ onlySelf: true });
        }
        this.onSaveOrUpdateUserSubs = this.userService.onSaveOrUpdateUser
            .subscribe((data) => {
            if (data) {
                if (this.type == 'ADD') {
                    this.alertService.showToaster("Saved successfully", _main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].TOASTER_MESSAGES.success);
                }
                else {
                    this.alertService.showToaster("Updated successfully", _main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].TOASTER_MESSAGES.success);
                }
                this.dialogRef.close(true);
            }
        });
    }
    initUserForm() {
        this.userAddEditForm = this.formBuilder.group({
            userName: [this.userDto.userName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])],
            firstName: [this.userDto.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])],
            lastName: [this.userDto.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])],
            email: [this.userDto.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])],
            confirmPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])],
            dateOfBirthStr: [this.dateService.getMomentDateFromDateStr(this.userDto.dateOfBirthStr), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])],
            userType: [this.userDto.userType, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])],
            status: [this.userDto.status, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])]
        });
    }
    isControlHasError(controlName, validationType) {
        const control = this.userAddEditForm.controls[controlName];
        if (!control) {
            return false;
        }
        const result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    }
    onCancelClick($event) {
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }
        this.dialogRef.close(false);
    }
    onSave($event) {
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }
        let submitData = Object.assign({}, this.userAddEditForm.getRawValue());
        let password = submitData.password;
        let confirmPassword = submitData.confirmPassword;
        if (password !== confirmPassword) {
            this.alertService.showToaster("Password mismatch", _main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].TOASTER_MESSAGES.error);
            return;
        }
        if (this.validateEmail(submitData.email) == null) {
            this.alertService.showToaster("Invalid email", _main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].TOASTER_MESSAGES.error);
            return;
        }
        submitData.dateOfBirthStr = moment__WEBPACK_IMPORTED_MODULE_3__(submitData.dateOfBirthStr).format(_main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].DATE_TIME.DEFAULT_DATE_FORMAT);
        submitData.userID = this.userDto.userID;
        this.userService.saveOrUpdateUser(submitData);
    }
    validateEmail(email) {
        return String(email)
            .toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }
    ;
    isFormValid() {
        return this.userAddEditForm.valid;
    }
    ngOnDestroy() {
        this.onSaveOrUpdateUserSubs.unsubscribe();
    }
}
AddUserComponent.ɵfac = function AddUserComponent_Factory(t) { return new (t || AddUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_main_service_application_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_main_service_common_alert_service__WEBPACK_IMPORTED_MODULE_11__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
AddUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AddUserComponent, selectors: [["app-add-user"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_LOCALE"]] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_FORMATS"], useValue: CUSTOM_DATE_FORMATS }
        ])], decls: 67, vars: 16, consts: [[1, "row"], [1, "col-md-11", "height-30px"], [1, "col-md-1", "t-a-e"], ["aria-label", "Close", "type", "button", 1, "btn-close", 3, "click"], ["autocomplete", "off", "id", "login-form", 1, "kt-form", 2, "padding-top", "25px", 3, "formGroup"], [1, "col-md-4"], [2, "width", "100%"], ["autocomplete", "off", "formControlName", "userName", "matInput", "", "placeholder", "User Name", "type", "text", 1, "user-name"], [4, "ngIf"], ["autocomplete", "off", "formControlName", "firstName", "matInput", "", "placeholder", "First Name", "type", "text", 1, "first-name"], ["autocomplete", "off", "formControlName", "lastName", "matInput", "", "placeholder", "Last Name", "type", "text", 1, "user-name"], [1, "col-md-12"], ["autocomplete", "off", "formControlName", "email", "matInput", "", "placeholder", "Email", "type", "text", 1, "user-name"], ["appearance", "fill", 2, "width", "100%"], ["formControlName", "dateOfBirthStr", "matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["dateOfBirthStr", ""], ["formControlName", "userType", "placeholder", "User Type", "required", ""], [3, "value"], ["formControlName", "status", "placeholder", "Status", "required", ""], ["class", "row", 4, "ngIf"], [1, "col-md-12", "t-a-e"], ["type", "button", 1, "btn", "btn-secondary", "m-l-20", 3, "click"], ["autocomplete", "off", "formControlName", "password", "matInput", "", "placeholder", "Password", "type", "password", 1, "first-name"], ["autocomplete", "off", "formControlName", "confirmPassword", "matInput", "", "placeholder", "Password", "type", "password", 1, "user-name"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"]], template: function AddUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddUserComponent_Template_button_click_5_listener($event) { return ctx.onCancelClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, AddUserComponent_mat_error_15_Template, 3, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, AddUserComponent_mat_error_21_Template, 3, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, AddUserComponent_mat_error_27_Template, 3, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](33, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, AddUserComponent_mat_error_34_Template, 3, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "Date of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](40, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](41, "mat-datepicker-toggle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](42, "mat-datepicker", null, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, AddUserComponent_mat_error_51_Template, 3, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "mat-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58, "Inactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](59, AddUserComponent_mat_error_59_Template, 3, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](60, AddUserComponent_div_60_Template, 13, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](63, AddUserComponent_ng_container_63_Template, 3, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddUserComponent_Template_button_click_65_listener($event) { return ctx.onCancelClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.userAddEditForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isControlHasError("userName", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isControlHasError("firstName", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isControlHasError("lastName", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isControlHasError("email", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matDatepicker", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("for", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", "ADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", "USER");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isControlHasError("userType", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", "ACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", "INA");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isControlHasError("status", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.type === "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.type != "VIEW");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepicker"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdXNlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "C5RH":
/*!*************************************************************!*\
  !*** ./src/app/main/service/authentication/auth.service.ts ***!
  \*************************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _settings_commons_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../settings/commons.settings */ "zene");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "OGQ0");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js */ "NFKh");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./token.service */ "umwL");
/* harmony import */ var _data_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/data.service */ "UMCQ");
/* harmony import */ var _privilege_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./privilege.service */ "o8re");
/* harmony import */ var _application_application_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../application/application.service */ "f78Q");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "iInd");











// export class LoginRQ {
//   username: string;
//   password: string;
// }
class AuthService {
    constructor(tokenService, dataService, privilegeService, applicationService, router) {
        this.tokenService = tokenService;
        this.dataService = dataService;
        this.privilegeService = privilegeService;
        this.applicationService = applicationService;
        this.router = router;
        this.loginStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    userLogin(logInRequest) {
        this.dataService.post(_settings_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].ENDPOINTS.login, logInRequest)
            .subscribe((res) => {
            this.tokenService.setAccessToken(res.accessToken);
            this.tokenService.setRefreshToken(res.refreshToken);
            const user = res.user;
            this.applicationService.setLoggedInUser(user);
            this.privilegeService.setUserPrivileges(user.privileges);
            Promise.all([
            // this.masterDataService.getSystemParameters(),
            // this.masterDataService.getConstants(),
            // this.masterDataService.getApplicationProperties(),
            ]).then(() => {
                this.loginStatus.next({ status: true });
            }, (error) => {
                console.log('error loading meta data , ', error);
            });
            // this.searchDataCacheService.resetSearchDataCache();
        }, error => {
            this.loginStatus.next({ status: false });
            this.applicationService.setLoggedInUser(null);
        });
    }
    isLoggedIn() {
        return !this.tokenService.isAccessTokenExpired() || !this.tokenService.isRefreshTokenExpired();
    }
    setLoggedOut() {
        this.dataService.post(_settings_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].ENDPOINTS.expireUserCache)
            .subscribe(data => {
        }, error => {
        });
        this.applicationService.setLoggedInUser(null);
        this.privilegeService.setUserPrivileges([]);
        this.loginStatus.next({ status: false });
        this.router.navigate(['/auth/login/']);
        // this.dataResetService.resetData();
        localStorage.clear();
        // this.cacheService.expireCache();
        this.tokenService.clearTokens();
    }
    getLoggedInStatus() {
        return this.loginStatus.asObservable();
    }
    getResetPassword(password) {
        password = crypto_js__WEBPACK_IMPORTED_MODULE_4__["SHA1"](password);
        return crypto_js__WEBPACK_IMPORTED_MODULE_4__["enc"].Base64.stringify(password);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_data_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_privilege_service__WEBPACK_IMPORTED_MODULE_8__["PrivilegeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_application_application_service__WEBPACK_IMPORTED_MODULE_9__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"])(_settings_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].PUBLIC_KEY)
], AuthService.prototype, "publicKey", void 0);


/***/ }),

/***/ "D/nl":
/*!****************************************************************!*\
  !*** ./src/app/main/service/application/url-encode.service.ts ***!
  \****************************************************************/
/*! exports provided: UrlEncodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlEncodeService", function() { return UrlEncodeService; });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class UrlEncodeService {
    constructor() {
        this.b64_table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        this.keyWord = 'K_7$53,~';
    }
    encode(data) {
        data = data + '';
        data = this.xor_encrypt(data);
        return this.b64_encode(data);
    }
    decode(data) {
        data = this.b64_decode(data);
        return this.xor_decrypt(data);
    }
    b64_encode(data) {
        let o1, o2, o3, h1, h2, h3, h4, bits, r, i = 0, enc = "";
        if (!data) {
            return data;
        }
        do {
            o1 = data[i++];
            o2 = data[i++];
            o3 = data[i++];
            bits = o1 << 16 | o2 << 8 | o3;
            h1 = bits >> 18 & 0x3f;
            h2 = bits >> 12 & 0x3f;
            h3 = bits >> 6 & 0x3f;
            h4 = bits & 0x3f;
            enc += this.b64_table.charAt(h1) + this.b64_table.charAt(h2) + this.b64_table.charAt(h3) + this.b64_table.charAt(h4);
        } while (i < data.length);
        r = data.length % 3;
        return (r ? enc.slice(0, r - 3) : enc) + "===".slice(r || 3);
    }
    b64_decode(data) {
        let o1, o2, o3, h1, h2, h3, h4, bits, i = 0, result = [];
        if (!data) {
            return data;
        }
        data += "";
        do {
            h1 = this.b64_table.indexOf(data.charAt(i++));
            h2 = this.b64_table.indexOf(data.charAt(i++));
            h3 = this.b64_table.indexOf(data.charAt(i++));
            h4 = this.b64_table.indexOf(data.charAt(i++));
            bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
            o1 = bits >> 16 & 0xff;
            o2 = bits >> 8 & 0xff;
            o3 = bits & 0xff;
            result.push(o1);
            if (h3 !== 64) {
                result.push(o2);
                if (h4 !== 64) {
                    result.push(o3);
                }
            }
        } while (i < data.length);
        return result;
    }
    keyCharAt(key, i) {
        return key.charCodeAt(Math.floor(i % key.length));
    }
    xor_encrypt(data) {
        let that = this;
        return underscore__WEBPACK_IMPORTED_MODULE_0__["map"](data, function (c, i) {
            return c.charCodeAt(0) ^ that.keyCharAt(that.keyWord, i);
        });
    }
    xor_decrypt(data) {
        let that = this;
        return underscore__WEBPACK_IMPORTED_MODULE_0__["map"](data, function (c, i) {
            return String.fromCharCode(c ^ that.keyCharAt(that.keyWord, i));
        }).join("");
    }
}
UrlEncodeService.ɵfac = function UrlEncodeService_Factory(t) { return new (t || UrlEncodeService)(); };
UrlEncodeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UrlEncodeService, factory: UrlEncodeService.ɵfac });


/***/ }),

/***/ "N0Tb":
/*!*********************************************************!*\
  !*** ./src/app/core/fitness-app/base/base.component.ts ***!
  \*********************************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _views_pages_home_settings_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../views/pages/home/settings/change-password/change-password.component */ "Pvo2");
/* harmony import */ var _views_pages_home_users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../views/pages/home/users/add-user/add-user.component */ "BlT6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _main_service_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../main/service/authentication/auth.service */ "C5RH");
/* harmony import */ var _main_service_application_application_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../main/service/application/application.service */ "f78Q");
/* harmony import */ var _main_service_authentication_privilege_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../main/service/authentication/privilege.service */ "o8re");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _views_pages_home_service_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../views/pages/home/service/user.service */ "UaSX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "SVse");












function BaseComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class BaseComponent {
    constructor(authService, applicationService, privilegeService, dialog, userService, router) {
        this.authService = authService;
        this.applicationService = applicationService;
        this.privilegeService = privilegeService;
        this.dialog = dialog;
        this.userService = userService;
        this.router = router;
        this.workoutsTitle = 'My Workouts';
        this.onGetUserByIDSubs = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
    }
    ngOnInit() {
        this.user = this.applicationService.getLoggedInUser();
        if (this.isAdmin()) {
            this.userType = 'Admin';
            this.workoutsTitle = 'Workouts';
        }
        else if (this.isUser()) {
            this.userType = 'User';
            this.workoutsTitle = 'My Workouts';
        }
        this.onGetUserByIDSubs = this.userService.onGetUserByID
            .subscribe(data => {
            if (data) {
                this.currentUser = data;
                if (this.currentUser !== null && this.currentUser !== undefined) {
                    this.showUserData();
                }
            }
        });
    }
    logout() {
        console.log('Logout');
        this.authService.setLoggedOut();
    }
    onClickHome() {
        this.router.navigate(['/home']);
    }
    isAdmin() {
        return this.privilegeService.isAdmin();
    }
    isUser() {
        return this.privilegeService.isUser();
    }
    onClickChangePassword() {
        const dialogRef = this.dialog.open(_views_pages_home_settings_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__["ChangePasswordComponent"], {
            panelClass: 'custom-dialog-panel',
            width: '40%',
            data: {
                userID: this.user.userID
            }
        });
    }
    onClickProfile() {
        if (!this.currentUser) {
            this.userService.getUserByID(this.user.userID);
        }
        else {
            this.showUserData();
        }
    }
    showUserData() {
        const dialogRef = this.dialog.open(_views_pages_home_users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_2__["AddUserComponent"], {
            panelClass: 'custom-dialog-panel',
            width: '70%',
            data: {
                title: `My Profile`,
                type: 'VIEW',
                user: this.currentUser
            }
        });
    }
}
BaseComponent.ɵfac = function BaseComponent_Factory(t) { return new (t || BaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_main_service_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_main_service_application_application_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_main_service_authentication_privilege_service__WEBPACK_IMPORTED_MODULE_6__["PrivilegeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_views_pages_home_service_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
BaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BaseComponent, selectors: [["app-base"]], decls: 35, vars: 4, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-primary", "fixed-nav-bar"], [1, "container-fluid"], ["href", "#/home", 1, "navbar-brand"], ["aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", "data-bs-target", "#navbarNavDropdown", "data-bs-toggle", "collapse", "type", "button", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "navbar-nav"], [1, "nav-item", "p-r-30"], ["aria-current", "page", "href", "#/home", 1, "nav-link", "active"], ["aria-current", "page", "href", "#/home/calories-calculator", 1, "nav-link", "active"], ["aria-current", "page", "href", "#/home/my-workouts", 1, "nav-link", "active"], ["aria-current", "page", "href", "#/home/exercises", 1, "nav-link", "active"], ["class", "p-r-30 nav-item", 4, "ngIf"], [1, "nav-item", "dropdown"], ["aria-expanded", "false", "data-bs-toggle", "dropdown", "href", "#", "id", "navbarDropdownMenuLink", "role", "button", 1, "nav-link", "dropdown-toggle", 2, "padding-right", "70px"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], ["href", "#", 1, "dropdown-item", 3, "click"], [1, "p-r-30", "nav-item"], ["href", "#/home/users", 1, "nav-link"]], template: function BaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Calories Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Exercises");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, BaseComponent_li_20_Template, 3, 0, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BaseComponent_Template_a_click_26_listener() { return ctx.onClickProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BaseComponent_Template_a_click_29_listener() { return ctx.onClickChangePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BaseComponent_Template_a_click_32_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("FitnessApp - [", ctx.user.userName, " - ", ctx.userType, "]");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.workoutsTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isAdmin());
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["ɵm"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterOutlet"]], styles: [".fixed-nav-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 9999;\n  width: 100%;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYmFzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJiYXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpeGVkLW5hdi1iYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTBweFxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "NflW":
/*!*****************************************************************!*\
  !*** ./src/app/views/pages/auth/register/register.component.ts ***!
  \*****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../main/settings/commons.settings */ "zene");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _service_user_register_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/user-register.service */ "/KI2");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");













function RegisterComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(data, dialogRef, formBuilder, userRegisterService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.userRegisterService = userRegisterService;
        this.onRegisterUserSubs = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
    }
    ngOnInit() {
        this.initRegisterForm();
        this.onRegisterUserSubs = this.userRegisterService.onRegisterUser
            .subscribe((data) => {
            if (data) {
                if (data.status === 'SUCCESS') {
                    alert('User successfully registered to the system');
                    this.dialogRef.close(false);
                }
                else {
                    if (data.appsErrorMessages[0].errorCode) {
                        alert(data.appsErrorMessages[0].errorCode);
                    }
                    else {
                        alert('Internal server error');
                    }
                }
            }
        });
    }
    isControlHasError(controlName, validationType) {
        const control = this.registerForm.controls[controlName];
        if (!control) {
            return false;
        }
        const result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    }
    onCancelClick($event) {
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }
        this.dialogRef.close(false);
    }
    onRegister($event) {
        const submitData = Object.assign({}, this.registerForm.getRawValue());
        const password = submitData.password;
        const confirmPassword = submitData.confirmPassword;
        if (password !== confirmPassword) {
            alert('Password mismatch');
            return;
        }
        if (this.validateEmail(submitData.email) == null) {
            alert('Invalid email');
            return;
        }
        submitData.dateOfBirthStr = moment__WEBPACK_IMPORTED_MODULE_3__(submitData.dateOfBirthStr).format(_main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].DATE_TIME.DEFAULT_DATE_FORMAT);
        this.userRegisterService.registerUser(submitData);
    }
    validateEmail(email) {
        return String(email)
            .toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }
    isValidUpload() {
        return this.registerForm.valid;
    }
    initRegisterForm() {
        this.registerForm = this.formBuilder.group({
            userName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])],
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])],
            confirmPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])],
            dateOfBirthStr: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])]
        });
    }
    ngOnDestroy() {
        this.onRegisterUserSubs.unsubscribe();
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_user_register_service__WEBPACK_IMPORTED_MODULE_6__["UserRegisterService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 64, vars: 10, consts: [[1, "row"], [1, "col-md-11", "height-30px"], [1, "col-md-1", "t-a-e"], ["aria-label", "Close", "type", "button", 1, "btn-close", 3, "click"], ["autocomplete", "off", "id", "login-form", 1, "kt-form", 2, "padding-top", "25px", 3, "formGroup"], [1, "col-md-4"], [2, "width", "100%"], ["autocomplete", "off", "formControlName", "userName", "matInput", "", "placeholder", "User Name", "type", "text", 1, "user-name"], [4, "ngIf"], ["autocomplete", "off", "formControlName", "firstName", "matInput", "", "placeholder", "First Name", "type", "text", 1, "first-name"], ["autocomplete", "off", "formControlName", "lastName", "matInput", "", "placeholder", "Last Name", "type", "text", 1, "user-name"], ["autocomplete", "off", "formControlName", "email", "matInput", "", "placeholder", "Email", "type", "text", 1, "user-name"], ["autocomplete", "off", "formControlName", "password", "matInput", "", "placeholder", "Password", "type", "password", 1, "first-name"], ["autocomplete", "off", "formControlName", "confirmPassword", "matInput", "", "placeholder", "Password", "type", "password", 1, "user-name"], ["appearance", "fill", 2, "width", "100%"], ["matInput", "", "formControlName", "dateOfBirthStr", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "col-md-12", "t-a-e"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-secondary", "m-l-20", 3, "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "User Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_6_listener($event) { return ctx.onCancelClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, RegisterComponent_mat_error_16_Template, 3, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, RegisterComponent_mat_error_22_Template, 3, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, RegisterComponent_mat_error_28_Template, 3, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, RegisterComponent_mat_error_35_Template, 3, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, RegisterComponent_mat_error_41_Template, 3, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, RegisterComponent_mat_error_47_Template, 3, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Date of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "mat-datepicker-toggle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "mat-datepicker", null, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_60_listener($event) { return ctx.onRegister($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_62_listener($event) { return ctx.onCancelClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isControlHasError("userName", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isControlHasError("firstName", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isControlHasError("lastName", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isControlHasError("email", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isControlHasError("password", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isControlHasError("confirmPassword", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.isValidUpload());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "OgzM":
/*!****************************************************!*\
  !*** ./src/app/views/pages/auth/auth.component.ts ***!
  \****************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");


class AuthComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 3, vars: 0, template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _material_imports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material.imports */ "BYi5");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");






class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _material_imports__WEBPACK_IMPORTED_MODULE_2__["MaterialImports"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
        ], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _material_imports__WEBPACK_IMPORTED_MODULE_2__["MaterialImports"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _material_imports__WEBPACK_IMPORTED_MODULE_2__["MaterialImports"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _material_imports__WEBPACK_IMPORTED_MODULE_2__["MaterialImports"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]] }); })();


/***/ }),

/***/ "Pvo2":
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/home/settings/change-password/change-password.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../main/settings/commons.settings */ "zene");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _main_service_authentication_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../main/service/authentication/auth.service */ "C5RH");
/* harmony import */ var _main_service_common_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../main/service/common/alert.service */ "zz9i");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/user.service */ "UaSX");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");













function ChangePasswordComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class ChangePasswordComponent {
    constructor(data, dialogRef, formBuilder, authService, alertService, userService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.alertService = alertService;
        this.userService = userService;
        this.onChangeUserPasswordSubs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
    }
    ngOnInit() {
        this.userID = this.data.userID;
        this.initForm();
        this.onChangeUserPasswordSubs = this.userService.onChangeUserPassword
            .subscribe(data => {
            if (data) {
                this.alertService.showToaster("Password changed successfully", _main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_3__["SETTINGS"].TOASTER_MESSAGES.success);
                this.dialogRef.close(false);
            }
        });
    }
    initForm() {
        this.passwordChangeForm = this.formBuilder.group({
            oldPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])],
            newPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])]
        });
    }
    isControlHasError(controlName, validationType) {
        const control = this.passwordChangeForm.controls[controlName];
        if (!control) {
            return false;
        }
        const result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    }
    onCancelClick($event) {
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }
        this.dialogRef.close(false);
    }
    onChangePassword($event) {
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }
        let submitData = Object.assign({}, this.passwordChangeForm.getRawValue());
        submitData.userID = this.userID;
        submitData.oldPassword = this.authService.getResetPassword(submitData.oldPassword);
        this.userService.changeUserPassword(submitData);
    }
    ngOnDestroy() {
        this.onChangeUserPasswordSubs.unsubscribe();
    }
    isFormValid() {
        return this.passwordChangeForm.valid;
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_main_service_authentication_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_main_service_common_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"])); };
ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["app-change-password"]], decls: 28, vars: 4, consts: [[1, "row"], [1, "col-md-11", "height-30px"], [1, "col-md-1", "t-a-e"], ["aria-label", "Close", "type", "button", 1, "btn-close", 3, "click"], ["autocomplete", "off", "id", "login-form", 1, "kt-form", 2, "padding-top", "25px", 3, "formGroup"], [1, "col-md-6"], [2, "width", "100%"], ["autocomplete", "off", "formControlName", "oldPassword", "matInput", "", "placeholder", "Current Password", "type", "password", 1, "first-name"], [4, "ngIf"], ["autocomplete", "off", "formControlName", "newPassword", "matInput", "", "placeholder", "New Password", "type", "password", 1, "user-name"], [1, "col-md-12", "t-a-e"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-secondary", "m-l-20", 3, "click"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_6_listener($event) { return ctx.onCancelClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Current Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ChangePasswordComponent_mat_error_15_Template, 3, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, ChangePasswordComponent_mat_error_21_Template, 3, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_24_listener($event) { return ctx.onChangePassword($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " Change ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_26_listener($event) { return ctx.onCancelClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.passwordChangeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isControlHasError("oldPassword", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isControlHasError("newPassword", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.isFormValid());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "SSQ5":
/*!*************************************************!*\
  !*** ./src/app/views/pages/auth/auth.module.ts ***!
  \*************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.component */ "OgzM");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "/2yL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "PCNd");
/* harmony import */ var _service_user_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/user-register.service */ "/KI2");
/* harmony import */ var _home_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/service/user.service */ "UaSX");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "NflW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "8Y7J");









const routes = [
    {
        path: '',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_1__["AuthComponent"],
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                data: { returnUrl: window.location.pathname }
            }
        ]
    }
];
class AuthModule {
    // @ts-ignore
    static forRoot() {
        return {
            ngModule: AuthModule
        };
    }
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        _service_user_register_service__WEBPACK_IMPORTED_MODULE_4__["UserRegisterService"],
        _home_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
    ], imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        _auth_component__WEBPACK_IMPORTED_MODULE_1__["AuthComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_auth_component__WEBPACK_IMPORTED_MODULE_1__["AuthComponent"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");


class AppComponent {
    constructor() {
        this.title = 'FitnessApp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Tgva":
/*!**********************************************************!*\
  !*** ./src/app/main/service/application/date.service.ts ***!
  \**********************************************************/
/*! exports provided: DateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateService", function() { return DateService; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class DateService {
    constructor() {
        this.defaultDateFormat = 'DD/MM/YYYY';
        this.defaultDateTimeFormat = 'DD/MM/YYYY HH:mm';
    }
    getDefaultFormattedDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_0__(date).format(this.defaultDateFormat);
    }
    getDefaultFormattedDateTime(date) {
        return moment__WEBPACK_IMPORTED_MODULE_0__(date).format(this.defaultDateTimeFormat);
    }
    getMomentDateFromDateStr(dateStr) {
        return moment__WEBPACK_IMPORTED_MODULE_0__(dateStr, this.defaultDateFormat);
    }
    getMonthStartDateStr(date) {
        return moment__WEBPACK_IMPORTED_MODULE_0__(date).startOf('month').format(this.defaultDateFormat);
    }
    getMonthEndDateStr(date) {
        return moment__WEBPACK_IMPORTED_MODULE_0__(date).endOf('month').format(this.defaultDateFormat);
    }
    getJsDate(date) {
        return this.getMomentDateFromDateStr(date).toDate();
    }
    getJSDateDifference(date1, date2) {
        return moment__WEBPACK_IMPORTED_MODULE_0__(date2).diff(moment__WEBPACK_IMPORTED_MODULE_0__(date1), 'days');
    }
    getMomentDateFromJSDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_0__(date);
    }
    getNow() {
        return moment__WEBPACK_IMPORTED_MODULE_0__();
    }
    isSameOrBefore(fromDate, toDate) {
        return this.getMomentDateFromDateStr(fromDate).isSameOrBefore(this.getMomentDateFromDateStr(toDate));
    }
    isSame(fromDate, toDate) {
        return this.getMomentDateFromDateStr(fromDate).isSame(this.getMomentDateFromDateStr(toDate));
    }
}
DateService.ɵfac = function DateService_Factory(t) { return new (t || DateService)(); };
DateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DateService, factory: DateService.ɵfac });


/***/ }),

/***/ "UMCQ":
/*!***************************************************!*\
  !*** ./src/app/main/service/data/data.service.ts ***!
  \***************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var rxjs_compat_observable_ErrorObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs-compat/observable/ErrorObservable */ "G5z9");
/* harmony import */ var rxjs_compat_observable_ErrorObservable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_observable_ErrorObservable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "4XzM");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "S7rW");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/throw */ "Drjo");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_add_observable_fromPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/fromPromise */ "K4wu");
/* harmony import */ var rxjs_add_observable_fromPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_observable_fromPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/do */ "92bn");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_add_operator_retry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/retry */ "6dvT");
/* harmony import */ var rxjs_add_operator_retry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_retry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _dto_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dto/pagination */ "vkOe");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _settings_commons_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../settings/commons.settings */ "zene");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _common_common_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/common.service */ "wqL4");
/* harmony import */ var _common_alert_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/alert.service */ "zz9i");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "iInd");















class DataService {
    constructor(httpClient, commons, alertService, router) {
        this.httpClient = httpClient;
        this.commons = commons;
        this.alertService = alertService;
        this.router = router;
    }
    get(conf, data) {
        return this.request(conf.url, { method: 'GET' }, data, conf.headerParam)
            .map(response => {
            return this.responseHandler(response);
        });
    }
    post(conf, data) {
        return this.request(conf.url, { method: 'POST' }, data, conf.headerParam)
            .map(response => {
            return this.responseHandler(response);
        });
    }
    request(url, options, data, headerParams) {
        options.headers = {};
        let showToaster = false;
        let excludeList = [];
        if (!!headerParams) {
            if (headerParams.showLoading) {
                this.commons.showLoading();
            }
            if (headerParams.showToast && headerParams.showToast === true) {
                showToaster = true;
            }
            const excludeErrorHeader = headerParams.excludeError;
            if (excludeErrorHeader) {
                excludeList = excludeErrorHeader;
            }
        }
        if (headerParams.isFileUpload) {
            options.body = data;
        }
        else if (headerParams.isFileDownload) {
            options.responseType = 'blob';
        }
        else {
            if (options.method === 'POST' ||
                options.method === 'DELETE') {
                options.headers['Content-Type'] = 'application/json';
            }
            if (data) {
                options.body = JSON.stringify(data);
            }
        }
        options.withCredentials = !headerParams.skipAuth;
        // console.log(options.method);
        // console.log(url);
        // console.log(options);
        return this.httpClient.request(options.method, url, options).catch(error => {
            this.handleError(error, showToaster, excludeList);
            return rxjs_compat_observable_ErrorObservable__WEBPACK_IMPORTED_MODULE_0__["ErrorObservable"].create('error');
        });
    }
    handleError(error, showToaster, excludeList) {
        // if (showToaster) {
        if (error.status === 401 && excludeList.indexOf(401) == -1) {
            alert('401 Error');
        }
        else if (error.status === 403 && excludeList.indexOf(403) == -1) {
            // alert("Your session is expired");
            // this.router.navigate(['/auth/login']);
        }
        else if (error.status === 500 && excludeList.indexOf(500) == -1) {
            this.alertService.showToaster('Please contact system administrator', _settings_commons_settings__WEBPACK_IMPORTED_MODULE_9__["SETTINGS"].TOASTER_MESSAGES.error);
        }
        else if ((error.status === 504 || error.status === 404) && excludeList.indexOf(504) === -1 && excludeList.indexOf(404) === -1) {
            alert('Not found');
            // this.router.navigate(['/auth/login']);
        }
        // }
        // this.commons.resetLoading();
        // this.commons.onApiError();
    }
    responseHandler(response) {
        this.commons.hideLoading();
        if (response.status == 'FAILED' || response.status == 'PARTIAL_SUCCESS') {
            this.commons.resetLoading();
            this.showErrorMessage(response);
            this.commons.onApiError();
            throw response;
        }
        else {
        }
        if (!response.result) {
            return response;
        }
        return response.result;
    }
    showErrorMessage(response) {
        const finalMessage = [];
        response.appsErrorMessages.forEach((error) => {
            if (error != null && error.errorCode != null) {
                finalMessage.push(error.errorCode);
            }
        });
        if (finalMessage.length > 0) {
            this.alertService.showToaster(finalMessage[0], _settings_commons_settings__WEBPACK_IMPORTED_MODULE_9__["SETTINGS"].TOASTER_MESSAGES.error);
        }
        else {
            this.alertService.showToaster('Please contact system administrator', _settings_commons_settings__WEBPACK_IMPORTED_MODULE_9__["SETTINGS"].TOASTER_MESSAGES.error);
        }
    }
    postWithPageData(conf, searchData, pagination) {
        if (underscore__WEBPACK_IMPORTED_MODULE_8__["isEmpty"](pagination)) {
            pagination = new _dto_pagination__WEBPACK_IMPORTED_MODULE_7__["Pagination"]();
        }
        if (underscore__WEBPACK_IMPORTED_MODULE_8__["isEmpty"](searchData)) {
            searchData = {};
        }
        for (const key in searchData) {
            if (searchData.hasOwnProperty(key)) {
                if (!underscore__WEBPACK_IMPORTED_MODULE_8__["isNumber"](searchData[key])) {
                    underscore__WEBPACK_IMPORTED_MODULE_8__["isEmpty"](searchData[key]) ? searchData[key] = null : '';
                }
            }
        }
        const data = Object.assign({}, searchData, pagination.getPageData());
        return this.post(conf, data);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_common_common_service__WEBPACK_IMPORTED_MODULE_12__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_common_alert_service__WEBPACK_IMPORTED_MODULE_13__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "UaSX":
/*!**********************************************************!*\
  !*** ./src/app/views/pages/home/service/user.service.ts ***!
  \**********************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../main/settings/commons.settings */ "zene");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _main_service_data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../main/service/data/data.service */ "UMCQ");




class UserService {
    constructor(dataService) {
        this.dataService = dataService;
        this.onChangeUserPassword = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onSearchedUsers = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onSaveOrUpdateUser = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onResetUserPassword = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onGetUserByID = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    resolve(route, state) {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.searchUsers({}),
            ]).then(() => {
                resolve();
            }, reject);
        });
    }
    searchUsers(searchRQ) {
        this.dataService.post(_main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_0__["SETTINGS"].ENDPOINTS.searchUsers, searchRQ)
            .subscribe(response => {
            this.searchedUsers = response;
            this.onSearchedUsers.next(this.searchedUsers);
        });
    }
    saveOrUpdateUser(userRQ) {
        const response = this.dataService.post(_main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_0__["SETTINGS"].ENDPOINTS.saveOrUpdateUser, userRQ);
        response.subscribe((data) => {
            this.onSaveOrUpdateUser.next(data);
        });
    }
    resetUserPassword(userID) {
        const data = Object.assign({}, _main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_0__["SETTINGS"].ENDPOINTS.resetUserPassword);
        data.url = data.url + '/' + userID;
        this.dataService.get(data)
            .subscribe((response) => {
            this.onResetUserPassword.next(response);
        });
    }
    changeUserPassword(saveRQ) {
        this.dataService.post(_main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_0__["SETTINGS"].ENDPOINTS.changeUserPassword, saveRQ)
            .subscribe(response => {
            this.selectedUser = response;
            this.onChangeUserPassword.next(this.selectedUser);
        });
    }
    getUserByID(userID) {
        const data = Object.assign({}, _main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_0__["SETTINGS"].ENDPOINTS.getUserByID);
        data.url = data.url + '/' + userID;
        this.dataService.get(data)
            .subscribe((response) => {
            this.onGetUserByID.next(response);
        });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_main_service_data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac });


/***/ }),

/***/ "Vixm":
/*!********************************************!*\
  !*** ./src/app/main/settings/constants.ts ***!
  \********************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
class Constants {
}
Constants.privilegeCodes = {
    ADMIN_DEFAULT_PRIVILEGE: 'ADMIN.DEFAULT.PRIVILEGE',
    USER_DEFAULT_PRIVILEGE: 'USER.DEFAULT.PRIVILEGE'
};
Constants.status = {
    ACT: 'Active',
    INA: 'Inactive'
};
Constants.gender = {
    F: 'Female',
    M: 'Male'
};
Constants.userType = {
    ADMIN: 'Admin',
    USER: 'User'
};
Constants.yesNo = {
    Y: 'Yes',
    N: 'No'
};
Constants.descriptionTypes = {
    DESCRIPTION: 'Description',
    BRAND: 'Brand',
    MODEL: 'Model',
    SPECIFICATIONS: 'Specifications'
};


/***/ }),

/***/ "XpXM":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _service_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/interceptors/token-interceptor */ "hjud");
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/data/data.service */ "UMCQ");
/* harmony import */ var _service_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/common/common.service */ "wqL4");
/* harmony import */ var _service_application_application_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/application/application.service */ "f78Q");
/* harmony import */ var _service_application_encryption_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/application/encryption.service */ "qwXw");
/* harmony import */ var _service_authentication_token_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/authentication/token.service */ "umwL");
/* harmony import */ var _service_authentication_privilege_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/authentication/privilege.service */ "o8re");
/* harmony import */ var _service_application_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/application/date.service */ "Tgva");
/* harmony import */ var _service_authentication_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/authentication/auth.service */ "C5RH");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guard/auth-guard */ "5OIO");
/* harmony import */ var _service_application_url_encode_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/application/url-encode.service */ "D/nl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "8Y7J");















class MainModule {
}
MainModule.ɵfac = function MainModule_Factory(t) { return new (t || MainModule)(); };
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [
        _service_data_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
        _service_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        _service_application_application_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"],
        _service_application_encryption_service__WEBPACK_IMPORTED_MODULE_7__["EncryptionService"],
        _service_authentication_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
        _service_application_url_encode_service__WEBPACK_IMPORTED_MODULE_13__["UrlEncodeService"],
        _service_authentication_token_service__WEBPACK_IMPORTED_MODULE_8__["TokenService"],
        _guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"],
        _service_application_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"],
        _service_authentication_privilege_service__WEBPACK_IMPORTED_MODULE_9__["PrivilegeService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
            useClass: _service_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_3__["TokenInterceptor"],
            multi: true
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        ], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](MainModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]], exports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _core_fitness_app_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/fitness-app/base/base.component */ "N0Tb");
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.module */ "XpXM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _views_pages_auth_auth_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/pages/auth/auth.module */ "SSQ5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "8Y7J");










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"] }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _main_main_module__WEBPACK_IMPORTED_MODULE_4__["MainModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _views_pages_auth_auth_module__WEBPACK_IMPORTED_MODULE_7__["AuthModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _core_fitness_app_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _main_main_module__WEBPACK_IMPORTED_MODULE_4__["MainModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _views_pages_auth_auth_module__WEBPACK_IMPORTED_MODULE_7__["AuthModule"]] }); })();


/***/ }),

/***/ "f78Q":
/*!*****************************************************************!*\
  !*** ./src/app/main/service/application/application.service.ts ***!
  \*****************************************************************/
/*! exports provided: ApplicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationService", function() { return ApplicationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-webstorage */ "OGQ0");
/* harmony import */ var _settings_commons_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../settings/commons.settings */ "zene");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/data.service */ "UMCQ");
/* harmony import */ var _encryption_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./encryption.service */ "qwXw");







class ApplicationService {
    constructor(dataService, encryptionService) {
        this.dataService = dataService;
        this.encryptionService = encryptionService;
        if (!underscore__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](this.loggedInUserEncrypted)) {
            this.loggedInUserDecrypted = this.getDecryptedUser(this.loggedInUserEncrypted);
        }
        else {
            this.loggedInUserDecrypted = {};
        }
    }
    loadPublicKey() {
        let loadPublicKeyObserving = this.dataService.get(_settings_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].ENDPOINTS.loadPublicKey);
        loadPublicKeyObserving.subscribe((response) => {
            this.publicKey = response.publicKey;
        });
        return loadPublicKeyObserving;
    }
    setLoggedInUser(user) {
        if (user != null) {
            this.loggedInUserEncrypted = this.getEncryptedUser(user);
            this.loggedInUserDecrypted = this.getDecryptedUser(this.loggedInUserEncrypted);
        }
        else {
            this.loggedInUserEncrypted = '';
            this.loggedInUserDecrypted = {};
        }
    }
    getDecryptedUser(user) {
        return JSON.parse(this.encryptionService.decrypt(user));
    }
    getEncryptedUser(user) {
        return this.encryptionService.encrypt(JSON.stringify(user));
    }
    getLoggedInUser() {
        return this.loggedInUserDecrypted;
    }
}
ApplicationService.ɵfac = function ApplicationService_Factory(t) { return new (t || ApplicationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_encryption_service__WEBPACK_IMPORTED_MODULE_6__["EncryptionService"])); };
ApplicationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ApplicationService, factory: ApplicationService.ɵfac, providedIn: 'root' });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__["LocalStorage"])(_settings_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].LOGGED_USER_ENC)
], ApplicationService.prototype, "loggedInUserEncrypted", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__["LocalStorage"])(_settings_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].PUBLIC_KEY)
], ApplicationService.prototype, "publicKey", void 0);


/***/ }),

/***/ "hjud":
/*!****************************************************************!*\
  !*** ./src/app/main/service/interceptors/token-interceptor.ts ***!
  \****************************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _settings_commons_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../settings/commons.settings */ "zene");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _authentication_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication/token.service */ "umwL");
/* harmony import */ var _data_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/data.service */ "UMCQ");





class TokenInterceptor {
    constructor(tokenService, dataService) {
        this.tokenService = tokenService;
        this.dataService = dataService;
    }
    intercept(req, next) {
        let request;
        if (req.withCredentials) {
            if (req.url.indexOf(_settings_commons_settings__WEBPACK_IMPORTED_MODULE_1__["SETTINGS"].ENDPOINTS.refreshToken.url) > -1) {
                request = req.clone({
                    setHeaders: {
                        'Authorization': 'Bearer ' + this.tokenService.getRefreshToken()
                    }
                });
                return next.handle(request);
            }
            else {
                if (!this.tokenService.isAccessTokenExpired()) {
                    request = req.clone({
                        setHeaders: {
                            'Authorization': 'Bearer ' + this.tokenService.getAccessToken()
                        }
                    });
                    return next.handle(request);
                }
                else {
                    console.log(req.url);
                    if (!this.tokenService.isRefreshTokenExpired()) {
                        return this.dataService.post(_settings_commons_settings__WEBPACK_IMPORTED_MODULE_1__["SETTINGS"].ENDPOINTS.refreshToken).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((response) => {
                            this.tokenService.setAccessToken(response.token);
                            request = req.clone({
                                setHeaders: {
                                    'Authorization': 'Bearer ' + this.tokenService.getAccessToken()
                                }
                            });
                            return next.handle(request);
                        }));
                    }
                    return next.handle(request);
                }
            }
        }
        else {
            request = req;
            return next.handle(request);
        }
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_authentication_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_data_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"])); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });


/***/ }),

/***/ "o8re":
/*!******************************************************************!*\
  !*** ./src/app/main/service/authentication/privilege.service.ts ***!
  \******************************************************************/
/*! exports provided: PrivilegeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivilegeService", function() { return PrivilegeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _settings_commons_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../settings/commons.settings */ "zene");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webstorage */ "OGQ0");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _settings_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../settings/constants */ "Vixm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _application_encryption_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../application/encryption.service */ "qwXw");







class PrivilegeService {
    constructor(encryptionService) {
        this.encryptionService = encryptionService;
        this.adminPrivilege = _settings_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].privilegeCodes.ADMIN_DEFAULT_PRIVILEGE;
        this.usersPrivilege = _settings_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].privilegeCodes.USER_DEFAULT_PRIVILEGE;
        this.userPrivileges = [];
        if (!underscore__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](this.userPrivilegesEncStr)) {
            this.decryptPrivileges();
        }
    }
    setUserPrivileges(userPrivileges) {
        this.userPrivilegesEncStr = this.encryptionService.encrypt(JSON.stringify(userPrivileges));
        this.decryptPrivileges();
    }
    hasPrivilege(privilegeCode) {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["contains"](this.userPrivileges, privilegeCode);
    }
    hasAnyPrivilege(privilegeCodes) {
        let hasAnyPrivilege = false;
        for (let i = 0; i < privilegeCodes.length; i++) {
            if (this.hasPrivilege(privilegeCodes[i])) {
                hasAnyPrivilege = true;
                break;
            }
        }
        return hasAnyPrivilege;
    }
    decryptPrivileges() {
        this.userPrivileges = JSON.parse(this.encryptionService.decrypt(this.userPrivilegesEncStr));
    }
    isAdmin() {
        return this.hasPrivilege(this.adminPrivilege);
    }
    ;
    isUser() {
        return this.hasPrivilege(this.usersPrivilege);
    }
    ;
}
PrivilegeService.ɵfac = function PrivilegeService_Factory(t) { return new (t || PrivilegeService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_application_encryption_service__WEBPACK_IMPORTED_MODULE_6__["EncryptionService"])); };
PrivilegeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: PrivilegeService, factory: PrivilegeService.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorage"])(_settings_commons_settings__WEBPACK_IMPORTED_MODULE_1__["SETTINGS"].USER_PRIVILEGES)
], PrivilegeService.prototype, "userPrivilegesEncStr", void 0);


/***/ }),

/***/ "qwXw":
/*!****************************************************************!*\
  !*** ./src/app/main/service/application/encryption.service.ts ***!
  \****************************************************************/
/*! exports provided: EncryptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncryptionService", function() { return EncryptionService; });
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ "NFKh");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class EncryptionService {
    constructor() {
        this.secretKey = 'Eo8(]<Z%`+';
    }
    encrypt(field) {
        return crypto_js__WEBPACK_IMPORTED_MODULE_0__["AES"].encrypt(field, this.secretKey).toString();
    }
    decrypt(cypherStr) {
        let bytes = crypto_js__WEBPACK_IMPORTED_MODULE_0__["AES"].decrypt(cypherStr.toString(), this.secretKey);
        return bytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_0__["enc"].Utf8);
    }
}
EncryptionService.ɵfac = function EncryptionService_Factory(t) { return new (t || EncryptionService)(); };
EncryptionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EncryptionService, factory: EncryptionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "umwL":
/*!**************************************************************!*\
  !*** ./src/app/main/service/authentication/token.service.ts ***!
  \**************************************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _settings_commons_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../settings/commons.settings */ "zene");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "EThc");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js */ "NFKh");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




class TokenService {
    constructor() {
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]();
        this.accessToken = null;
        this.refreshToken = null;
        let accessTokenEnc = localStorage.getItem(_settings_commons_settings__WEBPACK_IMPORTED_MODULE_0__["SETTINGS"].ACCESS_TOKEN);
        let refreshTokenEnc = localStorage.getItem(_settings_commons_settings__WEBPACK_IMPORTED_MODULE_0__["SETTINGS"].ACCESS_TOKEN);
        if (accessTokenEnc) {
            this.accessToken = crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].decrypt(accessTokenEnc, _settings_commons_settings__WEBPACK_IMPORTED_MODULE_0__["SETTINGS"].KEYS.SECRET).toString(crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8);
        }
        if (refreshTokenEnc) {
            this.refreshToken = crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].decrypt(refreshTokenEnc, _settings_commons_settings__WEBPACK_IMPORTED_MODULE_0__["SETTINGS"].KEYS.SECRET).toString(crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8);
        }
    }
    setAccessToken(accessToken) {
        localStorage.setItem(_settings_commons_settings__WEBPACK_IMPORTED_MODULE_0__["SETTINGS"].ACCESS_TOKEN, crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].encrypt(accessToken, _settings_commons_settings__WEBPACK_IMPORTED_MODULE_0__["SETTINGS"].KEYS.SECRET).toString());
        this.accessToken = accessToken;
    }
    setRefreshToken(refreshToken) {
        localStorage.setItem(_settings_commons_settings__WEBPACK_IMPORTED_MODULE_0__["SETTINGS"].REFRESH_TOKEN, crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].encrypt(refreshToken, _settings_commons_settings__WEBPACK_IMPORTED_MODULE_0__["SETTINGS"].KEYS.SECRET).toString());
        this.refreshToken = refreshToken;
    }
    getAccessToken() {
        return this.accessToken;
    }
    getRefreshToken() {
        return this.refreshToken;
    }
    isAccessTokenExpired() {
        if (this.accessToken) {
            return this.jwtHelper.isTokenExpired(this.accessToken);
        }
        return true;
    }
    isRefreshTokenExpired() {
        if (this.refreshToken) {
            return this.jwtHelper.isTokenExpired(this.refreshToken);
        }
        return true;
    }
    clearTokens() {
        this.accessToken = null;
        this.refreshToken = null;
    }
}
TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(); };
TokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TokenService, factory: TokenService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _core_fitness_app_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/fitness-app/base/base.component */ "N0Tb");
/* harmony import */ var _main_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/guard/auth-guard */ "5OIO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");





const routes = [
    {
        path: 'auth',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! src/app/views/pages/auth/auth.module */ "SSQ5")).then(m => m.AuthModule)
    },
    {
        path: '',
        component: _core_fitness_app_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"],
        canActivate: [_main_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() | src-app-views-pages-home-home-module */ "src-app-views-pages-home-home-module").then(__webpack_require__.bind(null, /*! src/app/views/pages/home/home.module */ "14ZT")).then(m => m.HomeModule)
            },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: 'home', pathMatch: 'full' }
        ],
        resolve: {
        // data: CalenderService
        },
    },
    { path: '**', redirectTo: 'home' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"] })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vkOe":
/*!****************************************!*\
  !*** ./src/app/main/dto/pagination.ts ***!
  \****************************************/
/*! exports provided: Pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
class Pagination {
    constructor(pagination) {
        pagination = pagination || {};
        this.pageSize = pagination.pageSize || 10;
        this.pageIndex = (pagination.pageIndex + 1) || 1;
    }
    getPageData() {
        return {
            page: this.pageIndex,
            rows: this.pageSize
        };
    }
}


/***/ }),

/***/ "wqL4":
/*!*******************************************************!*\
  !*** ./src/app/main/service/common/common.service.ts ***!
  \*******************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class CommonService {
    constructor() {
        this.onError = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.showLoadingCount = 0;
        this.hideLoadingCount = 0;
    }
    showLoading() {
        this.showLoadingCount++;
        this.loading.next({ status: true });
    }
    hideLoading() {
        this.hideLoadingCount++;
        if (this.showLoadingCount <= this.hideLoadingCount) {
            this.showLoadingCount = 0;
            this.hideLoadingCount = 0;
            this.loading.next({ status: false });
        }
    }
    resetLoading() {
        this.showLoadingCount = 0;
        this.hideLoadingCount = 0;
        this.loading.next({ status: false });
    }
    getLoadingStatus() {
        return this.loading.asObservable();
    }
    onApiError() {
        this.onError.next(true);
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(); };
CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zene":
/*!***************************************************!*\
  !*** ./src/app/main/settings/commons.settings.ts ***!
  \***************************************************/
/*! exports provided: SETTINGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS", function() { return SETTINGS; });
class SETTINGS {
}
SETTINGS.PUBLIC_KEY = 'Rt5Wx%4d';
SETTINGS.ACCESS_TOKEN = 'Eop_ubF';
SETTINGS.REFRESH_TOKEN = 'Xer_09s';
SETTINGS.LOGGED_USER_ENC = 'Zedij7&';
SETTINGS.USER_PRIVILEGES = 'C4d4%rd';
SETTINGS.DATE_FORMAT = 'DD/MM/YYYY';
SETTINGS.DATE_TIME_FORMAT = 'DD/MM/YYYY HH:mm';
SETTINGS.DATE_TIME = {
    DEFAULT_DATE_FORMAT: 'DD/MM/YYYY',
    DEFAULT_DATE_TIME_FORMAT: 'DD/MM/YYYY HH:mm',
};
SETTINGS.UPLOAD_IMAGE_SIZE_MAX_MB = 25;
SETTINGS.UPLOAD_IMAGE_ALLOWED_EXTENSIONS = ['jpg', 'png', 'jpeg'];
SETTINGS.TEST_SYSTEM = 'N';
SETTINGS.TEST_SYSTEM_DISPLAY_NAME = 'Demo';
SETTINGS.TOASTER_MESSAGES = {
    success: 'SUCCESS',
    error: 'ERROR',
    warning: 'WARNING',
    info: 'INFO',
    custom: 'CUSTOM'
};
SETTINGS.PAGES = {
    home: '/home'
};
SETTINGS.KEYS = {
    PUBLIC_KEY: '-----BEGIN PUBLIC KEY-----\n' +
        'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDO/pdXiY1LBBjVARZ5QAejI3id\n' +
        'ZZEDHW26zNaJnjffCobZPW16ArQTeM/pmWJ34FDgL+4Ev395pwlfmcLnBmRV6yTh\n' +
        'ur5yqZuVSYWQGFOG8VL5+R0yVFJMCF3UvHJpsXxBpmfHMOqg/08KXUxDSmJKmqsS\n' +
        'mn6rrbleupj0hci5OQIDAQAB' +
        '-----END PUBLIC KEY-----',
    SECRET: 'iIUsWtNZcf'
};
SETTINGS.ENDPOINTS = {
    loadPublicKey: {
        headerParam: {
            showLoading: false,
            showToast: false,
            skipAuth: true
        },
        url: '/fitness-app/api/public_key',
        type: 'GET'
    },
    login: {
        mockUrl: false,
        headerParam: {
            showLoading: true,
            showToast: true,
            excludeError: [401],
            skipAuth: true
        },
        url: '/fitness-app/api/auth/login',
        type: 'POST'
    },
    refreshToken: {
        headerParam: {
            showLoading: false,
            showToast: true,
            skipAuth: false
        },
        url: '/fitness-app/api/getToken',
        type: 'POST'
    },
    expireUserCache: {
        headerParam: {
            showLoading: false,
            showToast: false,
            skipAuth: false
        },
        url: '/fitness-app/api/security/log-out',
        type: 'POST'
    },
    registerUser: {
        url: '/fitness-app/api/user/registerUser',
        type: 'POST'
    },
    searchUsers: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/fitness-app/api/user/searchUsers',
        type: 'POST'
    },
    searchWorkouts: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/fitness-app/api/workout/searchWorkouts',
        type: 'POST'
    },
    saveOrUpdateUser: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/fitness-app/api/user/saveOrUpdateUser',
        type: 'POST'
    },
    getUserByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        }, url: '/fitness-app/api/user/getUserByID',
        type: 'GET'
    },
    changeUserPassword: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/fitness-app/api/user/changeUserPassword',
        type: 'POST'
    },
    resetUserPassword: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        }, url: '/fitness-app/api/user/resetUserPassword',
        type: 'GET'
    },
    saveOrUpdateWorkout: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/fitness-app/api/workout/saveOrUpdateWorkout',
        type: 'POST'
    },
};


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zz9i":
/*!******************************************************!*\
  !*** ./src/app/main/service/common/alert.service.ts ***!
  \******************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");


class AlertService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    showToaster(message, type, customConfigs) {
        let customClass = '';
        if (type.toUpperCase() === 'SUCCESS') {
            customClass = 'snack-bar-success';
        }
        if (type.toUpperCase() === 'ERROR') {
            customClass = 'snack-bar-error';
        }
        if (type.toUpperCase() === 'WARNING') {
            customClass = 'snack-bar-warning';
        }
        if (type.toUpperCase() === 'INFO') {
            customClass = 'snack-bar-info';
        }
        if (type.toUpperCase() === 'CUSTOM') {
            customClass = 'snack-bar-custom';
        }
        const config = Object.assign({}, {
            duration: 5000,
            panelClass: customClass,
            verticalPosition: 'top',
            horizontalPosition: 'right'
        }, customConfigs);
        return this.snackBar.open(message, 'close', config).afterDismissed();
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map