define(['jquery', 'vex', 'vexDialog', 'hammer', 'animateCSS'], function($, vex, vexDialog) {
  console.log('loading index.');

  $('.inner').click(function() {
    $(this).find('.file-loader').show();
    $(this).removeClass('selected');
    $(this).find('a')[0].click();
  });

  var hammertime = $(".inner").hammer();


  hammertime.on('touch', function(ev) {
    $(this).addClass('selected');
  });

  hammertime.on('dragstart', function(ev) {
    ev.gesture.stopDetect(); // stop release event firing
    ev.preventDefault();
    $(this).removeClass('selected');
  });
});