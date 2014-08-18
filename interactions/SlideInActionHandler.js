
function SlideInActionHandler() {
    SlideInActionHandler.prototype.id = 'slideIn';
    SlideInActionHandler.prototype.displayName = 'Slide In';
    SlideInActionHandler.prototype.param = MotionActionParams;
}

SlideInActionHandler.prototype = new AnimActionHandler();

SlideInActionHandler.prototype.prepare = function (params, target) {

    $('#' + target).css({
        top: (params.getInt('startY') + this.offsetY) + 'px',
        left: (params.getInt('startX') + this.offsetX) + 'px'
    });

};

SlideInActionHandler.prototype.play = function (params, target) {

    if (params.validate()) {

        var startParams = {
            top: (params.getInt('startY') + this.offsetY) + 'px',
            left: (params.getInt('startX') + this.offsetX) + 'px'
        };

        var endParams = this.getAnimParams(target);
        endParams.delay = (params.getInt('delay') / 1000);
        endParams.top = this.targetStateMap[target].position.top + 'px';
        endParams.left = this.targetStateMap[target].position.left + 'px';

        if (params.get('ease') !== 'none') {
            endParams.ease = 'Power' + (params.getInt('easePower') - 1) + '.' + params.get('ease');
        }
       
        TweenLite.fromTo($("#" + target), (params.getInt('duration') / 1000), startParams, endParams);

    }
};
