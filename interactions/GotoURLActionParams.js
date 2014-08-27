
function GotoURLActionParams(binded) {
    GotoURLActionParams.prototype.viewName = 'GoToURL';
    this.binded = binded;
    this.add('url', '');
    this.add('delay', 0);
    this.add('target', 'newWindow');
    this.add('left', 0);
    this.add('top', 0);
    this.add('width', 100);
    this.add('height', 100);
    this.add('closeAllAdParts', true);
}

GotoURLActionParams.prototype = new ActionParams('1.0.0');
GotoURLActionParams.prototype.constructor = GotoURLActionParams;

GotoURLActionParams.prototype.validate = function () {

    var target = this.get('target');
    var width = this.get('width');
    var height = this.get('height');

    return ((target === 'newWindow' ||
            target === 'curWindow') &&
            this.get('left') !== undefined &&
            this.get('top') !== undefined &&
            width !== undefined &&
            height !== undefined &&
            this.get('closeAllAdParts') !== undefined);
};
