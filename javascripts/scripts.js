$(document).ready(function() {

  /* Implementation of scroll-navigation */
  var navs = $('nav').find('li:not(.extern)');
  button = $('.button');
  myWindow = $(window);
  htmlBody = $('html,body');

  function goToByScroll(dataslide) {
    htmlBody.animate({
      scrollTop: $('section[data-slide="' + dataslide + '"]').offset().top - 50
    }, 2000, 'easeInOutQuint');
  }

  navs.click(function (e) {
    e.preventDefault();
    dataslide = $(this).attr('data-slide');
    goToByScroll(dataslide);
  });

  button.click(function (e) {
    e.preventDefault();
    dataslide = $(this).attr('data-slide');
    goToByScroll(dataslide);
  });


  /* Shows text descriptions of mission categories on hover */
  var oldColor = $('.goals').css('backgroundColor');
  $('.goals').hover(
    function() {
      $('div', this).animate({ opacity: 0.0 }, 'medium');
      $('p', this).animate({ opacity: 1.0 }, 'medium');
      $(this).animate({ backgroundColor: 'rgba(216, 79, 75, 0.8)' }, 'medium');
    },
    function() {
      $('div', this).animate({ opacity: 1.0 }, 'medium');
      $('p', this).animate({ opacity: 0.0 }, 'medium');
      $(this).animate({ backgroundColor: 'rgba(0, 0, 0, 0.2)' }, 'medium');
  });
  $('.operations').hover(
    function() {
      $('div', this).animate({ opacity: 0.1 }, 'medium');
      $('p', this).animate({ opacity: 1.0 }, 'medium');
      // $('h3', this).animate({ color: 'black' });
      $(this).animate({ backgroundColor: 'rgba(216, 79, 75, 1.0)' }, 'medium');
    },
    function() {
      $('div', this).animate({ opacity: 1.0 }, 'medium');
      $('p', this).animate({ opacity: 0.0 }, 'medium');
      // $('h3', this).animate({ color: 'white' });
      $(this).animate({ backgroundColor: 'rgba(0, 0, 0, 0.0)' }, 'medium');
  });
  $('.values').hover(
    function() {
      $('div', this).animate({ opacity: 0.1 }, 'medium');
      $('p', this).animate({ opacity: 1.0 }, 'medium');
      $(this).animate({ backgroundColor: 'rgba(6, 49, 164, 1.0)' }, 'medium');
    },
    function() {
      $('div', this).animate({ opacity: 1.0 }, 'medium');
      $('p', this).animate({ opacity: 0.0 }, 'medium');
      $(this).animate({ backgroundColor: 'rgba(0, 0, 0, 0.0)' }, 'medium');
  });

  /* Accordion */
  if($("#accordion").length > 0){
    $("#accordion").accordion({heightStyle: "content"});
  }
});