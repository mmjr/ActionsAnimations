
(function () {

    function URLActionsGroup() {
        this.addHandler(GotoURLActionHandler);
        this.addHandler(TriggerCTActionHandler);
        this.addHandler(CustInterActionHandler);
    }

    URLActionsGroup.prototype = new ActionsGroup('urlActions', 'URL Actions');

    $(window).trigger('registerActionGroupEvent', new URLActionsGroup());

})();