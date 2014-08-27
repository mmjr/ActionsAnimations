
function Action() {
    
    // holds action params
    this.actionParams = null;
    // action handler
    this.actionHandler = null;

    // action Target - added by uri.
    this.actionTarget = '';
    
 }

// play action
Action.prototype = (function () {

    // return action params
    var getActionParams = function () {
        return this.actionParams;
    };

    // return action handler
    var getActionHandler = function () {
        return this.actionHandler;
    };

    // return the action target - added by uri.
    var getActionTarget = function(){
        return  (this.getActionHandler() &&  this.getActionHandler().targetable ?  this.actionTarget : true);
    };

    // validate that this interaction initialized with the needed values
    var validate = function () {
        return (this.getActionHandler() && (this.getActionParams() === null || this.getActionParams().validate()) && this.getActionTarget());
    };

    var play = function () {
        if (this.validate()) {
            this.getActionHandler().play(this.getActionParams(), this.getActionTarget());
        }
    };

    var isTargetable = function () {
        return (this.getActionHandler() && this.getActionHandler().targetable);
    };

    var init = function (offsetX, offsetY) {
        this.getActionHandler() && this.getActionHandler().init(this.getActionParams(), this.getActionTarget(), offsetX, offsetY);
    };

    var prepare = function () {
        this.getActionHandler() && this.getActionHandler().prepare(this.getActionParams(), this.getActionTarget());
    };

    var initFromJSON = function (json) {
        this.actionHandler = ActionHandlersFactory.getActionHandler(json.actionId);
        this.actionParams = this.getActionHandler().getParams(false);
        if (json.actionParams) {
            this.actionParams.initFromJSON(json.actionParams);
        }
        this.actionTarget = json.actionTarget;
    };

    return {
        play: play,
        validate: validate,
        getActionParams: getActionParams,
        getActionHandler: getActionHandler,
        getActionTarget:getActionTarget,
        initFromJSON: initFromJSON,
        isTargetable: isTargetable,
        init: init,
        prepare: prepare
    };

})();


