var $play = $('.play'),
    $detail  = $('.detail'),
    $movie = $('.movie', $detail),
    $close = $('.close');

document.getElementById("navigateButton").addEventListener("click", function() {
      window.location.href = 'https://bellscholar.github.io/bellscholar/time-capsule/childhood-favorites/';
  });

document.getElementById("navigateButton2").addEventListener("click", function() {
    window.location.href = 'https://bellscholar.github.io/bellscholar/time-capsule/personal-favorites/';
});

document.getElementById("navigateButton3").addEventListener("click", function() {
  window.location.href = 'https://bellscholar.github.io/bellscholar/time-capsule/family-friends-favorites/';
});

document.getElementById("navigateButton4").addEventListener("click", function() {
  window.location.href = 'https://bellscholar.github.io/bellscholar/time-capsule/personal-recommendation/';
});

$('.movies .movie').click(function(){
  $movie.html($(this).html());
  $play.appendTo($movie);

  $poster = $('.poster', this).addClass('active');

  $('.poster', $detail).css({
    top: $poster.position().top,
    left: $poster.position().left,
    width: $poster.width(),
    height: $poster.height()
  }).data({
    top: $poster.position().top,
    left: $poster.position().left,
    width: $poster.width(),
    height: $poster.height()
  })

  $detail.show();

  $('.poster', $detail).delay(10).queue(function(next) {
    $detail.addClass('ready');

    next();
  }).delay(100).queue(function(next){
    $(this).css({
      top: '-10%',
      left: '-6%',
      width: 266,
      height: 400
    });
    next();
  })
})


/*--------------------
Close
--------------------*/
function close(){
  console.log('asd');
  $p = $('.detail .poster');
  console.log($p)
  $p.css({
    top: $p.data('top'),
    left: $p.data('left'),
    width: $p.data('width'),
    height: $p.data('height'),
  })
  $detail.removeClass('ready').delay(500).queue(function(next){
    $(this).hide();
    $poster.removeClass('active');
    next();
  });
}

$close.click(close);
$('body').click(function(e){
  $p = $(e.target).parents();
  if ($p.is('.app')){
    return false;
  } else {
    close();
  }
})


