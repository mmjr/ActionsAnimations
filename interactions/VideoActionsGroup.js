
(function () {

    function VideoActionsGroup() {
        this.addHandler(VideoPlayActionHandler);
        this.addHandler(VideoStopActionHandler);
        this.addHandler(VideoPauseActionHandler);
        this.addHandler(VideoReplayActionHandler);
        this.addHandler(VideoMuteActionHandler);
        this.addHandler(VideoUnmuteActionHandler);
    }

    VideoActionsGroup.prototype = new ActionsGroup('videoActions', 'Video Actions');

    $(window).trigger('registerActionGroupEvent', new VideoActionsGroup());

})();