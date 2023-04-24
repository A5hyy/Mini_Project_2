(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-views-pages-home-home-module"],{

/***/ "14ZT":
/*!*************************************************!*\
  !*** ./src/app/views/pages/home/home.module.ts ***!
  \*************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-view/main-view.component */ "uD93");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "goXk");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/clipboard */ "Tr4x");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "NBEp");
/* harmony import */ var _users_view_users_view_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users/view-users/view-users.component */ "diAE");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/user.service */ "UaSX");
/* harmony import */ var _users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/add-user/add-user.component */ "BlT6");
/* harmony import */ var _users_reset_user_password_reset_user_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users/reset-user-password/reset-user-password.component */ "1STx");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/shared.module */ "PCNd");
/* harmony import */ var _users_copy_password_copy_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users/copy-password/copy-password.component */ "9q83");
/* harmony import */ var _settings_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings/change-password/change-password.component */ "Pvo2");
/* harmony import */ var _service_home_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/home.service */ "dcU+");
/* harmony import */ var _calories_calculator_view_calories_calculator_view_calories_calculator_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./calories-calculator/view-calories-calculator/view-calories-calculator.component */ "deiY");
/* harmony import */ var _my_workouts_view_my_workouts_view_my_workouts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./my-workouts/view-my-workouts/view-my-workouts.component */ "Rv/K");
/* harmony import */ var _exercise_view_exercise_view_exercise_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./exercise/view-exercise/view-exercise.component */ "odnE");
/* harmony import */ var _my_workouts_add_workout_add_workout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./my-workouts/add-workout/add-workout.component */ "bXgd");
/* harmony import */ var _exercise_exercise_exercise_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./exercise/exercise/exercise.component */ "XfpB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "8Y7J");



















class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [
        _service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _service_home_service__WEBPACK_IMPORTED_MODULE_12__["HomeService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_1__["MainViewComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _users_view_users_view_users_component__WEBPACK_IMPORTED_MODULE_5__["ViewUsersComponent"],
        _users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_7__["AddUserComponent"],
        _users_reset_user_password_reset_user_password_component__WEBPACK_IMPORTED_MODULE_8__["ResetUserPasswordComponent"],
        _users_copy_password_copy_password_component__WEBPACK_IMPORTED_MODULE_10__["CopyPasswordComponent"],
        _settings_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_11__["ChangePasswordComponent"],
        _calories_calculator_view_calories_calculator_view_calories_calculator_component__WEBPACK_IMPORTED_MODULE_13__["ViewCaloriesCalculatorComponent"],
        _my_workouts_view_my_workouts_view_my_workouts_component__WEBPACK_IMPORTED_MODULE_14__["ViewMyWorkoutsComponent"],
        _exercise_view_exercise_view_exercise_component__WEBPACK_IMPORTED_MODULE_15__["ViewExerciseComponent"],
        _my_workouts_add_workout_add_workout_component__WEBPACK_IMPORTED_MODULE_16__["AddWorkoutComponent"],
        _exercise_exercise_exercise_component__WEBPACK_IMPORTED_MODULE_17__["ExerciseComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"]] }); })();


/***/ }),

/***/ "1STx":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/pages/home/users/reset-user-password/reset-user-password.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ResetUserPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetUserPasswordComponent", function() { return ResetUserPasswordComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _model_user_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/user-dto */ "BKQV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../main/settings/commons.settings */ "zene");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _main_service_common_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../main/service/common/alert.service */ "zz9i");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/user.service */ "UaSX");








