

function VideoMuteActionHandler() {
    VideoMuteActionHandler.prototype.id = 'mute';
    VideoMuteActionHandler.prototype.displayName = 'Mute';
    VideoMuteActionHandler.prototype.param = VideoActionParams;
    VideoMuteActionHandler.prototype.targetable = true;
}

VideoMuteActionHandler.prototype = new ActionHandler();

VideoMuteActionHandler.prototype.play = function (params, target) {
    setTimeout(function (){
        var videoList = $('#' + target + ' video');
        if (videoList && videoList[0]) {
            videoList[0].muted = true;
        }
    }, params.get('delay'));

};
