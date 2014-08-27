
function CustInterActionParams(binded) {
    CustInterActionParams.prototype.viewName = 'CustomInteraction';
    this.binded = binded;
    this.add('name', '');
    this.add('delay', 0);
}

CustInterActionParams.prototype = new ActionParams('1.0.0');
CustInterActionParams.prototype.constructor = CustInterActionParams;

CustInterActionParams.prototype.validate = function () {
    return ($.trim(this.get('name')));
};