class ResetUserPasswordComponent {
    constructor(dialogRef, data, dialog, alertService, userService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
        this.alertService = alertService;
        this.userService = userService;
        this.userDto = new _model_user_dto__WEBPACK_IMPORTED_MODULE_1__["UserDTO"]();
        this.onResetUserPasswordSubs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
    }
    ngOnInit() {
        this.userDto = new _model_user_dto__WEBPACK_IMPORTED_MODULE_1__["UserDTO"](this.data.user);
        this.onResetUserPasswordSubs = this.userService.onResetUserPassword
            .subscribe((data) => {
            if (data) {
                this.alertService.showToaster('Password reset successfully', _main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_3__["SETTINGS"].TOASTER_MESSAGES.success);
                this.dialogRef.close(true);
                // const dialogRef = this.dialog.open(CopyPasswordComponent, {
                //     panelClass: 'custom-dialog-panel',
                //     width: '40%',
                //     data: {
                //       password: data,
                //     }
                //   }
                // );
            }
        });
    }
    onCancelClick($event) {
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }
        this.dialogRef.close(false);
    }
    onPasswordReset($event) {
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }
        this.userService.resetUserPassword(this.userDto.userID);
    }
    ngOnDestroy() {
        this.onResetUserPasswordSubs.unsubscribe();
    }
}
ResetUserPasswordComponent.ɵfac = function ResetUserPasswordComponent_Factory(t) { return new (t || ResetUserPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_main_service_common_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"])); };
ResetUserPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ResetUserPasswordComponent, selectors: [["app-reset-user-password"]], decls: 23, vars: 3, consts: [[1, "row"], [1, "col-md-11", "height-30px"], [1, "col-md-1", "t-a-e"], ["aria-label", "Close", "type", "button", 1, "btn-close", 3, "click"], [2, "font-size", "14px"], [2, "font-weight", "bold"], [1, "col-md-12", "t-a-e"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", "m-l-20", 3, "click"]], template: function ResetUserPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ResetUserPasswordComponent_Template_button_click_6_listener($event) { return ctx.onCancelClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Password will reset and send to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " email.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ResetUserPasswordComponent_Template_button_click_18_listener($event) { return ctx.onPasswordReset($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Confirm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ResetUserPasswordComponent_Template_button_click_21_listener($event) { return ctx.onCancelClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" Are you sure want to reset password of ", ctx.userDto.firstName, " ", ctx.userDto.lastName, " ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.userDto.email);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC11c2VyLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "9q83":
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/home/users/copy-password/copy-password.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CopyPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyPasswordComponent", function() { return CopyPasswordComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/clipboard */ "Tr4x");





class CopyPasswordComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.value = this.data.password;
    }
    onCancelClick($event) {
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }
        this.dialogRef.close(false);
    }
}
CopyPasswordComponent.ɵfac = function CopyPasswordComponent_Factory(t) { return new (t || CopyPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
CopyPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CopyPasswordComponent, selectors: [["app-copy-password"]], decls: 13, vars: 2, consts: [[1, "row"], [1, "col-md-11", "height-30px"], [1, "col-md-1", "t-a-e"], ["aria-label", "Close", "type", "button", 1, "btn-close", 3, "click"], ["cols", "30", "id", "clipboard-example-textarea", "rows", "1", "disabled", "true", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", 3, "cdkCopyToClipboard"]], template: function CopyPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Copy Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CopyPasswordComponent_Template_button_click_6_listener($event) { return ctx.onCancelClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CopyPasswordComponent_Template_textarea_ngModelChange_9_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Copy to clipboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkCopyToClipboard", ctx.value);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["CdkCopyToClipboard"]], styles: ["textarea[_ngcontent-%COMP%] {\n  display: block;\n  margin: 4px 0 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxjb3B5LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBQ0YiLCJmaWxlIjoiY29weS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRleHRhcmVhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDRweCAwIDhweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "FQ9r":
/*!*************************************************************!*\
  !*** ./src/app/views/pages/home/service/workout.service.ts ***!
  \*************************************************************/
/*! exports provided: WorkoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutService", function() { return WorkoutService; });
/* harmony import */ var _main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../main/settings/commons.settings */ "zene");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _main_service_data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../main/service/data/data.service */ "UMCQ");




class WorkoutService {
    constructor(dataService) {
        this.dataService = dataService;
        this.onSearchedWorkouts = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onSaveOrUpdateWorkout = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    resolve(route, state) {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.searchWorkouts({}),
            ]).then(() => {
                resolve();
            }, reject);
        });
    }
    searchWorkouts(searchRQ) {
        this.dataService.post(_main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_0__["SETTINGS"].ENDPOINTS.searchWorkouts, searchRQ)
            .subscribe(response => {
            this.searchedWorkouts = response;
            this.onSearchedWorkouts.next(this.searchedWorkouts);
        });
    }
    saveOrUpdateWorkout(dataRQ) {
        const response = this.dataService.post(_main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_0__["SETTINGS"].ENDPOINTS.saveOrUpdateWorkout, dataRQ);
        response.subscribe((data) => {
            this.onSaveOrUpdateWorkout.next(data);
        });
    }
}
WorkoutService.ɵfac = function WorkoutService_Factory(t) { return new (t || WorkoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_main_service_data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
WorkoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: WorkoutService, factory: WorkoutService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "NBEp":
/*!*********************************************************!*\
  !*** ./src/app/views/pages/home/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");


class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    onClickCaloriesCalculator() {
        this.router.navigate(['/home/calories-calculator']);
    }
    onClickMyWorkouts() {
        this.router.navigate(['/home/my-workouts']);
    }
    onClickExercises() {
        this.router.navigate(['/home/exercises']);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 24, vars: 0, consts: [[1, "row"], ["src", "assets/images/Bodybuilder-Working-Out-His-Upper-Body-With-Cable-Crossover-Exercise.webp"], [1, "row", 2, "margin-top", "20px"], [1, "col-md-3"], [1, "col-md-6", 2, "text-align", "center"], [1, "row", 2, "margin-top", "10px"], [1, "col-md-4", "block-3"], [2, "margin-top", "7px", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "We welcome all levels of fitness and athletic ability");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " ShapeShift is the perfect workout app to help you achieve your fitness goals, including losing weight, building muscle, or getting in shape. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_h3_click_16_listener() { return ctx.onClickCaloriesCalculator(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Calories Calculator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_h3_click_19_listener() { return ctx.onClickMyWorkouts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " My Workouts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_h3_click_22_listener() { return ctx.onClickExercises(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Exercises ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".block-3[_ngcontent-%COMP%] {\n  text-align: center;\n  border-style: solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9jay0zIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "QNDU":
/*!*******************************************************!*\
  !*** ./src/app/views/pages/home/model/workout-dto.ts ***!
  \*******************************************************/
/*! exports provided: WorkoutDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutDTO", function() { return WorkoutDTO; });
class WorkoutDTO {
    constructor(workoutDTO) {
        workoutDTO = workoutDTO || {};
        this.workoutID = workoutDTO.workoutID || '';
        this.description = workoutDTO.description || '';
        this.steps = workoutDTO.steps || '';
        this.count = workoutDTO.count || '';
    }
}


/***/ }),

/***/ "Rv/K":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/pages/home/my-workouts/view-my-workouts/view-my-workouts.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ViewMyWorkoutsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMyWorkoutsComponent", function() { return ViewMyWorkoutsComponent; });
/* harmony import */ var _add_workout_add_workout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-workout/add-workout.component */ "bXgd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _main_service_authentication_privilege_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../main/service/authentication/privilege.service */ "o8re");
/* harmony import */ var _service_workout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/workout.service */ "FQ9r");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");











function ViewMyWorkoutsComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewMyWorkoutsComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.onAddNewWorkout(null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Add Workout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ViewMyWorkoutsComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Workout ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ViewMyWorkoutsComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r15.workoutID, " ");
} }
function ViewMyWorkoutsComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ViewMyWorkoutsComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r16.description, " ");
} }
function ViewMyWorkoutsComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Steps");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ViewMyWorkoutsComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r17.steps, " ");
} }
function ViewMyWorkoutsComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ViewMyWorkoutsComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r18.count, " ");
} }
function ViewMyWorkoutsComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ViewMyWorkoutsComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewMyWorkoutsComponent_td_25_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const row_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.view($event, row_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewMyWorkoutsComponent_td_25_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const row_r19 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r22.edit($event, row_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r10.isAdmin());
} }
function ViewMyWorkoutsComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 23);
} }
function ViewMyWorkoutsComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 24);
} }
class ViewMyWorkoutsComponent {
    constructor(privilegeService, workoutService, dialog) {
        this.privilegeService = privilegeService;
        this.workoutService = workoutService;
        this.dialog = dialog;
        this.title = 'Workouts';
        this.onSearchedWorkoutsSubs = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.dataSource = [];
        this.displayedColumns = ['workoutID', 'description', 'steps', 'count', 'actions'];
    }
    ngOnInit() {
        if (this.isUser()) {
            this.title = 'My Workouts';
        }
        this.onSearchedWorkoutsSubs = this.workoutService.onSearchedWorkouts
            .subscribe((data) => {
            if (data) {
                this.dataSource = [];
                data.forEach((val) => {
                    // @ts-ignore
                    this.dataSource.push(val);
                });
            }
        });
    }
    isAdmin() {
        return this.privilegeService.isAdmin();
    }
    isUser() {
        return this.privilegeService.isUser();
    }
    onAddNewWorkout(param) {
        const dialogRef = this.dialog.open(_add_workout_add_workout_component__WEBPACK_IMPORTED_MODULE_0__["AddWorkoutComponent"], {
            panelClass: 'custom-dialog-panel',
            width: '70%',
            data: {
                type: 'ADD',
                workout: param
            }
        });
        const dialogSubs = dialogRef.afterClosed()
            .subscribe((response) => {
            if (response) {
                this.workoutService.searchWorkouts({});
            }
            dialogSubs.unsubscribe();
        });
    }
    ngOnDestroy() {
        this.onSearchedWorkoutsSubs.unsubscribe();
    }
    view($event, row) {
        const dialogRef = this.dialog.open(_add_workout_add_workout_component__WEBPACK_IMPORTED_MODULE_0__["AddWorkoutComponent"], {
            panelClass: 'custom-dialog-panel',
            width: '70%',
            data: {
                type: 'VIEW',
                workout: row
            }
        });
        const dialogSubs = dialogRef.afterClosed()
            .subscribe((response) => {
            if (response) {
                this.workoutService.searchWorkouts({});
            }
            dialogSubs.unsubscribe();
        });
    }
    edit($event, row) {
        const dialogRef = this.dialog.open(_add_workout_add_workout_component__WEBPACK_IMPORTED_MODULE_0__["AddWorkoutComponent"], {
            panelClass: 'custom-dialog-panel',
            width: '70%',
            data: {
                type: 'EDIT',
                workout: row
            }
        });
        const dialogSubs = dialogRef.afterClosed()
            .subscribe((response) => {
            if (response) {
                this.workoutService.searchWorkouts({});
            }
            dialogSubs.unsubscribe();
        });
    }
}
ViewMyWorkoutsComponent.ɵfac = function ViewMyWorkoutsComponent_Factory(t) { return new (t || ViewMyWorkoutsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_main_service_authentication_privilege_service__WEBPACK_IMPORTED_MODULE_3__["PrivilegeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_workout_service__WEBPACK_IMPORTED_MODULE_4__["WorkoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
ViewMyWorkoutsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ViewMyWorkoutsComponent, selectors: [["app-view-my-workouts"]], decls: 28, vars: 5, consts: [[1, "container"], [1, "p-t-100"], [1, "row"], [1, "col-md-8"], [1, "col-md-4", "t-a-e"], ["color", "primary", "mat-raised-button", "", "matTooltip", "Add new workout", 3, "click", 4, "ngIf"], [1, "card", "m-t-20"], [1, "card-body"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "workoutID"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "description"], ["matColumnDef", "steps"], ["matColumnDef", "count"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["color", "primary", "mat-raised-button", "", "matTooltip", "Add new workout", 3, "click"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", "matTooltip", "View", "type", "button", 3, "click"], ["mat-icon-button", "", "matTooltip", "Edit", "type", "button", 3, "disabled", "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ViewMyWorkoutsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ViewMyWorkoutsComponent_button_7_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](11, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ViewMyWorkoutsComponent_th_12_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ViewMyWorkoutsComponent_td_13_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](14, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ViewMyWorkoutsComponent_th_15_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ViewMyWorkoutsComponent_td_16_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](17, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ViewMyWorkoutsComponent_th_18_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ViewMyWorkoutsComponent_td_19_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](20, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ViewMyWorkoutsComponent_th_21_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ViewMyWorkoutsComponent_td_22_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](23, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ViewMyWorkoutsComponent_th_24_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, ViewMyWorkoutsComponent_td_25_Template, 7, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ViewMyWorkoutsComponent_tr_26_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, ViewMyWorkoutsComponent_tr_27_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRowDef"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFx2aWV3LW15LXdvcmtvdXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6InZpZXctbXktd29ya291dHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Tr4x":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/clipboard.js ***!
  \*********************************************************/
/*! exports provided: CKD_COPY_TO_CLIPBOARD_CONFIG, CdkCopyToClipboard, Clipboard, ClipboardModule, PendingCopy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CKD_COPY_TO_CLIPBOARD_CONFIG", function() { return CKD_COPY_TO_CLIPBOARD_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCopyToClipboard", function() { return CdkCopyToClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return Clipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardModule", function() { return ClipboardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingCopy", function() { return PendingCopy; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");



/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A pending copy-to-clipboard operation.
 *
 * The implementation of copying text to the clipboard modifies the DOM and
 * forces a relayout. This relayout can take too long if the string is large,
 * causing the execCommand('copy') to happen too long after the user clicked.
 * This results in the browser refusing to copy. This object lets the
 * relayout happen in a separate tick from copying by providing a copy function
 * that can be called later.
 *
 * Destroy must be called when no longer in use, regardless of whether `copy` is
 * called.
 */

class PendingCopy {
    constructor(text, _document) {
        this._document = _document;
        const textarea = this._textarea = this._document.createElement('textarea');
        const styles = textarea.style;
        // Hide the element for display and accessibility. Set a fixed position so the page layout
        // isn't affected. We use `fixed` with `top: 0`, because focus is moved into the textarea
        // for a split second and if it's off-screen, some browsers will attempt to scroll it into view.
        styles.position = 'fixed';
        styles.top = styles.opacity = '0';
        styles.left = '-999em';
        textarea.setAttribute('aria-hidden', 'true');
        textarea.value = text;
        this._document.body.appendChild(textarea);
    }
    /** Finishes copying the text. */
    copy() {
        const textarea = this._textarea;
        let successful = false;
        try { // Older browsers could throw if copy is not supported.
            if (textarea) {
                const currentFocus = this._document.activeElement;
                textarea.select();
                textarea.setSelectionRange(0, textarea.value.length);
                successful = this._document.execCommand('copy');
                if (currentFocus) {
                    currentFocus.focus();
                }
            }
        }
        catch (_a) {
            // Discard error.
            // Initial setting of {@code successful} will represent failure here.
        }
        return successful;
    }
    /** Cleans up DOM changes used to perform the copy operation. */
    destroy() {
        const textarea = this._textarea;
        if (textarea) {
            if (textarea.parentNode) {
                textarea.parentNode.removeChild(textarea);
            }
            this._textarea = undefined;
        }
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A service for copying text to the clipboard.
 */
class Clipboard {
    constructor(document) {
        this._document = document;
    }
    /**
     * Copies the provided text into the user's clipboard.
     *
     * @param text The string to copy.
     * @returns Whether the operation was successful.
     */
    copy(text) {
        const pendingCopy = this.beginCopy(text);
        const successful = pendingCopy.copy();
        pendingCopy.destroy();
        return successful;
    }
    /**
     * Prepares a string to be copied later. This is useful for large strings
     * which take too long to successfully render and be copied in the same tick.
     *
     * The caller must call `destroy` on the returned `PendingCopy`.
     *
     * @param text The string to copy.
     * @returns the pending copy operation.
     */
    beginCopy(text) {
        return new PendingCopy(text, this._document);
    }
}
Clipboard.ɵfac = function Clipboard_Factory(t) { return new (t || Clipboard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
Clipboard.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function Clipboard_Factory() { return new Clipboard(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); }, token: Clipboard, providedIn: "root" });
Clipboard.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Clipboard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token that can be used to provide the default options to `CdkCopyToClipboard`. */
const CKD_COPY_TO_CLIPBOARD_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('CKD_COPY_TO_CLIPBOARD_CONFIG');
/**
 * Provides behavior for a button that when clicked copies content into user's
 * clipboard.
 */
class CdkCopyToClipboard {
    constructor(_clipboard, _ngZone, config) {
        this._clipboard = _clipboard;
        this._ngZone = _ngZone;
        /** Content to be copied. */
        this.text = '';
        /**
         * How many times to attempt to copy the text. This may be necessary for longer text, because
         * the browser needs time to fill an intermediate textarea element and copy the content.
         */
        this.attempts = 1;
        /**
         * Emits when some text is copied to the clipboard. The
         * emitted value indicates whether copying was successful.
         */
        this.copied = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Copies that are currently being attempted. */
        this._pending = new Set();
        if (config && config.attempts != null) {
            this.attempts = config.attempts;
        }
    }
    /** Copies the current text to the clipboard. */
    copy(attempts = this.attempts) {
        if (attempts > 1) {
            let remainingAttempts = attempts;
            const pending = this._clipboard.beginCopy(this.text);
            this._pending.add(pending);
            const attempt = () => {
                const successful = pending.copy();
                if (!successful && --remainingAttempts && !this._destroyed) {
                    // We use 1 for the timeout since it's more predictable when flushing in unit tests.
                    this._currentTimeout = this._ngZone.runOutsideAngular(() => setTimeout(attempt, 1));
                }
                else {
                    this._currentTimeout = null;
                    this._pending.delete(pending);
                    pending.destroy();
                    this.copied.emit(successful);
                }
            };
            attempt();
        }
        else {
            this.copied.emit(this._clipboard.copy(this.text));
        }
    }
    ngOnDestroy() {
        if (this._currentTimeout) {
            clearTimeout(this._currentTimeout);
        }
        this._pending.forEach(copy => copy.destroy());
        this._pending.clear();
        this._destroyed = true;
    }
}
CdkCopyToClipboard.ɵfac = function CdkCopyToClipboard_Factory(t) { return new (t || CdkCopyToClipboard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Clipboard), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CKD_COPY_TO_CLIPBOARD_CONFIG, 8)); };
CdkCopyToClipboard.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CdkCopyToClipboard, selectors: [["", "cdkCopyToClipboard", ""]], hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CdkCopyToClipboard_click_HostBindingHandler() { return ctx.copy(); });
    } }, inputs: { text: ["cdkCopyToClipboard", "text"], attempts: ["cdkCopyToClipboardAttempts", "attempts"] }, outputs: { copied: "cdkCopyToClipboardCopied" } });
CdkCopyToClipboard.ctorParameters = () => [
    { type: Clipboard },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [CKD_COPY_TO_CLIPBOARD_CONFIG,] }] }
];
CdkCopyToClipboard.propDecorators = {
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkCopyToClipboard',] }],
    attempts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkCopyToClipboardAttempts',] }],
    copied: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['cdkCopyToClipboardCopied',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkCopyToClipboard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[cdkCopyToClipboard]',
                host: {
                    '(click)': 'copy()'
                }
            }]
    }], function () { return [{ type: Clipboard }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [CKD_COPY_TO_CLIPBOARD_CONFIG]
            }] }]; }, { text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkCopyToClipboard']
        }], attempts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkCopyToClipboardAttempts']
        }], copied: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['cdkCopyToClipboardCopied']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class ClipboardModule {
}
ClipboardModule.ɵfac = function ClipboardModule_Factory(t) { return new (t || ClipboardModule)(); };
ClipboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ClipboardModule });
ClipboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClipboardModule, { declarations: [CdkCopyToClipboard], exports: [CdkCopyToClipboard] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClipboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [CdkCopyToClipboard],
                exports: [CdkCopyToClipboard]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=clipboard.js.map

/***/ }),

