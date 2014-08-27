

function BindableInteraction() {

    this.isBeingEdited = ko.observable(false);

    this.isValid = ko.observable(false);

    // holds the event identifier for binding
    this.eventId = ko.observable('');
      
    // holds the action that should be played when event occurred
    //this.action = ko.observable(new BindableAction());

    //holds the actions that should be played when event occurred
    this.actions = ko.observableArray();

}

// set parent class
BindableInteraction.prototype = new Interaction();

// override parent getEventId
BindableInteraction.prototype.getEventId = function () {
    return this.eventId();
};

// override parent getAction
BindableInteraction.prototype.getAction = function (index) {
    return this.actions()[index]();
};

// override parent getActionTarget
BindableInteraction.prototype.getActionTarget = function (index) {
    return this.actions()[index]().actionTarget();
};

// override parent getAllActions
BindableInteraction.prototype.getAllActions = function (){
    return this.actions();
};

BindableInteraction.prototype.getJSON = function () {
    var actionsJSON = [];
    for (var i = 0 ; i < this.actions().length ; i++){
        actionsJSON.push(this.actions()[i].getJSON());
    }

    return {
        eventId: this.eventId(),
        actions: actionsJSON
    };
};

BindableInteraction.prototype.copy = function () {

    var copy = new BindableInteraction();

    copy.eventId(this.eventId());
    for (var i = 0 ; i < this.actions().length ; i++) {
        var bAction = ko.observable(new BindableAction());
        bAction().copyFrom(this.actions()[i]);
        copy.actions.push(bAction);
    }

    copy.isBeingEdited(this.isBeingEdited());

    copy.isValid(this.isValid());

    return copy;

};


// check interaction validity - ask Maor!
BindableInteraction.prototype.checkValidity = function (needsTarget , index) {

    var result = false;

    do {
        if (!this.getAction(index).validate()) {
            break;
        }
        if (!this.eventId()) {
            break;
        }
        if (needsTarget && !this.getActionTarget(index)) {
            break;
        }

        result = true;

    } while (false);

    this.isValid(result);

    return result;
};

// create interaction from json
BindableInteraction.createFromJSON = function (json) {
    var interaction = new BindableInteraction();

    interaction.eventId(json.eventId || null);

    for (var i = 0 ; i < json.actions.length ; i++) {
        var bAction = ko.observable(new BindableAction());
        bAction().initFromJSON(json.actions[i]);
        interaction.actions.push(bAction);
    }


    return interaction;

};

// update target with new id if id has been changed
BindableInteraction.prototype.updateActionTarget = function (oldId, newId, index) {
    if (this.actions()[index].actionTarget() === oldId)
        this.actions()[index].actionTarget(newId);
};


BindableInteraction.prototype.addAction = function(){
    var newAction = new BindableAction();
    this.actions.push(newAction);
    return newAction;
};

BindableInteraction.prototype.removeAction = function(actionIndex){
    this.actions.splice(actionIndex, 1);
};