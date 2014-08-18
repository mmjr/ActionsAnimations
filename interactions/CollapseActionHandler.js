

function CollapseActionHandler() {
    CollapseActionHandler.prototype.id = 'collapse';
    CollapseActionHandler.prototype.displayName = 'Collapse';
}

CollapseActionHandler.prototype = new ActionHandler();

CollapseActionHandler.prototype.play = function (params, target) {
    $(window).trigger('collapseEvent', target);

};