/***/ "XfpB":
/*!**************************************************************************!*\
  !*** ./src/app/views/pages/home/exercise/exercise/exercise.component.ts ***!
  \**************************************************************************/
/*! exports provided: ExerciseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseComponent", function() { return ExerciseComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");



class ExerciseComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.type = this.data.type;
        switch (this.type) {
            case 'ABDUCTORS':
                this.title = 'Abductors';
                this.content = 'Abductors exercises. Target your abductors with these movements';
                break;
            case 'ABS':
                this.title = 'Abs';
                this.content = 'Ab exercises. Build impressive "6-pack abs" with these movements';
                break;
            case 'ADDUCTORS':
                this.title = 'Adductors';
                this.content = 'Adductors exercises. Target your adductors with these movements';
                break;
            case 'BICEPS':
                this.title = 'Biceps';
                this.content = 'Biceps exercises. Build sleeve-splitting guns with these exercises';
                break;
            case 'CALVES':
                this.title = 'Calves';
                this.content = 'Calf exercises. Essential exercises for developing calf muscle size';
                break;
            case 'CHEST':
                this.title = 'Chest';
                this.content = 'Chest exercises. Learn how to build a big, strong and muscular chest.';
                break;
            case 'FOREARMS':
                this.title = 'Forearms';
                this.content = 'Forearm exercises. Build "Popeye Forearms" with these exercises.';
                break;
            case 'GLUTES':
                this.title = 'Glutes';
                this.content = 'Glute exercises. Target your glutes with these movements.';
                break;
            case 'HAMSTRINGS':
                this.title = 'Hamstrings';
                this.content = 'Hamstring exercises. Build strength and flexibility in your hamstrings';
                break;
        }
    }
    onCancelClick($event) {
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }
        this.dialogRef.close(false);
    }
}
ExerciseComponent.ɵfac = function ExerciseComponent_Factory(t) { return new (t || ExerciseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
ExerciseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExerciseComponent, selectors: [["app-exercise"]], decls: 11, vars: 2, consts: [[1, "row"], [1, "col-md-11", "height-30px"], [1, "col-md-1", "t-a-e"], ["aria-label", "Close", "type", "button", 1, "btn-close", 3, "click"]], template: function ExerciseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExerciseComponent_Template_button_click_6_listener($event) { return ctx.onCancelClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.title, " Exercises");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.content, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGVyY2lzZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "bXgd":
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/home/my-workouts/add-workout/add-workout.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AddWorkoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWorkoutComponent", function() { return AddWorkoutComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _model_workout_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/workout-dto */ "QNDU");
/* harmony import */ var _main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../main/settings/commons.settings */ "zene");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _main_service_common_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../main/service/common/alert.service */ "zz9i");
/* harmony import */ var _service_workout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/workout.service */ "FQ9r");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");













function AddWorkoutComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddWorkoutComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddWorkoutComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddWorkoutComponent_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddWorkoutComponent_ng_container_33_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.onSave($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r3.isFormValid());
} }
class AddWorkoutComponent {
    constructor(dialogRef, alertService, workoutService, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.alertService = alertService;
        this.workoutService = workoutService;
        this.data = data;
        this.formBuilder = formBuilder;
        this.workoutDto = new _model_workout_dto__WEBPACK_IMPORTED_MODULE_2__["WorkoutDTO"]();
        this.onSaveOrUpdateWorkoutSubs = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
    }
    ngOnInit() {
        this.workoutDto = new _model_workout_dto__WEBPACK_IMPORTED_MODULE_2__["WorkoutDTO"](this.data.workout);
        this.type = this.data.type;
        if (this.type === 'ADD') {
            this.title = 'Add Workout';
        }
        else if (this.type === 'EDIT') {
            this.title = 'Edit Workout';
        }
        else {
            this.title = 'View Workout';
        }
        this.onSaveOrUpdateWorkoutSubs = this.workoutService.onSaveOrUpdateWorkout
            .subscribe((data) => {
            if (data) {
                if (this.type === 'ADD') {
                    this.alertService.showToaster('Saved successfully', _main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_3__["SETTINGS"].TOASTER_MESSAGES.success);
                }
                else {
                    this.alertService.showToaster('Updated successfully', _main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_3__["SETTINGS"].TOASTER_MESSAGES.success);
                }
                this.dialogRef.close(true);
            }
        });
        this.initWorkoutForm();
    }
    initWorkoutForm() {
        this.workoutAddEditForm = this.formBuilder.group({
            description: [this.workoutDto.description, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])],
            steps: [this.workoutDto.steps, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])],
            count: [this.workoutDto.count, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])]
        });
    }
    onCancelClick($event) {
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }
        this.dialogRef.close(false);
    }
    isControlHasError(controlName, validationType) {
        const control = this.workoutAddEditForm.controls[controlName];
        if (!control) {
            return false;
        }
        const result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    }
    onSave($event) {
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }
        const submitData = Object.assign({}, this.workoutAddEditForm.getRawValue());
        submitData.workoutID = this.workoutDto.workoutID;
        this.workoutService.saveOrUpdateWorkout(submitData);
    }
    isFormValid() {
        return this.workoutAddEditForm.valid;
    }
    ngOnDestroy() {
        this.onSaveOrUpdateWorkoutSubs.unsubscribe();
    }
}
AddWorkoutComponent.ɵfac = function AddWorkoutComponent_Factory(t) { return new (t || AddWorkoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_main_service_common_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_workout_service__WEBPACK_IMPORTED_MODULE_7__["WorkoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
AddWorkoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AddWorkoutComponent, selectors: [["app-add-workout"]], decls: 37, vars: 6, consts: [[1, "row"], [1, "col-md-11", "height-30px"], [1, "col-md-1", "t-a-e"], ["aria-label", "Close", "type", "button", 1, "btn-close", 3, "click"], ["autocomplete", "off", "id", "login-form", 1, "kt-form", 2, "padding-top", "25px", 3, "formGroup"], [1, "col-md-12"], [2, "width", "100%"], ["matInput", "", "name", "description", "formControlName", "description", "placeholder", "Description", "maxlength", "1024", "matTextareaAutosize", "", "matAutosizeMinRows", "1", "matAutosizeMaxRows", "6", "required", ""], [4, "ngIf"], ["matInput", "", "name", "steps", "formControlName", "steps", "placeholder", "Steps", "maxlength", "1024", "matTextareaAutosize", "", "matAutosizeMinRows", "1", "matAutosizeMaxRows", "6", "required", ""], ["autocomplete", "off", "formControlName", "count", "matInput", "", "placeholder", "Count", "min", "0", "type", "number", 1, "user-name"], [1, "col-md-12", "t-a-e"], ["type", "button", 1, "btn", "btn-secondary", "m-l-20", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"]], template: function AddWorkoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddWorkoutComponent_Template_button_click_6_listener($event) { return ctx.onCancelClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, AddWorkoutComponent_mat_error_15_Template, 3, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, AddWorkoutComponent_mat_error_22_Template, 3, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, AddWorkoutComponent_mat_error_29_Template, 3, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, AddWorkoutComponent_ng_container_33_Template, 3, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddWorkoutComponent_Template_button_click_35_listener($event) { return ctx.onCancelClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.workoutAddEditForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isControlHasError("description", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isControlHasError("steps", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isControlHasError("count", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.type != "VIEW");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatTextareaAutosize"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtd29ya291dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "dcU+":
/*!**********************************************************!*\
  !*** ./src/app/views/pages/home/service/home.service.ts ***!
  \**********************************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _main_service_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../main/service/data/data.service */ "UMCQ");


class HomeService {
    constructor(dataService) {
        this.dataService = dataService;
    }
    resolve(route, state) {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getAllCountryCodes(),
            ]).then(() => {
                resolve();
            }, reject);
        });
    }
    getAllCountryCodes() {
        // const data = Object.assign({}, SETTINGS.ENDPOINTS.getAllCountryCodes);
        //
        // this.dataService.get(data)
        //   .subscribe((response: any) => {
        //     this.onGetAllCountryCodes.next(response);
        //   });
    }
}
HomeService.ɵfac = function HomeService_Factory(t) { return new (t || HomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_main_service_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomeService, factory: HomeService.ɵfac });


