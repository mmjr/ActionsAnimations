
(function () {

    function AnimationActionsGroup() {
        this.addHandler(SlideInActionHandler);
        this.addHandler(SlideOutActionHandler);
        this.addHandler(MotionActionHandler);
        this.addHandler(FadeInActionHandler);
        this.addHandler(FadeOutActionHandler);
        this.addHandler(ShowActionHandler);
        this.addHandler(HideActionHandler);
        this.addHandler(RotateActionHandler);
        this.addHandler(ScaleActionHandler);
        
    }

    AnimationActionsGroup.prototype = new ActionsGroup('animation', 'Animation');

    $(window).trigger('registerActionGroupEvent', new AnimationActionsGroup());

})();