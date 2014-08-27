

function VideoPauseActionHandler() {
    VideoPauseActionHandler.prototype.id = 'pause';
    VideoPauseActionHandler.prototype.displayName = 'Pause';
    VideoPauseActionHandler.prototype.param = VideoActionParams;
    VideoPauseActionHandler.prototype.targetable = true;
}

VideoPauseActionHandler.prototype = new ActionHandler();

VideoPauseActionHandler.prototype.play = function (params, target) {
    setTimeout(function (){
        var videoList = $('#' + target + ' video');
        if (videoList && videoList[0]) {
            videoList[0].pause();
        }
    }, params.get('delay'));

};
