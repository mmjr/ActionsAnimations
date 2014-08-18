

function VideoPauseActionHandler() {
    VideoPauseActionHandler.prototype.id = 'pause';
    VideoPauseActionHandler.prototype.displayName = 'Pause';
    VideoPauseActionHandler.prototype.targetable = true;
}

VideoPauseActionHandler.prototype = new ActionHandler();

VideoPauseActionHandler.prototype.play = function (params, target) {
    var videoList = $('#' + target + ' video');
    if (videoList && videoList[0]) {
        videoList[0].pause();
    }
};
