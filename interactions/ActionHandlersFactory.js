
var ActionHandlersFactory = new function () {

    var actionsGroups = {};

    function Register(e, actionsGroup) {
        actionsGroups[actionsGroup.id] = actionsGroup;
    }

    this.getActionHandler = function (actionId) {
        var ids = actionId.split('.');
        return actionsGroups[ids[0]].getActionHandler(ids[1]);
    };

    this.getDesc = function () {
        var groupsDesc = [];
        for (var key in actionsGroups) {
            groupsDesc.push(actionsGroups[key].getDesc());
        }
        return groupsDesc;
    };

    $(window).bind('registerActionGroupEvent', Register);

};
