$(document).ready(function() {
   /* top menu
   $("#headerMenu > li").each(function(index, element) {
     var elem = $(element);
     var submenu = $("ul", elem);
     var subHeight = submenu.height();
     var link = elem.children("a");

     submenu.css("height", "0");
     elem.hover(function() {
       link.addClass("active");
       submenu.stop().show().animate({'height': subHeight}, 200);
     }, function() {
       link.removeClass("active");
       submenu.stop().animate({'height': "0"}, 200, function() {$(this).hide()});
     })
   })*/
   /* end top menu*/
   $(".bhn-menu-sub ").hide();
   $("#headerMenu > li").hoverIntent(function() {
       $(this).children('a').addClass("active").end().children('.bhn-menu-sub').stop(true, true).slideDown('fast');
   }, function() {
       $(this).children('a').removeClass("active").end().children('.bhn-menu-sub').stop(true, true).slideUp('fast');
   });

   /* sliding news */
   $("div.b-main-news-item").slideNews();
   /* end sliding news */

   /* sliding patch */
   $("dl.b-page-download-patches dd").slidePatch();
   /* end sliding news */

   /* photos right column */
   $("#fotoList1").wrap("<div id='fotoList2'></div>");
   $("#fotoList2").css({
       "width": "201px",
       "margin": "0px 30px 0px 34px",
       "overflow": "hidden"
   });
   $("#fotoList2 ul").jcarousel({
       buttonNextHTML: null,
       buttonPrevHTML: null,
       wrap: 'circular',
       animation: 500,
       scroll: 1,
       initCallback: function(carousel) {
           $('#fotoList1Next').bind('click', function() {
               carousel.next();
               return false;
           });

           $('#fotoList1Prev').bind('click', function() {
               carousel.prev();
               return false;
           });
       }
   });

   fancyboxOptions($("#fotoList1 a"));

   $("#foto1List1").wrap("<div id='foto1List2'></div>");
   $("#foto1List2").css({
       "margin": "0px 0px 0px 0px",
       "overflow": "hidden"
   });
   $("#foto1List2 ul").jcarousel({
       buttonNextHTML: null,
       buttonPrevHTML: null,
       wrap: 'circular',
       animation: 500,
       scroll: 1,
       initCallback: function(carousel) {
           $('#foto1List1Next').bind('click', function() {
               carousel.next();
               return false;
           });

           $('#foto1List1Prev').bind('click', function() {
               carousel.prev();
               return false;
           });
       }
   });

   fancyboxOptions($("#foto1List1 a"));
   /* end photos right column */

   /* main page media */
   function mycarousel_initCallback2(carousel) {
       $('#photoListMainNext').bind('click', function() {
           carousel.next();
           return false;
       });

       $('#photoListMainPrev').bind('click', function() {
           carousel.prev();
           return false;
       });
   }
   ;
   $("#photoListMain").wrap("<div id='photoListMain2'></div>");
   $("#photoListMain2").css({
       "width": "530px",
       "margin": "0 48px 0 48px",
       "overflow": "hidden"
   });

   $("#photoListMain2 ul").jcarousel({
       buttonNextHTML: null,
       buttonPrevHTML: null,
       wrap: 'circular',
       animation: 500,
       scroll: 1,
       initCallback: mycarousel_initCallback2
   });

   fancyboxOptions($("ul.b-main-media-list a"));
   /* end main page media */

   /* media page */
   $("#screenshotsList").wrap("<div id='screenshotsList1'></div>");
   $("#screenshotsList1").css({
       "width": "527px",
       "margin": "0px 0px 0px 40px",
       "overflow": "hidden"
   });
   $("#screenshotsList1 ul").jcarousel({
       buttonNextHTML: null,
       buttonPrevHTML: null,
       wrap: 'circular',
       animation: 500,
       scroll: 1,
       initCallback: function(carousel) {
           $('#screenshotsNext').bind('click', function() {
               carousel.next();
               return false;
           });

           $('#screenshotsPrev').bind('click', function() {
               carousel.prev();
               return false;
           });
       }
   });

   fancyboxOptions($("#screenshotsList a"));

   $("#artList").wrap("<div id='artList1'></div>");
   $("#artList1").css({
       "width": "527px",
       "margin": "0px 0px 0px 40px",
       "overflow": "hidden"
   });
   $("#artList1 ul").jcarousel({
       buttonNextHTML: null,
       buttonPrevHTML: null,
       wrap: 'circular',
       animation: 500,
       scroll: 1,
       initCallback: function(carousel) {
           $('#artNext').bind('click', function() {
               carousel.next();
               return false;
           });

           $('#artPrev').bind('click', function() {
               carousel.prev();
               return false;
           });
       }
   });

   fancyboxOptions($("#artList a"));

   $("#wallList").wrap("<div id='wallList1'></div>");
   $("#wallList1").css({
       "width": "527px",
       "margin": "0px 0px 0px 40px",
       "overflow": "hidden"
   });
   $("#wallList1 ul").jcarousel({
       buttonNextHTML: null,
       buttonPrevHTML: null,
       wrap: 'circular',
       animation: 500,
       scroll: 1,
       initCallback: function(carousel) {
           $('#wallNext').bind('click', function() {
               carousel.next();
               return false;
           });

           $('#wallPrev').bind('click', function() {
               carousel.prev();
               return false;
           });
       }
   });

   fancyboxOptions($("#wallList a"));

   $("#videoList ul").jcarousel({
       buttonNextHTML: null,
       buttonPrevHTML: null,
       wrap: 'circular',
       animation: 500,
       scroll: 1,
       initCallback: function(carousel) {
           $('#videoNext').bind('click', function() {
               carousel.next();
               return false;
           });

           $('#videoPrev').bind('click', function() {
               carousel.prev();
               return false;
           });
       }
   });

   fancyboxVideoOptions($("#videoList a.fancybox-video"));
   fancyboxVideoOptions($("#vpop"));
   fancyboxOptions($("#land9scr a"));

   doSubmit = function() {
       $('#downform').submit()
   }

   var download = function(url) {

       var iframe;
       iframe = document.getElementById('dload');
       if (iframe === null) {
           iframe = document.createElement('iframe');
           iframe.id = 'dload';
           iframe.style.visibility = 'hidden';
           iframe.onLoad = setTimeout('doSubmit()', 1000);
           document.body.appendChild(iframe);
       }
       return iframe.src = url;
   };

   $('#downloadme').click(function() {
       NameCheck($('#name'));
       MailCheck($('#email'));
       PassCheck($('#pass'));
       var agree = typeof ($('#agreement').attr('checked'));
       if (agree == 'undefined') {
           $('#errorable').css('color', '#90020E');
           return false;
       }
       if (isNameValid && isEmailValid && isPassValid && agree == 'string') {
           download('http://update.royalquest.ru/rqlauncher.exe');
       }
       return false;
   });

   /* end media page */

   /* authorisation fields */
   var emptyEmail = 'email';
   var emptyPass = '......';
   var emailField = $('#editLogin');
   var passField = $('#editPassw');

   emailField.val(emptyEmail);
   passField.val(emptyPass);

   emailField.focus(function() {
       if (emailField.attr('value') == emptyEmail)
           emailField.attr('value', '');
   });

   emailField.blur(function() {
       if (isBlank(emailField.attr('value')))
           emailField.attr('value', emptyEmail);
   });

   passField.focus(function() {
       if (passField.attr('value') == emptyPass)
           passField.attr('value', '');
   });

   passField.blur(function() {
       if (isBlank(passField.attr('value')))
           passField.attr('value', emptyPass);
   });
   /* end authorisation fields */

   /* showcase main page */
   $("#showcaseMain ul").jcarousel({
       scroll: 1,
       initCallback: function(carousel) {
           $('#showcaseMain .dots div').bind('click', function() {
               carousel.scroll($.jcarousel.intval($(this).attr("item")));
               $('#showcaseMain .dots div').attr("class", "dot");
               $(this).attr("class", "dot-active");
               return false;
           });
       },
       buttonNextHTML: null,
       buttonPrevHTML: null
   });
   /* end showcase main page */

   /* showcase catalog page */
   $("#showcasePage ul").jcarousel({
       scroll: 1,
       initCallback: function(carousel) {
           $('#showcasePage .dots div').bind('click', function() {
               carousel.scroll($.jcarousel.intval($(this).attr("item")));
               $('#showcasePage .dots div').attr("class", "dot");
               $(this).attr("class", "dot-active");
               return false;
           });
       },
       buttonNextHTML: null,
       buttonPrevHTML: null
   });
   /* end showcase main page */

   /* main media menu */
   var mainMediaMenuOld = $("#mainMediaMenu li:first-child");
   $("#mainMediaMenu li").click(function() {
       if (mainMediaMenuOld) {
           mainMediaMenuOld.attr("class", "");
       }
       $(this).attr("class", "active");
       mainMediaMenuOld = $(this);
   });
   /* end main media menu */

   /* reg-auth-passw */
   $("#authSubscr, #authRules").fancycheck();

   /* var oldAuthMenu = "authMenuReg"; */
   /*$("#authMenuEnter, #authMenuPassw, #authMenuReg").click(function() {
     var t = $(this);
     var id = t.attr("id");
     $("#"+id+"Body").show();
     t.addClass("active");
     if (oldAuthMenu == id) return false;
     if (oldAuthMenu) {
       $("#"+oldAuthMenu+"Body").hide();
       $("#"+oldAuthMenu).removeClass("active");
     }
     oldAuthMenu = id;

     return false;
   })*/
   /* reg-auth-passw */
   $("div.b-main-news-item").slideNews();
   nelement = $("div.b-main-news-item");
   for (ni = 0; ni < 3; ni++) {
       ntype = typeof (nelement[ni]);
       if (ntype != 'undefined' && (typeof (nelement[ni].attributes != 'undefined'))) {
           nelement[ni].attributes[0].nodeValue = 'b-main-news-item bmni-open';
       }
   }
})

function dateValidate() {
   var date = $("#datepicker").val().toString();
   var matches = date.match(/^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))(T|\s)(([0-1][0-9])|(2[0-3])):([0-5][0-9]):([0-5][0-9])$/);
   if (matches == null) {
       alert('Некорректно заполнена дата. Формат ГГГГ-ММ-ДД ЧЧ:ММ:СС')
       return false;
   }

   return true;
}
