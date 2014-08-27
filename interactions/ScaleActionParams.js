
function ScaleActionParams(binded) {
    ScaleActionParams.prototype.viewName = 'Scale';
    this.binded = binded;
    this.add('scale', 1);
    this.add('duration', 1000);
    this.add('delay', 0);
    this.add('ease','none');
    this.add('easePower', 1);
    
}

ScaleActionParams.prototype = new ActionParams('1.0.0');
ScaleActionParams.prototype.constructor = ScaleActionParams;

ScaleActionParams.prototype.validate = function () {

    var ease = this.get('ease');
    var easePower = this.get('easePower');
    var scale = this.get('scale');

    return (this.get('duration') >= 0 &&
            this.get('delay') >= 0 &&
           (scale < 0 ||
            scale > 1000 ||
            ease === 'none' ||
            ease === 'easeIn' ||
            ease === 'easeOut' ||
            ease === 'easeInOut') &&
            easePower >= 1 &&
            easePower <= 4);
};
