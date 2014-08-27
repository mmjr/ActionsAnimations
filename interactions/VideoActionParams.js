
function VideoActionParams(binded) {
    this.binded = binded;
    this.add('delay', 0);
}

VideoActionParams.prototype = new ActionParams('1.0.0');
VideoActionParams.prototype.constructor = VideoActionParams;

VideoActionParams.prototype.validate = function () {
    return (this.get('delay') >= 0)

};
