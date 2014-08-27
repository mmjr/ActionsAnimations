
function ShowHideActionParams(binded) {
    this.binded = binded;
}

ShowHideActionParams.prototype = new ActionParams('1.0.0');
ShowHideActionParams.prototype.constructor = ShowHideActionParams;

ShowHideActionParams.prototype.validate = function () {
    return (this.get('delay') >= 0);
};
