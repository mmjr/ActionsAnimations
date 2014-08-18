
function ShowActionHandler() {
    ShowActionHandler.prototype.id = 'show';
    ShowActionHandler.prototype.displayName = 'Show';
    ShowActionHandler.prototype.param = ShowHideActionParams;
}

ShowActionHandler.prototype = new AnimActionHandler();

ShowActionHandler.prototype.play = function (params, target) {

    var animParams = this.getAnimParams(target);
    animParams.delay = (params.getInt('delay') / 1000);
    animParams.display = 'block';

    if (params.validate()) {
        TweenLite.to($("#" + target), 0.0001, animParams);
    }
};
