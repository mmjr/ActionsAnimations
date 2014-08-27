

function TriggerCTActionHandler() {
    TriggerCTActionHandler.prototype.id = 'triggerCT';
    TriggerCTActionHandler.prototype.displayName = 'Trigger ClickTrough';
    TriggerCTActionHandler.prototype.param = TriggerCTActionParams;
}

TriggerCTActionHandler.prototype = new ActionHandler();

TriggerCTActionHandler.prototype.play = function (params, target) {
    setTimeout(function (){
        $(window).trigger('clickThroughEvent');
    }, params.get('delay'));

};
