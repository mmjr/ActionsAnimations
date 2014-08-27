

function ExpandActionHandler() {
    ExpandActionHandler.prototype.id = 'expand';
    ExpandActionHandler.prototype.displayName = 'Expand';
    ExpandActionHandler.prototype.targetable = true;
}

ExpandActionHandler.prototype = new ActionHandler();

ExpandActionHandler.prototype.play = function (params, target) {
    setTimeout(function (){$(window).trigger('expandEvent', target)}, params.get('delay'));
};
