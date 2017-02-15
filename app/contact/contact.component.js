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
var Contactform = (function () {
    function Contactform() {
    }
    return Contactform;
}());
var ContactComponent = (function () {
    function ContactComponent() {
        this.model = new Contactform();
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.hasBeenSubmitted = false;
    };
    ContactComponent.prototype.register = function (form, event) {
        event.preventDefault();
        this.hasBeenSubmitted = true;
        alert("You have submitted your message! Thanks, " + form.value.contactname);
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'contact',
            templateUrl: './app/contact/contact.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map