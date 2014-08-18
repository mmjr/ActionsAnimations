
function FadeInActionHandler() {
    FadeInActionHandler.prototype.id = 'fadeIn';
    FadeInActionHandler.prototype.displayName = 'Fade In';
    FadeInActionHandler.prototype.param = FadeActionParams;
}

FadeInActionHandler.prototype = new AnimActionHandler();

FadeInActionHandler.prototype.prepare = function (params, target) {
    $('#' + target).css("opacity", 0);
};

FadeInActionHandler.prototype.play = function (params, target) {

    if (params.validate()) {
        
        var startParams = {
            opacity: 0
        };

        var endParams = this.getAnimParams(target);
        endParams.delay = (params.getInt('delay') / 1000);
        endParams.opacity = this.targetStateMap[target].opacity;
        
        if (params.get('ease') !== 'none') {
            endParams.ease = "Power" + (params.getInt('easePower') - 1) + "." + params.get('ease');
        }

        $('#' + target).css("display", "block");

        TweenLite.fromTo($("#" + target), (params.getInt('duration') / 1000), startParams, endParams);
       
    }
};
