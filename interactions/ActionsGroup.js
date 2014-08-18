

function ActionsGroup(id, displayName) {   
    this.id = id;
    this.displayName = displayName;
    this.actionsHandlers = {};
}

ActionsGroup.prototype.getActionHandler = function (actionId) {
    return this.actionsHandlers[actionId];
};

ActionsGroup.prototype.addHandler = function (handler) {
    var h = new handler();
    this.actionsHandlers[h.id] = h;
};

ActionsGroup.prototype.getDesc = function () {
    var groupDesc = { text: this.displayName, children: [] };
    for (var key in this.actionsHandlers) {
        groupDesc.children.push({ text: this.actionsHandlers[key].displayName, id: this.id + '.' + this.actionsHandlers[key].id });
    }
    return groupDesc;
};