"use strict";
var ParseParams = (function () {
    function ParseParams() {
        this.reset();
    }
    ParseParams.prototype.trim = function (text) {
        text = text.trim();
        var firstBracket = text.charAt(0).match(/["']/);
        if (firstBracket && !!text.charAt(text.length - 1).match(firstBracket[0])) {
            text = text.substring(1, text.length - 1);
        }
        return text;
    };
    ParseParams.prototype.addBreak = function (char, index) {
        switch (char) {
            case '(':
                this.round += 1;
                break;
            case ')':
                this.round -= 1;
                break;
            case '[':
                this.square += 1;
                break;
            case ']':
                this.square -= 1;
                break;
            case '{':
                this.curly += 1;
                break;
            case '}':
                this.curly -= 1;
                break;
            default:
                break;
        }
        if (char === ',' &&
            this.round === 0 && this.square === 0 && this.curly === 0) {
            this.params.push(this.trim(this.current));
            this.current = '';
        }
        else {
            this.current += char;
        }
    };
    ParseParams.prototype.getParams = function (text) {
        this.reset();
        for (var i = 0; i < text.length; i++) {
            this.addBreak(text[i], i);
        }
        return this.params.concat(this.trim(this.current));
    };
    ParseParams.prototype.reset = function () {
        this.round = 0;
        this.square = 0;
        this.curly = 0;
        this.current = '';
        this.params = [];
    };
    return ParseParams;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ParseParams;
;
