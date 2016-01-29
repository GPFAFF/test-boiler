/*var slideBox = (function(){
  
   if (!document.querySelector || !('classList' in document.body)) {
      return false;
  }
  
  //setting variables 
  var box = document.querySelector('.slider');
      next = box.querySelector('.next');
      previous = box.querySelector('.previous');
      items = box.querySelectorAll(".content li");
      counter = 0;
      amount = items.length;
      current = items[0];
      box.classList.add('.active'); 

  

  //Navigate Function 
  function navigate(direction) {
    current.classList.remove('current');
    counter = counter + direction;
    
    if (direction === -1 && counter < 0){
      counter = amount - 1;
    }
    if (direction === 1 && !items[counter]){
      counter = 0;
    }
    current = items[counter];
    current.classList.add('current');
  }
  next.addEventListener('click', function(){
    navigate(1);
  });
  previous.addEventListener('click', function(){
    navigate(-1);
  });
  navigate(0);
})();
*/

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

console.log("Yep");