/***/ }),

/***/ "deiY":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/views/pages/home/calories-calculator/view-calories-calculator/view-calories-calculator.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ViewCaloriesCalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCaloriesCalculatorComponent", function() { return ViewCaloriesCalculatorComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../main/settings/commons.settings */ "zene");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _main_service_common_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../main/service/common/alert.service */ "zz9i");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");











function ViewCaloriesCalculatorComponent_ng_container_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "2,679 Total Daily Energy Expenditure (TDEE)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "1,786 Basal Metabolic Rate (BMR)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "No activity : 2,053 cal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "A little activity : 2,053 cal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Some activity : 2,053 cal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "A lot of activity : 2,053 cal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "A TON of activity : 2,053 cal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
class ViewCaloriesCalculatorComponent {
    constructor(formBuilder, alertService) {
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.isCalculated = false;
    }
    ngOnInit() {
        this.caloriesCalculatorForm = this.formBuilder.group({
            unit: ['IMPERIAL', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
                ])],
            gender: ['MALE', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
                ])],
            weight: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
                ])],
            height: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
                ])],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
                ])],
            activity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
                ])],
            bmr: ['mifflin-st-jeor', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
                ])]
        });
    }
    onCalculate() {
        if (!this.isFormValid()) {
            this.alertService.showToaster('Data is not valid', _main_settings_commons_settings__WEBPACK_IMPORTED_MODULE_1__["SETTINGS"].TOASTER_MESSAGES.warning);
        }
        this.isCalculated = true;
    }
    isFormValid() {
        return this.caloriesCalculatorForm.valid;
    }
}
ViewCaloriesCalculatorComponent.ɵfac = function ViewCaloriesCalculatorComponent_Factory(t) { return new (t || ViewCaloriesCalculatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_main_service_common_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
ViewCaloriesCalculatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ViewCaloriesCalculatorComponent, selectors: [["app-view-calories-calculator"]], decls: 87, vars: 15, consts: [[1, "container"], ["src", "assets\\images\\muscular-male-athlete-doing-push-ups-exercises-royalty-free-image-1658157868.jpg", 2, "width", "100%"], [1, "p-t-50"], [1, "row"], [1, "col-md-8"], [1, "card", "m-t-20"], [1, "card-body"], [1, "t-a-c", "m-t-20"], ["autocomplete", "off", "id", "login-form", 1, "kt-form", "m-t-20", 3, "formGroup"], [1, "col-md-4"], [2, "width", "100%"], ["formControlName", "unit", "placeholder", "Unit"], [3, "value"], ["formControlName", "gender", "placeholder", "Gender"], ["autocomplete", "off", "formControlName", "weight", "matInput", "", "min", "0", "placeholder", "Weight", "type", "number", 1, "user-name"], ["autocomplete", "off", "formControlName", "height", "matInput", "", "min", "0", "placeholder", "Height", "type", "number", 1, "user-name"], ["autocomplete", "off", "formControlName", "age", "matInput", "", "min", "0", "placeholder", "Age", "type", "number", 1, "user-name"], [1, "col-md-12"], ["formControlName", "activity", "placeholder", "Activity"], ["formControlName", "bmr", "placeholder", "BMR formula"], [1, "col-md-12", "t-a-e"], ["color", "primary", "mat-raised-button", "", 3, "click"], [1, "row", "m-t-20"], [1, "col-md-12", "t-a-c"], [4, "ngIf"], [1, "col-md-12", "t-a-c", 2, "display", "flex"], [1, "col-md-6", "t-a-c", 2, "margin-top", "50px"], [1, "d-flex", 2, "height", "200px"], [1, "vr"]], template: function ViewCaloriesCalculatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Calories Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " To lose weight, you need to eat fewer calories than you expend over time. Thus, learning how many calories you ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " \u201Cburn\u201D every day is one of the most important steps you can take to lose weight. Use this calculator to estimate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " how many calories you burn and how many you should eat every day to lose weight. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Imperial");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Metric");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "mat-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "None (little to no physical activity)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "A little (1 to 3 hours of exercise or sports per week)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Some (4 to 6 hours of exercise or sports per week)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "A lot (7 to 9 hours of exercise or sports per week)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "A TON (10+ hours of exercise or sports per week)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Custom activity multiplier");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "mat-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Katch-McArdle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Mifflin-St Jeor (Recommended)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Revised Harris-Benedict");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewCaloriesCalculatorComponent_Template_button_click_79_listener() { return ctx.onCalculate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, " Calculate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Your Stat");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](86, ViewCaloriesCalculatorComponent_ng_container_86_Template, 20, 0, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.caloriesCalculatorForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "IMPERIAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "METRIC");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "MALE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "FEMALE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "1.15");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "1.3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "1.5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "1.7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "1.9");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "CUSTOM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "katch-mcardle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "mifflin-st-jeor");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "harris-benedict");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isCalculated);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWNhbG9yaWVzLWNhbGN1bGF0b3IuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "diAE":
/*!***************************************************************************!*\
  !*** ./src/app/views/pages/home/users/view-users/view-users.component.ts ***!
  \***************************************************************************/
