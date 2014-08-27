
function FadeActionParams(binded) {
    FadeActionParams.prototype.viewName = 'Fade';
    this.binded = binded;
    this.add('duration', 1000);
    this.add('ease','none');
    this.add('easePower', 1);
    this.add('delay', 0);
}

FadeActionParams.prototype = new ActionParams('1.0.0');
FadeActionParams.prototype.constructor = FadeActionParams;

FadeActionParams.prototype.validate = function () {

    var ease = this.get('ease');
    var easePower = this.get('easePower');

    return (this.get('duration') >= 0 &&
            this.get('delay') >= 0 &&
           (ease === 'none' ||
            ease === 'easeIn' ||
            ease === 'easeOut' ||
            ease === 'easeInOut') &&
            easePower >= 1 &&
            easePower <= 4);
};
