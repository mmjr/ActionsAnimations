
function CustInterActionHandler() {
    CustInterActionHandler.prototype.id = 'custInter';
    CustInterActionHandler.prototype.displayName = 'Custom Interaction';
    CustInterActionHandler.prototype.param = CustInterActionParams;
}

CustInterActionHandler.prototype = new ActionHandler();

CustInterActionHandler.prototype.play = function (params, target) {

    if (params.validate()) {
        $(window).trigger('customInteractionEvent', params.get('name'));
    }
};