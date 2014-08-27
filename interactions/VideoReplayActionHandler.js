

function VideoReplayActionHandler() {
    VideoReplayActionHandler.prototype.id = 'replay';
    VideoReplayActionHandler.prototype.displayName = 'Replay';
    VideoReplayActionHandler.prototype.param = VideoActionParams;
    VideoReplayActionHandler.prototype.targetable = true;
}

VideoReplayActionHandler.prototype = new ActionHandler();

VideoReplayActionHandler.prototype.play = function (params, target) {
    setTimeout(function (){
        var videoList = $('#' + target + ' video');
        if (videoList && videoList[0]) {
            videoList[0].currentTime = 0;
            videoList[0].play();
        }
    }, params.get('delay'));

};