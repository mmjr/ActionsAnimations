
function ScaleActionHandler() {
    ScaleActionHandler.prototype.id = 'scale';
    ScaleActionHandler.prototype.displayName = 'Scale';
    ScaleActionHandler.prototype.param = ScaleActionParams;
}
ScaleActionHandler.prototype = new AnimActionHandler();


ScaleActionHandler.prototype.play = function (params, target) {
   
    if (params.validate()) {     
        var endParams = this.getAnimParams(target);
        var startParams =  { scale: 1 };
        var scaleBy = params.getInt('scale') / 100;
        var endParams = this.getAnimParams(target);
        endParams.scale = scaleBy;
        endParams.delay = (params.getInt('delay') / 1000);
        endParams.parseTransform = true;
        if (params.get('ease') !== 'none') {
            endParams.ease = "Power" + (params.getInt('easePower') - 1) + "." + params.get('ease');
        }

        var tween = TweenLite.fromTo($("#" + target), (params.getInt('duration') / 1000), startParams , endParams);
       
    }
};
