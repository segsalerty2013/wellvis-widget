// Create new link Element
var theHead = document.getElementsByTagName('HEAD')[0];
var theBody = document.getElementsByTagName('BODY')[0];
var linkPure = document.createElement('link');
var linkSeamless = document.createElement('script');
var chatDiv = document.createElement('div');

// set the attributes for linkPurse css element
linkPure.rel = 'stylesheet';
linkPure.type = 'text/css';
linkPure.href = 'src/css/pure/pure-min.css';

linkSeamless.src = 'src/js/seamless/seamless.parent.min.js';
chatDiv.id = 'wellvis-widget';

theHead.appendChild(linkPure);

theBody.appendChild(linkSeamless);
theBody.prepend(chatDiv);


(function($) {
    $.fn.wellvisWidget = function (options) {
        var settings = $.extend({
            title: 'Chat with a Doctor',
            referral: ''
        }, options);

        function _init() {
            // Render the needed html elements
            _render();
        }

        function _render() {
            $window = $(`<div class="">Hello World</div>`);
            $window.appendTo(_container);
        }
        // If the plugin is used on multiple elements on the page, use only the first one
        var _container = this.first();
        _init();
    }
})(jQuery);