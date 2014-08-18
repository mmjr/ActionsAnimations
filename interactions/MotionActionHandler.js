

function MotionActionHandler() {
    MotionActionHandler.prototype.id = 'motion';
    MotionActionHandler.prototype.displayName = 'Motion';
    MotionActionHandler.prototype.param = MotionActionParams;
}

MotionActionHandler.prototype = new AnimActionHandler();

MotionActionHandler.prototype.prepare = function (params, target) {

    $('#' + target).css({
        top: (params.getInt('startY') + this.offsetY) + 'px',
        left: (params.getInt('startX') + this.offsetX) + 'px'
    });
};

MotionActionHandler.prototype.play = function (params, target) {

    if (params.validate()) {

        var startParams = {
            top: (params.getInt('startY') + this.offsetY) + 'px',
            left: (params.getInt('startX') + this.offsetX) + 'px'
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
