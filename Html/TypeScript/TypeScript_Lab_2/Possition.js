"use strict";
exports.__esModule = true;
exports.printInforPossition = exports.Possition = void 0;
var Possition = /** @class */ (function () {
    function Possition(id, name) {
        this.id = id;
        this.name = name;
    }
    Possition.prototype.getid = function () {
        return this.id;
    };
    Possition.prototype.getname = function () {
        return this.name;
    };
    Possition.prototype.setid = function (value) {
        this.id = value;
    };
    Possition.prototype.setname = function (value) {
        this.name = value;
    };
    return Possition;
}());
exports.Possition = Possition;
function printInforPossition(possition) {
    console.log("ID: " + possition.getid() + "Possition Name: " + possition.getname());
}
exports.printInforPossition = printInforPossition;