/*! exports provided: ViewUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUsersComponent", function() { return ViewUsersComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _main_settings_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../main/settings/constants */ "Vixm");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-user/add-user.component */ "BlT6");
/* harmony import */ var _reset_user_password_reset_user_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reset-user-password/reset-user-password.component */ "1STx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _main_service_authentication_privilege_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../main/service/authentication/privilege.service */ "o8re");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/user.service */ "UaSX");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");


















function ViewUsersComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewUsersComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.onAddUser(null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Add User ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ViewUsersComponent_th_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ViewUsersComponent_td_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r19.userName, " ");
} }
function ViewUsersComponent_th_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ViewUsersComponent_td_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r20.firstName, " ");
} }
function ViewUsersComponent_th_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ViewUsersComponent_td_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r21.lastName, " ");
} }
function ViewUsersComponent_th_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ViewUsersComponent_td_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r22.email, " ");
} }
function ViewUsersComponent_th_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "User Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ViewUsersComponent_td_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r10.userType[element_r23.userType], " ");
} }
function ViewUsersComponent_th_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ViewUsersComponent_td_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r12.status[element_r24.status], " ");
} }
function ViewUsersComponent_th_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ViewUsersComponent_td_79_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewUsersComponent_td_79_ng_container_7_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const row_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r27.resetPassword($event, row_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "report");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r26.isAdmin());
} }
function ViewUsersComponent_td_79_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewUsersComponent_td_79_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const row_r25 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r30.view($event, row_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewUsersComponent_td_79_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const row_r25 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r32.edit($event, row_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ViewUsersComponent_td_79_ng_container_7_Template, 4, 1, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r14.isAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r14.isAdmin());
} }
function ViewUsersComponent_tr_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 40);
} }
function ViewUsersComponent_tr_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 41);
} }
class ViewUsersComponent {
    constructor(privilegeService, formBuilder, userService, dialog) {
        this.privilegeService = privilegeService;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.dialog = dialog;
        this.dataSource = [];
        this.displayedColumns = ['userName', 'firstName', 'lastName', 'email', 'userType', 'status', 'actions'];
        this.userType = _main_settings_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].userType;
        this.status = _main_settings_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].status;
        this.onSearchedUsersSubs = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
    }
    ngOnInit() {
        this.searchForm = this.formBuilder.group({
            userName: [''],
            firstName: [''],
            lastName: [''],
            email: [''],
            userType: ['ALL'],
            status: ['ACT']
        });
        this.onSearchedUsersSubs = this.userService.onSearchedUsers
            .subscribe((data) => {
            if (data) {
                this.dataSource = [];
                data.forEach((val) => {
                    // @ts-ignore
                    this.dataSource.push(val);
                });
            }
        });
    }
    isAdmin() {
        return this.privilegeService.isAdmin();
    }
    onAddUser(user) {
        const dialogRef = this.dialog.open(_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_2__["AddUserComponent"], {
            panelClass: 'custom-dialog-panel',
            width: '70%',
            data: {
                title: `Add User`,
                type: 'ADD',
                user
            }
        });
        const dialogSubs = dialogRef.afterClosed()
            .subscribe((response) => {
            if (response) {
                this.onUserSearch();
            }
            dialogSubs.unsubscribe();
        });
    }
    view($event, row) {
        const dialogRef = this.dialog.open(_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_2__["AddUserComponent"], {
            panelClass: 'custom-dialog-panel',
            width: '70%',
            data: {
                title: `View User`,
                type: 'VIEW',
                user: row
            }
        });
        const dialogSubs = dialogRef.afterClosed()
            .subscribe((response) => {
            if (response) {
                this.onUserSearch();
            }
            dialogSubs.unsubscribe();
        });
    }
    edit($event, row) {
        const dialogRef = this.dialog.open(_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_2__["AddUserComponent"], {
            panelClass: 'custom-dialog-panel',
            width: '70%',
            data: {
                title: `Edit User`,
                type: 'EDIT',
                user: row
            }
        });
        const dialogSubs = dialogRef.afterClosed()
            .subscribe((response) => {
            if (response) {
                this.onUserSearch();
            }
            dialogSubs.unsubscribe();
        });
    }
    ngOnDestroy() {
        this.onSearchedUsersSubs.unsubscribe();
    }
    onUserSearch() {
        const submitData = Object.assign({}, this.searchForm.getRawValue());
        if (submitData.userType === 'ALL') {
            submitData.userType = null;
        }
        if (submitData.status === 'ALL') {
            submitData.status = null;
        }
        this.userService.searchUsers(submitData);
    }
    onUserSearchClear() {
        this.searchForm.reset({
            userName: '',
            firstName: '',
            lastName: '',
            email: '',
            userType: 'ALL',
            status: 'ACT'
        }, { onlySelf: false, emitEvent: true });
        this.onUserSearch();
    }
    resetPassword($event, row) {
        const dialogRef = this.dialog.open(_reset_user_password_reset_user_password_component__WEBPACK_IMPORTED_MODULE_3__["ResetUserPasswordComponent"], {
            panelClass: 'custom-dialog-panel',
            width: '40%',
            data: {
                user: row
            }
        });
        const dialogSubs = dialogRef.afterClosed()
            .subscribe((response) => {
            if (response) {
                this.onUserSearch();
            }
            dialogSubs.unsubscribe();
        });
    }
}
ViewUsersComponent.ɵfac = function ViewUsersComponent_Factory(t) { return new (t || ViewUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_main_service_authentication_privilege_service__WEBPACK_IMPORTED_MODULE_5__["PrivilegeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"])); };
ViewUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ViewUsersComponent, selectors: [["app-view-users"]], decls: 82, vars: 11, consts: [[1, "container"], [1, "p-t-100"], [1, "row"], [1, "col-md-8"], [1, "col-md-4", "t-a-e"], ["color", "primary", "mat-raised-button", "", "matTooltip", "Add new user", 3, "click", 4, "ngIf"], [1, "card", "m-t-20"], [1, "card-body"], ["autocomplete", "off", "id", "login-form", 1, "kt-form", 3, "formGroup"], [1, "col-md-2"], [2, "width", "100%"], ["autocomplete", "off", "formControlName", "userName", "matInput", "", "placeholder", "User Name", "type", "text", 1, "user-name"], ["autocomplete", "off", "formControlName", "firstName", "matInput", "", "placeholder", "First Name", "type", "text", 1, "first-name"], ["autocomplete", "off", "formControlName", "lastName", "matInput", "", "placeholder", "Last Name", "type", "text", 1, "user-name"], ["autocomplete", "off", "formControlName", "email", "matInput", "", "placeholder", "Email", "type", "text", 1, "user-name"], ["formControlName", "userType", "placeholder", "User Type"], [3, "value"], ["formControlName", "status", "placeholder", "Status"], [1, "col-md-12", "t-a-e"], ["mat-raised-button", "", 2, "margin-right", "5px", "background", "#1abc9c", 3, "click"], ["mat-raised-button", "", 2, "background", "#bdc3c7", 3, "click"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "userName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "firstName"], ["matColumnDef", "lastName"], ["matColumnDef", "email"], ["matColumnDef", "userType"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["color", "primary", "mat-raised-button", "", "matTooltip", "Add new user", 3, "click"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", "matTooltip", "View", "type", "button", 3, "click"], ["mat-icon-button", "", "matTooltip", "Edit", "type", "button", 3, "disabled", "click"], [4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Reset Password", "type", "button", 3, "disabled", "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ViewUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ViewUsersComponent_button_7_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Inactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewUsersComponent_Template_button_click_52_listener() { return ctx.onUserSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewUsersComponent_Template_button_click_54_listener() { return ctx.onUserSearchClear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, " Clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](59, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, ViewUsersComponent_th_60_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](61, ViewUsersComponent_td_61_Template, 2, 1, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](62, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](63, ViewUsersComponent_th_63_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](64, ViewUsersComponent_td_64_Template, 2, 1, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](65, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](66, ViewUsersComponent_th_66_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](67, ViewUsersComponent_td_67_Template, 2, 1, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](68, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](69, ViewUsersComponent_th_69_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](70, ViewUsersComponent_td_70_Template, 2, 1, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](71, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](72, ViewUsersComponent_th_72_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](73, ViewUsersComponent_td_73_Template, 2, 1, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](74, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](75, ViewUsersComponent_th_75_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](76, ViewUsersComponent_td_76_Template, 2, 1, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](77, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](78, ViewUsersComponent_th_78_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](79, ViewUsersComponent_td_79_Template, 8, 2, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](80, ViewUsersComponent_tr_80_Template, 1, 0, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](81, ViewUsersComponent_tr_81_Template, 1, 0, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", "ADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", "USER");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", "ACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", "INA");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatRowDef"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFx2aWV3LXVzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6InZpZXctdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "goXk":
/*!*********************************************************!*\
  !*** ./src/app/views/pages/home/home-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-view/main-view.component */ "uD93");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/user.service */ "UaSX");
/* harmony import */ var _users_view_users_view_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/view-users/view-users.component */ "diAE");
/* harmony import */ var _calories_calculator_view_calories_calculator_view_calories_calculator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calories-calculator/view-calories-calculator/view-calories-calculator.component */ "deiY");
/* harmony import */ var _my_workouts_view_my_workouts_view_my_workouts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-workouts/view-my-workouts/view-my-workouts.component */ "Rv/K");
/* harmony import */ var _exercise_view_exercise_view_exercise_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exercise/view-exercise/view-exercise.component */ "odnE");
/* harmony import */ var _service_workout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/workout.service */ "FQ9r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "8Y7J");










