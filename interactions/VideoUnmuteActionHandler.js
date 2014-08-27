

function VideoUnmuteActionHandler() {
    VideoUnmuteActionHandler.prototype.id = 'unmute';
    VideoUnmuteActionHandler.prototype.displayName = 'Unmute';
    VideoUnmuteActionHandler.prototype.param = VideoActionParams;
    VideoUnmuteActionHandler.prototype.targetable = true;
}

VideoUnmuteActionHandler.prototype = new ActionHandler();

VideoUnmuteActionHandler.prototype.play = function (params, target) {
    setTimeout(function (){
        var videoList = $('#' + target + ' video');
        if (videoList && videoList[0]) {
            videoList[0].muted = false;
        }
    }, params.get('delay'));
};

