
function RotateActionParams(binded) {
    RotateActionParams.prototype.viewName = 'Rotate';
    this.binded = binded;    
    this.add('degree', 1);
    this.add('direction', 1);
    this.add('duration', 1000);
    this.add('delay', 0);
    this.add('ease','none');
    this.add('easePower', 1);
    this.add('loop',0);
}

RotateActionParams.prototype = new ActionParams('1.0.0');
RotateActionParams.prototype.constructor = RotateActionParams;

RotateActionParams.prototype.validate = function () {

    var ease = this.get('ease');
    var easePower = this.get('easePower');    
    var degree = this.get('degree');
    var loop = this.get('loop');

    return (this.get('duration') >= 0 &&
            this.get('delay') >= 0 &&
           (degree < 0 ||
            degree > 9999 ||
            ease === 'none' ||
            ease === 'easeIn' ||
            ease === 'easeOut' ||
            ease === 'easeInOut') &&
            easePower >= 1 &&
            easePower <= 4 && loop >= 0);
};