const routes = [
    {
        path: '',
        component: _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_1__["MainViewComponent"]
    },
    {
        path: 'users',
        resolve: {
            data: _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        },
        component: _users_view_users_view_users_component__WEBPACK_IMPORTED_MODULE_3__["ViewUsersComponent"]
    },
    {
        path: 'calories-calculator',
        component: _calories_calculator_view_calories_calculator_view_calories_calculator_component__WEBPACK_IMPORTED_MODULE_4__["ViewCaloriesCalculatorComponent"]
    },
    {
        path: 'my-workouts',
        component: _my_workouts_view_my_workouts_view_my_workouts_component__WEBPACK_IMPORTED_MODULE_5__["ViewMyWorkoutsComponent"],
        resolve: {
            data: _service_workout_service__WEBPACK_IMPORTED_MODULE_7__["WorkoutService"]
        },
    },
    {
        path: 'exercises',
        component: _exercise_view_exercise_view_exercise_component__WEBPACK_IMPORTED_MODULE_6__["ViewExerciseComponent"]
    },
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "odnE":
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/home/exercise/view-exercise/view-exercise.component.ts ***!
  \************************************************************************************/
/*! exports provided: ViewExerciseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewExerciseComponent", function() { return ViewExerciseComponent; });
/* harmony import */ var _exercise_exercise_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exercise/exercise.component */ "XfpB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");





class ViewExerciseComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.onExerciseView = ($event, type) => {
            if ($event) {
                $event.stopPropagation();
                $event.preventDefault();
            }
            const dialogRef = this.dialog.open(_exercise_exercise_component__WEBPACK_IMPORTED_MODULE_0__["ExerciseComponent"], {
                panelClass: 'custom-dialog-panel',
                width: '50%',
                data: {
                    type: type,
                }
            });
            const dialogSubs = dialogRef.afterClosed()
                .subscribe((response) => {
                if (response) {
                }
                dialogSubs.unsubscribe();
            });
        };
    }
    ngOnInit() {
    }
}
ViewExerciseComponent.ɵfac = function ViewExerciseComponent_Factory(t) { return new (t || ViewExerciseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
ViewExerciseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ViewExerciseComponent, selectors: [["app-view-exercise"]], decls: 109, vars: 0, consts: [[1, "container"], ["src", "assets/images/gym-workout-plan-for-gaining-muscle_header.jpg", 2, "width", "100%"], [1, "p-t-50"], [1, "row"], [1, "col-md-8"], [1, "card", "m-t-20"], [1, "card-body"], [1, "t-a-c", "m-t-20"], [1, "row", "m-t-20"], [1, "col-md-4"], [1, "example-card"], ["mat-card-image", "", "src", "./assets/images/abductors.jpg"], ["color", "primary", "mat-raised-button", "", 2, "width", "100%", 3, "click"], ["mat-card-image", "", "src", "./assets/images/abs_0.jpg"], ["mat-card-image", "", "src", "./assets/images/adductors.jpg"], ["mat-card-image", "", "src", "./assets/images/biceps_0.jpg"], ["mat-card-image", "", "src", "./assets/images/calves_0.jpg"], ["mat-card-image", "", "src", "./assets/images/chest_0.jpg"], ["mat-card-image", "", "src", "./assets/images/forearms_0.jpg"], ["mat-card-image", "", "src", "./assets/images/glutes_0.jpg"], ["mat-card-image", "", "src", "./assets/images/hamstrings_0.jpg"]], template: function ViewExerciseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Exercises");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Choose the muscle group you want to target. Once in the muscle group, use the sort and filter options ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " to find the best exercises for the equipment you have, your training experience, and goals. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Abductors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewExerciseComponent_Template_button_click_25_listener($event) { return ctx.onExerciseView($event, "ABDUCTORS"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Abs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewExerciseComponent_Template_button_click_35_listener($event) { return ctx.onExerciseView($event, "ABS"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Adductors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewExerciseComponent_Template_button_click_45_listener($event) { return ctx.onExerciseView($event, "ADDUCTORS"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Biceps");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewExerciseComponent_Template_button_click_56_listener($event) { return ctx.onExerciseView($event, "BICEPS"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Calves");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewExerciseComponent_Template_button_click_66_listener($event) { return ctx.onExerciseView($event, "CALVES"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Chest");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewExerciseComponent_Template_button_click_76_listener($event) { return ctx.onExerciseView($event, "CHEST"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, " View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Forearms");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewExerciseComponent_Template_button_click_87_listener($event) { return ctx.onExerciseView($event, "FOREARMS"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Glutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewExerciseComponent_Template_button_click_97_listener($event) { return ctx.onExerciseView($event, "GLUTES"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, " View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Hamstrings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewExerciseComponent_Template_button_click_107_listener($event) { return ctx.onExerciseView($event, "HAMSTRINGS"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, " View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWV4ZXJjaXNlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "uD93":
/*!*******************************************************************!*\
  !*** ./src/app/views/pages/home/main-view/main-view.component.ts ***!
  \*******************************************************************/
/*! exports provided: MainViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViewComponent", function() { return MainViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/home.component */ "NBEp");


class MainViewComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainViewComponent.ɵfac = function MainViewComponent_Factory(t) { return new (t || MainViewComponent)(); };
MainViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainViewComponent, selectors: [["app-main-view"]], decls: 1, vars: 0, template: function MainViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");
    } }, directives: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src-app-views-pages-home-home-module-es2015.js.map