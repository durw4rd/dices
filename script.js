var main = function() {
  $('.one').hide();
  $('.two').hide();
  $('.three').hide();
  $('.four').hide();
  $('.five').hide();
  $('.six').hide();

  $('.x').click(function() {
    // $(this).removeClass('x');
    // $(this).addClass('one');
    $('*').removeClass('red-background');
    var i = Math.random();
    console.log(i);
    if(i <= 0.16) {
      $('.one').show(600);
      $('.one-thumb').addClass('red-background');
      $('.two').hide();
      $('.three').hide();
      $('.four').hide();
      $('.five').hide();
      $('.six').hide();
    } else if(i > 0.16 && i <= 0.33) {
      $('.one').hide();
      $('.two').show(600);
      $('.two-thumb').addClass('red-background');
      $('.three').hide();
      $('.four').hide();
      $('.five').hide();
      $('.six').hide();
    } else if(i > 0.33 && i <= 0.5) {
      $('.one').hide();
      $('.two').hide();
      $('.three').show(600);
      $('.three-thumb').addClass('red-background');
      $('.four').hide();
      $('.five').hide();
      $('.six').hide();
    } else if(i > 0.5 && i <= 0.66) {
      $('.one').hide();
      $('.two').hide();
      $('.three').hide();
      $('.four').show(600);
      $('.four-thumb').addClass('red-background');
      $('.five').hide();
      $('.six').hide();
    } else if(i > 0.66 && i <= 0.83) {
      $('.one').hide();
      $('.two').hide();
      $('.three').hide();
      $('.four').hide();
      $('.five').show(600);
      $('.five-thumb').addClass('red-background');
      $('.six').hide();
    } else {
      $('.one').hide();
      $('.two').hide();
      $('.three').hide();
      $('.four').hide();
      $('.five').hide();
      $('.six').show(600);
      $('.six-thumb').addClass('red-background');
    }
  });
  if ($(window).width() < 600) {
     $('.thumb').hide();
  } else {
    $('.thumb').show();
  };
}

$(document).ready(main);
