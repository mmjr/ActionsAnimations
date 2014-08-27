
function TriggerCTActionParams(binded) {
    this.binded = binded;
    this.add('delay', 0);
}

TriggerCTActionParams.prototype = new ActionParams('1.0.0');
TriggerCTActionParams.prototype.constructor = TriggerCTActionParams;

TriggerCTActionParams.prototype.validate = function () {
    return (this.get('delay') >= 0)

};
