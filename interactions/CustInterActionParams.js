
function CustInterActionParams(binded) {
    this.binded = binded;
    this.add('name', '');
}

CustInterActionParams.prototype = new ActionParams('1.0.0');
CustInterActionParams.prototype.constructor = CustInterActionParams;

CustInterActionParams.prototype.validate = function () {
    return ($.trim(this.get('name')));
};
