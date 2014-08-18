

function TriggerCTActionHandler() {
    TriggerCTActionHandler.prototype.id = 'triggerCT';
    TriggerCTActionHandler.prototype.displayName = 'Trigger ClickTrough';
}

TriggerCTActionHandler.prototype = new ActionHandler();

TriggerCTActionHandler.prototype.play = function (params, target) {
    $(window).trigger('clickThroughEvent');
};
