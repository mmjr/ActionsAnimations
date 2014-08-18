

function GotoURLActionHandler() {
    GotoURLActionHandler.prototype.id = 'gotoURL';
    GotoURLActionHandler.prototype.displayName = 'Goto URL';
    GotoURLActionHandler.prototype.param = GotoURLActionParams;
}

GotoURLActionHandler.prototype = new ActionHandler();

GotoURLActionHandler.prototype.play = function (params, target) {
    if (params.validate()) {
        var target = params.get('target');
        if(typeof EB !== 'undefined' && EB && EB.getSDKData()){ //IF EB defined, We will use The API that was given by Client, EB SDK Data will not be defined on not in serving environment.
            var options =  {
                jumpUrl: Utils.fixURL(params.get('url')),
                windowWasOpen: true,
                clickInt: {
                    yPos: params.get('top'),
                    xPos: params.get('left'),
                    showAddressBar: params.get('location'),
                    showMenuBar: params.get('menubar'),
                    width: params.get('width'),
                    height: params.get('height')
                }
            };
            EB._openWindowOrRedirect(options);

            if (params.get('closeAllAdParts')) {
                $(window).trigger('closeAllAdPartsEvent');
            }


        }
        else{ //IF EB is not defined, or EB is defined but we are not in IN-App environment, then we will use the regular window.open function.
            if (target === 'newWindow') {

                window.open(Utils.fixURL(params.get('url')),
                    '_blank',
                        'location=' + (params.get('location') ? 'yes' : 'no') +
                        ', menubar=' + (params.get('menubar') ? 'yes' : 'no') +
                        ', left=' + params.get('left') +
                        ', top=' + params.get('top') +
                        ', width=' + params.get('width') +
                        ', height=' + params.get('height'));

                if (params.get('closeAllAdParts')) {
                    $(window).trigger('closeAllAdPartsEvent');
                }
            }
            else{
                window.open(Utils.fixURL(params.get('url')), '_top');
            }
        }
    }
};
