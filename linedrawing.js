 /* ---- ANIME JS ----- */
 var lineDrawingDesktop = anime({
    targets: '#lineDrawingDesktop .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInQuad',
    duration: 3000,
    delay: function(el, i) { return i * 100 },
    direction: 'alternate',
    loop: true
  });