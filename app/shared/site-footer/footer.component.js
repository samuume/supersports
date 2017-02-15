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
/**
 * Created by zongy on 12-02-2017.
 */
var core_1 = require('@angular/core');
var Newsletter = (function () {
    function Newsletter() {
    }
    return Newsletter;
}());
var FooterComponent = (function () {
    function FooterComponent() {
        this.model = new Newsletter();
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.hasBeenSubmitted = false;
    };
    FooterComponent.prototype.register = function (form, event) {
        event.preventDefault();
        this.hasBeenSubmitted = true;
        alert("You have been submitted our newsletter with " + form.value.email);
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'site-footer',
            templateUrl: './app/shared/site-footer/footer.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map