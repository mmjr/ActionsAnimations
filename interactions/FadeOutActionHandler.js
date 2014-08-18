

function FadeOutActionHandler() {
    FadeOutActionHandler.prototype.id = 'fadeOut';
    FadeOutActionHandler.prototype.displayName = 'Fade Out';
    FadeOutActionHandler.prototype.param = FadeActionParams;
}

FadeOutActionHandler.prototype = new AnimActionHandler();

FadeOutActionHandler.prototype.prepare = function (params, target) {
    $('#' + target).css("opacity", this.targetStateMap[target].opacity);
};

FadeOutActionHandler.prototype.play = function (params, target) {

    if (params.validate()) {

        var endParams = this.getAnimParams(target);
        endParams.delay = (params.getInt('delay') / 1000);
        endParams.opacity = 0;
        endParams.onComplete = function() { $(window).trigger('elementFadeOut', target); }
        var startParams = { opacity: this.targetStateMap[target].opacity };

        $('#' + target).css("opacity", this.targetStateMap[target].opacity);

        if (params.get('ease') !== 'none') {
            endParams.ease = "Power" + (params.getInt('easePower') - 1) + "." + params.get('ease');
        }
        
        TweenLite.fromTo($("#" + target), (params.getInt('duration') / 1000), startParams, endParams);

    }
};
