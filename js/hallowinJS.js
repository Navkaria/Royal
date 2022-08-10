/**
 * Created with JetBrains PhpStorm.
 * User: s.bolotaev
 * Date: 30.10.13
 * Time: 15:05
 * To change this template use File | Settings | File Templates.
 */
 $(document).ready(function() {
   /* Обложка для хэллоуина*/
   $('#hallowin').show();
   $('.b-header-nav').hover(function() {
       $('#hallowin').stop().animate({
           opacity: 0
       }, 'normal');
       $('.b-header-pumpkin').stop().animate({
           opacity: 0
       }, 'normal');
   });
   $('.b-header-nav').mouseleave(function() {
       $('#hallowin').stop().animate({
           opacity: 1
       }, 'normal');
       $('.b-header-pumpkin').stop().animate({
           opacity: 1
       }, 'normal');
   });
});
