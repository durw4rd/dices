var main = function() {

  TweenMax.from($('.heading'), 1.5, {delay: 1, y: "-100", opacity: 0, ease: Elastic.easeOut});

  var hideFaces = function() {
    $('.one').hide();
    $('.two').hide();
    $('.three').hide();
    $('.four').hide();
    $('.five').hide();
    $('.six').hide();
  };
  hideFaces();

  $('.throw-button').click(function() {
    TweenMax.to($('.thrown'), 0.2, {x: '150px', opacity: 0});
    TweenMax.to($('.thrown'), 0.1, {delay: 0.2, x: '0px'});

    setTimeout(function() {
      $('*').removeClass('thrown');
      $('*').removeClass('selected-dice');
      hideFaces();

      var i = Math.random();
      console.log(i);
      if(i <= 0.16) {
        $('.one').addClass('thrown');
        // $('.one').show();
        $('.one-thumb').addClass('selected-dice');
      } else if(i > 0.16 && i <= 0.33) {
        $('.two').addClass('thrown');
        // $('.two').show();
        $('.two-thumb').addClass('selected-dice');
      } else if(i > 0.33 && i <= 0.5) {
        $('.three').addClass('thrown');
        // $('.three').show();
        $('.three-thumb').addClass('selected-dice');
      } else if(i > 0.5 && i <= 0.66) {
        $('.four').addClass('thrown');
        // $('.four').show();
        $('.four-thumb').addClass('selected-dice');
      } else if(i > 0.66 && i <= 0.83) {
        $('.five').addClass('thrown');
        // $('.five').show();
        $('.five-thumb').addClass('selected-dice');
      } else {
        $('.six').addClass('thrown');
        // $('.six').show();
        $('.six-thumb').addClass('selected-dice');
      };
      $('.thrown').show();
      TweenMax.from($('.thrown'), 0.3, {x: '-150px'});
      TweenMax.to($('.thrown'), 0.3, {opacity: 1});
    }, 300);

  });

  if ($(window).width() < 1024) {
     $('.thumb').hide();

     $('.heading').addClass('heading-mobile');
     $('.face').addClass('face-mobile');
     $('footer').addClass('footer-mobile');
  } else {
    $('.thumb').show();
  };
}

$(document).ready(main);
