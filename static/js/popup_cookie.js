window.addEventListener("load", function () {
   // скролл вертикальный с тенью 
   $('.scroll-profile-content').bind('scroll',shadow_scroll);
   function shadow_scroll(e) {
       var elem = $(e.currentTarget);
       $(elem).closest('.shadow-scroll').removeClass('bottom').removeClass('top');
       if (elem.scrollTop() == 0) {
           $(elem).closest('.shadow-scroll').removeClass('bottom').addClass('top');
       }
       if (elem[0].scrollHeight - elem.scrollTop() == elem.outerHeight()) {
           $(elem).closest('.shadow-scroll').removeClass('top').addClass('bottom');
       }
   }

   // обработчик события "крестик"
   $( "body" ).on("click", ".close", function () {
       var parentSort = $( this ).closest( ".pointer" ); // ищем родителя с классом popup
       $( this ).closest( ".pointer" ).removeClass("active"); // удаление класс текущему (нажатому)
       scrolling = false;
   });

   /* закрыть */
   function closeCookie(elem) {
       setTimeout(() => $( elem ).removeClass("active"), 500); // удаление класс
       scrolling = false;
   }

   /* открыть */
   function openCookie(elem) {
       $( elem ).addClass("active"); // добавить класс
   }

   /* чекнуть все checkbox */
   function checkCookie() {
       var listCookie = $('#listCookie');
       listCookie.find('input[type=checkbox]').each(function() {
           this.checked = true; 
       });
   }
   function save_cookie() {
       cookie_settings = {
           "checkbox01": 1,
           "checkbox02": 1,
           "checkbox03": 1,
           "checkbox04": 1,
           "checkbox05": 1,
           "checkbox06": 1,
           "checkbox07": 1,
           "checkbox08": 1,
       };
       if ($('#popupCookie').hasClass('active')) {
           cookie_settings = {
               "checkbox01": $('#checkbox01').prop("checked") ?1:0,
               "checkbox02": $('#checkbox02').prop("checked") ?1:0,
               "checkbox03": $('#checkbox03').prop("checked") ?1:0,
               "checkbox04": $('#checkbox04').prop("checked") ?1:0,
               "checkbox05": $('#checkbox05').prop("checked") ?1:0,
               "checkbox06": $('#checkbox06').prop("checked") ?1:0,
               "checkbox07": $('#checkbox07').prop("checked") ?1:0,
               "checkbox08": $('#checkbox08').prop("checked") ?1:0,
           };
       }
       cookie_str = JSON.stringify(cookie_settings);

       var oneYearFromNow = new Date();
       oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
       var dateString = oneYearFromNow.toGMTString();
       var cookieString = "cookie_success="+ cookie_str +'; expires='+ dateString;
       document.cookie = cookieString;
       location.reload();
   }

   /* Одобрить все в попапе */
   $("#checkeCookie").click(function () {
       var parentPointer = $( this ).closest( ".pointer" ); // ищем родителя с классом pointer
       checkCookie();
       save_cookie();
       closeCookie(parentPointer);
   });

   /* Настройки файлов cookie */
   $("#settingsCookie").click(function () {
       openCookie($('#popupCookie'));
       closeCookie($('#cookie'));
       scrolling = true;
   });

   /* Одобрить все в куках */
   $("#approveeCookie").click(function () {
       checkCookie();
       save_cookie();
       closeCookie($('#cookie'));
   });

   /* Подтвердить выбор */
   $("#closeCookie").click(function () {
       var parentPointer = $( this ).closest( ".pointer" ); 
       save_cookie();
       closeCookie(parentPointer);
   });
});