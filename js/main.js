 /* ---- ANIMSITION ----- */

    $(".animsition").animsition({
      inClass: 'fade-in-right',
      outClass: 'fade-out-left',
      inDuration: 900,
      outDuration: 1000,
      linkElement: 'a:not([target="_blank"]):not([href^="#"])',
      loading: true,
      loadingParentElement: 'body', //animsition wrapper element
      loadingClass: 'animsition-loading',
      loadingInner: '', // e.g '<img src="loading.svg" />'
      timeout: false,
      timeoutCountdown: 5000,
      onLoadEvent: true,
      browser: [ 'animation-duration', '-webkit-animation-duration'],
      // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
      // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
      overlay : false,
      overlayClass : 'animsition-overlay-slide',
      overlayParentElement : 'body',
      transition: function(url){ window.location.href = url; }
    });


 /* ---- ANIME JS ----- */

var lineDrawing = anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInQuad',
  duration: 3000,
  delay: function(el, i) { return i * 100 },
  direction: 'alternate',
  loop: true
})

var lineDrawingDesktop = anime({
  targets: '#lineDrawingDesktop .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInQuad',
  duration: 3000,
  delay: function(el, i) { return i * 100 },
  direction: 'alternate',
  loop: true
});

 /* ---- ACCORDION ----- */

 $( function() {
   //   $( "#dialog" ).dialog();
   // });

   $( "#dialog" ).dialog({
     position: { my: "left+80", at: "center", of: window }
   });
 });

$( function() {
   $( "#accordion" ).accordion({
     heightStyle: "content",
     active:false,
     collapsible: true
   });
 } );

 /* ------ DIALOG BOX -----*/

  /* IFRAME - Ref: http://jsfiddle.net/8wLm42ns/2/ */


  // A $( document ).ready() block.
  $( document ).ready(function() {
    $('.loadiframe').on('click', function(){
        var src = $(this).data('src'),
            width = $(this).data('width'),
            height = $(this).data('height');
        $('#frame').css({
            width: width,
            height: height
        }).attr('src', src);
    });
  });




/* ------------------- SLIDESHOW --------------------*/

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-white";
}
