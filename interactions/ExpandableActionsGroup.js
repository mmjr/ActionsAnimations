
(function () {

    function ExpandableActionsGroup() {
        this.addHandler(ExpandActionHandler);
        this.addHandler(CollapseActionHandler);
    }

    ExpandableActionsGroup.prototype = new ActionsGroup('expandable', 'Expandable');

    $(window).trigger('registerActionGroupEvent', new ExpandableActionsGroup());

})();