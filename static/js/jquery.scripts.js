(function($) {
   $.fn.fancycheck = function(options) {
       var options = jQuery.extend({}, options);

       return this.each(function() {
           function checkElem(elem) {
               if (elem.attr("checked")) {
                   elem.parent().removeClass("b-uncheck").addClass("b-check");
               } else {
                   elem.parent().removeClass("b-check").addClass("b-uncheck");
               }
           }

           var elem = $(this);
           elem.css({
               "opacity": "0",
               "position": "absolute"
           });
           elem.parent().addClass("b-uncheck");

           checkElem(elem);

           elem.click(function() {
               var t = $(this);
               checkElem(t);
           });
       })
   }

   $.fn.slideNews = function(options) {
       var options = jQuery.extend({}, options);
       return this.each(function(e) {
           var newsList = $(this);
           newsList.attr("item", e + 1);

           $("div.h", newsList).click(function() {
               var p = $(this).parent();

               if (p.hasClass("bmni-hide")) {
                   $("div.b", p).slideDown(200, function() {
                       p.removeClass("bmni-hide").addClass("bmni-open");
                   });
               } else {
                   $("div.b", p).slideUp(200, function() {
                       p.addClass("bmni-hide").removeClass("bmni-open");
                   });
               }
           })
       })
   }

   $.fn.slidePatch = function(options) {
       var options = jQuery.extend({}, options);
       return this.each(function(e) {
           var patchList = $(this);
           patchList.attr("item", e + 1);

           patchList.click(function() {
               var p = $(this);

               if (p.hasClass("close")) {
                   $("div.list", p).slideDown(200, function() {
                       p.removeClass("close").addClass("open");
                   });
               } else {
                   $("div.list", p).slideUp(200, function() {
                       p.addClass("close").removeClass("open");
                   });
               }
           })
       })
   }
}
)(jQuery);
