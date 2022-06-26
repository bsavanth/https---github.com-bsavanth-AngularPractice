"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(_X, _Y) {
        this._X = _X;
        this._Y = _Y;
    }
    Shape.prototype.getInfo = function () {
        return "X value: ".concat(this._X, ", Y value: ").concat(this._Y);
    };
    return Shape;
}());
exports.Shape = Shape;
