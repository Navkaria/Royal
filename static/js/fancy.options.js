jQuery(document).ready(function($) {
   var ie = $.browser.msie;
   var ie6 = ie && parseInt($.browser.version) == 6;
   var ie7 = ie && parseInt($.browser.version) == 7;
   var ie8 = ie && parseInt($.browser.version) == 8;
   var ie6789 = ie && parseInt($.browser.version) <= 9;

   if (ie7) {
       $('a').focus(function() {
           this.blur();
       });
   }
});
function fancyboxOptions(gallery) {
   var $ = jQuery;

   if (gallery.length > 0) {
       $(gallery).fancybox({
           'padding': 0,
           'overlayColor': '#000000',
           'overlayOpacity': 0.8,
           'titleFormat': function(title, currentArray, currentIndex, currentOpts) {
               return '<div id="fancybox-title-float-main">' + 111 + '</div> ' + '<a id="fancybox-new-window" target="_blank" title="Открыть оригинал" href="' + $(currentArray[currentIndex]).attr('href') + '">';
           },
           'onComplete': function() {
               $('#fancybox-new-window').appendTo($('#fancybox-wrap'));

               if ($.browser.webkit) {
                   handleArrowHover($('#fancybox-left'));
                   handleArrowHover($('#fancybox-right'));
               }
           },
           'onCleanup': function() {
               $('#fancybox-new-window').remove();
           }
       });

       if ($.browser.webkit) {
           $('#fancybox-left, #fancybox-right').hover(function() {
               $(this).addClass('hover');
           }, function() {
               $(this).removeClass('hover');
           });

           getMousePosition(100);
       }
   }
}

function handleArrowHover(arrow) {
   var arrowOffset = arrow.offset();

   if ((window.mouseXPos >= arrowOffset.left) && (window.mouseXPos <= (arrowOffset.left + arrow.outerWidth())) && (window.mouseYPos >= arrowOffset.top) && (window.mouseYPos <= (arrowOffset.top + arrow.outerHeight()))) {
       arrow.addClass('hover');
   } else {
       arrow.removeClass('hover');
   }
}

var mousePositionTimeoutId = null;

function getMousePosition(timeoutMilliSeconds) {
   jQuery(document).one("mousemove", function(event) {
       window.mouseXPos = event.pageX;
       window.mouseYPos = event.pageY;

       clearTimeout(mousePositionTimeoutId);

       mousePositionTimeoutId = setTimeout("getMousePosition(" + timeoutMilliSeconds + ")", timeoutMilliSeconds);
   });
}

function fancyboxVideoOptions(video) {
   var $ = jQuery;

   if (video.length > 0) {
       video.click(function() {
           $.fancybox({
               'padding': 0,
               'autoScale': false,
               'transitionIn': 'none',
               'transitionOut': 'none',
               'title': video.attr('id'),
               'width': 854,
               'height': 510,
               'overlayColor': '#000000',
               'overlayOpacity': 0.8,
               'href': this.href.replace(new RegExp("watch\\?v=","i"), 'v/'),
               'type': 'swf',
               'swf': {
                   'wmode': 'transparent',
                   'allowfullscreen': 'true'
               },
               'titleFormat': function(title, currentArray, currentIndex, currentOpts) {
                   //return '<div id="fancybox-title-float-main">' + '' + '</div> ' +
                   '<a id="fancybox-new-window" target="_blank" title="Открыть на YouTube" href="' + video.attr('href') + '">';
                   return '<div id="fancybox-title-float-main"></div>';
               },
               'onComplete': function() {
                   $('#fancybox-new-window').appendTo($('#fancybox-wrap'));
               },
               'onCleanup': function() {
                   $('#fancybox-new-window').remove();
               }
           });

           return false;
       });
   }
}
