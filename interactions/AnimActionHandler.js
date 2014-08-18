function AnimActionHandler() {
    // define as a targetable action because animations always need a target to work on
    AnimActionHandler.prototype.targetable = true;
}

AnimActionHandler.prototype = new ActionHandler();
// define a map object for each animated target
// key =  target id, value = initial target state (opacity, position, controls etc)
AnimActionHandler.prototype.targetStateMap = {};
AnimActionHandler.prototype.offsetX = 0;
AnimActionHandler.prototype.offsetY = 0;

AnimActionHandler.prototype.init = function (params, target, offsetX, offsetY) {
    // if we don't have a state object for the specified target
    // then create one.
    if (!this.targetStateMap[target]) {
        var state = {};
        // how many animations are currently action for the specified target
        state.inProgress = 0;
        // save target opacity
        state.opacity = $('#' + target).css("opacity");
        // save target position
        state.position = $('#' + target).position();
        // if object is a video then save its controls attr value
        var video = $("#" + target + " video");
        if (video !== null) {
            state.controls = video.attr("controls");
        }
        this.targetStateMap[target] = state;
        // save ad offset relative to window
        AnimActionHandler.prototype.offsetX = offsetX;
        AnimActionHandler.prototype.offsetY = offsetY;
    }
}

// Get basic animation parameters
AnimActionHandler.prototype.getAnimParams = function (target) {
    return {
        overwrite: 0, // enable balanced call to onStart and onComplete handlers
        onStart: this.onStartHandler, // define onStart handler
        onStartParams: [this, target], // define onStart handler params
        onComplete: this.onCompleteHandler, // define onComplete handler
        onCompleteParams: [this, target] // define onComplete handler params
    };
}

// This handler is being called when animation has finished its job
AnimActionHandler.prototype.onStartHandler = function (obj, target) {
    // remove video control bar if its the first animation
    if (obj.targetStateMap[target].inProgress === 0) {
        var video = $("#" + target + " video");
        if (video !== null) {
            video.attr("controls", null);
        }
    }
    // Increment the number of active animations
    obj.targetStateMap[target].inProgress++;

};

// This handler is being called when animation has finished its job
AnimActionHandler.prototype.onCompleteHandler = function (obj, target) {
    // retrun video control bar (if it was visible before) when all animations
    // have finished their job.
    if (obj.targetStateMap[target].inProgress === 1) {
        var video = $("#" + target + " video");
        if (video !== null) {
            video.attr("controls", obj.targetStateMap[target].controls);
        }
    }
    // Decrement the number of action animations
    obj.targetStateMap[target].inProgress--;
};

