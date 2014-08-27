
function BindableAction() {

    // hols action id
    this.actionId = ko.observable('');
    // action display name
    this.displayName = ko.observable('');

    // holds action params
    this.actionParams = ko.observable(null);

    // action handler
    this.actionHandler = ko.computed(function () {        
        if (this.actionId() && this.actionParams) {
            var handler = ActionHandlersFactory.getActionHandler(this.actionId());
            this.displayName(handler.displayName);
            this.actionParams(handler.getParams(true));
            return handler;
        }
        else if(this.actionParams){
            this.displayName('');           
            this.actionParams(null);           
            return null;
        }
    }, this);

    // Added action Target to action
    this.actionTarget = ko.observable('');
}

BindableAction.prototype = new Action();

// override parent getActionParams
BindableAction.prototype.getActionParams = function () {
    return this.actionParams();
};

// override parent getActionHandler
BindableAction.prototype.getActionHandler = function () {
    return this.actionHandler();
};

//override parent getActionTarget
BindableAction.prototype.getActionTarget = function(){
    return this.actionTarget();
};

// create interaction from json
BindableAction.prototype.initFromJSON = function (json) {
    this.actionId(json.actionId);
    if (json.actionParams) {
        this.actionParams().initFromJSON(json.actionParams);
    }

    //Added - uri.
    this.actionTarget(json.actionTarget);
};

BindableAction.prototype.copyFrom = function (action) {
    this.actionId(action.actionId());
    if (action.actionParams()) {
        this.actionParams(action.actionParams().copy());
    }

    //added - uri
    this.actionTarget(action.actionTarget());
};

BindableAction.prototype.getJSON = function () {
    return {
        actionId: this.actionId(),
        actionParams: this.actionParams() ? this.actionParams().getJSON() : null,
        actionTarget: this.actionTarget()

    };
};


