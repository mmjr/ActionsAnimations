function ActionParams(version) {
    // parameters version
    this.version = version;
    // true if parameters are bindable
    this.viewName = '';
    this.binded = false;

}

ActionParams.prototype.add = function (name, value) {
    if (this.binded) {
        this[name] = ko.observable(value);
    }
    else {
        this[name] = value;
    }
};

ActionParams.prototype.get = function (name) {
    return (this.binded) ? this[name]() : this[name];
};

ActionParams.prototype.getInt = function (name) {
    return (parseInt(this.get(name), 10) || 0);
};

ActionParams.prototype.set = function (name, value) {
    if (this.binded) {
        this[name](value);
    }
    else {
        this[name] = value;
    }
};


ActionParams.prototype.getJSON = function () {

    var json = {};

    json.version = this.version;

    for (var key in this) {
        if (typeof this[key] === 'function' && ko.isObservable(this[key])) {
            json[key] = this.get(key);
        }
    }

    return json;
};

ActionParams.prototype.initFromJSON = function (json) {

    this.version = json.version;

    var key;

    if (this.binded) {
        for (key in this) {
            if (typeof this[key] === 'function' && ko.isObservable(this[key])) {
                this[key](json[key]);
            }
        }
    }
    else {
        for (key in this) {
            if (key !== 'binded' && key !== 'version' && typeof this[key] !== 'function') {
                this[key] = json[key];
            }
        }
    }

};

ActionParams.prototype.copy = function () {

    var copy = new this.constructor(true);

    for (var key in this) {
        if (typeof this[key] === 'function' && ko.isObservable(this[key])) {
            copy[key](this[key]());
        }
    }

    return copy;
};

