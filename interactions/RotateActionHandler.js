
function RotateActionHandler() {
    RotateActionHandler.prototype.id = 'rotate';
    RotateActionHandler.prototype.displayName = 'Rotate';
    RotateActionHandler.prototype.param = RotateActionParams;   
}




RotateActionHandler.prototype = new AnimActionHandler();

RotateActionHandler.prototype.play = function (params, target) {

    if (params.validate()) {
        var loop = params.getInt('loop');
        var degree = params.getInt('degree') * params.getInt('direction');
        var endParams = this.getAnimParams(target);
        var startParams = { rotation: 0 };

        endParams.rotation = degree;
        endParams.delay = (params.getInt('delay') / 1000);
        endParams.parseTransform = true;
        if (params.get('ease') !== 'none') {
            endParams.ease = "Power" + (params.getInt('easePower') - 1) + "." + params.get('ease');
        }
        TweenLite.fromTo($("#" + target), (params.getInt('duration') / 1000), startParams, endParams);
        if(loop > 0) {
            var counter = 1;
            var interval = setInterval(function () {
                //Ask maor how we can throw this function out from rotation action handler.
                TweenLite.fromTo($("#" + target), (params.getInt('duration') / 1000), startParams, endParams);
                if (counter === loop) {
                    clearInterval(interval);
                }
                counter++;
            }, params.getInt('duration'));
        }
    }
};




