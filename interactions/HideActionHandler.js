

function HideActionHandler() {
    HideActionHandler.prototype.id = 'hide';
    HideActionHandler.prototype.displayName = 'Hide';
    HideActionHandler.prototype.param = ShowHideActionParams;
}

HideActionHandler.prototype = new AnimActionHandler();

HideActionHandler.prototype.play = function (params, target) {
    var animParams = this.getAnimParams(target);
    animParams.delay = (params.getInt('delay') / 1000);
    animParams.display = 'none';
    animParams.onComplete = function() { $(window).trigger('elementHidden', target); };
    if (params.validate()) {
        TweenLite.to($("#" + target), 0.0001, animParams); 
    }
};

