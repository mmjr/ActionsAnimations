
function MotionActionParams(binded) {
    this.binded = binded;
    this.add('startX', 0);
    this.add('startY', 0);
    this.add('endX', 0);
    this.add('endY', 0);
    this.add('duration', 2000);
    this.add('delay', 0);
    this.add('ease', 'none');
    this.add('easePower', 1);
}

MotionActionParams.prototype = new ActionParams('1.0.0');
MotionActionParams.prototype.constructor = MotionActionParams;

MotionActionParams.prototype.validate = function () {

    var ease = this.get('ease');
    var easePower = this.get('easePower');

    return (this.get('startX') !== undefined &&
            this.get('startY') !== undefined &&
            this.get('endX') !== undefined &&
            this.get('endY') !== undefined &&
            this.get('duration') >= 0 &&
            this.get('delay') >= 0 &&
           (ease === 'none' ||
            ease === 'easeIn' ||
            ease === 'easeOut' ||
            ease === 'easeInOut') &&
            easePower >= 1 &&
            easePower <= 4);
};
