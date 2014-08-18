
function Interaction() {

    // holds the event identifier for binding
    this.eventId = '';

    // holds the action that should be played when event occurred
    this.actions = [];



}

Interaction.prototype = (function () {
    // return event id
    var getEventId = function () {
        return this.eventId;
    };
    var getAllActions = function(){
        return this.actions;
    };

    // return action object
    var getAction = function (index) {
        return this.actions[index];
    };

    // return action targets array
    var getActionTarget = function (index) {
        return this.actions[index].actionTarget;
    };


    // play the action assiciated with this interaction
    var play = function () {
        for(var i = 0; i < this.getAllActions().length ; i++) {
            this.getAction(i).play(this.getActionTarget(i));
        }

    };

    // this function is being called when the associated event trigered
    var eventHandler = function (e) {
        Utils.stopPropagation(e);
        e.data.play();
    };

    // validate that this interaction initialized with the needed values
    var validate = function () {
        return (this.getEventId() && this.getAllActions());
    };

    // attach this interaction to the specified target enable action play when the associated event trigered
    var attach = function (target) {
        if (target && validate.call(this)) {
            // in ad load we need to bind to window and let action prepare for play                  
            $("#" + target).bind(this.getEventId(), this, eventHandler);
        }
    };

    var init = function (offsetX, offsetY) {

        var x = 0;
        var y = 0;

        if (arguments.length > 0) {
            x = offsetX;
        }

        if (arguments.length > 1) {
            y = offsetY;
        }
        for(var i = 0; i < this.getAllActions().length ; i++) {
            this.getAction(i) && this.getAction(i).init(this.getActionTarget(i), x, y);
        }
    };

    var prepare = function () {
        for(var i = 0; i < this.getAllActions().length ; i++) {
            this.getAction(i) && this.getAction(i).prepare(this.getActionTarget(i));
        }
    };

    return {
        attach: attach,
        play: play,
        getEventId: getEventId,
        getAction: getAction,
        getAllActions:getAllActions,
        getActionTarget: getActionTarget,
        init: init,
        prepare: prepare
    };

})();


// create interaction from json
Interaction.createFromJSON = function (json) {

    var interaction = new Interaction();
    
    // holds the event identifier for binding
    interaction.eventId = json.eventId || null;
    for(var i = 0 ; i < json.actions.length ; i++){
        interaction.actions[i] = new Action();
        interaction.actions[i].initFromJSON(json.actions[i]);
    }


    // holds the action that should be played when event occurred
    //interaction.action.initFromJSON(json.action);
   
    return interaction;

};
