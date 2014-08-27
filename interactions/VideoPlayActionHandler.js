

function VideoPlayActionHandler() {
    VideoPlayActionHandler.prototype.id = 'play';
    VideoPlayActionHandler.prototype.displayName = 'Play';
    VideoPlayActionHandler.prototype.param = VideoActionParams;
    VideoPlayActionHandler.prototype.targetable = true;
}

VideoPlayActionHandler.prototype = new ActionHandler();

VideoPlayActionHandler.prototype.play = function (params, target) {
    setTimeout(function (){
        var videoList = $('#' + target + ' video');
        if (videoList && videoList[0]) {
            videoList[0].play();
        }
    }, params.get('delay'));

};