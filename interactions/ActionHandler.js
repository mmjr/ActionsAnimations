
function ActionHandler() {
    this.id = null;
    this.displayName = null;
    this.param = null;
    this.targtable = false;
}

ActionHandler.prototype.init = function () {

};

ActionHandler.prototype.prepare = function () {

};

ActionHandler.prototype.getParams = function (binded) {
    return (this.param) ? new this.param(binded) : null;
};

