"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var User_1 = require('./User');
var user_service_1 = require('./user.service');
var LoginComponent = (function () {
    function LoginComponent(userService) {
        this.userService = userService;
        this.model = new User_1.User(null, null, null, null, null);
        this.submitted = false;
        this.mode = 'Observable';
    }
    LoginComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log(this.model);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.model);
        if (!this.model.email && !this.model.password) {
            return;
        }
        this.userService.login(this.model.email, btoa(this.model.password))
            .subscribe(function (data) { return _this.user.push(data); }, function (error) { return _this.errorMessage = 'error'; });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'LoginForm',
            templateUrl: '../views/users/login.html',
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map