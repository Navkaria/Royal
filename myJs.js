$(document).ready(function() {
   $("#agreement").css({
       "left": "-10000px",
       "position": "absolute"
   });
   $("#agreement").attr("checked", "checked");
   $("#agreement").parent().addClass("bfc-check");
   $("#agreement").click(function() {
       var t = $(this);
       if (t.attr("checked")) {
           t.parent().removeClass("bfc-uncheck").addClass("bfc-check");
       } else {
           t.parent().removeClass("bfc-check").addClass("bfc-uncheck");
       }

   });
   $(".b-auth-error-place").css({
       "display": "none"
   });

   if ($('#name').val())
       NameCheck($('#name'));
   if ($('#email').val())
       MailCheck($('#email'));
   if ($('#pass').val())
       PassCheck($('#pass'));

   /* Обложка для хэллоуина
   $('#hallowin').show();
   $('.b-header-nav').hover(function(){
       $('#hallowin').stop().animate({ opacity: 0 }, 'normal');
       $('.b-header-pumpkin').stop().animate({ opacity: 0 }, 'normal');
   });
   $('.b-header-nav').mouseleave(function(){
       $('#hallowin').stop().animate({ opacity: 1 }, 'normal');
       $('.b-header-pumpkin').stop().animate({ opacity: 1 }, 'normal');
   });*/
});

isNameValid = false;
isEmailValid = false;
isPassValid = false;

function NameCheck(el) {
   var e = /^[a-zA-Z0-9]+$/i;
   var r = /^[а-яА-Я0-9]+$/i;

   var num = /^[0-9]+$/i;

   $(el).next('div').css("display", "none");
   $(el).parent().removeClass("errorr");
   $(el).removeClass("error");
   $(el).next('span').removeClass("good").removeClass("error");

   if ($(el).val().length < 6 || $(el).val().length > 32) {
       $(el).next('div').css("display", "block").html('Имя должно быть от 6 до 32').fadeIn(300);
       $(el).next('span').addClass("error").html('Имя должно быть от 6 до 32');
       $(el).parent().addClass("errorr");
       $(el).addClass("error");

       return;
   } else if ((r.test($(el).val()) == true && e.test($(el).val()) == true && num.test($(el).val()) == false) || (r.test($(el).val()) == false && e.test($(el).val()) == false)) {
       $(el).next('div').css("display", "block").html('Только русские или английские символы и цифры').fadeIn(300);
       $(el).next('span').addClass("error").html('Только русские или английские символы и цифры');
       $(el).parent().addClass("errorr");
       $(el).addClass("error");

       return;

   } else if (((r.test($(el).val()) == true) && (e.test($(el).val()) == false)) || ((r.test($(el).val()) == false) && (e.test($(el).val()) == true)) || ((num.test($(el).val()) == true))) {
       $.ajax({
           url: '/auth/ajaxNameCheck/' + encodeURI($(el).val()),
           dataType: "html",
           success: function(data) {

               if (data === '[false]') {
                   $(el).next('div').css("display", "block").html('Имя занято').fadeIn(300);
                   $(el).next('span').addClass("error").html('Имя занято');
                   $(el).parent().addClass("errorr");
                   $(el).addClass("error");
                   return;
               } else {
                   $(el).next('span').addClass("good").html('Хорошо');
                   isNameValid = true;
               }
           }
       });
   }
}

function PassCheck(el) {
   var e = /^[a-zA-Z0-9-]+$/i;
   var r = /[а-яА-Я]/;
   $(el).next('div').css("display", "none");
   $(el).parent().removeClass("errorr");
   $(el).removeClass("error");
   $(el).next('span').removeClass("good").removeClass("error");
   if ($(el).val().length < 6 || $(el).val().length > 31) {
       $(el).next('div').css("display", "block").html('Пароль должен быть от 6 до 32 символов').fadeIn(300);
       $(el).next('span').addClass("error").html('Пароль должен быть от 6 до 32 символов');
       $(el).parent().addClass("errorr");
       $(el).addClass("error");
       return;

   } else {
       if (r.test($(el).val())) {
           $(el).next('div').css("display", "block").html('Пароль не должен содержать русские буквы').fadeIn(300);
           $(el).next('span').addClass("error").html('Пароль не должен содержать русские буквы');
           $(el).parent().addClass("errorr");
           $(el).addClass("error");
           return;
       }
       if (e.test($(el).val()) == false) {
           $(el).next('div').css("display", "block").html('Пароль от 6 до 32 символов, a-z, 0-9, тире').fadeIn(300);
           $(el).next('span').addClass("error").html('Пароль от 6 до 32 символов, a-z, 0-9, тире');
           $(el).parent().addClass("errorr");
           $(el).addClass("error");
           return;

       } else {
           $(el).next('span').addClass("good").html('Хорошо');
           isPassValid = true;
       }
   }
}

function MailCheck(el) {
   $(el).next('div').css("display", "none");
   $(el).parent().removeClass("errorr");
   $(el).removeClass("error");
   $(el).next('span').removeClass("good").removeClass("error");
   var filter = /^([a-zA-Z0-9+_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   if (filter.test($(el).val()) === false) {
       $(el).next('div').css("display", "block").html('Введите корректный E-mail').fadeIn(300);
       $(el).next('span').addClass("error").html('Введите корректный E-mail');
       $(el).parent().addClass("errorr");
       $(el).addClass("error");
   } else {
       $.ajax({
           url: '/auth/ajaxEmailCheck/' + $(el).val(),
           dataType: "html",
           success: function(data) {

               if (data == '[false]') {

                   $(el).next('div').css("display", "block").html('E-mail занят').fadeIn(300);
                   $(el).next('span').addClass("error").html('E-mail занят');
                   $(el).parent().addClass("errorr");
                   $(el).addClass("error");
               }
               else {
                   $(el).next('span').addClass("good").html('Хорошо');
                   isEmailValid = true;
               }
           }
       });
   }
}
$(function() {

   if (typeof $('#gallery4 a').lightBox == 'function')
       $('#gallery4 a').lightBox();

   var artButton = $("#artButton");
   var videoButton = $("#videoButton");
   var artContainer = $("#artContainer");
   var videoContainer = $("#videoContainer");

   artButton.click(function() {
       var t = $(this);
       if (t.hasClass("b-title-noactive")) {
           t.removeClass("b-title-noactive");
           videoButton.addClass("b-title-noactive");
           artContainer.show();
           videoContainer.hide();
       }
   })

   videoButton.click(function() {
       var t = $(this);
       if (t.hasClass("b-title-noactive")) {
           t.removeClass("b-title-noactive");
           artButton.addClass("b-title-noactive");
           artContainer.hide();
           videoContainer.show();
       }
   })

   $("#gallery").css("overflow", "default");
   $("#gallery ul").jcarousel({
       buttonNextHTML: '<div class="next" id="galleryNext"></div>',
       buttonPrevHTML: '<div class="prev" id="galleryPrev"></div>',
       wrap: 'circular',
       animation: 500,
       scroll: 1
   });
});

function ErrorHide(el) {
   $(el).next('div').css("display", "none")
}

function showServerInfo(tag, id) {
   $("." + tag + "_list").removeClass('ServerNamesActive');
   $("#" + tag + "Btn_" + id).addClass('ServerNamesActive');
   $("." + tag + "_div").hide();
   $("#" + tag + "_div_" + id).show();
}
