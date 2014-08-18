
function SlideOutActionHandler() {
    SlideOutActionHandler.prototype.id = 'slideOut';
    SlideOutActionHandler.prototype.displayName = 'Slide Out';
    SlideOutActionHandler.prototype.param = MotionActionParams;
}

SlideOutActionHandler.prototype = new AnimActionHandler();

SlideOutActionHandler.prototype.play = function (params, target) {

    if (params.validate()) {

        var startParams = {
            top: this.targetStateMap[target].position.top + 'px',
            left: this.targetStateMap[target].position.left + 'px'
        };

        var endParams = this.getAnimParams(target);
        endParams.delay = (params.getInt('delay') / 1000);
        endParams.top = (params.getInt('endY') + this.offsetY) + 'px';
        endParams.left = (params.getInt('endX') + this.offsetX) + 'px';

        if (params.get('ease') !== 'none') {
            endParams.ease = 'Power' + (params.getInt('easePower') - 1) + '.' + params.get('ease');
        }
        
        TweenLite.fromTo($("#" + target), (params.getInt('duration') / 1000), startParams, endParams);

    }
};

